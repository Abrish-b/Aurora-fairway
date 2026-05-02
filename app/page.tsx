import type { ComponentType, ReactNode } from "react";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Blocks,
  CircleCheck,
  Coins,
  FileCheck2,
  FileText,
  Filter,
  Fingerprint,
  Layers,
  LockKeyhole,
  Menu,
  Plus,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Sun,
  WalletCards,
  Zap,
} from "lucide-react";

type IconType = ComponentType<{ className?: string; strokeWidth?: number }>;

type StackLayer = {
  number: string;
  name: string;
  role: string;
  description: ReactNode;
  icon: IconType;
  visual: "wallet" | "score" | "market" | "bond";
  chips: string[];
  bullets?: string[];
  ctas: string[];
  ctaLinks: string[];
  logo?: string;
  logoAlt?: string;
  featured?: boolean;
};

const stackLayers: StackLayer[] = [
  {
    number: "01",
    name: "Polaris Wallet",
    role: "Identity Layer",
    description:
      "SSI-based identity infrastructure for KYC / KYB, verifiable credentials, and zero-knowledge proofs. Polaris Wallet enables participants to prove eligibility without exposing unnecessary raw data.",
    icon: WalletCards,
    visual: "wallet",
    chips: ["SSI credentials", "KYC / KYB", "Reusable onboarding"],
    ctas: ["Open Wallet", "Learn More"],
    ctaLinks: ["https://wallet.fairway.global", "#docs"],
    logo: "/brand/polaris.jpg",
    logoAlt: "Polaris logo",
  },
  {
    number: "02",
    name: "Aamu Aurora",
    role: "Credit Inputs",
    description:
      "Aamu Aurora turns off-chain financial and borrower data into privacy-preserving credit signals using ZK-TLS and proof-based verification.",
    icon: BarChart3,
    visual: "score",
    chips: ["ZK-TLS", "Credit signals", "Private inputs"],
    ctas: ["View Docs", "Explore Inputs"],
    ctaLinks: ["#docs", "#docs"],
    logo: "/brand/aamu.jpg",
    logoAlt: "Aamu logo",
  },
  {
    number: "03",
    name: "Sundown",
    role: "Credit Market Discovery Layer",
    description: (
      <>
        Sundown is the Bitcoin-backed credit market layer built in
        collaboration with Sundial. Sundial provides Bitcoin liquidity and base
        infrastructure. Aurora extends that foundation with identity, credit
        inputs, loan discovery, and compliance-aware market participation.
      </>
    ),
    icon: Filter,
    visual: "market",
    chips: ["UTXO loan requests", "Policy filters", "Orderbook-style matching"],
    bullets: [
      "UTXO-based loan requests with borrower metadata",
      "Filtering by jurisdiction, credentials, borrower type, and risk profile",
      "Verified counterparty discovery before lending participation",
      "Built on Cardano extended UTXO, metadata support, and deterministic execution",
    ],
    ctas: ["Explore Markets", "Learn More"],
    ctaLinks: ["#partnership", "#docs"],
    logo: "/brand/sundial.png",
    logoAlt: "Sundial logo",
    featured: true,
  },
  {
    number: "04",
    name: "Solstice Aurora",
    role: "Issuance Layer",
    description:
      "Solstice Aurora enables tokenized bonds and structured credit instruments using Cardano programmable token standards, including CIP-113.",
    icon: FileCheck2,
    visual: "bond",
    chips: ["CIP-113", "Tokenized bonds", "Transfer restrictions"],
    bullets: [
      "Identity-gated ownership",
      "Compliance-aware enforcement",
      "Aurora provides infrastructure, not the license",
    ],
    ctas: ["Launch Minter", "Read Spec"],
    ctaLinks: ["https://kyc.fairway.global", "#docs"],
    logo: "/brand/cip113-logo.png",
    logoAlt: "CIP-113 logo",
  },
];

const frameworkRows = [
  { layer: "Polaris Wallet", value: "Identity", purpose: "Verified access" },
  { layer: "Aamu Aurora", value: "Credit", purpose: "Risk inputs" },
  { layer: "Sundown", value: "Markets", purpose: "Loan discovery" },
  { layer: "Solstice Aurora", value: "Issuance", purpose: "Tokenized bonds" },
];

const cardanoCards = [
  {
    icon: Blocks,
    title: "Extended UTXO Model",
    copy: "Cardano's extended UTXO architecture enables structured, predictable financial transactions with clear validation rules.",
  },
  {
    icon: FileText,
    title: "Metadata-Rich Transactions",
    copy: "Identity proofs, credit signals, and loan metadata can be attached to transaction flows without turning the chain into a centralized database.",
  },
  {
    icon: Coins,
    title: "Native Assets",
    copy: "Credit instruments and tokenized bonds can use Cardano native assets, reducing unnecessary smart contract complexity.",
  },
  {
    icon: CircleCheck,
    title: "Deterministic Execution",
    copy: "Predictable settlement and validation align with institutional expectations for financial infrastructure.",
  },
];

const faqItems: { q: string; a: ReactNode }[] = [
  {
    q: "What is Aurora?",
    a: "Aurora is layered credit market infrastructure for Bitcoin-backed lending. It provides identity, credit inputs, loan discovery, and tokenized issuance layers built on Cardano.",
  },
  {
    q: "Is Aurora a Bitcoin L2?",
    a: "No. Aurora is not a Bitcoin L2 or base layer. It sits above existing infrastructure and enables institutional credit workflows around Bitcoin-backed lending.",
  },
  {
    q: "Does Aurora compete with Sundial?",
    a: "No. Sundial provides Bitcoin liquidity and base infrastructure. Aurora extends that stack with identity, credit signals, loan discovery, and programmable credit issuance.",
  },
  {
    q: "How does Aurora work with Sundial?",
    a: "Sundial provides Bitcoin liquidity infrastructure. Aurora adds identity, credit inputs, discovery, and tokenized issuance. Sundown is the market layer where those capabilities become usable.",
  },
  {
    q: "What chains does Aurora support?",
    a: "Aurora is built on Cardano first because Cardano's extended UTXO model, metadata support, native assets, and deterministic execution are well suited for structured financial transactions. The architecture may support future multi-chain expansion where appropriate.",
  },
  {
    q: "Why is Aurora built on Cardano?",
    a: "Cardano's extended UTXO model, metadata support, native assets, and deterministic execution make it well suited for structured financial transactions and programmable credit instruments.",
  },
  {
    q: "What is Polaris Wallet?",
    a: "Polaris Wallet provides reusable SSI-based credentials for KYC, KYB, accreditation, and verified market participation.",
  },
  {
    q: "What is Aamu Aurora?",
    a: "Aamu Aurora converts off-chain financial and borrower data into privacy-preserving credit inputs using ZK-TLS and proof-based verification.",
  },
  {
    q: "What is Sundown?",
    a: "Sundown is Aurora's credit market discovery layer built in collaboration with Sundial. It enables UTXO-based loan requests, borrower metadata, credential-aware filtering, and orderbook-style matching.",
  },
  {
    q: "Does Aurora issue loans or act as a lender?",
    a: "No. Aurora provides infrastructure. Institutions, issuers, and regulated entities use Aurora's tools within their own legal, licensing, and compliance frameworks.",
  },
  {
    q: "What is Solstice Aurora?",
    a: "Solstice Aurora is Aurora's issuance layer for tokenized bonds and structured credit instruments using Cardano programmable token standards such as CIP-113.",
  },
];

export default function AuroraPage() {
  return (
    <div className="min-h-screen bg-[#fffaf2] text-[#07111b] font-sans antialiased">
      <Nav />
      <main>
        <Hero />
        <MarketStats />
        <FeatureCards />
        <ThesisLine />
        <LayeredCredit />
        <Framework />
        <WhyCardano />
        <AuroraStack />
        <SundialPartnership />
        {/* <BuiltWithSundialPanel /> */}
        <BuiltForTrust />
        <BitcoinCreditCTA />
        <FAQ />
        <FooterCTA />
      </main>
      <Footer />
    </div>
  );
}

function Nav() {
  const links = [
    { href: "#stack", label: "Stack" },
    { href: "#partnership", label: "Partnerships" },
    { href: "#how", label: "How It Works" },
    { href: "#use-cases", label: "Use Cases" },
    { href: "#docs", label: "Docs" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 text-[#fffaf2]">
      <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between rounded-[8px] border border-white/12 bg-[#020711]/58 px-4 py-3 shadow-[0_18px_70px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:px-5">
        <AuroraWordmark href="#top" tone="light" />

        <nav className="hidden items-center gap-1 text-[12px] font-semibold uppercase text-[#fffaf2]/72 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2.5 transition duration-200 hover:bg-white/7 hover:text-[#ffcc73] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffcc73]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#footer-cta"
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
                href="#footer-cta"
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

function AuroraWordmark({
  href,
  tone = "dark",
  compact = false,
}: {
  href?: string;
  tone?: "dark" | "light";
  compact?: boolean;
}) {
  const content = (
    <span
      aria-label="Aurora"
      className={[
        "flex items-center bg-clip-text font-serif font-normal leading-none tracking-[0.24em] text-transparent",
        compact ? "text-[16px]" : "text-[21px]",
      ].join(" ")}
      style={{
        backgroundImage:
          tone === "light"
            ? "linear-gradient(135deg, #C88A2D 0%, #E6B766 50%, #8A5A1F 100%)"
            : "linear-gradient(180deg, #0a1421 0%, #1B384C 100%)",
      }}
    >
      AURORA
    </span>
  );

  if (!href) {
    return content;
  }

  return (
    <a
      href={href}
      className="inline-flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffcc73]"
    >
      {content}
    </a>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-screen flex-col overflow-hidden bg-[#020711] text-[#fffaf2]"
    >
      <HeroAtmosphere />
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1320px] flex-1 flex-col px-5 pb-14 pt-24 sm:px-8 lg:px-12 lg:pb-20 lg:pt-28">
        <div className="flex flex-1 flex-col justify-center">
          <div className="max-w-[820px]">
            <div className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[#ffcc73]/30 bg-[#020711]/45 px-2.5 py-1 text-[9.5px] font-bold uppercase tracking-[0.16em] text-[#ffcc73] shadow-[0_8px_24px_rgba(0,0,0,0.28)] backdrop-blur-xl">
              <span className="h-1 w-1 rounded-full bg-[#ffcc73] shadow-[0_0_8px_rgba(255,204,115,0.9)]" />
              A layered credit stack for Bitcoin
            </div>
            <h1 className="mt-7 text-[38px] font-normal leading-[1.02] tracking-[-0.02em] text-[#fffaf2] drop-shadow-[0_14px_42px_rgba(0,0,0,0.55)] sm:text-[52px] lg:text-[64px]">
              <span className="block">Building</span>
              <span
                className="block bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #f6b84b 0%, #ffcc73 52%, #d99a2b 100%)",
                }}
              >
                on-chain
              </span>
              <span className="block">credit markets</span>
              <span className="block">
                for{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #f6b84b 0%, #ffcc73 52%, #d99a2b 100%)",
                  }}
                >
                  Bitcoin.
                </span>
              </span>
            </h1>
            <p className="mt-6 max-w-[580px] text-[16px] font-medium leading-[1.65] text-[#fffaf2]/85 drop-shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
              Aurora is the identity, credit, and bond layer for Bitcoin-backed
              lending markets built with Sundial on Cardano, secured with 2K.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <PrimaryButton href="#stack">Explore the Stack</PrimaryButton>
              <SecondaryButton href="#footer-cta" tone="dark">
                Request Access
              </SecondaryButton>
            </div>
            <EcosystemStrip />
          </div>
        </div>

        <HeroInfrastructureRow />
      </div>
    </section>
  );
}

function HeroAtmosphere() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <Image
        src="/brand/hero-ls.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#020711]/92 via-[#020711]/58 to-[#020711]/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#020711]/50 via-[#020711]/12 to-[#020711]/82" />
      {/* Soft golden sunrise glow upper-right */}
      <div
        className="absolute -top-32 right-[-12%] h-[760px] w-[920px] rounded-full opacity-35 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, rgba(230,183,102,0.45) 0%, rgba(255,213,138,0.22) 36%, transparent 72%)",
        }}
      />
      {/* Cardano blue/teal undertone bottom-left */}
      <div
        className="absolute -bottom-24 left-[-8%] h-[520px] w-[720px] rounded-full opacity-38 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, rgba(27,56,76,0.18) 0%, rgba(42,174,155,0.10) 38%, transparent 72%)",
        }}
      />
      {/* Subtle aurora beams — almost transparent */}
      <div
        className="absolute inset-x-[-8%] top-[10%] h-[42%] opacity-25 animate-[auroraPulse_12s_ease-in-out_infinite]"
        style={{
          background:
            "linear-gradient(104deg, transparent 0%, rgba(54,245,197,0.14) 34%, rgba(114,255,224,0.22) 50%, rgba(246,184,75,0.10) 64%, transparent 80%)",
          filter: "blur(28px)",
        }}
      />
      {/* Faint horizon arc */}
      <svg
        className="absolute inset-x-0 bottom-0 w-full"
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="hero-horizon-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#020711" stopOpacity="0" />
            <stop offset="1" stopColor="#020711" stopOpacity="0.72" />
          </linearGradient>
        </defs>
        <path
          d="M0 220 L0 92 Q 360 0, 720 92 T 1440 92 L 1440 220 Z"
          fill="url(#hero-horizon-grad)"
        />
        <path
          d="M0 92 Q 360 0, 720 92 T 1440 92"
          fill="none"
          stroke="#f6b84b"
          strokeOpacity="0.28"
          strokeWidth="1"
        />
      </svg>
      {/* Faint grid texture (very low opacity) */}
      {/* <div
        className="absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      /> */}
    </div>
  );
}

function EcosystemStrip() {
  const items: {
    icon?: IconType;
    logo?: string;
    alt?: string;
    label: string;
  }[] = [
    { logo: "/brand/fairway-logo.png", alt: "Fairway logo", label: "Fairway" },
    { logo: "/brand/sundial.png", alt: "Sundial logo", label: "Sundial" },
    { logo: "/brand/cardano.png", alt: "Cardano logo", label: "Cardano" },
    { logo: "/brand/midnight.png", alt: "Midnight logo", label: "Midnight" },
    { logo: "/brand/veridian.png", alt: "Veridian logo", label: "Veridian" },
    { logo: "/brand/cip113-logo.png", alt: "CIP-113 logo", label: "CIP-113" },
  ];

  return (
    <div className="mt-7 max-w-[720px] rounded-[8px] border border-white/12 bg-[#020711]/38 px-4 py-3.5 shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl">
      <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#fffaf2]/46">
        Trusted Ecosystem
      </p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            {item.logo ? (
              <span className="relative h-4 w-4 overflow-hidden rounded-full">
                <Image
                  src={item.logo}
                  alt={item.alt ?? `${item.label} logo`}
                  fill
                  sizes="16px"
                  className="object-contain"
                />
              </span>
            ) : item.icon ? (
              <item.icon className="h-4 w-4 text-[#f6b84b]" strokeWidth={1.5} />
            ) : null}
            <span className="text-[11px] font-bold uppercase text-[#fffaf2]/72">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroInfrastructureRow() {
  const items = [
    { icon: Coins, title: "Bitcoin Collateral", color: "#f6b84b" },
    { icon: BadgeCheck, title: "Verified Participants", color: "#36f5c5" },
    { icon: BarChart3, title: "Credit Inputs", color: "#72d0ff" },
    { icon: FileCheck2, title: "Tokenized Loans", color: "#b690ff" },
    { icon: ShieldCheck, title: "2K-Ready Compliance", color: "#ffcc73" },
  ];

  return (
    <div className="mt-12 lg:mt-16">
      <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-y-0 lg:divide-x lg:divide-white/10">
        {items.map((item) => (
          <div
            key={item.title}
            className="group flex flex-col items-center gap-3.5 px-4 text-center transition duration-200"
          >
            <span
              className="relative flex h-[68px] w-[68px] items-center justify-center rounded-full border-[1.5px] bg-[#020711]/55 backdrop-blur-xl transition duration-300 group-hover:scale-[1.04]"
              style={{
                borderColor: `${item.color}80`,
                boxShadow: `0 0 28px ${item.color}33, inset 0 0 18px ${item.color}14`,
              }}
            >
              <item.icon
                className="h-7 w-7"
                style={{ color: item.color }}
                strokeWidth={1.55}
              />
            </span>
            <h3 className="text-[11px] font-bold uppercase leading-tight tracking-[0.18em] text-[#fffaf2]/82">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

function MarketStats() {
  return (
    <section className="relative isolate overflow-hidden px-5 py-20 text-[#07111F] sm:px-8 lg:px-12">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(230,183,102,0.18), transparent 56%), linear-gradient(180deg, #FFFCF7 0%, #FFF9EF 48%, #F8F1E7 100%)",
        }}
      />
      <div className="relative mx-auto max-w-[1180px]">
        <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel>Market Intelligence</SectionLabel>
            <h2 className="mt-3 text-[28px] font-normal leading-tight text-[#07111F] sm:text-[40px]">
              Bitcoin credit is becoming market infrastructure.
            </h2>
          </div>
          <p className="max-w-[430px] text-[14px] leading-6 text-[#4E5A66]">
            Collateral demand is visible. Institutional scale depends on
            identity, credit visibility, discovery, and compliant instruments.
          </p>
        </div>
        <div className="grid overflow-hidden rounded-[8px] border border-[#C88A2D]/24 bg-gradient-to-b from-white/95 to-[#FFFCF7]/85 shadow-[0_18px_60px_rgba(27,56,76,0.10)] backdrop-blur-md md:grid-cols-2">
          <StatBlock
            label="The Opportunity"
            value="$846T"
            copy="Global credit markets represent one of the largest opportunities to move real financial activity on-chain."
          />
          <StatBlock
            label="Growing Rapidly"
            value="$720M+"
            copy="Bitcoin-backed on-chain lending markets continue expanding as institutions seek productive BTC capital."
          />
        </div>
      </div>
    </section>
  );
}

function StatBlock({
  label,
  value,
  copy,
}: {
  label: string;
  value: string;
  copy: string;
}) {
  return (
    <div className="relative min-h-[245px] border-b border-[#C88A2D]/16 px-7 py-9 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8A5A1F]">{label}</p>
      <div
        className="mt-5 bg-clip-text font-serif text-[58px] font-normal leading-none text-transparent sm:text-[76px]"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #C88A2D 0%, #8A5A1F 100%)",
        }}
      >
        {value}
      </div>
      <p className="mt-5 max-w-[420px] text-[15px] leading-7 text-[#4E5A66]">
        {copy}
      </p>
    </div>
  );
}

function FeatureCards() {
  const cards = [
    {
      number: "01",
      icon: ShieldCheck,
      title: "Identity-Native Markets",
      copy: "Attach reusable credentials and KYC proofs to market participation without repeating onboarding.",
    },
    {
      number: "02",
      icon: LockKeyhole,
      title: "Privacy-Powered Credit",
      copy: "Use ZK-enabled financial inputs to improve underwriting while protecting sensitive borrower data.",
    },
    {
      number: "03",
      icon: Blocks,
      title: "Tokenized Debt Rails",
      copy: "Turn loans into programmable credit instruments designed for compliant ownership.",
    },
  ];

  return (
    <section className="px-5 pb-20 text-[#07111F] sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1180px] gap-4 md:grid-cols-3">
        {cards.map((card) => (
          <article
            key={card.number}
            className="group rounded-[8px] border border-[#1B384C]/12 bg-gradient-to-b from-white/95 to-[#FFFCF7]/82 p-7 shadow-[0_18px_60px_rgba(27,56,76,0.08)] transition duration-200 hover:-translate-y-1 hover:border-[#C88A2D]/40 hover:shadow-[0_24px_80px_rgba(27,56,76,0.12)]"
          >
            <div className="flex items-start justify-between">
              <span className="text-[13px] font-semibold text-[#C88A2D]">
                {card.number}
              </span>
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#2AAE9B]/30 bg-[#2AAE9B]/8 transition group-hover:border-[#C88A2D]/50 group-hover:bg-[#FFF3D8]/55">
                <card.icon
                  className="h-5 w-5 text-[#2AAE9B] transition group-hover:text-[#C88A2D]"
                  strokeWidth={1.45}
                />
              </div>
            </div>
            <h2 className="mt-10 text-[21px] font-semibold leading-7 text-[#07111F]">
              {card.title}
            </h2>
            <p className="mt-4 text-[14px] leading-6 text-[#4E5A66]">
              {card.copy}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ThesisLine() {
  return (
    <section className="relative overflow-hidden px-5 pb-24 pt-4 text-center sm:px-8 lg:px-12">
      <p className="relative z-10 mx-auto max-w-[960px] text-[19px] leading-8 text-[#07111F]/82 sm:text-[22px]">
        Institutional{" "}
        <span
          className="bg-clip-text font-semibold text-transparent"
          style={{ backgroundImage: "linear-gradient(180deg, #C88A2D, #8A5A1F)" }}
        >
          BTC
        </span>
        . Verified counterparties.{" "}
        <span
          className="bg-clip-text font-semibold text-transparent"
          style={{ backgroundImage: "linear-gradient(180deg, #C88A2D, #8A5A1F)" }}
        >
          Programmable credit.
        </span>
      </p>
      <p className="relative z-10 mx-auto mt-3 max-w-[680px] text-[14px] leading-6 text-[#4E5A66]">
        Aurora turns Bitcoin collateral into identity-aware, discoverable,
        tokenized credit markets.
      </p>
    </section>
  );
}

function LayeredCredit() {
  const boxes = [
    {
      icon: WalletCards,
      logo: "/brand/polaris.jpg",
      logoAlt: "Polaris logo",
      title: "Polaris Wallet",
      copy: "Portable identity credentials for KYC, accreditation, and reusable onboarding.",
    },
    {
      icon: BarChart3,
      logo: "/brand/aamu.jpg",
      logoAlt: "Aamu logo",
      title: "Aamu Aurora",
      copy: "Zero-knowledge powered qualification signals from public and private financial data.",
    },
    {
      icon: Filter,
      logo: "/brand/sundial.png",
      logoAlt: "Sundial logo",
      title: "Sundown",
      copy: "Fairway and Sundial market layer for discoverable and filterable on-chain loans.",
    },
  ];

  return (
    <section id="how" className="bg-[#fffaf2] px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <div>
          <SectionLabel>Layered On-Chain Credit</SectionLabel>
          <h2 className="mt-4 text-[42px] font-normal leading-[1.04] text-[#101823] sm:text-[58px]">
            Credit Without
            <br />
            <span className="text-[#d99a2b]">Legacy Friction</span>
          </h2>
          <div className="mt-7 max-w-[560px] space-y-4 text-[16px] leading-8 text-[#17202b]/74">
            <p className="text-[18px] font-semibold text-[#101823]">
              Collateral alone is not enough for institutional credit markets.
            </p>
            <p>
              Lenders need to know who they are lending to, evaluate borrower
              quality, filter opportunities, and satisfy internal policy
              requirements.
            </p>
            <p>
              Aurora provides the missing infrastructure: identity, credit
              inputs, loan discovery, and programmable issuance for
              Bitcoin-backed lending.
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          {boxes.map((box) => (
            <article
              key={box.title}
              className="group rounded-[8px] border border-[#1b384c]/14 bg-white p-6 shadow-[0_18px_60px_rgba(33,42,50,0.06)] transition duration-200 hover:-translate-y-1 hover:border-[#d99a2b]/46"
            >
              <div className="flex gap-5">
                <div className="relative flex h-12 w-12 flex-none items-center justify-center overflow-hidden rounded-[6px] border border-[#d99a2b]/28 bg-[#f6b84b]/10">
                  {box.logo ? (
                    <Image
                      src={box.logo}
                      alt={box.logoAlt}
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <box.icon className="h-6 w-6 text-[#d99a2b]" strokeWidth={1.45} />
                  )}
                </div>
                <div>
                  <h3 className="text-[19px] font-semibold text-[#101823]">
                    {box.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-6 text-[#17202b]/66">
                    {box.copy}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Framework() {
  const eligibility = [
    ["Jurisdiction", "Configurable"],
    ["KYC Level", "KYC / KYB Verified"],
    ["Entity Type", "Custodian / Fund / Institution / DAO"],
    ["Risk Profile", "Low / Medium / High"],
    ["Instrument Access", "Loans / Bonds / OTC"],
  ];

  const qualities = [
    ["Verifiable", "Identity-first participation"],
    ["Compliant", "Policy-aware access"],
    ["Discoverable", "Market-ready opportunities"],
    ["Programmable", "Institution-grade issuance"],
  ];

  return (
    <section className="bg-[#f8f3eb] px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel>Aurora Capital Markets Framework</SectionLabel>
            <h2 className="mt-4 text-[34px] font-normal leading-tight text-[#101823] sm:text-[48px]">
              Granular participation.
              <br />
              <span className="text-[#d99a2b]">Compliant by design.</span>
            </h2>
          </div>
          <p className="max-w-[420px] text-[15px] leading-7 text-[#17202b]/66">
            Aurora separates access, risk inputs, market discovery, and issuance
            so institutions can map policy requirements into on-chain credit
            workflows.
          </p>
        </div>

        <div className="overflow-hidden rounded-[8px] border border-[#1b384c]/14 bg-white shadow-[0_24px_90px_rgba(35,42,49,0.08)]">
          <div className="grid bg-[#06131f] text-[11px] font-bold uppercase text-[#ffcc73] md:grid-cols-4">
            {["Layer", "Identity", "Credit", "Markets", "Issuance"]
              .slice(1)
              .map((heading) => (
                <div key={heading} className="border-b border-white/10 px-5 py-4 md:border-b-0 md:border-r md:last:border-r-0">
                  {heading}
                </div>
              ))}
          </div>
          <div className="grid md:grid-cols-4">
            {frameworkRows.map((row) => (
              <div
                key={row.value}
                className="border-b border-[#1b384c]/10 px-5 py-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
              >
                <p className="text-[11px] font-bold uppercase text-[#17202b]/42">
                  {row.layer}
                </p>
                <h3 className="mt-3 text-[22px] font-semibold text-[#101823]">
                  {row.value}
                </h3>
                <p className="mt-2 text-[14px] leading-6 text-[#17202b]/66">
                  {row.purpose}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-[#1b384c]/10 bg-[#fffaf2] p-5 sm:p-7">
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="text-[22px] font-semibold text-[#101823]">
                  Eligible Counterparty Framework
                </h3>
                <p className="mt-2 text-[14px] text-[#17202b]/62">
                  Granular eligibility. Policy-aligned by design.
                </p>
              </div>
              <span className="text-[11px] font-bold uppercase text-[#d99a2b]">
                Infrastructure rules
              </span>
            </div>
            <div className="grid gap-px overflow-hidden rounded-[6px] border border-[#1b384c]/12 bg-[#1b384c]/12 md:grid-cols-5">
              {eligibility.map(([label, value]) => (
                <div key={label} className="bg-white px-4 py-4">
                  <p className="text-[11px] font-bold uppercase text-[#17202b]/42">
                    {label}
                  </p>
                  <p className="mt-2 text-[13px] font-semibold leading-5 text-[#101823]">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid border-t border-[#1b384c]/10 md:grid-cols-4">
            {qualities.map(([title, copy]) => (
              <div
                key={title}
                className="border-b border-[#1b384c]/10 px-5 py-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
              >
                <p className="text-[15px] font-semibold text-[#101823]">{title}</p>
                <p className="mt-1 text-[13px] leading-5 text-[#17202b]/58">
                  {copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyCardano() {
  return (
    <section className="relative overflow-hidden bg-[#fffaf2] px-5 py-24 sm:px-8 lg:px-12">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-80"
        style={{
          background:
            "linear-gradient(180deg, #fffaf2 0%, #f8f3eb 100%), radial-gradient(ellipse at 82% 20%, rgba(54,245,197,0.12), transparent 42%)",
        }}
      />
      <div className="relative mx-auto max-w-[1180px]">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-end">
          <div>
            <SectionLabel>Why Cardano</SectionLabel>
            <h2 className="mt-4 text-[38px] font-normal leading-[1.06] text-[#101823] sm:text-[54px]">
              Structured credit needs deterministic financial infrastructure.
            </h2>
          </div>
          <p className="max-w-[620px] text-[16px] leading-8 text-[#17202b]/70 lg:justify-self-end">
            Aurora is built on Cardano because institutional credit markets
            require predictable execution, programmable assets, and
            transaction-level structure.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {cardanoCards.map((card) => (
            <article
              key={card.title}
              className="rounded-[8px] border border-[#1b384c]/14 bg-white p-6 shadow-[0_20px_70px_rgba(33,42,50,0.06)] transition duration-200 hover:-translate-y-1 hover:border-[#36f5c5]/42"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-[6px] border border-[#36f5c5]/24 bg-[#36f5c5]/8">
                <card.icon className="h-6 w-6 text-[#0e7c71]" strokeWidth={1.45} />
              </div>
              <h3 className="mt-6 text-[20px] font-semibold leading-7 text-[#101823]">
                {card.title}
              </h3>
              <p className="mt-3 text-[14px] leading-6 text-[#17202b]/66">
                {card.copy}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-10 border-l border-[#d99a2b]/48 pl-5 text-[15px] font-semibold leading-7 text-[#101823]">
          Aurora is built on Cardano because institutional credit markets
          require structure, determinism, and programmable assets.
        </p>
      </div>
    </section>
  );
}

function AuroraStack() {
  return (
    <section
      id="stack"
      className="relative overflow-hidden bg-[#fff6e4] px-5 py-24 sm:px-8 lg:px-12"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-95"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,250,242,0.98) 0%, rgba(255,246,228,0.98) 46%, rgba(255,250,242,0.96) 100%), radial-gradient(ellipse at 50% 0%, rgba(246,184,75,0.22), transparent 56%)",
        }}
      />
      <div className="relative mx-auto max-w-[1320px]">
        <div className="grid gap-8 lg:grid-cols-[0.62fr_1fr] lg:items-end">
          <div>
            <SectionLabel>Four Layers for Programmable Bitcoin Credit</SectionLabel>
            <h2 className="mt-4 max-w-[700px] text-[40px] font-normal leading-[1.04] text-[#101823] sm:text-[58px]">
              Identity, credit, discovery, and issuance.
            </h2>
          </div>
          <p className="max-w-[640px] text-[16px] leading-8 text-[#17202b]/70 lg:justify-self-end">
            Aurora is not a Bitcoin L2, base layer, or standalone lender. It is
            layered credit market infrastructure built on Cardano and integrated
            with Sundial.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.85fr_0.85fr_1.3fr]">
          {stackLayers.map((layer) => (
            <StackCard key={layer.number} layer={layer} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StackCard({ layer }: { layer: StackLayer }) {
  const isBond = layer.name === "Solstice Aurora";
  const className = [
    "group relative overflow-hidden rounded-[8px] border bg-[#fffdf8]/92 p-6 shadow-[0_24px_90px_rgba(150,99,23,0.11)] transition duration-200 hover:-translate-y-1",
    layer.featured
      ? "border-[#36f5c5]/46 lg:row-span-2 lg:min-h-[640px] shadow-[0_28px_110px_rgba(10,126,113,0.14)]"
      : "border-[#d99a2b]/32 hover:border-[#d99a2b]/76",
    isBond ? "lg:col-span-2" : "",
  ].join(" ");

  return (
    <article className={className}>
      <div
        className={[
          "absolute inset-x-0 top-0 h-1",
          layer.featured
            ? "bg-gradient-to-r from-[#36f5c5] via-[#ffcc73] to-transparent"
            : "bg-gradient-to-r from-[#d99a2b] via-[#ffcc73] to-transparent",
        ].join(" ")}
      />
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="text-[13px] font-bold uppercase text-[#d99a2b]">
            Layer {layer.number}
          </span>
          {layer.featured ? (
            <span className="ml-3 rounded-full border border-[#36f5c5]/32 bg-[#36f5c5]/9 px-3 py-1 text-[10px] font-bold uppercase text-[#0e7c71]">
              Most Important
            </span>
          ) : null}
        </div>
        <div
          className={[
            "relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border transition",
            layer.featured
              ? "border-[#36f5c5]/38 bg-[#36f5c5]/9 text-[#0e7c71]"
              : "border-[#d99a2b]/34 bg-[#f6b84b]/10 text-[#d99a2b]",
          ].join(" ")}
        >
          {layer.logo ? (
            <Image
              src={layer.logo}
              alt={layer.logoAlt ?? `${layer.name} logo`}
              width={48}
              height={48}
              className="h-full w-full object-cover"
            />
          ) : (
            <layer.icon className="h-6 w-6" strokeWidth={1.45} />
          )}
        </div>
      </div>

      <StackVisual layer={layer} />

      <div className="mt-6 border-t border-[#1b384c]/10 pt-5">
        <h3 className="text-[24px] font-semibold leading-7 text-[#101823]">
          {layer.name}
        </h3>
        <p className="mt-2 text-[12px] font-bold uppercase text-[#d99a2b]">
          {layer.role}
        </p>
        <div
          className={[
            "mt-4 text-[14px] leading-7 text-[#17202b]/70",
            layer.featured ? "max-w-[640px]" : "",
          ].join(" ")}
        >
          {layer.description}
        </div>

        {layer.bullets ? (
          <ul
            className={[
              "mt-5 grid gap-3 text-[13px] leading-6 text-[#17202b]/72",
              layer.featured ? "sm:grid-cols-2" : "",
            ].join(" ")}
          >
            {layer.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <CircleCheck
                  className="mt-0.5 h-4 w-4 flex-none text-[#0e7c71]"
                  strokeWidth={1.7}
                />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-5 flex flex-wrap gap-2">
          {layer.chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-[#d99a2b]/24 bg-[#fff6e4] px-3 py-1.5 text-[11px] font-semibold text-[#624313]"
            >
              {chip}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          {layer.ctas.map((cta, index) => (
            <a
              key={cta}
              href={layer.ctaLinks[index] ?? "#docs"}
              target={layer.ctaLinks[index]?.startsWith("http") ? "_blank" : undefined}
              rel={layer.ctaLinks[index]?.startsWith("http") ? "noreferrer" : undefined}
              className={[
                "inline-flex min-h-10 items-center justify-center rounded-full px-4 text-[11px] font-bold uppercase transition duration-200",
                index === 0
                  ? "border border-[#d99a2b]/42 bg-[#101823] text-[#ffcc73] hover:bg-[#17202b]"
                  : "border border-[#1b384c]/14 bg-white text-[#101823] hover:border-[#d99a2b]/44",
              ].join(" ")}
            >
              {cta}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

function StackVisual({ layer }: { layer: StackLayer }) {
  const kind = layer.visual;
  const featured = layer.featured;
  const heightClass = featured ? "h-44" : "h-36";

  if (kind === "wallet") {
    return (
      <div
        className={`relative mt-7 ${heightClass} overflow-hidden rounded-[6px] border border-[#d99a2b]/24 bg-gradient-to-br from-[#fffaf2] to-[#f4e4bd] p-4`}
      >
        <div className="absolute inset-x-0 top-0 h-px animate-[mockupScan_4.8s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-[#d99a2b]/70 to-transparent" />
        <div className="h-full rounded-[4px] border border-[#d99a2b]/30 bg-white/78 p-3 shadow-[inset_0_1px_18px_rgba(217,154,43,0.08)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {layer.logo ? (
                <Image
                  src={layer.logo}
                  alt={layer.logoAlt ?? `${layer.name} logo`}
                  width={22}
                  height={22}
                  className="h-6 w-6 rounded-full object-cover"
                />
              ) : (
                <Fingerprint className="h-5 w-5 text-[#d99a2b]" strokeWidth={1.35} />
              )}
              <Fingerprint className="h-4 w-4 text-[#d99a2b]" strokeWidth={1.35} />
            </div>
            <span className="rounded-full bg-[#123126] px-2 py-1 text-[10px] font-bold uppercase text-[#a8ffd1]">
              KYC
            </span>
          </div>
          <div className="mt-4 h-1.5 w-3/4 overflow-hidden rounded-full bg-[#d99a2b]/18">
            <div className="h-full w-3/5 animate-[mockupFill_3.8s_ease-in-out_infinite] rounded-full bg-[#d99a2b]/50" />
          </div>
          <div className="mt-2 h-1.5 w-1/2 rounded-full bg-[#17202b]/14" />
          <div className="mt-4 grid grid-cols-3 gap-2">
            {["KYC", "KYB", "SSI"].map((label) => (
              <span
                key={label}
                className="rounded-full border border-[#d99a2b]/18 bg-[#fff6e4] px-2 py-1 text-center text-[9px] font-bold text-[#7a4d0d]"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (kind === "score") {
    return (
      <div className={`relative mt-7 ${heightClass} overflow-hidden rounded-[6px] border border-[#d99a2b]/24 bg-[#fffaf2] p-4`}>
        <div className="absolute inset-x-0 top-0 h-px animate-[mockupScan_5.2s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-[#36f5c5]/60 to-transparent" />
        <div className="grid h-full grid-cols-[1fr_76px] gap-4">
          <div className="rounded-[5px] border border-[#1b384c]/10 bg-white/72 p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {layer.logo ? (
                  <Image
                    src={layer.logo}
                    alt={layer.logoAlt ?? `${layer.name} logo`}
                    width={24}
                    height={24}
                    className="h-6 w-6 rounded-full object-cover"
                  />
                ) : null}
                <span className="text-[10px] font-bold uppercase text-[#7a4d0d]">
                  Signal set
                </span>
              </div>
              <span className="rounded-full bg-[#0e7c71]/10 px-2 py-1 text-[9px] font-bold uppercase text-[#0e7c71]">
                Live
              </span>
            </div>
            <div className="mt-4 flex h-12 items-end gap-1.5">
              {[34, 58, 44, 76, 64].map((height, index) => (
                <div key={`${height}-${index}`} className="flex-1 rounded-t bg-[#d99a2b]/12">
                  <div
                    className="animate-[mockupBar_3.8s_ease-in-out_infinite] rounded-t bg-gradient-to-t from-[#d99a2b] to-[#ffcc73]"
                    style={{
                      height: `${height}%`,
                      animationDelay: `${index * 0.18}s`,
                    }}
                  />
                  <span className="sr-only">Signal {index + 1}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute h-16 w-16 animate-[mockupPulse_3.2s_ease-in-out_infinite] rounded-full border border-[#36f5c5]/28 bg-[#36f5c5]/8" />
            <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-[#0e7c71]/35 bg-[#0e7c71]/10 text-[11px] font-bold text-[#0e7c71]">
              ZK
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (kind === "market") {
    return (
      <div className={`relative mt-7 ${heightClass} overflow-hidden rounded-[6px] border border-[#36f5c5]/30 bg-[#06131f] p-4`}>
        <div className="absolute inset-y-0 left-0 w-px animate-[mockupScanX_5.4s_ease-in-out_infinite] bg-gradient-to-b from-transparent via-[#36f5c5]/80 to-transparent" />
        <div className="grid h-full grid-cols-[0.42fr_1fr] gap-3">
          <div className="space-y-2">
            <div className="h-6 rounded-[4px] bg-white/9" />
            <div className="h-6 rounded-[4px] bg-[#36f5c5]/18" />
            <div className="h-6 rounded-[4px] bg-white/9" />
            {featured ? <div className="h-6 rounded-[4px] bg-[#f6b84b]/18" /> : null}
          </div>
          <div className="rounded-[5px] border border-[#36f5c5]/25 bg-white/[0.055] p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {layer.logo ? (
                  <Image
                    src={layer.logo}
                    alt={layer.logoAlt ?? `${layer.name} logo`}
                    width={22}
                    height={22}
                    className="h-5 w-5 object-contain opacity-90"
                  />
                ) : (
                  <Coins className="h-5 w-5 text-[#f6b84b]" strokeWidth={1.4} />
                )}
                <Coins className="h-4 w-4 text-[#f6b84b]" strokeWidth={1.4} />
              </div>
              <CircleCheck className="h-4 w-4 text-[#72ffe0]" strokeWidth={1.7} />
            </div>
            <div className="mt-4 h-1.5 w-2/3 rounded-full bg-white/18" />
            <div className="mt-2 h-1.5 w-1/2 rounded-full bg-[#36f5c5]/28" />
            <div className="mt-5 flex gap-2">
              <span className="h-6 flex-1 rounded-full border border-[#36f5c5]/20 bg-[#36f5c5]/10" />
              <span className="h-6 flex-1 rounded-full border border-[#f6b84b]/20 bg-[#f6b84b]/10" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative mt-7 ${heightClass} overflow-hidden rounded-[6px] border border-[#d99a2b]/24 bg-[#fffaf2] p-4`}>
      <div className="absolute inset-x-0 bottom-0 h-px animate-[mockupScan_4.6s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-[#d99a2b]/70 to-transparent" />
      <div className="relative h-full rounded-[4px] border border-[#d99a2b]/30 bg-white p-3">
        {layer.logo ? (
          <Image
            src={layer.logo}
            alt={layer.logoAlt ?? `${layer.name} logo`}
            width={26}
            height={26}
            className="h-7 w-7 object-contain"
          />
        ) : (
          <FileText className="h-6 w-6 text-[#d99a2b]" strokeWidth={1.35} />
        )}
        <div className="absolute right-3 top-3 rounded-full border border-[#d99a2b]/36 px-2 py-1 text-[10px] font-bold text-[#d99a2b]">
          CIP-113
        </div>
        <div className="mt-5 h-1.5 w-4/5 overflow-hidden rounded-full bg-[#17202b]/14">
          <div className="h-full w-2/3 animate-[mockupFill_4.4s_ease-in-out_infinite] rounded-full bg-[#d99a2b]/42" />
        </div>
        <div className="mt-2 h-1.5 w-3/5 rounded-full bg-[#17202b]/14" />
        <div className="mt-3 h-px bg-gradient-to-r from-[#d99a2b] to-transparent" />
        <div className="mt-3 grid grid-cols-2 gap-2">
          <span className="rounded-full border border-[#d99a2b]/18 bg-[#fff6e4] px-2 py-1 text-[9px] font-bold text-[#7a4d0d]">
            Holder rule
          </span>
          <span className="rounded-full border border-[#0e7c71]/18 bg-[#0e7c71]/8 px-2 py-1 text-[9px] font-bold text-[#0e7c71]">
            Transfer gate
          </span>
        </div>
      </div>
    </div>
  );
}

function SundialPartnership() {
  const sundialBullets = [
    "Bitcoin liquidity",
    "Base infrastructure",
    "Bitcoin-backed lending foundation",
    "Liquidity coordination",
  ];

  const auroraBullets = [
    "Identity and KYC / KYB credentials",
    "Credit signals and borrower inputs",
    "Loan discovery and filtering",
    "Tokenized credit issuance",
  ];

  return (
    <section
      id="partnership"
      className="bg-[#fffaf2] px-5 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionLabel>Built in Collaboration</SectionLabel>
            <h2 className="mt-4 text-[40px] font-normal leading-[1.05] text-[#101823] sm:text-[56px]">
              Powered by Sundial.
              <br />
              <span className="text-[#d99a2b]">Realized through Sundown.</span>
            </h2>
            <p className="mt-7 max-w-[610px] text-[16px] leading-8 text-[#17202b]/72">
              Aurora is not competing with Sundial. It extends Sundial&apos;s
              Bitcoin liquidity infrastructure with the credit market layers
              institutions need.
            </p>
            <p className="mt-5 max-w-[610px] text-[16px] font-semibold leading-8 text-[#101823]">
              Liquidity from Sundial. Markets through Sundown. Infrastructure
              by Aurora.
            </p>
            <div className="mt-7">
              <SecondaryButton href="#docs">Read Partnership</SecondaryButton>
            </div>
          </div>

          <div className="rounded-[8px] border border-[#1b384c]/14 bg-white p-5 shadow-[0_24px_90px_rgba(33,42,50,0.08)]">
            <PartnershipDiagram />
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <PartnerColumn
                title="Sundial"
                bullets={sundialBullets}
                icon={Sun}
                logo="/brand/sundial.png"
                logoAlt="Sundial logo"
              />
              <PartnerColumn
                title="Aurora"
                bullets={auroraBullets}
                icon={Sparkles}
                logo="/brand/aurora-logo-sky.png"
                logoAlt="Aurora logo"
              />
            </div>
            <p className="mt-6 rounded-[6px] border border-[#d99a2b]/22 bg-[#fff6e4] p-4 text-[14px] leading-7 text-[#17202b]/72">
              Together, Sundial and Aurora enable Bitcoin-backed lending to
              move from collateral-only borrowing into verified, discoverable,
              policy-aware institutional credit markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnershipDiagram() {
  const nodes = [
    ["Sundial", "BTC liquidity"],
    ["Sundown", "Market layer"],
    ["Aurora Credit Layers", "Identity, credit, issuance"],
  ];

  return (
    <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1.2fr] md:items-center">
      {nodes.map(([title, copy], index) => (
        <div key={title} className="contents">
          <div className="rounded-[8px] border border-[#1b384c]/12 bg-[#fffaf2] p-4 text-center">
            <p className="text-[13px] font-bold uppercase text-[#101823]">{title}</p>
            <p className="mt-1 text-[12px] text-[#17202b]/58">{copy}</p>
          </div>
          {index < nodes.length - 1 ? (
            <ArrowRight
              className="mx-auto hidden h-5 w-5 text-[#d99a2b] md:block"
              strokeWidth={1.7}
            />
          ) : null}
        </div>
      ))}
    </div>
  );
}

function PartnerColumn({
  title,
  bullets,
  icon: Icon,
  logo,
  logoAlt,
}: {
  title: string;
  bullets: string[];
  icon: IconType;
  logo?: string;
  logoAlt?: string;
}) {
  return (
    <div className="rounded-[8px] border border-[#1b384c]/12 bg-[#fffdf8] p-5">
      <div className="flex items-center gap-3">
        <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-[#d99a2b]/28 bg-[#f6b84b]/10">
          {logo ? (
            <Image
              src={logo}
              alt={logoAlt ?? `${title} logo`}
              width={40}
              height={40}
              className="h-full w-full object-cover"
            />
          ) : (
            <Icon className="h-5 w-5 text-[#d99a2b]" strokeWidth={1.45} />
          )}
        </div>
        <h3 className="text-[20px] font-semibold text-[#101823]">{title}</h3>
      </div>
      <ul className="mt-5 space-y-3 text-[14px] leading-6 text-[#17202b]/70">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3">
            <CircleCheck
              className="mt-1 h-4 w-4 flex-none text-[#0e7c71]"
              strokeWidth={1.7}
            />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BuiltWithSundialPanel() {
  const rails = [
    {
      icon: Sun,
      label: "Bitcoin-backed lending infrastructure",
    },
    {
      icon: BadgeCheck,
      label: "Identity & KYC with ZK proofs",
    },
    {
      icon: Filter,
      label: "Loan discovery and indexer",
    },
    {
      icon: Blocks,
      label: "Tokenization and bond rails",
    },
  ];

  return (
    <section className="bg-[#fffaf2] px-5 pb-24 sm:px-8 lg:px-12">
      <div className="relative mx-auto max-w-[1180px] overflow-hidden rounded-[8px] border border-white/12 bg-[#020711] p-6 text-[#fffaf2] shadow-[0_28px_100px_rgba(2,7,17,0.24)] sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.05fr_0.72fr] lg:items-center">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-[26px] font-semibold leading-none text-[#fffaf2]">
                Built with
              </h2>
              <span className="inline-flex items-center gap-3">
                <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-[#f97316]">
                  <Image
                    src="/brand/sundial.png"
                    alt="Sundial logo"
                    width={30}
                    height={30}
                    className="h-7 w-7 object-contain"
                  />
                </span>
                <span className="text-[18px] font-bold uppercase tracking-[0.34em] text-[#fffaf2]">
                  Sundial
                </span>
              </span>
            </div>
            <p className="mt-7 max-w-[430px] text-[14px] leading-7 text-[#fffaf2]/72">
              Aurora is the identity, discovery, and tokenization layer
              integrated with Sundial&apos;s Bitcoin-backed lending
              infrastructure.
            </p>
            <p className="mt-5 max-w-[430px] text-[14px] leading-7 text-[#fffaf2]/72">
              Together, we enable verified participants to access programmable
              BTC credit markets without rebuilding core lending rails.
            </p>
            <a
              href="#docs"
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-[6px] bg-gradient-to-b from-[#ffe3a4] via-[#ffc95a] to-[#d99a2b] px-6 text-[12px] font-bold uppercase text-[#130b02] shadow-[0_18px_50px_rgba(246,184,75,0.22)] transition duration-200 hover:-translate-y-0.5 hover:from-[#fff0c9] hover:to-[#f6b84b]"
            >
              Read Partnership
              <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
            </a>
          </div>

          <SundialOrbitVisual />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {rails.map((rail) => (
              <div key={rail.label} className="grid grid-cols-[42px_1fr] gap-4">
                <div className="flex h-11 w-11 items-center justify-center text-[#d99a2b]">
                  <rail.icon className="h-8 w-8" strokeWidth={1.35} />
                </div>
                <p className="text-[14px] font-medium leading-6 text-[#fffaf2]/78">
                  {rail.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SundialOrbitVisual() {
  return (
    <div className="relative mx-auto flex h-[260px] w-full max-w-[430px] items-center justify-center">
      <div className="absolute inset-0 rounded-full border border-[#d99a2b]/13" />
      <div className="absolute inset-[11%] rounded-full border border-[#36f5c5]/13" />
      <div className="absolute inset-[22%] rounded-full border border-[#d99a2b]/16" />
      <div
        aria-hidden="true"
        className="absolute inset-[7%] animate-[mockupPulse_5.8s_ease-in-out_infinite] rounded-full"
        style={{
          background:
            "conic-gradient(from 30deg, transparent 0deg, rgba(54,245,197,0.16) 48deg, transparent 92deg, rgba(217,154,43,0.12) 180deg, transparent 260deg, rgba(54,245,197,0.12) 322deg, transparent 360deg)",
        }}
      />
      <div className="relative flex items-center gap-6">
        <PartnerLogoDisk label="Aurora" logo="/brand/aurora-logo-sky.png" />
        <span className="text-[24px] text-[#fffaf2]/72">x</span>
        <PartnerLogoDisk label="Sundial" logo="/brand/sundial.png" sundial />
      </div>
    </div>
  );
}

function PartnerLogoDisk({
  label,
  logo,
  sundial = false,
}: {
  label: string;
  logo: string;
  sundial?: boolean;
}) {
  return (
    <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-white/12 bg-[#06131f] shadow-[0_18px_60px_rgba(0,0,0,0.34)]">
      <div className="absolute inset-[-8px] rounded-full border border-[#36f5c5]/18" />
      {sundial ? (
        <div className="flex flex-col items-center gap-2">
          <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-[#f97316]">
            <Image
              src={logo}
              alt={`${label} logo`}
              width={44}
              height={44}
              className="h-10 w-10 object-contain"
            />
          </span>
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#fffaf2]">
            {label}
          </span>
        </div>
      ) : (
        <Image
          src={logo}
          alt={`${label} logo`}
          width={104}
          height={104}
          className="h-full w-full rounded-full object-cover"
        />
      )}
    </div>
  );
}

function BuiltForTrust() {
  const metrics = [
    { icon: ShieldCheck, value: "100%", label: "Self-custody aligned" },
    { icon: ScanLine, value: "0", label: "Repeated KYC loops" },
    { icon: Layers, value: "4", label: "Composable layers" },
    { icon: Zap, value: "<30s", label: "Instant market discovery" },
  ];

  return (
    <section
      id="use-cases"
      className="relative overflow-hidden bg-[#020711] px-5 py-24 text-[#fffaf2] sm:px-8 lg:px-12"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #020711 0%, #06131f 48%, #020711 100%), radial-gradient(ellipse at 76% 24%, rgba(54,245,197,0.13), transparent 42%)",
        }}
      />
      <div className="relative mx-auto max-w-[1180px]">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <SectionLabel tone="dark">Built for Trust</SectionLabel>
            <h2 className="mt-4 text-[40px] font-normal leading-[1.05] text-[#fffaf2] sm:text-[56px]">
              Trustless where possible.
              <br />
              <span className="text-[#f6b84b]">Compliant where required.</span>
            </h2>
          </div>
          <div className="max-w-[650px] text-[16px] leading-8 text-[#fffaf2]/72 lg:pt-11">
            <p>
              Aurora combines Cardano-native settlement, verifiable
              credentials, privacy-preserving credit signals, and programmable
              issuance to support institutional Bitcoin-backed lending.
            </p>
            <p className="mt-5 font-semibold text-[#fffaf2]">
              The goal is not to remove institutional requirements. The goal is
              to make them programmable, verifiable, and compatible with
              on-chain credit markets.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-[8px] border border-white/12 bg-white/12 md:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="bg-[#06131f]/90 px-6 py-7">
              <metric.icon className="h-8 w-8 text-[#f6b84b]" strokeWidth={1.35} />
              <div className="mt-5 font-serif text-[42px] font-normal leading-none text-[#fffaf2]">
                {metric.value}
              </div>
              <p className="mt-2 text-[13px] leading-5 text-[#fffaf2]/58">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BitcoinCreditCTA() {
  return (
    <section id="cta" className="bg-[#fffaf2] px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1180px] overflow-hidden rounded-[8px] border border-[#d99a2b]/34 shadow-[0_24px_90px_rgba(150,99,23,0.12)]">
        <div className="relative min-h-[250px] px-7 py-10 sm:px-10 lg:px-16">
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,250,242,0.96) 0%, rgba(255,215,139,0.72) 48%, rgba(217,154,43,0.58) 100%)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-32 bg-[#2d2215]/58"
            style={{
              clipPath:
                "polygon(0 70%, 16% 55%, 33% 69%, 50% 47%, 70% 62%, 88% 40%, 100% 54%, 100% 100%, 0 100%)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute bottom-14 right-[14%] h-24 w-24 rounded-full bg-[#fff7d6] shadow-[0_0_90px_rgba(255,208,116,0.88)]"
          />
          <div className="relative grid gap-8 lg:grid-cols-[0.9fr_0.86fr_0.54fr] lg:items-center">
            <h2 className="text-[36px] font-normal leading-[1.08] text-[#101823] sm:text-[50px]">
              Build the infrastructure for{" "}
              <span className="text-[#9d6717]">Bitcoin credit.</span>
            </h2>
            <p className="max-w-[460px] text-[15px] leading-7 text-[#101823]/76">
              Join institutions and developers building verified, discoverable,
              and compliant Bitcoin-backed lending markets on Cardano.
            </p>
            <PrimaryButton href="#footer-cta">Request Access</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="docs" className="bg-[#fffdf7] px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.42fr_0.58fr]">
        <div>
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-4 text-[38px] font-normal leading-[1.08] text-[#101823] sm:text-[52px]">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 max-w-[430px] border-l border-[#d99a2b]/48 pl-5 text-[15px] leading-7 text-[#17202b]/70">
            Aurora is infrastructure for verified, discoverable, tokenized
            Bitcoin-backed credit markets. It is not an L2, lender, broker, or
            replacement for Sundial.
          </p>
        </div>
        <div className="overflow-hidden rounded-[8px] border border-[#1b384c]/14 bg-white shadow-[0_20px_70px_rgba(33,42,50,0.06)]">
          {faqItems.map((item) => (
            <details
              key={item.q}
              className="group border-b border-[#1b384c]/10 last:border-b-0 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-6 px-5 py-5 text-left text-[16px] font-semibold text-[#101823] transition hover:text-[#d99a2b]">
                <span>{item.q}</span>
                <Plus
                  className="h-5 w-5 flex-none text-[#d99a2b] transition duration-200 group-open:rotate-45"
                  strokeWidth={1.7}
                />
              </summary>
              <div className="px-5 pb-6 pr-10 text-[14px] leading-7 text-[#17202b]/70">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FooterCTA() {
  return (
    <section id="footer-cta" className="bg-[#fffdf7] px-5 pb-16 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1180px] gap-6 rounded-[8px] border border-[#1b384c]/14 bg-[#fffaf2] p-6 shadow-[0_18px_60px_rgba(33,42,50,0.06)] lg:grid-cols-[0.78fr_1fr] lg:items-center">
        <div>
          <h2 className="text-[28px] font-normal leading-tight text-[#101823]">
            Ready to access institutional Bitcoin credit infrastructure?
          </h2>
          <p className="mt-2 text-[14px] text-[#17202b]/62">
            Explore the infrastructure for verified borrowers, discoverable loan
            opportunities, and programmable credit instruments.
          </p>
        </div>
        <form className="grid gap-3 sm:grid-cols-[1fr_auto]">
          <label className="sr-only" htmlFor="email">
            Email address
          </label>
          <input
            id="email"
            type="email"
            placeholder="your@email.com"
            className="min-h-12 rounded-full border border-[#1b384c]/18 bg-white px-5 text-[14px] text-[#101823] outline-none transition placeholder:text-[#17202b]/38 focus:border-[#d99a2b]"
          />
          <button
            type="submit"
            className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[#ffd98a] to-[#f3ae3d] px-6 text-[13px] font-bold uppercase text-[#130b02] shadow-[0_14px_40px_rgba(78,50,13,0.16)] transition duration-200 hover:-translate-y-0.5 hover:from-[#ffe7b3] hover:to-[#f6b84b]"
          >
            Request Access
            <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#1b384c]/10 bg-[#f8f3eb] px-5 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1180px] gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <AuroraWordmark href="#top" />
          <p className="mt-5 max-w-[360px] text-[14px] leading-7 text-[#17202b]/68">
            Aurora is layered credit market infrastructure for Bitcoin-backed
            lending, built on Cardano and extended through Sundial.
          </p>
          <p className="mt-8 text-[12px] text-[#17202b]/48">
            Copyright 2026 Aurora / Fairway. All rights reserved.
          </p>
        </div>
        <FooterCol
          title="Products"
          links={["Polaris Wallet", "Aamu Aurora", "Sundown", "Solstice Aurora", "Docs"]}
        />
        <FooterCol
          title="Company"
          links={["About", "Partnerships", "Contact", "Blog", "Careers"]}
        />
        <FooterCol
          title="Resources"
          links={["Documentation", "FAQ", "API", "Use Cases"]}
        />
        <FooterCol
          title="Legal"
          links={["Privacy", "Terms", "Compliance", "Disclosures"]}
        />
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="md:col-span-2">
      <h3 className="text-[12px] font-semibold uppercase text-[#17202b]/48">
        {title}
      </h3>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-[14px] text-[#17202b]/70 transition hover:text-[#d99a2b]"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PrimaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[#ffe3a4] via-[#ffc95a] to-[#d99a2b] px-7 text-[13px] font-bold uppercase text-[#130b02] shadow-[0_20px_70px_rgba(246,184,75,0.24)] transition duration-200 hover:-translate-y-0.5 hover:from-[#fff0c9] hover:to-[#f6b84b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f6b84b] sm:w-auto"
    >
      {children}
      <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
    </a>
  );
}

function SecondaryButton({
  href,
  children,
  tone = "light",
}: {
  href: string;
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <a
      href={href}
      className={[
        "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border px-7 text-[13px] font-bold uppercase transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 sm:w-auto",
        tone === "dark"
          ? "border-[#f6b84b]/62 bg-[#020711]/34 text-[#ffcc73] hover:border-[#ffcc73] hover:bg-[#f6b84b]/10 focus-visible:outline-[#ffcc73]"
          : "border-[#d99a2b]/42 bg-white text-[#101823] hover:border-[#d99a2b]/70 hover:bg-[#fff6e4] focus-visible:outline-[#d99a2b]",
      ].join(" ")}
    >
      {children}
      <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
    </a>
  );
}

function SectionLabel({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <p
      className={[
        "text-[12px] font-bold uppercase",
        tone === "dark" ? "text-[#ffcc73]" : "text-[#d99a2b]",
      ].join(" ")}
    >
      {children}
    </p>
  );
}
