"use client";

import { useState } from "react";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  ChevronDown,
  Network,
  Orbit,
  ScrollText,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

const GOLD = "#C88A2D";
const TEAL = "#2AAE9B";
const NAVY = "#07111F";
const MUTED = "#4E5A66";

type NodeId = "beam" | "aurora" | "sundown" | "bond";

type LayerNode = {
  id: NodeId;
  title: string;
  line: string;
  pill: string;
  labels: string[];
  icon: LucideIcon;
  hover: string;
  featured?: boolean;
  badge?: string;
};

const NODES: Record<NodeId, LayerNode> = {
  beam: {
    id: "beam",
    title: "Beam Wallet",
    line: "Verifies who can participate.",
    pill: "Identity proof",
    labels: ["KYC / KYB", "Credentials", "Eligibility"],
    icon: BadgeCheck,
    hover: "Identity proof unlocks eligibility and market access.",
  },
  aurora: {
    id: "aurora",
    title: "Aurora Score",
    line: "Adds borrower credit context.",
    pill: "Credit signal",
    labels: ["ZK-TLS", "Risk inputs", "Proofs"],
    icon: Activity,
    hover: "Credit signals help lenders evaluate borrower quality.",
  },
  sundown: {
    id: "sundown",
    title: "Aurora Markets",
    line: "Turns proofs into discoverable loan markets.",
    pill: "Matched opportunity",
    labels: ["Discovery", "Filtering", "Orderbook"],
    icon: Network,
    hover: "Aurora coordinates discovery, filtering, and matching.",
    featured: true,
    badge: "Market Core",
  },
  bond: {
    id: "bond",
    title: "Bond Minter",
    line: "Issues programmable credit instruments.",
    pill: "Tokenized credit",
    labels: ["CIP-113", "Restrictions", "Ownership rules"],
    icon: ScrollText,
    hover: "Issued instruments retain ownership and compliance rules.",
  },
};

type Flow = {
  id: string;
  from: NodeId;
  to: NodeId;
  label: string;
  d: string;
  labelX: number;
  labelY: number;
  dashed?: boolean;
};

const FLOWS: Flow[] = [
  {
    id: "beam-aurora",
    from: "beam",
    to: "aurora",
    label: "Verified borrower profile",
    d: "M 340 52 Q 500 17 660 52",
    labelX: 500,
    labelY: 23,
  },
  {
    id: "aurora-sundown",
    from: "aurora",
    to: "sundown",
    label: "Private risk signals",
    d: "M 810 89 Q 924 200 810 311",
    labelX: 902,
    labelY: 200,
  },
  {
    id: "beam-sundown",
    from: "beam",
    to: "sundown",
    label: "Eligibility credentials",
    d: "M 340 89 C 450 163 540 237 640 311",
    labelX: 415,
    labelY: 142,
  },
  {
    id: "sundown-bond",
    from: "sundown",
    to: "bond",
    label: "Matched loan terms",
    d: "M 640 348 Q 490 388 340 348",
    labelX: 490,
    labelY: 383,
  },
  {
    id: "bond-sundown",
    from: "bond",
    to: "sundown",
    label: "Instrument status",
    d: "M 340 327 Q 490 354 640 327",
    labelX: 490,
    labelY: 349,
    dashed: true,
  },
  {
    id: "bond-beam",
    from: "bond",
    to: "beam",
    label: "Ownership permissions",
    d: "M 190 303 Q 76 200 190 89",
    labelX: 92,
    labelY: 200,
  },
];

const NODE_ORDER: NodeId[] = ["beam", "aurora", "sundown", "bond"];

export default function LayerHarmony() {
  const [hovered, setHovered] = useState<NodeId | null>(null);
  const isActive = (flow: Flow) =>
    !hovered || flow.from === hovered || flow.to === hovered;

  return (
    <div className="relative">
      {/* Desktop orbital diagram */}
      <div className="relative hidden lg:block">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-55 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at center, rgba(200,138,45,0.22) 0%, rgba(42,174,155,0.14) 38%, transparent 72%)",
          }}
        />
        <div className="relative mx-auto aspect-[1000/400] w-full max-w-[860px]">
          <svg
            viewBox="0 0 1000 400"
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="none"
            aria-hidden
          >
            {FLOWS.map((flow) => (
              <FlowPath key={flow.id} flow={flow} active={isActive(flow)} />
            ))}
          </svg>

          <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center">
            <div
              className="mx-auto flex h-[60px] w-[60px] items-center justify-center rounded-full border-[1.5px] bg-white shadow-[0_12px_32px_rgba(7,17,31,0.10)]"
              style={{ borderColor: "rgba(200,138,45,0.34)" }}
            >
              <Orbit
                className="h-5 w-5"
                strokeWidth={1.5}
                style={{ color: GOLD }}
              />
            </div>
            <p
              className="mt-2 text-[9px] font-bold uppercase tracking-[0.22em]"
              style={{ color: GOLD }}
            >
              Coordination
            </p>
            <p
              className="mx-auto mt-0.5 max-w-[160px] text-[11px] font-semibold leading-tight"
              style={{ color: NAVY }}
            >
              Aurora Credit Flow
            </p>
          </div>

          <div className="absolute left-0 top-0 w-[30%]">
            <NodeCard
              node={NODES.beam}
              onHover={setHovered}
              hovered={hovered}
            />
          </div>
          <div className="absolute right-0 top-0 w-[30%]">
            <NodeCard
              node={NODES.aurora}
              onHover={setHovered}
              hovered={hovered}
            />
          </div>
          <div className="absolute bottom-0 right-0 w-[32%]">
            <NodeCard
              node={NODES.sundown}
              onHover={setHovered}
              hovered={hovered}
            />
          </div>
          <div className="absolute bottom-0 left-0 w-[30%]">
            <NodeCard
              node={NODES.bond}
              onHover={setHovered}
              hovered={hovered}
            />
          </div>
        </div>

        <div
          className="mt-4 flex min-h-[22px] items-center justify-center text-[12px] font-medium transition"
          style={{ color: hovered ? NAVY : MUTED }}
        >
          {hovered
            ? NODES[hovered].hover
            : "Hover any layer to trace its signals."}
        </div>
      </div>

      {/* Mobile / tablet vertical signal flow */}
      <div className="space-y-3 lg:hidden">
        {NODE_ORDER.map((id, i) => {
          const next = NODE_ORDER[i + 1];
          const label = next ? edgeLabel(id, next) : null;
          return (
            <div key={id}>
              <NodeCard
                node={NODES[id]}
                onHover={() => {}}
                hovered={null}
                mobile
              />
              {label && (
                <div className="my-2 flex flex-col items-center gap-1">
                  <ChevronDown
                    className="h-4 w-4"
                    strokeWidth={2}
                    style={{ color: TEAL }}
                  />
                  <p
                    className="text-[10px] font-bold uppercase tracking-[0.18em]"
                    style={{ color: TEAL }}
                  >
                    {label}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Horizontal signal strip */}
      <div className="mt-8">
        <SignalStrip />
      </div>

      {/* Three secondary copy tiles */}
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <CopyTile
          title="Proofs move forward"
          copy="Identity and credit proofs become reusable inputs for market participation."
        />
        <CopyTile
          title="Markets become filterable"
          copy="Aurora combines credentials, credit signals, and loan metadata into discoverable opportunities."
        />
        <CopyTile
          title="Issuance stays controlled"
          copy="Bond Minter applies ownership rules, transfer restrictions, and compliance logic to tokenized instruments."
        />
      </div>
    </div>
  );
}

function edgeLabel(from: NodeId, to: NodeId): string {
  const f = FLOWS.find((x) => x.from === from && x.to === to);
  return f?.label ?? "passes signal";
}

function FlowPath({ flow, active }: { flow: Flow; active: boolean }) {
  const stroke = active ? TEAL : "rgba(42,174,155,0.22)";
  const labelColor = active ? NAVY : "rgba(78,90,102,0.4)";
  const rectWidth = flow.label.length * 5.4 + 14;
  return (
    <g style={{ transition: "opacity 0.3s ease" }}>
      <path
        id={flow.id}
        d={flow.d}
        fill="none"
        stroke={stroke}
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeDasharray={flow.dashed ? "5 5" : undefined}
        vectorEffect="non-scaling-stroke"
        opacity={active ? 0.9 : 0.35}
      />
      {active && (
        <circle r="4.5" fill={GOLD} opacity={0.95}>
          <animateMotion
            dur={flow.dashed ? "4.2s" : "3.4s"}
            repeatCount="indefinite"
          >
            <mpath href={`#${flow.id}`} />
          </animateMotion>
        </circle>
      )}
      <rect
        x={flow.labelX - rectWidth / 2}
        y={flow.labelY - 7}
        width={rectWidth}
        height={14}
        rx={7}
        fill="rgba(255,255,255,0.94)"
        opacity={active ? 1 : 0.55}
      />
      <text
        x={flow.labelX}
        y={flow.labelY}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="10"
        fontWeight="600"
        fill={labelColor}
        opacity={active ? 1 : 0.55}
      >
        {flow.label}
      </text>
    </g>
  );
}

function NodeCard({
  node,
  onHover,
  hovered,
  mobile,
}: {
  node: LayerNode;
  onHover: (id: NodeId | null) => void;
  hovered: NodeId | null;
  mobile?: boolean;
}) {
  const Icon = node.icon;
  const isHovered = hovered === node.id;
  return (
    <div
      onMouseEnter={() => onHover(node.id)}
      onMouseLeave={() => onHover(null)}
      className={[
        "relative cursor-default rounded-[12px] border p-3 transition duration-200",
        node.featured
          ? "border-[#2AAE9B]/40 shadow-[0_14px_38px_rgba(42,174,155,0.14)]"
          : "border-[#1B384C]/12 shadow-[0_8px_22px_rgba(7,17,31,0.05)]",
        isHovered && !node.featured ? "-translate-y-0.5 border-[#C88A2D]/40" : "",
        mobile ? "" : "hover:-translate-y-0.5",
      ].join(" ")}
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(255,249,239,0.86) 100%)",
      }}
    >
      {node.badge && (
        <span
          className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full border bg-white px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.18em]"
          style={{
            borderColor: "rgba(42,174,155,0.36)",
            color: TEAL,
          }}
        >
          <Sparkles className="h-2.5 w-2.5" strokeWidth={2} />
          {node.badge}
        </span>
      )}
      <div className="flex items-center gap-3">
        <span
          className={[
            "flex h-10 w-10 flex-none items-center justify-center rounded-[10px] border",
            node.featured ? "border-[#2AAE9B]/35" : "border-[#1B384C]/12",
          ].join(" ")}
          style={{
            background: node.featured
              ? "linear-gradient(180deg, rgba(42,174,155,0.16) 0%, rgba(42,174,155,0.06) 100%)"
              : "linear-gradient(180deg, rgba(200,138,45,0.13) 0%, rgba(200,138,45,0.04) 100%)",
          }}
        >
          <Icon
            className="h-5 w-5"
            strokeWidth={1.7}
            style={{ color: node.featured ? TEAL : GOLD }}
          />
        </span>
        <div className="min-w-0">
          <p
            className="text-[15px] font-semibold leading-tight"
            style={{ color: NAVY }}
          >
            {node.title}
          </p>
          <p
            className="mt-0.5 text-[11px] leading-snug"
            style={{ color: MUTED }}
          >
            {node.line}
          </p>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1.5">
        <span
          className="inline-flex items-center rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.16em]"
          style={{
            background: node.featured
              ? "rgba(42,174,155,0.10)"
              : "rgba(200,138,45,0.10)",
            color: node.featured ? TEAL : GOLD,
            border: `1px solid ${
              node.featured ? "rgba(42,174,155,0.32)" : "rgba(200,138,45,0.28)"
            }`,
          }}
        >
          {node.pill}
        </span>
        {node.labels.map((label) => (
          <span
            key={label}
            className="text-[10px] font-medium"
            style={{ color: MUTED }}
          >
            · {label}
          </span>
        ))}
      </div>
    </div>
  );
}

function SignalStrip() {
  const steps = [
    "Identity proof",
    "Credit signal",
    "Market match",
    "Programmable instrument",
  ];
  return (
    <div className="rounded-[14px] border border-[#1B384C]/12 bg-white/85 px-5 py-5 shadow-[0_10px_30px_rgba(7,17,31,0.04)]">
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        {steps.map((step, i) => (
          <div
            key={step}
            className="flex items-center gap-3 sm:gap-4"
          >
            <span
              className="inline-flex items-center rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em]"
              style={{
                borderColor: "rgba(200,138,45,0.34)",
                background: "rgba(200,138,45,0.08)",
                color: GOLD,
              }}
            >
              {step}
            </span>
            {i < steps.length - 1 && (
              <ArrowRight
                className="h-3.5 w-3.5"
                strokeWidth={2}
                style={{ color: TEAL }}
              />
            )}
          </div>
        ))}
      </div>
      <p
        className="mt-4 text-center text-[12px] leading-6"
        style={{ color: MUTED }}
      >
        Each signal becomes usable by the next layer without exposing
        unnecessary raw data.
      </p>
    </div>
  );
}

function CopyTile({ title, copy }: { title: string; copy: string }) {
  return (
    <div className="rounded-[12px] border border-[#1B384C]/10 bg-white/85 p-5 shadow-[0_6px_18px_rgba(7,17,31,0.04)]">
      <p
        className="text-[10px] font-bold uppercase tracking-[0.22em]"
        style={{ color: GOLD }}
      >
        {title}
      </p>
      <p
        className="mt-2 text-[13px] leading-6"
        style={{ color: MUTED }}
      >
        {copy}
      </p>
    </div>
  );
}
