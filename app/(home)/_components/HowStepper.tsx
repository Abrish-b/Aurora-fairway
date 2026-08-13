"use client";

import { useEffect, useState, type ComponentType, type CSSProperties, type ReactNode } from "react";
import { Boxes, Filter, Layers, ScanLine, ShieldCheck, Terminal } from "lucide-react";

import { Chip, IndexRows, MonoRow, UTxOCard, VerificationChip } from "./TechPrimitives";
import { FAINT, GOLD, GOLD_HAIR, GOLD_LIGHT, HAIR, INK, PANEL, PANEL_DEEP } from "./theme";

type IconType = ComponentType<{ className?: string; strokeWidth?: number; style?: CSSProperties }>;

type Step = {
  icon: IconType;
  label: string;
  detail: string;
  aurora?: boolean;
  visual: ReactNode;
};

const STEPS: Step[] = [
  {
    icon: Boxes,
    label: "A credit opportunity is created",
    detail: "A compatible lending implementation publishes a Loan Request UTxO on Cardano.",
    visual: (
      <div className="space-y-2">
        <UTxOCard hash="utxo·a1f7…04" impl="impl. A" />
        <UTxOCard hash="utxo·9c04…b2" impl="impl. B" />
        <UTxOCard hash="utxo·3be2…7d" impl="impl. C" />
      </div>
    ),
  },
  {
    icon: Layers,
    label: "Standard metadata is attached",
    detail: "Jurisdiction, duration, asset, ticket size and verification references, in one shared schema.",
    aurora: true,
    visual: (
      <div className="flex flex-wrap gap-1.5">
        <Chip accent>jurisdiction</Chip>
        <Chip accent>duration</Chip>
        <Chip accent>asset</Chip>
        <Chip accent>ticket_size</Chip>
        <Chip accent>eligibility</Chip>
        <VerificationChip label="verification.ref" value="" />
      </div>
    ),
  },
  {
    icon: ScanLine,
    label: "Aurora indexes it",
    detail: "The Discovery Engine reads every compatible UTxO and organises it into one searchable market.",
    aurora: true,
    visual: <IndexRows rows={6} height={104} />,
  },
  {
    icon: Terminal,
    label: "Open APIs expose it",
    detail: "Any application or capital provider can query the index directly.",
    aurora: true,
    visual: (
      <div
        className="rounded-[10px] border px-3 py-2.5"
        style={{ borderColor: GOLD_HAIR, background: PANEL_DEEP }}
      >
        <MonoRow k="GET" v="/v1/opportunities" accent />
        <MonoRow k="200" v="128 indexed" />
        <MonoRow k="schema" v="aurora.v1" />
      </div>
    ),
  },
  {
    icon: Filter,
    label: "Capital providers filter",
    detail: "Results narrow against published criteria — openly, with no ranking or ordering logic.",
    visual: (
      <div className="space-y-1.5">
        {[
          { utxo: "utxo·a1f7…04", tags: ["ET", "120d"] },
          { utxo: "utxo·3be2…7d", tags: ["ET", "180d"] },
        ].map((r) => (
          <div
            key={r.utxo}
            className="flex items-center justify-between gap-2 rounded-[8px] border px-3 py-2"
            style={{ borderColor: HAIR, background: PANEL_DEEP }}
          >
            <span className="truncate font-mono text-[11px]" style={{ color: INK }}>
              {r.utxo}
            </span>
            <span className="flex shrink-0 gap-1">
              {r.tags.map((t) => (
                <Chip key={t} size="sm">
                  {t}
                </Chip>
              ))}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: ShieldCheck,
    label: "Verification is evaluated",
    detail: "Proof-based references are checked through the Verification Framework. Funding and settlement never touch Aurora.",
    visual: (
      <div className="flex flex-wrap items-center gap-1.5">
        <VerificationChip label="institutional" value="ref·7f31" />
        <VerificationChip label="eligibility" value="ref·b204" />
      </div>
    ),
  },
];

export default function HowStepper() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const id = window.setInterval(() => setActive((i) => (i + 1) % STEPS.length), 4600);
    return () => window.clearInterval(id);
  }, [paused]);

  const step = STEPS[active];

  return (
    <div
      className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(0,340px)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
    >
      {/* step list */}
      <ol
        className="overflow-hidden rounded-[16px] border"
        style={{ borderColor: HAIR, background: "rgba(255,255,255,0.014)" }}
      >
        {STEPS.map((s, i) => {
          const on = i === active;
          return (
            <li key={s.label} className="border-b last:border-b-0" style={{ borderColor: HAIR }}>
              <button
                type="button"
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                aria-pressed={on}
                className="group flex w-full cursor-pointer items-start gap-3.5 px-4 py-3.5 text-left transition duration-300 ease-out focus-visible:outline focus-visible:outline-1 focus-visible:-outline-offset-2 focus-visible:outline-[#ffcc73] sm:px-5"
                style={{ background: on ? "rgba(246,184,75,0.07)" : "transparent" }}
              >
                <span
                  className="mt-px grid h-7 w-7 shrink-0 place-items-center rounded-full border font-mono text-[10px] font-bold transition duration-300"
                  style={{
                    borderColor: on ? "rgba(246,184,75,0.6)" : "rgba(244,239,227,0.16)",
                    background: on ? "rgba(246,184,75,0.14)" : PANEL,
                    color: on ? GOLD_LIGHT : FAINT,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-2">
                    <span
                      className="text-[13.5px] font-semibold leading-snug transition duration-300"
                      style={{ color: on ? INK : "rgba(244,239,227,0.7)" }}
                    >
                      {s.label}
                    </span>
                    {s.aurora ? (
                      <span
                        className="shrink-0 rounded-full border px-1.5 py-px font-mono text-[8.5px] font-bold uppercase tracking-[0.12em]"
                        style={{ borderColor: GOLD_HAIR, color: GOLD }}
                      >
                        Aurora
                      </span>
                    ) : null}
                  </span>
                  {on ? (
                    <span
                      className="aurora-fade-in mt-1.5 block text-[12.5px] leading-[1.6]"
                      style={{ color: DIMMED }}
                    >
                      {s.detail}
                    </span>
                  ) : null}
                </span>

                <s.icon
                  className="mt-0.5 h-4 w-4 shrink-0 transition duration-300"
                  strokeWidth={1.5}
                  style={{ color: on ? GOLD_LIGHT : "rgba(244,239,227,0.28)" }}
                />
              </button>
            </li>
          );
        })}
      </ol>

      {/* live visual for the active step */}
      <div
        className="aurora-blueprint flex flex-col justify-center rounded-[16px] border p-4 lg:sticky lg:top-24 lg:self-start"
        style={{ borderColor: GOLD_HAIR, backgroundColor: "rgba(246,184,75,0.035)" }}
      >
        <p
          className="mb-3 font-mono text-[9px] font-bold uppercase tracking-[0.18em]"
          style={{ color: GOLD }}
        >
          {step.aurora ? "Aurora scope" : "Participant scope"}
        </p>
        <div key={active} className="aurora-fade-in">
          {step.visual}
        </div>
      </div>
    </div>
  );
}

const DIMMED = "rgba(244,239,227,0.66)";
