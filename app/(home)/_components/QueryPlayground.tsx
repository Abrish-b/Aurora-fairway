"use client";

import { useMemo, useState } from "react";
import { RotateCcw } from "lucide-react";

import { Chip, TechPanel, VerificationChip } from "./TechPrimitives";
import { DIM, FAINT, GOLD, GOLD_LIGHT, HAIR, INK, PANEL_DEEP } from "./theme";

type Opportunity = {
  utxo: string;
  impl: string;
  jurisdiction: string;
  days: number;
  ticket: number;
  verification: string[];
};

const MARKET: Opportunity[] = [
  { utxo: "utxo·a1f7…04", impl: "impl. A", jurisdiction: "ET", days: 120, ticket: 40000, verification: ["institutional"] },
  { utxo: "utxo·9c04…b2", impl: "impl. B", jurisdiction: "KE", days: 90, ticket: 75000, verification: ["institutional", "eligibility"] },
  { utxo: "utxo·3be2…7d", impl: "impl. A", jurisdiction: "ET", days: 180, ticket: 180000, verification: ["institutional", "eligibility"] },
  { utxo: "utxo·5d81…19", impl: "impl. C", jurisdiction: "NG", days: 365, ticket: 240000, verification: ["eligibility"] },
  { utxo: "utxo·c70a…f5", impl: "impl. B", jurisdiction: "KE", days: 60, ticket: 18000, verification: [] },
  { utxo: "utxo·e214…8c", impl: "impl. A", jurisdiction: "ET", days: 240, ticket: 95000, verification: ["institutional"] },
  { utxo: "utxo·77bd…31", impl: "impl. C", jurisdiction: "NG", days: 90, ticket: 52000, verification: ["institutional", "eligibility"] },
  { utxo: "utxo·b9f3…6e", impl: "impl. B", jurisdiction: "KE", days: 180, ticket: 130000, verification: ["eligibility"] },
];

const JURISDICTIONS = ["ET", "KE", "NG"];
const DURATIONS = [90, 180, 365];
const TICKETS = [25000, 100000];
const VERIFICATIONS = ["institutional", "eligibility"];

type Requirements = {
  jurisdiction: string[];
  duration: number | null;
  ticket: number | null;
  verification: string[];
};

const EMPTY: Requirements = { jurisdiction: [], duration: null, ticket: null, verification: [] };

const INITIAL: Requirements = {
  jurisdiction: ["ET", "KE"],
  duration: 180,
  ticket: 25000,
  verification: ["institutional"],
};

function toggle(list: string[], value: string) {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
}

function compact(n: number) {
  return n >= 1000 ? `${n / 1000}k` : String(n);
}

/**
 * Requirements → Capital Provider Profile → reference query → filtered results,
 * all live. Open filtering only: no ranking, no allocation, no ordering logic.
 */
export default function QueryPlayground() {
  const [req, setReq] = useState<Requirements>(INITIAL);

  const results = useMemo(
    () =>
      MARKET.filter((o) => {
        if (req.jurisdiction.length && !req.jurisdiction.includes(o.jurisdiction)) return false;
        if (req.duration !== null && o.days > req.duration) return false;
        if (req.ticket !== null && o.ticket < req.ticket) return false;
        if (req.verification.length && !req.verification.every((v) => o.verification.includes(v)))
          return false;
        return true;
      }),
    [req],
  );

  const profileLines: [string, string][] = [
    ["jurisdiction", req.jurisdiction.length ? `[${req.jurisdiction.map((j) => `"${j}"`).join(", ")}]` : "null"],
    ["duration_days", req.duration ? `{ "max": ${req.duration} }` : "null"],
    ["ticket_size", req.ticket ? `{ "min": ${req.ticket} }` : "null"],
    ["verification", req.verification.length ? `[${req.verification.map((v) => `"${v}"`).join(", ")}]` : "[]"],
  ];

  const queryParams = [
    req.jurisdiction.length ? `jurisdiction=${req.jurisdiction.join(",")}` : null,
    req.duration ? `duration_max=${req.duration}` : null,
    req.ticket ? `ticket_min=${req.ticket}` : null,
    req.verification.length ? `verification=${req.verification.join(",")}` : null,
  ].filter(Boolean) as string[];

  return (
    <div className="space-y-2.5">
      {/* requirements input */}
      <div
        className="aurora-blueprint rounded-[16px] border p-4"
        style={{ borderColor: HAIR, backgroundColor: "rgba(255,255,255,0.016)" }}
      >
        <div className="flex items-center justify-between gap-3">
          <p
            className="font-mono text-[9.5px] font-bold uppercase tracking-[0.18em]"
            style={{ color: GOLD }}
          >
            Capital-provider requirements
          </p>
          <button
            type="button"
            onClick={() => setReq(EMPTY)}
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.12em] transition hover:border-[rgba(246,184,75,0.4)] hover:text-[#ffcc73]"
            style={{ borderColor: HAIR, color: FAINT }}
          >
            <RotateCcw className="h-3 w-3" strokeWidth={1.6} />
            Clear
          </button>
        </div>

        <div className="mt-3.5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <FacetGroup label="jurisdiction">
            {JURISDICTIONS.map((j) => (
              <Toggle
                key={j}
                on={req.jurisdiction.includes(j)}
                onClick={() =>
                  setReq((r) => ({ ...r, jurisdiction: toggle(r.jurisdiction, j) }))
                }
              >
                {j}
              </Toggle>
            ))}
          </FacetGroup>

          <FacetGroup label="duration_max">
            {DURATIONS.map((d) => (
              <Toggle
                key={d}
                on={req.duration === d}
                onClick={() => setReq((r) => ({ ...r, duration: r.duration === d ? null : d }))}
              >
                ≤{d}d
              </Toggle>
            ))}
          </FacetGroup>

          <FacetGroup label="ticket_min">
            {TICKETS.map((t) => (
              <Toggle
                key={t}
                on={req.ticket === t}
                onClick={() => setReq((r) => ({ ...r, ticket: r.ticket === t ? null : t }))}
              >
                ≥{compact(t)}
              </Toggle>
            ))}
          </FacetGroup>

          <FacetGroup label="verification">
            {VERIFICATIONS.map((v) => (
              <Toggle
                key={v}
                on={req.verification.includes(v)}
                onClick={() =>
                  setReq((r) => ({ ...r, verification: toggle(r.verification, v) }))
                }
              >
                {v}
              </Toggle>
            ))}
          </FacetGroup>
        </div>
      </div>

      {/* live outputs */}
      <div className="grid gap-2.5 lg:grid-cols-3">
        <TechPanel label="capital-provider-profile.json" status={<Chip size="sm">schema v1</Chip>}>
          <div className="font-mono text-[10px] leading-[1.9]">
            <p style={{ color: FAINT }}>{"{"}</p>
            {profileLines.map(([k, v], i) => (
              <p key={k} className="truncate pl-3">
                <span style={{ color: "rgba(244,239,227,0.58)" }}>&quot;{k}&quot;</span>
                <span style={{ color: FAINT }}>: </span>
                <span style={{ color: v === "null" || v === "[]" ? FAINT : GOLD_LIGHT }}>{v}</span>
                {i < profileLines.length - 1 ? <span style={{ color: FAINT }}>,</span> : null}
              </p>
            ))}
            <p style={{ color: FAINT }}>{"}"}</p>
          </div>
        </TechPanel>

        <TechPanel label="reference-query.http" status={<Chip size="sm">open API</Chip>} accent>
          <div className="overflow-x-auto font-mono text-[10px] leading-[1.9]">
            <p className="whitespace-pre" style={{ color: GOLD_LIGHT }}>
              GET /v1/opportunities
            </p>
            {queryParams.length === 0 ? (
              <p className="whitespace-pre" style={{ color: FAINT }}>
                {"  "}(no filters — full index)
              </p>
            ) : (
              queryParams.map((p, i) => (
                <p key={p} className="whitespace-pre" style={{ color: "rgba(244,239,227,0.72)" }}>
                  {`  ${i === 0 ? "?" : "&"}${p}`}
                </p>
              ))
            )}
            <p className="whitespace-pre">
              {"  "}
              <span className="aurora-caret" style={{ color: GOLD }}>
                ▌
              </span>
            </p>
          </div>
        </TechPanel>

        <TechPanel
          label="filtered opportunities"
          bodyClassName="p-2"
          status={
            <span
              className="shrink-0 font-mono text-[9.5px] tracking-[0.06em]"
              style={{ color: results.length ? GOLD_LIGHT : FAINT }}
            >
              {results.length} / {MARKET.length} match
            </span>
          }
        >
          {results.length === 0 ? (
            <p className="px-1.5 py-4 text-center font-mono text-[10px]" style={{ color: FAINT }}>
              No opportunity meets these requirements.
            </p>
          ) : (
            <ul className="max-h-[212px] space-y-1.5 overflow-y-auto pr-0.5">
              {results.map((r) => (
                <li
                  key={r.utxo}
                  className="aurora-fade-in rounded-[8px] border p-2"
                  style={{ borderColor: HAIR, background: PANEL_DEEP }}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="truncate font-mono text-[10px]" style={{ color: INK }}>
                      {r.utxo}
                    </span>
                    <span
                      className="shrink-0 font-mono text-[9px] uppercase tracking-[0.1em]"
                      style={{ color: FAINT }}
                    >
                      {r.impl}
                    </span>
                  </div>
                  <div className="mt-1.5 flex flex-wrap gap-1">
                    <Chip size="sm">{r.jurisdiction}</Chip>
                    <Chip size="sm">{r.days}d</Chip>
                    <Chip size="sm">{compact(r.ticket)}</Chip>
                    {r.verification.map((v) => (
                      <VerificationChip key={v} label={v} value="" />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </TechPanel>
      </div>

      <p className="text-[11.5px] leading-[1.6]" style={{ color: FAINT }}>
        Open filtering against published schemas — no ranking, no ordering logic,
        no allocation. Evaluation stays with the capital provider.
      </p>
    </div>
  );
}

function FacetGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-mono text-[9.5px] tracking-[0.1em]" style={{ color: FAINT }}>
        {label}
      </p>
      <div className="mt-2 flex flex-wrap gap-1.5">{children}</div>
    </div>
  );
}

function Toggle({
  on,
  onClick,
  children,
}: {
  on: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={on}
      className="cursor-pointer rounded-full border px-2.5 py-1 font-mono text-[10px] font-semibold transition duration-200 hover:-translate-y-px focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[#ffcc73]"
      style={{
        borderColor: on ? "rgba(246,184,75,0.55)" : HAIR,
        background: on ? "rgba(246,184,75,0.12)" : "rgba(255,255,255,0.025)",
        color: on ? GOLD_LIGHT : DIM,
      }}
    >
      {children}
    </button>
  );
}
