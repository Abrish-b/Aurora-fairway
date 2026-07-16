"use client";

import { useState } from "react";
import { Banknote, Building2, Landmark, Sun, Users } from "lucide-react";

const GOLD = "#C8F031";
const IVORY = "#F2EDDF";
const IVORY_DIM = "rgba(242,237,223,0.62)";
const IVORY_MUTED = "rgba(242,237,223,0.42)";
const DIVIDER = "rgba(242,237,223,0.12)";

type NodeKey = "capital" | "aurora" | "lender" | "borrowers" | "public";

type Labels = {
  capital: { label: string; copy: string };
  aurora: { label: string; copy: string };
  lender: { label: string; copy: string };
  borrowers: { label: string; copy: string };
  public: { label: string; copy: string };
  hint: string;
  flowLabel: string;
  oversightLabel: string;
};

export default function LenderEcosystemMap({ labels }: { labels: Labels }) {
  const [active, setActive] = useState<NodeKey>("lender");

  const nodes: Record<NodeKey, { key: NodeKey; cx: number; cy: number; icon: typeof Sun }> = {
    capital:   { key: "capital",   cx: 110, cy: 200, icon: Banknote },
    aurora:    { key: "aurora",    cx: 320, cy: 200, icon: Sun },
    lender:    { key: "lender",    cx: 530, cy: 200, icon: Building2 },
    borrowers: { key: "borrowers", cx: 740, cy: 200, icon: Users },
    public:    { key: "public",    cx: 425, cy: 60,  icon: Landmark },
  };

  const oversightLinks: [NodeKey, NodeKey][] = [
    ["public", "aurora"],
    ["public", "lender"],
  ];

  const activeNode = nodes[active];
  const activeLabels = labels[active];

  return (
    <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
      <div className="relative">
        <svg viewBox="0 0 850 280" role="img" aria-label="Lender-centric ecosystem map" className="h-auto w-full">
          <defs>
            <linearGradient id="lender-flow" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor={GOLD} stopOpacity="0.05" />
              <stop offset="50%" stopColor={GOLD} stopOpacity="0.85" />
              <stop offset="100%" stopColor={GOLD} stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* central capital-flow line */}
          <line x1={110} y1={200} x2={740} y2={200} stroke="url(#lender-flow)" strokeWidth="1.2" />
          <line
            x1={110} y1={200} x2={740} y2={200}
            stroke={GOLD}
            strokeWidth="1"
            strokeDasharray="3 10"
            className="lender-eco-dash"
            opacity="0.85"
          />

          {/* oversight branches from public */}
          {oversightLinks.map(([from, to]) => {
            const a = nodes[from];
            const b = nodes[to];
            return (
              <line
                key={`${from}-${to}`}
                x1={a.cx} y1={a.cy} x2={b.cx} y2={b.cy}
                stroke="rgba(242,237,223,0.20)"
                strokeWidth="1"
                strokeDasharray="2 6"
              />
            );
          })}

          {/* labels on flow */}
          <text x={425} y={185} textAnchor="middle" fontSize="9" letterSpacing="0.18em" fill={IVORY_MUTED}>
            {labels.flowLabel.toUpperCase()}
          </text>
          <text x={425} y={115} textAnchor="middle" fontSize="9" letterSpacing="0.18em" fill={IVORY_MUTED}>
            {labels.oversightLabel.toUpperCase()}
          </text>

          {/* nodes */}
          {(Object.values(nodes) as { key: NodeKey; cx: number; cy: number; icon: typeof Sun }[]).map((n) => {
            const isActive = active === n.key;
            const isCenter = n.key === "lender";
            const r = isCenter ? 30 : 24;
            return (
              <g
                key={n.key}
                transform={`translate(${n.cx}, ${n.cy})`}
                className="cursor-pointer"
                onMouseEnter={() => setActive(n.key)}
                onFocus={() => setActive(n.key)}
                tabIndex={0}
                role="button"
                aria-label={labels[n.key].label}
              >
                {isActive && (
                  <circle r={r + 8} fill="none" stroke={GOLD} strokeWidth={1} opacity={0.5} className="lender-eco-pulse" />
                )}
                <circle
                  r={r}
                  fill="#0A0A0A"
                  stroke={isActive || isCenter ? GOLD : "rgba(242,237,223,0.30)"}
                  strokeWidth={isCenter ? 1.4 : 1}
                />
                <foreignObject x={-11} y={-11} width={22} height={22} style={{ pointerEvents: "none" }}>
                  <div style={{ width: 22, height: 22, color: GOLD, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <n.icon size={18} strokeWidth={1.5} />
                  </div>
                </foreignObject>
                <text
                  y={r + 16}
                  textAnchor="middle"
                  fontSize="10.5"
                  fontWeight="500"
                  letterSpacing="0.04em"
                  fill={isActive || isCenter ? IVORY : IVORY_DIM}
                  style={{ pointerEvents: "none" }}
                >
                  {labels[n.key].label}
                </text>
              </g>
            );
          })}
        </svg>

        <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.22em]" style={{ color: IVORY_MUTED }}>
          {labels.hint}
        </p>
      </div>

      <div className="border-t pt-7" style={{ borderColor: DIVIDER }}>
        <div className="flex items-center gap-3">
          <activeNode.icon size={20} strokeWidth={1.5} style={{ color: GOLD }} />
          <h3 className="text-[18px] font-medium tracking-tight" style={{ color: IVORY }}>
            {activeLabels.label}
          </h3>
        </div>
        <p className="mt-4 text-[14px] font-light leading-[1.75]" style={{ color: IVORY_DIM, maxWidth: "46ch" }}>
          {activeLabels.copy}
        </p>
        <div className="mt-7 flex flex-wrap gap-2">
          {(Object.keys(nodes) as NodeKey[]).map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => setActive(k)}
              onMouseEnter={() => setActive(k)}
              className="cursor-pointer border px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] transition"
              style={{
                borderColor: active === k ? GOLD : DIVIDER,
                color: active === k ? GOLD : IVORY_DIM,
              }}
            >
              {labels[k].label}
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        :global(.lender-eco-dash) {
          animation: lenderEcoDash 6s linear infinite;
        }
        @keyframes lenderEcoDash {
          to { stroke-dashoffset: -260; }
        }
        :global(.lender-eco-pulse) {
          transform-origin: center;
          animation: lenderEcoPulse 2.4s ease-out infinite;
        }
        @keyframes lenderEcoPulse {
          0% { transform: scale(0.85); opacity: 0.6; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          :global(.lender-eco-dash),
          :global(.lender-eco-pulse) {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
