"use client";

import { useState } from "react";
import {
  BarChart3,
  FileCheck2,
  Handshake,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

const GOLD = "#D6A84F";
const IVORY = "#F2EDDF";

type Pillar = {
  icon: LucideIcon;
  title: string;
  short: string;
  detail: string;
};

const PILLARS: Pillar[] = [
  {
    icon: ShieldCheck,
    title: "Identity & Verification",
    short: "Trusted borrower and institutional validation.",
    detail:
      "Verifies who is participating through trusted channels and reusable credentials.",
  },
  {
    icon: FileCheck2,
    title: "Compliance Infrastructure",
    short: "KYC, screening, eligibility, controls.",
    detail:
      "KYC/KYB, sanctions screening, jurisdictional eligibility, and participation rules applied consistently.",
  },
  {
    icon: Handshake,
    title: "Capital Coordination",
    short: "Regulated lenders meet institutional liquidity.",
    detail:
      "Connects licensed local lenders to international capital partners without displacing local underwriting.",
  },
  {
    icon: BarChart3,
    title: "Reporting & Transparency",
    short: "Visibility for lenders, partners, and stakeholders.",
    detail:
      "Standardised reporting and provenance built for supervisors and capital partners simultaneously.",
  },
];

export default function InfrastructurePillars() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <div className="mt-16 grid divide-y md:grid-cols-2 md:divide-y-0 md:divide-x lg:grid-cols-4"
      style={{ borderColor: "rgba(242,237,223,0.10)" }}
    >
      {PILLARS.map((p, i) => {
        const open = active === i;
        const Icon = p.icon;
        return (
          <button
            key={p.title}
            type="button"
            onClick={() => setActive(open ? null : i)}
            aria-expanded={open}
            className="group relative flex h-full flex-col items-start gap-5 p-8 text-left transition-colors duration-300 cursor-pointer focus:outline-none focus-visible:bg-[rgba(242,237,223,0.04)]"
            style={{
              background: open ? "rgba(242,237,223,0.04)" : "transparent",
              borderColor: "rgba(242,237,223,0.10)",
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

            <h3
              className="text-[19px] font-medium leading-snug tracking-tight"
              style={{ color: IVORY }}
            >
              {p.title}
            </h3>

            <p className="text-[13px] font-light leading-[1.7]" style={{ color: "rgba(242,237,223,0.65)" }}>
              {p.short}
            </p>

            <div
              className="grid w-full overflow-hidden transition-[grid-template-rows] duration-500"
              style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
            >
              <div className="min-h-0 overflow-hidden">
                <p
                  className="border-t pt-4 text-[12px] font-light leading-[1.7]"
                  style={{ color: "rgba(242,237,223,0.50)", borderColor: "rgba(242,237,223,0.10)" }}
                >
                  {p.detail}
                </p>
              </div>
            </div>

            <span
              className="mt-auto inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.16em]"
              style={{ color: GOLD }}
            >
              <span
                aria-hidden
                className="inline-block h-px transition-all duration-500"
                style={{ background: GOLD, width: open ? "24px" : "12px" }}
              />
              {open ? "Hide" : "More"}
            </span>
          </button>
        );
      })}
    </div>
  );
}
