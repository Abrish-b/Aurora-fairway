"use client";

import { useMemo, useState } from "react";
import {
  BadgeCheck,
  Coins,
  Fingerprint,
  Gauge,
  Hash,
  LockKeyhole,
  MapPin,
  ShieldCheck,
  SlidersHorizontal,
  Stamp,
} from "lucide-react";

const GOLD = "#C89B3C";
const GOLD_HOVER = "#B8892F";
const GRAY_BODY = "#6F6F6F";

type Loan = {
  id: string;
  amount: string;
  amountNum: number;
  collateral: "BTC / ADA" | "ADA" | "BTC";
  apr: string;
  ltv: string;
  ltvNum: number;
  duration: string;
  region: "EU" | "US" | "APAC";
  proof: "KYC-ZK" | "Accred" | "KYB" | "Pseudonymous";
  issuer: "Veridian" | "Beam" | "Self-issued";
  expiresDays: number;
  riskBand: "A" | "BBB" | "BB";
};

type FilterKey =
  | "verified"
  | "issuer-veridian"
  | "issuer-beam"
  | "proof-kyc"
  | "proof-accred"
  | "region-eu"
  | "region-us"
  | "size-mid"
  | "collat-btc"
  | "risk-ig"
  | "expiry-90"
  | "active";

const ALL_LOANS: Loan[] = [
  { id: "#4291", amount: "10,000 ADA", amountNum: 10000, collateral: "BTC / ADA", apr: "8.42%", ltv: "62%", ltvNum: 62, duration: "6 mo", region: "EU", proof: "KYC-ZK", issuer: "Veridian", expiresDays: 41, riskBand: "A" },
  { id: "#4287", amount: "4,200 ADA", amountNum: 4200, collateral: "ADA", apr: "9.10%", ltv: "58%", ltvNum: 58, duration: "3 mo", region: "EU", proof: "KYB", issuer: "Veridian", expiresDays: 12, riskBand: "BBB" },
  { id: "#4262", amount: "18,500 ADA", amountNum: 18500, collateral: "BTC", apr: "7.62%", ltv: "55%", ltvNum: 55, duration: "12 mo", region: "US", proof: "Accred", issuer: "Beam", expiresDays: 88, riskBand: "A" },
  { id: "#4258", amount: "2,800 ADA", amountNum: 2800, collateral: "ADA", apr: "11.20%", ltv: "71%", ltvNum: 71, duration: "1 mo", region: "APAC", proof: "Pseudonymous", issuer: "Self-issued", expiresDays: 0, riskBand: "BB" },
  { id: "#4244", amount: "32,000 ADA", amountNum: 32000, collateral: "BTC", apr: "7.18%", ltv: "48%", ltvNum: 48, duration: "12 mo", region: "EU", proof: "KYC-ZK", issuer: "Veridian", expiresDays: 64, riskBand: "A" },
  { id: "#4237", amount: "6,400 ADA", amountNum: 6400, collateral: "BTC / ADA", apr: "8.95%", ltv: "63%", ltvNum: 63, duration: "6 mo", region: "US", proof: "KYC-ZK", issuer: "Beam", expiresDays: 27, riskBand: "BBB" },
  { id: "#4221", amount: "1,500 ADA", amountNum: 1500, collateral: "ADA", apr: "12.40%", ltv: "75%", ltvNum: 75, duration: "1 mo", region: "APAC", proof: "Pseudonymous", issuer: "Self-issued", expiresDays: 0, riskBand: "BB" },
  { id: "#4209", amount: "22,750 ADA", amountNum: 22750, collateral: "BTC", apr: "7.42%", ltv: "52%", ltvNum: 52, duration: "12 mo", region: "EU", proof: "Accred", issuer: "Veridian", expiresDays: 110, riskBand: "A" },
];

type FilterDef = {
  key: FilterKey;
  label: string;
  value: string;
  icon: typeof ShieldCheck;
  predicate: (l: Loan) => boolean;
};

const FILTERS: FilterDef[] = [
  { key: "verified", label: "Verified only", value: "On", icon: ShieldCheck, predicate: (l) => l.proof !== "Pseudonymous" },
  { key: "issuer-veridian", label: "Issuer: Veridian", value: "On", icon: Stamp, predicate: (l) => l.issuer === "Veridian" },
  { key: "issuer-beam", label: "Issuer: Beam", value: "On", icon: Stamp, predicate: (l) => l.issuer === "Beam" },
  { key: "proof-kyc", label: "Proof: KYC-ZK", value: "On", icon: Fingerprint, predicate: (l) => l.proof === "KYC-ZK" },
  { key: "proof-accred", label: "Proof: Accredited", value: "On", icon: Fingerprint, predicate: (l) => l.proof === "Accred" },
  { key: "region-eu", label: "Region: EU", value: "On", icon: MapPin, predicate: (l) => l.region === "EU" },
  { key: "region-us", label: "Region: US", value: "On", icon: MapPin, predicate: (l) => l.region === "US" },
  { key: "size-mid", label: "Size 5k–25k ADA", value: "On", icon: Coins, predicate: (l) => l.amountNum >= 5000 && l.amountNum <= 25000 },
  { key: "collat-btc", label: "Collateral has BTC", value: "On", icon: LockKeyhole, predicate: (l) => l.collateral.includes("BTC") },
  { key: "risk-ig", label: "Risk: A or BBB", value: "On", icon: Gauge, predicate: (l) => l.riskBand === "A" || l.riskBand === "BBB" },
  { key: "expiry-90", label: "Expiry ≤ 90d", value: "On", icon: Hash, predicate: (l) => l.expiresDays > 0 && l.expiresDays <= 90 },
  { key: "active", label: "Identity active", value: "On", icon: BadgeCheck, predicate: (l) => l.expiresDays > 0 },
];

const DEFAULT_ACTIVE: FilterKey[] = ["verified", "issuer-veridian", "proof-kyc", "region-eu"];

export default function InteractiveFilters() {
  const [active, setActive] = useState<Set<FilterKey>>(
    () => new Set<FilterKey>(DEFAULT_ACTIVE),
  );

  const toggle = (key: FilterKey) =>
    setActive((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });

  const visibleLoans = useMemo(() => {
    const preds = FILTERS.filter((f) => active.has(f.key)).map((f) => f.predicate);
    if (preds.length === 0) return ALL_LOANS;
    return ALL_LOANS.filter((loan) => preds.every((p) => p(loan)));
  }, [active]);

  const verifiedSubset = useMemo(
    () => ALL_LOANS.filter((l) => l.proof !== "Pseudonymous"),
    [],
  );

  return (
    <div className="mt-12 overflow-hidden rounded-[14px] border border-[#1B384C]/14 bg-white shadow-[0_22px_70px_rgba(33,42,50,0.07)]">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#1B384C]/10 bg-[#fffdf7] px-5 py-3">
        <div className="flex items-center gap-2">
          <SlidersHorizontal
            className="h-4 w-4"
            strokeWidth={1.7}
            style={{ color: GOLD }}
          />
          <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#101823]">
            Lender Console
          </span>
          <span className="ml-2 hidden rounded-full bg-[#fff3d8] px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.16em] sm:inline" style={{ color: GOLD_HOVER }}>
            Try the filters
          </span>
        </div>
        <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#101823]/60">
          <span
            className="relative inline-flex items-center gap-1.5 rounded-full bg-[#2AAE9B]/10 px-2 py-0.5"
            style={{ color: "#2AAE9B" }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 rounded-full sundown-live-pulse" style={{ color: "#2AAE9B" }} />
              <span className="relative h-1.5 w-1.5 rounded-full bg-[#2AAE9B]" />
            </span>
            Indexer healthy
          </span>
          <span className="tabular-nums">
            {verifiedSubset.length} verified · {ALL_LOANS.length} indexed
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr]">
        {/* Filter rail */}
        <aside className="border-b border-[#1B384C]/10 bg-[#f8f3eb] p-5 lg:border-b-0 lg:border-r">
          <div className="flex items-center justify-between">
            <p
              className="text-[10px] font-bold uppercase tracking-[0.2em]"
              style={{ color: GRAY_BODY }}
            >
              Filters · {active.size} active
            </p>
            {active.size > 0 ? (
              <button
                type="button"
                onClick={() => setActive(new Set())}
                className="cursor-pointer rounded-full border border-[#1B384C]/14 bg-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#101823]/68 transition hover:border-[#C89B3C]/45 hover:text-[#101823]"
              >
                Clear
              </button>
            ) : null}
          </div>

          <div className="mt-4 space-y-2">
            {FILTERS.map((f) => {
              const isOn = active.has(f.key);
              return (
                <button
                  key={f.key}
                  type="button"
                  aria-pressed={isOn}
                  onClick={() => toggle(f.key)}
                  className={[
                    "flex w-full cursor-pointer items-center justify-between rounded-[6px] border px-3 py-2 text-left transition duration-150",
                    isOn
                      ? "border-[#C89B3C]/55 bg-[#fff3d8]"
                      : "border-[#1B384C]/10 bg-white hover:border-[#C89B3C]/30 hover:bg-[#fffdf7]",
                  ].join(" ")}
                >
                  <div className="flex items-center gap-2">
                    <f.icon
                      className="h-3.5 w-3.5"
                      strokeWidth={1.7}
                      style={{ color: isOn ? GOLD : "#1B384C" }}
                    />
                    <span className="text-[12px] font-semibold text-[#101823]">
                      {f.label}
                    </span>
                  </div>
                  <span
                    className={[
                      "relative inline-flex h-4 w-7 items-center rounded-full transition",
                      isOn ? "bg-[#C89B3C]" : "bg-[#1B384C]/18",
                    ].join(" ")}
                  >
                    <span
                      className={[
                        "absolute h-3 w-3 rounded-full bg-white shadow transition",
                        isOn ? "translate-x-3.5" : "translate-x-0.5",
                      ].join(" ")}
                    />
                  </span>
                </button>
              );
            })}
          </div>
        </aside>

        {/* Results */}
        <div className="p-5">
          <div className="flex items-center justify-between">
            <p
              className="text-[10px] font-bold uppercase tracking-[0.2em]"
              style={{ color: GRAY_BODY }}
            >
              Results
            </p>
            <span className="text-[11px] font-semibold tabular-nums text-[#101823]/68">
              Showing{" "}
              <span style={{ color: GOLD_HOVER }}>{visibleLoans.length}</span>{" "}
              of {ALL_LOANS.length}
            </span>
          </div>

          {/* Header row */}
          <div
            className="mt-4 hidden grid-cols-[80px_1fr_1fr_1fr_1fr_1fr_120px] gap-2 px-3 text-[10px] font-bold uppercase tracking-[0.16em] lg:grid"
            style={{ color: GRAY_BODY }}
          >
            <span>Request</span>
            <span>Amount</span>
            <span>Collateral</span>
            <span>APR</span>
            <span>LTV</span>
            <span>Duration</span>
            <span className="text-right">Eligibility</span>
          </div>

          {visibleLoans.length === 0 ? (
            <div className="mt-4 rounded-[8px] border border-dashed border-[#1B384C]/18 bg-[#fffdf7] px-5 py-10 text-center">
              <p className="text-[14px] font-semibold text-[#101823]">
                No loans match the selected criteria.
              </p>
              <p className="mt-2 text-[12px]" style={{ color: GRAY_BODY }}>
                Loosen a filter, or clear all to see the full unfiltered market.
              </p>
            </div>
          ) : (
            <ul className="mt-2 space-y-2">
              {visibleLoans.map((r) => {
                const verified = r.proof !== "Pseudonymous";
                return (
                  <li
                    key={r.id}
                    className="grid grid-cols-2 gap-x-3 gap-y-2 rounded-[8px] border border-[#1B384C]/10 bg-white p-3 transition hover:border-[#C89B3C]/40 hover:bg-[#fffdf7] lg:grid-cols-[80px_1fr_1fr_1fr_1fr_1fr_120px] lg:items-center"
                  >
                    <span
                      className="text-[12px] font-bold tracking-[0.06em]"
                      style={{ color: verified ? GOLD_HOVER : GRAY_BODY }}
                    >
                      {r.id}
                    </span>
                    <Cell label="Amount">{r.amount}</Cell>
                    <Cell label="Collateral">{r.collateral}</Cell>
                    <Cell label="APR">{r.apr}</Cell>
                    <Cell label="LTV">{r.ltv}</Cell>
                    <Cell label="Duration">{r.duration}</Cell>
                    {verified ? (
                      <span
                        className="inline-flex w-fit items-center gap-1 justify-self-start rounded-full bg-[#2AAE9B]/12 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.14em] lg:justify-self-end"
                        style={{ color: "#2AAE9B" }}
                      >
                        <BadgeCheck className="h-3 w-3" strokeWidth={2} />
                        {r.proof}
                      </span>
                    ) : (
                      <span className="inline-flex w-fit items-center gap-1 justify-self-start rounded-full bg-[#1B384C]/8 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.14em] lg:justify-self-end" style={{ color: GRAY_BODY }}>
                        Pseudonymous
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          )}

          <p className="mt-5 text-[11px] leading-5" style={{ color: GRAY_BODY }}>
            Try toggling <strong style={{ color: GOLD_HOVER }}>Verified only</strong> off to see the unfiltered market — Sundown does not impose one policy.
          </p>
        </div>
      </div>
    </div>
  );
}

function Cell({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <span
        className="text-[9px] font-bold uppercase tracking-[0.16em] lg:hidden"
        style={{ color: GRAY_BODY }}
      >
        {label}
      </span>
      <span className="text-[13px] font-medium tabular-nums text-[#101823]">
        {children}
      </span>
    </div>
  );
}
