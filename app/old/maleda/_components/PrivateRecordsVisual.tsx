"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  FileLock2,
  FolderLock,
  Hash,
  Lock,
  ShieldCheck,
} from "lucide-react";

const GOLD = "#D6A84F";
const IVORY = "#F2EDDF";
const IVORY_DIM = "rgba(242,237,223,0.65)";
const IVORY_MUTED = "rgba(242,237,223,0.42)";
const DIVIDER = "rgba(242,237,223,0.12)";

type Row = { label: string; value: string };

type Labels = {
  leftTitle: string;
  leftEyebrow: string;
  leftBadge: string;
  leftItems: string[];
  connectorTitle: string;
  connectorCopy: string;
  rightTitle: string;
  rightEyebrow: string;
  rightRecord: Row[];
  validationTitle: string;
  validation: Row[];
  stateLabel: string;
  states: string[];
  activeState: number;
  statementTitle: string;
  statementSub: string;
};

export default function PrivateRecordsVisual({ labels }: { labels: Labels }) {
  return (
    <div className="mt-12">
      <div className="grid gap-6 lg:grid-cols-[1fr_auto_1.15fr] lg:items-stretch">
        <PrivateCard
          title={labels.leftTitle}
          eyebrow={labels.leftEyebrow}
          badge={labels.leftBadge}
          items={labels.leftItems}
        />
        <Connector title={labels.connectorTitle} copy={labels.connectorCopy} />
        <DigitalCard
          title={labels.rightTitle}
          eyebrow={labels.rightEyebrow}
          rows={labels.rightRecord}
          validationTitle={labels.validationTitle}
          validation={labels.validation}
          stateLabel={labels.stateLabel}
          states={labels.states}
          activeState={labels.activeState}
        />
      </div>

      <StatementBanner title={labels.statementTitle} sub={labels.statementSub} />

      <style jsx>{`
        :global(.private-records-pulse) {
          animation: prPulse 2.6s ease-in-out infinite;
        }
        @keyframes prPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(214,168,79,0.20); }
          50%      { box-shadow: 0 0 0 10px rgba(214,168,79,0); }
        }
        :global(.private-records-dash-v) {
          animation: prDashV 5s linear infinite;
        }
        @keyframes prDashV {
          to { background-position: 0 100px; }
        }
        :global(.private-records-arrow) {
          animation: prArrow 1.8s ease-in-out infinite;
        }
        @keyframes prArrow {
          0%, 100% { transform: translateX(0); opacity: 0.7; }
          50%      { transform: translateX(4px); opacity: 1; }
        }
        :global(.private-records-arrow-down) {
          animation: prArrowDown 1.8s ease-in-out infinite;
        }
        @keyframes prArrowDown {
          0%, 100% { transform: translateY(0); opacity: 0.7; }
          50%      { transform: translateY(4px); opacity: 1; }
        }
        :global(.private-records-glow) {
          animation: prGlow 3s ease-in-out infinite;
        }
        @keyframes prGlow {
          0%, 100% { opacity: 0.35; }
          50%      { opacity: 0.85; }
        }
        @media (prefers-reduced-motion: reduce) {
          :global(.private-records-pulse),
          :global(.private-records-dash-v),
          :global(.private-records-arrow),
          :global(.private-records-arrow-down),
          :global(.private-records-glow) {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}

/* ---------------------------------------------------------------------- */

function PrivateCard({
  title,
  eyebrow,
  badge,
  items,
}: {
  title: string;
  eyebrow: string;
  badge: string;
  items: string[];
}) {
  return (
    <article
      className="relative flex flex-col p-7 transition-transform duration-300 hover:-translate-y-0.5"
      style={{
        border: `1px solid rgba(214,168,79,0.35)`,
        background:
          "linear-gradient(180deg, rgba(214,168,79,0.05) 0%, rgba(214,168,79,0.02) 100%)",
      }}
    >
      {/* Vault header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span
            className="flex h-9 w-9 items-center justify-center private-records-pulse"
            style={{
              border: `1px solid ${GOLD}`,
              background: "rgba(214,168,79,0.10)",
            }}
          >
            <FolderLock size={16} strokeWidth={1.5} style={{ color: GOLD }} />
          </span>
          <p
            className="text-[10px] font-medium uppercase tracking-[0.22em]"
            style={{ color: GOLD }}
          >
            {eyebrow}
          </p>
        </div>
        <Lock size={14} strokeWidth={1.5} style={{ color: GOLD, opacity: 0.7 }} />
      </div>

      <h3 className="mt-5 text-[20px] font-medium leading-snug tracking-tight" style={{ color: IVORY }}>
        {title}
      </h3>

      <ul className="mt-6 grid grid-cols-1 gap-2.5">
        {items.map((it) => (
          <li
            key={it}
            className="flex items-baseline gap-3 text-[13px] font-light leading-snug"
            style={{ color: IVORY }}
          >
            <FileLock2 size={12} strokeWidth={1.5} style={{ color: GOLD, flex: "0 0 auto", marginTop: 2 }} />
            <span>{it}</span>
          </li>
        ))}
      </ul>

      <div
        className="mt-7 flex items-center gap-2 border-t pt-4 text-[11px] font-medium leading-snug"
        style={{ borderColor: "rgba(214,168,79,0.30)", color: GOLD }}
      >
        <ShieldCheck size={13} strokeWidth={1.6} />
        <span>{badge}</span>
      </div>
    </article>
  );
}

/* ---------------------------------------------------------------------- */

function Connector({ title, copy }: { title: string; copy: string }) {
  return (
    <div className="relative flex flex-col items-center justify-center px-2 py-6 lg:py-0 lg:w-[160px]">
      {/* Vertical dashed line - desktop */}
      <div
        aria-hidden
        className="private-records-dash-v hidden h-16 w-px lg:block"
        style={{
          backgroundImage:
            "repeating-linear-gradient(180deg, rgba(214,168,79,0.7) 0 4px, transparent 4px 10px)",
          backgroundSize: "1px 14px",
        }}
      />

      {/* Center badge */}
      <div className="flex flex-col items-center gap-3 py-3">
        <span
          className="private-records-pulse flex h-12 w-12 items-center justify-center"
          style={{
            border: `1px solid ${GOLD}`,
            background: "#0A1612",
          }}
        >
          <Lock size={18} strokeWidth={1.5} style={{ color: GOLD }} />
        </span>
        <p
          className="text-center text-[10px] font-medium uppercase tracking-[0.22em]"
          style={{ color: GOLD, maxWidth: 180 }}
        >
          {title}
        </p>
        <p
          className="text-center text-[11px] font-light leading-[1.65]"
          style={{ color: IVORY_DIM, maxWidth: 200 }}
        >
          {copy}
        </p>
        <span aria-hidden className="text-center" style={{ color: GOLD }}>
          <ArrowRight
            size={20}
            strokeWidth={1.5}
            className="private-records-arrow hidden lg:inline"
          />
          <ArrowDown
            size={20}
            strokeWidth={1.5}
            className="private-records-arrow-down inline lg:hidden"
          />
        </span>
      </div>

      {/* Vertical dashed line - desktop */}
      <div
        aria-hidden
        className="private-records-dash-v hidden h-16 w-px lg:block"
        style={{
          backgroundImage:
            "repeating-linear-gradient(180deg, rgba(214,168,79,0.7) 0 4px, transparent 4px 10px)",
          backgroundSize: "1px 14px",
        }}
      />
    </div>
  );
}

/* ---------------------------------------------------------------------- */

function DigitalCard({
  title,
  eyebrow,
  rows,
  validationTitle,
  validation,
  stateLabel,
  states,
  activeState,
}: {
  title: string;
  eyebrow: string;
  rows: Row[];
  validationTitle: string;
  validation: Row[];
  stateLabel: string;
  states: string[];
  activeState: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const timeouts: number[] = [];
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.25) {
          for (let i = 1; i <= activeState; i++) {
            timeouts.push(window.setTimeout(() => setProgress(i), i * 420));
          }
          io.disconnect();
        }
      },
      { threshold: [0, 0.25, 0.6] },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      timeouts.forEach(window.clearTimeout);
    };
  }, [activeState]);

  return (
    <article
      ref={ref}
      className="relative flex flex-col p-7 transition-transform duration-300 hover:-translate-y-0.5"
      style={{
        border: `1px solid ${DIVIDER}`,
        background: "rgba(242,237,223,0.02)",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span
            className="flex h-9 w-9 items-center justify-center"
            style={{ border: `1px solid ${DIVIDER}`, background: "#0A1612" }}
          >
            <Hash size={14} strokeWidth={1.5} style={{ color: GOLD }} />
          </span>
          <p
            className="text-[10px] font-medium uppercase tracking-[0.22em]"
            style={{ color: IVORY_MUTED }}
          >
            {eyebrow}
          </p>
        </div>
        <span
          aria-hidden
          className="private-records-glow inline-block h-2 w-2 rounded-full"
          style={{ background: GOLD }}
        />
      </div>

      <h3 className="mt-5 text-[20px] font-medium leading-snug tracking-tight" style={{ color: IVORY }}>
        {title}
      </h3>

      {/* Record rows */}
      <dl className="mt-6 grid grid-cols-1 divide-y" style={{ borderColor: DIVIDER }}>
        {rows.map((r) => (
          <div
            key={r.label}
            className="grid grid-cols-[140px_1fr] items-baseline gap-3 border-t py-2.5 first:border-t-0"
            style={{ borderColor: DIVIDER }}
          >
            <dt
              className="text-[10.5px] font-medium uppercase tracking-[0.18em]"
              style={{ color: IVORY_MUTED }}
            >
              {r.label}
            </dt>
            <dd
              className="font-mono text-[12.5px] font-medium tracking-tight"
              style={{ color: IVORY, wordBreak: "break-all" }}
            >
              {r.value}
            </dd>
          </div>
        ))}
      </dl>

      {/* Validation panel */}
      <div
        className="mt-6 p-4"
        style={{
          border: `1px solid rgba(214,168,79,0.30)`,
          background: "rgba(214,168,79,0.04)",
        }}
      >
        <p
          className="text-[10px] font-medium uppercase tracking-[0.22em]"
          style={{ color: GOLD }}
        >
          {validationTitle}
        </p>
        <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {validation.map((v) => (
            <li
              key={v.label}
              className="flex items-baseline gap-2 text-[12px] font-medium"
              style={{ color: IVORY }}
            >
              <CheckCircle2 size={12} strokeWidth={1.7} style={{ color: GOLD, flex: "0 0 auto", marginTop: 2 }} />
              <span style={{ color: IVORY_DIM }}>{v.label}:</span>
              <span>{v.value}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Transaction state */}
      <div className="mt-6">
        <p
          className="text-[10px] font-medium uppercase tracking-[0.22em]"
          style={{ color: IVORY_MUTED }}
        >
          {stateLabel}
        </p>
        <div className="mt-4">
          <div
            className="relative h-px w-full"
            style={{ background: "rgba(242,237,223,0.10)" }}
          >
            <div
              className="absolute left-0 top-0 h-px"
              style={{
                width: `${(progress / (states.length - 1)) * 100}%`,
                background: GOLD,
                transition: "width 600ms cubic-bezier(0.22,1,0.36,1)",
                boxShadow: `0 0 8px ${GOLD}88`,
              }}
            />
          </div>
          <ol
            className="mt-3 grid"
            style={{ gridTemplateColumns: `repeat(${states.length}, 1fr)` }}
          >
            {states.map((s, i) => {
              const reached = i <= progress;
              return (
                <li
                  key={s}
                  className="flex flex-col items-start gap-1.5 text-[11px] font-medium"
                  style={{ color: reached ? IVORY : IVORY_MUTED }}
                >
                  <span
                    aria-hidden
                    className="h-[7px] w-[7px] rounded-full transition-colors duration-500"
                    style={{
                      background: reached ? GOLD : "rgba(242,237,223,0.20)",
                      boxShadow: reached ? `0 0 6px ${GOLD}aa` : "none",
                    }}
                  />
                  <span>{s}</span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </article>
  );
}

/* ---------------------------------------------------------------------- */

function StatementBanner({ title, sub }: { title: string; sub: string }) {
  return (
    <div
      className="mt-10 flex flex-col gap-3 p-7 sm:flex-row sm:items-center sm:gap-6"
      style={{
        border: `1px solid rgba(214,168,79,0.30)`,
        background: "rgba(214,168,79,0.04)",
      }}
    >
      <Lock size={22} strokeWidth={1.4} style={{ color: GOLD, flex: "0 0 auto" }} />
      <div>
        <h3
          className="text-[18px] font-medium leading-snug tracking-tight"
          style={{ color: IVORY }}
        >
          {title}
        </h3>
        <p className="mt-2 text-[13px] font-light leading-[1.7]" style={{ color: IVORY_DIM, maxWidth: "70ch" }}>
          {sub}
        </p>
      </div>
    </div>
  );
}
