"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { KeyboardControls, useKeyboardControls } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import * as THREE from "three";

export type AuroraLightPosition = {
  x: number;
  y: number;
  strength: number;
};

export type AuroraSunSceneProps = {
  mouseX?: number;
  onLightMove?: (position: AuroraLightPosition) => void;
};

type SunControl = "left" | "right" | "up" | "down";

const SUN_LIMITS = {
  xMin: 0.35,
  xMax: 3.55,
  yMin: -1.2,
  yMax: 1.35,
};

const INITIAL_SUN_POSITION = new THREE.Vector3(2.55, 0.04, 0);

const sunVertexShader = `
  varying vec3 vNormal;
  varying vec3 vWorldPosition;

  void main() {
    vNormal = normalize(normalMatrix * normal);
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPosition.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`;

const sunSurfaceFragmentShader = `
  uniform float uTime;
  varying vec3 vNormal;
  varying vec3 vWorldPosition;

  float grain(vec3 p) {
    return sin(p.x * 10.5 + uTime * 0.32) *
      sin(p.y * 8.0 - uTime * 0.22) *
      sin(p.z * 7.0 + uTime * 0.16);
  }

  void main() {
    vec3 n = normalize(vNormal);
    vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
    vec3 keyLight = normalize(vec3(-0.62, 0.34, 0.72));
    float light = dot(n, keyLight);
    float terminator = smoothstep(-0.34, 0.88, light);
    float rim = pow(1.0 - max(dot(n, viewDirection), 0.0), 2.2);
    float bands = sin(vWorldPosition.y * 7.0 + sin(vWorldPosition.x * 2.7) + uTime * 0.18) * 0.5 + 0.5;
    float cells = grain(vWorldPosition * 1.25) * 0.5 + 0.5;

    vec3 umber = vec3(0.47, 0.22, 0.03);
    vec3 amber = vec3(0.86, 0.43, 0.06);
    vec3 gold = vec3(1.0, 0.66, 0.16);
    vec3 pearl = vec3(1.0, 0.78, 0.34);

    vec3 color = mix(umber, amber, terminator);
    color = mix(color, gold, bands * 0.22 + cells * 0.16);
    color = mix(color, pearl, pow(terminator, 2.4) * 0.24);
    color += vec3(1.0, 0.42, 0.07) * rim * 0.34;

    gl_FragColor = vec4(color, 1.0);
  }
`;

const sunShadowFragmentShader = `
  varying vec3 vNormal;
  varying vec3 vWorldPosition;

  void main() {
    vec3 n = normalize(vNormal);
    float crescent = smoothstep(0.05, 0.86, -n.x * 0.92 - n.y * 0.18 + 0.12);
    float softEdge = 1.0 - smoothstep(0.58, 0.98, abs(n.z));
    float alpha = crescent * softEdge * 0.28;

    gl_FragColor = vec4(0.02, 0.015, 0.008, alpha);
  }
`;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function usePrefersReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleChange = () => setReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return reducedMotion;
}

function SunObject({
  mouseX = 0.74,
  onLightMove,
  reducedMotion,
}: AuroraSunSceneProps & { reducedMotion: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const sunMaterialRef = useRef<THREE.ShaderMaterial>(null);
  const shadowMaterialRef = useRef<THREE.ShaderMaterial>(null);
  const targetPosition = useRef(INITIAL_SUN_POSITION.clone());
  const visiblePosition = useRef(INITIAL_SUN_POSITION.clone());
  const framePosition = useRef(INITIAL_SUN_POSITION.clone());
  const keyboardOffset = useRef(new THREE.Vector2(0, 0));
  const lastEmit = useRef<AuroraLightPosition | null>(null);
  const [, getControls] = useKeyboardControls<SunControl>();
  const viewport = useThree((state) => state.viewport);

  const sunUniforms = useMemo(
    () => ({
      uTime: { value: 0 },
    }),
    [],
  );

  const shadowUniforms = useMemo(
    () => ({
      uTime: { value: 0 },
    }),
    [],
  );

  const emitLightPosition = useCallback(
    (position: THREE.Vector3) => {
      if (!onLightMove) {
        return;
      }

      const x =
        (position.x - SUN_LIMITS.xMin) / (SUN_LIMITS.xMax - SUN_LIMITS.xMin);
      const y =
        1 - (position.y - SUN_LIMITS.yMin) / (SUN_LIMITS.yMax - SUN_LIMITS.yMin);
      const normalized = {
        x: clamp(x, 0, 1),
        y: clamp(y, 0, 1),
        strength: reducedMotion ? 0.34 : clamp(0.5 + position.x * 0.08, 0.42, 0.72),
      };
      const previous = lastEmit.current;

      if (
        !previous ||
        Math.abs(previous.x - normalized.x) > 0.006 ||
        Math.abs(previous.y - normalized.y) > 0.006 ||
        Math.abs(previous.strength - normalized.strength) > 0.018
      ) {
        lastEmit.current = normalized;
        onLightMove(normalized);
      }
    },
    [onLightMove, reducedMotion],
  );

  useEffect(() => {
    emitLightPosition(INITIAL_SUN_POSITION);
  }, [emitLightPosition]);

  useFrame(({ clock }, delta) => {
    const controls = getControls();
    const movementSpeed = reducedMotion ? 0.28 : 0.58;
    const movement = movementSpeed * delta;
    const target = targetPosition.current;
    const offset = keyboardOffset.current;
    const wideViewport = viewport.width > 7;
    const tabletViewport = viewport.width > 5;
    const rangeMin = wideViewport ? 1.72 : tabletViewport ? 1.02 : 0.62;
    const rangeMax = wideViewport ? 3.02 : tabletViewport ? 1.92 : 1.28;
    const baseY = wideViewport ? 0.02 : tabletViewport ? 0.34 : 0.78;

    if (controls.left) offset.x -= movement;
    if (controls.right) offset.x += movement;
    if (controls.up) offset.y += movement;
    if (controls.down) offset.y -= movement;

    offset.x = clamp(offset.x, -0.38, 0.38);
    offset.y = clamp(offset.y, -0.36, 0.36);

    const mouseDrivenX = THREE.MathUtils.lerp(rangeMin, rangeMax, mouseX);
    target.x = clamp(mouseDrivenX + offset.x, rangeMin - 0.48, rangeMax + 0.48);
    target.y = clamp(baseY + offset.y, SUN_LIMITS.yMin, SUN_LIMITS.yMax);

    const idleY = reducedMotion ? 0 : Math.sin(clock.elapsedTime * 0.42) * 0.045;
    framePosition.current.set(target.x, target.y + idleY, target.z);
    visiblePosition.current.set(
      THREE.MathUtils.damp(visiblePosition.current.x, framePosition.current.x, reducedMotion ? 4.2 : 2.55, delta),
      THREE.MathUtils.damp(visiblePosition.current.y, framePosition.current.y, reducedMotion ? 4.8 : 3.25, delta),
      THREE.MathUtils.damp(visiblePosition.current.z, framePosition.current.z, reducedMotion ? 4.8 : 3.25, delta),
    );

    const group = groupRef.current;
    if (group) {
      const targetScale = wideViewport ? 1.58 : tabletViewport ? 1.2 : 0.9;
      group.position.copy(visiblePosition.current);
      group.scale.setScalar(
        THREE.MathUtils.damp(group.scale.x, targetScale, 3.2, delta),
      );
      group.rotation.y += delta * (reducedMotion ? 0.025 : 0.095);
      group.rotation.x = visiblePosition.current.y * 0.08;
      group.rotation.z = -visiblePosition.current.x * 0.035;
    }

    if (coreRef.current) {
      coreRef.current.rotation.y += delta * (reducedMotion ? 0.05 : 0.28);
      coreRef.current.rotation.x += delta * (reducedMotion ? 0.02 : 0.11);
    }

    if (glowRef.current) {
      const pulse = reducedMotion ? 1 : 1 + Math.sin(clock.elapsedTime * 1.15) * 0.035;
      glowRef.current.scale.setScalar(pulse);
    }

    if (sunMaterialRef.current) {
      sunMaterialRef.current.uniforms.uTime.value = clock.elapsedTime;
    }

    if (shadowMaterialRef.current) {
      shadowMaterialRef.current.uniforms.uTime.value = clock.elapsedTime;
    }

    emitLightPosition(visiblePosition.current);
  });

  return (
    <>
      <ambientLight intensity={0.16} />
      <directionalLight position={[-4, 3, 5]} intensity={0.72} color="#b8d7e8" />

      <group ref={groupRef}>
        <pointLight
          color="#ffb000"
          distance={12}
          intensity={reducedMotion ? 12 : 22}
          decay={1.6}
        />
        <mesh ref={glowRef} scale={1.92}>
          <sphereGeometry args={[1.18, 64, 64]} />
          <meshBasicMaterial
            blending={THREE.AdditiveBlending}
            color="#ff9f1a"
            depthWrite={false}
            opacity={reducedMotion ? 0.045 : 0.09}
            transparent
          />
        </mesh>
        <mesh scale={2.64}>
          <sphereGeometry args={[1.08, 64, 64]} />
          <meshBasicMaterial
            blending={THREE.AdditiveBlending}
            color="#ffb000"
            depthWrite={false}
            opacity={reducedMotion ? 0.018 : 0.034}
            side={THREE.BackSide}
            transparent
          />
        </mesh>
        <mesh ref={coreRef}>
          <sphereGeometry args={[1, 128, 128]} />
          <shaderMaterial
            ref={sunMaterialRef}
            args={[
              {
                fragmentShader: sunSurfaceFragmentShader,
                toneMapped: false,
                uniforms: sunUniforms,
                vertexShader: sunVertexShader,
              },
            ]}
          />
        </mesh>
        <mesh scale={1.012}>
          <sphereGeometry args={[1, 96, 96]} />
          <shaderMaterial
            ref={shadowMaterialRef}
            args={[
              {
                depthWrite: false,
                fragmentShader: sunShadowFragmentShader,
                transparent: true,
                uniforms: shadowUniforms,
                vertexShader: sunVertexShader,
              },
            ]}
          />
        </mesh>
        <mesh rotation={[Math.PI / 2.62, 0.34, 0.08]} scale={1.12}>
          <torusGeometry args={[1.03, 0.006, 8, 192]} />
          <meshBasicMaterial
            blending={THREE.AdditiveBlending}
            color="#ffe8b2"
            depthWrite={false}
            opacity={reducedMotion ? 0.1 : 0.22}
            transparent
          />
        </mesh>
        <mesh rotation={[Math.PI / 1.9, -0.18, -0.52]} scale={1.18}>
          <torusGeometry args={[1.04, 0.0045, 8, 192]} />
          <meshBasicMaterial
            blending={THREE.AdditiveBlending}
            color="#fff1c8"
            depthWrite={false}
            opacity={reducedMotion ? 0.065 : 0.14}
            transparent
          />
        </mesh>
      </group>
    </>
  );
}

export default function AuroraSunScene({ mouseX, onLightMove }: AuroraSunSceneProps) {
  const reducedMotion = usePrefersReducedMotion();
  const controls = useMemo(
    () => [
      { name: "left" as const, keys: ["ArrowLeft", "KeyA", "a", "A"] },
      { name: "right" as const, keys: ["ArrowRight", "KeyD", "d", "D"] },
      { name: "up" as const, keys: ["ArrowUp", "KeyW", "w", "W"] },
      { name: "down" as const, keys: ["ArrowDown", "KeyS", "s", "S"] },
    ],
    [],
  );

  return (
    <KeyboardControls map={controls}>
      <Canvas
        aria-hidden="true"
        camera={{ fov: 38, position: [0, 0, 6.8] }}
        className="pointer-events-none h-full w-full bg-transparent"
        dpr={[1, 1.55]}
        gl={{ alpha: true, antialias: true, premultipliedAlpha: false, powerPreference: "high-performance" }}
        onCreated={({ gl }) => {
          gl.setClearColor("#000000", 0);
        }}
      >
        <SunObject mouseX={mouseX} onLightMove={onLightMove} reducedMotion={reducedMotion} />
        <EffectComposer multisampling={0}>
          <Bloom
            intensity={reducedMotion ? 0.2 : 0.72}
            luminanceSmoothing={0.72}
            luminanceThreshold={0.28}
            mipmapBlur
          />
        </EffectComposer>
      </Canvas>
    </KeyboardControls>
  );
}
