import type { ComponentType, CSSProperties, ReactNode } from "react";
import Link from "next/link";
import ScrollProgress from "./_components/ScrollProgress";
import InteractiveFilters from "./_components/InteractiveFilters";
import FlowDiagram from "./_components/FlowDiagram";
import {
  ArrowRight,
  ArrowDown,
  BadgeCheck,
  Blocks,
  Braces,
  Building2,
  CircleCheck,
  CircleDot,
  Coins,
  Database,
  FileCheck2,
  FileText,
  Filter,
  Fingerprint,
  Gauge,
  Globe,
  Hash,
  KeyRound,
  Landmark,
  Layers,
  LockKeyhole,
  MapPin,
  Menu,
  Plus,
  ScanLine,
  Search,
  Server,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Stamp,
  Sun,
  Target,
  Users,
  Workflow,
} from "lucide-react";

import type { Metadata } from "next";

type IconType = ComponentType<{
  className?: string;
  strokeWidth?: number;
  style?: CSSProperties;
}>;

const GOLD = "#C89B3C";
const GOLD_HOVER = "#B8892F";
const GOLD_SOFT = "#f6b84b";
const GOLD_LIGHT = "#ffd98a";
const GRAY_BODY = "#6F6F6F";
const INK = "#0B1620";
const PAGE_BG = "#fffaf2";

export const metadata: Metadata = {
  title: "Sundown - Verified discovery for P2P credit markets",
  description:
    "Sundown adds identity proofs, compliance indexing, and lender-side filtering to Cardano P2P lending infrastructure - built with Sundial, without rebuilding the lending rails.",
};

export default function SundownPage() {
  return (
    <div
      className="min-h-screen font-sans antialiased"
      style={{ background: PAGE_BG, color: INK }}
    >
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Clarifier />
        <Problem />
        <Solution />
        <Architecture />
        <Boundaries />
        <MetadataFlow />
        <LenderFiltering />
        <BorrowerExperience />
        <Pilot />
        <Reuse />
        <RiskBoundaries />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Nav                                                               */
/* ---------------------------------------------------------------- */

function Nav() {
  const links = [
    { href: "/#stack", label: "Stack" },
    { href: "/#partnership", label: "Partnerships" },
    { href: "/#how", label: "How It Works" },
    { href: "/#use-cases", label: "Use Cases" },
    { href: "/#docs", label: "Docs" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 text-[#fffaf2]">
      <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between rounded-[8px] border border-white/12 bg-[#020711]/58 px-4 py-3 shadow-[0_18px_70px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:px-5">
        <Link
          href="/"
          className="inline-flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffcc73]"
        >
          <span
            aria-label="Aurora"
            className="flex items-center bg-clip-text font-serif text-[21px] font-normal leading-none tracking-[0.24em] text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #C88A2D 0%, #E6B766 50%, #8A5A1F 100%)",
            }}
          >
            AURORA
          </span>
          <span className="ml-3 hidden border-l border-[#ffcc73]/30 pl-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#ffcc73]/82 sm:inline">
            / Sundown
          </span>
        </Link>

        <nav className="hidden items-center gap-1 text-[12px] font-semibold uppercase text-[#fffaf2]/72 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2.5 transition duration-200 hover:bg-white/7 hover:text-[#ffcc73] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffcc73]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#sundown-cta"
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
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-[6px] px-4 py-3 text-[12px] font-semibold uppercase text-[#fffaf2]/78 transition hover:bg-white/7 hover:text-[#ffcc73]"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="#sundown-cta"
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
/* Hero                                                              */
/* ---------------------------------------------------------------- */

function Hero() {
  const chips = [
    { icon: Sun, label: "Built with Sundial" },
    { icon: Fingerprint, label: "Identity proof metadata" },
    { icon: ScanLine, label: "Compliance indexer" },
    { icon: Filter, label: "Lender filtering" },
    { icon: Layers, label: "Reference frontend" },
  ];

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-[#020711] pb-24 pt-32 text-[#fffaf2] sm:pt-36 lg:pb-28 lg:pt-40"
    >
      {/* Atmosphere */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute -top-40 right-[-10%] h-[720px] w-[860px] rounded-full opacity-50 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at center, rgba(230,183,102,0.55) 0%, rgba(255,213,138,0.18) 40%, transparent 72%)",
          }}
        />
        <div
          className="absolute -bottom-40 left-[-12%] h-[640px] w-[760px] rounded-full opacity-32 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at center, rgba(27,56,76,0.32) 0%, rgba(42,174,155,0.10) 38%, transparent 72%)",
          }}
        />
        <div
          className="absolute inset-x-[-8%] top-[8%] h-[44%] opacity-25"
          style={{
            background:
              "linear-gradient(104deg, transparent 0%, rgba(54,245,197,0.10) 34%, rgba(114,255,224,0.18) 50%, rgba(246,184,75,0.10) 64%, transparent 80%)",
            filter: "blur(34px)",
          }}
        />
        {/* Faint grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1320px] grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:px-12">
        {/* Left column */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ffcc73]/30 bg-[#020711]/45 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ffcc73] backdrop-blur-xl">
            <span className="h-1 w-1 rounded-full bg-[#ffcc73] shadow-[0_0_8px_rgba(255,204,115,0.9)]" />
            Aurora Stack / Sundown
          </div>

          <h1 className="mt-7 max-w-[640px] font-serif text-[40px] font-normal leading-[1.04] tracking-[-0.02em] text-[#fffaf2] drop-shadow-[0_14px_42px_rgba(0,0,0,0.55)] sm:text-[54px] lg:text-[62px]">
            <span className="block">Sundown brings</span>
            <span
              className="block bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #f6b84b 0%, #ffcc73 52%, #d99a2b 100%)",
              }}
            >
              verified discovery
            </span>
            <span className="block">to P2P credit markets.</span>
          </h1>

          <p className="mt-6 max-w-[560px] text-[16px] leading-[1.7] text-[#fffaf2]/80">
            Built with Sundial, Sundown adds identity proofs, compliance
            indexing, and lender-side filtering to Cardano P2P lending
            infrastructure - without rebuilding the lending rails.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#architecture"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[#ffe3a4] via-[#ffc95a] to-[#d99a2b] px-7 text-[13px] font-bold uppercase text-[#130b02] shadow-[0_20px_70px_rgba(246,184,75,0.24)] transition duration-200 hover:-translate-y-0.5 hover:from-[#fff0c9] hover:to-[#f6b84b]"
            >
              View Architecture
              <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
            </a>
            <a
              href="#pilot"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#f6b84b]/62 bg-[#020711]/34 px-7 text-[13px] font-bold uppercase text-[#ffcc73] transition duration-200 hover:border-[#ffcc73] hover:bg-[#f6b84b]/10"
            >
              Explore Pilot
              <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
            </a>
          </div>

          <div className="mt-9 flex flex-wrap gap-2">
            {chips.map((chip) => (
              <span
                key={chip.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/14 bg-white/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#fffaf2]/82 backdrop-blur"
              >
                <chip.icon
                  className="h-3.5 w-3.5"
                  strokeWidth={1.6}
                  style={{ color: GOLD_LIGHT }}
                />
                {chip.label}
              </span>
            ))}
          </div>
        </div>

        {/* Right column - Hero dashboard mockup */}
        <HeroMockup />
      </div>
    </section>
  );
}

function HeroMockup() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-[16px] bg-gradient-to-br from-[#f6b84b]/12 via-transparent to-[#36f5c5]/8 blur-2xl" />
      <div className="relative overflow-hidden rounded-[12px] border border-white/14 bg-gradient-to-b from-[#0a1421]/92 to-[#020711]/96 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.55)] backdrop-blur-xl">
        {/* Toolbar */}
        <div className="flex items-center justify-between border-b border-white/8 pb-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
            <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
            <span className="h-2 w-2 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#fffaf2]/56">
              sundown.fairway / market
            </span>
          </div>
          <span className="rounded-full bg-[#36f5c5]/12 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#36f5c5]">
            indexer live
          </span>
        </div>

        {/* Body grid */}
        <div className="mt-4 grid grid-cols-[140px_1fr] gap-3">
          {/* Filter rail */}
          <div className="space-y-2">
            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#fffaf2]/46">
              Lender Filter
            </p>
            <div className="rounded-[6px] border border-[#ffcc73]/26 bg-[#ffcc73]/8 px-2 py-1.5">
              <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#ffcc73]">
                Verified only
              </p>
              <div className="mt-1 flex h-2 items-center">
                <span className="h-2 w-7 rounded-full bg-[#ffcc73]/30">
                  <span className="block h-2 w-3.5 translate-x-3.5 rounded-full bg-[#ffcc73] shadow-[0_0_10px_rgba(255,204,115,0.7)]" />
                </span>
              </div>
            </div>
            {[
              { label: "Issuer", value: "Veridian +2" },
              { label: "Proof", value: "KYC-ZK" },
              { label: "Region", value: "EU / US" },
              { label: "LTV", value: "≤ 65%" },
            ].map((row) => (
              <div
                key={row.label}
                className="rounded-[6px] border border-white/8 bg-white/3 px-2 py-1.5"
              >
                <p className="text-[8px] font-bold uppercase tracking-[0.14em] text-[#fffaf2]/42">
                  {row.label}
                </p>
                <p className="mt-0.5 text-[10px] font-semibold text-[#fffaf2]/86">
                  {row.value}
                </p>
              </div>
            ))}
          </div>

          {/* Loan card column */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#fffaf2]/46">
                Verified opportunities
              </p>
              <p className="text-[9px] font-semibold text-[#fffaf2]/56">
                3 of 412 indexed
              </p>
            </div>

            {/* Active loan card */}
            <div className="rounded-[8px] border border-[#ffcc73]/40 bg-gradient-to-b from-[#ffcc73]/8 to-transparent p-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#ffcc73]">
                  Loan Request #4291
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-[#36f5c5]/14 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.14em] text-[#36f5c5]">
                  <BadgeCheck className="h-2.5 w-2.5" strokeWidth={2.2} />
                  verified
                </span>
              </div>
              <div className="mt-2 grid grid-cols-3 gap-2 text-[10px]">
                <div>
                  <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-[#fffaf2]/46">
                    Amount
                  </p>
                  <p className="text-[12px] font-semibold text-[#fffaf2]">
                    10,000 ADA
                  </p>
                </div>
                <div>
                  <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-[#fffaf2]/46">
                    Collateral
                  </p>
                  <p className="text-[12px] font-semibold text-[#fffaf2]">
                    BTC / ADA
                  </p>
                </div>
                <div>
                  <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-[#fffaf2]/46">
                    Term
                  </p>
                  <p className="text-[12px] font-semibold text-[#fffaf2]">
                    6 mo
                  </p>
                </div>
              </div>
              <div className="mt-2 flex flex-wrap gap-1">
                <span className="inline-flex items-center gap-1 rounded-full bg-white/6 px-1.5 py-0.5 text-[8px] font-semibold text-[#fffaf2]/78">
                  <Fingerprint className="h-2.5 w-2.5" strokeWidth={1.8} />
                  KYC-ZK proof
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/6 px-1.5 py-0.5 text-[8px] font-semibold text-[#fffaf2]/78">
                  <MapPin className="h-2.5 w-2.5" strokeWidth={1.8} />
                  EU jurisdiction
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/6 px-1.5 py-0.5 text-[8px] font-semibold text-[#fffaf2]/78">
                  <Hash className="h-2.5 w-2.5" strokeWidth={1.8} />
                  meta v1
                </span>
              </div>
            </div>

            {/* Secondary loan rows */}
            {[
              { id: "#4287", amt: "4,200 ADA", proof: "KYB", status: "verified" },
              { id: "#4262", amt: "18,500 ADA", proof: "Accred", status: "verified" },
            ].map((row) => (
              <div
                key={row.id}
                className="flex items-center justify-between rounded-[6px] border border-white/8 bg-white/3 px-2.5 py-2"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#fffaf2]/76">
                    {row.id}
                  </span>
                  <span className="text-[10px] text-[#fffaf2]/56">{row.amt}</span>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-[#36f5c5]/12 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-[0.12em] text-[#36f5c5]">
                  <CircleCheck className="h-2.5 w-2.5" strokeWidth={2.2} />
                  {row.proof}
                </span>
              </div>
            ))}

            {/* Tx metadata badge */}
            <div className="mt-1 rounded-[6px] border border-dashed border-white/12 bg-[#020711]/40 px-2.5 py-2 font-mono">
              <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#fffaf2]/46">
                Cardano tx metadata
              </p>
              <p className="mt-1 text-[9px] leading-relaxed text-[#fffaf2]/68">
                <span className="text-[#36f5c5]">label</span>: 1967 ·{" "}
                <span className="text-[#ffcc73]">proof_type</span>: kyc_zk ·{" "}
                <span className="text-[#ffcc73]">issuer</span>: veridian
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* What Sundown is                                                   */
/* ---------------------------------------------------------------- */

function Clarifier() {
  const cards: { icon: IconType; title: string; copy: string }[] = [
    {
      icon: Search,
      title: "Credit-market discovery layer",
      copy: "Sundown surfaces compatible on-chain loan opportunities so lenders can browse and evaluate verified credit markets.",
    },
    {
      icon: ScanLine,
      title: "Compliance-aware indexer",
      copy: "Sundown parses loan metadata, verifies identity proofs, checks issuer status and expiration, and exposes filtered market views.",
    },
    {
      icon: SlidersHorizontal,
      title: "Lender filtering interface",
      copy: "Lenders can define accepted proof types, issuers, jurisdictions, and eligibility criteria before viewing opportunities.",
    },
    {
      icon: Fingerprint,
      title: "Identity-proof metadata standard",
      copy: "Borrowers can attach verifiable identity or eligibility proofs to loan requests without changing the base lending contracts.",
    },
    {
      icon: Layers,
      title: "Reference frontend for verified P2P lending",
      copy: "Sundown includes UI components for borrowers, lenders, proof display, loan discovery, and compliance-aware dashboards.",
    },
    {
      icon: Sun,
      title: "Fairway × Sundial partnership layer",
      copy: "Sundown connects Fairway's identity and verification capabilities with Sundial's Bitcoin-backed lending infrastructure.",
    },
  ];

  return (
    <Section id="what-it-is" tone="light">
      <SectionHeader
        eyebrow="What Sundown Is"
        title={
          <>
            A <em className="font-serif italic">verification and discovery</em>{" "}
            layer for P2P credit markets.
          </>
        }
        copy="Sundown is the Fairway × Sundial layer that makes Cardano P2P credit markets discoverable, filterable, and suitable for verified participation. It adds identity-proof metadata, compliance indexing, lender-side filtering, and reference frontend components around existing lending infrastructure."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, i) => (
          <article
            key={card.title}
            className="group relative overflow-hidden rounded-[12px] border border-[#1B384C]/12 bg-white p-7 shadow-[0_12px_44px_rgba(33,42,50,0.05)] transition duration-200 hover:-translate-y-1 hover:border-[#C89B3C]/45 hover:shadow-[0_22px_70px_rgba(200,155,60,0.12)]"
          >
            <span
              aria-hidden
              className="absolute inset-x-0 top-0 h-[2px]"
              style={{
                background: `linear-gradient(90deg, transparent 0%, ${GOLD} 30%, ${GOLD_HOVER} 70%, transparent 100%)`,
              }}
            />
            <div className="flex items-start justify-between">
              <span className="font-serif text-[14px] font-normal tracking-[0.06em]" style={{ color: GOLD }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className="flex h-11 w-11 items-center justify-center rounded-full transition duration-200 group-hover:bg-[#fff3d8]"
                style={{ background: "rgba(200,155,60,0.10)" }}
              >
                <card.icon className="h-5 w-5" strokeWidth={1.55} style={{ color: GOLD }} />
              </span>
            </div>
            <h3 className="mt-8 text-[19px] font-semibold leading-7 text-[#101823]">
              {card.title}
            </h3>
            <p className="mt-3 text-[14px] leading-6" style={{ color: GRAY_BODY }}>
              {card.copy}
            </p>
          </article>
        ))}
      </div>

      {/* Architecture note */}
      <div className="mt-12 rounded-[10px] border border-[#C89B3C]/26 bg-[#fffdf7] p-6 shadow-[0_10px_36px_rgba(200,155,60,0.08)] sm:p-7">
        <div className="flex items-start gap-4">
          <span
            className="flex h-10 w-10 flex-none items-center justify-center rounded-full"
            style={{ background: "rgba(200,155,60,0.14)" }}
          >
            <Layers className="h-5 w-5" strokeWidth={1.6} style={{ color: GOLD }} />
          </span>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: GOLD_HOVER }}>
              Architecture note
            </p>
            <p className="mt-2 text-[14px] leading-7 text-[#101823]">
              Sundown works around compatible P2P lending infrastructure. The
              base lending rails handle loan requests, collateral, repayment,
              and default logic. Sundown adds discovery, indexing, proof
              verification, and lender filtering around that market.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- */
/* Problem                                                           */
/* ---------------------------------------------------------------- */

function Problem() {
  const cards = [
    {
      icon: Users,
      title: "Pseudonymous history is useful, but incomplete",
      copy: "On-chain repayment behavior tells part of the story. Institutional underwriting needs more than a wallet's track record.",
    },
    {
      icon: Building2,
      title: "Institutions cannot lend into fully anonymous markets",
      copy: "Funds, banks, and regulated allocators face mandates that disqualify pseudonymous counterparties before any credit analysis begins.",
    },
    {
      icon: ShieldCheck,
      title: "KYC/AML checks cannot be optional for regulated capital",
      copy: "Compliance is not a feature flag for these participants. It is a precondition for deploying balance-sheet capital.",
    },
    {
      icon: Layers,
      title: "Compliance belongs at the edge, not in every contract",
      copy: "Embedding KYC inside base validators fragments liquidity and breaks open markets. The verification has to live alongside, not inside.",
    },
  ];

  return (
    <Section id="problem" tone="bone">
      <SectionHeader
        eyebrow="The Problem"
        title="The identity gap in P2P credit."
        copy="P2P lending creates direct borrower-lender relationships and on-chain credit history. But pseudonymous reputation alone is not enough for institutional lenders, regulated funds, and professional capital allocators."
      />

      {/* Gap diagram */}
      <div className="mt-12 overflow-hidden rounded-[12px] border border-[#1B384C]/12 bg-white p-8 shadow-[0_18px_60px_rgba(33,42,50,0.06)]">
        <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
          <DiagramNode
            tone="dark"
            icon={Globe}
            label="Permissionless P2P market"
            sub="Open access · pseudonymous · on-chain"
          />
          <div className="relative flex items-center justify-center">
            <div className="rounded-full border border-dashed border-[#C89B3C]/60 bg-[#fff8e8] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: GOLD_HOVER }}>
              identity gap
            </div>
          </div>
          <DiagramNode
            tone="muted"
            icon={Landmark}
            label="Institutional capital blocked"
            sub="Mandates · KYC · jurisdiction · eligibility"
          />
        </div>
        <div className="mt-6 grid grid-cols-3 items-center text-center">
          <div className="h-px bg-gradient-to-r from-transparent via-[#1B384C]/24 to-[#C89B3C]/40" />
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C89B3C]">
            Sundown closes this gap
          </p>
          <div className="h-px bg-gradient-to-l from-transparent via-[#1B384C]/24 to-[#C89B3C]/40" />
        </div>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {cards.map((c) => (
          <article
            key={c.title}
            className="rounded-[10px] border border-[#1B384C]/12 bg-white p-6 shadow-[0_12px_44px_rgba(33,42,50,0.05)] transition hover:-translate-y-0.5 hover:border-[#C89B3C]/40"
          >
            <span
              className="flex h-10 w-10 items-center justify-center rounded-full"
              style={{ background: "rgba(200,155,60,0.10)" }}
            >
              <c.icon
                className="h-5 w-5"
                strokeWidth={1.55}
                style={{ color: GOLD }}
              />
            </span>
            <h3 className="mt-4 text-[18px] font-semibold leading-7 text-[#101823]">
              {c.title}
            </h3>
            <p className="mt-2 text-[14px] leading-6" style={{ color: GRAY_BODY }}>
              {c.copy}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- */
/* Solution - flow chart                                             */
/* ---------------------------------------------------------------- */

function Solution() {
  return (
    <Section id="solution" tone="paper">
      <SectionHeader
        eyebrow="The Approach"
        title="Identity at the edge. Liquidity stays shared."
        copy="Sundown adds verification and filtering around existing P2P lending infrastructure without changing the base contracts. Lenders who need compliance filter for valid proofs. Lenders who do not still access the full unfiltered market."
      />
      <div className="reveal-up">
        <FlowDiagram />
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- */
/* Architecture                                                      */
/* ---------------------------------------------------------------- */

function Architecture() {
  type Layer = {
    n: string;
    name: string;
    provider: string;
    handles: string[];
    role: string;
    icon: IconType;
    tag: "On-chain" | "Off-chain" | "External" | "Interface";
    accent: string;
    accentBg: string;
    featured?: boolean;
  };

  const layers: Layer[] = [
    {
      n: "01",
      name: "Base P2P Lending Infrastructure",
      provider: "Cardano · Compatible P2P lending contracts · Sundial stack",
      handles: [
        "Loan request publication",
        "Collateral management",
        "Repayment logic",
        "Default handling",
      ],
      role: "Sundown consumes, not builds.",
      icon: Blocks,
      tag: "On-chain",
      accent: "#1B384C",
      accentBg: "rgba(27,56,76,0.08)",
    },
    {
      n: "02",
      name: "Sundown Identity Extension Layer",
      provider: "Fairway × Sundial",
      handles: [
        "Identity proof metadata standard",
        "Compliance indexer",
        "Lender filtering interface",
        "Reference frontend components",
      ],
      role: "Sundown builds identity, discovery, indexing, and filtering.",
      icon: Layers,
      tag: "Interface",
      accent: GOLD,
      accentBg: "rgba(200,155,60,0.12)",
      featured: true,
    },
    {
      n: "03",
      name: "Identity & Verification Providers",
      provider: "Fairway · Beam Wallet · Veridian-aligned credentials · Issuers",
      handles: [
        "KYC credentials",
        "Jurisdiction checks",
        "Legal entity credentials",
        "Role credentials & ZK proofs",
      ],
      role: "Sundown integrates and verifies, not stores raw data.",
      icon: KeyRound,
      tag: "External",
      accent: "#5C8FB0",
      accentBg: "rgba(92,143,176,0.10)",
    },
  ];

  return (
    <Section id="architecture" tone="light">
      <SectionHeader
        eyebrow="Architecture"
        title="How Sundown fits into the lending stack."
        copy="Three clearly bounded layers. Sundown is the middle one - it does not own the base market and it does not own credential issuance."
      />

      <div className="mt-12 space-y-4">
        {layers.map((layer) => (
          <article
            key={layer.n}
            className={[
              "relative grid gap-6 rounded-[12px] border bg-white p-6 shadow-[0_14px_44px_rgba(33,42,50,0.05)] transition lg:grid-cols-[200px_1fr_1fr] lg:p-8",
              layer.featured
                ? "border-[#C89B3C]/45 shadow-[0_22px_70px_rgba(200,155,60,0.12)]"
                : "border-[#1B384C]/12",
            ].join(" ")}
          >
            {layer.featured ? (
              <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-[#fff3d8] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: GOLD_HOVER }}>
                <Sparkles className="h-3 w-3" strokeWidth={1.8} />
                Sundown
              </span>
            ) : null}

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-[8px]"
                  style={{ background: layer.accentBg }}
                >
                  <layer.icon
                    className="h-6 w-6"
                    strokeWidth={1.55}
                    style={{ color: layer.accent }}
                  />
                </span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: layer.accent }}>
                    Layer {layer.n}
                  </p>
                  <span
                    className="mt-1 inline-flex items-center rounded-full border px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.18em]"
                    style={{
                      borderColor: `${layer.accent}40`,
                      color: layer.accent,
                      background: layer.accentBg,
                    }}
                  >
                    {layer.tag}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-[24px] font-normal leading-tight text-[#101823]">
                {layer.name}
              </h3>
              <p className="mt-2 text-[13px] font-semibold uppercase tracking-[0.08em]" style={{ color: GRAY_BODY }}>
                Provider · {layer.provider}
              </p>
              <p className="mt-4 text-[13px] font-semibold leading-6" style={{ color: GOLD_HOVER }}>
                {layer.role}
              </p>
            </div>

            <ul className="space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: GRAY_BODY }}>
                Handles
              </p>
              {layer.handles.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-2 rounded-[6px] border border-[#1B384C]/10 bg-[#fffdf7] px-3 py-2 text-[13px] text-[#101823]"
                >
                  <CircleDot
                    className="mt-1 h-3 w-3 flex-none"
                    strokeWidth={2}
                    style={{ color: layer.accent }}
                  />
                  {h}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- */
/* Boundaries - on-chain / off-chain / external                      */
/* ---------------------------------------------------------------- */

function Boundaries() {
  const bands: {
    title: string;
    role: string;
    items: string[];
    icon: IconType;
    bg: string;
    fg: string;
    border: string;
  }[] = [
    {
      title: "On-chain · Base market",
      role: "Untouched by Sundown",
      items: [
        "Loan requests",
        "Collateral",
        "Repayment",
        "Liquidation / default handling",
      ],
      icon: Blocks,
      bg: "linear-gradient(180deg, #0B1620 0%, #1B384C 100%)",
      fg: "#fffaf2",
      border: "rgba(11,22,32,0.4)",
    },
    {
      title: "Off-chain · Sundown layer",
      role: "Built by Fairway × Sundial",
      items: [
        "Identity verification",
        "Extended metadata standard",
        "Compliance indexing",
        "Lender filtering",
        "Verified frontend views",
      ],
      icon: Layers,
      bg: `linear-gradient(180deg, #fff3d8 0%, ${GOLD_LIGHT} 100%)`,
      fg: "#3a2a08",
      border: "rgba(200,155,60,0.4)",
    },
    {
      title: "External",
      role: "Integrated, not owned",
      items: [
        "Identity issuance",
        "BTC bridges",
        "Partner lending infrastructure",
      ],
      icon: Globe,
      bg: "linear-gradient(180deg, #f4ede0 0%, #d8cfbe 100%)",
      fg: "#3a3a3a",
      border: "rgba(60,60,60,0.2)",
    },
  ];

  return (
    <Section id="boundaries" tone="paper">
      <SectionHeader
        eyebrow="Boundaries"
        title="No validator changes. No extra lending logic."
        copy="Sundown lives next to the base market. The bands below show what runs where - and who is responsible for each."
      />

      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {bands.map((band) => (
          <article
            key={band.title}
            className="overflow-hidden rounded-[12px] border shadow-[0_18px_60px_rgba(33,42,50,0.08)]"
            style={{ borderColor: band.border, background: band.bg }}
          >
            <div className="flex items-start justify-between p-5 pb-3">
              <div>
                <p
                  className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-72"
                  style={{ color: band.fg }}
                >
                  {band.role}
                </p>
                <h3
                  className="mt-1 font-serif text-[22px] font-normal leading-tight"
                  style={{ color: band.fg }}
                >
                  {band.title}
                </h3>
              </div>
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full"
                style={{ background: "rgba(255,255,255,0.18)" }}
              >
                <band.icon
                  className="h-5 w-5"
                  strokeWidth={1.55}
                  style={{ color: band.fg }}
                />
              </span>
            </div>
            <ul className="space-y-1.5 px-5 pb-5">
              {band.items.map((item) => (
                <li
                  key={item}
                  className="rounded-[6px] px-3 py-2 text-[13px] font-medium"
                  style={{
                    color: band.fg,
                    background: "rgba(255,255,255,0.14)",
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      {/* Pull quote callout */}
      <div className="mt-8 rounded-[10px] border border-[#C89B3C]/35 bg-white p-6 shadow-[0_14px_44px_rgba(200,155,60,0.10)] sm:p-8">
        <p className="font-serif text-[24px] leading-[1.3] text-[#101823] sm:text-[28px]">
          <span style={{ color: GOLD }}>"</span>Proofs ride beside the
          transaction. They do not rewrite the lending protocol.
          <span style={{ color: GOLD }}>"</span>
        </p>
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- */
/* Metadata flow + JSON mockup                                       */
/* ---------------------------------------------------------------- */

function MetadataFlow() {
  const steps = [
    { icon: KeyRound, label: "Borrower obtains credential" },
    { icon: FileText, label: "Borrower creates loan request" },
    { icon: Fingerprint, label: "Borrower attaches proof metadata" },
    { icon: Workflow, label: "Transaction is published" },
    { icon: ScanLine, label: "Indexer parses metadata" },
    { icon: BadgeCheck, label: "Indexer verifies issuer & expiration" },
    { icon: Filter, label: "Lender sees eligible loan in filtered view" },
  ];

  return (
    <Section id="metadata" tone="light">
      <SectionHeader
        eyebrow="Metadata Flow"
        title="How identity proofs attach to loan requests."
        copy="Proofs travel with the transaction as structured Cardano metadata. The indexer reads them, validates issuer and expiry, and exposes a queryable surface for lender frontends."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_1fr]">
        {/* Steps column */}
        <ol className="space-y-3">
          {steps.map((s, i) => (
            <li
              key={s.label}
              className="flex items-start gap-4 rounded-[10px] border border-[#1B384C]/12 bg-white p-4 shadow-[0_8px_28px_rgba(33,42,50,0.04)]"
            >
              <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[#fff3d8]">
                <span className="text-[11px] font-bold tracking-[0.06em]" style={{ color: GOLD_HOVER }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </span>
              <div className="flex flex-1 items-center gap-3">
                <s.icon className="h-4 w-4 flex-none" strokeWidth={1.6} style={{ color: GOLD }} />
                <span className="text-[14px] font-medium leading-6 text-[#101823]">
                  {s.label}
                </span>
              </div>
            </li>
          ))}
        </ol>

        {/* JSON mockup */}
        <div className="overflow-hidden rounded-[12px] border border-[#0B1620]/30 bg-gradient-to-b from-[#0B1620] to-[#020711] p-5 shadow-[0_22px_70px_rgba(0,0,0,0.35)]">
          <div className="flex items-center justify-between border-b border-white/8 pb-3">
            <div className="flex items-center gap-2">
              <Braces className="h-4 w-4" strokeWidth={1.7} style={{ color: GOLD_LIGHT }} />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#fffaf2]/72">
                tx metadata · label 1967
              </span>
            </div>
            <span className="rounded-full border border-[#ffcc73]/30 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.18em]" style={{ color: GOLD_LIGHT }}>
              illustrative
            </span>
          </div>
          <pre className="mt-3 overflow-x-auto font-mono text-[12.5px] leading-7 text-[#fffaf2]/90">
{`{
  "proof_type":     `}<span style={{ color: GOLD_LIGHT }}>{`"kyc_zk"`}</span>{`,
  "issuer":         `}<span style={{ color: GOLD_LIGHT }}>{`"recognized_provider"`}</span>{`,
  "proof_payload":  `}<span style={{ color: GOLD_LIGHT }}>{`"zk_proof_hash"`}</span>{`,
  "expires_at":     `}<span style={{ color: "#36f5c5" }}>{`<timestamp>`}</span>{`,
  "schema_version": `}<span style={{ color: GOLD_LIGHT }}>{`"v1"`}</span>{`
}`}
          </pre>
          <p className="mt-3 border-t border-white/8 pt-3 text-[11px] leading-5 text-[#fffaf2]/52">
            Schema is illustrative for this product page. Final production
            schema is defined alongside Sundial and ecosystem partners.
          </p>
        </div>
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- */
/* Lender Filtering                                                  */
/* ---------------------------------------------------------------- */

function LenderFiltering() {
  return (
    <Section id="filtering" tone="bone">
      <SectionHeader
        eyebrow="Lender Filtering · Interactive"
        title="Lenders choose the rules they trust."
        copy="Sundown does not impose one compliance policy. Lenders define which proof types, issuers, jurisdictions, and borrower attributes they accept. Toggle filters below to see the verified market reshape in real time."
      />
      <InteractiveFilters />
    </Section>
  );
}

function _LenderFilteringStaticArchive() {
  const filters: { label: string; value: string; icon: IconType; active?: boolean }[] = [
    { label: "Verified only", value: "On", icon: ShieldCheck, active: true },
  ];
  type Row = { id: string; amt: string; coll: string; apr: string; ltv: string; dur: string; status: string };
  const rows: Row[] = [];

  return (
    <Section id="filtering-archive" tone="bone">
      <div className="mt-12 overflow-hidden rounded-[14px] border border-[#1B384C]/14 bg-white shadow-[0_22px_70px_rgba(33,42,50,0.07)]">
        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#1B384C]/10 bg-[#fffdf7] px-5 py-3">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4" strokeWidth={1.7} style={{ color: GOLD }} />
            <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#101823]">
              Lender Console
            </span>
          </div>
          <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#101823]/60">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#2AAE9B]/10 px-2 py-0.5" style={{ color: "#2AAE9B" }}>
              <span className="h-1.5 w-1.5 rounded-full bg-[#2AAE9B]" />
              Indexer healthy
            </span>
            <span>412 verified loans</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr]">
          {/* Filter rail */}
          <aside className="border-b border-[#1B384C]/10 bg-[#f8f3eb] p-5 lg:border-b-0 lg:border-r">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: GRAY_BODY }}>
              Filters
            </p>
            <div className="mt-4 space-y-2">
              {filters.map((f) => (
                <div
                  key={f.label}
                  className={[
                    "flex items-center justify-between rounded-[6px] border px-3 py-2",
                    f.active
                      ? "border-[#C89B3C]/45 bg-[#fff3d8]"
                      : "border-[#1B384C]/10 bg-white",
                  ].join(" ")}
                >
                  <div className="flex items-center gap-2">
                    <f.icon className="h-3.5 w-3.5" strokeWidth={1.7} style={{ color: f.active ? GOLD : "#1B384C" }} />
                    <span className="text-[12px] font-semibold text-[#101823]">{f.label}</span>
                  </div>
                  <span className="text-[11px] font-medium" style={{ color: f.active ? GOLD_HOVER : GRAY_BODY }}>
                    {f.value}
                  </span>
                </div>
              ))}
            </div>
          </aside>

          {/* Results */}
          <div className="p-5">
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: GRAY_BODY }}>
                Verified results
              </p>
              <span className="text-[11px] font-semibold text-[#101823]/56">
                Showing 3 of 412
              </span>
            </div>

            <div className="mt-4 hidden grid-cols-[80px_1fr_1fr_1fr_1fr_1fr_120px] gap-2 px-3 text-[10px] font-bold uppercase tracking-[0.16em] lg:grid" style={{ color: GRAY_BODY }}>
              <span>Request</span>
              <span>Amount</span>
              <span>Collateral</span>
              <span>APR</span>
              <span>LTV</span>
              <span>Duration</span>
              <span className="text-right">Eligibility</span>
            </div>

            <ul className="mt-2 space-y-2">
              {rows.map((r) => (
                <li
                  key={r.id}
                  className="grid grid-cols-2 gap-x-3 gap-y-2 rounded-[8px] border border-[#1B384C]/10 bg-white p-3 transition hover:border-[#C89B3C]/40 hover:bg-[#fffdf7] lg:grid-cols-[80px_1fr_1fr_1fr_1fr_1fr_120px] lg:items-center"
                >
                  <span className="text-[12px] font-bold tracking-[0.06em]" style={{ color: GOLD_HOVER }}>{r.id}</span>
                  <Cell label="Amount">{r.amt}</Cell>
                  <Cell label="Collateral">{r.coll}</Cell>
                  <Cell label="APR">{r.apr}</Cell>
                  <Cell label="LTV">{r.ltv}</Cell>
                  <Cell label="Duration">{r.dur}</Cell>
                  <span className="inline-flex w-fit items-center gap-1 justify-self-start rounded-full bg-[#2AAE9B]/12 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.14em] lg:justify-self-end" style={{ color: "#2AAE9B" }}>
                    <BadgeCheck className="h-3 w-3" strokeWidth={2} />
                    {r.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Cell({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col">
      <span className="text-[9px] font-bold uppercase tracking-[0.16em] lg:hidden" style={{ color: GRAY_BODY }}>
        {label}
      </span>
      <span className="text-[13px] font-medium text-[#101823]">{children}</span>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Borrower experience                                               */
/* ---------------------------------------------------------------- */

function BorrowerExperience() {
  const fields: { label: string; value: ReactNode; icon: IconType; emphasis?: boolean }[] = [
    { label: "Amount", value: "10,000 ADA", icon: Coins },
    { label: "Collateral", value: "BTC / ADA", icon: LockKeyhole },
    { label: "Duration", value: "6 months", icon: Gauge },
    { label: "Proof attached", value: "KYC verified", icon: Fingerprint, emphasis: true },
    { label: "Jurisdiction", value: "Eligible", icon: MapPin },
    { label: "Data revealed", value: "Minimal", icon: LockKeyhole },
    { label: "Status", value: "Indexed", icon: ScanLine, emphasis: true },
  ];

  return (
    <Section id="borrower" tone="paper">
      <SectionHeader
        eyebrow="Borrower"
        title="Borrow with proofs, not repeated paperwork."
        copy="Borrowers reuse credentials and attach proofs to loan requests without exposing unnecessary personal data to every lender. Verified access. Privacy preserved."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.05fr]">
        {/* Copy column */}
        <div className="rounded-[12px] border border-[#1B384C]/12 bg-white p-7 shadow-[0_14px_44px_rgba(33,42,50,0.05)]">
          <h3 className="font-serif text-[26px] font-normal leading-tight text-[#101823]">
            One credential. Many loan requests.
          </h3>
          <p className="mt-4 text-[14px] leading-7" style={{ color: GRAY_BODY }}>
            A borrower verifies once with a credential issuer. From there,
            attaching a proof to a new loan request takes one tap. Lenders see
            an attestation, not a stack of personal documents.
          </p>
          <ul className="mt-5 space-y-3 text-[14px] leading-6 text-[#101823]">
            <li className="flex items-start gap-2">
              <CircleCheck className="mt-0.5 h-4 w-4 flex-none" strokeWidth={2} style={{ color: "#2AAE9B" }} />
              Selective disclosure - reveal only what's needed.
            </li>
            <li className="flex items-start gap-2">
              <CircleCheck className="mt-0.5 h-4 w-4 flex-none" strokeWidth={2} style={{ color: "#2AAE9B" }} />
              Reusable across compatible verified markets.
            </li>
            <li className="flex items-start gap-2">
              <CircleCheck className="mt-0.5 h-4 w-4 flex-none" strokeWidth={2} style={{ color: "#2AAE9B" }} />
              No raw documents stored on Sundown's side.
            </li>
          </ul>
        </div>

        {/* Borrower mockup */}
        <div className="overflow-hidden rounded-[12px] border border-[#1B384C]/14 bg-white shadow-[0_22px_70px_rgba(33,42,50,0.08)]">
          <div className="flex items-center justify-between border-b border-[#1B384C]/10 bg-[#f8f3eb] px-5 py-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#101823]">
              New Loan Request
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#2AAE9B]/12 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: "#2AAE9B" }}>
              <BadgeCheck className="h-3 w-3" strokeWidth={2} />
              Ready to publish
            </span>
          </div>

          <div className="grid gap-2 p-5">
            {fields.map((f) => (
              <div
                key={f.label}
                className={[
                  "flex items-center justify-between rounded-[8px] border px-4 py-3",
                  f.emphasis
                    ? "border-[#C89B3C]/45 bg-[#fff8e8]"
                    : "border-[#1B384C]/10 bg-white",
                ].join(" ")}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-8 w-8 items-center justify-center rounded-full"
                    style={{ background: f.emphasis ? "rgba(200,155,60,0.16)" : "rgba(27,56,76,0.08)" }}
                  >
                    <f.icon className="h-4 w-4" strokeWidth={1.6} style={{ color: f.emphasis ? GOLD : "#1B384C" }} />
                  </span>
                  <span className="text-[12px] font-bold uppercase tracking-[0.14em]" style={{ color: GRAY_BODY }}>
                    {f.label}
                  </span>
                </div>
                <span className="text-[14px] font-semibold" style={{ color: f.emphasis ? GOLD_HOVER : "#101823" }}>
                  {f.value}
                </span>
              </div>
            ))}

            <button
              type="button"
              className="mt-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[#ffe3a4] via-[#ffc95a] to-[#d99a2b] px-5 text-[12px] font-bold uppercase text-[#130b02]"
            >
              Publish to verified market
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- */
/* Pilot                                                             */
/* ---------------------------------------------------------------- */

function Pilot() {
  const targets = [
    { value: "50+", label: "loans with identity verification through Sundown" },
    { value: "10", label: "participating lenders, including institutions and verified individuals" },
    { value: "5", label: "pilot partners integrated with the regulated frontend" },
    { value: "OSS", label: "React/Next.js reference components, open-source" },
    { value: "Spec", label: "compliance filtering indexer specification" },
    { value: "Std", label: "identity proof integration standard" },
  ];

  const milestones = [
    { id: "M1", title: "Architecture & base integration", icon: Layers },
    { id: "M2", title: "Verification system & testnet", icon: ShieldCheck },
    { id: "M3", title: "Frontend prototype & identity integration", icon: Workflow },
    { id: "M4", title: "Indexer & filtering service", icon: Database },
    { id: "M5", title: "Pilot preparation", icon: Target },
    { id: "M6", title: "Mainnet identity layer launch", icon: BadgeCheck },
  ];

  return (
    <Section id="pilot" tone="light">
      <SectionHeader
        eyebrow="Pilot"
        title="Pilot targets and measurable outcomes."
        copy="A focused pilot, not a treasury proposal. The goal is shipped infrastructure, signed-up lenders, and an integration standard others can reuse."
      />

      <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {targets.map((t) => (
          <article
            key={t.label}
            className="rounded-[10px] border border-[#1B384C]/12 bg-white p-6 shadow-[0_10px_36px_rgba(33,42,50,0.04)]"
          >
            <p
              className="font-serif text-[44px] font-normal leading-none text-transparent"
              style={{
                backgroundImage: "linear-gradient(180deg, #C89B3C 0%, #8A5A1F 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              {t.value}
            </p>
            <p className="mt-4 text-[13px] leading-6" style={{ color: GRAY_BODY }}>
              {t.label}
            </p>
          </article>
        ))}
      </div>

      {/* Timeline */}
      <div className="mt-10 overflow-hidden rounded-[12px] border border-[#1B384C]/14 bg-gradient-to-b from-white to-[#fffdf7] p-6 shadow-[0_18px_60px_rgba(33,42,50,0.06)] sm:p-8">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: GOLD_HOVER }}>
            Milestones
          </p>
          <p className="text-[11px] font-semibold" style={{ color: GRAY_BODY }}>
            Indicative sequence
          </p>
        </div>

        <ol className="relative mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          <span aria-hidden className="absolute left-0 right-0 top-7 hidden h-px lg:block" style={{ background: "linear-gradient(90deg, transparent, rgba(200,155,60,0.45), transparent)" }} />
          {milestones.map((m) => (
            <li
              key={m.id}
              className="relative rounded-[10px] border border-[#1B384C]/10 bg-white p-4 shadow-[0_6px_20px_rgba(33,42,50,0.04)]"
            >
              <span
                className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full"
                style={{ background: "rgba(200,155,60,0.12)", color: GOLD }}
              >
                <m.icon className="h-4 w-4" strokeWidth={1.7} />
              </span>
              <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: GOLD_HOVER }}>
                {m.id}
              </p>
              <p className="mt-1 text-[13px] font-semibold leading-5 text-[#101823]">
                {m.title}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- */
/* Reuse / ecosystem                                                 */
/* ---------------------------------------------------------------- */

function Reuse() {
  const cards = [
    { icon: Landmark, title: "Institutional lenders", copy: "Filter and underwrite against verified borrower pools." },
    { icon: Stamp, title: "Identity providers", copy: "Plug issuers into a shared metadata standard." },
    { icon: Globe, title: "Regional lending platforms", copy: "Compose jurisdiction-specific compliance views." },
    { icon: Blocks, title: "Credit market builders", copy: "Adopt the indexer spec and reference frontend." },
    { icon: Server, title: "Partner frontends", copy: "Embed verified discovery into existing UIs." },
  ];

  return (
    <Section id="reuse" tone="bone">
      <SectionHeader
        eyebrow="Reuse"
        title="Reusable infrastructure for Cardano credit markets."
        copy="Sundown produces patterns, specs, and components that other teams in the ecosystem can adopt. Identity extension is built once, used many times."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c) => (
          <article
            key={c.title}
            className="group rounded-[12px] border border-[#1B384C]/12 bg-white p-6 shadow-[0_10px_36px_rgba(33,42,50,0.05)] transition hover:-translate-y-0.5 hover:border-[#C89B3C]/40 hover:shadow-[0_18px_60px_rgba(200,155,60,0.10)]"
          >
            <span
              className="flex h-11 w-11 items-center justify-center rounded-full transition group-hover:bg-[#fff3d8]"
              style={{ background: "rgba(27,56,76,0.08)" }}
            >
              <c.icon className="h-5 w-5 transition" strokeWidth={1.55} style={{ color: GOLD }} />
            </span>
            <h3 className="mt-5 text-[18px] font-semibold leading-7 text-[#101823]">
              {c.title}
            </h3>
            <p className="mt-2 text-[13px] leading-6" style={{ color: GRAY_BODY }}>
              {c.copy}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- */
/* Risk & boundaries                                                 */
/* ---------------------------------------------------------------- */

function RiskBoundaries() {
  const items = [
    {
      title: "Identity issuer risk",
      mitigation: "Multi-issuer support and transparent issuer criteria.",
      icon: Stamp,
    },
    {
      title: "Base contract dependency",
      mitigation: "Build against open-source prototype contracts and equivalent P2P models.",
      icon: Blocks,
    },
    {
      title: "Integration timing",
      mitigation: "Test identity extensions before full base-layer production rollout.",
      icon: Workflow,
    },
    {
      title: "Compliance responsibility",
      mitigation: "Sundown provides tools. Participants decide which proofs and policies they accept.",
      icon: ShieldCheck,
    },
  ];

  return (
    <Section id="risk" tone="paper">
      <SectionHeader
        eyebrow="Risk & Boundaries"
        title="Clear boundaries. Lower integration risk."
        copy="Each known risk has a defined mitigation. Sundown does not pretend to handle everything - it draws the line clearly so partners know what they own."
      />

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {items.map((it) => (
          <article
            key={it.title}
            className="rounded-[12px] border border-[#1B384C]/12 bg-white p-6 shadow-[0_10px_36px_rgba(33,42,50,0.04)]"
          >
            <div className="flex items-center gap-3">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full"
                style={{ background: "rgba(200,155,60,0.10)" }}
              >
                <it.icon className="h-5 w-5" strokeWidth={1.6} style={{ color: GOLD }} />
              </span>
              <h3 className="text-[17px] font-semibold leading-6 text-[#101823]">
                {it.title}
              </h3>
            </div>
            <div className="mt-4 rounded-[8px] border border-[#C89B3C]/24 bg-[#fffdf7] px-4 py-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: GOLD_HOVER }}>
                Mitigation
              </p>
              <p className="mt-1 text-[13px] leading-6 text-[#101823]">
                {it.mitigation}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- */
/* FAQ                                                               */
/* ---------------------------------------------------------------- */

function FAQ() {
  const items: { q: string; a: string }[] = [
    {
      q: "What is Sundown?",
      a: "Sundown is the Fairway × Sundial discovery, compliance indexer, lender filtering, and identity-proof layer for P2P credit markets on Cardano.",
    },
    {
      q: "Is Sundown the same as Aurora?",
      a: "No. Aurora is the full Bitcoin-backed credit-market stack. Sundown is one layer inside Aurora.",
    },
    {
      q: "Does Sundown replace Sundial?",
      a: "No. Sundown is built with Sundial and works with Sundial's lending infrastructure. It does not replace the base lending stack.",
    },
    {
      q: "Does Sundown change Cardano lending contracts?",
      a: "No. Sundown attaches identity proofs as metadata and verifies them off-chain through an indexer. Base contracts remain unchanged.",
    },
    {
      q: "Does Sundown store personal data?",
      a: "No. Sundown is designed around proof verification, selective disclosure, and indexer-based validation. Sensitive personal data remains with issuers or credential holders.",
    },
    {
      q: "Can lenders define their own compliance rules?",
      a: "Yes. Lenders can filter opportunities based on proof types, issuers, jurisdiction, and other eligibility criteria.",
    },
    {
      q: "Is participation permissionless or permissioned?",
      a: "The base market can remain permissionless. Sundown adds verified views and filtering for participants who require compliance.",
    },
  ];

  return (
    <Section id="faq" tone="light">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr]">
        <div>
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-3 font-serif text-[34px] font-normal leading-tight text-[#101823] sm:text-[40px]">
            Quick answers about <em className="italic">scope</em>.
          </h2>
          <p className="mt-4 max-w-[420px] text-[14px] leading-7" style={{ color: GRAY_BODY }}>
            Sundown's value is in what it does <em>and</em> what it doesn't.
            These are the questions partners ask first.
          </p>
        </div>
        <div className="overflow-hidden rounded-[10px] border border-[#1B384C]/14 bg-white shadow-[0_18px_60px_rgba(33,42,50,0.06)]">
          {items.map((it) => (
            <details
              key={it.q}
              className="group border-b border-[#1B384C]/10 last:border-b-0 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-6 px-5 py-5 text-left text-[16px] font-semibold text-[#101823] transition hover:text-[#d99a2b]">
                <span>{it.q}</span>
                <Plus
                  className="h-5 w-5 flex-none transition duration-200 group-open:rotate-45"
                  strokeWidth={1.7}
                  style={{ color: GOLD }}
                />
              </summary>
              <div className="px-5 pb-6 pr-10 text-[14px] leading-7" style={{ color: GRAY_BODY }}>
                {it.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- */
/* Final CTA                                                         */
/* ---------------------------------------------------------------- */

function FinalCTA() {
  return (
    <section
      id="sundown-cta"
      className="px-5 pb-20 pt-4 sm:px-8 lg:px-12"
      style={{ background: PAGE_BG }}
    >
      <div className="mx-auto max-w-[1180px] overflow-hidden rounded-[14px] border border-[#C89B3C]/30 bg-gradient-to-br from-white to-[#fff8e8] p-8 shadow-[0_24px_80px_rgba(200,155,60,0.14)] sm:p-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <SectionLabel>Get Involved</SectionLabel>
            <h2 className="mt-3 font-serif text-[32px] font-normal leading-tight text-[#101823] sm:text-[44px]">
              Build verified credit markets without fragmenting liquidity.
            </h2>
            <p className="mt-4 max-w-[540px] text-[15px] leading-7" style={{ color: GRAY_BODY }}>
              Sundown brings identity proofs, compliance indexing, and
              lender-side filtering to P2P lending infrastructure on Cardano.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 lg:items-end">
            <a
              href="mailto:hello@fairway.xyz?subject=Sundown%20access"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[#ffe3a4] via-[#ffc95a] to-[#d99a2b] px-7 text-[13px] font-bold uppercase text-[#130b02] shadow-[0_18px_50px_rgba(246,184,75,0.24)] transition hover:-translate-y-0.5 hover:from-[#fff0c9] hover:to-[#f6b84b]"
            >
              Request Access
              <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
            </a>
            <Link
              href="/#stack"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#C89B3C]/45 bg-white px-7 text-[13px] font-bold uppercase text-[#101823] transition hover:border-[#C89B3C] hover:bg-[#fff8e8]"
            >
              Back to Aurora Stack
              <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
            </Link>
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
          <Link href="/" className="inline-flex items-baseline gap-3">
            <span
              aria-label="Aurora"
              className="bg-clip-text font-serif text-[21px] font-normal tracking-[0.24em] text-transparent"
              style={{ backgroundImage: "linear-gradient(180deg, #0a1421 0%, #1B384C 100%)" }}
            >
              AURORA
            </span>
            <span className="text-[12px] font-bold uppercase tracking-[0.22em]" style={{ color: GOLD_HOVER }}>
              / Sundown
            </span>
          </Link>
          <p className="mt-5 max-w-[420px] text-[14px] leading-7" style={{ color: GRAY_BODY }}>
            Sundown is the Fairway × Sundial verified discovery layer for P2P
            credit markets on Cardano. One layer inside Aurora.
          </p>
          <p className="mt-8 text-[12px]" style={{ color: GRAY_BODY }}>
            Copyright 2026 Aurora / Fairway. All rights reserved.
          </p>
        </div>
        <FooterCol
          title="Sundown"
          links={[
            { label: "What it is", href: "#what-it-is" },
            { label: "Architecture", href: "#architecture" },
            { label: "Metadata", href: "#metadata" },
            { label: "Pilot", href: "#pilot" },
            { label: "FAQ", href: "#faq" },
          ]}
        />
        <FooterCol
          title="Aurora"
          links={[
            { label: "Stack", href: "/#stack" },
            { label: "Partnerships", href: "/#partnership" },
            { label: "How It Works", href: "/#how" },
            { label: "Use Cases", href: "/#use-cases" },
          ]}
        />
        <FooterCol
          title="Legal"
          links={[
            { label: "Privacy", href: "#" },
            { label: "Terms", href: "#" },
            { label: "Compliance", href: "#" },
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
      <h3 className="text-[12px] font-semibold uppercase" style={{ color: GRAY_BODY }}>
        {title}
      </h3>
      <ul className="mt-5 space-y-3">
        {links.map((link) => {
          const isInternal = link.href.startsWith("/") && !link.href.startsWith("//");
          const className =
            "text-[14px] text-[#17202b]/70 transition hover:text-[#d99a2b]";
          return (
            <li key={link.label}>
              {isInternal ? (
                <Link href={link.href} className={className}>
                  {link.label}
                </Link>
              ) : (
                <a href={link.href} className={className}>
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
/* Shared primitives                                                 */
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
      : PAGE_BG;
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
        <SectionLabel>{eyebrow}</SectionLabel>
        <h2 className="mt-3 font-serif text-[32px] font-normal leading-[1.1] tracking-[-0.01em] text-[#101823] sm:text-[40px] lg:text-[46px]">
          {title}
        </h2>
      </div>
      {copy ? (
        <p className="max-w-[480px] text-[15px] leading-[1.7]" style={{ color: GRAY_BODY }}>
          {copy}
        </p>
      ) : null}
    </div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p
      className="text-[11px] font-bold uppercase tracking-[0.22em]"
      style={{ color: GOLD_HOVER }}
    >
      {children}
    </p>
  );
}

function DiagramNode({
  icon: Icon,
  label,
  sub,
  tone,
}: {
  icon: IconType;
  label: string;
  sub: string;
  tone: "dark" | "muted";
}) {
  const isDark = tone === "dark";
  return (
    <div
      className="flex items-center gap-4 rounded-[10px] border p-5"
      style={{
        borderColor: isDark ? "rgba(11,22,32,0.12)" : "rgba(60,60,60,0.16)",
        background: isDark ? "linear-gradient(180deg, #0B1620 0%, #1B384C 100%)" : "#f8f3eb",
        color: isDark ? "#fffaf2" : "#101823",
      }}
    >
      <span
        className="flex h-11 w-11 flex-none items-center justify-center rounded-full"
        style={{ background: isDark ? "rgba(255,204,115,0.16)" : "rgba(27,56,76,0.10)" }}
      >
        <Icon className="h-5 w-5" strokeWidth={1.6} style={{ color: isDark ? GOLD_LIGHT : "#1B384C" }} />
      </span>
      <div>
        <p className="text-[15px] font-semibold leading-5">{label}</p>
        <p className="mt-1 text-[12px] leading-5" style={{ color: isDark ? "rgba(255,250,242,0.62)" : GRAY_BODY }}>
          {sub}
        </p>
      </div>
    </div>
  );
}
