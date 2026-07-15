"use client";

const GOLD = "#D6A84F";

export default function GoldOrb({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 600"
      aria-hidden
      className={className}
      style={{ overflow: "visible" }}
    >
      <defs>
        <pattern id="gold-orb-dots" width="13" height="13" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.15" fill={GOLD} />
        </pattern>
        <radialGradient id="gold-orb-shell" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#000" />
          <stop offset="34%" stopColor="#000" />
          <stop offset="58%" stopColor="#fff" />
          <stop offset="82%" stopColor="#fff" />
          <stop offset="100%" stopColor="#000" />
        </radialGradient>
        <radialGradient id="gold-orb-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={GOLD} stopOpacity="0.16" />
          <stop offset="55%" stopColor={GOLD} stopOpacity="0.05" />
          <stop offset="100%" stopColor={GOLD} stopOpacity="0" />
        </radialGradient>
        <mask id="gold-orb-mask">
          <rect width="600" height="600" fill="url(#gold-orb-shell)" />
        </mask>
      </defs>

      <circle cx="300" cy="300" r="300" fill="url(#gold-orb-glow)" />
      <g className="gold-orb-spin" style={{ transformOrigin: "300px 300px" }} mask="url(#gold-orb-mask)">
        <circle cx="300" cy="300" r="290" fill="url(#gold-orb-dots)" />
      </g>

      <style jsx>{`
        .gold-orb-spin {
          animation: goldOrbSpin 90s linear infinite;
        }
        @keyframes goldOrbSpin {
          to {
            transform: rotate(360deg);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .gold-orb-spin {
            animation: none;
          }
        }
      `}</style>
    </svg>
  );
}
