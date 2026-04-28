"use client";

import dynamic from "next/dynamic";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
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
  const sectionRef = useRef<HTMLElement>(null);
  const [light, setLight] = useState<AuroraLightPosition>({
    x: 0.68,
    y: 0.74,
    strength: 0.22,
  });
  const [scrollProgress, setScrollProgress] = useState(0);

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

  useEffect(() => {
    let frameId = 0;

    const updateProgress = () => {
      frameId = 0;
      const section = sectionRef.current;

      if (!section) {
        return;
      }

      const rect = section.getBoundingClientRect();
      const travel = Math.max(rect.height * 0.62, 1);
      const nextProgress = clamp(-rect.top / travel, 0, 1);

      setScrollProgress((previous) =>
        Math.abs(previous - nextProgress) < 0.003 ? previous : nextProgress,
      );
    };

    const requestUpdate = () => {
      if (frameId === 0) {
        frameId = window.requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
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
      ref={sectionRef}
      className="relative isolate min-h-[calc(100vh-1px)] overflow-hidden border-b border-[#E8C97A]/15 bg-[#050914] text-[#F8F5ED]"
      style={style}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),transparent_32%,rgba(0,0,0,0.24)_100%)]" />
        <div
          className="absolute inset-0 opacity-45"
          style={{
            backgroundImage:
              "radial-gradient(circle at 6% 26%, rgba(216,236,255,0.72) 0 1px, transparent 1.4px), radial-gradient(circle at 14% 11%, rgba(216,236,255,0.52) 0 1px, transparent 1.4px), radial-gradient(circle at 27% 18%, rgba(255,218,151,0.42) 0 1px, transparent 1.4px), radial-gradient(circle at 38% 9%, rgba(216,236,255,0.62) 0 1px, transparent 1.4px), radial-gradient(circle at 57% 15%, rgba(216,236,255,0.48) 0 1px, transparent 1.4px), radial-gradient(circle at 66% 10%, rgba(255,218,151,0.38) 0 1px, transparent 1.4px), radial-gradient(circle at 78% 23%, rgba(216,236,255,0.56) 0 1px, transparent 1.4px), radial-gradient(circle at 93% 18%, rgba(216,236,255,0.5) 0 1px, transparent 1.4px), radial-gradient(circle at 21% 58%, rgba(216,236,255,0.44) 0 1px, transparent 1.4px), radial-gradient(circle at 45% 72%, rgba(255,218,151,0.36) 0 1px, transparent 1.4px), radial-gradient(circle at 72% 64%, rgba(216,236,255,0.5) 0 1px, transparent 1.4px), radial-gradient(circle at 89% 72%, rgba(255,218,151,0.32) 0 1px, transparent 1.4px)",
          }}
        />
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
        <AuroraSunScene onLightMove={handleLightMove} scrollProgress={scrollProgress} />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 z-[1] h-[62vw] w-[166vw] -translate-x-1/2 rounded-[50%] border-t border-[#E8C97A]/18 bg-[radial-gradient(ellipse_at_50%_0%,rgba(232,167,51,0.075)_0%,rgba(19,47,64,0.36)_6%,#020711_20%,#01030a_100%)] shadow-[0_-36px_135px_rgba(232,167,51,0.16)] md:h-[58vw] md:w-[158vw]"
        style={{ top: "clamp(660px, 76vh, 800px)" }}
      />
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute z-[2] h-[54vh] w-[116%]"
        preserveAspectRatio="none"
        style={{ left: "-8%", right: "-8%", top: "clamp(620px, 72vh, 760px)" }}
        viewBox="0 0 1440 420"
      >
        <path
          d="M-140 420V78C230 2 894 -2 1580 84V420Z"
          fill="#01030a"
          fillOpacity="0.9"
        />
        <path
          d="M-140 78C230 2 894 -2 1580 84"
          fill="none"
          stroke="#E8C97A"
          strokeOpacity="0.13"
          strokeWidth="18"
        />
        <path
          d="M-140 78C230 2 894 -2 1580 84"
          fill="none"
          stroke="#E8C97A"
          strokeOpacity="0.46"
          strokeWidth="1.4"
        />
      </svg>

      <div className="relative z-10">{children}</div>
    </section>
  );
}
