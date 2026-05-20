"use client";

import { useState } from "react";
import { Banknote, Building2, Landmark, Sun, Users } from "lucide-react";

type NodeKey = "public" | "fi" | "biz" | "capital" | "maleda";

type Node = {
  key: NodeKey;
  label: string;
  copy: string;
  icon: typeof Sun;
  cx: number;
  cy: number;
};

const GOLD = "#C8923D";

const nodes: Node[] = [
  { key: "public", label: "Public Stakeholders", copy: "Advance financial inclusion, SME growth, and economic development.", icon: Landmark, cx: 110, cy: 200 },
  { key: "fi", label: "Financial Institutions", copy: "Originate, underwrite, and service loans.", icon: Building2, cx: 410, cy: 90 },
  { key: "biz", label: "Businesses", copy: "Receive financing through trusted local lenders.", icon: Users, cx: 710, cy: 200 },
  { key: "capital", label: "Capital Partners", copy: "Support productive lending through structured participation.", icon: Banknote, cx: 410, cy: 320 },
  { key: "maleda", label: "Maleda", copy: "Provides identity, compliance, and capital coordination infrastructure.", icon: Sun, cx: 410, cy: 200 },
];

const links: [NodeKey, NodeKey][] = [
  ["public", "maleda"],
  ["fi", "maleda"],
  ["biz", "maleda"],
  ["capital", "maleda"],
];

export default function EcosystemGraph() {
  const [active, setActive] = useState<NodeKey>("maleda");
  const activeNode = nodes.find((n) => n.key === active)!;

  const getNode = (k: NodeKey) => nodes.find((n) => n.key === k)!;

  return (
    <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
      <div className="relative">
        <svg
          viewBox="0 0 820 400"
          role="img"
          aria-label="Maleda ecosystem diagram"
          className="h-auto w-full"
        >
          <defs>
            <radialGradient id="maleda-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={GOLD} stopOpacity="0.45" />
              <stop offset="60%" stopColor={GOLD} stopOpacity="0.10" />
              <stop offset="100%" stopColor={GOLD} stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Glow behind Maleda */}
          <circle cx={410} cy={200} r={120} fill="url(#maleda-glow)" />

          {/* Connection lines with traveling dash */}
          {links.map(([from, to]) => {
            const a = getNode(from);
            const b = getNode(to);
            const highlighted = active === from || active === to;
            return (
              <g key={`${from}-${to}`}>
                <line
                  x1={a.cx}
                  y1={a.cy}
                  x2={b.cx}
                  y2={b.cy}
                  stroke={highlighted ? GOLD : "#cbd5e1"}
                  strokeWidth={highlighted ? 1.4 : 1}
                  opacity={highlighted ? 0.9 : 0.55}
                />
                <line
                  x1={a.cx}
                  y1={a.cy}
                  x2={b.cx}
                  y2={b.cy}
                  stroke={GOLD}
                  strokeWidth={1.4}
                  strokeDasharray="4 9"
                  opacity={highlighted ? 0.9 : 0.55}
                  className="maleda-graph-dash"
                />
              </g>
            );
          })}

          {/* Nodes */}
          {nodes.map((n) => {
            const isActive = active === n.key;
            const isCenter = n.key === "maleda";
            return (
              <g
                key={n.key}
                transform={`translate(${n.cx}, ${n.cy})`}
                className="cursor-pointer"
                onMouseEnter={() => setActive(n.key)}
                onFocus={() => setActive(n.key)}
                tabIndex={0}
                role="button"
                aria-label={`${n.label}: ${n.copy}`}
              >
                {/* Pulse */}
                {isActive && (
                  <circle
                    r={42}
                    fill="none"
                    stroke={GOLD}
                    strokeWidth={1}
                    opacity={0.7}
                    className="maleda-graph-pulse"
                  />
                )}
                <circle
                  r={isCenter ? 38 : 32}
                  fill={isCenter ? "#0A0A0A" : "#ffffff"}
                  stroke={isActive || isCenter ? GOLD : "#e5e7eb"}
                  strokeWidth={isActive ? 1.5 : 1}
                />
                <foreignObject
                  x={-12}
                  y={-12}
                  width={24}
                  height={24}
                  style={{ pointerEvents: "none" }}
                >
                  <div
                    style={{
                      width: 24,
                      height: 24,
                      color: GOLD,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <n.icon size={20} strokeWidth={1.5} />
                  </div>
                </foreignObject>
                <text
                  y={isCenter ? 58 : 52}
                  textAnchor="middle"
                  fontSize="11"
                  fontWeight="600"
                  fill={isCenter ? "#0A0A0A" : "#111827"}
                  style={{ letterSpacing: "0.02em", pointerEvents: "none" }}
                >
                  {n.label}
                </text>
              </g>
            );
          })}
        </svg>

        <p className="mt-4 text-center text-[11px] font-light uppercase tracking-[0.2em] text-neutral-500">
          Hover or focus a node to see its role
        </p>
      </div>

      <div className="rounded-2xl border border-neutral-200 bg-white p-7">
        <div className="flex items-center gap-3">
          <span
            className="flex h-10 w-10 items-center justify-center rounded-lg"
            style={{ background: "rgba(200,146,61,0.10)" }}
          >
            <activeNode.icon className="h-5 w-5" strokeWidth={1.6} style={{ color: GOLD }} />
          </span>
          <h3 className="text-[18px] font-semibold text-neutral-900">
            {activeNode.label}
          </h3>
        </div>
        <p className="mt-4 text-[14px] font-light leading-[1.7] text-neutral-600">
          {activeNode.copy}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {nodes.map((n) => (
            <button
              key={n.key}
              type="button"
              onClick={() => setActive(n.key)}
              onMouseEnter={() => setActive(n.key)}
              className={`cursor-pointer rounded-full border px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] transition ${
                active === n.key
                  ? "border-neutral-900 bg-neutral-900 text-white"
                  : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-400"
              }`}
            >
              {n.label}
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        :global(.maleda-graph-dash) {
          animation: maledaDash 6s linear infinite;
        }
        @keyframes maledaDash {
          to {
            stroke-dashoffset: -240;
          }
        }
        :global(.maleda-graph-pulse) {
          transform-origin: center;
          animation: maledaPulse 2.4s ease-out infinite;
        }
        @keyframes maledaPulse {
          0% {
            transform: scale(0.85);
            opacity: 0.7;
          }
          100% {
            transform: scale(1.55);
            opacity: 0;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          :global(.maleda-graph-dash),
          :global(.maleda-graph-pulse) {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
