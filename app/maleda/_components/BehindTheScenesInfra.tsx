"use client";

import { Building2, Coins, Cpu, FileBarChart, ShieldCheck, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const GOLD = "#C8F031";
const IVORY = "#F2EDDF";
const IVORY_DIM = "rgba(242,237,223,0.62)";
const IVORY_MUTED = "rgba(242,237,223,0.42)";
const DIVIDER = "rgba(242,237,223,0.12)";

type Labels = {
  frontTitle: string;
  frontItems: { label: string; copy: string }[];
  backTitle: string;
  backItems: { label: string; copy: string }[];
  separator: string;
};

const FRONT_ICONS: LucideIcon[] = [Building2, Users, Coins];
const BACK_ICONS: LucideIcon[] = [Cpu, ShieldCheck, Coins, FileBarChart];

export default function BehindTheScenesInfra({ labels }: { labels: Labels }) {
  return (
    <div className="mt-14 grid gap-0">
      {/* Front stage */}
      <Stage
        eyebrow={labels.frontTitle}
        items={labels.frontItems}
        icons={FRONT_ICONS}
        emphasised
      />

      {/* Separator */}
      <div className="relative my-0 flex items-center justify-center py-6">
        <div className="h-px flex-1" style={{ background: DIVIDER }} />
        <p
          className="px-4 text-[10px] font-medium uppercase tracking-[0.30em]"
          style={{ color: IVORY_MUTED }}
        >
          {labels.separator}
        </p>
        <div className="h-px flex-1" style={{ background: DIVIDER }} />
      </div>

      {/* Back stage */}
      <Stage
        eyebrow={labels.backTitle}
        items={labels.backItems}
        icons={BACK_ICONS}
      />
    </div>
  );
}

function Stage({
  eyebrow,
  items,
  icons,
  emphasised = false,
}: {
  eyebrow: string;
  items: { label: string; copy: string }[];
  icons: LucideIcon[];
  emphasised?: boolean;
}) {
  return (
    <div>
      <p
        className="text-[10px] font-medium uppercase tracking-[0.22em]"
        style={{ color: emphasised ? GOLD : IVORY_MUTED }}
      >
        {eyebrow}
      </p>
      <div
        className="mt-4 grid gap-px sm:grid-cols-2 lg:grid-cols-4"
        style={{ background: DIVIDER }}
      >
        {items.map((it, i) => {
          const Icon = icons[i] ?? icons[0];
          return (
            <div
              key={it.label}
              className="flex flex-col gap-3 p-6"
              style={{
                background: emphasised ? "rgba(200,240,49,0.03)" : "#0A0A0A",
              }}
            >
              <Icon size={16} strokeWidth={1.5} style={{ color: emphasised ? GOLD : IVORY_DIM }} />
              <p className="text-[14px] font-medium leading-snug tracking-tight" style={{ color: IVORY }}>
                {it.label}
              </p>
              <p className="text-[12px] font-light leading-[1.7]" style={{ color: IVORY_DIM }}>
                {it.copy}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
