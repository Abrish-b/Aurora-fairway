import type { ComponentType, CSSProperties } from "react";
import {
  BadgeCheck,
  FileText,
  Fingerprint,
  ScanLine,
  SlidersHorizontal,
  Users,
} from "lucide-react";

type IconType = ComponentType<{
  className?: string;
  strokeWidth?: number;
  style?: CSSProperties;
}>;

const GOLD = "#C89B3C";
const GOLD_HOVER = "#B8892F";
const INK = "#101823";
const GRAY_BODY = "#6F6F6F";

type Node = {
  icon: IconType;
  label: string;
  sub: string;
  highlight?: boolean;
  /** Position on the SVG coord system (0-1200 wide, 0-360 tall). */
  cx: number;
  cy: number;
};

const NODES: Node[] = [
  { icon: Users, label: "Borrower", sub: "Holds verifiable credentials", cx: 80, cy: 90 },
  { icon: FileText, label: "Loan Request", sub: "Published to base market", cx: 304, cy: 220 },
  { icon: Fingerprint, label: "Identity Proof Metadata", sub: "Attached as structured tx metadata", highlight: true, cx: 528, cy: 90 },
  { icon: ScanLine, label: "Compliance Indexer", sub: "Parses, validates, exposes API", highlight: true, cx: 752, cy: 220 },
  { icon: SlidersHorizontal, label: "Lender Filter", sub: "Issuer · proof · jurisdiction", cx: 976, cy: 90 },
  { icon: BadgeCheck, label: "Verified Market View", sub: "Eligible loans surface to lenders", cx: 1140, cy: 220 },
];

/* SVG path connecting nodes in sequence, weaving up/down. */
const FLOW_PATH = NODES.reduce((acc, node, i) => {
  if (i === 0) return `M ${node.cx} ${node.cy}`;
  const prev = NODES[i - 1];
  const midX = (prev.cx + node.cx) / 2;
  return `${acc} C ${midX} ${prev.cy}, ${midX} ${node.cy}, ${node.cx} ${node.cy}`;
}, "");

export default function FlowDiagram() {
  return (
    <div className="relative mt-12 overflow-hidden rounded-[14px] border border-[#1B384C]/12 bg-gradient-to-b from-white to-[#fffaf2] p-5 shadow-[0_22px_70px_rgba(33,42,50,0.07)] sm:p-8">
      {/* Soft golden vein behind highlighted nodes */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(200,155,60,0.10), transparent 70%)",
        }}
      />

      {/* SVG: visible on md+ as the connective canvas */}
      <div className="relative hidden md:block">
        <svg
          viewBox="0 0 1220 320"
          className="h-auto w-full"
          aria-hidden
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="sundownFlowGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#1B384C" stopOpacity="0.18" />
              <stop offset="40%" stopColor={GOLD} stopOpacity="0.7" />
              <stop offset="60%" stopColor={GOLD} stopOpacity="0.7" />
              <stop offset="100%" stopColor="#1B384C" stopOpacity="0.18" />
            </linearGradient>
            <radialGradient id="sundownTokenGrad">
              <stop offset="0%" stopColor="#fff3d8" />
              <stop offset="55%" stopColor={GOLD} />
              <stop offset="100%" stopColor={GOLD_HOVER} />
            </radialGradient>
          </defs>

          {/* Base track */}
          <path
            d={FLOW_PATH}
            fill="none"
            stroke="url(#sundownFlowGrad)"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          {/* Animated traveling dash on top */}
          <path
            d={FLOW_PATH}
            fill="none"
            stroke={GOLD}
            strokeWidth="1.6"
            strokeLinecap="round"
            opacity="0.85"
            className="sundown-dash-travel"
          />

          {/* Three proof tokens, evenly offset along the path */}
          <circle r="6" fill="url(#sundownTokenGrad)" className="sundown-token-pulse">
            <animateMotion dur="6s" repeatCount="indefinite" path={FLOW_PATH} />
          </circle>
          <circle r="5" fill="url(#sundownTokenGrad)" opacity="0.75" className="sundown-token-pulse">
            <animateMotion dur="6s" begin="-2s" repeatCount="indefinite" path={FLOW_PATH} />
          </circle>
          <circle r="4" fill="url(#sundownTokenGrad)" opacity="0.55" className="sundown-token-pulse">
            <animateMotion dur="6s" begin="-4s" repeatCount="indefinite" path={FLOW_PATH} />
          </circle>

          {/* Node groups */}
          {NODES.map((node) => (
            <g key={node.label} transform={`translate(${node.cx}, ${node.cy})`}>
              {node.highlight ? (
                <>
                  <circle r="34" fill={GOLD} opacity="0.06" />
                  <circle r="26" fill="#fff3d8" />
                  <circle r="26" fill="none" stroke={GOLD} strokeOpacity="0.55" strokeWidth="1.2" />
                </>
              ) : (
                <>
                  <circle r="32" fill="white" />
                  <circle r="32" fill="none" stroke="#1B384C" strokeOpacity="0.16" strokeWidth="1.2" />
                </>
              )}
            </g>
          ))}
        </svg>

        {/* Labels overlaid in HTML for clean typography */}
        <div className="pointer-events-none absolute inset-0">
          {NODES.map((node, i) => {
            const xPct = (node.cx / 1220) * 100;
            const yPct = (node.cy / 320) * 100;
            const labelBelow = node.cy < 160;
            return (
              <div
                key={node.label}
                className="absolute"
                style={{
                  left: `${xPct}%`,
                  top: `${yPct}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {/* Icon centered on node */}
                <div className="flex h-[52px] w-[52px] items-center justify-center">
                  <node.icon
                    className="h-5 w-5"
                    strokeWidth={1.7}
                    style={{ color: node.highlight ? GOLD : "#1B384C" }}
                  />
                </div>
                {/* Caption below or above */}
                <div
                  className="absolute left-1/2 w-[164px] -translate-x-1/2 text-center"
                  style={{
                    [labelBelow ? "top" : "bottom"]: "62px",
                  } as CSSProperties}
                >
                  <p
                    className="text-[10px] font-bold uppercase tracking-[0.16em]"
                    style={{ color: node.highlight ? GOLD_HOVER : "#7a5a1a" }}
                  >
                    Step {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-0.5 text-[13px] font-semibold leading-4" style={{ color: INK }}>
                    {node.label}
                  </p>
                  <p className="mt-1 text-[11px] leading-4" style={{ color: GRAY_BODY }}>
                    {node.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile: stacked simplified list */}
      <ol className="relative grid gap-3 md:hidden">
        {NODES.map((node, i) => (
          <li
            key={node.label}
            className={[
              "relative rounded-[10px] border bg-white p-4",
              node.highlight
                ? "border-[#C89B3C]/55 shadow-[0_10px_30px_rgba(200,155,60,0.16)]"
                : "border-[#1B384C]/12 shadow-[0_6px_18px_rgba(33,42,50,0.05)]",
            ].join(" ")}
          >
            <div className="flex items-center gap-3">
              <span
                className={[
                  "flex h-9 w-9 items-center justify-center rounded-full",
                  node.highlight ? "bg-[#fff3d8]" : "bg-[#1B384C]/8",
                ].join(" ")}
              >
                <node.icon
                  className="h-4 w-4"
                  strokeWidth={1.6}
                  style={{ color: node.highlight ? GOLD : "#1B384C" }}
                />
              </span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: node.highlight ? GOLD_HOVER : "#7a5a1a" }}>
                  Step {String(i + 1).padStart(2, "0")}
                </p>
                <p className="text-[14px] font-semibold leading-5 text-[#101823]">
                  {node.label}
                </p>
                <p className="mt-0.5 text-[12px] leading-5" style={{ color: GRAY_BODY }}>
                  {node.sub}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>

      <p
        className="relative mt-8 text-center text-[12px] font-semibold uppercase tracking-[0.2em]"
        style={{ color: GOLD_HOVER }}
      >
        Proofs ride beside the transaction · Base contracts unchanged
      </p>
    </div>
  );
}
