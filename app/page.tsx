import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  FileCheck2,
  Filter,
  Menu,
  WalletCards,
  type LucideIcon,
} from "lucide-react";

import HowItWorksFlow from "./_components/HowItWorksFlow";
import PartnershipVisual from "./_components/PartnershipVisual";
import WhyCardanoCards from "./_components/WhyCardanoCards";
import StackLayerCard, {
  type StackLayerData,
} from "./_components/ExpandableStackCard";
import LayerHarmony from "./_components/LayerHarmony";

import AccordionFAQ from "@/components/aurora/AccordionFAQ";
import TrustLogoWall from "@/components/aurora/TrustLogoWall";
import BuiltByFairwayCard from "@/components/aurora/BuiltByFairwayCard";

const GOLD_HOVER = "#B8892F";
const GRAY_BODY = "#6F6F6F";

export default function AuroraPage() {
  return (
    <div className="min-h-screen bg-[#fffaf2] text-[#07111b] font-sans antialiased">
      <Nav />
      <main>
        <Hero />
        <TrustLogoWall
          tone="white"
          eyebrow="Trusted ecosystem"
          title="Built alongside the right partners."
          copy="Aurora is developed in collaboration with Cardano-native infrastructure teams and supported by leading European programs."
        />
        <MarketOpportunity />
        <AuroraStackSection />
        <LayerHarmonySection />
        {/* <HowItWorksSection /> */}
        <WhyCardanoSection />
        <BuiltByFairwayCard tone="bone" />
        <AccordionFAQ
          tone="light"
          eyebrow="FAQ"
          title="Frequently asked questions."
          copy="Aurora is infrastructure for verified, discoverable, tokenized Bitcoin-backed credit. It is not an L2, lender, broker, or replacement for Sundial."
          items={faqItems}
          id="faq"
        />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Nav                                                              */
/* ---------------------------------------------------------------- */

function Nav() {
  const links = [
    { href: "#stack", label: "Stack" },
    { href: "#harmony", label: "How it works" },
    { href: "/sundown#partnership", label: "Sundown" },
    { href: "#cardano", label: "Cardano" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 text-[#fffaf2]">
      <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between rounded-[8px] border border-white/12 bg-[#020711]/58 px-4 py-3 shadow-[0_18px_70px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:px-5">
        <Link
          href="#top"
          aria-label="Aurora"
          className="inline-flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffcc73]"
        >
          <Image
            src="/brand/aurora-nav.png"
            alt=""
            width={944}
            height={137}
            className="h-7 w-auto object-contain sm:h-8"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 text-[12px] font-semibold uppercase text-[#fffaf2]/72 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2.5 transition duration-200 hover:bg-white/7 hover:text-[#ffcc73]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#cta"
            className="hidden min-h-10 items-center justify-center rounded-full border border-[#C88A2D]/70 bg-gradient-to-b from-[#ffe3a4] via-[#ffc95a] to-[#d99a2b] px-5 text-[12px] font-bold uppercase text-[#130b02] shadow-[0_14px_44px_rgba(246,184,75,0.22)] transition duration-200 hover:from-[#fff0c9] hover:to-[#f6b84b] sm:inline-flex"
          >
            Request Access
          </a>
          <details className="group relative lg:hidden">
            <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-white/14 bg-white/6 text-[#ffcc73] transition hover:border-[#ffcc73]/60 hover:bg-[#ffcc73]/10 [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Open navigation</span>
              <Menu className="h-5 w-5" strokeWidth={1.7} />
            </summary>
            <div className="absolute right-0 top-12 w-[240px] rounded-[8px] border border-white/12 bg-[#020711]/96 p-2 shadow-[0_24px_80px_rgba(0,0,0,0.42)] backdrop-blur-2xl">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block rounded-[6px] px-4 py-3 text-[12px] font-semibold uppercase text-[#fffaf2]/78 transition hover:bg-white/7 hover:text-[#ffcc73]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#cta"
                className="mt-2 flex min-h-10 items-center justify-center rounded-[6px] bg-gradient-to-b from-[#ffe3a4] via-[#ffc95a] to-[#d99a2b] px-4 text-[12px] font-bold uppercase text-[#130b02]"
              >
                Request Access
              </a>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

/* ---------------------------------------------------------------- */
/* Hero - keeps video atmosphere, simplified copy                    */
/* ---------------------------------------------------------------- */

function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-screen flex-col overflow-hidden bg-[#020711] text-[#fffaf2]"
    >
      <HeroAtmosphere />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1320px] flex-1 flex-col px-5 pb-14 pt-32 sm:px-8 lg:px-12 lg:pb-20 lg:pt-36">
        <div className="flex flex-1 flex-col justify-center">
          <div className="max-w-[820px]">
            <div className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[#ffcc73]/30 bg-[#020711]/45 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#ffcc73] backdrop-blur-xl">
              <span className="h-1 w-1 rounded-full bg-[#ffcc73] shadow-[0_0_8px_rgba(255,204,115,0.9)]" />
              Not a Bitcoin L2 · A modular credit-market stack
            </div>

            <h1 className="mt-7 text-[40px] font-normal leading-[1.02] tracking-[-0.02em] text-[#fffaf2] drop-shadow-[0_14px_42px_rgba(0,0,0,0.55)] sm:text-[56px] lg:text-[68px]">
              <span className="block">Building on-chain</span>
              <span
                className="block bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #f6b84b 0%, #ffcc73 52%, #d99a2b 100%)",
                }}
              >
                credit markets
              </span>
              <span className="block">for Bitcoin.</span>
            </h1>

            <p className="mt-6 max-w-[600px] text-[16px] leading-[1.65] text-[#fffaf2]/85">
              Aurora is a modular Bitcoin-backed credit-market stack combining
              identity, underwriting, loan discovery, and tokenized issuance
              across Cardano-native rails.
            </p>

            {/* <p className="mt-3 max-w-[560px] text-[14px] leading-7 text-[#fffaf2]/65">
              Verified participants. Smarter underwriting. Tokenized credit
              instruments.
            </p> */}

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#stack"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[#ffe3a4] via-[#ffc95a] to-[#d99a2b] px-7 text-[13px] font-bold uppercase text-[#130b02] shadow-[0_20px_70px_rgba(246,184,75,0.24)] transition duration-200 hover:-translate-y-0.5 hover:from-[#fff0c9] hover:to-[#f6b84b]"
              >
                Explore Stack
                <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
              </a>
              <a
                href="#cta"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#f6b84b]/62 bg-[#020711]/34 px-7 text-[13px] font-bold uppercase text-[#ffcc73] transition duration-200 hover:border-[#ffcc73] hover:bg-[#f6b84b]/10"
              >
                Request Access
                <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

type InfraPillar = {
  title: string;
  product?: string;
  color: string;
  icon?: LucideIcon;
  logo?: string;
};

function HeroInfrastructureRow() {
  const items: InfraPillar[] = [
    {
      title: "Verified Participants",
      product: "Polaris",
      logo: "/brand/polaris-modified.png",
      color: "#36f5c5",
    },
    {
      title: "Credit Inputs",
      product: "Aamu Score",
      logo: "/brand/aamu-modified.png",
      color: "#72d0ff",
    },
    {
      title: "Tokenized Loans",
      product: "Solstice · CIP-113",
      logo: "/brand/solstice-modified.png",
      color: "#b690ff",
    },
    {
      title: "ZK-Ready Compliance",
      product: "Sundown",
      logo: "/brand/sundown-modified.png",
      color: "#ffcc73",
    },
  ];

  return (
    <div className="mt-12 lg:mt-16">
      <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0 lg:divide-x lg:divide-white/10">
        {items.map((item) => (
          <PillarTile key={item.title} pillar={item} />
        ))}
      </div>
    </div>
  );
}

function PillarTile({ pillar }: { pillar: InfraPillar }) {
  const Icon = pillar.icon;
  return (
    <div className="group flex flex-col items-center gap-3 px-4 text-center transition duration-200">
      <span
        className="relative flex h-[72px] w-[72px] items-center justify-center overflow-hidden rounded-full border-[1.5px] bg-[#020711]/60 backdrop-blur-xl transition duration-300 group-hover:scale-[1.04]"
        style={{
          borderColor: `${pillar.color}80`,
          boxShadow: `0 0 32px ${pillar.color}38, inset 0 0 22px ${pillar.color}18`,
        }}
      >
        <span
          aria-hidden
          className="absolute inset-0 rounded-full opacity-50"
          style={{
            background: `radial-gradient(circle at center, ${pillar.color}22 0%, transparent 70%)`,
          }}
        />
        {pillar.logo ? (
          <Image
            src={pillar.logo}
            alt={pillar.product ?? pillar.title}
            width={72}
            height={72}
            className="relative z-10 h-[58px] w-[58px] rounded-full object-cover"
          />
        ) : Icon ? (
          <Icon
            className="relative z-10 h-8 w-8"
            style={{ color: pillar.color }}
            strokeWidth={1.65}
          />
        ) : null}
      </span>
      <div className="flex flex-col items-center gap-0.5">
        <h3 className="text-[11px] font-bold uppercase leading-tight tracking-[0.18em] text-[#fffaf2]/85">
          {pillar.title}
        </h3>
        {pillar.product && (
          <p
            className="text-[10px] font-semibold tracking-[0.14em]"
            style={{ color: pillar.color }}
          >
            {pillar.product}
          </p>
        )}
      </div>
    </div>
  );
}

function HeroAtmosphere() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-100"
      >
        <source src="/brand/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-[#020711]/92 via-[#020711]/58 to-[#020711]/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#020711]/50 via-[#020711]/12 to-[#020711]/82" />
      <div
        className="absolute -top-32 right-[-12%] h-[760px] w-[920px] rounded-full opacity-35 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, rgba(230,183,102,0.45) 0%, rgba(255,213,138,0.22) 36%, transparent 72%)",
        }}
      />
      <div
        className="absolute -bottom-24 left-[-8%] h-[520px] w-[720px] rounded-full opacity-38 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, rgba(27,56,76,0.18) 0%, rgba(42,174,155,0.10) 38%, transparent 72%)",
        }}
      />
      <div
        className="absolute inset-x-[-8%] top-[10%] h-[42%] opacity-25 animate-[auroraPulse_12s_ease-in-out_infinite]"
        style={{
          background:
            "linear-gradient(104deg, transparent 0%, rgba(54,245,197,0.14) 34%, rgba(114,255,224,0.22) 50%, rgba(246,184,75,0.10) 64%, transparent 80%)",
          filter: "blur(28px)",
        }}
      />
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Market Opportunity - merged MarketStats + FeatureCards            */
/* ---------------------------------------------------------------- */

function MarketOpportunity() {
  const stats = [
    {
      label: "The opportunity",
      value: "$846T",
      copy: "Global credit markets — the frontier for verified, on-chain credit infrastructure.",
    },
    {
      label: "Bitcoin-backed lending",
      value: "$720M+",
      copy: "Active on-chain Bitcoin-backed lending, expanding as institutions seek productive BTC capital.",
    },
  ];

  return (
    <Section id="market" tone="paper">
      <SectionHeader
        eyebrow="Market opportunity"
        title="Bitcoin credit is becoming market infrastructure."
        copy="Collateral demand is visible. Institutional scale depends on identity, credit visibility, discovery, and compliant instruments."
      />
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {stats.map((s) => (
          <article
            key={s.label}
            className="rounded-[12px] border border-[#C89B3C]/22 bg-white p-7 shadow-[0_18px_60px_rgba(27,56,76,0.06)]"
          >
            <p
              className="text-[11px] font-bold uppercase tracking-[0.2em]"
              style={{ color: GOLD_HOVER }}
            >
              {s.label}
            </p>
            <p
              className="mt-4 bg-clip-text font-serif text-[58px] font-normal leading-none text-transparent sm:text-[76px]"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #C89B3C 0%, #8A5A1F 100%)",
              }}
            >
              {s.value}
            </p>
            <p
              className="mt-5 text-[14px] leading-7"
              style={{ color: GRAY_BODY }}
            >
              {s.copy}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- */
/* Aurora Stack                                                      */
/* ---------------------------------------------------------------- */

const stackLayers: StackLayerData[] = [
  {
    number: "01",
    name: "Polaris Wallet",
    role: "Identity",
    short: "SSI credentials for KYC/KYB and reusable onboarding.",
    detail:
      "Polaris Wallet enables participants to prove eligibility without exposing raw data. Reusable across the stack and partner integrations.",
    bullets: ["SSI credentials", "KYC / KYB", "Reusable onboarding"],
    icon: WalletCards,
    logo: "/brand/polaris-modified.png",
    logoAlt: "Polaris logo",
    cta: { label: "Open Wallet", href: "https://wallet.fairway.global" },
  },
  {
    number: "02",
    name: "Aamu Score",
    role: "Credit inputs",
    short: "Privacy-preserving credit signals via ZK-TLS.",
    detail:
      "Aamu Score turns off-chain financial data into proof-based credit signals. Underwriters get the inputs they need without raw records.",
    bullets: ["ZK-TLS", "Credit signals", "Private inputs"],
    icon: BarChart3,
    logo: "/brand/aamu-modified.png",
    logoAlt: "Aamu logo",
    cta: { label: "Explore Layer", href: "#harmony" },
  },
  {
    number: "03",
    name: "Sundown",
    role: "Discovery & filtering",
    short: "Verified discovery for P2P credit markets.",
    detail:
      "Built with Sundial. Adds identity proofs, compliance indexing, and lender-side filtering to Cardano P2P lending — without rebuilding the rails.",
    bullets: [
      "Identity proof metadata",
      "Compliance indexer",
      "Lender filtering",
    ],
    icon: Filter,
    logo: "/brand/sundown-modified.png",
    logoAlt: "Sundial logo",
    cta: { label: "Explore Sundown", href: "/sundown" },
    featured: true,
  },
  {
    number: "04",
    name: "Solstice",
    role: "Issuance",
    short: "Tokenized bonds and credit instruments via CIP-113.",
    detail:
      "Programmable tokens carry transfer rules, identity gating, and policy directly. Aurora provides infrastructure, not the license.",
    bullets: ["CIP-113", "Tokenized bonds", "Transfer restrictions"],
    icon: FileCheck2,
    logo: "/brand/solstice-modified.png",
    logoAlt: "CIP-113 logo",
    cta: { label: "Open Solstice", href: "https://solstice.fairway.global/" },
  },
];

function AuroraStackSection() {
  return (
    <Section id="stack" tone="light">
      <SectionHeader
        eyebrow="Aurora Stack"
        title="Identity, credit, discovery, and issuance."
        copy="Four layers, one orchestration surface. Each layer ships independently and composes into one institutional workflow."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stackLayers.map((layer) => (
          <StackLayerCard key={layer.number} layer={layer} />
        ))}
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- */
/* Layer Harmony - product choreography                              */
/* ---------------------------------------------------------------- */

function LayerHarmonySection() {
  return (
    <section
      id="harmony"
      className="relative px-5 py-16 sm:px-8 lg:px-12 lg:py-20"
      style={{
        background: "linear-gradient(180deg, #FFFCF7 0%, #FFF9EF 100%)",
      }}
    >
      <div className="mx-auto max-w-[1180px]">
        <SectionHeader
          eyebrow="System harmony"
          title="One credit flow. Four coordinated layers."
          copy="Aurora is not four separate products placed side by side. Each layer produces a signal the next layer can use — identity, credit context, market intent, and issuance logic — creating a coordinated flow for Bitcoin-backed credit markets."
        />
        <div className="mt-8">
          <LayerHarmony />
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* How Aurora works                                                  */
/* ---------------------------------------------------------------- */

function HowItWorksSection() {
  return (
    <Section id="how" tone="paper">
      <SectionHeader
        eyebrow="How Aurora works"
        title="Verify · Score · Discover · Issue · Coordinate."
        copy="One pipeline across the stack. Each step is its own product, with deeper detail one click away."
      />
      <div className="mt-10">
        <HowItWorksFlow />
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- */
/* Partnership - Built with Sundial                                  */
/* ---------------------------------------------------------------- */

function PartnershipSection() {
  return (
    <Section id="partnership" tone="light">
      <SectionHeader
        eyebrow="Partnership"
        title="Built with Sundial."
        copy="Sundown is Aurora's Fairway × Sundial layer for discoverable, filterable on-chain loans."
      />
      <div className="mt-10">
        <PartnershipVisual />
      </div>
      <div className="mt-6">
        <Link
          href="/sundown"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#C89B3C]/45 bg-white px-7 text-[13px] font-bold uppercase text-[#101823] transition hover:-translate-y-0.5 hover:border-[#C89B3C] hover:bg-[#fff8e8]"
        >
          Explore Sundown
          <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
        </Link>
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- */
/* Why Cardano                                                       */
/* ---------------------------------------------------------------- */

function WhyCardanoSection() {
  return (
    <Section id="cardano" tone="bone">
      <SectionHeader
        eyebrow="Why Cardano"
        title="Deterministic settlement for structured credit."
        copy="Cardano gives Aurora deterministic settlement, metadata-rich transactions, native assets, and programmable token standards for structured credit."
      />
      <div className="mt-10">
        <WhyCardanoCards />
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- */
/* FAQ data                                                          */
/* ---------------------------------------------------------------- */

const faqItems: { q: string; a: ReactNode }[] = [
  {
    q: "What is Aurora?",
    a: "Aurora is a modular Bitcoin-backed credit-market stack combining identity, underwriting, loan discovery, and tokenized issuance across Cardano-native rails.",
  },
  {
    q: "Is Aurora a Bitcoin L2?",
    a: "No. Aurora is not a Bitcoin L2 or base layer. It sits above existing infrastructure and enables institutional credit workflows around Bitcoin-backed lending.",
  },
  {
    q: "Does Aurora compete with Sundial?",
    a: "No. Sundial provides Bitcoin liquidity and base lending infrastructure. Aurora extends that stack with identity, credit signals, loan discovery, and programmable issuance.",
  },
  {
    q: "How does Aurora work with Sundial?",
    a: "Sundial provides Bitcoin liquidity infrastructure. Aurora adds identity, credit inputs, discovery, and tokenized issuance. Sundown is the market layer where those capabilities become usable.",
  },
  {
    q: "Why is Aurora built on Cardano?",
    a: "Cardano's extended UTXO model, metadata support, native assets, and deterministic execution make it well suited for structured financial transactions and programmable credit instruments.",
  },
  {
    q: "Does Aurora issue loans or act as a lender?",
    a: "No. Aurora provides infrastructure. Institutions, issuers, and regulated entities use Aurora's tools within their own legal, licensing, and compliance frameworks.",
  },
  {
    q: "What is Sundown?",
    a: "Sundown is Aurora's verified discovery layer, built with Sundial. It adds identity proofs, compliance indexing, and lender-side filtering to Cardano P2P lending.",
  },
  {
    q: "What is Solstice?",
    a: "Solstice is the issuance layer for tokenized bonds and structured credit instruments using Cardano programmable token standards such as CIP-113.",
  },
];

/* ---------------------------------------------------------------- */
/* Final CTA                                                         */
/* ---------------------------------------------------------------- */

function FinalCTA() {
  return (
    <section id="cta" className="bg-[#fffaf2] px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1180px] overflow-hidden rounded-[12px] border border-[#d99a2b]/34 shadow-[0_24px_90px_rgba(150,99,23,0.12)]">
        <div className="relative min-h-[260px] px-7 py-10 sm:px-10 lg:px-14">
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,250,242,0.96) 0%, rgba(255,215,139,0.72) 48%, rgba(217,154,43,0.58) 100%)",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-32 bg-[#2d2215]/58"
            style={{
              clipPath:
                "polygon(0 70%, 16% 55%, 33% 69%, 50% 47%, 70% 62%, 88% 40%, 100% 54%, 100% 100%, 0 100%)",
            }}
          />
          <div
            aria-hidden
            className="absolute bottom-14 right-[14%] h-24 w-24 rounded-full bg-[#fff7d6] shadow-[0_0_90px_rgba(255,208,116,0.88)]"
          />

          <div className="relative grid gap-8 lg:grid-cols-[0.95fr_0.85fr_auto] lg:items-center">
            <h2 className="text-[36px] font-normal leading-[1.08] text-[#101823] sm:text-[50px]">
              Build the infrastructure for{" "}
              <span className="text-[#9d6717]">Bitcoin credit.</span>
            </h2>
            <p className="max-w-[460px] text-[15px] leading-7 text-[#101823]/76">
              Join institutions and developers building verified, discoverable,
              and compliant Bitcoin-backed lending markets on Cardano.
            </p>
            <div className="flex flex-col items-start gap-3 lg:items-end">
              <a
                href="mailto:hello@fairway.xyz?subject=Aurora%20access"
                className="inline-flex h-12 w-[200px] items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[#ffe3a4] via-[#ffc95a] to-[#d99a2b] px-6 text-[13px] font-bold uppercase text-[#130b02] shadow-[0_18px_50px_rgba(246,184,75,0.24)] transition hover:-translate-y-0.5 hover:from-[#fff0c9] hover:to-[#f6b84b]"
              >
                Request Access
                <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
              </a>
              <a
                href="https://www.fairway.global"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-[200px] items-center justify-center gap-2 rounded-full border border-[#101823]/22 bg-white/80 px-6 text-[13px] font-bold uppercase text-[#101823] backdrop-blur transition hover:-translate-y-0.5 hover:border-[#101823]/42 hover:bg-white"
              >
                Visit Fairway
                <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Footer                                                            */
/* ---------------------------------------------------------------- */

function Footer() {
  return (
    <footer className="border-t border-[#1B384C]/10 bg-[#f8f3eb] px-5 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1180px] gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src="/brand/aurora-logo-modified.png"
              alt="Aurora"
              width={56}
              height={56}
              className="h-14 w-14 rounded-full object-contain"
              priority={false}
            />
            <span
              aria-label="Aurora"
              className="bg-clip-text font-serif text-[24px] font-normal leading-none tracking-[0.24em] text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #0a1421 0%, #1B384C 100%)",
              }}
            >
              AURORA
            </span>
          </Link>
          <p
            className="mt-5 max-w-[420px] text-[14px] leading-7"
            style={{ color: GRAY_BODY }}
          >
            Aurora is layered credit market infrastructure for Bitcoin-backed
            lending. Identity, credit inputs, discovery, and tokenized issuance —
            built on Cardano, with Sundial.
          </p>
          <div className="mt-6 flex items-center gap-2">
            <Image
              src="/brand/fairway-logo.png"
              alt="Fairway"
              width={20}
              height={20}
              className="h-5 w-5 object-contain"
            />
            <span
              className="text-[12px] font-semibold"
              style={{ color: GRAY_BODY }}
            >
              Built by{" "}
              <a
                href="https://www.fairway.global"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition hover:text-[#d99a2b]"
              >
                Fairway
              </a>
            </span>
          </div>
          <p className="mt-8 text-[12px]" style={{ color: GRAY_BODY }}>
            Copyright 2026 Aurora / Fairway. All rights reserved.
          </p>
        </div>
        <FooterCol
          title="Aurora"
          links={[
            { label: "Stack", href: "#stack" },
            { label: "How it works", href: "#harmony" },
            { label: "Sundown", href: "/sundown#partnership" },
            { label: "Why Cardano", href: "#cardano" },
            { label: "FAQ", href: "#faq" },
          ]}
        />
        <FooterCol
          title="Sundown"
          links={[
            { label: "Overview", href: "/sundown" },
            { label: "Architecture", href: "/sundown#architecture" },
            { label: "Pilot", href: "/sundown#pilot" },
          ]}
        />
        <FooterCol
          title="Fairway"
          links={[
            { label: "fairway.global", href: "https://www.fairway.global" },
            { label: "Privacy", href: "#" },
            { label: "Terms", href: "#" },
            { label: "Disclosures", href: "#" },
          ]}
        />
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="md:col-span-2">
      <h3
        className="text-[12px] font-semibold uppercase"
        style={{ color: GRAY_BODY }}
      >
        {title}
      </h3>
      <ul className="mt-5 space-y-3">
        {links.map((link) => {
          const isInternal =
            link.href.startsWith("/") && !link.href.startsWith("//");
          const isExternal = /^https?:\/\//.test(link.href);
          const className =
            "text-[14px] text-[#17202b]/70 transition hover:text-[#d99a2b]";
          return (
            <li key={link.label}>
              {isInternal ? (
                <Link href={link.href} className={className}>
                  {link.label}
                </Link>
              ) : (
                <a
                  href={link.href}
                  className={className}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                >
                  {link.label}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Shared primitives (page-local)                                    */
/* ---------------------------------------------------------------- */

function Section({
  id,
  children,
  tone = "light",
}: {
  id?: string;
  children: ReactNode;
  tone?: "light" | "paper" | "bone";
}) {
  const bg =
    tone === "paper"
      ? "linear-gradient(180deg, #FFFCF7 0%, #FFF9EF 100%)"
      : tone === "bone"
        ? "#f8f3eb"
        : "#fffaf2";
  return (
    <section
      id={id}
      className="relative px-5 py-24 sm:px-8 lg:px-12 lg:py-28"
      style={{ background: bg }}
    >
      <div className="mx-auto max-w-[1180px]">{children}</div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: ReactNode;
  copy?: string;
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr] lg:items-end lg:gap-12">
      <div>
        <p
          className="text-[11px] font-bold uppercase tracking-[0.22em]"
          style={{ color: GOLD_HOVER }}
        >
          {eyebrow}
        </p>
        <h2 className="mt-3 font-serif text-[32px] font-normal leading-[1.1] tracking-[-0.01em] text-[#101823] sm:text-[40px] lg:text-[46px]">
          {title}
        </h2>
      </div>
      {copy ? (
        <p
          className="max-w-[480px] text-[15px] leading-[1.7]"
          style={{ color: GRAY_BODY }}
        >
          {copy}
        </p>
      ) : null}
    </div>
  );
}
