"use client";

import { useState, type ComponentType, type CSSProperties } from "react";
import {
  Braces,
  CodeXml,
  Landmark,
  Library,
  ListFilter,
  Minus,
  ScanLine,
  ShieldCheck,
  Terminal,
} from "lucide-react";

import { DIM, FAINT, GOLD, GOLD_LIGHT, HAIR, INK, PANEL } from "./theme";

type IconType = ComponentType<{ className?: string; strokeWidth?: number; style?: CSSProperties }>;

const DELIVERABLES: { icon: IconType; title: string; detail: string }[] = [
  {
    icon: Braces,
    title: "Metadata Standard",
    detail: "A versioned open specification for describing Aurora-compatible credit opportunities.",
  },
  {
    icon: ShieldCheck,
    title: "Verification Framework",
    detail: "An extensible way to attach and evaluate institutional, eligibility, and compliance proofs.",
  },
  {
    icon: ScanLine,
    title: "Aurora Discovery Engine",
    detail: "An open-source service that indexes compatible Loan Request UTxOs and tracks lifecycle information.",
  },
  {
    icon: Terminal,
    title: "Open APIs",
    detail: "Public interfaces for querying opportunities, metadata, verification, and lifecycle data.",
  },
  {
    icon: ListFilter,
    title: "Filtering and Query Capabilities",
    detail: "Open filtering built on the published metadata schemas.",
  },
  {
    icon: Landmark,
    title: "Capital Provider Profile Standard",
    detail: "An open schema for requirements: jurisdiction, ticket size, duration, asset, verification, risk.",
  },
  {
    icon: Library,
    title: "Reference Query Library",
    detail: "Worked examples of querying and filtering the market using the published standards.",
  },
  {
    icon: CodeXml,
    title: "Developer Tooling and Reference Implementation",
    detail: "Reference code, documentation, and integration examples for adopting Aurora.",
  },
];

const NOT = [
  "A lender",
  "A lending protocol",
  "A loan originator",
  "A capital custodian",
  "A commercial lending pilot",
  "A stablecoin or fiat settlement provider",
  "A proprietary capital-allocation product",
  "A replacement for underlying lending protocols",
];

/**
 * Editorial split: the scope boundary stays pinned on the left while the
 * eight Treasury-funded deliverables scroll past on the right. Only the
 * active row shows its description.
 */
export default function DeliverablesSplit() {
  const [active, setActive] = useState(0);

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-12">
      <div className="lg:sticky lg:top-24 lg:self-start">
        <p
          className="flex items-center gap-2.5 font-mono text-[9.5px] font-bold uppercase tracking-[0.2em]"
          style={{ color: GOLD }}
        >
          <span style={{ color: FAINT }}>03</span>
          <span aria-hidden className="h-px w-6" style={{ background: "rgba(246,184,75,0.4)" }} />
          What Aurora delivers
        </p>
        <h2 className="mt-3 font-serif text-[24px] font-normal leading-[1.12] sm:text-[31px] lg:text-[35px]">
          Eight open{" "}
          <em className="italic" style={{ color: GOLD_LIGHT }}>
            public deliverables.
          </em>
        </h2>

        <div
          className="mt-7 rounded-[16px] border p-4"
          style={{ borderColor: HAIR, background: PANEL }}
        >
          <p
            className="font-mono text-[9px] font-bold uppercase tracking-[0.2em]"
            style={{ color: FAINT }}
          >
            Aurora is not
          </p>
          <ul className="mt-3 space-y-1.5">
            {NOT.map((n) => (
              <li key={n} className="flex items-center gap-2 text-[11.5px]" style={{ color: DIM }}>
                <Minus
                  className="h-3 w-3 shrink-0"
                  strokeWidth={1.7}
                  style={{ color: "rgba(244,239,227,0.26)" }}
                />
                {n}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ol
        className="overflow-hidden rounded-[18px] border"
        style={{ borderColor: HAIR, background: "rgba(255,255,255,0.014)" }}
      >
        {DELIVERABLES.map((d, i) => {
          const on = i === active;
          return (
            <li key={d.title} className="border-b last:border-b-0" style={{ borderColor: HAIR }}>
              <button
                type="button"
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                aria-pressed={on}
                className="group flex w-full cursor-pointer items-start gap-4 px-4 py-4 text-left transition duration-300 ease-out focus-visible:outline focus-visible:outline-1 focus-visible:-outline-offset-2 focus-visible:outline-[#ffcc73] sm:px-6"
                style={{ background: on ? "rgba(246,184,75,0.07)" : "transparent" }}
              >
                <span
                  className="mt-0.5 shrink-0 font-mono text-[10px] font-bold tracking-[0.14em] transition duration-300"
                  style={{ color: on ? GOLD : "rgba(244,239,227,0.24)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1">
                  <span
                    className="block text-[14px] font-semibold leading-snug transition duration-300"
                    style={{ color: on ? INK : "rgba(244,239,227,0.74)" }}
                  >
                    {d.title}
                  </span>
                  {on ? (
                    <span
                      className="aurora-fade-in mt-1.5 block text-[12.5px] leading-[1.6]"
                      style={{ color: "rgba(244,239,227,0.66)" }}
                    >
                      {d.detail}
                    </span>
                  ) : null}
                </span>
                <d.icon
                  className="mt-0.5 h-4 w-4 shrink-0 transition duration-300"
                  strokeWidth={1.5}
                  style={{ color: on ? GOLD_LIGHT : "rgba(244,239,227,0.26)" }}
                />
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
