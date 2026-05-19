import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, type LucideIcon } from "lucide-react";

const GOLD = "#C89B3C";
const GOLD_HOVER = "#B8892F";
const GRAY_BODY = "#6F6F6F";

export type StackLayerData = {
  number: string;
  name: string;
  role: string;
  short: string;
  detail: string;
  bullets?: string[];
  icon: LucideIcon;
  logo?: string;
  logoAlt?: string;
  cta?: { label: string; href: string };
  featured?: boolean;
};

export default function StackLayerCard({ layer }: { layer: StackLayerData }) {
  const cta = layer.cta ?? { label: "Explore Layer", href: "#harmony" };
  const isExternal = /^https?:\/\//.test(cta.href);
  const className = [
    "group relative flex min-h-[360px] flex-col overflow-hidden rounded-[12px] border p-6 shadow-[0_14px_44px_rgba(33,42,50,0.05)] transition duration-200 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C89B3C]",
    layer.featured
      ? "border-[#C89B3C]/55 bg-gradient-to-b from-[#fff8e8] to-white shadow-[0_22px_70px_rgba(200,155,60,0.12)]"
      : "border-[#1B384C]/12 bg-white hover:border-[#C89B3C]/45 hover:shadow-[0_22px_70px_rgba(33,42,50,0.08)]",
  ].join(" ");
  const content = <StackLayerCardContent layer={layer} ctaLabel={cta.label} />;
  const ariaLabel = `${cta.label} - ${layer.name}`;

  if (isExternal) {
    return (
      <a
        href={cta.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className={className}
      >
        {content}
      </a>
    );
  }

  if (cta.href.startsWith("/")) {
    return (
      <Link href={cta.href} aria-label={ariaLabel} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <a href={cta.href} aria-label={ariaLabel} className={className}>
      {content}
    </a>
  );
}

function StackLayerCardContent({
  layer,
  ctaLabel,
}: {
  layer: StackLayerData;
  ctaLabel: string;
}) {
  const Icon = layer.icon;

  return (
    <>
      <span
        aria-hidden
        className="absolute inset-x-6 top-0 h-[2px] origin-left scale-x-0 rounded-full transition duration-300 group-hover:scale-x-100"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #C89B3C 28%, #B8892F 72%, transparent 100%)",
        }}
      />

      {layer.featured && (
        <span
          className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] shadow-[0_8px_24px_rgba(200,155,60,0.12)]"
          style={{ color: GOLD_HOVER }}
        >
          <Sparkles className="h-3 w-3" strokeWidth={1.8} />
          Featured
        </span>
      )}

      <div className="flex items-start gap-3 pr-20">
        <span className="flex h-[52px] w-[52px] flex-none items-center justify-center overflow-hidden rounded-[8px] border border-[#C89B3C]/28 bg-[#fff8e8] transition duration-300 group-hover:scale-[1.04]">
          {layer.logo ? (
            <Image
              src={layer.logo}
              alt={layer.logoAlt ?? layer.name}
              width={52}
              height={52}
              className="h-full w-full object-cover"
            />
          ) : (
            <Icon className="h-6 w-6" strokeWidth={1.55} style={{ color: GOLD }} />
          )}
        </span>
        <div>
          <p
            className="text-[10px] font-bold uppercase tracking-[0.18em]"
            style={{ color: GOLD_HOVER }}
          >
            Layer {layer.number}
          </p>
          <p
            className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em]"
            style={{ color: GRAY_BODY }}
          >
            {layer.role}
          </p>
        </div>
      </div>

      <h3 className="mt-6 font-serif text-[24px] font-normal leading-tight text-[#101823]">
        {layer.name}
      </h3>
      <p className="mt-3 text-[13px] leading-6" style={{ color: GRAY_BODY }}>
        {layer.short}
      </p>

      <p className="mt-4 text-[12px] leading-6 text-[#101823]/78">
        {layer.detail}
      </p>

      {layer.bullets ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {layer.bullets.map((bullet) => (
            <span
              key={bullet}
              className="rounded-full border border-[#C89B3C]/24 bg-[#fff8e8] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#6c4a19]"
            >
              {bullet}
            </span>
          ))}
        </div>
      ) : null}

      <span
        className="mt-auto inline-flex w-fit items-center gap-1.5 rounded-full bg-gradient-to-b from-[#ffe3a4] via-[#ffc95a] to-[#d99a2b] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#130b02] shadow-[0_8px_22px_rgba(246,184,75,0.22)] transition group-hover:translate-x-0.5 group-hover:from-[#fff0c9] group-hover:to-[#f6b84b]"
      >
        {ctaLabel}
        <ArrowRight className="h-3 w-3" strokeWidth={2} />
      </span>
    </>
  );
}
