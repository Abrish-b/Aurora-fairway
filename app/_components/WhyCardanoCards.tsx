import { Blocks, CircleCheck, Coins, FileText, Plus, type LucideIcon } from "lucide-react";

const GRAY_BODY = "#6F6F6F";
const TEAL = "#0e7c71";

type Card = {
  icon: LucideIcon;
  title: string;
  short: string;
  detail: string;
};

const CARDS: Card[] = [
  {
    icon: Blocks,
    title: "Extended UTXO",
    short: "Predictable, structured transactions.",
    detail:
      "Cardano's eUTXO model gives clear validation rules and parallelizable, deterministic execution — well suited to financial primitives.",
  },
  {
    icon: FileText,
    title: "Metadata-rich transactions",
    short: "Identity & loan data travel on-chain.",
    detail:
      "Structured tx metadata lets Sundown attach proofs, eligibility, and indexer anchors without bloating contract logic.",
  },
  {
    icon: Coins,
    title: "Native assets",
    short: "Tokenized credit without smart-contract overhead.",
    detail:
      "Loans, bonds, and credit instruments use Cardano native assets — fewer moving parts, fewer audit surfaces.",
  },
  {
    icon: CircleCheck,
    title: "Programmable token standards",
    short: "CIP-113 for compliant transfer rules.",
    detail:
      "Programmable tokens carry identity gating, transfer restrictions, and policy directly — institutional issuance becomes a configuration, not a rebuild.",
  },
];

export default function WhyCardanoCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {CARDS.map((card) => {
        const Icon = card.icon;
        return (
          <details
            key={card.title}
            className="group rounded-[10px] border border-[#1B384C]/14 bg-white p-6 shadow-[0_14px_44px_rgba(33,42,50,0.05)] transition hover:-translate-y-0.5 hover:border-[#36f5c5]/42 [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="cursor-pointer list-none">
              <div className="flex h-12 w-12 items-center justify-center rounded-[6px] border border-[#36f5c5]/26 bg-[#36f5c5]/10">
                <Icon className="h-6 w-6" strokeWidth={1.5} style={{ color: TEAL }} />
              </div>
              <h3 className="mt-6 text-[18px] font-semibold leading-6 text-[#101823]">
                {card.title}
              </h3>
              <p
                className="mt-2 text-[13px] leading-6"
                style={{ color: GRAY_BODY }}
              >
                {card.short}
              </p>
              <span
                className="mt-4 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.18em]"
                style={{ color: TEAL }}
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
              className="mt-3 border-t border-[#1B384C]/10 pt-3 text-[13px] leading-6"
              style={{ color: GRAY_BODY }}
            >
              {card.detail}
            </p>
          </details>
        );
      })}
    </div>
  );
}
