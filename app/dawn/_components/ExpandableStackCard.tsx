import type { ReactNode } from "react";
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
  tone?: "light" | "dark" | "cream";
  blob?: boolean;
  display?: boolean;
  heroLogo?: boolean;
  extra?: ReactNode;
  className?: string;
};

export default function StackLayerCard({ layer }: { layer: StackLayerData }) {
  const cta = layer.cta ?? { label: "Explore Layer", href: "#harmony" };
  const isExternal = /^https?:\/\//.test(cta.href);
  const tone = layer.tone ?? "light";
  const toneClass =
    tone === "dark"
      ? "border-white/10 bg-[#0B1220] text-white hover:border-[#C89B3C]/50"
      : tone === "cream"
        ? "border-[#C89B3C]/30 bg-gradient-to-br from-[#fff5dc] via-[#fffaf2] to-white hover:border-[#C89B3C]/55"
        : layer.featured
          ? "border-[#C89B3C]/55 bg-gradient-to-b from-[#fff8e8] to-white shadow-[0_22px_70px_rgba(200,155,60,0.12)]"
          : "border-[#1B384C]/12 bg-white hover:border-[#C89B3C]/45 hover:shadow-[0_22px_70px_rgba(33,42,50,0.08)]";
  const className = [
    "group relative flex min-h-[360px] flex-col overflow-hidden rounded-[16px] border p-6 shadow-[0_14px_44px_rgba(33,42,50,0.05)] transition duration-200 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C89B3C]",
    toneClass,
    layer.className ?? "",
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
  const isDark = layer.tone === "dark";
  const titleColor = isDark ? "text-white" : "text-[#101823]";
  const shortColor = isDark ? "text-white/75" : "";
  const detailColor = isDark ? "text-white/60" : "text-[#101823]/78";
  const bulletClass = isDark
    ? "rounded-full border border-white/15 bg-white/[0.04] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#E8C77B]"
    : "rounded-full border border-[#C89B3C]/24 bg-[#fff8e8] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#6c4a19]";
  const logoBoxClass = isDark
    ? "flex h-[52px] w-[52px] flex-none items-center justify-center overflow-hidden rounded-[10px] border border-white/12 bg-white/[0.04] transition duration-300 group-hover:scale-[1.04]"
    : "flex h-[52px] w-[52px] flex-none items-center justify-center overflow-hidden rounded-[10px] border border-[#C89B3C]/28 bg-[#fff8e8] transition duration-300 group-hover:scale-[1.04]";
  const titleSize = layer.display
    ? "font-serif text-[44px] font-normal leading-[1.02] tracking-[-0.01em] sm:text-[56px] lg:text-[64px]"
    : "font-serif text-[24px] font-normal leading-tight";
  const titleMargin = layer.heroLogo ? "mt-0" : layer.display ? "mt-8" : "mt-6";

  return (
    <>
      {layer.blob && (
        <>
          <span
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-[280px] w-[280px] rounded-full opacity-80 blur-3xl"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(200,155,60,0.55) 0%, rgba(255,201,90,0.28) 35%, rgba(255,201,90,0) 70%)",
            }}
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -left-16 bottom-[-60px] h-[220px] w-[220px] rounded-full opacity-70 blur-3xl"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(255,180,120,0.45) 0%, rgba(255,180,120,0.18) 40%, transparent 75%)",
            }}
          />
        </>
      )}

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
          className="absolute right-4 top-4 z-10 inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] shadow-[0_8px_24px_rgba(200,155,60,0.18)]"
          style={{ color: GOLD_HOVER }}
        >
          <Sparkles className="h-3 w-3" strokeWidth={1.8} />
          Featured
        </span>
      )}

      {layer.heroLogo && layer.logo ? (
        <div
          className="relative -mx-6 -mt-6 mb-5 overflow-hidden"
          style={{ background: "#05080F" }}
        >
          <div className="relative h-[210px] w-full sm:h-[230px]">
            <Image
              src={layer.logo}
              alt={layer.logoAlt ?? layer.name}
              fill
              className="object-contain p-5 transition duration-500 group-hover:scale-[1.03]"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </div>
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(120% 80% at 50% 110%, rgba(200,155,60,0.18) 0%, transparent 60%)",
            }}
          />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(200,155,60,0.45) 50%, transparent 100%)",
            }}
          />
          <span
            className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/40 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] backdrop-blur-md"
          >
            <span style={{ color: "#E8C77B" }}>Layer {layer.number}</span>
            <span className="text-white/30">·</span>
            <span className="text-white/65">{layer.role}</span>
          </span>
        </div>
      ) : (
        <div className="relative flex items-start gap-3 pr-20">
          <span className={logoBoxClass}>
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
              style={{ color: isDark ? "rgba(255,255,255,0.55)" : GRAY_BODY }}
            >
              {layer.role}
            </p>
          </div>
        </div>
      )}

      <h3 className={`relative ${titleMargin} ${titleSize} ${titleColor}`}>
        {layer.name}
      </h3>
      <p
        className={`relative mt-3 text-[13px] leading-6 ${shortColor}`}
        style={shortColor ? undefined : { color: GRAY_BODY }}
      >
        {layer.short}
      </p>

      {!layer.display && (
        <p className={`relative mt-4 text-[12px] leading-6 ${detailColor}`}>
          {layer.detail}
        </p>
      )}

      {layer.bullets ? (
        <div className="relative mt-5 flex flex-wrap gap-2">
          {layer.bullets.map((bullet) => (
            <span key={bullet} className={bulletClass}>
              {bullet}
            </span>
          ))}
        </div>
      ) : null}

      {layer.extra ? <div className="relative">{layer.extra}</div> : null}

      <span
        className="relative mt-auto inline-flex w-fit items-center gap-1.5 rounded-full bg-gradient-to-b from-[#ffe3a4] via-[#ffc95a] to-[#d99a2b] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#130b02] shadow-[0_8px_22px_rgba(246,184,75,0.22)] transition group-hover:translate-x-0.5 group-hover:from-[#fff0c9] group-hover:to-[#f6b84b]"
      >
        {ctaLabel}
        <ArrowRight className="h-3 w-3" strokeWidth={2} />
      </span>
    </>
  );
}
