"use client";

import { ArrowRight, CheckCircle2, FileText, Landmark, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const GOLD = "#D6A84F";
const IVORY = "#F2EDDF";
const IVORY_DIM = "rgba(242,237,223,0.62)";
const IVORY_MUTED = "rgba(242,237,223,0.42)";
const DIVIDER = "rgba(242,237,223,0.12)";

type Step = { title: string; copy: string };

const ICONS: LucideIcon[] = [CheckCircle2, FileText, Landmark, Users];

export default function ParticipationFlow({ steps, footer }: { steps: Step[]; footer: string }) {
  return (
    <div className="mt-14 grid gap-px md:grid-cols-2 lg:grid-cols-4" style={{ background: DIVIDER }}>
      {steps.map((s, i) => {
        const Icon = ICONS[i] ?? CheckCircle2;
        const last = i === steps.length - 1;
        return (
          <article
            key={s.title}
            className="relative flex flex-col gap-5 p-7"
            style={{ background: "#0A1612" }}
          >
            <div className="flex items-center justify-between">
              <span
                className="font-mono text-[10px] font-medium uppercase tracking-[0.22em]"
                style={{ color: GOLD }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <Icon size={18} strokeWidth={1.5} style={{ color: GOLD }} />
            </div>
            <h3 className="text-[16px] font-medium leading-snug tracking-tight" style={{ color: IVORY }}>
              {s.title}
            </h3>
            <p className="text-[13px] font-light leading-[1.7]" style={{ color: IVORY_DIM }}>
              {s.copy}
            </p>
            {!last && (
              <span
                aria-hidden
                className="pointer-events-none absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 items-center justify-center lg:flex"
                style={{ background: "#0A1612", color: GOLD }}
              >
                <ArrowRight size={14} strokeWidth={1.6} />
              </span>
            )}
          </article>
        );
      })}
      <p
        className="lg:col-span-4 px-7 pt-4 pb-1 text-[11px] font-medium uppercase tracking-[0.18em]"
        style={{ background: "#0A1612", color: IVORY_MUTED }}
      >
        {footer}
      </p>
    </div>
  );
}
