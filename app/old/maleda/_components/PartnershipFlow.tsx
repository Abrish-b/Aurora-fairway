"use client";

import { useEffect, useRef, useState } from "react";
import {
  Banknote,
  Building2,
  CircleCheck,
  Handshake,
  ScanSearch,
  type LucideIcon,
} from "lucide-react";

const GOLD = "#D6A84F";
const IVORY = "#F2EDDF";

type Step = { icon: LucideIcon; title: string; copy: string };

const STEPS: Step[] = [
  { icon: Handshake, title: "Lender partners with Maleda", copy: "Banks, MFIs, and fintechs onboard under their existing license." },
  { icon: ScanSearch, title: "Borrower is verified", copy: "Identity and eligibility run through trusted channels." },
  { icon: Building2, title: "Loan is originated locally", copy: "The regulated institution owns underwriting and servicing." },
  { icon: Banknote, title: "Capital partners participate", copy: "Compliant pathways supply structured funding." },
  { icon: CircleCheck, title: "Borrower receives local-currency financing", copy: "Disbursement happens through regulated banking channels." },
];

export default function PartnershipFlow() {
  const wrapRef = useRef<HTMLOListElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const start = vh * 0.85;
        const end = vh * 0.2;
        const span = r.height + (start - end);
        const traveled = start - r.top;
        const p = Math.min(1, Math.max(0, traveled / span));
        setProgress(p);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const filledCount = Math.min(STEPS.length, Math.ceil(progress * STEPS.length + 0.0001));

  return (
    <ol ref={wrapRef} className="relative mt-16">
      {/* Vertical timeline rail */}
      <div
        aria-hidden
        className="absolute left-[14px] top-0 bottom-0 w-px"
        style={{ background: "rgba(242,237,223,0.08)" }}
      />
      <div
        aria-hidden
        className="absolute left-[14px] top-0 w-px"
        style={{
          height: `${progress * 100}%`,
          background: GOLD,
          transition: "height 200ms linear",
        }}
      />

      {STEPS.map((s, i) => {
        const filled = i < filledCount;
        const Icon = s.icon;
        return (
          <li key={s.title} className="relative pl-12 pb-10 last:pb-0">
            {/* Dot */}
            <span
              aria-hidden
              className="absolute left-[8px] top-1 h-[13px] w-[13px] rounded-full transition-colors duration-500"
              style={{
                background: filled ? GOLD : "#0A1612",
                border: `1px solid ${filled ? GOLD : "rgba(242,237,223,0.30)"}`,
              }}
            />

            <div className="flex items-baseline gap-3">
              <span
                className="font-mono text-[10px] font-medium uppercase tracking-[0.22em]"
                style={{ color: filled ? GOLD : "rgba(242,237,223,0.40)", transition: "color 300ms ease" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <Icon
                size={16}
                strokeWidth={1.4}
                style={{ color: filled ? GOLD : "rgba(242,237,223,0.40)", transition: "color 300ms ease" }}
              />
            </div>
            <h3
              className="mt-3 text-[18px] font-medium leading-snug tracking-tight"
              style={{ color: IVORY }}
            >
              {s.title}
            </h3>
            <p className="mt-2 max-w-[58ch] text-[14px] font-light leading-[1.7]" style={{ color: "rgba(242,237,223,0.65)" }}>
              {s.copy}
            </p>
          </li>
        );
      })}
    </ol>
  );
}
