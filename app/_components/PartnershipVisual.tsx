import Image from "next/image";
import { ArrowRight, Layers } from "lucide-react";

const GOLD = "#C89B3C";
const GOLD_HOVER = "#B8892F";
const GRAY_BODY = "#6F6F6F";

export default function PartnershipVisual() {
  return (
    <div className="overflow-hidden rounded-[14px] border border-[#1B384C]/12 bg-white p-6 shadow-[0_22px_70px_rgba(33,42,50,0.07)] sm:p-8">
      <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
        <PartnerStack>
          <Logo src="/brand/fairway-logo.png" alt="Fairway" name="Fairway" tag="Identity" />
          <span
            className="mx-auto text-[18px] font-light"
            style={{ color: GOLD }}
            aria-hidden
          >
            ×
          </span>
          <Logo src="/brand/download.webp" alt="Sundial" name="Sundial" tag="Lending" />
        </PartnerStack>

        <ArrowConnector />

        <SundownNode />

        <ArrowConnector />

        <AuroraNode />
      </div>

      <p
        className="mt-6 border-t border-[#1B384C]/10 pt-4 text-[13px] leading-6"
        style={{ color: GRAY_BODY }}
      >
        Sundown is the partnership surface where Fairway&apos;s identity layer
        meets Sundial&apos;s lending infrastructure. Both feed Aurora&apos;s
        broader credit stack.
      </p>
    </div>
  );
}

function PartnerStack({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-stretch gap-3 rounded-[10px] border border-[#1B384C]/10 bg-[#fffdf7] p-4">
      {children}
    </div>
  );
}

function Logo({
  src,
  alt,
  name,
  tag,
}: {
  src: string;
  alt: string;
  name: string;
  tag: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 flex-none items-center justify-center rounded-[6px] border border-[#1B384C]/10 bg-white">
        <Image
          src={src}
          alt={alt}
          width={28}
          height={28}
          className="h-7 w-7 object-contain"
        />
      </div>
      <div>
        <p className="text-[14px] font-semibold leading-5 text-[#101823]">
          {name}
        </p>
        <p
          className="text-[10px] font-bold uppercase tracking-[0.18em]"
          style={{ color: GRAY_BODY }}
        >
          {tag}
        </p>
      </div>
    </div>
  );
}

function ArrowConnector() {
  return (
    <span
      className="hidden items-center justify-center lg:flex"
      style={{ color: GOLD }}
    >
      <ArrowRight className="h-5 w-5" strokeWidth={1.6} />
    </span>
  );
}

function SundownNode() {
  return (
    <div
      className="rounded-[12px] border bg-gradient-to-b from-[#fff8e8] to-white p-5 shadow-[0_10px_36px_rgba(200,155,60,0.14)]"
      style={{ borderColor: `${GOLD}55` }}
    >
      <p
        className="text-[10px] font-bold uppercase tracking-[0.2em]"
        style={{ color: GOLD_HOVER }}
      >
        Sundown
      </p>
      <p className="mt-2 font-serif text-[20px] leading-tight text-[#101823]">
        Verified discovery layer.
      </p>
      <p className="mt-3 text-[12px] leading-5" style={{ color: GRAY_BODY }}>
        Identity proofs · indexer · lender filtering.
      </p>
    </div>
  );
}

function AuroraNode() {
  return (
    <div className="rounded-[12px] border border-[#1B384C]/15 bg-[#0B1620] p-5 text-[#fffaf2]">
      <p
        className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em]"
        style={{ color: "#ffd98a" }}
      >
        <Layers className="h-3 w-3" strokeWidth={1.8} />
        Aurora credit stack
      </p>
      <p className="mt-2 font-serif text-[20px] leading-tight">
        Bitcoin-backed, on-chain credit.
      </p>
      <p className="mt-3 text-[12px] leading-5 text-[#fffaf2]/68">
        Identity · scoring · discovery · issuance.
      </p>
    </div>
  );
}
