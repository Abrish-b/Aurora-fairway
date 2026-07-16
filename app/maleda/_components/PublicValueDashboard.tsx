"use client";

import { useState } from "react";
import {
  Briefcase,
  Globe2,
  Sprout,
  Sun,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";

const GOLD = "#C8F031";
const IVORY = "#F2EDDF";

type Priority = { icon: LucideIcon; label: string; short: string };

const PRIORITIES: Priority[] = [
  { icon: Users, label: "Financial inclusion", short: "broader access for underserved enterprises" },
  { icon: Briefcase, label: "SME growth", short: "expanding working capital for SMEs" },
  { icon: Sprout, label: "Agricultural productivity", short: "seasonal credit for farmers and cooperatives" },
  { icon: Sun, label: "Women-led enterprise support", short: "credit pathways for women entrepreneurs" },
  { icon: Globe2, label: "Trade and export growth", short: "pre and post-shipment finance" },
  { icon: TrendingUp, label: "Job creation", short: "productive lending supporting employment" },
];

export default function PublicValueDashboard() {
  const [active, setActive] = useState(0);
  const a = PRIORITIES[active];

  return (
    <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-stretch">
      {/* Priority list — minimal, no cards */}
      <ul className="divide-y" style={{ borderColor: "rgba(242,237,223,0.10)" }}>
        {PRIORITIES.map((p, i) => {
          const isActive = active === i;
          const Icon = p.icon;
          return (
            <li key={p.label} className="border-t first:border-t-0" style={{ borderColor: "rgba(242,237,223,0.10)" }}>
              <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className="group flex w-full items-center gap-4 py-5 text-left transition-colors duration-300 cursor-pointer focus:outline-none focus-visible:underline"
              >
                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.22em]" style={{ color: isActive ? GOLD : "rgba(242,237,223,0.35)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Icon size={16} strokeWidth={1.4} style={{ color: isActive ? GOLD : "rgba(242,237,223,0.45)" }} />
                <span
                  className="text-[15px] font-medium tracking-tight"
                  style={{ color: isActive ? IVORY : "rgba(242,237,223,0.62)" }}
                >
                  {p.label}
                </span>
                <span
                  aria-hidden
                  className="ml-auto text-[10px] font-medium uppercase tracking-[0.18em] transition-opacity duration-300"
                  style={{ color: GOLD, opacity: isActive ? 1 : 0 }}
                >
                  Selected
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      {/* Central statement — no card, just typography on dark bg */}
      <div className="relative flex flex-col justify-between">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.22em]" style={{ color: GOLD }}>
            Designed to support
          </p>
          <p
            className="mt-6 text-[28px] font-medium leading-tight tracking-tight sm:text-[36px]"
            style={{ color: IVORY, textWrap: "balance" }}
          >
            Maleda is designed to support{" "}
            <span style={{ color: GOLD }}>{a.label.toLowerCase()}</span>
            <span style={{ color: "rgba(242,237,223,0.50)" }}> — {a.short}.</span>
          </p>
        </div>

        <p className="mt-12 max-w-[58ch] text-[11px] font-light leading-relaxed" style={{ color: "rgba(242,237,223,0.40)" }}>
          Inclusion does not imply endorsement by any government body or regulator.
        </p>
      </div>
    </div>
  );
}
