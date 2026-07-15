"use client";

import { useState } from "react";
import { BadgeCheck, Filter, MapPin, ShieldCheck, Stamp } from "lucide-react";

const GOLD = "#C89B3C";
const GOLD_HOVER = "#B8892F";
const GRAY_BODY = "#6F6F6F";

type ChipGroup = {
  id: string;
  label: string;
  icon: typeof Filter;
  options: string[];
};

const GROUPS: ChipGroup[] = [
  {
    id: "proof",
    label: "Proof type",
    icon: ShieldCheck,
    options: ["KYC", "Entity", "Accredited", "Role"],
  },
  {
    id: "issuer",
    label: "Issuer",
    icon: Stamp,
    options: ["Veridian", "Fairway", "Self-issued"],
  },
  {
    id: "jurisdiction",
    label: "Jurisdiction",
    icon: MapPin,
    options: ["EU", "UK", "CH", "US"],
  },
  {
    id: "risk",
    label: "Risk band",
    icon: Filter,
    options: ["A", "B", "C"],
  },
];

const ALL_LOANS = [
  { id: "lr_8a32f1", amount: "₳ 24,500", term: "90d", proof: "KYC", issuer: "Veridian", region: "EU", risk: "A" },
  { id: "lr_91be03", amount: "₳ 12,000", term: "30d", proof: "Entity", issuer: "Fairway", region: "CH", risk: "B" },
  { id: "lr_4f12da", amount: "₳ 80,000", term: "180d", proof: "KYC", issuer: "Veridian", region: "EU", risk: "A" },
  { id: "lr_7c0a82", amount: "₳ 6,200", term: "60d", proof: "Role", issuer: "Self-issued", region: "UK", risk: "C" },
  { id: "lr_2b39e1", amount: "₳ 45,000", term: "120d", proof: "Accredited", issuer: "Fairway", region: "EU", risk: "B" },
];

export default function LenderFilteringMockup() {
  const [selected, setSelected] = useState<Record<string, Set<string>>>({
    proof: new Set(["KYC"]),
    issuer: new Set(["Veridian"]),
    jurisdiction: new Set(["EU"]),
    risk: new Set(),
  });
  const [verifiedOnly, setVerifiedOnly] = useState(true);

  const toggle = (group: string, opt: string) => {
    setSelected((prev) => {
      const next = { ...prev };
      const set = new Set(next[group] ?? new Set());
      if (set.has(opt)) set.delete(opt);
      else set.add(opt);
      next[group] = set;
      return next;
    });
  };

  const matches = ALL_LOANS.filter((loan) => {
    const proofOk = selected.proof.size === 0 || selected.proof.has(loan.proof);
    const issuerOk =
      selected.issuer.size === 0 || selected.issuer.has(loan.issuer);
    const jurOk =
      selected.jurisdiction.size === 0 ||
      selected.jurisdiction.has(loan.region);
    const riskOk = selected.risk.size === 0 || selected.risk.has(loan.risk);
    return proofOk && issuerOk && jurOk && riskOk;
  });

  return (
    <div className="overflow-hidden rounded-[12px] border border-[#1B384C]/14 bg-white shadow-[0_22px_70px_rgba(33,42,50,0.08)]">
      <div className="flex items-center justify-between border-b border-[#1B384C]/10 bg-[#f8f3eb] px-5 py-3">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4" strokeWidth={1.7} style={{ color: GOLD_HOVER }} />
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#101823]">
            Lender filters
          </p>
        </div>
        <p
          className="text-[11px] font-semibold tabular-nums"
          style={{ color: GRAY_BODY }}
        >
          {matches.length} matched · {ALL_LOANS.length} indexed
        </p>
      </div>

      <div className="grid gap-6 p-5 lg:grid-cols-[260px_1fr] lg:p-6">
        <div className="space-y-5">
          {GROUPS.map((g) => {
            const Icon = g.icon;
            const set = selected[g.id] ?? new Set();
            return (
              <div key={g.id}>
                <p
                  className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em]"
                  style={{ color: GRAY_BODY }}
                >
                  <Icon className="h-3 w-3" strokeWidth={1.8} />
                  {g.label}
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {g.options.map((opt) => {
                    const on = set.has(opt);
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => toggle(g.id, opt)}
                        aria-pressed={on}
                        className={[
                          "rounded-full border px-2.5 py-1 text-[11px] font-semibold transition",
                          on
                            ? "border-[#C89B3C] bg-[#fff3d8] text-[#8A5A1F]"
                            : "border-[#1B384C]/15 bg-white text-[#1B384C]/72 hover:border-[#C89B3C]/40 hover:text-[#101823]",
                        ].join(" ")}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}

          <label className="mt-2 flex items-center gap-2 rounded-[8px] border border-[#C89B3C]/30 bg-[#fffdf7] px-3 py-2 text-[12px] text-[#101823]">
            <input
              type="checkbox"
              checked={verifiedOnly}
              onChange={(e) => setVerifiedOnly(e.target.checked)}
              className="h-4 w-4 accent-[#C89B3C]"
            />
            <span className="font-semibold">Verified only</span>
          </label>
        </div>

        <div>
          <p
            className="text-[10px] font-bold uppercase tracking-[0.2em]"
            style={{ color: GRAY_BODY }}
          >
            Verified market view
          </p>
          <ul className="mt-3 space-y-2">
            {matches.length === 0 && (
              <li className="rounded-[8px] border border-dashed border-[#1B384C]/15 bg-[#fffdf7] px-4 py-6 text-center text-[12px]" style={{ color: GRAY_BODY }}>
                No loans match the current filters.
              </li>
            )}
            {matches.map((loan) => (
              <li
                key={loan.id}
                className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-[8px] border border-[#1B384C]/10 bg-white px-4 py-3 shadow-[0_4px_14px_rgba(33,42,50,0.04)]"
              >
                <span
                  className="flex h-7 w-7 items-center justify-center rounded-full"
                  style={{ background: "rgba(200,155,60,0.14)" }}
                >
                  <BadgeCheck className="h-4 w-4" strokeWidth={1.7} style={{ color: GOLD }} />
                </span>
                <div>
                  <p className="text-[13px] font-semibold text-[#101823]">
                    {loan.amount} · {loan.term}
                  </p>
                  <p
                    className="mt-0.5 text-[11px] font-mono"
                    style={{ color: GRAY_BODY }}
                  >
                    {loan.id} · {loan.proof} · {loan.issuer} · {loan.region} · risk {loan.risk}
                  </p>
                </div>
                <span
                  className="rounded-full border border-[#C89B3C]/40 bg-[#fffdf7] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em]"
                  style={{ color: GOLD_HOVER }}
                >
                  Eligible
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
