import type { ComponentType, ReactNode } from "react";
import {
  Activity,
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
  Network,
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
  visual: "wallet" | "score" | "market" | "bond" | "aurora";
  chips: string[];
};

const stackLayers: StackLayer[] = [
  {
    number: "01",
    name: "Beam Wallet",
    role: "Identity layer",
    description: "Reusable identity and KYC credentials for verified participation.",
    icon: WalletCards,
    visual: "wallet",
    chips: ["Credential card", "KYC badge", "Verified participant"],
  },
  {
    number: "02",
    name: "Aurora Score",
    role: "Credit intelligence layer",
    description: "ZK-powered credit inputs from private and public data.",
    icon: BarChart3,
    visual: "score",
    chips: ["Risk signal", "ZK proof", "Public/private streams"],
  },
  {
    number: "03",
    name: "Sundown",
    role: "Marketplace layer",
    description: (
      <>
        Fairway &times; Sundial marketplace layer for discoverable on-chain loans.
      </>
    ),
    icon: Filter,
    visual: "market",
    chips: ["Loan discovery", "Lender filters", "Verified loan card"],
  },
  {
    number: "04",
    name: "Bond Minter",
    role: "Issuance layer",
    description: "Issue compliant tokenized loans and credit instruments.",
    icon: FileCheck2,
    visual: "bond",
    chips: ["Tokenized loan", "Bond certificate", "Eligible holder rule"],
  },
  {
    number: "05",
    name: "Aurora",
    role: "Unified credit market layer",
    description:
      "All layers combined into a programmable on-chain credit market.",
    icon: Network,
    visual: "aurora",
    chips: ["Full stack", "BTC collateral", "Tokenized credit"],
  },
];

const frameworkRows = [
  ["Identity", "Verified access"],
  ["Credit", "Risk inputs"],
  ["Markets", "Loan discovery"],
  ["Issuance", "Tokenized credit instruments"],
  ["Aurora", "Programmable credit market orchestration"],
];

const faqItems: { q: string; a: ReactNode }[] = [
  {
    q: "What is the Aurora Stack?",
    a: "The Aurora Stack combines Beam Wallet, Aurora Score, Sundown, Bond Minter, and Aurora into a programmable on-chain credit market for Bitcoin-backed capital markets.",
  },
  {
    q: "What is Beam Wallet?",
    a: "Beam Wallet provides reusable identity and KYC credentials for verified participation.",
  },
  {
    q: "What is Aurora Score?",
    a: "Aurora Score provides ZK-powered credit inputs from private and public data.",
  },
  {
    q: "What is Sundown?",
    a: (
      <>
        Sundown is the Fairway &times; Sundial marketplace layer for
        discoverable on-chain loans.
      </>
    ),
  },
  {
    q: "What is Bond Minter?",
    a: "Bond Minter issues compliant tokenized loans and credit instruments.",
  },
  {
    q: "What is Aurora?",
    a: "Aurora is the unified programmable on-chain credit market created by combining all stack layers.",
  },
  {
    q: "How does Aurora work with Sundial?",
    a: "Sundial provides Bitcoin-backed lending infrastructure. Aurora adds identity, discovery, tokenization, and market orchestration so verified participants can access programmable BTC credit markets.",
  },
];

export default function AuroraPage() {
  return (
    <div className="min-h-screen bg-[#fffaf0] text-[#07111b] font-sans antialiased">
      <Nav />
      <main>
        <Hero />
        <MarketStats />
        <FeatureCards />
        <ThesisLine />
        <LayeredCredit />
        <AuroraStack />
        <Framework />
        <BuiltForTrust />
        <Metrics />
        <BitcoinCreditCTA />
        <SundialPartnership />
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
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 text-[#fff8e7]">
      <div className="mx-auto flex max-w-[1320px] items-center justify-between">
        <AuroraWordmark href="#top" tone="light" />
        <nav className="hidden items-center gap-1 rounded-full border border-[#ffd27a]/18 bg-[#020611]/64 p-1 text-[12px] font-semibold uppercase text-[#fff8e7]/78 shadow-[0_18px_70px_rgba(0,0,0,0.3)] backdrop-blur-xl lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-5 py-3 transition hover:bg-[#ffd27a]/12 hover:text-[#ffd27a]"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#footer-cta"
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#f4b642]/75 bg-[#020611]/64 px-5 text-[12px] font-bold uppercase text-[#ffd27a] shadow-[0_18px_70px_rgba(0,0,0,0.3)] backdrop-blur-xl transition hover:bg-[#f4b642]/16"
        >
          Request Access
        </a>
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
        "flex items-center font-serif font-normal leading-none",
        compact ? "gap-[0.22em] text-[17px]" : "gap-[0.32em] text-[21px]",
        tone === "light" ? "text-[#ffd27a]" : "text-[#0a1421]",
      ].join(" ")}
    >
      {"AURORA".split("").map((letter, index) => (
        <span key={`${letter}-${index}`} aria-hidden="true">
          {letter}
        </span>
      ))}
    </span>
  );

  if (!href) {
    return content;
  }

  return (
    <a href={href} className="inline-flex items-center">
      {content}
    </a>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-screen overflow-hidden bg-[#020611] text-[#fff8e7]"
    >
      <HeroAtmosphere />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1320px] flex-col items-center justify-center px-5 pb-28 pt-32 text-center sm:px-8 lg:px-12">
        <div className="max-w-[850px]">
          <div className="mx-auto inline-flex rounded-full border border-[#ffd27a]/22 bg-[#020611]/46 px-5 py-2 text-[12px] font-bold uppercase text-[#ffd27a]/88 shadow-[0_14px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl">
            Aurora credit stack
          </div>
          <h1 className="mt-8 text-[38px] font-normal leading-[0.95] tracking-[-0.01em] text-[#fff8e7] drop-shadow-[0_12px_44px_rgba(0,0,0,0.42)] sm:text-[54px] lg:text-[76px]">
            <span className="block">Building</span>
            <span className="block text-[#ffbf48]">on-chain</span>
            <span className="block">credit markets</span>
            <span className="block">
              for <span className="text-[#ffbf48]">Bitcoin.</span>
            </span>
          </h1>
          {/* <p className="mx-auto mt-8 max-w-[560px] text-[15px] font-medium leading-7 text-[#fff8e7]/88">
            Aurora turns Bitcoin collateral into identity-aware, discoverable,
            tokenized credit markets.
          </p> */}
          <p className="mx-auto mt-4 max-w-[560px] text-[15px] leading-7 text-[#fff8e7]/72">
            Aurora turns Bitcoin collateral into verified, programmable credit markets built with Sundial on Cardano
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#stack"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[#ffe3a4] via-[#ffc95a] to-[#d68d19] px-7 text-[13px] font-bold uppercase text-[#130b02] shadow-[0_20px_70px_rgba(255,190,72,0.28)] transition hover:translate-y-[-1px] hover:from-[#fff0c9] hover:to-[#f4a51f]"
            >
              Explore Stack
              <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
            </a>
            <a
              href="#footer-cta"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#f4b642]/70 bg-[#020611]/34 px-7 text-[13px] font-bold uppercase text-[#ffd27a] backdrop-blur-md transition hover:border-[#ffd27a] hover:bg-[#f4b642]/10"
            >
              Request Access
            </a>
          </div>
        </div>
        <EcosystemStrip />
      </div>
    </section>
  );
}

function HeroAtmosphere() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster=""
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      >
        <source src="https://i.imgur.com/cwE2dJE.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-[1] bg-[#020611]/35" />
      <div
        className="absolute inset-0 z-[3]"
        style={{
          background:
            "linear-gradient(180deg, rgba(2,6,17,0.18) 0%, rgba(2,6,17,0.05) 42%, rgba(2,6,17,0.55) 100%), linear-gradient(90deg, rgba(2,6,17,0.32) 0%, rgba(2,6,17,0.04) 50%, rgba(2,6,17,0.24) 100%)",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 z-[8] h-40 bg-gradient-to-b from-transparent via-[#020611]/40 to-[#020611]" />
    </div>
  );
}

function CloudBank({
  className,
  soft = false,
}: {
  className: string;
  soft?: boolean;
}) {
  const puffs = [
    { left: "-6%", top: "48%", width: "42%", height: "34%" },
    { left: "10%", top: "28%", width: "50%", height: "42%" },
    { left: "30%", top: "42%", width: "48%", height: "36%" },
    { left: "48%", top: "24%", width: "50%", height: "44%" },
    { left: "68%", top: "44%", width: "44%", height: "34%" },
  ];

  return (
    <div className={`absolute z-[6] ${className}`}>
      {puffs.map((puff, index) => (
        <span
          key={index}
          className={[
            "absolute rounded-[50%]",
            soft ? "blur-[28px]" : "blur-[15px]",
          ].join(" ")}
          style={{
            left: puff.left,
            top: puff.top,
            width: puff.width,
            height: puff.height,
            background:
              "radial-gradient(ellipse at 42% 34%, rgba(255,250,232,0.66) 0%, rgba(194,181,151,0.48) 32%, rgba(71,78,82,0.36) 58%, transparent 78%)",
            boxShadow:
              "inset -34px -22px 44px rgba(2,6,17,0.5), inset 22px 12px 30px rgba(255,227,164,0.14)",
          }}
        />
      ))}
      <span
        className={["absolute inset-x-0 bottom-0 h-[44%]", soft ? "blur-[18px]" : "blur-[8px]"].join(" ")}
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(217,202,170,0.4) 38%, rgba(13,18,22,0.52) 100%)",
        }}
      />
    </div>
  );
}

function EcosystemStrip() {
  const items = [
    { icon: Sparkles, label: "Fairway" },
    { icon: Sun, label: "Sundial" },
    { icon: Activity, label: "Cardano" },
    { icon: CircleCheck, label: "Midnight" },
    { icon: ShieldCheck, label: "Veridian" },
    { icon: Blocks, label: "CIP-113" },
  ];

  return (
    <div className="mt-14 grid grid-cols-2 gap-y-6 border-y border-white/12 py-5 sm:grid-cols-3 lg:mt-40 lg:grid-cols-6">
      {items.map((item, index) => (
        <div
          key={item.label}
          className={[
            "flex items-center justify-center gap-3 px-4 text-[#fff8e7]",
            index > 0 ? "lg:border-l lg:border-white/16" : "",
          ].join(" ")}
        >
          <item.icon className="h-6 w-6 text-[#ffc95a]" strokeWidth={1.55} />
          <span className="text-[12px] font-bold uppercase">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

function MarketStats() {
  return (
    <section className="relative isolate overflow-hidden bg-[#020711] text-[#fff8e7]">
      {/* Blurred video continuation — extends the hero atmosphere */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full scale-[1.18] object-cover object-center"
          style={{ filter: "blur(36px) saturate(1.05)" }}
        >
          <source src="https://i.imgur.com/cwE2dJE.mp4" type="video/mp4" />
        </video>
        {/* Top fade — seamless join with hero bottom */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#020611] via-[#020611]/70 to-transparent" />
        {/* Tint over the blurred video */}
        <div className="absolute inset-0 bg-[#020611]/72" />
        {/* Subtle warm glow at top so it feels like the sun bled through */}
        <div
          className="absolute inset-x-0 top-0 h-1/2 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(255,191,72,0.18) 0%, transparent 60%)",
          }}
        />
        {/* Bottom fade into the next section */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-[#020611]/55 to-[#020611]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1320px] px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid overflow-hidden rounded-[2px] border border-[#f4b642]/22 bg-white/[0.04] shadow-[0_24px_110px_rgba(0,0,0,0.5)] backdrop-blur-2xl md:grid-cols-2">
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
    <div className="relative flex min-h-[230px] flex-col items-center justify-center border-b border-[#f4b642]/14 px-6 py-10 text-center last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
      <p className="text-[12px] font-semibold uppercase text-[#f4b642]">{label}</p>
      <div className="mt-3 text-[54px] font-normal leading-none text-[#ffc95a] sm:text-[68px]">
        {value}
      </div>
      <p className="mt-5 max-w-[360px] text-[14px] leading-6 text-[#fff8e7]/74">{copy}</p>
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
      copy: "Turn loans into programmable credit instruments designed for compliant and efficient ownership.",
    },
  ];

  return (
    <section className="bg-[#020711] px-5 pb-20 pt-8 text-[#fff8e7] sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1060px] gap-4 md:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.number}
            className="group border border-[#f4b642]/22 bg-[#07111b]/88 p-7 shadow-[0_24px_70px_rgba(0,0,0,0.28)] transition hover:-translate-y-1 hover:border-[#ffc95a]/75 hover:bg-[#091823]"
          >
            <div className="flex items-start justify-between">
              <span className="text-[15px] text-[#ffc95a]">{card.number}</span>
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#22d3ee]/38 bg-[#22d3ee]/8 transition group-hover:border-[#ffc95a]/55 group-hover:bg-[#ffc95a]/10">
                <card.icon className="h-6 w-6 text-[#22d3ee] transition group-hover:text-[#ffc95a]" strokeWidth={1.45} />
              </div>
            </div>
            <h2 className="mt-12 text-[21px] font-semibold leading-7 text-[#ffe1a3]">
              {card.title}
            </h2>
            <p className="mt-4 text-[14px] leading-6 text-[#fff8e7]/72">{card.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ThesisLine() {
  return (
    <section className="relative overflow-hidden bg-[#020711] px-5 pb-28 pt-4 text-center sm:px-8 lg:px-12">
      <p className="relative z-10 mx-auto max-w-[960px] text-[18px] leading-8 text-[#fff8e7]/88">
        Institutional <span className="text-[#ffc95a]">BTC</span>. Verified
        counterparties. <span className="text-[#ffc95a]">Programmable credit.</span>
      </p>
      <div
        aria-hidden="true"
        className="absolute bottom-[-80px] left-1/2 h-[160px] w-[150vw] -translate-x-1/2 rounded-[50%] border-t border-[#f4b642]/40 bg-[#fffaf0]"
      />
    </section>
  );
}

function LayeredCredit() {
  const layers = [
    { icon: WalletCards, label: "Beam Wallet", sub: "Verified identity" },
    { icon: BarChart3, label: "Aurora Score", sub: "Credit intelligence" },
    { icon: Filter, label: "Sundown", sub: "Loan discovery" },
    { icon: FileText, label: "Bond Minter", sub: "Bond issuance" },
    { icon: Network, label: "Aurora", sub: "Market orchestration" },
  ];

  return (
    <section id="how" className="bg-[#fffaf0] px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <SectionLabel>Layered On-Chain Credit</SectionLabel>
          <h2 className="mt-4 text-[40px] font-normal leading-[1.04] text-[#101823] sm:text-[54px]">
            Credit Without
            <br />
            Legacy <span className="text-[#d68d19]">Friction</span>
          </h2>
          <div className="mt-6 max-w-[520px] space-y-4 text-[15px] leading-7 text-[#17202b]/72">
            <p>
              Aurora combines multiple infrastructure layers into one credit
              market stack.
            </p>
            <p>
              Wallet identity. Credit intelligence. Loan discovery. Bond
              issuance. Market orchestration.
            </p>
            <p className="font-semibold text-[#101823]">
              Built modularly. Designed to scale.
            </p>
          </div>
        </div>
        <div className="grid items-start gap-3 sm:grid-cols-2 xl:grid-cols-5">
          {layers.map((layer) => (
            <div
              key={layer.label}
              className="border border-[#e4c37a]/45 bg-white/76 p-5 shadow-[0_18px_55px_rgba(176,116,26,0.07)]"
            >
              <layer.icon className="h-7 w-7 text-[#d68d19]" strokeWidth={1.45} />
              <h3 className="mt-5 text-[16px] font-semibold text-[#101823]">{layer.label}</h3>
              <p className="mt-2 text-[13px] leading-5 text-[#17202b]/62">{layer.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AuroraStack() {
  return (
    <section id="stack" className="relative overflow-hidden bg-[#fff6e4] px-5 py-20 sm:px-8 lg:px-12">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-80"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,250,240,0.96) 0%, rgba(255,246,228,0.98) 48%, rgba(255,255,255,0.94) 100%), radial-gradient(ellipse at 50% 0%, rgba(244,182,66,0.26), transparent 56%)",
        }}
      />
      <div className="relative mx-auto max-w-[1320px]">
        <div className="grid gap-8 lg:grid-cols-[0.62fr_1fr] lg:items-end">
          <div>
            <SectionLabel>Aurora Stack</SectionLabel>
            <h2 className="mt-4 max-w-[680px] text-[40px] font-normal leading-[1.04] text-[#101823] sm:text-[58px]">
              Five layers for programmable Bitcoin credit.
            </h2>
          </div>
          <p className="max-w-[640px] text-[16px] leading-7 text-[#17202b]/70 lg:justify-self-end">
            Aurora combines identity, credit intelligence, loan discovery,
            tokenized issuance, and market orchestration into one on-chain
            credit stack.
          </p>
        </div>

        <div className="relative mt-12">
          <div className="absolute left-[9%] right-[9%] top-[42px] hidden h-px bg-gradient-to-r from-transparent via-[#d68d19]/70 to-transparent lg:block" />
          <div className="grid gap-4 lg:grid-cols-5">
            {stackLayers.map((layer) => (
              <StackCard key={layer.number} layer={layer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StackCard({ layer }: { layer: StackLayer }) {
  return (
    <article className="group relative overflow-hidden border border-[#d6a23e]/42 bg-[#fffdf8]/88 p-5 shadow-[0_24px_80px_rgba(150,99,23,0.11)] transition hover:-translate-y-1 hover:border-[#d68d19]/80 hover:bg-white">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#d68d19] via-[#ffd27a] to-transparent" />
      <div className="flex items-start justify-between gap-4">
        <span className="text-[15px] font-semibold text-[#d68d19]">{layer.number}</span>
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d68d19]/45 bg-[#fff2d3] text-[#d68d19] transition group-hover:bg-[#d68d19] group-hover:text-white">
          <layer.icon className="h-6 w-6" strokeWidth={1.45} />
        </div>
      </div>
      <StackVisual kind={layer.visual} />
      <div className="mt-6 border-t border-[#d6a23e]/24 pt-5">
        <h3 className="text-[22px] font-semibold leading-7 text-[#101823]">{layer.name}</h3>
        <p className="mt-2 text-[12px] font-semibold uppercase text-[#d68d19]">
          {layer.role}
        </p>
        <p className="mt-4 min-h-[72px] text-[14px] leading-6 text-[#17202b]/70">
          {layer.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {layer.chips.map((chip) => (
            <span
              key={chip}
              className="border border-[#d6a23e]/28 bg-[#fff6e4] px-2.5 py-1 text-[11px] font-medium text-[#624313]"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function StackVisual({ kind }: { kind: StackLayer["visual"] }) {
  if (kind === "wallet") {
    return (
      <div className="mt-7 h-28 border border-[#d6a23e]/28 bg-gradient-to-br from-[#fffaf0] to-[#f4e4bd] p-4">
        <div className="h-full border border-[#d68d19]/38 bg-white/70 p-3">
          <div className="flex items-center justify-between">
            <Fingerprint className="h-5 w-5 text-[#d68d19]" strokeWidth={1.35} />
            <span className="bg-[#123126] px-2 py-1 text-[10px] font-bold uppercase text-[#a8ffd1]">
              KYC
            </span>
          </div>
          <div className="mt-4 h-1.5 w-3/4 bg-[#d68d19]/32" />
          <div className="mt-2 h-1.5 w-1/2 bg-[#17202b]/16" />
        </div>
      </div>
    );
  }

  if (kind === "score") {
    return (
      <div className="mt-7 h-28 border border-[#d6a23e]/28 bg-[#fffaf0] p-4">
        <div className="flex h-full items-end gap-2">
          {[34, 58, 44, 76, 64].map((height, index) => (
            <div key={height} className="flex-1 bg-[#d68d19]/18">
              <div
                className="bg-gradient-to-t from-[#d68d19] to-[#ffd27a]"
                style={{ height: `${height}%` }}
              />
              <span className="sr-only">Signal {index + 1}</span>
            </div>
          ))}
          <div className="ml-2 flex h-12 w-12 items-center justify-center rounded-full border border-[#0e7c71]/35 bg-[#0e7c71]/10 text-[11px] font-bold text-[#0e7c71]">
            ZK
          </div>
        </div>
      </div>
    );
  }

  if (kind === "market") {
    return (
      <div className="mt-7 h-28 border border-[#d6a23e]/28 bg-[#fffaf0] p-4">
        <div className="grid h-full grid-cols-[0.42fr_1fr] gap-3">
          <div className="space-y-2">
            <div className="h-5 bg-[#17202b]/10" />
            <div className="h-5 bg-[#d68d19]/22" />
            <div className="h-5 bg-[#17202b]/10" />
          </div>
          <div className="border border-[#d68d19]/35 bg-white p-3">
            <div className="flex items-center justify-between">
              <Coins className="h-5 w-5 text-[#d68d19]" strokeWidth={1.4} />
              <CircleCheck className="h-4 w-4 text-[#0e7c71]" strokeWidth={1.7} />
            </div>
            <div className="mt-4 h-1.5 w-2/3 bg-[#17202b]/14" />
            <div className="mt-2 h-1.5 w-1/2 bg-[#d68d19]/30" />
          </div>
        </div>
      </div>
    );
  }

  if (kind === "bond") {
    return (
      <div className="mt-7 h-28 border border-[#d6a23e]/28 bg-[#fffaf0] p-4">
        <div className="relative h-full border border-[#d68d19]/36 bg-white p-3">
          <FileText className="h-6 w-6 text-[#d68d19]" strokeWidth={1.35} />
          <div className="absolute right-3 top-3 rounded-full border border-[#d68d19]/40 px-2 py-1 text-[10px] font-bold text-[#d68d19]">
            RULE
          </div>
          <div className="mt-5 h-1.5 w-4/5 bg-[#17202b]/14" />
          <div className="mt-2 h-1.5 w-3/5 bg-[#17202b]/14" />
          <div className="mt-3 h-px bg-gradient-to-r from-[#d68d19] to-transparent" />
        </div>
      </div>
    );
  }

  return (
    <div className="mt-7 flex h-28 items-center justify-center border border-[#d6a23e]/28 bg-[#07111b] p-4">
      <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-[#ffd27a]/70 bg-[#030812] text-[#ffd27a] shadow-[0_0_45px_rgba(255,201,90,0.28)]">
        <AuroraWordmark tone="light" compact />
        <span className="absolute -left-8 top-1/2 h-px w-8 bg-[#ffd27a]/55" />
        <span className="absolute -right-8 top-1/2 h-px w-8 bg-[#ffd27a]/55" />
        <span className="absolute left-1/2 top-[-24px] h-6 w-px bg-[#ffd27a]/55" />
        <span className="absolute bottom-[-24px] left-1/2 h-6 w-px bg-[#ffd27a]/55" />
      </div>
    </div>
  );
}

function Framework() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-[32px] font-normal leading-tight text-[#101823] sm:text-[42px]">
              Aurora Capital Markets Framework
            </h2>
            <p className="mt-2 text-[14px] text-[#17202b]/62">
              Granular participation. Compliant by design.
            </p>
          </div>
          <div className="text-[12px] font-semibold uppercase text-[#d68d19]">
            Layered market map
          </div>
        </div>
        <div className="overflow-hidden border border-[#d6a23e]/34">
          <div className="grid grid-cols-[0.42fr_1fr] bg-[#101823] text-[12px] font-semibold uppercase text-[#ffd27a]">
            <div className="border-r border-white/12 px-5 py-4">Layer</div>
            <div className="px-5 py-4">Purpose</div>
          </div>
          {frameworkRows.map(([layer, purpose]) => (
            <div
              key={layer}
              className="grid grid-cols-[0.42fr_1fr] border-t border-[#d6a23e]/22 bg-[#fffaf0] text-[14px] text-[#17202b]"
            >
              <div className="border-r border-[#d6a23e]/22 px-5 py-5 font-semibold text-[#101823]">
                {layer}
              </div>
              <div className="px-5 py-5">{purpose}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BuiltForTrust() {
  return (
    <section id="use-cases" className="relative overflow-hidden bg-[#fff8eb] px-5 py-20 sm:px-8 lg:px-12">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 84% 36%, rgba(255,206,118,0.32), transparent 42%), linear-gradient(180deg, #fff8eb 0%, #fffdf7 100%)",
        }}
      />
      <div className="relative mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-2">
        <div>
          <SectionLabel>Built for Trust</SectionLabel>
          <h2 className="mt-4 text-[40px] font-normal leading-[1.05] text-[#101823] sm:text-[55px]">
            Open Today.
            <br />
            Institutional <span className="text-[#d68d19]">Tomorrow.</span>
          </h2>
        </div>
        <div className="max-w-[600px] text-[16px] leading-8 text-[#17202b]/76 lg:pt-11">
          <p>
            Aurora uses Cardano settlement, identity credentials, and
            zero-knowledge systems to bring trust and credit market clarity to
            on-chain lending.
          </p>
          <p className="mt-5 font-semibold text-[#101823]">
            We do not just move assets. We structure markets.
          </p>
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  const metrics = [
    { icon: ShieldCheck, value: "100%", label: "Self-custody aligned" },
    { icon: ScanLine, value: "0", label: "Repeated KYC loops" },
    { icon: Layers, value: "5", label: "Composable layers" },
    { icon: Zap, value: "<30s", label: "Instant market discovery" },
  ];

  return (
    <section className="bg-[#fffdf7] px-5 pb-20 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1180px] gap-px overflow-hidden border border-[#d6a23e]/24 bg-[#d6a23e]/20 md:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="flex items-center gap-5 bg-[#fffdf7] px-6 py-8">
            <metric.icon className="h-10 w-10 flex-none text-[#d68d19]" strokeWidth={1.35} />
            <div>
              <div className="text-[38px] font-normal leading-none text-[#101823]">{metric.value}</div>
              <p className="mt-2 text-[13px] leading-5 text-[#17202b]/68">{metric.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function BitcoinCreditCTA() {
  return (
    <section id="cta" className="bg-[#fffdf7] px-5 pb-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1180px] overflow-hidden border border-[#d6a23e]/45">
        <div className="relative min-h-[220px] px-7 py-10 sm:px-10 lg:px-16">
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,248,226,0.9) 0%, rgba(255,213,130,0.68) 48%, rgba(176,110,39,0.6) 100%)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-24 w-full bg-[#4d3824]/55"
            style={{ clipPath: "polygon(0 68%, 12% 48%, 24% 60%, 42% 38%, 58% 56%, 76% 31%, 100% 49%, 100% 100%, 0 100%)" }}
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-20 w-full bg-[#1b1712]/76"
            style={{ clipPath: "polygon(0 75%, 16% 60%, 33% 72%, 50% 50%, 70% 64%, 88% 42%, 100% 54%, 100% 100%, 0 100%)" }}
          />
          <div
            aria-hidden="true"
            className="absolute bottom-10 right-[18%] h-24 w-24 rounded-full bg-[#fff7d6] shadow-[0_0_80px_rgba(255,208,116,0.9)]"
          />
          <div className="relative grid gap-8 lg:grid-cols-[0.9fr_0.8fr_0.6fr] lg:items-center">
            <h2 className="text-[34px] font-normal leading-[1.1] text-[#101823] sm:text-[46px]">
              Build the Future of <span className="text-[#d68d19]">Bitcoin</span> Credit
            </h2>
            <p className="max-w-[420px] text-[15px] leading-7 text-[#101823]/76">
              Join institutions, lenders, and builders creating the next
              generation of on-chain credit markets.
            </p>
            <a
              href="#footer-cta"
              className="inline-flex min-h-12 items-center justify-center gap-2 justify-self-start bg-gradient-to-b from-[#ffd98a] to-[#f3ae3d] px-7 text-[13px] font-bold uppercase text-[#130b02] shadow-[0_14px_40px_rgba(78,50,13,0.22)] transition hover:translate-y-[-1px]"
            >
              Request Access
              <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SundialPartnership() {
  const bullets = [
    { icon: Sun, label: "Bitcoin-backed", sub: "lending infrastructure" },
    { icon: BadgeCheck, label: "Identity and KYC", sub: "with ZK proofs" },
    { icon: Filter, label: "Loan discovery", sub: "and indexer" },
    { icon: Blocks, label: "Tokenization", sub: "and bond rails" },
  ];

  return (
    <section id="partnership" className="bg-[#fffaf0] px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1180px] gap-10 border-y border-[#d6a23e]/30 py-12 lg:grid-cols-[0.9fr_0.95fr_0.7fr] lg:items-center">
        <div>
          <div className="flex items-center gap-4">
            <span className="text-[30px] font-normal text-[#101823]">Built with</span>
            <span className="inline-flex items-center gap-2 text-[18px] font-bold uppercase text-[#101823]">
              <Sun className="h-7 w-7 text-[#f4a51f]" strokeWidth={1.55} />
              Sundial
            </span>
          </div>
          <p className="mt-7 max-w-[500px] text-[16px] leading-8 text-[#17202b]/76">
            Aurora is the identity, discovery, and tokenization layer integrated
            with Sundial&apos;s Bitcoin-backed lending infrastructure.
          </p>
          <p className="mt-5 max-w-[500px] text-[15px] leading-7 text-[#17202b]/68">
            Sundown remains the Fairway &times; Sundial marketplace layer,
            enabling verified participants to access programmable BTC credit
            markets without rebuilding core lending rails.
          </p>
          <a
            href="#docs"
            className="mt-7 inline-flex min-h-11 items-center justify-center gap-2 border border-[#d6a23e]/55 bg-[#fff2d3] px-5 text-[12px] font-bold uppercase text-[#101823] transition hover:bg-[#ffe3a4]"
          >
            Read Partnership
            <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
          </a>
        </div>
        <div className="flex items-center justify-center">
          <PartnershipRings />
        </div>
        <div className="space-y-5">
          {bullets.map((bullet) => (
            <div key={bullet.label} className="flex gap-4">
              <div className="flex h-11 w-11 flex-none items-center justify-center border border-[#d6a23e]/36 bg-white">
                <bullet.icon className="h-5 w-5 text-[#d68d19]" strokeWidth={1.45} />
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-[#101823]">{bullet.label}</h3>
                <p className="text-[13px] leading-5 text-[#17202b]/62">{bullet.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnershipRings() {
  return (
    <div className="relative flex h-[270px] w-full max-w-[430px] items-center justify-center">
      <div className="absolute inset-0 rounded-full border border-[#d6a23e]/18" />
      <div className="absolute inset-[10%] rounded-full border border-[#d6a23e]/22" />
      <div className="absolute inset-[20%] rounded-full border border-[#d6a23e]/26" />
      <div className="relative flex items-center gap-5">
        <BrandDisk label="Aurora" type="aurora" />
        <span className="text-[34px] text-[#101823]/72">&times;</span>
        <BrandDisk label="Sundial" type="sundial" />
      </div>
    </div>
  );
}

function BrandDisk({ label, type }: { label: string; type: "aurora" | "sundial" }) {
  return (
    <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#05070b] text-center shadow-[0_20px_60px_rgba(0,0,0,0.18)] ring-1 ring-[#d6a23e]/45">
      {type === "aurora" ? (
        <div>
          <AuroraWordmark tone="light" compact />
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2">
          <Sun className="h-8 w-8 text-[#f4a51f]" strokeWidth={1.6} />
          <span className="text-[12px] font-bold uppercase text-[#fff8e7]">{label}</span>
        </div>
      )}
    </div>
  );
}

function FAQ() {
  return (
    <section id="docs" className="bg-[#fffdf7] px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.45fr_0.55fr]">
        <div>
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-4 text-[38px] font-normal leading-[1.08] text-[#101823] sm:text-[50px]">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 max-w-[430px] border-l border-[#d6a23e]/50 pl-5 text-[15px] leading-7 text-[#17202b]/70">
            Aurora extends Sundial&apos;s lending infrastructure with identity,
            credit inputs, discovery, issuance, and programmable market
            orchestration.
          </p>
        </div>
        <div className="border-t border-[#d6a23e]/28">
          {faqItems.map((item) => (
            <details
              key={item.q}
              className="group border-b border-[#d6a23e]/28 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-left text-[16px] font-semibold text-[#101823] transition hover:text-[#d68d19]">
                <span>{item.q}</span>
                <Plus className="h-5 w-5 flex-none text-[#d68d19] transition group-open:rotate-45" strokeWidth={1.7} />
              </summary>
              <div className="pb-6 pr-10 text-[14px] leading-7 text-[#17202b]/70">
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
      <div className="mx-auto grid max-w-[1180px] gap-6 border-t border-[#d6a23e]/28 pt-10 lg:grid-cols-[0.8fr_1fr] lg:items-center">
        <div>
          <h2 className="text-[27px] font-normal leading-tight text-[#101823]">
            Ready to unlock Bitcoin-backed credit markets?
          </h2>
          <p className="mt-2 text-[14px] text-[#17202b]/62">Speak with our team.</p>
        </div>
        <form className="grid gap-3 sm:grid-cols-[1fr_auto]">
          <label className="sr-only" htmlFor="email">
            Email address
          </label>
          <input
            id="email"
            type="email"
            placeholder="your@email.com"
            className="min-h-12 border border-[#d6a23e]/32 bg-white px-4 text-[14px] text-[#101823] outline-none transition placeholder:text-[#17202b]/38 focus:border-[#d68d19]"
          />
          <button
            type="submit"
            className="inline-flex min-h-12 items-center justify-center gap-2 bg-gradient-to-b from-[#ffd98a] to-[#f3ae3d] px-6 text-[13px] font-bold uppercase text-[#130b02] transition hover:translate-y-[-1px]"
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
    <footer className="border-t border-[#d6a23e]/28 bg-[#fffaf0] px-5 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1180px] gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <AuroraWordmark href="#top" />
          <p className="mt-5 max-w-[340px] text-[14px] leading-7 text-[#17202b]/68">
            The identity, credit, and bond layer for Bitcoin-backed credit
            markets. Built with Sundial. Secured by Cardano.
          </p>
          <p className="mt-8 text-[12px] text-[#17202b]/48">
            Copyright 2026 Fairway Oy. All rights reserved.
          </p>
        </div>
        <FooterCol
          title="Products"
          links={["Beam Wallet", "Aurora Score", "Sundown", "Bond Minter", "Docs"]}
        />
        <FooterCol title="Company" links={["About", "Partnership", "Blog", "Careers"]} />
        <FooterCol title="Resources" links={["Documentation", "FAQ", "Contact"]} />
        <FooterCol title="Legal" links={["Privacy", "Terms", "Compliance"]} />
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="md:col-span-2">
      <h3 className="text-[12px] font-semibold uppercase text-[#17202b]/48">{title}</h3>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="text-[14px] text-[#17202b]/70 transition hover:text-[#d68d19]">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-[12px] font-bold uppercase text-[#d68d19]">
      {children}
    </p>
  );
}
