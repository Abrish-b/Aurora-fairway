"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Icosahedron } from "@react-three/drei";
import type * as THREE from "three";

function useScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const h = document.documentElement;
        const scrollable = h.scrollHeight - h.clientHeight;
        if (scrollable <= 0) return setP(0);
        setP(Math.min(1, Math.max(0, h.scrollTop / scrollable)));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  return p;
}

/**
 * Watches whichever sections opt into the morning sun by carrying
 * data-maleda-sun (e.g. the Final CTA). Returns true if any such
 * section is meaningfully in view.
 */
function useDarkSectionInView() {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-maleda-sun]"),
    );
    if (targets.length === 0) return;

    const visible = new Set<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && e.intersectionRatio > 0.12) {
            visible.add(e.target);
          } else {
            visible.delete(e.target);
          }
        }
        setInView(visible.size > 0);
      },
      { threshold: [0, 0.12, 0.3, 0.6] },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);
  return inView;
}

function Sun({ progress }: { progress: number }) {
  const mesh = useRef<THREE.Mesh>(null);
  const ring = useRef<THREE.Mesh>(null);
  const targetY = useRef(0);
  const targetX = useRef(0);
  const targetScale = useRef(1);

  useFrame((_, delta) => {
    // Sun "rises" as user nears the end of the page.
    const local = Math.min(1, Math.max(0, (progress - 0.5) / 0.5));
    targetY.current = -0.6 + local * 0.9;
    targetX.current = 0;
    targetScale.current = 0.85 + local * 0.5;

    if (mesh.current) {
      mesh.current.position.y += (targetY.current - mesh.current.position.y) * 0.08;
      mesh.current.position.x += (targetX.current - mesh.current.position.x) * 0.08;
      const s = targetScale.current;
      mesh.current.scale.x += (s - mesh.current.scale.x) * 0.08;
      mesh.current.scale.y += (s - mesh.current.scale.y) * 0.08;
      mesh.current.scale.z += (s - mesh.current.scale.z) * 0.08;
      mesh.current.rotation.y += delta * 0.14;
      mesh.current.rotation.x += delta * 0.05;
    }

    if (ring.current) {
      ring.current.position.y = mesh.current?.position.y ?? 0;
      ring.current.position.x = mesh.current?.position.x ?? 0;
      ring.current.rotation.z += delta * 0.2;
      const s = (mesh.current?.scale.x ?? 1) * 1.55;
      ring.current.scale.x = s;
      ring.current.scale.y = s;
    }
  });

  return (
    <group>
      <ambientLight intensity={0.45} />
      <directionalLight position={[3, 4, 4]} intensity={0.55} color="#FFE6B8" />
      <pointLight position={[2, 2, 3]} intensity={1.1} color="#FFC676" />

      <mesh ref={ring}>
        <ringGeometry args={[1.05, 1.12, 64]} />
        <meshBasicMaterial color="#C8923D" transparent opacity={0.55} />
      </mesh>

      <Icosahedron ref={mesh} args={[1, 1]}>
        <meshStandardMaterial
          color="#E6B273"
          emissive="#C8923D"
          emissiveIntensity={1.1}
          flatShading
          roughness={0.55}
          metalness={0.15}
        />
      </Icosahedron>
    </group>
  );
}

export default function SunStageInner() {
  const progress = useScrollProgress();
  const inDarkSection = useDarkSectionInView();
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(m.matches);
    const fn = () => setReduced(m.matches);
    m.addEventListener?.("change", fn);
    return () => m.removeEventListener?.("change", fn);
  }, []);

  if (reduced) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[40]"
      style={{
        // Additive glow over dark backgrounds.
        mixBlendMode: "screen",
        opacity: inDarkSection ? 0.95 : 0,
        transition: "opacity 700ms cubic-bezier(0.22,1,0.36,1)",
        willChange: "opacity",
      }}
    >
      <Canvas
        dpr={[1, 1.6]}
        camera={{ position: [0, 0, 4.5], fov: 38 }}
        gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
        style={{ background: "transparent" }}
      >
        <Sun progress={progress} />
      </Canvas>
    </div>
  );
}
