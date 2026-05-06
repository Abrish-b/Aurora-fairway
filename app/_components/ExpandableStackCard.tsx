import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Plus, Sparkles, type LucideIcon } from "lucide-react";

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

export default function ExpandableStackCard({ layer }: { layer: StackLayerData }) {
  const Icon = layer.icon;
  return (
    <details
      className={[
        "group relative overflow-hidden rounded-[12px] border bg-white p-6 shadow-[0_14px_44px_rgba(33,42,50,0.05)] transition hover:-translate-y-0.5 [&_summary::-webkit-details-marker]:hidden",
        layer.featured
          ? "border-[#C89B3C]/45 bg-gradient-to-b from-[#fff8e8] to-white shadow-[0_22px_70px_rgba(200,155,60,0.12)]"
          : "border-[#1B384C]/12 hover:border-[#C89B3C]/40",
      ].join(" ")}
    >
      {layer.featured && (
        <span
          className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em]"
          style={{ color: GOLD_HOVER }}
        >
          <Sparkles className="h-3 w-3" strokeWidth={1.8} />
          Featured
        </span>
      )}

      <summary className="cursor-pointer list-none">
        <div className="flex items-center gap-3">
          <span
            className="flex h-12 w-12 flex-none items-center justify-center overflow-hidden rounded-[8px] border border-[#C89B3C]/26 bg-[#fff8e8]"
          >
            {layer.logo ? (
              <Image
                src={layer.logo}
                alt={layer.logoAlt ?? layer.name}
                width={48}
                height={48}
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
              className="text-[10px] font-bold uppercase tracking-[0.18em]"
              style={{ color: GRAY_BODY }}
            >
              {layer.role}
            </p>
          </div>
        </div>

        <h3 className="mt-5 font-serif text-[24px] font-normal leading-tight text-[#101823]">
          {layer.name}
        </h3>
        <p className="mt-3 text-[13px] leading-6" style={{ color: GRAY_BODY }}>
          {layer.short}
        </p>

        <span
          className="mt-5 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.18em]"
          style={{ color: GOLD_HOVER }}
        >
          <Plus
            className="h-3 w-3 transition duration-200 group-open:rotate-45"
            strokeWidth={2}
          />
          <span className="group-open:hidden">Learn more</span>
          <span className="hidden group-open:inline">Less</span>
        </span>
      </summary>

      <div className="mt-4 border-t border-[#1B384C]/10 pt-4">
        <p className="text-[13px] leading-6" style={{ color: GRAY_BODY }}>
          {layer.detail}
        </p>
        {layer.bullets && (
          <ul className="mt-3 space-y-1.5">
            {layer.bullets.map((b) => (
              <li
                key={b}
                className="text-[12px] leading-5 text-[#101823]"
              >
                · {b}
              </li>
            ))}
          </ul>
        )}
        {layer.cta && <StackCTA cta={layer.cta} />}
      </div>
    </details>
  );
}

function StackCTA({ cta }: { cta: { label: string; href: string } }) {
  const isExternal = /^https?:\/\//.test(cta.href);
  const className =
    "mt-4 inline-flex items-center gap-1.5 rounded-full border border-[#C89B3C]/45 bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#101823] transition hover:border-[#C89B3C] hover:bg-[#fff8e8]";
  if (isExternal) {
    return (
      <a
        href={cta.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {cta.label}
        <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.8} />
      </a>
    );
  }
  return (
    <Link href={cta.href} className={className}>
      {cta.label}
      <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.8} />
    </Link>
  );
}
