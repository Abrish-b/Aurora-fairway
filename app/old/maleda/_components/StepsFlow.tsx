"use client";

import { useEffect, useRef, useState } from "react";
import {
  Banknote,
  Building2,
  CheckCircle2,
  Handshake,
  ScanSearch,
  type LucideIcon,
} from "lucide-react";

const GREEN = "#1F3D2F";

type Step = {
  icon: LucideIcon;
  title: string;
  copy: string;
};

const STEPS: Step[] = [
  {
    icon: Handshake,
    title: "Local institution partners with Maleda",
    copy: "Banks, MFIs, and fintechs onboard to the partnership infrastructure.",
  },
  {
    icon: ScanSearch,
    title: "Borrower is verified through trusted channels",
    copy: "Identity and eligibility checks happen via regulated processes.",
  },
  {
    icon: Building2,
    title: "Loan is originated by a regulated local lender",
    copy: "The local institution owns the borrower relationship end-to-end.",
  },
  {
    icon: Banknote,
    title: "Capital partners participate through structured infrastructure",
    copy: "Funding flows in via compliant, transparent participation.",
  },
  {
    icon: CheckCircle2,
    title: "Borrower receives local-currency financing",
    copy: "Disbursement happens through normal regulated banking channels.",
  },
];

export default function StepsFlow() {
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
        const end = vh * 0.15;
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

  const filledCount = Math.min(
    STEPS.length,
    Math.ceil(progress * STEPS.length + 0.0001),
  );

  return (
    <ol ref={wrapRef} className="relative mt-14 grid gap-5 md:grid-cols-5">
      <div
        aria-hidden
        className="absolute left-0 right-0 top-[44px] hidden h-px md:block"
        style={{ background: "#e5e7eb" }}
      />
      <div
        aria-hidden
        className="absolute left-0 top-[44px] hidden h-px md:block"
        style={{
          width: `${progress * 100}%`,
          background: `linear-gradient(90deg, ${GREEN} 0%, rgba(31,61,47,0.45) 100%)`,
          boxShadow: `0 0 10px ${GREEN}66`,
          transition: "width 120ms linear",
        }}
      />

      {STEPS.map((s, i) => {
        const filled = i < filledCount;
        const Icon = s.icon;
        return (
          <li
            key={s.title}
            className="relative rounded-2xl border bg-white p-6 transition-colors duration-300"
            style={{
              borderColor: filled ? GREEN : "#e5e7eb",
              boxShadow: filled
                ? "0 18px 60px rgba(31,61,47,0.08)"
                : "0 10px 30px rgba(0,0,0,0.02)",
            }}
          >
            <div className="flex items-center justify-between">
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full text-[12px] font-semibold transition-colors duration-300"
                style={{
                  background: filled ? GREEN : "#f5f5f5",
                  color: filled ? "#ffffff" : "#737373",
                }}
              >
                {i + 1}
              </span>
              <Icon
                className="h-5 w-5 transition-colors duration-300"
                strokeWidth={1.5}
                style={{ color: filled ? GREEN : "#a3a3a3" }}
              />
            </div>
            <h3 className="mt-5 text-[14px] font-semibold leading-snug text-neutral-900">
              {s.title}
            </h3>
            <p className="mt-2 text-[12px] font-light leading-[1.65] text-neutral-600">
              {s.copy}
            </p>
          </li>
        );
      })}
    </ol>
  );
}
