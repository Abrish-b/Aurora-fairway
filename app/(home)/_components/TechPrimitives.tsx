import type { ReactNode } from "react";
import { BadgeCheck } from "lucide-react";

import { DIM, FAINT, GOLD, GOLD_HAIR, GOLD_LIGHT, HAIR, INK, PANEL, PANEL_DEEP } from "./theme";

/* ---------------------------------------------------------------- */
/* Instrument-panel shell — mono header rule, hairline body          */
/* ---------------------------------------------------------------- */

export function TechPanel({
  label,
  status,
  children,
  accent = false,
  className = "",
  bodyClassName = "p-3.5",
}: {
  label: string;
  status?: ReactNode;
  children: ReactNode;
  accent?: boolean;
  className?: string;
  bodyClassName?: string;
}) {
  const edge = accent ? GOLD_HAIR : HAIR;
  return (
    <div
      className={`overflow-hidden rounded-[12px] border ${className}`}
      style={{
        borderColor: edge,
        background: PANEL,
        boxShadow: accent
          ? "inset 0 1px 0 rgba(255,204,115,0.10), 0 18px 50px rgba(0,0,0,0.30)"
          : "inset 0 1px 0 rgba(255,255,255,0.04)",
      }}
    >
      <div
        className="flex items-center justify-between gap-2 border-b px-3 py-2"
        style={{ borderColor: edge, background: accent ? "rgba(246,184,75,0.05)" : "transparent" }}
      >
        <span
          className="truncate font-mono text-[9.5px] font-semibold uppercase tracking-[0.16em]"
          style={{ color: accent ? GOLD_LIGHT : FAINT }}
        >
          {label}
        </span>
        {status}
      </div>
      <div className={bodyClassName}>{children}</div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Chips                                                             */
/* ---------------------------------------------------------------- */

export function Chip({
  children,
  accent = false,
  size = "md",
  className = "",
}: {
  children: ReactNode;
  accent?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizing =
    size === "sm"
      ? "px-2 py-0.5 text-[9.5px]"
      : size === "lg"
        ? "px-3.5 py-1.5 text-[11px]"
        : "px-2.5 py-1 text-[10px]";
  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border font-mono font-semibold tracking-[0.06em] ${sizing} ${className}`}
      style={{
        borderColor: accent ? GOLD_HAIR : HAIR,
        color: accent ? GOLD_LIGHT : DIM,
        background: accent ? "rgba(246,184,75,0.07)" : "rgba(255,255,255,0.025)",
      }}
    >
      {children}
    </span>
  );
}

/** Marching-ants rail between pipeline stages: horizontal on lg, vertical below. */
export function FlowConnector({ className = "lg:w-7" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`flex shrink-0 items-center justify-center py-2 lg:py-0 ${className}`}
    >
      <span className="aurora-flow-y h-6 w-px lg:hidden" />
      <span className="aurora-flow-x hidden h-px w-full lg:block" />
    </div>
  );
}

/** Verification reference chip — a pointer to a proof, never the proof itself. */
export function VerificationChip({
  label = "verification.ref",
  value = "vc:aur…7f31",
}: {
  label?: string;
  value?: string;
}) {
  return (
    <span
      className="inline-flex max-w-full items-center gap-1.5 overflow-hidden rounded-full border px-2.5 py-1 font-mono text-[10px]"
      style={{
        borderColor: GOLD_HAIR,
        background: "rgba(246,184,75,0.07)",
        color: GOLD_LIGHT,
      }}
    >
      <BadgeCheck className="h-3 w-3 shrink-0" strokeWidth={1.75} />
      <span className="shrink-0 font-semibold">{label}</span>
      {value ? (
        <span className="truncate" style={{ color: "rgba(255,204,115,0.6)" }}>
          {value}
        </span>
      ) : null}
    </span>
  );
}

/* ---------------------------------------------------------------- */
/* Mono key/value line — used inside UTxO and profile cards          */
/* ---------------------------------------------------------------- */

export function MonoRow({
  k,
  v,
  accent = false,
}: {
  k: string;
  v: string;
  accent?: boolean;
}) {
  return (
    <div className="flex items-baseline justify-between gap-3 font-mono text-[10.5px] leading-[1.9]">
      <span style={{ color: FAINT }}>{k}</span>
      <span
        className="truncate"
        style={{ color: accent ? GOLD_LIGHT : "rgba(244,239,227,0.78)" }}
      >
        {v}
      </span>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Loan Request UTxO card                                            */
/* ---------------------------------------------------------------- */

export function UTxOCard({
  hash,
  impl,
  compact = false,
}: {
  hash: string;
  impl: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between gap-2 rounded-[8px] border ${
        compact ? "px-2.5 py-1.5" : "px-3 py-2.5"
      }`}
      style={{ borderColor: HAIR, background: PANEL_DEEP }}
    >
      <span className="flex min-w-0 items-center gap-2">
        <span
          aria-hidden
          className="h-1.5 w-1.5 shrink-0 rounded-[2px]"
          style={{ background: "rgba(244,239,227,0.45)" }}
        />
        <span className="truncate font-mono text-[10.5px]" style={{ color: INK }}>
          {hash}
        </span>
      </span>
      <span
        className="shrink-0 font-mono text-[9px] uppercase tracking-[0.12em]"
        style={{ color: FAINT }}
      >
        {impl}
      </span>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Indexer — rows of index entries under a sweeping scan line        */
/* ---------------------------------------------------------------- */

export function IndexRows({
  rows = 5,
  height = 74,
}: {
  rows?: number;
  height?: number;
}) {
  const widths = [92, 68, 84, 54, 76, 62];
  return (
    <div
      aria-hidden
      className="relative overflow-hidden rounded-[8px] border"
      style={{ borderColor: HAIR, background: PANEL_DEEP, height }}
    >
      <div className="flex h-full flex-col justify-center gap-[7px] px-2.5">
        {Array.from({ length: rows }).map((_, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <span
              className="h-[3px] w-[3px] rounded-full"
              style={{ background: i % 2 === 0 ? GOLD : "rgba(244,239,227,0.28)" }}
            />
            <span
              className="h-[3px] rounded-full"
              style={{
                width: `${widths[i % widths.length]}%`,
                background: "rgba(244,239,227,0.16)",
              }}
            />
          </div>
        ))}
      </div>
      <span
        className="aurora-index-scan absolute inset-x-0 top-0 h-px"
        style={
          {
            background:
              "linear-gradient(90deg, transparent, rgba(255,204,115,0.95), transparent)",
            boxShadow: "0 0 10px rgba(246,184,75,0.55)",
            "--aurora-scan": `${height}px`,
          } as React.CSSProperties
        }
      />
    </div>
  );
}
