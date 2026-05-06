import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type BuiltByFairwayCardProps = {
  copy?: string;
  href?: string;
  ctaLabel?: string;
  variant?: "wide" | "compact";
  tone?: "light" | "bone" | "white";
  id?: string;
};

const GOLD = "#C89B3C";
const GRAY_BODY = "#6F6F6F";

export default function BuiltByFairwayCard({
  copy = "Aurora and Sundown are part of Fairway's broader work on identity and compliance infrastructure for institutional on-chain finance.",
  href = "https://www.fairway.global",
  ctaLabel = "Visit fairway.global",
  variant = "wide",
  tone = "light",
  id = "built-by-fairway",
}: BuiltByFairwayCardProps) {
  const bg =
    tone === "bone" ? "#fffdf7" : tone === "white" ? "#ffffff" : "#fffaf2";

  return (
    <section
      id={id}
      className="px-5 py-16 sm:px-8 lg:px-12"
      style={{ background: bg }}
    >
      <div className="mx-auto max-w-[1180px]">
        <div
          className={`overflow-hidden rounded-[14px] border border-[#C89B3C]/30 bg-gradient-to-br from-white to-[#fff8e8] shadow-[0_22px_70px_rgba(200,155,60,0.10)] ${
            variant === "wide"
              ? "grid gap-8 p-8 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:p-10"
              : "p-7"
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 flex-none items-center justify-center rounded-[10px] border border-[#C89B3C]/30 bg-white shadow-[0_8px_22px_rgba(200,155,60,0.10)]">
              <Image
                src="/brand/fairway-logo.png"
                alt="Fairway"
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
            </div>
            <div>
              <p
                className="text-[10px] font-bold uppercase tracking-[0.22em]"
                style={{ color: GOLD }}
              >
                Built by Fairway
              </p>
              <p className="mt-1 font-serif text-[22px] leading-tight text-[#101823]">
                Identity & compliance infrastructure for on-chain finance.
              </p>
            </div>
          </div>

          <p
            className="text-[14px] leading-7 lg:max-w-[460px]"
            style={{ color: GRAY_BODY }}
          >
            {copy}
          </p>

          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 self-start rounded-full border border-[#C89B3C]/45 bg-white px-6 text-[13px] font-bold uppercase text-[#101823] transition hover:-translate-y-0.5 hover:border-[#C89B3C] hover:bg-[#fff8e8] lg:self-auto"
          >
            {ctaLabel}
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
          </a>
        </div>
      </div>
    </section>
  );
}
