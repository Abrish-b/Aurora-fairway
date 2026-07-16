import {
  BadgeCheck,
  BarChart3,
  FileCheck2,
  Filter,
  Plus,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

const GOLD = "#C89B3C";
const GOLD_HOVER = "#B8892F";
const GRAY_BODY = "#6F6F6F";

type Step = {
  id: string;
  label: string;
  product: string;
  short: string;
  detail: string;
  icon: LucideIcon;
};

const STEPS: Step[] = [
  {
    id: "verify",
    label: "Verify",
    product: "Polaris Wallet",
    short: "Reusable identity & KYC credentials.",
    detail:
      "SSI-based credentials let participants prove eligibility once and reuse it across the stack. Raw data stays with the holder.",
    icon: ShieldCheck,
  },
  {
    id: "score",
    label: "Score",
    product: "Aamu Score",
    short: "Privacy-preserving credit signals.",
    detail:
      "ZK-TLS turns off-chain financial data into proofs underwriters can use without exposing source records.",
    icon: BarChart3,
  },
  {
    id: "discover",
    label: "Discover",
    product: "Aurora",
    short: "Verified market view of P2P credit.",
    detail:
      "Compliance indexer surfaces filterable loan opportunities. Lenders see only what matches their policy.",
    icon: Filter,
  },
  {
    id: "issue",
    label: "Issue",
    product: "Solstice",
    short: "Tokenized loans & credit instruments.",
    detail:
      "Cardano programmable tokens (CIP-113) carry transfer rules, eligibility, and identity gating directly on-chain.",
    icon: FileCheck2,
  },
  {
    id: "coordinate",
    label: "Coordinate",
    product: "Aurora",
    short: "Orchestration across the layers.",
    detail:
      "The umbrella stack stitches identity, scoring, discovery, and issuance into one institutional workflow.",
    icon: BadgeCheck,
  },
];

export default function HowItWorksFlow() {
  return (
    <div className="rounded-[12px] border border-[#1B384C]/12 bg-white p-6 shadow-[0_18px_60px_rgba(33,42,50,0.06)] sm:p-8">
      <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3">
        {STEPS.map((s, i) => {
          const Icon = s.icon;
          return (
            <details
              key={s.id}
              className="group relative rounded-[10px] border border-[#1B384C]/10 bg-[#fffdf7] p-4 transition hover:border-[#C89B3C]/40 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="cursor-pointer list-none">
                <div className="flex items-center justify-between">
                  <span
                    className="font-serif text-[13px] tracking-[0.06em]"
                    style={{ color: GOLD }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-full"
                    style={{ background: "rgba(200,155,60,0.12)" }}
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.7} style={{ color: GOLD }} />
                  </span>
                </div>
                <p
                  className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em]"
                  style={{ color: GOLD_HOVER }}
                >
                  {s.label}
                </p>
                <p className="mt-1 text-[15px] font-semibold leading-5 text-[#101823]">
                  {s.product}
                </p>
                <p className="mt-2 text-[12px] leading-5" style={{ color: GRAY_BODY }}>
                  {s.short}
                </p>
                <span
                  className="mt-3 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.16em]"
                  style={{ color: GOLD_HOVER }}
                >
                  <Plus
                    className="h-3 w-3 transition duration-200 group-open:rotate-45"
                    strokeWidth={2}
                  />
                  <span className="group-open:hidden">More</span>
                  <span className="hidden group-open:inline">Less</span>
                </span>
              </summary>
              <p
                className="mt-3 border-t border-[#1B384C]/10 pt-3 text-[12px] leading-5"
                style={{ color: GRAY_BODY }}
              >
                {s.detail}
              </p>
            </details>
          );
        })}
      </ol>
    </div>
  );
}
