import type { ComponentType, CSSProperties, ReactNode } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import ScrollProgress from "./_components/ScrollProgress";
import FlowDiagram from "./_components/FlowDiagram";
import ArchitectureTabs from "./_components/ArchitectureTabs";
import LenderFilteringMockup from "./_components/LenderFilteringMockup";
import PilotTimelineCollapse from "./_components/PilotTimelineCollapse";
import PartnershipVisual from "../../_components/PartnershipVisual";

import AccordionFAQ from "@/components/aurora/AccordionFAQ";
import TrustLogoWall from "@/components/aurora/TrustLogoWall";
import BuiltByFairwayCard from "@/components/aurora/BuiltByFairwayCard";

import {
  ArrowRight,
  Filter,
  Fingerprint,
  Layers,
  Menu,
  Plus,
  ScanLine,
  Search,
  SlidersHorizontal,
  Sun,
} from "lucide-react";

type IconType = ComponentType<{
  className?: string;
  strokeWidth?: number;
  style?: CSSProperties;
}>;

const GOLD = "#C89B3C";
const GOLD_HOVER = "#B8892F";
const GRAY_BODY = "#6F6F6F";
const INK = "#0B1620";
const PAGE_BG = "#fffaf2";

export const metadata: Metadata = {
  title: "Sundown - Verified discovery for P2P credit markets",
  description:
    "Sundown adds identity proofs, compliance indexing, and lender-side filtering to Cardano P2P lending infrastructure. Built with Sundial.",
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
         <TrustLogoWall
          tone="white"
          eyebrow="Ecosystem"
          title="Built alongside Cardano-native partners."
          copy="Sundown ships as a Fairway × Sundial collaboration, integrating with Cardano, Midnight, and Veridian-aligned credentials."
          backers={[]}
        />
        <PartnershipSection />
        <WhatItIs />
        <CoreFlow />
        <Architecture />
        <LenderFiltering />
        {/* <Pilot /> */}
       
        <TrustLogoWall
          id="backers"
          tone="white"
          eyebrow="Backed by"
          title="Backed by ecosystem programs and grants."
          copy=""
          partners={[]}
        />
        {/* <BuiltByFairwayCard tone="bone" /> */}
        <AccordionFAQ
          tone="light"
          eyebrow="FAQ"
          title={
            <>
              Quick answers about <em className="italic">scope</em>.
            </>
          }
          copy="The questions partners and reviewers ask first."
          items={faqItems}
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
    { href: "/#stack", label: "Aurora Stack" },
    { href: "#partnership", label: "Partnership" },
    { href: "#what-it-is", label: "What it is" },
    { href: "#architecture", label: "Architecture" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 text-[#fffaf2]">
      <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between rounded-[8px] border border-white/12 bg-[#020711]/58 px-4 py-3 shadow-[0_18px_70px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:px-5">
        <Link
          href="/"
          aria-label="Aurora Sundown"
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
          <span className="ml-1 hidden border-l border-[#ffcc73]/30 pl-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#ffcc73]/82 sm:inline">
            / Sundown
          </span>
        </Link>

        <nav className="hidden items-center gap-1 text-[12px] font-semibold uppercase text-[#fffaf2]/72 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2.5 transition duration-200 hover:bg-white/7 hover:text-[#ffcc73]"
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
/* Hero - single headline, two buttons, atmosphere visual            */
/* ---------------------------------------------------------------- */

function Hero() {
  const chips: { icon: IconType; label: string }[] = [
    { icon: Sun, label: "Built with Sundial" },
    { icon: Fingerprint, label: "Identity proof metadata" },
    { icon: Filter, label: "Lender filtering" },
  ];

  return (
    <section
      id="top"
      className="relative isolate flex min-h-screen flex-col overflow-hidden bg-[#020711] text-[#fffaf2]"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/brand/sundown-hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020711]/92 via-[#020711]/58 to-[#020711]/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020711]/40 via-transparent to-[#020711]/82" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1320px] flex-1 flex-col px-5 pb-14 pt-32 sm:px-8 lg:px-12 lg:pb-20 lg:pt-36">
        <div className="flex flex-1 flex-col justify-center">
          <div className="max-w-[680px]">
            <div className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[#ffcc73]/30 bg-[#020711]/45 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#ffcc73] backdrop-blur-xl">
              <span className="h-1 w-1 rounded-full bg-[#ffcc73] shadow-[0_0_8px_rgba(255,204,115,0.9)]" />
              Aurora Stack / Sundown
            </div>

            <h1 className="mt-7 font-serif text-[40px] font-normal leading-[1.04] tracking-[-0.02em] text-[#fffaf2] drop-shadow-[0_14px_42px_rgba(0,0,0,0.6)] sm:text-[54px] lg:text-[62px]">
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

            <p className="mt-6 max-w-[540px] text-[16px] leading-[1.7] text-[#fffaf2]/85 drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]">
              Built with Sundial, Sundown adds identity proofs, compliance
              indexing, and lender-side filtering to Cardano P2P lending
              infrastructure.
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
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#f6b84b]/62 bg-[#020711]/40 px-7 text-[13px] font-bold uppercase text-[#ffcc73] backdrop-blur transition duration-200 hover:border-[#ffcc73] hover:bg-[#f6b84b]/10"
              >
                Explore Pilot
                <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 lg:mt-16">
          <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-3 lg:gap-y-0 lg:divide-x lg:divide-white/10">
            {chips.map((chip) => (
              <div
                key={chip.label}
                className="flex flex-col items-center gap-3 px-4 text-center"
              >
                <span
                  className="relative flex h-[60px] w-[60px] items-center justify-center rounded-full border border-[#ffcc73]/45 bg-[#020711]/60 backdrop-blur-xl"
                  style={{
                    boxShadow:
                      "0 0 24px rgba(255,204,115,0.22), inset 0 0 16px rgba(255,204,115,0.10)",
                  }}
                >
                  <chip.icon
                    className="h-5 w-5"
                    strokeWidth={1.65}
                    style={{ color: "#ffcc73" }}
                  />
                </span>
                <p className="text-[12px] font-semibold uppercase leading-tight tracking-[0.18em] text-[#fffaf2]/88">
                  {chip.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Partnership - Built with Sundial                                  */
/* ---------------------------------------------------------------- */

function PartnershipSection() {
  return (
    <Section id="partnership" tone="paper">
      <SectionHeader
        eyebrow="Partnership"
        title="Built with Sundial."
        copy="Sundown is Aurora's Fairway x Sundial layer for discoverable, filterable on-chain loans."
      />
      <div className="mt-10">
        <PartnershipVisual />
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a
          href="#architecture"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[#ffe3a4] via-[#ffc95a] to-[#d99a2b] px-7 text-[13px] font-bold uppercase text-[#130b02] shadow-[0_18px_50px_rgba(246,184,75,0.22)] transition hover:-translate-y-0.5 hover:from-[#fff0c9] hover:to-[#f6b84b]"
        >
          View Architecture
          <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
        </a>
        <Link
          href="/#stack"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#C89B3C]/45 bg-white px-7 text-[13px] font-bold uppercase text-[#101823] transition hover:-translate-y-0.5 hover:border-[#C89B3C] hover:bg-[#fff8e8]"
        >
          Explore Aurora Stack
          <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
        </Link>
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- */
/* What Sundown is - 6 concise cards, expandable detail              */
/* ---------------------------------------------------------------- */

function WhatItIs() {
  const cards: {
    icon: IconType;
    title: string;
    copy: string;
    detail: string;
  }[] = [
    {
      icon: Search,
      title: "Discovery layer",
      copy: "Surfaces compatible loan opportunities for verified participation.",
      detail:
        "Indexes loan requests across the base market and exposes filtered views for lenders.",
    },
    {
      icon: ScanLine,
      title: "Compliance-aware indexer",
      copy: "Parses loan metadata, verifies proofs, checks issuer status.",
      detail:
        "Off-chain service that validates proof envelopes, expirations, and issuer authority before exposing data.",
    },
    {
      icon: SlidersHorizontal,
      title: "Lender filtering",
      copy: "Define accepted proofs, issuers, jurisdictions, and risk bands.",
      detail:
        "Per-lender policies stored alongside the indexer; the verified market view respects each lender's rules.",
    },
    {
      icon: Fingerprint,
      title: "Metadata standard",
      copy: "Identity proofs attach to loan requests as structured metadata.",
      detail:
        "An open envelope schema for proofs, issuers, expirations, and verification anchors. No base contract changes.",
    },
    {
      icon: Layers,
      title: "Reference frontend",
      copy: "Open components for borrowers, lenders, proofs, and dashboards.",
      detail:
        "Next.js / React components covering the full verified discovery flow, ready to be embedded by partners.",
    },
    {
      icon: Sun,
      title: "Fairway × Sundial layer",
      copy: "Connects Fairway identity with Sundial lending infrastructure.",
      detail:
        "Sundown is the partnership surface where verified identity meets Cardano-native P2P credit rails.",
    },
  ];

  return (
    <Section id="what-it-is" tone="light">
      <SectionHeader
        eyebrow="What Sundown Is"
        title={
          <>
            A <em className="font-serif italic">verification & discovery</em>{" "}
            layer for P2P credit.
          </>
        }
        copy="Sundown does not rebuild lending rails. It adds verification and filtering around them."
      />

      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, i) => (
          <details
            key={card.title}
            className="group relative overflow-hidden rounded-[12px] border border-[#1B384C]/12 bg-white p-6 shadow-[0_10px_36px_rgba(33,42,50,0.05)] transition hover:-translate-y-0.5 hover:border-[#C89B3C]/45 [&_summary::-webkit-details-marker]:hidden"
          >
            <span
              aria-hidden
              className="absolute inset-x-0 top-0 h-[2px]"
              style={{
                background: `linear-gradient(90deg, transparent 0%, ${GOLD} 30%, ${GOLD_HOVER} 70%, transparent 100%)`,
              }}
            />
            <summary className="cursor-pointer list-none">
              <div className="flex items-start justify-between">
                <span
                  className="font-serif text-[14px] tracking-[0.06em]"
                  style={{ color: GOLD }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full"
                  style={{ background: "rgba(200,155,60,0.10)" }}
                >
                  <card.icon
                    className="h-5 w-5"
                    strokeWidth={1.55}
                    style={{ color: GOLD }}
                  />
                </span>
              </div>
              <h3 className="mt-6 text-[18px] font-semibold leading-6 text-[#101823]">
                {card.title}
              </h3>
              <p
                className="mt-2 text-[13px] leading-6"
                style={{ color: GRAY_BODY }}
              >
                {card.copy}
              </p>
              <span
                className="mt-4 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.18em]"
                style={{ color: GOLD_HOVER }}
              >
                <Plus
                  className="h-3 w-3 transition duration-200 group-open:rotate-45"
                  strokeWidth={2}
                />
                <span className="group-open:hidden">More</span>
                <span className="hidden group-open:inline">Less</span>
              </span>
            </summary>
            <p
              className="mt-3 border-t border-[#1B384C]/10 pt-3 text-[13px] leading-6"
              style={{ color: GRAY_BODY }}
            >
              {card.detail}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- */
/* Core flow visualization                                           */
/* ---------------------------------------------------------------- */

function CoreFlow() {
  return (
    <Section id="flow" tone="paper">
      <SectionHeader
        eyebrow="Core Flow"
        title="From request to verified market view."
        copy="Identity proofs travel as structured metadata. Lenders see a filtered, eligibility-aware view."
      />
      <div className="mt-10 reveal-up">
        <FlowDiagram />
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- */
/* Architecture                                                      */
/* ---------------------------------------------------------------- */

function Architecture() {
  return (
    <Section id="architecture" tone="light">
      <SectionHeader
        eyebrow="Architecture"
        title="Three layers. Clear boundaries."
        copy="Sundown is the middle layer. It does not own the base market and does not own credential issuance."
      />
      <div className="mt-10">
        <ArchitectureTabs />
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- */
/* Lender filtering                                                  */
/* ---------------------------------------------------------------- */

function LenderFiltering() {
  return (
    <Section id="filtering" tone="paper">
      <SectionHeader
        eyebrow="Lender Filtering"
        title="Compliance rules, defined by the lender."
        copy="Each lender filters by proof type, issuer, jurisdiction, and risk band. The verified market view updates instantly."
      />
      <div className="mt-10 reveal-up">
        <LenderFilteringMockup />
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- */
/* Pilot                                                             */
/* ---------------------------------------------------------------- */

function Pilot() {
  const targets = [
    {
      value: "50+",
      label: "verified loans through Sundown",
    },
    {
      value: "10",
      label: "participating lenders",
    },
    {
      value: "5",
      label: "pilot partners on the regulated frontend",
    },
  ];

  return (
    <Section id="pilot" tone="light">
      <SectionHeader
        eyebrow="Pilot"
        title="Targets and measurable outcomes."
        copy="Shipped infrastructure, signed-up lenders, and an integration standard others can reuse."
      />

      <div className="mt-10 grid gap-3 sm:grid-cols-3">
        {targets.map((t) => (
          <article
            key={t.label}
            className="rounded-[10px] border border-[#1B384C]/12 bg-white p-6 shadow-[0_10px_36px_rgba(33,42,50,0.04)]"
          >
            <p
              className="font-serif text-[44px] font-normal leading-none text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #C89B3C 0%, #8A5A1F 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              {t.value}
            </p>
            <p
              className="mt-4 text-[13px] leading-6"
              style={{ color: GRAY_BODY }}
            >
              {t.label}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-8">
        <PilotTimelineCollapse />
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- */
/* FAQ data                                                          */
/* ---------------------------------------------------------------- */

const faqItems: { q: string; a: ReactNode }[] = [
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
    a: "Yes. Lenders filter opportunities by proof types, issuers, jurisdiction, and other eligibility criteria.",
  },
  {
    q: "Permissionless or permissioned?",
    a: "The base market remains permissionless. Sundown adds verified views and filtering for participants who require compliance.",
  },
  {
    q: "What about identity issuer or integration risk?",
    a: "Sundown supports multi-issuer credentials with transparent issuer criteria. Identity extensions are tested before full base-layer rollout, and participants choose which proofs and policies they accept.",
  },
];

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
            <p
              className="text-[11px] font-bold uppercase tracking-[0.22em]"
              style={{ color: GOLD_HOVER }}
            >
              Get involved
            </p>
            <h2 className="mt-3 font-serif text-[32px] font-normal leading-tight text-[#101823] sm:text-[44px]">
              Build verified credit markets without fragmenting liquidity.
            </h2>
          </div>
          <div className="flex flex-col items-start gap-3 lg:items-end">
            <a
              href="mailto:hello@fairway.xyz?subject=Sundown%20access"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[#ffe3a4] via-[#ffc95a] to-[#d99a2b] px-7 text-[13px] font-bold uppercase text-[#130b02] shadow-[0_18px_50px_rgba(246,184,75,0.24)] transition hover:-translate-y-0.5 hover:from-[#fff0c9] hover:to-[#f6b84b]"
            >
              Request Access
              <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
            </a>
            <a
              href="https://www.fairway.global"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#C89B3C]/45 bg-white px-7 text-[13px] font-bold uppercase text-[#101823] transition hover:border-[#C89B3C] hover:bg-[#fff8e8]"
            >
              Visit Fairway
              <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
            </a>
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
            <span
              className="text-[12px] font-bold uppercase tracking-[0.22em]"
              style={{ color: GOLD_HOVER }}
            >
              / Sundown
            </span>
          </Link>
          <p
            className="mt-5 max-w-[420px] text-[14px] leading-7"
            style={{ color: GRAY_BODY }}
          >
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
            { label: "Partnership", href: "#partnership" },
            { label: "What it is", href: "#what-it-is" },
            { label: "Architecture", href: "#architecture" },
            { label: "Filtering", href: "#filtering" },
            { label: "Pilot", href: "#pilot" },
            { label: "FAQ", href: "#faq" },
          ]}
        />
        <FooterCol
          title="Aurora"
          links={[
            { label: "Stack", href: "/#stack" },
            { label: "How it works", href: "/#how" },
            { label: "Why Cardano", href: "/#cardano" },
            { label: "Trust", href: "/#trust" },
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
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
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
