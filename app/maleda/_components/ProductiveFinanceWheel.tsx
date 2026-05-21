"use client";

import { useState } from "react";
import {
  Briefcase,
  Globe2,
  Sprout,
  TrendingUp,
  Truck,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const GOLD = "#D6A84F";
const IVORY = "#F2EDDF";

type Sector = {
  icon: LucideIcon;
  label: string;
  copy: string;
  example: string;
};

const SECTORS: Sector[] = [
  { icon: Briefcase, label: "SME working capital", copy: "Short-term operating finance.", example: "A 90-day line for a regional distributor." },
  { icon: Users, label: "Women-led businesses", copy: "Targeted support for women entrepreneurs.", example: "Growth credit for a textile cooperative." },
  { icon: Sprout, label: "Agricultural finance", copy: "Seasonal credit for farmers and cooperatives.", example: "Pre-harvest inputs for a coffee growers' union." },
  { icon: Truck, label: "Trade finance", copy: "Working capital for importers and exporters.", example: "LC-backed financing for an export shipment." },
  { icon: Wrench, label: "Equipment financing", copy: "Capital for machinery and productive assets.", example: "Term financing for a manufacturer's press line." },
  { icon: TrendingUp, label: "Growth lending", copy: "Expansion capital for scaling businesses.", example: "Capex facility for a logistics operator." },
  { icon: Globe2, label: "Export businesses", copy: "Pre and post-shipment finance for exporters.", example: "Working capital against confirmed export orders." },
];

export default function ProductiveFinanceWheel() {
  const [active, setActive] = useState(0);
  const ringR = 138;
  const innerR = 64;
  const sector = SECTORS[active];

  return (
    <div className="mt-16 grid gap-12 lg:grid-cols-[auto_1fr] lg:items-center">
      <div className="relative mx-auto h-[340px] w-[340px]">
        <svg viewBox="0 0 340 340" className="h-full w-full" aria-label="Sectors Maleda supports">
          <defs>
            <radialGradient id="wheel-core-dark" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={GOLD} stopOpacity="0.16" />
              <stop offset="70%" stopColor={GOLD} stopOpacity="0.04" />
              <stop offset="100%" stopColor={GOLD} stopOpacity="0" />
            </radialGradient>
          </defs>

          <circle cx="170" cy="170" r={ringR + 40} fill="url(#wheel-core-dark)" />
          <circle cx="170" cy="170" r={ringR} fill="none" stroke="rgba(242,237,223,0.10)" />
          <circle cx="170" cy="170" r={innerR + 14} fill="none" stroke="rgba(242,237,223,0.06)" />

          {SECTORS.map((_, i) => {
            const a = (i / SECTORS.length) * Math.PI * 2 - Math.PI / 2;
            const x1 = 170 + Math.cos(a) * (innerR + 14);
            const y1 = 170 + Math.sin(a) * (innerR + 14);
            const x2 = 170 + Math.cos(a) * (ringR + 4);
            const y2 = 170 + Math.sin(a) * (ringR + 4);
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={active === i ? GOLD : "rgba(242,237,223,0.08)"}
                strokeWidth={active === i ? 1.2 : 0.6}
                style={{ transition: "stroke 300ms ease" }}
              />
            );
          })}

          {SECTORS.map((s, i) => {
            const a = (i / SECTORS.length) * Math.PI * 2 - Math.PI / 2;
            const cx = 170 + Math.cos(a) * ringR;
            const cy = 170 + Math.sin(a) * ringR;
            const isActive = active === i;
            return (
              <g
                key={s.label}
                transform={`translate(${cx}, ${cy})`}
                role="button"
                tabIndex={0}
                aria-label={s.label}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                style={{ cursor: "pointer" }}
              >
                {isActive && (
                  <circle r="22" fill="none" stroke={GOLD} strokeWidth="1" opacity="0.5" className="maleda-wheel-pulse-min" />
                )}
                <circle
                  r={isActive ? 18 : 14}
                  fill={isActive ? GOLD : "#0A1612"}
                  stroke={isActive ? GOLD : "rgba(242,237,223,0.25)"}
                  strokeWidth="1"
                  style={{ transition: "all 300ms ease" }}
                />
                <foreignObject x={-9} y={-9} width="18" height="18" style={{ pointerEvents: "none" }}>
                  <div
                    style={{
                      width: 18,
                      height: 18,
                      color: isActive ? "#0A1612" : "rgba(242,237,223,0.65)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <s.icon size={12} strokeWidth={1.6} />
                  </div>
                </foreignObject>
              </g>
            );
          })}

          {/* Minimal center label */}
          <g transform="translate(170,170)">
            <text y="-4" textAnchor="middle" fontSize="9" fontWeight="500" fill={GOLD} style={{ letterSpacing: "0.18em" }}>
              {String(active + 1).padStart(2, "0")} / 07
            </text>
            <text y="14" textAnchor="middle" fontSize="9" fontWeight="500" fill="rgba(242,237,223,0.45)" style={{ letterSpacing: "0.16em" }}>
              PRODUCTIVE
            </text>
          </g>
        </svg>

        <style>{`
          .maleda-wheel-pulse-min {
            transform-origin: center;
            transform-box: fill-box;
            animation: maledaWheelPulseMin 2.2s ease-out infinite;
          }
          @keyframes maledaWheelPulseMin {
            0% { transform: scale(0.85); opacity: 0.6; }
            100% { transform: scale(1.6); opacity: 0; }
          }
          @media (prefers-reduced-motion: reduce) {
            .maleda-wheel-pulse-min { animation: none !important; }
          }
        `}</style>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <sector.icon size={18} strokeWidth={1.4} style={{ color: GOLD }} />
          <p className="text-[10px] font-medium uppercase tracking-[0.22em]" style={{ color: GOLD }}>
            Sector {String(active + 1).padStart(2, "0")}
          </p>
        </div>
        <h3 className="text-[28px] font-medium leading-tight tracking-tight" style={{ color: IVORY }}>
          {sector.label}
        </h3>
        <p className="text-[14px] font-light leading-[1.75] max-w-[55ch]" style={{ color: "rgba(242,237,223,0.65)" }}>
          {sector.copy}
        </p>
        <p
          className="border-l pl-4 text-[12px] font-light italic leading-[1.7]"
          style={{ borderColor: GOLD, color: "rgba(242,237,223,0.55)" }}
        >
          {sector.example}
        </p>

        <div className="flex flex-wrap gap-x-4 gap-y-2 pt-4">
          {SECTORS.map((s, i) => (
            <button
              key={s.label}
              type="button"
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              className="text-[11px] font-medium uppercase tracking-[0.16em] transition-colors duration-300 cursor-pointer"
              style={{
                color: active === i ? GOLD : "rgba(242,237,223,0.40)",
                borderBottom: active === i ? `1px solid ${GOLD}` : "1px solid transparent",
                paddingBottom: 2,
              }}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
