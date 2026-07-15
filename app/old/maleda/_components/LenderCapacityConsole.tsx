"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Globe2,
  HandCoins,
  Landmark,
  Sprout,
  Users,
  type LucideIcon,
} from "lucide-react";

const GOLD = "#D6A84F";
const IVORY = "#F2EDDF";

type Tile = {
  icon: LucideIcon;
  label: string;
  metric: string;
  unit?: string;
  detail: string;
};

const TILES: Tile[] = [
  { icon: ArrowUpRight, label: "Expand SME lending capacity", metric: "+", unit: "throughput", detail: "Scale SME books without proportionate balance-sheet strain." },
  { icon: Globe2, label: "Access international funding", metric: "DFIs", unit: "partners", detail: "Reach development finance through compliant participation." },
  { icon: HandCoins, label: "Reduce capital-access friction", metric: "≤ wks", unit: "to onboard", detail: "Standardised identity, eligibility, and reporting tooling." },
  { icon: Users, label: "Preserve local relationships", metric: "Local", unit: "ownership", detail: "Origination, servicing, and recovery stay with the licensed lender." },
  { icon: Landmark, label: "Maintain regulatory control", metric: "Reg.", unit: "first", detail: "Designed around supervisor expectations and jurisdictional rules." },
  { icon: Sprout, label: "Finance productive sectors", metric: "Real", unit: "economy", detail: "Optimised for SME, agriculture, trade, equipment, and growth lending." },
];

export default function LenderCapacityConsole() {
  const [active, setActive] = useState<number>(0);

  return (
    <div
      className="mt-16 grid divide-y sm:grid-cols-2 sm:divide-x lg:grid-cols-3"
      style={{ borderColor: "rgba(242,237,223,0.10)" }}
    >
      {TILES.map((t, i) => {
        const isActive = active === i;
        const Icon = t.icon;
        return (
          <button
            key={t.label}
            type="button"
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            className="group relative flex flex-col items-start gap-5 p-8 text-left transition-colors duration-300 cursor-pointer focus:outline-none focus-visible:bg-[rgba(242,237,223,0.04)]"
            style={{
              background: isActive ? "rgba(242,237,223,0.04)" : "transparent",
              borderColor: "rgba(242,237,223,0.10)",
            }}
          >
            <div className="flex items-center justify-between w-full">
              <Icon size={18} strokeWidth={1.4} style={{ color: isActive ? GOLD : "rgba(242,237,223,0.55)" }} />
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.22em]" style={{ color: "rgba(242,237,223,0.40)" }}>
                {String(i + 1).padStart(2, "0")} / 06
              </span>
            </div>

            <div>
              <p
                className="font-mono text-[32px] font-medium leading-none tracking-tight"
                style={{ color: isActive ? GOLD : IVORY }}
              >
                {t.metric}
              </p>
              {t.unit && (
                <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.22em]" style={{ color: "rgba(242,237,223,0.45)" }}>
                  {t.unit}
                </p>
              )}
            </div>

            <p className="text-[14px] font-medium leading-snug tracking-tight" style={{ color: IVORY }}>
              {t.label}
            </p>

            <div
              className="grid w-full overflow-hidden transition-[grid-template-rows] duration-500"
              style={{ gridTemplateRows: isActive ? "1fr" : "0fr" }}
            >
              <div className="min-h-0 overflow-hidden">
                <p
                  className="border-t pt-3 text-[12px] font-light leading-[1.7]"
                  style={{ color: "rgba(242,237,223,0.55)", borderColor: "rgba(242,237,223,0.10)" }}
                >
                  {t.detail}
                </p>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
