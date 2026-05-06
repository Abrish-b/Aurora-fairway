import Image from "next/image";
import { Bitcoin, ChevronDown } from "lucide-react";

const GOLD = "#C89B3C";
const GOLD_HOVER = "#B8892F";
const GRAY_BODY = "#6F6F6F";

type Layer = {
  n: string;
  name: string;
  role: string;
  tagline: string;
  logo: string;
  logoAlt: string;
  accent: string;
  accentBg: string;
  featured?: boolean;
};

const LAYERS: Layer[] = [
  {
    n: "01",
    name: "Polaris Wallet",
    role: "Identity",
    tagline: "SSI · KYC · reusable credentials",
    logo: "/brand/polaris-modified.png",
    logoAlt: "Polaris",
    accent: "#C89B3C",
    accentBg: "rgba(200,155,60,0.12)",
  },
  {
    n: "02",
    name: "Aamu Score",
    role: "Credit inputs",
    tagline: "ZK-TLS · privacy-preserving signals",
    logo: "/brand/aamu-modified.png",
    logoAlt: "Aamu",
    accent: "#2A8E78",
    accentBg: "rgba(42,142,120,0.10)",
  },
  {
    n: "03",
    name: "Sundown",
    role: "Discovery & filtering",
    tagline: "Compliance indexer · lender filtering",
    logo: "/brand/sundown-modified.png",
    logoAlt: "Sundown",
    accent: "#d99a2b",
    accentBg: "rgba(217,154,43,0.14)",
    featured: true,
  },
  {
    n: "04",
    name: "Solstice",
    role: "Issuance",
    tagline: "CIP-113 · tokenized credit instruments",
    logo: "/brand/solstice-modified.png",
    logoAlt: "CIP-113",
    accent: "#8a72c4",
    accentBg: "rgba(138,114,196,0.12)",
  },
];

export default function AuroraStackDiagram() {
  return (
    <div className="relative overflow-hidden rounded-[14px] border border-[#1B384C]/12 bg-gradient-to-b from-white via-white to-[#fffdf7] p-5 shadow-[0_22px_70px_rgba(33,42,50,0.07)] sm:p-7">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 right-[-12%] h-[260px] w-[260px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, rgba(246,184,75,0.45) 0%, rgba(255,213,138,0.18) 40%, transparent 72%)",
        }}
      />

      <BTCAnchor />

      <div className="relative mt-3 grid gap-2.5">
        <SpineConnector />
        {LAYERS.map((layer) => (
          <LayerCard key={layer.n} layer={layer} />
        ))}
      </div>

      <div className="mt-3 flex justify-center">
        <ChevronDown
          className="h-4 w-4"
          strokeWidth={2}
          style={{ color: GRAY_BODY }}
        />
      </div>

      <CardanoAnchor />
    </div>
  );
}

function BTCAnchor() {
  return (
    <div className="relative">
      <div
        className="flex items-center justify-between rounded-[10px] border border-[#f6b84b]/40 bg-gradient-to-r from-[#fff8e8] via-[#fff3d8] to-[#fff8e8] px-4 py-3 shadow-[0_8px_24px_rgba(246,184,75,0.18)]"
      >
        <div className="flex items-center gap-3">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-full"
            style={{
              background:
                "linear-gradient(180deg, #ffd98a 0%, #f6b84b 100%)",
              boxShadow: "0 0 18px rgba(246,184,75,0.45)",
            }}
          >
            <Bitcoin className="h-5 w-5 text-[#3a2208]" strokeWidth={2.2} />
          </span>
          <div>
            <p
              className="text-[10px] font-bold uppercase tracking-[0.2em]"
              style={{ color: GOLD_HOVER }}
            >
              Collateral
            </p>
            <p className="text-[13px] font-semibold leading-5 text-[#101823]">
              Bitcoin
            </p>
          </div>
        </div>
        <p
          className="text-[10px] font-bold uppercase tracking-[0.18em]"
          style={{ color: GOLD_HOVER }}
        >
          Flows in
        </p>
      </div>
    </div>
  );
}

function SpineConnector() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute bottom-2 left-[34px] top-2 w-px"
      style={{
        background:
          "linear-gradient(180deg, rgba(200,155,60,0.6) 0%, rgba(200,155,60,0.18) 100%)",
      }}
    />
  );
}

function LayerCard({ layer }: { layer: Layer }) {
  return (
    <div
      className={[
        "relative grid grid-cols-[auto_auto_1fr_auto] items-center gap-3 rounded-[10px] border bg-white px-3 py-3 shadow-[0_4px_14px_rgba(33,42,50,0.04)] transition hover:-translate-y-0.5",
        layer.featured
          ? "border-[#d99a2b]/45 shadow-[0_10px_30px_rgba(217,154,43,0.14)]"
          : "border-[#1B384C]/10 hover:border-[#1B384C]/22",
      ].join(" ")}
    >
      <span
        aria-hidden
        className="absolute inset-y-2 left-0 w-[3px] rounded-full"
        style={{ background: layer.accent }}
      />

      <span
        className="ml-2 font-serif text-[14px] tracking-[0.06em]"
        style={{ color: layer.accent }}
      >
        {layer.n}
      </span>

      <span
        className="flex h-9 w-9 flex-none items-center justify-center overflow-hidden rounded-[6px] border"
        style={{
          background: layer.accentBg,
          borderColor: `${layer.accent}33`,
        }}
      >
        <Image
          src={layer.logo}
          alt={layer.logoAlt}
          width={36}
          height={36}
          className="h-full w-full object-cover"
        />
      </span>

      <div className="min-w-0">
        <p className="text-[14px] font-semibold leading-5 text-[#101823]">
          {layer.name}
        </p>
        <p
          className="truncate text-[11px] leading-4"
          style={{ color: GRAY_BODY }}
        >
          {layer.tagline}
        </p>
      </div>

      <span
        className="rounded-full border px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.16em]"
        style={{
          borderColor: `${layer.accent}40`,
          color: layer.accent,
          background: layer.accentBg,
        }}
      >
        {layer.role}
      </span>
    </div>
  );
}

function CardanoAnchor() {
  return (
    <div className="relative rounded-[10px] border border-dashed border-[#1B384C]/22 bg-[#fffdf7] px-4 py-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Image
            src="/brand/cardano.png"
            alt="Cardano"
            width={20}
            height={20}
            className="h-5 w-5 object-contain"
          />
          <span
            className="text-[11px] font-bold uppercase tracking-[0.18em]"
            style={{ color: GRAY_BODY }}
          >
            Cardano · settlement
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/brand/download.webp"
            alt="Sundial"
            width={20}
            height={20}
            className="h-5 w-5 object-contain"
          />
          <span
            className="text-[11px] font-bold uppercase tracking-[0.18em]"
            style={{ color: GRAY_BODY }}
          >
            Sundial · liquidity
          </span>
        </div>
        <span
          className="text-[10px] font-bold uppercase tracking-[0.18em]"
          style={{ color: GOLD }}
        >
          Aurora
        </span>
      </div>
    </div>
  );
}
