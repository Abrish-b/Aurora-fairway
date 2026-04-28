"use client";

import dynamic from "next/dynamic";
import {
  useCallback,
  useMemo,
  useState,
  type CSSProperties,
  type PointerEvent,
  type ReactNode,
} from "react";
import type { AuroraLightPosition, AuroraSunSceneProps } from "./AuroraSunScene";

const AuroraSunScene = dynamic<AuroraSunSceneProps>(
  () => import("./AuroraSunScene").then((mod) => mod.default),
  {
    loading: () => (
      <div
        aria-hidden="true"
        className="h-full w-full bg-[radial-gradient(circle_at_78%_42%,rgba(255,184,19,0.12),transparent_34%)]"
      />
    ),
    ssr: false,
  },
);

type AuroraHeroStyle = CSSProperties & {
  "--aurora-light-x": string;
  "--aurora-light-y": string;
  "--aurora-light-x-percent": string;
  "--aurora-light-y-percent": string;
  "--aurora-light-strength": string;
  "--aurora-light-bg-alpha": string;
  "--aurora-light-soft-alpha": string;
  "--aurora-light-sheen-alpha": string;
  "--aurora-light-sheen-offset": string;
  "--aurora-light-headline-alpha": string;
  "--aurora-light-card-alpha": string;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function AuroraHeroLighting({ children }: { children: ReactNode }) {
  const [light, setLight] = useState<AuroraLightPosition>({
    x: 0.72,
    y: 0.42,
    strength: 0.48,
  });
  const [mouseX, setMouseX] = useState(0.74);

  const handleLightMove = useCallback((nextLight: AuroraLightPosition) => {
    setLight((previous) => {
      if (
        Math.abs(previous.x - nextLight.x) < 0.004 &&
        Math.abs(previous.y - nextLight.y) < 0.004 &&
        Math.abs(previous.strength - nextLight.strength) < 0.012
      ) {
        return previous;
      }

      return nextLight;
    });
  }, []);

  const handlePointerMove = useCallback((event: PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const nextMouseX = clamp((event.clientX - rect.left) / rect.width, 0, 1);

    setMouseX((previous) =>
      Math.abs(previous - nextMouseX) < 0.004 ? previous : nextMouseX,
    );
  }, []);

  const style = useMemo<AuroraHeroStyle>(() => {
    const xPercent = `${(light.x * 100).toFixed(2)}%`;
    const yPercent = `${(light.y * 100).toFixed(2)}%`;
    const strength = light.strength;

    return {
      "--aurora-light-x": light.x.toFixed(3),
      "--aurora-light-y": light.y.toFixed(3),
      "--aurora-light-x-percent": xPercent,
      "--aurora-light-y-percent": yPercent,
      "--aurora-light-strength": strength.toFixed(3),
      "--aurora-light-bg-alpha": (strength * 0.2).toFixed(3),
      "--aurora-light-soft-alpha": (strength * 0.12).toFixed(3),
      "--aurora-light-sheen-alpha": (strength * 0.08).toFixed(3),
      "--aurora-light-sheen-offset": `${((light.x - 0.5) * 18).toFixed(2)}%`,
      "--aurora-light-headline-alpha": (strength * 0.64).toFixed(3),
      "--aurora-light-card-alpha": (strength * 0.16).toFixed(3),
      background:
        "radial-gradient(circle at var(--aurora-light-x-percent) var(--aurora-light-y-percent), rgba(255, 184, 19, var(--aurora-light-bg-alpha)) 0%, rgba(255, 176, 0, var(--aurora-light-soft-alpha)) 18%, transparent 42%), radial-gradient(ellipse at 18% 18%, rgba(92, 143, 176, 0.14) 0%, transparent 42%), linear-gradient(118deg, #03070f 0%, #07111f 46%, #02040a 100%)",
    };
  }, [light]);

  return (
    <section
      id="top"
      className="relative isolate min-h-[calc(100vh-1px)] overflow-hidden border-b border-[#E8C97A]/15 bg-[#050914] text-[#F8F5ED]"
      onPointerMove={handlePointerMove}
      style={style}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),transparent_32%,rgba(0,0,0,0.24)_100%)]" />
        <div
          className="absolute -inset-x-[12%] inset-y-0 bg-[linear-gradient(110deg,transparent_0%,rgba(255,255,255,0.12)_46%,transparent_68%)] opacity-70 mix-blend-screen blur-xl transition-transform duration-200"
          style={{
            opacity: "var(--aurora-light-sheen-alpha)",
            transform: "translate3d(var(--aurora-light-sheen-offset), 0, 0)",
          }}
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-95"
      >
        <AuroraSunScene mouseX={mouseX} onLightMove={handleLightMove} />
      </div>

      <div className="relative z-10">{children}</div>
    </section>
  );
}
