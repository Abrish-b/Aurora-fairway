/**
 * Animated dawn sky over a stylized cityscape silhouette.
 * Pure SVG + CSS keyframes — no canvas, no external image dependencies.
 * The sky cycles between pre-dawn deep teal/forest, mid-dawn warm gold,
 * and morning ivory. The cityscape uses varied-height building blocks
 * suggestive of a developing city skyline.
 */
export default function EthiopianDawnSky() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Layered sky — base gradient (animated) */}
      <div className="maleda-sky-base absolute inset-0" />

      {/* Sun glow disc */}
      <div className="maleda-sky-sun absolute" />

      {/* Stars / specks fading near top */}
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="dawn-haze" cx="50%" cy="58%" r="60%">
            <stop offset="0%" stopColor="#F4C57A" stopOpacity="0.55" />
            <stop offset="40%" stopColor="#C8F031" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#0E0E0E" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="cityscape-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0B2A21" />
            <stop offset="100%" stopColor="#041A14" />
          </linearGradient>
        </defs>

        {/* Soft haze layer */}
        <rect width="100%" height="100%" fill="url(#dawn-haze)" />

        {/* Subtle horizon band */}
        <rect x="0" y="62%" width="100%" height="1" fill="rgba(200,240,49,0.45)" />
      </svg>

      {/* Distant skyline (back layer) */}
      <Cityscape
        layer="back"
        opacity={0.55}
        baseY={64}
        scale={0.82}
        offset={-2}
      />

      {/* Foreground cityscape */}
      <Cityscape layer="front" opacity={1} baseY={62} scale={1} />

      {/* Local styles — sky animation + cityscape window twinkle */}
      <style>{`
        .maleda-sky-base {
          background: linear-gradient(
            180deg,
            #052E25 0%,
            #0B3D31 14%,
            #2A4F3E 32%,
            #6F5A36 52%,
            #C28D44 72%,
            #E3B469 86%,
            #F4D69C 100%
          );
          animation: maledaSkyShift 22s ease-in-out infinite alternate;
        }
        @keyframes maledaSkyShift {
          0% {
            filter: brightness(0.92) saturate(1.0);
          }
          100% {
            filter: brightness(1.06) saturate(1.08);
          }
        }
        .maleda-sky-sun {
          width: 220px;
          height: 220px;
          left: 60%;
          bottom: 32%;
          transform: translate(-50%, 50%);
          background: radial-gradient(
            circle at 50% 50%,
            rgba(255, 222, 152, 0.95) 0%,
            rgba(244, 198, 122, 0.65) 32%,
            rgba(200, 240, 49, 0.35) 55%,
            transparent 78%
          );
          border-radius: 9999px;
          animation: maledaSunRise 22s ease-in-out infinite alternate;
          filter: blur(0.5px);
        }
        @keyframes maledaSunRise {
          0% {
            transform: translate(-50%, 110%) scale(0.85);
            opacity: 0.65;
          }
          100% {
            transform: translate(-50%, 26%) scale(1.08);
            opacity: 1;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .maleda-sky-base,
          .maleda-sky-sun {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}

function Cityscape({
  layer,
  opacity,
  baseY,
  scale,
  offset = 0,
}: {
  layer: "front" | "back";
  opacity: number;
  baseY: number; // viewport %
  scale: number;
  offset?: number;
}) {
  // Building heights — varied to suggest a developing skyline:
  // mix of low-rise residential and a few mid-rise towers (Addis Ababa
  // feel). Heights as % of total viewport.
  const buildings: { w: number; h: number; cap?: "flat" | "step" | "antenna" }[] =
    layer === "front"
      ? [
          { w: 5.2, h: 8 },
          { w: 4.1, h: 11, cap: "step" },
          { w: 3.6, h: 9 },
          { w: 5.8, h: 14, cap: "step" },
          { w: 3.4, h: 8 },
          { w: 4.5, h: 13 },
          { w: 6.8, h: 18, cap: "antenna" }, // mid-rise tower
          { w: 3.2, h: 10 },
          { w: 4.0, h: 12, cap: "step" },
          { w: 5.4, h: 16 },
          { w: 3.6, h: 9 },
          { w: 4.2, h: 11 },
          { w: 6.4, h: 20, cap: "antenna" }, // mid-rise tower
          { w: 3.4, h: 10 },
          { w: 5.0, h: 13, cap: "step" },
          { w: 4.0, h: 9 },
          { w: 3.8, h: 11 },
          { w: 5.6, h: 15, cap: "step" },
          { w: 3.2, h: 8 },
          { w: 4.8, h: 12 },
        ]
      : [
          { w: 6.0, h: 6 },
          { w: 5.0, h: 8 },
          { w: 4.5, h: 7 },
          { w: 6.2, h: 9, cap: "step" },
          { w: 5.4, h: 7 },
          { w: 4.8, h: 10 },
          { w: 6.8, h: 11, cap: "step" },
          { w: 5.2, h: 8 },
          { w: 4.6, h: 7 },
          { w: 6.4, h: 12, cap: "step" },
          { w: 5.0, h: 8 },
          { w: 4.4, h: 7 },
          { w: 6.6, h: 10 },
          { w: 5.2, h: 8 },
          { w: 4.8, h: 9, cap: "step" },
        ];

  // Compute x positions with small gaps
  let x = 0 + offset;
  const positioned = buildings.map((b, i) => {
    const startX = x;
    x += b.w + 0.2;
    return { ...b, startX, i };
  });

  return (
    <svg
      className="absolute inset-x-0 bottom-0 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      style={{ opacity }}
    >
      <g
        fill="url(#cityscape-grad)"
        transform={`scale(${scale}, 1) translate(0, 0)`}
      >
        {positioned.map((b) => {
          const top = baseY - b.h;
          return (
            <g key={`${layer}-${b.i}`}>
              <rect
                x={b.startX}
                y={top}
                width={b.w - 0.1}
                height={b.h}
              />
              {b.cap === "step" && (
                <rect
                  x={b.startX + 0.6}
                  y={top - 1.2}
                  width={Math.max(b.w - 1.3, 0.8)}
                  height={1.2}
                />
              )}
              {b.cap === "antenna" && (
                <>
                  <rect
                    x={b.startX + b.w / 2 - 0.08}
                    y={top - 3}
                    width={0.16}
                    height={3}
                  />
                  <circle
                    cx={b.startX + b.w / 2}
                    cy={top - 3.2}
                    r={0.25}
                    fill="#C8F031"
                    className="maleda-sky-antenna-dot"
                  />
                </>
              )}
              {/* Lit windows — sparse warm specks */}
              {layer === "front" &&
                b.h >= 9 &&
                Array.from({ length: Math.floor(b.h / 3) }).map((_, wi) => (
                  <rect
                    key={wi}
                    x={b.startX + 0.4 + (wi % 2) * 0.9}
                    y={top + 1 + wi * 2}
                    width="0.45"
                    height="0.55"
                    fill="#F4D69C"
                    opacity={0.85}
                    className="maleda-sky-window"
                    style={{ animationDelay: `${(b.i * 0.4 + wi * 0.3) % 4}s` }}
                  />
                ))}
            </g>
          );
        })}
      </g>
      <style>{`
        .maleda-sky-window {
          animation: maledaWindow 4.5s ease-in-out infinite;
        }
        @keyframes maledaWindow {
          0%, 100% { opacity: 0.35; }
          50%      { opacity: 0.95; }
        }
        .maleda-sky-antenna-dot {
          animation: maledaAntenna 1.8s ease-in-out infinite;
        }
        @keyframes maledaAntenna {
          0%, 100% { opacity: 0.4; }
          50%      { opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .maleda-sky-window,
          .maleda-sky-antenna-dot {
            animation: none !important;
          }
        }
      `}</style>
    </svg>
  );
}
