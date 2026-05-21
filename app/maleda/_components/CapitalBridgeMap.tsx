"use client";

import { useEffect, useState } from "react";
import {
  Banknote,
  Building2,
  Globe2,
  Landmark,
  Sprout,
  Sun,
  Tractor,
  Users,
  Warehouse,
  type LucideIcon,
} from "lucide-react";

type Side = "local" | "infra" | "global";
type Node = {
  id: string;
  label: string;
  side: Side;
  copy: string;
  icon: LucideIcon;
};

const NODES: Node[] = [
  { id: "sme", label: "SMEs", side: "local", icon: Warehouse, copy: "Small and medium enterprises seeking working capital." },
  { id: "farm", label: "Farmers", side: "local", icon: Tractor, copy: "Cooperatives financing seasonal cycles." },
  { id: "trade", label: "Traders", side: "local", icon: Globe2, copy: "Importers and exporters bridging shipment liquidity." },
  { id: "women", label: "Women-led", side: "local", icon: Sprout, copy: "Women entrepreneurs growing productive enterprises." },
  { id: "maleda", label: "Maleda", side: "infra", icon: Sun, copy: "Identity, compliance, and capital coordination." },
  { id: "banks", label: "Banks", side: "global", icon: Building2, copy: "Regulated institutions originating loans locally." },
  { id: "dfis", label: "DFIs", side: "global", icon: Landmark, copy: "Development finance supporting productive lending." },
  { id: "cap", label: "Institutional capital", side: "global", icon: Banknote, copy: "Long-horizon capital through compliant pathways." },
  { id: "pub", label: "Public stakeholders", side: "global", icon: Users, copy: "Governments advancing inclusion and SME growth." },
];

const GOLD = "#D6A84F";
const IVORY = "#F2EDDF";

export default function CapitalBridgeMap() {
  const [active, setActive] = useState<string>("maleda");
  const [autoIdx, setAutoIdx] = useState(0);

  useEffect(() => {
    const i = setInterval(() => setAutoIdx((x) => (x + 1) % NODES.length), 3200);
    return () => clearInterval(i);
  }, []);

  const activeNode = NODES.find((n) => n.id === active) ?? NODES[4];
  const left = NODES.filter((n) => n.side === "local");
  const right = NODES.filter((n) => n.side === "global");

  return (
    <div className="relative">
      <div
        className="relative grid items-center gap-x-4 gap-y-6"
        style={{ gridTemplateColumns: "1fr auto 1fr" }}
      >
        <Column nodes={left} label="LOCAL DEMAND" active={active} setActive={setActive} align="end" />
        <CenterNode active={active === NODES[4].id} onEnter={() => setActive(NODES[4].id)} />
        <Column nodes={right} label="TRUSTED CAPITAL" active={active} setActive={setActive} align="start" />
        <BridgeLines autoIdx={autoIdx} />
      </div>

      {/* Detail strip — minimal, divider-only, no card */}
      <div className="mt-10 border-t pt-6" style={{ borderColor: "rgba(242,237,223,0.10)" }}>
        <div className="flex items-start gap-4">
          <activeNode.icon size={20} strokeWidth={1.4} style={{ color: GOLD, flex: "0 0 auto", marginTop: 2 }} />
          <div className="min-w-0">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em]" style={{ color: GOLD }}>
              {activeNode.side === "infra"
                ? "Infrastructure"
                : activeNode.side === "local"
                ? "Local demand"
                : "Trusted capital"}{" "}
              · {activeNode.label}
            </p>
            <p className="mt-2 text-[14px] font-light leading-[1.7] max-w-[58ch]" style={{ color: "rgba(242,237,223,0.75)" }}>
              {activeNode.copy}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Column({
  nodes,
  label,
  active,
  setActive,
  align,
}: {
  nodes: Node[];
  label: string;
  active: string;
  setActive: (id: string) => void;
  align: "start" | "end";
}) {
  return (
    <div className={`flex flex-col gap-2 ${align === "end" ? "items-end" : "items-start"}`}>
      <span
        className="text-[10px] font-medium uppercase tracking-[0.22em]"
        style={{ color: GOLD }}
      >
        {label}
      </span>
      {nodes.map((n) => (
        <NodeButton key={n.id} node={n} active={active === n.id} setActive={setActive} align={align} />
      ))}
    </div>
  );
}

function NodeButton({
  node,
  active,
  setActive,
  align,
}: {
  node: Node;
  active: boolean;
  setActive: (id: string) => void;
  align: "start" | "end";
}) {
  return (
    <button
      type="button"
      onMouseEnter={() => setActive(node.id)}
      onFocus={() => setActive(node.id)}
      className="group inline-flex items-center gap-2 text-[12px] font-medium transition-colors duration-300 cursor-pointer focus:outline-none focus-visible:underline"
      style={{
        color: active ? IVORY : "rgba(242,237,223,0.55)",
        flexDirection: align === "end" ? "row-reverse" : "row",
      }}
    >
      <node.icon size={14} strokeWidth={1.5} style={{ color: active ? GOLD : "rgba(242,237,223,0.45)" }} />
      <span style={{ borderBottom: active ? `1px solid ${GOLD}` : "1px solid transparent", paddingBottom: 1 }}>
        {node.label}
      </span>
    </button>
  );
}

function CenterNode({ active, onEnter }: { active: boolean; onEnter: () => void }) {
  return (
    <button
      type="button"
      onMouseEnter={onEnter}
      onFocus={onEnter}
      className="relative flex h-[72px] w-[72px] items-center justify-center rounded-full transition-transform duration-500 cursor-pointer hover:scale-[1.04] focus:outline-none focus-visible:ring-2"
      style={{
        background: "transparent",
        border: `1px solid ${GOLD}`,
        boxShadow: active ? `0 0 0 6px rgba(214,168,79,0.12)` : "none",
      }}
    >
      <Sun size={22} strokeWidth={1.5} style={{ color: GOLD }} />
    </button>
  );
}

function BridgeLines({ autoIdx }: { autoIdx: number }) {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="bridge-line-min" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={GOLD} stopOpacity="0" />
          <stop offset="50%" stopColor={GOLD} stopOpacity="0.7" />
          <stop offset="100%" stopColor={GOLD} stopOpacity="0" />
        </linearGradient>
      </defs>
      <line x1="0%" y1="50%" x2="100%" y2="50%" stroke="url(#bridge-line-min)" strokeWidth="1" opacity="0.4" />
      <line
        x1="0%" y1="50%" x2="100%" y2="50%"
        stroke={GOLD}
        strokeWidth="1"
        strokeDasharray="2 14"
        strokeDashoffset={-autoIdx * 8}
        opacity="0.7"
        style={{ transition: "stroke-dashoffset 700ms ease" }}
      />
    </svg>
  );
}
