type Props = {
  intensity?: number;
  showSunArcs?: boolean;
  className?: string;
  variant?: "light" | "dark";
};

/**
 * Ethiopian woven-geometry triangles + sparse Finnish grid +
 * optional gold sunrise arcs. Variant lets the same component
 * render legibly on light (ivory) or dark (forest) backgrounds.
 */
export default function CulturalPattern({
  intensity = 0.06,
  showSunArcs = false,
  className = "",
  variant = "light",
}: Props) {
  const triStroke = variant === "light" ? "#063B2E" : "#D6A84F";
  const gridStroke = variant === "light" ? "#063B2E" : "#F7F1E6";

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id={`maleda-weave-${variant}`}
            x="0"
            y="0"
            width="48"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 28 L24 0 L48 28 Z M24 0 L24 28"
              fill="none"
              stroke={triStroke}
              strokeOpacity={intensity * (variant === "light" ? 1.6 : 4)}
              strokeWidth="0.6"
            />
          </pattern>
          <linearGradient id={`maleda-weave-fade-${variant}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#000" stopOpacity="0" />
            <stop offset="50%" stopColor="#000" stopOpacity="1" />
            <stop offset="100%" stopColor="#000" stopOpacity="0" />
          </linearGradient>
          <mask id={`maleda-weave-mask-${variant}`}>
            <rect width="100%" height="100%" fill={`url(#maleda-weave-fade-${variant})`} />
          </mask>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill={`url(#maleda-weave-${variant})`}
          mask={`url(#maleda-weave-mask-${variant})`}
          style={{ opacity: intensity * 2.5 }}
        />
      </svg>

      <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id={`maleda-grid-${variant}`}
            x="0"
            y="0"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 0 L120 0 M0 0 L0 120"
              fill="none"
              stroke={gridStroke}
              strokeOpacity={intensity * (variant === "light" ? 0.9 : 2)}
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#maleda-grid-${variant})`} />
      </svg>

      {showSunArcs && (
        <svg
          className="absolute inset-x-0 bottom-0 h-[70%] w-full"
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMax meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id={`maleda-sun-glow-${variant}`} cx="50%" cy="100%" r="60%">
              <stop offset="0%" stopColor="#D6A84F" stopOpacity="0.32" />
              <stop offset="40%" stopColor="#D6A84F" stopOpacity="0.10" />
              <stop offset="100%" stopColor="#D6A84F" stopOpacity="0" />
            </radialGradient>
          </defs>
          <ellipse cx="600" cy="640" rx="700" ry="440" fill={`url(#maleda-sun-glow-${variant})`} />
          {[260, 340, 420, 510].map((r, i) => (
            <ellipse
              key={r}
              cx="600"
              cy="640"
              rx={r * 1.6}
              ry={r}
              fill="none"
              stroke="#D6A84F"
              strokeOpacity={0.20 - i * 0.04}
              strokeWidth="0.8"
            />
          ))}
        </svg>
      )}
    </div>
  );
}
