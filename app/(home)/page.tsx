import type { ComponentType, CSSProperties, ReactNode } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import ScrollProgress from "./_components/ScrollProgress";

import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  Boxes,
  FileSearch,
  FileText,
  Fingerprint,
  KeyRound,
  LayoutDashboard,
  Menu,
  Network,
  RefreshCw,
  ScanLine,
  Search,
  Sparkles,
  TrendingUp,
} from "lucide-react";

type IconType = ComponentType<{
  className?: string;
  strokeWidth?: number;
  style?: CSSProperties;
}>;

/* Dawn palette — one accent, deep navy base */
const BG = "#050B14";
const INK = "#F4EFE3";
const DIM = "rgba(244,239,227,0.62)";
const FAINT = "rgba(244,239,227,0.40)";
const HAIR = "rgba(244,239,227,0.10)";
const GOLD = "#F6B84B";
const GOLD_LIGHT = "#FFCC73";
const GOLD_DEEP = "#D99A2B";

const CONTACT = "mailto:hello@fairway.xyz?subject=Aurora%20%E2%80%94%20partnership";

export const metadata: Metadata = {
  title: "Aurora - Open credit market infrastructure on Cardano",
  description:
    "Aurora is the open verification and discovery layer for institutional credit on Cardano — a metadata standard, a verification indexer, and a live lending pilot with Ethiopian SACCOs. Built by Fairway with Fallen Icarus and Sundial.",
};

export default function AuroraPage() {
  return (
    <div
      className="min-h-screen font-sans antialiased"
      style={{ background: BG, color: INK }}
    >
      <ScrollProgress />
      <Grain />
      <Nav />
      <main>
        <Hero />
        <SignalTicker />
        <Phases />
        <Lifecycle />
        <Pilot />
        <WhyNow />
        <Trust />
        <Answers />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Fixed film-grain overlay                                          */
/* ---------------------------------------------------------------- */

function Grain() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[55] opacity-[0.05] mix-blend-soft-light"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.7'/%3E%3C/svg%3E\")",
      }}
    />
  );
}

/* ---------------------------------------------------------------- */
/* Nav                                                               */
/* ---------------------------------------------------------------- */

function Nav() {
  const links = [
    { href: "#phases", label: "Phases" },
    { href: "#lifecycle", label: "How it works" },
    { href: "#pilot", label: "Pilot" },
    { href: "#why", label: "Why now" },
    { href: "#trust", label: "Trust" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between rounded-full border border-white/10 bg-[#040910]/62 px-4 py-2.5 shadow-[0_18px_70px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:px-5">
        <Link
          href="/"
          aria-label="Aurora home"
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
          <span
            className="ml-1 hidden border-l pl-3 text-[10px] font-bold uppercase tracking-[0.22em] sm:inline"
            style={{ borderColor: "rgba(255,204,115,0.3)", color: GOLD_LIGHT }}
          >
            / Platform
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 text-[12px] font-semibold uppercase lg:flex"
          style={{ color: DIM }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2.5 transition duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/6 hover:text-[#ffcc73]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#cta"
            className="group hidden min-h-10 items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[#ffe3a4] via-[#ffc95a] to-[#d99a2b] py-1 pl-5 pr-1.5 text-[12px] font-bold uppercase text-[#130b02] shadow-[0_14px_44px_rgba(246,184,75,0.22)] transition duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:from-[#fff0c9] hover:to-[#f6b84b] active:scale-[0.98] sm:inline-flex"
          >
            Get early access
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#130b02]/12 transition duration-300 group-hover:-translate-y-[1px] group-hover:translate-x-[1px]">
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
            </span>
          </a>
          <details className="group relative lg:hidden">
            <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-white/12 bg-white/5 text-[#ffcc73] transition hover:border-[#ffcc73]/60 hover:bg-[#ffcc73]/10 [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Open navigation</span>
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            </summary>
            <div className="absolute right-0 top-12 w-[240px] rounded-[16px] border border-white/12 bg-[#040910]/96 p-2 shadow-[0_24px_80px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block rounded-[10px] px-4 py-3 text-[12px] font-semibold uppercase transition hover:bg-white/6 hover:text-[#ffcc73]"
                  style={{ color: DIM }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#cta"
                className="mt-2 flex min-h-10 items-center justify-center gap-1.5 rounded-[10px] bg-gradient-to-b from-[#ffe3a4] via-[#ffc95a] to-[#d99a2b] px-4 text-[12px] font-bold uppercase text-[#130b02]"
              >
                Get early access
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
              </a>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

/* ---------------------------------------------------------------- */
/* Hero — full-bleed dawn, left-anchored, stat strip                 */
/* ---------------------------------------------------------------- */

function Hero() {
  const stats = [
    { value: "Live", unit: "", label: "Pilot lending in Ethiopia" },
    { value: "Open", unit: "Apache 2.0", label: "Everything open source" },
    { value: "eUTXO", unit: "", label: "Robust Cardano settlement" },
    { value: "~$100K", unit: "USDM", label: "Revolving pilot liquidity" },
  ];

  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/brand/hero-op.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B14]/94 via-[#050B14]/55 to-[#050B14]/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050B14]/55 via-transparent to-[#050B14]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100dvh] w-full max-w-[1320px] flex-col px-5 pb-10 pt-32 sm:px-8 lg:px-12 lg:pt-36">
        <div className="flex flex-1 flex-col justify-center">
          <div className="max-w-[720px]">
            <div
              className="inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-xl"
              style={{
                borderColor: "rgba(255,204,115,0.32)",
                background: "rgba(4,9,16,0.5)",
                color: GOLD_LIGHT,
              }}
            >
              <span className="h-1 w-1 rounded-full bg-[#ffcc73] shadow-[0_0_8px_rgba(255,204,115,0.9)]" />
              Built on Cardano · Live pilot
            </div>

            <h1 className="mt-7 font-serif text-[42px] font-normal leading-[1.02] tracking-[-0.02em] drop-shadow-[0_14px_42px_rgba(0,0,0,0.65)] sm:text-[58px] lg:text-[68px]">
              <span className="block">Open credit markets,</span>
              <span className="block">
                from{" "}
                <em className="italic" style={{ color: GOLD_LIGHT }}>
                  first light.
                </em>
              </span>
            </h1>

            <p
              className="mt-6 max-w-[520px] text-[16px] leading-[1.7] drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]"
              style={{ color: "rgba(244,239,227,0.85)" }}
            >
              Aurora is the verification and discovery layer for institutional
              credit on Cardano — and we&apos;re proving it right now with real
              loans through Ethiopian savings cooperatives.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#lifecycle"
                className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-gradient-to-b from-[#ffe3a4] via-[#ffc95a] to-[#d99a2b] py-1 pl-7 pr-1.5 text-[13px] font-bold uppercase text-[#130b02] shadow-[0_20px_70px_rgba(246,184,75,0.28)] transition duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 hover:from-[#fff0c9] hover:to-[#f6b84b] active:scale-[0.98]"
              >
                See how it works
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#130b02]/12 transition duration-300 group-hover:-translate-y-[1px] group-hover:translate-x-[1px]">
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </span>
              </a>
              <a
                href="#pilot"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-7 text-[13px] font-bold uppercase backdrop-blur transition duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#f6b84b]/10 active:scale-[0.98]"
                style={{ borderColor: "rgba(246,184,75,0.55)", color: GOLD_LIGHT }}
              >
                See the pilot
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>

            <p
              className="mt-8 text-[11px] font-semibold uppercase tracking-[0.2em]"
              style={{ color: FAINT }}
            >
              Built by Fairway · with Fallen Icarus &amp; Sundial
            </p>
          </div>
        </div>

        {/* Stat strip */}
        <div
          className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-[20px] border lg:grid-cols-4"
          style={{ borderColor: HAIR, background: HAIR }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col gap-2 bg-[#060d18]/78 px-6 py-6 backdrop-blur-xl"
            >
              <p
                className="font-mono text-[24px] leading-none tracking-tight sm:text-[28px]"
                style={{ fontVariantNumeric: "tabular-nums" }}
              >
                {s.value}
                {s.unit ? (
                  <span className="ml-1.5 text-[13px]" style={{ color: GOLD }}>
                    {s.unit}
                  </span>
                ) : null}
              </p>
              <p
                className="text-[11px] font-semibold uppercase tracking-[0.16em]"
                style={{ color: FAINT }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Consortium / ecosystem ticker                                     */
/* ---------------------------------------------------------------- */

function SignalTicker() {
  const items: { label: string; logo?: string; invert?: boolean }[] = [
    { label: "Fairway", logo: "/brand/fairway-logo.png" },
    { label: "Fallen Icarus" },
    { label: "Sundial", logo: "/brand/sundial.png", invert: true },
    { label: "Built on Cardano", logo: "/brand/cardano.png" },
    { label: "CIP-89 beacon tokens" },
    { label: "Veridian credentials" },
    { label: "Midnight-aligned privacy", logo: "/brand/midnight.png" },
    { label: "USDM settlement" },
    { label: "Encryptus — regulated rails" },
  ];
  const row = items.concat(items);

  return (
    <section
      aria-label="Consortium and ecosystem"
      className="relative overflow-hidden border-y py-5"
      style={{ borderColor: HAIR }}
    >
      <div className="sundown-marquee flex w-max items-center gap-3 pr-3">
        {row.map((item, i) => (
          <span
            key={`${item.label}-${i}`}
            aria-hidden={i >= items.length}
            className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em]"
            style={{ borderColor: HAIR, color: DIM, background: "rgba(255,255,255,0.03)" }}
          >
            {item.logo ? (
              <Image
                src={item.logo}
                alt=""
                width={28}
                height={28}
                className={`h-4 w-4 object-contain ${item.invert ? "opacity-80 brightness-0 invert" : ""}`}
              />
            ) : (
              <span className="h-1 w-1 rounded-full" style={{ background: GOLD }} />
            )}
            {item.label}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Two phases — build, then prove                                    */
/* ---------------------------------------------------------------- */

function Phases() {
  return (
    <Section id="phases">
      <SectionHeader
        num="01"
        eyebrow="Two phases"
        title={
          <>
            Build the rails.{" "}
            <em className="italic" style={{ color: GOLD_LIGHT }}>
              Then prove them.
            </em>
          </>
        }
      />

      <div className="mt-12 grid gap-4 lg:grid-cols-[1.15fr_1fr]">
        {/* Phase 1 — infrastructure, code-led */}
        <article
          className="rounded-[24px] border p-1.5"
          style={{ borderColor: HAIR, background: "rgba(255,255,255,0.02)" }}
        >
          <div className="flex h-full flex-col rounded-[calc(24px-0.375rem)] bg-[#070f1c] p-7 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] sm:p-9">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: GOLD }}>
              Phase 1 · Shipping now
            </p>
            <h3 className="mt-3 font-serif text-[28px] leading-tight sm:text-[32px]">
              Open infrastructure
            </h3>
            <p className="mt-3 max-w-[440px] text-[14px] leading-[1.7]" style={{ color: DIM }}>
              Identity and compliance proofs attach to Loan Request UTxOs as
              optional transaction metadata. An open indexer verifies them
              off-chain. We utilize the eUTXO model, so base contracts never
              change.
            </p>

            <div
              className="mt-7 overflow-hidden rounded-[14px] border font-mono text-[12.5px] leading-[1.8]"
              style={{ borderColor: HAIR, background: "#040a13" }}
            >
              <div
                className="flex items-center justify-between border-b px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em]"
                style={{ borderColor: HAIR, color: FAINT }}
              >
                loan-request.metadata
                <span className="inline-flex items-center gap-1.5" style={{ color: GOLD }}>
                  <span className="sundown-live-pulse relative h-1.5 w-1.5 rounded-full bg-current" />
                  verified
                </span>
              </div>
              <pre className="overflow-x-auto px-4 py-4" style={{ color: DIM }}>
                {`{\n  "std":    `}
                <span style={{ color: GOLD_LIGHT }}>&quot;aurora.v1&quot;</span>
                {`,\n  "beacon": `}
                <span style={{ color: GOLD_LIGHT }}>&quot;cip-89&quot;</span>
                {`,\n  "proof":  `}
                <span style={{ color: GOLD_LIGHT }}>&quot;zk:cred…9c4d&quot;</span>
                {`,\n  "status": `}
                <span style={{ color: GOLD_LIGHT }}>&quot;verified&quot;</span>
                {`\n}`}
              </pre>
            </div>

            <ul className="mt-7 grid gap-2.5 text-[13px] sm:grid-cols-2" style={{ color: DIM }}>
              {[
                "Versioned metadata standard",
                "Off-chain verification indexer",
                "Query API for discovery",
                "Integration docs & tooling",
              ].map((d) => (
                <li key={d} className="flex items-center gap-2.5">
                  <BadgeCheck className="h-4 w-4 shrink-0" strokeWidth={1.5} style={{ color: GOLD }} />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </article>

        {/* Phase 2 — pilot, image-led */}
        <article
          className="rounded-[24px] border p-1.5"
          style={{ borderColor: HAIR, background: "rgba(255,255,255,0.02)" }}
        >
          <div className="relative flex h-full min-h-[420px] flex-col justify-end overflow-hidden rounded-[calc(24px-0.375rem)]">
            <Image
              src="/brand/Sundown-hero.png"
              alt="A sundial monument at dusk overlooking the sea"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/35 to-transparent" />
            <div className="relative p-7 sm:p-9">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: GOLD }}>
                Phase 2 · In pilot
              </p>
              <h3 className="mt-3 font-serif text-[28px] leading-tight sm:text-[32px]">
                Real lending, on-chain
              </h3>
              <p className="mt-3 text-[14px] leading-[1.7]" style={{ color: "rgba(244,239,227,0.78)" }}>
                A live pilot with Ethiopian SACCOs — regulated, member-owned
                lenders. Every funding event, repayment and credit history
                lands on-chain.
              </p>
              <div
                className="mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-[12px] border"
                style={{ borderColor: HAIR, background: HAIR }}
              >
                {[
                  { v: "3+", l: "SACCOs under MOU" },
                  { v: "3", l: "Deployment rounds" },
                  { v: "ETB", l: "Local disbursement" },
                ].map((s) => (
                  <div key={s.l} className="bg-[#060d18]/85 px-3 py-3.5 backdrop-blur">
                    <p className="font-mono text-[18px] leading-none" style={{ fontVariantNumeric: "tabular-nums" }}>
                      {s.v}
                    </p>
                    <p className="mt-1.5 text-[9.5px] font-semibold uppercase tracking-[0.14em]" style={{ color: FAINT }}>
                      {s.l}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- */
/* Loan lifecycle rail                                               */
/* ---------------------------------------------------------------- */

const LIFECYCLE_NODES: {
  icon: IconType;
  label: string;
  sub: string;
  highlight?: boolean;
  cx: number;
  cy: number;
}[] = [
  { icon: FileText, label: "Loan Request UTxO", sub: "SACCO publishes on-chain", cx: 100, cy: 110 },
  { icon: Fingerprint, label: "Proof attached", sub: "ZK credential as metadata", highlight: true, cx: 305, cy: 235 },
  { icon: ScanLine, label: "Indexer verifies", sub: "Off-chain, open source", highlight: true, cx: 510, cy: 110 },
  { icon: Search, label: "Discovered & funded", sub: "Filtered by capital providers", cx: 715, cy: 235 },
  { icon: Banknote, label: "Settled locally", sub: "USDM to ETB, regulated rails", cx: 920, cy: 110 },
  { icon: BadgeCheck, label: "Repaid & recorded", sub: "Portable credit history", cx: 1110, cy: 235 },
];

const LIFECYCLE_PATH = LIFECYCLE_NODES.reduce((acc, node, i) => {
  if (i === 0) return `M ${node.cx} ${node.cy}`;
  const prev = LIFECYCLE_NODES[i - 1];
  const midX = (prev.cx + node.cx) / 2;
  return `${acc} C ${midX} ${prev.cy}, ${midX} ${node.cy}, ${node.cx} ${node.cy}`;
}, "");

function Lifecycle() {
  return (
    <Section id="lifecycle" glow>
      <SectionHeader
        num="02"
        eyebrow="How it works"
        title={
          <>
            One loan,{" "}
            <em className="italic" style={{ color: GOLD_LIGHT }}>
              end to end.
            </em>
          </>
        }
        copy="Verification is optional infrastructure — the base market stays permissionless for everyone else."
      />

      <div
        className="reveal-up mt-12 overflow-x-auto rounded-[24px] border"
        style={{ borderColor: HAIR, background: "rgba(255,255,255,0.02)" }}
      >
        <svg
          viewBox="0 0 1210 340"
          role="img"
          aria-label="Loan lifecycle: a loan request UTxO gets a zero-knowledge proof attached, the indexer verifies it, capital providers discover and fund it, settlement happens in Ethiopian Birr, and repayment is recorded on-chain."
          className="min-w-[900px] p-4"
        >
          <defs>
            <linearGradient id="auroraFlowGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor={GOLD_DEEP} stopOpacity="0.25" />
              <stop offset="50%" stopColor={GOLD} stopOpacity="0.85" />
              <stop offset="100%" stopColor={GOLD_DEEP} stopOpacity="0.25" />
            </linearGradient>
            <radialGradient id="auroraTokenGrad">
              <stop offset="0%" stopColor={GOLD_LIGHT} />
              <stop offset="100%" stopColor={GOLD_DEEP} />
            </radialGradient>
          </defs>

          <path d={LIFECYCLE_PATH} fill="none" stroke="rgba(244,239,227,0.08)" strokeWidth="1.5" />
          <path
            d={LIFECYCLE_PATH}
            fill="none"
            stroke="url(#auroraFlowGrad)"
            strokeWidth="1.5"
            className="sundown-dash-travel"
          />

          {[0, 2.1, 4.2].map((delay, i) => (
            <circle
              key={delay}
              r={6 - i}
              fill="url(#auroraTokenGrad)"
              opacity={1 - i * 0.2}
              className="sundown-token-pulse"
            >
              <animateMotion dur="6.3s" begin={`${delay}s`} repeatCount="indefinite" path={LIFECYCLE_PATH} />
            </circle>
          ))}

          {LIFECYCLE_NODES.map((node, i) => (
            <g key={node.label} transform={`translate(${node.cx}, ${node.cy})`}>
              <circle
                r="34"
                fill="#070f1c"
                stroke={node.highlight ? "rgba(246,184,75,0.55)" : "rgba(244,239,227,0.14)"}
                strokeWidth="1.5"
              />
              {node.highlight ? (
                <circle r="42" fill="none" stroke="rgba(246,184,75,0.18)" strokeWidth="1" />
              ) : null}
              <foreignObject x="-12" y="-12" width="24" height="24">
                <node.icon
                  className="h-6 w-6"
                  strokeWidth={1.5}
                  style={{ color: node.highlight ? GOLD_LIGHT : "rgba(244,239,227,0.75)" }}
                />
              </foreignObject>
              <text y={i % 2 === 0 ? -58 : 66} textAnchor="middle" fill={INK} fontSize="14.5" fontWeight="600">
                {node.label}
              </text>
              <text y={i % 2 === 0 ? -40 : 84} textAnchor="middle" fill={FAINT} fontSize="11.5">
                {node.sub}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- */
/* Pilot — Ethiopia, progressive deployment                          */
/* ---------------------------------------------------------------- */

function Pilot() {
  const rounds = [
    { name: "Round 1", share: 30, grad: GOLD_LIGHT, note: "Mainnet live · first SACCOs onboarded" },
    { name: "Round 2", share: 30, grad: GOLD, note: "Expands as Round 1 repays" },
    { name: "Round 3", share: 40, grad: GOLD_DEEP, note: "Full rollout on proven repayment" },
  ];

  return (
    <Section id="pilot">
      <SectionHeader
        num="03"
        eyebrow="The pilot · Ethiopia"
        title={
          <>
            Capital that{" "}
            <em className="italic" style={{ color: GOLD_LIGHT }}>
              proves itself.
            </em>
          </>
        }
        copy="Pilot liquidity is lent, not spent — repaid capital recycles into the next round, and every tranche must earn the one after it."
      />

      <div className="mt-12 grid gap-4 lg:grid-cols-[1fr_1.15fr]">
        {/* Left: who lends */}
        <div
          className="flex flex-col justify-between rounded-[24px] border p-7 sm:p-9"
          style={{ borderColor: HAIR, background: "rgba(255,255,255,0.02)" }}
        >
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: GOLD }}>
              Who does the lending
            </p>
            <h3 className="mt-3 font-serif text-[26px] leading-tight sm:text-[30px]">
              SACCOs stay the lender. Aurora stays the rails.
            </h3>
            <p className="mt-4 text-[14px] leading-[1.75]" style={{ color: DIM }}>
              Savings and Credit Cooperatives already underwrite, service and
              collect. Aurora connects them to digital capital — borrowers
              get local-currency loans and never touch crypto.
            </p>
          </div>
          <ul className="mt-8 space-y-3 text-[13px]" style={{ color: DIM }}>
            {[
              ["Underwriting & servicing", "Stays with the SACCO"],
              ["Verification & discovery", "Aurora metadata + indexer"],
              ["Settlement", "USDM to ETB via Encryptus"],
              ["Oversight", "On-chain + dRep dashboard"],
            ].map(([k, v]) => (
              <li
                key={k}
                className="flex items-center justify-between gap-4 border-t pt-3"
                style={{ borderColor: HAIR }}
              >
                <span className="font-semibold" style={{ color: INK }}>
                  {k}
                </span>
                <span className="text-right">{v}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: progressive rounds */}
        <div
          className="rounded-[24px] border p-7 sm:p-9"
          style={{ borderColor: HAIR, background: "rgba(255,255,255,0.02)" }}
        >
          <div className="flex items-baseline justify-between gap-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: GOLD }}>
              Progressive deployment
            </p>
            <p className="font-mono text-[13px]" style={{ color: FAINT, fontVariantNumeric: "tabular-nums" }}>
              ≈$100K revolving liquidity
            </p>
          </div>

          <div className="mt-8 space-y-6">
            {rounds.map((r) => (
              <div key={r.name}>
                <div className="flex items-baseline justify-between gap-3">
                  <p className="text-[13px] font-semibold uppercase tracking-[0.14em]">
                    {r.name}
                    <span
                      className="ml-2 font-mono text-[12px]"
                      style={{ color: GOLD, fontVariantNumeric: "tabular-nums" }}
                    >
                      {r.share}%
                    </span>
                  </p>
                </div>
                <div className="mt-2.5 h-3 overflow-hidden rounded-full" style={{ background: "rgba(244,239,227,0.07)" }}>
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${r.share}%`,
                      background: `linear-gradient(90deg, ${GOLD_DEEP}, ${r.grad})`,
                      boxShadow: "0 0 18px rgba(246,184,75,0.35)",
                    }}
                  />
                </div>
                <p className="mt-2 text-[12px]" style={{ color: FAINT }}>
                  {r.note}
                </p>
              </div>
            ))}
          </div>

          <div
            className="mt-8 flex items-start gap-3 rounded-[14px] border px-4 py-3.5 text-[13px] leading-[1.6]"
            style={{
              borderColor: "rgba(246,184,75,0.28)",
              background: "rgba(246,184,75,0.06)",
              color: DIM,
            }}
          >
            <RefreshCw className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.5} style={{ color: GOLD }} />
            Repayments recycle into the next round — capital is lent, not spent.
            Every tranche has to earn the one after it before it deploys.
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- */
/* Why now — the opportunity (investors & dReps)                     */
/* ---------------------------------------------------------------- */

function WhyNow() {
  const cards: { icon: IconType; title: string; copy: string }[] = [
    {
      icon: Sparkles,
      title: "A real product, already live",
      copy: "Reference infrastructure plus a live lending pilot — not a whitepaper. The rails work today.",
    },
    {
      icon: Network,
      title: "An open standard with network effects",
      copy: "The metadata standard is open. Every wallet, indexer and lender that adopts it compounds value for the whole Cardano ecosystem.",
    },
    {
      icon: TrendingUp,
      title: "Unlocks institutional capital",
      copy: "Verified discovery is the gate serious lenders need before they deploy on-chain. Aurora opens it.",
    },
    {
      icon: Boxes,
      title: "Robust by eUTXO",
      copy: "We utilize Cardano's eUTXO model for deterministic settlement, with proofs riding beside each loan UTxO — no side system to drift out of sync.",
    },
  ];

  return (
    <Section id="why">
      <SectionHeader
        num="04"
        eyebrow="Why now"
        title={
          <>
            On-chain credit is ready{" "}
            <em className="italic" style={{ color: GOLD_LIGHT }}>
              for real capital.
            </em>
          </>
        }
        copy="The lending logic already runs on-chain. What's missing is the trust layer that lets verified lenders participate with confidence — that's what we're building."
      />

      <div
        className="reveal-up-stagger mt-12 grid gap-px overflow-hidden rounded-[24px] border sm:grid-cols-2"
        style={{ borderColor: HAIR, background: HAIR }}
      >
        {cards.map((c) => (
          <article
            key={c.title}
            className="group bg-[#060d18] p-7 transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#081221] sm:p-9"
          >
            <c.icon
              className="h-5 w-5 transition duration-500 group-hover:-translate-y-0.5"
              strokeWidth={1.5}
              style={{ color: GOLD }}
            />
            <h3 className="mt-5 font-serif text-[22px] leading-tight sm:text-[24px]">
              {c.title}
            </h3>
            <p className="mt-2.5 text-[13.5px] leading-[1.7]" style={{ color: DIM }}>
              {c.copy}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href="#cta"
          className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-gradient-to-b from-[#ffe3a4] via-[#ffc95a] to-[#d99a2b] py-1 pl-7 pr-1.5 text-[13px] font-bold uppercase text-[#130b02] shadow-[0_18px_50px_rgba(246,184,75,0.24)] transition duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 hover:from-[#fff0c9] hover:to-[#f6b84b] active:scale-[0.98]"
        >
          Partner with us
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#130b02]/12 transition duration-300 group-hover:-translate-y-[1px] group-hover:translate-x-[1px]">
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </span>
        </a>
        <Link
          href="/#stack"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-7 text-[13px] font-bold uppercase backdrop-blur transition duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#f6b84b]/10 active:scale-[0.98]"
          style={{ borderColor: "rgba(246,184,75,0.55)", color: GOLD_LIGHT }}
        >
          Explore the stack
          <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
        </Link>
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- */
/* Trust & transparency                                              */
/* ---------------------------------------------------------------- */

function Trust() {
  const tiles: { icon: IconType; title: string; copy: string }[] = [
    {
      icon: Boxes,
      title: "Open by default",
      copy: "Everything ships open source under Apache 2.0 — no gatekeeper, no lock-in.",
    },
    {
      icon: BadgeCheck,
      title: "On-chain & verifiable",
      copy: "Every funding event and repayment is auditable by anyone, at any time.",
    },
    {
      icon: LayoutDashboard,
      title: "dRep & investor dashboard",
      copy: "Live loan status, deployments and repayments — verifiable by anyone.",
    },
    {
      icon: KeyRound,
      title: "Non-custodial",
      copy: "Proofs and settlement never route custody through the consortium.",
    },
    {
      icon: FileSearch,
      title: "Independent audits",
      copy: "Financial reconciliation published openly, not on request.",
    },
    {
      icon: RefreshCw,
      title: "Portable credit histories",
      copy: "An on-chain repayment record that compounds trust across the market.",
    },
  ];

  return (
    <Section id="trust" glow>
      <SectionHeader
        num="05"
        eyebrow="Trust & transparency"
        title={
          <>
            Verify,{" "}
            <em className="italic" style={{ color: GOLD_LIGHT }}>
              don&apos;t trust.
            </em>
          </>
        }
      />

      <div
        className="reveal-up-stagger mt-12 grid gap-px overflow-hidden rounded-[24px] border sm:grid-cols-2 lg:grid-cols-3"
        style={{ borderColor: HAIR, background: HAIR }}
      >
        {tiles.map((t) => (
          <article
            key={t.title}
            className="group bg-[#060d18] p-7 transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#081221]"
          >
            <t.icon
              className="h-5 w-5 transition duration-500 group-hover:-translate-y-0.5"
              strokeWidth={1.5}
              style={{ color: GOLD }}
            />
            <h3 className="mt-5 text-[15px] font-semibold">{t.title}</h3>
            <p className="mt-2 text-[13px] leading-[1.65]" style={{ color: DIM }}>
              {t.copy}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- */
/* Straight answers                                                  */
/* ---------------------------------------------------------------- */

function Answers() {
  const qa: { q: string; a: string }[] = [
    {
      q: "Is this a private lending platform?",
      a: "No. Everything ships open source under Apache 2.0, and no consortium member gets preferential rights to operate or commercialize it.",
    },
    {
      q: "Does it change Cardano's lending contracts?",
      a: "No. Proofs travel as optional transaction metadata; verification runs in an off-chain indexer. The base market stays permissionless — that's a core part of what makes it robust.",
    },
    {
      q: "Who provides the lending capital?",
      a: "Capital providers fund verified loans directly; SACCOs underwrite and service them. Aurora is the rails in between and never takes custody.",
    },
    {
      q: "What's live today?",
      a: "The metadata standard, the verification indexer, discovery APIs and a live SACCO pilot — reusable by any builder, in any jurisdiction.",
    },
  ];

  return (
    <Section id="answers">
      <SectionHeader
        num="06"
        eyebrow="Straight answers"
        title={
          <>
            Asked first,{" "}
            <em className="italic" style={{ color: GOLD_LIGHT }}>
              answered plainly.
            </em>
          </>
        }
      />

      <dl className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
        {qa.map((item) => (
          <div key={item.q} className="border-t pt-6" style={{ borderColor: HAIR }}>
            <dt className="font-serif text-[20px] leading-snug sm:text-[22px]">{item.q}</dt>
            <dd className="mt-3 text-[14px] leading-[1.75]" style={{ color: DIM }}>
              {item.a}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

/* ---------------------------------------------------------------- */
/* Final CTA                                                         */
/* ---------------------------------------------------------------- */

function FinalCTA() {
  return (
    <section id="cta" className="px-5 pb-24 pt-6 sm:px-8 lg:px-12">
      <div
        className="relative mx-auto max-w-[1240px] overflow-hidden rounded-[28px] border p-1.5"
        style={{ borderColor: "rgba(246,184,75,0.25)", background: "rgba(255,255,255,0.02)" }}
      >
        <div className="relative overflow-hidden rounded-[calc(28px-0.375rem)]">
          <Image
            src="/brand/hero-ls.png"
            alt=""
            fill
            sizes="(min-width: 1280px) 1240px, 100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050B14]/88 via-[#050B14]/50 to-[#050B14]/15" />
          <div className="relative px-8 py-16 sm:px-14 sm:py-24">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: GOLD_LIGHT }}>
              For dReps, investors &amp; builders
            </p>
            <h2 className="mt-4 max-w-[560px] font-serif text-[34px] leading-[1.06] sm:text-[46px]">
              Let&apos;s build robust credit markets{" "}
              <em className="italic" style={{ color: GOLD_LIGHT }}>
                in the open.
              </em>
            </h2>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={CONTACT}
                className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-gradient-to-b from-[#ffe3a4] via-[#ffc95a] to-[#d99a2b] py-1 pl-7 pr-1.5 text-[13px] font-bold uppercase text-[#130b02] shadow-[0_20px_70px_rgba(246,184,75,0.3)] transition duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 hover:from-[#fff0c9] hover:to-[#f6b84b] active:scale-[0.98]"
              >
                Talk to the team
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#130b02]/12 transition duration-300 group-hover:-translate-y-[1px] group-hover:translate-x-[1px]">
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </span>
              </a>
              <Link
                href="/#stack"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-7 text-[13px] font-bold uppercase backdrop-blur transition duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#f6b84b]/10 active:scale-[0.98]"
                style={{ borderColor: "rgba(246,184,75,0.55)", color: GOLD_LIGHT }}
              >
                Explore the Aurora stack
              </Link>
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
    <footer className="border-t px-5 py-14 sm:px-8 lg:px-12" style={{ borderColor: HAIR }}>
      <div className="mx-auto grid max-w-[1240px] gap-10 md:grid-cols-12">
        <div className="md:col-span-6">
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src="/brand/Aurora-logo-modified.png"
              alt="Aurora"
              width={56}
              height={56}
              className="h-12 w-12 rounded-full object-contain"
            />
            <span className="font-serif text-[22px] tracking-[0.24em]">AURORA</span>
            <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: GOLD }}>
              / Platform
            </span>
          </Link>
          <p className="mt-5 max-w-[420px] text-[13.5px] leading-[1.75]" style={{ color: DIM }}>
            Open infrastructure for institutional credit markets on Cardano.
            Built by Fairway with Fallen Icarus and Sundial.
          </p>
          <p className="mt-8 text-[12px]" style={{ color: FAINT }}>
            © 2026 Aurora / Fairway. All rights reserved.
          </p>
        </div>
        <FooterCol
          title="Explore"
          links={[
            { label: "Phases", href: "#phases" },
            { label: "How it works", href: "#lifecycle" },
            { label: "Pilot", href: "#pilot" },
            { label: "Why now", href: "#why" },
            { label: "Trust", href: "#trust" },
            { label: "Answers", href: "#answers" },
          ]}
        />
        <FooterCol
          title="Aurora"
          links={[
            { label: "Stack", href: "/#stack" },
            { label: "How it works", href: "/#how" },
            { label: "Why Cardano", href: "/#cardano" },
          ]}
        />
        <FooterCol
          title="Ecosystem"
          links={[
            { label: "fairway.global", href: "https://www.fairway.global" },
            { label: "Privacy", href: "#" },
            { label: "Terms", href: "#" },
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
      <h3 className="text-[12px] font-semibold uppercase tracking-[0.14em]" style={{ color: FAINT }}>
        {title}
      </h3>
      <ul className="mt-5 space-y-3">
        {links.map((link) => {
          const isInternal = link.href.startsWith("/") && !link.href.startsWith("//");
          const className = "text-[13.5px] transition hover:text-[#ffcc73]";
          return (
            <li key={link.label}>
              {isInternal ? (
                <Link href={link.href} className={className} style={{ color: DIM }}>
                  {link.label}
                </Link>
              ) : (
                <a
                  href={link.href}
                  className={className}
                  style={{ color: DIM }}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
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
  glow = false,
}: {
  id?: string;
  children: ReactNode;
  glow?: boolean;
}) {
  return (
    <section id={id} className="relative px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      {glow ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 42% at 50% 8%, rgba(246,184,75,0.07), transparent 70%)",
          }}
        />
      ) : null}
      <div className="relative mx-auto max-w-[1240px]">{children}</div>
    </section>
  );
}

function SectionHeader({
  num,
  eyebrow,
  title,
  copy,
}: {
  num: string;
  eyebrow: string;
  title: ReactNode;
  copy?: string;
}) {
  return (
    <div className="reveal-up-soft grid gap-6 lg:grid-cols-[1fr_0.85fr] lg:items-end lg:gap-12">
      <div>
        <p
          className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em]"
          style={{ color: GOLD }}
        >
          <span className="font-serif text-[13px] tracking-[0.06em]" style={{ color: FAINT }}>
            {num}
          </span>
          <span aria-hidden className="h-px w-8" style={{ background: "rgba(246,184,75,0.4)" }} />
          {eyebrow}
        </p>
        <h2
          className="mt-4 font-serif text-[32px] font-normal leading-[1.08] tracking-[-0.01em] sm:text-[42px] lg:text-[48px]"
          style={{ textWrap: "balance" }}
        >
          {title}
        </h2>
      </div>
      {copy ? (
        <p className="max-w-[440px] text-[14.5px] leading-[1.75]" style={{ color: DIM }}>
          {copy}
        </p>
      ) : null}
    </div>
  );
}
