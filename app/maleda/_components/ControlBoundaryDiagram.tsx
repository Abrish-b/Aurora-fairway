"use client";

import { Building2, Sun } from "lucide-react";

const GOLD = "#C8F031";
const IVORY = "#F2EDDF";
const IVORY_DIM = "rgba(242,237,223,0.62)";
const IVORY_MUTED = "rgba(242,237,223,0.42)";
const DIVIDER = "rgba(242,237,223,0.12)";

type Labels = {
  lenderTitle: string;
  lenderItems: string[];
  auroraTitle: string;
  auroraItems: string[];
  divider: string;
};

export default function ControlBoundaryDiagram({ labels }: { labels: Labels }) {
  return (
    <div className="mt-14 grid gap-0 lg:grid-cols-[1fr_auto_1fr]">
      <Pane
        icon={Building2}
        eyebrow={labels.lenderTitle}
        items={labels.lenderItems}
        emphasised
      />
      <DividerStrip text={labels.divider} />
      <Pane
        icon={Sun}
        eyebrow={labels.auroraTitle}
        items={labels.auroraItems}
      />
    </div>
  );
}

function Pane({
  icon: Icon,
  eyebrow,
  items,
  emphasised = false,
}: {
  icon: typeof Sun;
  eyebrow: string;
  items: string[];
  emphasised?: boolean;
}) {
  return (
    <div
      className="p-8"
      style={{
        background: emphasised ? "rgba(200,240,49,0.04)" : "transparent",
        border: `1px solid ${emphasised ? "rgba(200,240,49,0.30)" : DIVIDER}`,
      }}
    >
      <div className="flex items-center gap-3">
        <Icon size={18} strokeWidth={1.5} style={{ color: emphasised ? GOLD : IVORY_DIM }} />
        <p
          className="text-[10px] font-medium uppercase tracking-[0.22em]"
          style={{ color: emphasised ? GOLD : IVORY_MUTED }}
        >
          {eyebrow}
        </p>
      </div>
      <ul className="mt-6 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-baseline gap-3 text-[14px] font-medium leading-snug tracking-tight"
            style={{ color: IVORY }}
          >
            <span
              aria-hidden
              className="mt-1 inline-block h-[6px] w-[6px] flex-none"
              style={{ background: emphasised ? GOLD : "rgba(242,237,223,0.40)" }}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function DividerStrip({ text }: { text: string }) {
  return (
    <div className="hidden flex-col items-center justify-center px-4 py-6 lg:flex">
      <div className="h-12 w-px" style={{ background: DIVIDER }} />
      <p
        className="my-3 rotate-180 text-[9px] font-medium uppercase tracking-[0.30em]"
        style={{ color: IVORY_MUTED, writingMode: "vertical-rl" }}
      >
        {text}
      </p>
      <div className="h-12 w-px" style={{ background: DIVIDER }} />
    </div>
  );
}
