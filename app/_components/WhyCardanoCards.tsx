import { Blocks, CircleCheck, Coins, FileText, Plus, type LucideIcon } from "lucide-react";

const GOLD = "#C89B3C";
const GOLD_HOVER = "#B8892F";
const GRAY_BODY = "#6F6F6F";

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
      {CARDS.map((card, i) => {
        const Icon = card.icon;
        return (
          <details
            key={card.title}
            className="group relative overflow-hidden rounded-[12px] border border-[#1B384C]/12 bg-white p-6 shadow-[0_10px_36px_rgba(33,42,50,0.05)] transition hover:-translate-y-0.5 hover:border-[#C89B3C]/45 [&_summary::-webkit-details-marker]:hidden"
          >
            <span
              aria-hidden
              className="absolute inset-x-0 top-0 h-[2px]"
              style={{
                background: `linear-gradient(90deg, transparent 0%, ${GOLD} 30%, ${GOLD_HOVER} 70%, transparent 100%)`,
              }}
            />
            <summary className="cursor-pointer list-none">
              <div className="flex items-start justify-between">
                <span
                  className="font-serif text-[14px] tracking-[0.06em]"
                  style={{ color: GOLD }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full"
                  style={{ background: "rgba(200,155,60,0.10)" }}
                >
                  <Icon
                    className="h-5 w-5"
                    strokeWidth={1.55}
                    style={{ color: GOLD }}
                  />
                </span>
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
