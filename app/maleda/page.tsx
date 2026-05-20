import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  BarChart3,
  Briefcase,
  Building2,
  ChevronDown,
  FileCheck2,
  Globe,
  Handshake,
  Leaf,
  Shield,
  ShoppingBag,
  Sprout,
  Sun,
  TrendingUp,
  Truck,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import AnimatedHeading from "./_components/AnimatedHeading";
import CountUp from "./_components/CountUp";
import EcosystemGraph from "./_components/EcosystemGraph";
import FadeIn from "./_components/FadeIn";
import InView from "./_components/InView";
import StepsFlow from "./_components/StepsFlow";

const GOLD = "#C8923D";

const navLinks = [
  { href: "#problem", label: "Problem" },
  { href: "#ecosystem", label: "Ecosystem" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#use-cases", label: "Use Cases" },
  { href: "#trust", label: "Trust" },
];

export default function MaledaPage() {
  return (
    <div className="relative min-h-screen bg-white text-neutral-900">
      <Hero />
      <ProblemSection />
      <EcosystemSection />
      <HowItWorksSection />
      <PillarsSection />
      <UseCasesSection />
      <WhyNowSection />
      <PublicValueSection />
      <TrustSection />
      <FinalCTASection />
      <AdvancedNote />
      <Footer />
    </div>
  );
}

/* ----------------------------------------------------------------------- */
/* Hero — simplified                                                       */
/* ----------------------------------------------------------------------- */

function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-screen w-full flex-col overflow-hidden bg-black text-white"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
      />

      <Navbar />

      <div className="relative z-10 mx-auto mt-auto flex w-full max-w-[1320px] flex-col gap-12 px-6 pb-16 md:px-12 lg:px-16 lg:pb-24">
        <div className="max-w-[820px]">
          <FadeIn delay={80} duration={600}>
            <span className="liquid-glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-white/85">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: GOLD, boxShadow: `0 0 12px ${GOLD}` }}
              />
              Aurora · Ethiopia & emerging markets
            </span>
          </FadeIn>

          <AnimatedHeading
            text={"Expand access to\nproductive business finance."}
            className="font-display mt-7 text-[44px] font-light leading-[1.02] tracking-tight text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.4)] sm:text-[60px] lg:text-[76px]"
          />

          <FadeIn delay={1200} duration={700} className="mt-7 max-w-[620px]">
            <p className="text-[15px] font-light leading-[1.7] text-white/85 sm:text-[17px]">
              Trusted local-currency finance for productive businesses,
              delivered through regulated lenders.
            </p>
          </FadeIn>

          <FadeIn delay={1450} duration={700} className="mt-9">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#cta"
                className="inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-lg bg-white px-6 text-[13px] font-medium text-black transition hover:bg-white/90"
              >
                Partner with Maleda
                <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
              </a>
              <a
                href="#how-it-works"
                className="liquid-glass inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-lg px-6 text-[13px] font-medium text-white transition hover:bg-black/50"
              >
                See how it works
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Navbar() {
  return (
    <header className="relative z-30 pt-6">
      <div className="mx-auto w-full max-w-[1320px] px-6 md:px-12 lg:px-16">
        <div className="liquid-glass flex items-center justify-between rounded-xl px-4 py-2">
          <Link
            href="#top"
            className="flex items-center gap-3 text-white"
            aria-label="Maleda home"
          >
            <span className="text-2xl font-semibold tracking-tight">MALEDA</span>
            <span className="hidden text-[10px] font-medium uppercase tracking-[0.22em] text-white/55 sm:inline">
              by Fairway
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-[13px] font-medium text-white/75 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#cta"
            className="rounded-lg bg-white px-6 py-2 text-[13px] font-medium text-black transition hover:bg-white/90"
          >
            Partner with Maleda
          </a>
        </div>
      </div>
    </header>
  );
}

/* ----------------------------------------------------------------------- */
/* Section 1 — The Problem                                                 */
/* ----------------------------------------------------------------------- */

function ProblemSection() {
  const cards: { icon: LucideIcon; title: string; copy: string }[] = [
    { icon: Briefcase, title: "Businesses need finance", copy: "Many productive businesses are ready to grow but cannot access affordable credit." },
    { icon: Building2, title: "Lenders need better infrastructure", copy: "Banks and financial institutions need trusted tools to verify, coordinate, and serve more borrowers safely." },
    { icon: Banknote, title: "Capital needs confidence", copy: "Development partners and global capital providers need transparent, compliant pathways into productive local finance." },
  ];

  return (
    <Section id="problem" eyebrow="The challenge" title="Credit demand exists. Access does not.">
      <InView className="mx-auto mt-6 max-w-[760px] text-center">
        <p className="text-[15px] font-light leading-[1.75] text-neutral-600">
          Across Ethiopia and emerging markets, productive businesses need
          working capital to grow. Many SMEs, women-led enterprises, farmers,
          traders, and exporters remain underfinanced because credit
          infrastructure is fragmented, costly, or difficult to scale.
        </p>
      </InView>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {cards.map(({ icon: Icon, title, copy }, i) => (
          <InView key={title} delay={i * 90}>
            <article className="group relative h-full overflow-hidden rounded-2xl border border-neutral-200 bg-white p-7 transition duration-300 hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-[0_18px_60px_rgba(0,0,0,0.06)]">
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 -top-px h-px origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }}
              />
              <span
                className="flex h-11 w-11 items-center justify-center rounded-lg transition-transform duration-500 group-hover:rotate-[18deg]"
                style={{ background: "rgba(200,146,61,0.08)" }}
              >
                <Icon className="h-5 w-5" strokeWidth={1.6} style={{ color: GOLD }} />
              </span>
              <h3 className="mt-6 text-[18px] font-semibold leading-tight text-neutral-900">{title}</h3>
              <p className="mt-3 text-[14px] font-light leading-[1.7] text-neutral-600">{copy}</p>
            </article>
          </InView>
        ))}
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------------------- */
/* Section 2 — Trusted Ecosystem                                           */
/* ----------------------------------------------------------------------- */

function EcosystemSection() {
  return (
    <Section
      id="ecosystem"
      eyebrow="A trusted ecosystem"
      title="A trusted ecosystem for productive lending."
      tone="muted"
    >
      <InView className="mx-auto mt-6 max-w-[680px] text-center">
        <p className="text-[15px] font-light leading-[1.75] text-neutral-600">
          Maleda connects the institutions required to expand credit safely.
        </p>
      </InView>

      <EcosystemGraph />
    </Section>
  );
}

/* ----------------------------------------------------------------------- */
/* Section 3 — How It Works                                                */
/* ----------------------------------------------------------------------- */

function HowItWorksSection() {
  return (
    <Section
      id="how-it-works"
      eyebrow="How it works"
      title="Built for partnership with local institutions."
    >
      <div className="mx-auto mt-8 max-w-[760px] space-y-5 text-center">
        <InView delay={60}>
          <p className="rounded-xl border border-neutral-200 bg-white px-5 py-3 text-[14px] font-medium text-neutral-900">
            Maleda is not a lender. Maleda strengthens regulated lenders.
          </p>
        </InView>
        <InView delay={140}>
          <p className="text-[15px] font-light leading-[1.75] text-neutral-600">
            Local institutions continue to own the borrower relationship.
            Maleda provides infrastructure that helps them verify participants,
            coordinate capital, and expand responsible lending.
          </p>
        </InView>
        <InView delay={220}>
          <p
            className="rounded-xl border px-5 py-4 text-[14px] font-medium text-neutral-900"
            style={{
              background: "rgba(200,146,61,0.07)",
              borderColor: "rgba(200,146,61,0.30)",
            }}
          >
            Borrowers receive financing in local currency. Never cryptocurrency.
          </p>
        </InView>
      </div>

      <StepsFlow />
    </Section>
  );
}

/* ----------------------------------------------------------------------- */
/* Section 4 — Infrastructure Pillars                                      */
/* ----------------------------------------------------------------------- */

function PillarsSection() {
  const pillars: { icon: LucideIcon; title: string; copy: string }[] = [
    { icon: Shield, title: "Identity & Verification", copy: "Trusted borrower, institution, and participant validation." },
    { icon: FileCheck2, title: "Compliance Infrastructure", copy: "KYC, screening, eligibility, and participation controls." },
    { icon: Handshake, title: "Capital Coordination", copy: "Infrastructure connecting local credit demand with trusted funding partners." },
    { icon: BarChart3, title: "Reporting & Transparency", copy: "Better visibility for partners, institutions, and stakeholders." },
  ];

  return (
    <Section
      id="pillars"
      eyebrow="Infrastructure pillars"
      title="Infrastructure for trusted credit expansion."
    >
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {pillars.map(({ icon: Icon, title, copy }, i) => (
          <InView key={title} delay={i * 90}>
            <article className="group relative h-full cursor-default overflow-hidden rounded-2xl border border-neutral-200 bg-white p-7 transition duration-300 hover:-translate-y-0.5 hover:border-neutral-300">
              {/* Sun-ray decoration that rotates on hover */}
              <span
                aria-hidden
                className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 opacity-30 transition-transform duration-700 group-hover:rotate-[60deg] group-hover:opacity-60"
              >
                <SunRaysSvg color={GOLD} />
              </span>
              <span
                className="relative flex h-11 w-11 items-center justify-center rounded-lg"
                style={{ background: "rgba(200,146,61,0.08)" }}
              >
                <Icon className="h-5 w-5" strokeWidth={1.6} style={{ color: GOLD }} />
              </span>
              <h3 className="relative mt-5 text-[16px] font-semibold leading-tight text-neutral-900">
                {title}
              </h3>
              <p className="relative mt-2 text-[13px] font-light leading-[1.7] text-neutral-600">
                {copy}
              </p>
            </article>
          </InView>
        ))}
      </div>
    </Section>
  );
}

function SunRaysSvg({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full">
      <g fill="none" stroke={color} strokeWidth={1} strokeLinecap="round">
        <circle cx="50" cy="50" r="14" />
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * Math.PI * 2) / 12;
          const x1 = 50 + Math.cos(a) * 20;
          const y1 = 50 + Math.sin(a) * 20;
          const x2 = 50 + Math.cos(a) * 36;
          const y2 = 50 + Math.sin(a) * 36;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
      </g>
    </svg>
  );
}

/* ----------------------------------------------------------------------- */
/* Section 5 — Use Cases                                                   */
/* ----------------------------------------------------------------------- */

function UseCasesSection() {
  const cases: { icon: LucideIcon; title: string; copy: string }[] = [
    { icon: Briefcase, title: "SME working capital", copy: "Short-term financing to keep productive businesses operating." },
    { icon: Users, title: "Women-led businesses", copy: "Targeted support for women entrepreneurs across sectors." },
    { icon: Sprout, title: "Agricultural finance", copy: "Seasonal credit for farmers, cooperatives, and agribusiness." },
    { icon: Truck, title: "Trade finance", copy: "Working capital for importers, exporters, and distributors." },
    { icon: Wrench, title: "Equipment financing", copy: "Capital for machinery, tooling, and productive assets." },
    { icon: TrendingUp, title: "Growth lending", copy: "Expansion capital for businesses ready to scale." },
    { icon: Globe, title: "Export businesses", copy: "Pre-shipment and post-shipment financing for exporters." },
    { icon: ShoppingBag, title: "Supplier financing", copy: "Liquidity for suppliers along productive value chains." },
  ];

  return (
    <Section
      id="use-cases"
      eyebrow="Use cases"
      title="Financing real economic growth."
      tone="muted"
    >
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cases.map(({ icon: Icon, title, copy }, i) => (
          <InView key={title} delay={i * 60}>
            <article className="group relative h-full overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 transition duration-300 hover:-translate-y-0.5 hover:border-neutral-300">
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(120% 100% at 0% 100%, rgba(200,146,61,0.10) 0%, transparent 55%)",
                }}
              />
              <Icon
                className="relative h-5 w-5 transition-transform duration-500 group-hover:scale-110"
                strokeWidth={1.5}
                style={{ color: GOLD }}
              />
              <h3 className="relative mt-4 text-[15px] font-semibold leading-tight text-neutral-900">
                {title}
              </h3>
              <p className="relative mt-2 text-[12.5px] font-light leading-[1.6] text-neutral-600">
                {copy}
              </p>
            </article>
          </InView>
        ))}
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------------------- */
/* Section 6 — Why Now (with animated stats)                               */
/* ----------------------------------------------------------------------- */

function WhyNowSection() {
  const cards: { icon: LucideIcon; title: string; copy: string }[] = [
    { icon: TrendingUp, title: "Business demand is growing", copy: "Productive businesses in emerging markets need affordable credit to scale operations and create jobs." },
    { icon: Building2, title: "Local lenders need scalable infrastructure", copy: "Banks and MFIs are looking for trusted tools to expand responsible lending without rebuilding rails." },
    { icon: Banknote, title: "Capital partners need trusted channels", copy: "Development institutions and global capital want transparent, compliant pathways into productive finance." },
  ];

  return (
    <Section id="why-now" eyebrow="Why now" title="New capital. Real economic demand.">
      <InView className="mx-auto mt-6 max-w-[760px] text-center">
        <p className="text-[15px] font-light leading-[1.75] text-neutral-600">
          Global capital infrastructure has evolved. Emerging market businesses
          still need affordable, productive credit. Maleda helps connect the
          two through regulated local institutions and trusted market
          infrastructure.
        </p>
      </InView>

      {/* Animated stat strip */}
      <div className="mt-12 grid gap-5 rounded-2xl border border-neutral-200 bg-white p-8 sm:grid-cols-3">
        <StatTile to={70} suffix="%" label="of African SMEs report credit gaps" />
        <StatTile to={331} suffix="B" prefix="$" label="estimated SME credit gap, sub-Saharan Africa" />
        <StatTile to={2030} label="UN SDG target for inclusive finance" />
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {cards.map(({ icon: Icon, title, copy }, i) => (
          <InView key={title} delay={i * 90}>
            <article className="h-full rounded-2xl border border-neutral-200 bg-white p-7">
              <Icon className="h-5 w-5" strokeWidth={1.5} style={{ color: GOLD }} />
              <h3 className="mt-5 text-[17px] font-semibold leading-tight text-neutral-900">{title}</h3>
              <p className="mt-3 text-[13.5px] font-light leading-[1.7] text-neutral-600">{copy}</p>
            </article>
          </InView>
        ))}
      </div>

      <p className="mt-6 text-center text-[11px] font-light text-neutral-500">
        Stats illustrative. Sources: IFC SME Finance Forum, UN SDG framework.
      </p>
    </Section>
  );
}

function StatTile({
  to,
  prefix,
  suffix,
  label,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  label: string;
}) {
  return (
    <div className="text-center">
      <p
        className="font-display text-[42px] font-medium leading-none tracking-tight sm:text-[56px]"
        style={{ color: GOLD }}
      >
        <CountUp to={to} prefix={prefix} suffix={suffix} duration={1600} />
      </p>
      <p className="mt-3 text-[12px] font-light leading-relaxed text-neutral-600">{label}</p>
    </div>
  );
}

/* ----------------------------------------------------------------------- */
/* Section 7 — Government & Public Value                                   */
/* ----------------------------------------------------------------------- */

function PublicValueSection() {
  const cards: { icon: LucideIcon; title: string }[] = [
    { icon: Users, title: "Financial inclusion" },
    { icon: Briefcase, title: "SME growth" },
    { icon: Leaf, title: "Agricultural productivity" },
    { icon: Sun, title: "Women-led enterprise support" },
    { icon: Globe, title: "Trade and export growth" },
    { icon: TrendingUp, title: "Job creation" },
  ];

  return (
    <Section
      id="public-value"
      eyebrow="Public value"
      title="Designed for national development priorities."
      tone="muted"
    >
      <InView className="mx-auto mt-6 max-w-[760px] text-center">
        <p className="text-[15px] font-light leading-[1.75] text-neutral-600">
          Maleda can support financial inclusion, SME growth, agriculture,
          women-led enterprises, job creation, and more transparent credit
          markets.
        </p>
      </InView>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map(({ icon: Icon, title }, i) => (
          <InView key={title} delay={i * 70}>
            <article className="group flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-6 transition duration-300 hover:border-neutral-300 hover:shadow-[0_18px_60px_rgba(0,0,0,0.05)]">
              <span
                className="flex h-11 w-11 items-center justify-center rounded-lg transition-transform duration-500 group-hover:rotate-[18deg]"
                style={{ background: "rgba(200,146,61,0.08)" }}
              >
                <Icon className="h-5 w-5" strokeWidth={1.6} style={{ color: GOLD }} />
              </span>
              <h3 className="text-[15px] font-semibold leading-tight text-neutral-900">
                {title}
              </h3>
            </article>
          </InView>
        ))}
      </div>

      <p className="mx-auto mt-10 max-w-[720px] text-center text-[12px] font-light leading-relaxed text-neutral-500">
        Maleda is designed to support national priorities through partnership
        with regulated local institutions. Inclusion in this list does not
        imply endorsement by any government body or regulator.
      </p>
    </Section>
  );
}

/* ----------------------------------------------------------------------- */
/* Section 8 — Trust / FAQ                                                 */
/* ----------------------------------------------------------------------- */

function TrustSection() {
  const items = [
    { q: "Do borrowers receive cryptocurrency?", a: "No. Financing is delivered through regulated local lending channels in local currency. Borrowers do not need to touch cryptocurrency." },
    { q: "Is Maleda a lender?", a: "No. Maleda is infrastructure. Regulated local financial institutions originate and service loans." },
    { q: "Does Maleda replace local banks?", a: "No. Maleda is designed to strengthen local financial institutions, not displace them." },
    { q: "Who can partner with Maleda?", a: "Banks, MFIs, fintechs, development institutions, capital partners, and public stakeholders exploring productive business finance." },
    { q: "How does Maleda support compliance?", a: "Maleda supports identity, screening, eligibility, and participation controls so partners can operate through trusted processes." },
    { q: "Is this only for Ethiopia?", a: "Maleda is designed for Ethiopia first, with a model that can apply to other emerging markets." },
  ];

  return (
    <Section id="trust" eyebrow="Trust" title="Designed for institutional trust.">
      <div className="mx-auto mt-10 max-w-[820px] divide-y divide-neutral-200 overflow-hidden rounded-2xl border border-neutral-200 bg-white">
        {items.map((item, i) => (
          <InView key={item.q} delay={i * 50}>
            <details className="group px-6 py-5 transition-colors duration-300 hover:bg-neutral-50/60 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="text-[15px] font-medium text-neutral-900">
                  {item.q}
                </span>
                <span
                  className="flex h-7 w-7 flex-none items-center justify-center rounded-full border border-neutral-200 transition-colors duration-300 group-open:border-transparent"
                  style={{ background: "transparent" }}
                >
                  <ChevronDown
                    className="h-4 w-4 text-neutral-500 transition-transform duration-300 group-open:rotate-180"
                    strokeWidth={1.6}
                  />
                </span>
              </summary>
              <p className="mt-3 text-[13.5px] font-light leading-[1.7] text-neutral-600">
                {item.a}
              </p>
            </details>
          </InView>
        ))}
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------------------- */
/* Section 9 — Final CTA                                                   */
/* ----------------------------------------------------------------------- */

function FinalCTASection() {
  return (
    <section
      id="cta"
      data-maleda-sun
      className="relative isolate overflow-hidden bg-neutral-950 px-6 py-24 text-white md:px-12 lg:px-16 lg:py-32"
    >
      {/* Animated horizon */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(200,146,61,0.5) 50%, transparent 100%)",
        }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 60%, rgba(200,146,61,0.25) 0%, transparent 60%), radial-gradient(50% 40% at 50% 100%, rgba(200,146,61,0.18) 0%, transparent 60%)",
        }}
      />

      <InView className="mx-auto max-w-[820px] text-center">
        <p
          className="text-[11px] font-medium uppercase tracking-[0.22em]"
          style={{ color: GOLD }}
        >
          Get in touch
        </p>
        <h2 className="font-display mt-4 text-[36px] font-light leading-[1.05] tracking-tight sm:text-[48px] lg:text-[60px]">
          Expand access to productive credit.
        </h2>
        <p className="mt-6 text-[15px] font-light leading-[1.75] text-white/70">
          Whether you are a financial institution, capital partner, or public
          stakeholder, Maleda helps build more efficient and trusted credit
          markets.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:hello@fairway.global?subject=Maleda%20partnership"
            className="inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-lg bg-white px-6 text-[13px] font-medium text-black transition hover:bg-white/90"
          >
            Start a conversation
            <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
          </a>
          <a
            href="mailto:hello@fairway.global?subject=Maleda%20partner"
            className="inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-lg border border-white/20 px-6 text-[13px] font-medium text-white transition hover:border-white/40 hover:bg-white/5"
          >
            Partner with Maleda
          </a>
        </div>
      </InView>
    </section>
  );
}

/* ----------------------------------------------------------------------- */
/* Advanced infrastructure note (collapsed)                                */
/* ----------------------------------------------------------------------- */

function AdvancedNote() {
  return (
    <section className="bg-white px-6 py-14 md:px-12 lg:px-16">
      <details className="group mx-auto max-w-[820px] rounded-2xl border border-neutral-200 bg-neutral-50 px-6 py-5 transition-colors duration-300 hover:bg-neutral-100/60 [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
          <span className="text-[13px] font-medium uppercase tracking-[0.18em] text-neutral-700">
            Advanced infrastructure note
          </span>
          <ChevronDown
            className="h-4 w-4 text-neutral-500 transition-transform duration-300 group-open:rotate-180"
            strokeWidth={1.6}
          />
        </summary>
        <p className="mt-4 text-[13px] font-light leading-[1.75] text-neutral-600">
          Maleda can use modern digital asset infrastructure behind the scenes
          to coordinate capital and reporting, while keeping the borrower
          experience local-currency and institution-led. Borrowers and local
          partners do not need to interact with digital assets directly —
          settlement and disbursement happen through regulated banking
          channels.
        </p>
      </details>
    </section>
  );
}

/* ----------------------------------------------------------------------- */
/* Footer                                                                  */
/* ----------------------------------------------------------------------- */

function Footer() {
  const footerLinks = [
    { href: "#problem", label: "Problem" },
    { href: "#ecosystem", label: "Ecosystem" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#use-cases", label: "Use Cases" },
    { href: "#cta", label: "Contact" },
  ];

  return (
    <footer className="relative z-10 border-t border-neutral-200 bg-white px-6 py-14 md:px-12 lg:px-16">
      <div className="mx-auto max-w-[1320px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-[420px]">
            <p className="font-display text-2xl font-semibold tracking-tight text-neutral-900">
              MALEDA
            </p>
            <p className="mt-3 text-[13.5px] font-light leading-[1.7] text-neutral-600">
              Morning-sun infrastructure for productive business finance.
            </p>
            <p className="mt-6 text-[12px] font-light text-neutral-500">
              Built by{" "}
              <a
                href="https://www.fairway.global"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-neutral-900 underline-offset-4 hover:underline"
              >
                Fairway
              </a>
              .
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {footerLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13px] font-medium text-neutral-700 transition hover:text-neutral-900"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <p className="mt-12 text-[11px] font-light text-neutral-400">
          © {new Date().getFullYear()} Fairway. Maleda is infrastructure for
          regulated lenders. Maleda is not a lender, bank, or deposit-taking
          institution.
        </p>
      </div>
    </footer>
  );
}

/* ----------------------------------------------------------------------- */
/* Shared primitives                                                       */
/* ----------------------------------------------------------------------- */

function Section({
  id,
  eyebrow,
  title,
  tone = "white",
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  tone?: "white" | "muted";
  children: React.ReactNode;
}) {
  const bg = tone === "muted" ? "bg-neutral-50" : "bg-white";
  return (
    <section
      id={id}
      className={`relative z-10 px-6 py-24 md:px-12 lg:px-16 lg:py-28 ${bg}`}
    >
      <div className="mx-auto max-w-[1180px]">
        <InView className="mx-auto max-w-[760px] text-center">
          <p
            className="text-[11px] font-medium uppercase tracking-[0.22em]"
            style={{ color: GOLD }}
          >
            {eyebrow}
          </p>
          <h2 className="font-display mt-3 text-[28px] font-light leading-[1.08] tracking-tight text-neutral-900 sm:text-[40px] lg:text-[46px]">
            {title}
          </h2>
        </InView>
        {children}
      </div>
    </section>
  );
}
