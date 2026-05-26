"use client";

import { useState } from "react";
import { BadgeCheck, FileSearch, ScrollText, ShieldCheck, type LucideIcon } from "lucide-react";

const GOLD = "#D6A84F";
const IVORY = "#F2EDDF";
const DIVIDER = "rgba(242,237,223,0.10)";

type Pillar = { title: string; copy: string };

const ICONS: LucideIcon[] = [BadgeCheck, FileSearch, ScrollText, ShieldCheck];

export default function InstitutionalTrustFramework({ pillars }: { pillars: Pillar[] }) {
  const [active, setActive] = useState<number | null>(0);

  return (
    <div
      className="mt-14 grid divide-y md:grid-cols-2 md:divide-y-0 md:divide-x lg:grid-cols-4"
      style={{ borderColor: DIVIDER }}
    >
      {pillars.map((p, i) => {
        const Icon = ICONS[i] ?? BadgeCheck;
        const open = active === i;
        return (
          <button
            key={p.title}
            type="button"
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(open ? null : i)}
            aria-expanded={open}
            className="group relative flex h-full flex-col items-start gap-5 p-7 text-left transition-colors duration-300 cursor-pointer focus:outline-none"
            style={{
              background: open ? "rgba(214,168,79,0.04)" : "transparent",
              borderColor: DIVIDER,
            }}
          >
            <div className="flex items-center gap-3">
              <span
                className="font-mono text-[10px] font-medium uppercase tracking-[0.22em]"
                style={{ color: GOLD }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <Icon size={18} strokeWidth={1.4} style={{ color: open ? GOLD : "rgba(242,237,223,0.55)" }} />
            </div>

            <h3 className="text-[18px] font-medium leading-snug tracking-tight" style={{ color: IVORY }}>
              {p.title}
            </h3>

            <p
              className="text-[13px] font-light leading-[1.7]"
              style={{ color: "rgba(242,237,223,0.62)" }}
            >
              {p.copy}
            </p>

            <span
              aria-hidden
              className="mt-auto inline-block h-px transition-all duration-500"
              style={{ background: GOLD, width: open ? "48px" : "16px" }}
            />
          </button>
        );
      })}
    </div>
  );
}
