"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import * as THREE from "three";

export type AuroraLightPosition = {
  x: number;
  y: number;
  strength: number;
};

export type AuroraSunSceneProps = {
  onLightMove?: (position: AuroraLightPosition) => void;
  scrollProgress?: number;
};

const SUN_LIMITS = {
  xMin: 0.25,
  xMax: 3.05,
  yMin: -2.25,
  yMax: 1.12,
};

const INITIAL_SUN_POSITION = new THREE.Vector3(2.18, -1.82, -0.7);

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

const planetFragmentShader = `
  uniform float uTime;
  varying vec3 vNormal;
  varying vec3 vWorldPosition;

  void main() {
    vec3 n = normalize(vNormal);
    vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
    float edge = pow(1.0 - max(dot(n, viewDirection), 0.0), 2.85);
    float horizon = smoothstep(-0.12, 0.52, n.y);
    float slowBand = sin(vWorldPosition.x * 1.6 + vWorldPosition.y * 3.1 + uTime * 0.035) * 0.5 + 0.5;

    vec3 night = vec3(0.006, 0.014, 0.028);
    vec3 navy = vec3(0.018, 0.052, 0.09);
    vec3 color = mix(night, navy, slowBand * 0.18);
    color += vec3(0.95, 0.53, 0.12) * edge * horizon * 0.72;
    color += vec3(1.0, 0.75, 0.32) * edge * edge * horizon * 0.38;

    gl_FragColor = vec4(color, 1.0);
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
  onLightMove,
  reducedMotion,
  scrollProgress = 0,
}: AuroraSunSceneProps & { reducedMotion: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const sunMaterialRef = useRef<THREE.ShaderMaterial>(null);
  const shadowMaterialRef = useRef<THREE.ShaderMaterial>(null);
  const targetPosition = useRef(INITIAL_SUN_POSITION.clone());
  const visiblePosition = useRef(INITIAL_SUN_POSITION.clone());
  const framePosition = useRef(INITIAL_SUN_POSITION.clone());
  const lastEmit = useRef<AuroraLightPosition | null>(null);
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
        strength: reducedMotion
          ? 0.3
          : clamp(0.2 + scrollProgress * 0.58 + position.y * 0.04, 0.18, 0.78),
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
    [onLightMove, reducedMotion, scrollProgress],
  );

  useEffect(() => {
    emitLightPosition(INITIAL_SUN_POSITION);
  }, [emitLightPosition]);

  useFrame(({ clock }, delta) => {
    const target = targetPosition.current;
    const wideViewport = viewport.width > 7;
    const tabletViewport = viewport.width > 5;
    const easedProgress = THREE.MathUtils.smoothstep(scrollProgress, 0, 1);
    const baseX = wideViewport ? 2.12 : tabletViewport ? 1.38 : 0.78;
    const startY = wideViewport ? -1.86 : tabletViewport ? -1.45 : -1.1;
    const endY = wideViewport ? 0.58 : tabletViewport ? 0.6 : 0.5;

    target.x = clamp(baseX, SUN_LIMITS.xMin, SUN_LIMITS.xMax);
    target.y = clamp(
      THREE.MathUtils.lerp(startY, endY, easedProgress),
      SUN_LIMITS.yMin,
      SUN_LIMITS.yMax,
    );
    target.z = -0.74;

    const idleY = reducedMotion ? 0 : Math.sin(clock.elapsedTime * 0.32) * 0.018;
    framePosition.current.set(target.x, target.y + idleY, target.z);
    visiblePosition.current.set(
      THREE.MathUtils.damp(visiblePosition.current.x, framePosition.current.x, reducedMotion ? 4.2 : 2.55, delta),
      THREE.MathUtils.damp(visiblePosition.current.y, framePosition.current.y, reducedMotion ? 4.8 : 3.25, delta),
      THREE.MathUtils.damp(visiblePosition.current.z, framePosition.current.z, reducedMotion ? 4.8 : 3.25, delta),
    );

    const group = groupRef.current;
    if (group) {
      const targetScale = wideViewport ? 0.84 : tabletViewport ? 0.72 : 0.56;
      group.position.copy(visiblePosition.current);
      group.scale.setScalar(
        THREE.MathUtils.damp(group.scale.x, targetScale, 3.2, delta),
      );
      group.rotation.y += delta * (reducedMotion ? 0.018 : 0.08);
      group.rotation.x = visiblePosition.current.y * 0.04;
      group.rotation.z = -visiblePosition.current.x * 0.016;
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

function StarField({ reducedMotion }: { reducedMotion: boolean }) {
  const pointsRef = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const count = 560;
    const values = new Float32Array(count * 3);

    for (let index = 0; index < count; index += 1) {
      const seed = index + 1;
      const xRaw = Math.sin(seed * 12.9898) * 43758.5453;
      const yRaw = Math.sin(seed * 78.233) * 19341.113;
      const zRaw = Math.sin(seed * 39.425) * 9713.77;
      const x = xRaw - Math.floor(xRaw);
      const y = yRaw - Math.floor(yRaw);
      const z = zRaw - Math.floor(zRaw);

      values[index * 3] = (x * 2 - 1) * 6.2;
      values[index * 3 + 1] = (y * 2 - 1) * 3.2;
      values[index * 3 + 2] = -2.2 - z * 3.2;
    }

    return values;
  }, []);

  useFrame(({ clock }) => {
    if (pointsRef.current && !reducedMotion) {
      pointsRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.025) * 0.025;
      pointsRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.018) * 0.012;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#d8ecff"
        depthWrite={false}
        opacity={0.68}
        size={0.015}
        sizeAttenuation
        transparent
      />
    </points>
  );
}

function PlanetForeground({ reducedMotion }: { reducedMotion: boolean }) {
  const planetRef = useRef<THREE.Group>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const viewport = useThree((state) => state.viewport);
  const planetUniforms = useMemo(
    () => ({
      uTime: { value: 0 },
    }),
    [],
  );

  useFrame(({ clock }, delta) => {
    const wideViewport = viewport.width > 7;
    const tabletViewport = viewport.width > 5;
    const targetScale = wideViewport ? 4.95 : tabletViewport ? 3.85 : 2.95;
    const targetY = wideViewport ? -4.35 : tabletViewport ? -3.52 : -2.75;
    const targetX = wideViewport ? 0.55 : tabletViewport ? 0.25 : 0.08;

    if (planetRef.current) {
      planetRef.current.position.x = THREE.MathUtils.damp(
        planetRef.current.position.x,
        targetX,
        3,
        delta,
      );
      planetRef.current.position.y = THREE.MathUtils.damp(
        planetRef.current.position.y,
        targetY,
        3,
        delta,
      );
      planetRef.current.scale.setScalar(
        THREE.MathUtils.damp(planetRef.current.scale.x, targetScale, 3, delta),
      );
      planetRef.current.rotation.z += delta * (reducedMotion ? 0.001 : 0.006);
    }

    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.elapsedTime;
    }
  });

  return (
    <group ref={planetRef} position={[0.55, -4.35, 0.18]} scale={4.95}>
      <mesh>
        <sphereGeometry args={[1, 128, 96]} />
        <shaderMaterial
          ref={materialRef}
          args={[
            {
              fragmentShader: planetFragmentShader,
              uniforms: planetUniforms,
              vertexShader: sunVertexShader,
            },
          ]}
        />
      </mesh>
      <mesh scale={1.012}>
        <sphereGeometry args={[1, 96, 64]} />
        <meshBasicMaterial
          blending={THREE.AdditiveBlending}
          color="#e8a733"
          depthWrite={false}
          opacity={0.055}
          side={THREE.BackSide}
          transparent
        />
      </mesh>
    </group>
  );
}

export default function AuroraSunScene({
  onLightMove,
  scrollProgress,
}: AuroraSunSceneProps) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <Canvas
      aria-hidden="true"
      camera={{ fov: 38, position: [0, 0, 6.8] }}
      className="pointer-events-none h-full w-full bg-transparent"
      dpr={[1, 1.55]}
      gl={{
        alpha: true,
        antialias: true,
        premultipliedAlpha: false,
        powerPreference: "high-performance",
      }}
      onCreated={({ gl }) => {
        gl.setClearColor("#000000", 0);
      }}
    >
      <StarField reducedMotion={reducedMotion} />
      <SunObject
        onLightMove={onLightMove}
        reducedMotion={reducedMotion}
        scrollProgress={scrollProgress}
      />
      <PlanetForeground reducedMotion={reducedMotion} />
      <EffectComposer multisampling={0}>
        <Bloom
          intensity={reducedMotion ? 0.2 : 0.72}
          luminanceSmoothing={0.72}
          luminanceThreshold={0.28}
          mipmapBlur
        />
      </EffectComposer>
    </Canvas>
  );
}
