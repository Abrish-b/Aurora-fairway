"use client";

import { useEffect, useRef, useState } from "react";
import { Database, Lock, Send } from "lucide-react";

const GOLD = "#C8F031";
const IVORY = "#F2EDDF";
const IVORY_DIM = "rgba(242,237,223,0.62)";
const IVORY_MUTED = "rgba(242,237,223,0.42)";
const DIVIDER = "rgba(242,237,223,0.12)";

type Labels = {
  insideTitle: string;
  insideItems: string[];
  insideFoot: string;
  sharedTitle: string;
  sharedItems: string[];
  capitalTitle: string;
  capitalCopy: string;
  flowLabel: string;
};

export default function DataBoundaryVisual({ labels }: { labels: Labels }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_auto_1fr] lg:items-stretch">
      {/* Inside lender (locked vault) */}
      <div
        className="relative flex flex-col p-7"
        style={{
          border: `1px solid ${GOLD}`,
          background: "rgba(200,240,49,0.04)",
        }}
      >
        <div className="flex items-center gap-3">
          <Lock size={18} strokeWidth={1.5} style={{ color: GOLD }} />
          <p className="text-[10px] font-medium uppercase tracking-[0.22em]" style={{ color: GOLD }}>
            {labels.insideTitle}
          </p>
        </div>
        <ul className="mt-5 space-y-2.5">
          {labels.insideItems.map((it) => (
            <li
              key={it}
              className="text-[13.5px] font-medium leading-snug tracking-tight"
              style={{ color: IVORY }}
            >
              {it}
            </li>
          ))}
        </ul>
        <span
          aria-hidden
          className="mt-auto pt-6 text-[10px] font-medium uppercase tracking-[0.22em]"
          style={{ color: IVORY_MUTED }}
        >
          {labels.insideFoot}
        </span>
      </div>

      {/* Transit */}
      <div className="hidden lg:flex flex-col items-center justify-center px-2">
        <Send size={16} strokeWidth={1.5} style={{ color: GOLD, opacity: visible ? 1 : 0.3, transition: "opacity 700ms ease" }} />
        <div
          aria-hidden
          className="my-3 h-px w-24"
          style={{
            background: "repeating-linear-gradient(90deg, rgba(200,240,49,0.7) 0 6px, transparent 6px 12px)",
            opacity: visible ? 1 : 0.2,
            transition: "opacity 800ms ease",
          }}
        />
        <p className="text-center text-[9px] font-medium uppercase tracking-[0.22em]" style={{ color: IVORY_MUTED, maxWidth: 120 }}>
          {labels.flowLabel}
        </p>
        <ul className="mt-4 space-y-1 text-center">
          {labels.sharedItems.map((it) => (
            <li key={it} className="text-[11px] font-light" style={{ color: IVORY_DIM }}>
              {it}
            </li>
          ))}
        </ul>
      </div>

      {/* Capital partner view */}
      <div className="flex flex-col p-7" style={{ border: `1px solid ${DIVIDER}` }}>
        <div className="flex items-center gap-3">
          <Database size={18} strokeWidth={1.5} style={{ color: IVORY_DIM }} />
          <p className="text-[10px] font-medium uppercase tracking-[0.22em]" style={{ color: IVORY_MUTED }}>
            {labels.capitalTitle}
          </p>
        </div>
        <p className="mt-5 text-[14px] font-light leading-[1.75]" style={{ color: IVORY_DIM }}>
          {labels.capitalCopy}
        </p>
        <span
          aria-hidden
          className="mt-auto pt-6 text-[10px] font-medium uppercase tracking-[0.22em]"
          style={{ color: IVORY_MUTED }}
        >
          {labels.sharedTitle}
        </span>
      </div>
    </div>
  );
}
