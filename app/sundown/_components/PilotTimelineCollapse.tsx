import {
  BadgeCheck,
  Database,
  Layers,
  Plus,
  ShieldCheck,
  Target,
  Workflow,
  type LucideIcon,
} from "lucide-react";

const GOLD = "#C89B3C";
const GOLD_HOVER = "#B8892F";
const GRAY_BODY = "#6F6F6F";

type Milestone = {
  id: string;
  title: string;
  detail: string;
  icon: LucideIcon;
};

const MILESTONES: Milestone[] = [
  {
    id: "M1",
    title: "Architecture & base integration",
    detail:
      "Anchor the metadata standard against compatible base lending contracts. Define the indexer schema and proof envelope.",
    icon: Layers,
  },
  {
    id: "M2",
    title: "Verification system & testnet",
    detail:
      "Stand up the compliance indexer, issuer registry, and proof verification flow on Cardano testnet.",
    icon: ShieldCheck,
  },
  {
    id: "M3",
    title: "Frontend prototype & identity integration",
    detail:
      "Reference borrower & lender frontends connected to identity providers via Beam Wallet and Veridian-aligned credentials.",
    icon: Workflow,
  },
  {
    id: "M4",
    title: "Indexer & filtering service",
    detail:
      "Production indexer with filterable views, lender policy storage, and verified market endpoints.",
    icon: Database,
  },
  {
    id: "M5",
    title: "Pilot preparation",
    detail:
      "Onboard pilot lenders and partners. Run end-to-end loan flows against a verified counterparty set.",
    icon: Target,
  },
  {
    id: "M6",
    title: "Mainnet identity layer launch",
    detail:
      "Sundown identity layer goes live on Cardano mainnet, with the integration spec published for ecosystem reuse.",
    icon: BadgeCheck,
  },
];

export default function PilotTimelineCollapse() {
  return (
    <div className="overflow-hidden rounded-[12px] border border-[#1B384C]/14 bg-gradient-to-b from-white to-[#fffdf7] p-6 shadow-[0_18px_60px_rgba(33,42,50,0.06)] sm:p-8">
      <div className="flex items-center justify-between">
        <p
          className="text-[11px] font-bold uppercase tracking-[0.2em]"
          style={{ color: GOLD_HOVER }}
        >
          Milestones
        </p>
        <p className="text-[11px] font-semibold" style={{ color: GRAY_BODY }}>
          Indicative sequence · expand for detail
        </p>
      </div>

      <ol className="mt-6 space-y-2">
        {MILESTONES.map((m) => {
          const Icon = m.icon;
          return (
            <details
              key={m.id}
              className="group rounded-[10px] border border-[#1B384C]/10 bg-white shadow-[0_4px_14px_rgba(33,42,50,0.04)] [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center gap-4 px-4 py-3 transition hover:bg-[#fffdf7]">
                <span
                  className="flex h-9 w-9 flex-none items-center justify-center rounded-full"
                  style={{ background: "rgba(200,155,60,0.12)", color: GOLD }}
                >
                  <Icon className="h-4 w-4" strokeWidth={1.7} />
                </span>
                <div className="flex-1">
                  <p
                    className="text-[10px] font-bold uppercase tracking-[0.18em]"
                    style={{ color: GOLD_HOVER }}
                  >
                    {m.id}
                  </p>
                  <p className="text-[14px] font-semibold leading-5 text-[#101823]">
                    {m.title}
                  </p>
                </div>
                <Plus
                  className="h-4 w-4 flex-none transition duration-200 group-open:rotate-45"
                  strokeWidth={1.8}
                  style={{ color: GOLD }}
                />
              </summary>
              <div
                className="px-4 pb-4 pl-[68px] text-[13px] leading-6"
                style={{ color: GRAY_BODY }}
              >
                {m.detail}
              </div>
            </details>
          );
        })}
      </ol>
    </div>
  );
}
