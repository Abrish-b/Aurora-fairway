"use client";

import { useState, type ComponentType, type CSSProperties } from "react";
import {
  Blocks,
  Braces,
  KeyRound,
  Layers,
  MonitorSmartphone,
  Sparkles,
} from "lucide-react";

type IconType = ComponentType<{
  className?: string;
  strokeWidth?: number;
  style?: CSSProperties;
}>;

const GOLD = "#C89B3C";
const GOLD_HOVER = "#B8892F";
const GRAY_BODY = "#6F6F6F";

type Tab = {
  id: string;
  label: string;
  tag: string;
  accent: string;
  accentBg: string;
  icon: IconType;
  title: string;
  role: string;
  bullets: string[];
  featured?: boolean;
  payload?: string;
};

const TABS: Tab[] = [
  {
    id: "base",
    label: "Base lending",
    tag: "On-chain",
    accent: "#1B384C",
    accentBg: "rgba(27,56,76,0.08)",
    icon: Blocks,
    title: "Cardano P2P lending rails",
    role: "Sundown consumes, not builds.",
    bullets: [
      "Loan request publication",
      "Collateral management",
      "Repayment logic",
      "Default & liquidation handling",
    ],
  },
  {
    id: "sundown",
    label: "Sundown layer",
    tag: "Interface",
    accent: GOLD,
    accentBg: "rgba(200,155,60,0.12)",
    icon: Layers,
    title: "Fairway × Sundial extension",
    role: "Identity, discovery, indexing, filtering.",
    bullets: [
      "Identity proof metadata standard",
      "Compliance indexer",
      "Lender filtering interface",
      "Reference frontend components",
    ],
    featured: true,
    payload: `{
  "loan_request_id": "lr_8a32f1",
  "borrower": {
    "wallet": "addr1q…",
    "proofs": [
      { "type": "kyc",        "issuer": "veridian:eu",   "exp": "2027-03-12" },
      { "type": "jurisdiction","issuer": "veridian:eu",   "value": "EU" },
      { "type": "entity",     "issuer": "fairway:legal", "kind": "fund" }
    ]
  },
  "compliance": {
    "scheme": "sundown.v1",
    "verifier": "indexer.fairway.global",
    "verified_at": "2026-05-04T12:08:00Z"
  }
}`,
  },
  {
    id: "providers",
    label: "Identity providers",
    tag: "External",
    accent: "#5C8FB0",
    accentBg: "rgba(92,143,176,0.10)",
    icon: KeyRound,
    title: "Issuers & credential infrastructure",
    role: "Sundown integrates, never stores raw data.",
    bullets: [
      "KYC credentials",
      "Jurisdiction & residency proofs",
      "Legal entity credentials",
      "Role credentials & ZK proofs",
    ],
  },
  {
    id: "interface",
    label: "Interface",
    tag: "Frontend",
    accent: "#2A8E78",
    accentBg: "rgba(42,142,120,0.10)",
    icon: MonitorSmartphone,
    title: "Reference frontend",
    role: "Open components for verified discovery.",
    bullets: [
      "Borrower request flow",
      "Lender market view",
      "Proof display widgets",
      "Compliance-aware dashboards",
    ],
  },
];

export default function ArchitectureTabs() {
  const [active, setActive] = useState<string>("sundown");
  const tab = TABS.find((t) => t.id === active) ?? TABS[0];
  const Icon = tab.icon;

  return (
    <div className="overflow-hidden rounded-[12px] border border-[#1B384C]/12 bg-white shadow-[0_18px_60px_rgba(33,42,50,0.06)]">
      <div
        role="tablist"
        aria-label="Architecture layers"
        className="flex flex-wrap gap-1 border-b border-[#1B384C]/10 bg-[#fffdf7] p-2"
      >
        {TABS.map((t) => {
          const isActive = t.id === active;
          return (
            <button
              key={t.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`tab-panel-${t.id}`}
              id={`tab-${t.id}`}
              onClick={() => setActive(t.id)}
              className={[
                "rounded-[8px] px-4 py-2 text-[12px] font-bold uppercase tracking-[0.14em] transition",
                isActive
                  ? "bg-white text-[#101823] shadow-[0_6px_18px_rgba(33,42,50,0.08)]"
                  : "text-[#1B384C]/65 hover:bg-white/60 hover:text-[#101823]",
              ].join(" ")}
              style={isActive ? { borderColor: t.accent } : undefined}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`tab-panel-${tab.id}`}
        aria-labelledby={`tab-${tab.id}`}
        className="grid gap-6 p-6 lg:grid-cols-[200px_1fr_1fr] lg:p-8"
      >
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span
              className="flex h-12 w-12 items-center justify-center rounded-[8px]"
              style={{ background: tab.accentBg }}
            >
              <Icon
                className="h-6 w-6"
                strokeWidth={1.55}
                style={{ color: tab.accent }}
              />
            </span>
            <div>
              <span
                className="inline-flex items-center rounded-full border px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.18em]"
                style={{
                  borderColor: `${tab.accent}40`,
                  color: tab.accent,
                  background: tab.accentBg,
                }}
              >
                {tab.tag}
              </span>
            </div>
          </div>
          {tab.featured && (
            <span
              className="inline-flex items-center gap-1 self-start rounded-full bg-[#fff3d8] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em]"
              style={{ color: GOLD_HOVER }}
            >
              <Sparkles className="h-3 w-3" strokeWidth={1.8} />
              Sundown
            </span>
          )}
        </div>

        <div>
          <h3 className="font-serif text-[24px] font-normal leading-tight text-[#101823]">
            {tab.title}
          </h3>
          <p
            className="mt-3 text-[13px] font-semibold leading-6"
            style={{ color: GOLD_HOVER }}
          >
            {tab.role}
          </p>

          {tab.payload && (
            <details className="group mt-5 [&_summary::-webkit-details-marker]:hidden">
              <summary
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#C89B3C]/40 bg-[#fffdf7] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em]"
                style={{ color: GOLD_HOVER }}
              >
                <Braces className="h-3.5 w-3.5" strokeWidth={1.8} />
                <span className="group-open:hidden">View example payload</span>
                <span className="hidden group-open:inline">Hide payload</span>
              </summary>
              <pre className="mt-4 overflow-x-auto rounded-[10px] border border-[#0B1620]/30 bg-gradient-to-b from-[#0B1620] to-[#020711] p-4 text-[12px] leading-6 text-[#ffe3a4]">
                <code>{tab.payload}</code>
              </pre>
            </details>
          )}
        </div>

        <ul className="space-y-2">
          <p
            className="text-[10px] font-bold uppercase tracking-[0.18em]"
            style={{ color: GRAY_BODY }}
          >
            Handles
          </p>
          {tab.bullets.map((b) => (
            <li
              key={b}
              className="rounded-[6px] border border-[#1B384C]/10 bg-[#fffdf7] px-3 py-2 text-[13px] text-[#101823]"
            >
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
