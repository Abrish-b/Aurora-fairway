import type { ComponentType, CSSProperties, ReactNode } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import ScrollProgress from "./_components/ScrollProgress";
import VideoBackdrop from "./_components/VideoBackdrop";
import FragmentationDiagram from "./_components/FragmentationDiagram";
import DeliverablesSplit from "./_components/DeliverablesSplit";
import HowStepper from "./_components/HowStepper";
import QueryPlayground from "./_components/QueryPlayground";
import EcosystemDiagram from "./_components/EcosystemDiagram";
import MilestoneExplorer from "./_components/MilestoneExplorer";
import { DIM, FAINT, GOLD, GOLD_HAIR, GOLD_LIGHT, HAIR, INK } from "./_components/theme";

import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  KeyRound,
  Landmark,
  LayoutDashboard,
  Menu,
} from "lucide-react";

type IconType = ComponentType<{
  className?: string;
  strokeWidth?: number;
  style?: CSSProperties;
}>;

const BG = "#050B14";

const CONTACT =
  "mailto:hello@fairway.xyz?subject=Aurora%20%E2%80%94%20open%20credit-market%20infrastructure";

/* Outbound destinations. Swap the anchors for published URLs once the Treasury
   proposal and the public repositories are live. */
const LINKS = {
  proposal: "#governance",
  architecture: "#how",
  development: CONTACT,
};

export const metadata: Metadata = {
  title: {
    absolute:
      "Aurora — Open infrastructure for institutional credit markets on Cardano",
  },
  description:
    "Aurora is the shared metadata, verification, discovery, filtering, and API layer that makes independent Cardano credit opportunities discoverable and easier to evaluate. Open standards, open APIs, and reference implementations — not a lender, protocol, or custody platform.",
  openGraph: {
    title:
      "Aurora — Open infrastructure for institutional credit markets on Cardano",
    description:
      "Shared metadata, verification, discovery, filtering, and API infrastructure for Cardano credit markets. Apache 2.0, protocol independent, independently operable.",
    siteName: "Aurora by Fairway",
    type: "website",
  },
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
        <Problem />
        <Deliverables />
        <HowItWorks />
        <CapitalDiscovery />
        <Ecosystem />
        <Governance />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

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

const NAV_LINKS = [
  { href: "#problem", label: "Why" },
  { href: "#delivers", label: "What" },
  { href: "#how", label: "How" },
  { href: "#discovery", label: "Try it" },
  { href: "#governance", label: "Governance" },
];

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3.5">
      <div className="mx-auto flex w-full max-w-[1140px] items-center justify-between rounded-full border border-white/10 bg-[#040910]/62 px-4 py-2 shadow-[0_18px_70px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
        <a
          href="#top"
          aria-label="Aurora home"
          className="inline-flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffcc73]"
        >
          <Image
            src="/brand/aurora-nav.png"
            alt=""
            width={944}
            height={137}
            className="h-6 w-auto object-contain sm:h-7"
            priority
          />
        </a>

        <nav
          className="hidden items-center gap-0.5 text-[11px] font-semibold uppercase tracking-[0.04em] lg:flex"
          style={{ color: DIM }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 transition duration-300 ease-out hover:bg-white/6 hover:text-[#ffcc73]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={LINKS.proposal}
            className="group hidden min-h-9 items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[#ffe3a4] via-[#ffc95a] to-[#d99a2b] py-1 pl-4 pr-1.5 text-[11px] font-bold uppercase text-[#130b02] shadow-[0_14px_44px_rgba(246,184,75,0.22)] transition duration-300 ease-out hover:from-[#fff0c9] hover:to-[#f6b84b] active:scale-[0.98] sm:inline-flex"
          >
            Read the Proposal
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#130b02]/12 transition duration-300 group-hover:translate-x-px">
              <ArrowRight className="h-3 w-3" strokeWidth={2} />
            </span>
          </a>
          <details className="group relative lg:hidden">
            <summary className="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-full border border-white/12 bg-white/5 text-[#ffcc73] transition hover:border-[#ffcc73]/60 [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Open navigation</span>
              <Menu className="h-4 w-4" strokeWidth={1.5} />
            </summary>
            <div className="absolute right-0 top-11 w-[220px] rounded-[14px] border border-white/12 bg-[#040910]/96 p-1.5 shadow-[0_24px_80px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block rounded-[9px] px-3.5 py-2.5 text-[11px] font-semibold uppercase transition hover:bg-white/6 hover:text-[#ffcc73]"
                  style={{ color: DIM }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={LINKS.proposal}
                className="mt-1.5 flex min-h-9 items-center justify-center gap-1.5 rounded-[9px] bg-gradient-to-b from-[#ffe3a4] via-[#ffc95a] to-[#d99a2b] px-3.5 text-[11px] font-bold uppercase text-[#130b02]"
              >
                Read the Proposal
                <ArrowRight className="h-3 w-3" strokeWidth={2} />
              </a>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

/* ---------------------------------------------------------------- */
/* 01 — Hero: video, one claim, one boundary, the numbers            */
/* ---------------------------------------------------------------- */

function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[92svh] items-center overflow-hidden"
    >
      <HeroAtmosphere />

      <div className="relative z-10 mx-auto w-full max-w-[1140px] px-5 py-28 sm:px-8 lg:px-10">
        <div className="max-w-[720px]">
          <div
            className="inline-flex w-fit items-center gap-2 rounded-full border px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.16em] backdrop-blur-xl"
            style={{
              borderColor: "rgba(255,204,115,0.32)",
              background: "rgba(4,9,16,0.5)",
              color: GOLD_LIGHT,
            }}
          >
            <span className="h-1 w-1 rounded-full bg-[#ffcc73] shadow-[0_0_8px_rgba(255,204,115,0.9)]" />
            Cardano Treasury proposal
          </div>

          <h1 className="mt-6 font-serif text-[36px] font-normal leading-[1.03] tracking-[-0.02em] drop-shadow-[0_14px_42px_rgba(0,0,0,0.6)] sm:text-[52px] lg:text-[62px]">
            <span className="block">Open infrastructure for</span>
            <span className="block">
              <em className="italic" style={{ color: GOLD_LIGHT }}>
                institutional credit markets
              </em>
            </span>
            <span className="block">on Cardano.</span>
          </h1>

          <p
            className="mt-6 max-w-[500px] text-[15px] leading-[1.65]"
            style={{ color: "rgba(244,239,227,0.84)" }}
          >
            Cardano can settle a loan. Aurora is what makes it{" "}
            <span style={{ color: INK }}>findable</span>.
          </p>

          <p
            className="mt-4 max-w-[520px] border-l-2 py-0.5 pl-3.5 text-[12.5px] leading-[1.6]"
            style={{ borderColor: GOLD_HAIR, color: DIM }}
          >
            Not a lender. Not a lending protocol. Not a custody platform.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-2.5">
            <a
              href={LINKS.architecture}
              className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[#ffe3a4] via-[#ffc95a] to-[#d99a2b] py-1 pl-6 pr-1.5 text-[12px] font-bold uppercase text-[#130b02] shadow-[0_20px_70px_rgba(246,184,75,0.26)] transition duration-300 ease-out hover:-translate-y-0.5 hover:from-[#fff0c9] hover:to-[#f6b84b] active:scale-[0.98]"
            >
              See how it works
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#130b02]/12 transition duration-300 group-hover:translate-x-px">
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
              </span>
            </a>
            <a
              href={LINKS.proposal}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-6 text-[12px] font-bold uppercase backdrop-blur transition duration-300 ease-out hover:bg-[#f6b84b]/10 active:scale-[0.98]"
              style={{ borderColor: "rgba(246,184,75,0.55)", color: GOLD_LIGHT }}
            >
              Read the Proposal
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

function HeroAtmosphere() {
  return (
    <VideoBackdrop
      src="/video/earth-orbit.mp4"
      poster="/video/earth-orbit-poster.jpg"
      className="z-0"
      objectPosition="center 38%"
      overlay={
        <>
          <div className="absolute inset-0 bg-[#050B14]/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050B14] via-[#050B14]/72 to-[#050B14]/25" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050B14]/85 via-transparent to-[#050B14]" />
          <div className="aurora-blueprint absolute inset-0 opacity-40" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-[#050B14]" />
        </>
      }
    />
  );
}

/* ---------------------------------------------------------------- */
/* 02 — Problem: one line, one picture                               */
/* ---------------------------------------------------------------- */

function Problem() {
  return (
    <Section id="problem">
      <div className="mx-auto max-w-[620px] text-center">
        <Eyebrow num="02">The problem</Eyebrow>
        <h2 className="mt-3 font-serif text-[24px] font-normal leading-[1.12] sm:text-[31px] lg:text-[35px]">
          Settlement alone does not make{" "}
          <em className="italic" style={{ color: GOLD_LIGHT }}>
            a market.
          </em>
        </h2>
        <p className="mx-auto mt-4 max-w-[480px] text-[13px] leading-[1.7]" style={{ color: DIM }}>
          Without shared standards, every protocol and capital provider rebuilds
          the same metadata, indexing, and verification work.
        </p>
      </div>

      <div className="reveal-up mt-10">
        <FragmentationDiagram />
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- */
/* 03 — What Aurora delivers (and is not)                            */
/* ---------------------------------------------------------------- */

function Deliverables() {
  return (
    <Section id="delivers" glow>
      <DeliverablesSplit />
    </Section>
  );
}

/* ---------------------------------------------------------------- */
/* 04 — How it works                                                 */
/* ---------------------------------------------------------------- */

function HowItWorks() {
  return (
    <Section id="how">
      <div className="max-w-[620px]">
        <Eyebrow num="04">How it works</Eyebrow>
        <h2 className="mt-3 font-serif text-[24px] font-normal leading-[1.12] sm:text-[31px] lg:text-[35px]">
          From one UTxO to{" "}
          <em className="italic" style={{ color: GOLD_LIGHT }}>
            a searchable market.
          </em>
        </h2>
      </div>

      <div className="reveal-up mt-8">
        <HowStepper />
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- */
/* 05 — Capital discovery, as a working tool                         */
/* ---------------------------------------------------------------- */

function CapitalDiscovery() {
  return (
    <Section id="discovery" glow>
      <div className="max-w-[620px]">
        <Eyebrow num="05">Try it</Eyebrow>
        <h2 className="mt-3 font-serif text-[24px] font-normal leading-[1.12] sm:text-[31px] lg:text-[35px]">
          Requirements in, opportunities{" "}
          <em className="italic" style={{ color: GOLD_LIGHT }}>
            out.
          </em>
        </h2>
        <p className="mt-4 text-[13px] leading-[1.7]" style={{ color: DIM }}>
          Toggle any requirement — the profile, the query and the results all
          update live.
        </p>
      </div>

      <div className="mt-8">
        <QueryPlayground />
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- */
/* 06 — Ecosystem: who builds on it, and on what terms               */
/* ---------------------------------------------------------------- */

const AUDIENCES: { icon: IconType; title: string; copy: string }[] = [
  {
    icon: Boxes,
    title: "Lending protocols",
    copy: "Attach metadata without touching core lending logic.",
  },
  {
    icon: Landmark,
    title: "Capital providers",
    copy: "Filter against published criteria and internal requirements.",
  },
  {
    icon: LayoutDashboard,
    title: "Application builders",
    copy: "Build dashboards, analytics and wallets on open APIs.",
  },
  {
    icon: BadgeCheck,
    title: "Verification providers",
    copy: "Connect proofs without forcing one compliance system.",
  },
];

function Ecosystem() {
  return (
    <Section
      id="ecosystem"
      backdrop={<ImageBackdrop src="/brand/hero-ls.png" objectPosition="center 22%" />}
    >
      <div className="max-w-[620px]">
        <Eyebrow num="06">Open ecosystem</Eyebrow>
        <h2 className="mt-3 font-serif text-[24px] font-normal leading-[1.12] sm:text-[31px] lg:text-[35px]">
          One shared layer,{" "}
          <em className="italic" style={{ color: GOLD_LIGHT }}>
            many builders.
          </em>
        </h2>
        <p className="mt-4 text-[13px] leading-[1.7]" style={{ color: DIM }}>
          Released under Apache 2.0 — usable and extendable without exclusive
          permission from any single team.
        </p>
      </div>

      <div className="reveal-up mt-8">
        <EcosystemDiagram />
      </div>

      <div className="reveal-up-stagger mt-2.5 grid gap-px overflow-hidden rounded-[16px] border sm:grid-cols-2 lg:grid-cols-4"
        style={{ borderColor: HAIR, background: HAIR }}
      >
        {AUDIENCES.map((a) => (
          <article key={a.title} className="bg-[#060d18] p-5 transition duration-500 hover:bg-[#081221]">
            <a.icon className="h-4 w-4" strokeWidth={1.5} style={{ color: GOLD }} />
            <h3 className="mt-3.5 text-[13px] font-semibold">{a.title}</h3>
            <p className="mt-1.5 text-[11.5px] leading-[1.55]" style={{ color: FAINT }}>
              {a.copy}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- */
/* 07 — Governance                                                   */
/* ---------------------------------------------------------------- */

const ROLES = [
  { name: "Fairway", role: "Lead implementer and coordinator" },
  { name: "Sundial", role: "Capital-provider standards and filtering interoperability" },
  { name: "Fallen Icarus", role: "Advisor on Cardano's transaction-based credit model" },
];

function Governance() {
  return (
    <Section id="governance">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-12">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <Eyebrow num="07">Governance</Eyebrow>
          <h2 className="mt-3 font-serif text-[24px] font-normal leading-[1.12] sm:text-[31px] lg:text-[35px]">
            Milestone-gated, with{" "}
            <em className="italic" style={{ color: GOLD_LIGHT }}>
              independent custody.
            </em>
          </h2>

          <div className="mt-5 flex flex-wrap items-baseline gap-x-5 gap-y-2">
            {[
              { value: "1,000,000", unit: "ADA" },
              { value: "≈5", unit: "months" },
              { value: "4", unit: "milestones" },
            ].map((f) => (
              <span key={f.unit} className="flex items-baseline gap-1.5">
                <span
                  className="font-mono text-[17px] leading-none"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  {f.value}
                </span>
                <span
                  className="font-mono text-[9.5px] font-semibold uppercase tracking-[0.14em]"
                  style={{ color: GOLD }}
                >
                  {f.unit}
                </span>
              </span>
            ))}
          </div>

          <div
            className="mt-6 flex items-start gap-3 rounded-[14px] border p-4"
            style={{ borderColor: GOLD_HAIR, background: "rgba(246,184,75,0.05)" }}
          >
            <KeyRound className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.5} style={{ color: GOLD }} />
            <div>
              <div className="flex items-center gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-2.5 w-2.5 rounded-[3px]"
                    style={{
                      background: i < 3 ? GOLD : "transparent",
                      boxShadow: `inset 0 0 0 1px ${GOLD_HAIR}`,
                    }}
                  />
                ))}
              </div>
              <p className="mt-2.5 text-[12px] leading-[1.6]" style={{ color: DIM }}>
                Funds sit in an independent 3-of-5 multisig. Implementation
                contributors hold no signing keys.
              </p>
            </div>
          </div>

          <ul className="mt-6 space-y-2.5">
            {ROLES.map((r) => (
              <li
                key={r.name}
                className="border-t pt-2.5 text-[12px] leading-[1.55]"
                style={{ borderColor: HAIR, color: DIM }}
              >
                <span className="font-semibold" style={{ color: INK }}>
                  {r.name}
                </span>{" "}
                — {r.role}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <MilestoneExplorer />
          <p className="mt-4 text-[11.5px] leading-[1.6]" style={{ color: FAINT }}>
            Each milestone gates the next. Progress is reported publicly.
          </p>
        </div>
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- */
/* 08 — Final CTA                                                    */
/* ---------------------------------------------------------------- */

function FinalCTA() {
  return (
    <section id="cta" className="px-5 pb-20 pt-4 sm:px-8 lg:px-10">
      <div
        className="relative mx-auto max-w-[1140px] overflow-hidden rounded-[22px] border"
        style={{
          borderColor: GOLD_HAIR,
          background:
            "linear-gradient(140deg, rgba(246,184,75,0.10) 0%, rgba(5,11,20,0.6) 46%, rgba(5,11,20,0.9) 100%)",
        }}
      >
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <Image
            src="/brand/hero-op.png"
            alt=""
            fill
            sizes="(min-width: 1140px) 1140px, 100vw"
            className="object-cover opacity-70"
            style={{ objectPosition: "center 30%" }}
          />
          <div className="absolute inset-0 bg-[#050B14]/62" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050B14] via-[#050B14]/72 to-[#050B14]/35" />
        </div>
        <span aria-hidden className="aurora-blueprint pointer-events-none absolute inset-0 opacity-70" />

        <div className="relative px-6 py-14 sm:px-12 sm:py-16">
          <h2 className="max-w-[540px] font-serif text-[28px] leading-[1.08] sm:text-[38px]">
            Build on shared{" "}
            <em className="italic" style={{ color: GOLD_LIGHT }}>
              credit-market infrastructure.
            </em>
          </h2>

          <div className="mt-7 flex flex-wrap items-center gap-2.5">
            <a
              href={LINKS.proposal}
              className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[#ffe3a4] via-[#ffc95a] to-[#d99a2b] py-1 pl-6 pr-1.5 text-[12px] font-bold uppercase text-[#130b02] shadow-[0_20px_70px_rgba(246,184,75,0.3)] transition duration-300 ease-out hover:-translate-y-0.5 hover:from-[#fff0c9] hover:to-[#f6b84b] active:scale-[0.98]"
            >
              Read the Proposal
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#130b02]/12 transition duration-300 group-hover:translate-x-px">
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
              </span>
            </a>
            <a
              href={LINKS.development}
              className="inline-flex min-h-11 items-center gap-2 text-[12px] font-bold uppercase transition duration-300 hover:text-[#ffcc73]"
              style={{ color: DIM }}
            >
              Follow development
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </a>
          </div>

          <p
            className="mt-10 max-w-[620px] border-t pt-5 text-[11.5px] leading-[1.7]"
            style={{ borderColor: HAIR, color: FAINT }}
          >
            Aurora is infrastructure-only. It does not originate loans, custody
            capital, allocate funding, perform settlement, or replace compatible
            lending implementations.
          </p>
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
    <footer className="border-t px-5 py-10 sm:px-8 lg:px-10" style={{ borderColor: HAIR }}>
      <div className="mx-auto flex max-w-[1140px] flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <a href="#top" className="inline-flex items-center gap-2.5">
            <Image
              src="/brand/Aurora-logo-modified.png"
              alt="Aurora"
              width={56}
              height={56}
              className="h-8 w-8 rounded-full object-contain"
            />
            <span className="font-serif text-[17px] tracking-[0.24em]">AURORA</span>
          </a>
          <p className="mt-3 max-w-[380px] text-[11.5px] leading-[1.7]" style={{ color: DIM }}>
            Open credit-market infrastructure on Cardano. Built by Fairway with
            Sundial and Fallen Icarus.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11.5px]">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition hover:text-[#ffcc73]"
              style={{ color: DIM }}
            >
              {l.label}
            </a>
          ))}
          <Link href="/dawn" className="transition hover:text-[#ffcc73]" style={{ color: DIM }}>
            Dawn
          </Link>
          <a
            href="https://www.fairway.global"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[#ffcc73]"
            style={{ color: DIM }}
          >
            fairway.global
          </a>
        </div>
      </div>

      <div
        className="mx-auto mt-8 flex max-w-[1140px] flex-wrap items-center justify-between gap-3 border-t pt-5 font-mono text-[9.5px] uppercase tracking-[0.14em]"
        style={{ borderColor: HAIR, color: FAINT }}
      >
        <span>Apache License 2.0 · Protocol independent</span>
        <span>© 2026 Aurora / Fairway</span>
      </div>
    </footer>
  );
}

/* ---------------------------------------------------------------- */
/* Shared primitives                                                 */
/* ---------------------------------------------------------------- */

function Eyebrow({ num, children }: { num: string; children: ReactNode }) {
  return (
    <p
      className="flex items-center justify-center gap-2.5 font-mono text-[9.5px] font-bold uppercase tracking-[0.2em] lg:justify-start"
      style={{ color: GOLD }}
    >
      <span style={{ color: FAINT }}>{num}</span>
      <span aria-hidden className="h-px w-6" style={{ background: "rgba(246,184,75,0.4)" }} />
      {children}
    </p>
  );
}

function ImageBackdrop({
  src,
  objectPosition = "center",
}: {
  src: string;
  objectPosition?: string;
}) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <Image
        src={src}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-90"
        style={{ objectPosition }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050B14]/80 via-[#050B14]/35 to-[#050B14]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050B14]/80 via-[#050B14]/30 to-transparent" />
      <div className="aurora-blueprint absolute inset-0 opacity-30" />
    </div>
  );
}

function Section({
  id,
  children,
  glow = false,
  backdrop,
}: {
  id?: string;
  children: ReactNode;
  glow?: boolean;
  backdrop?: ReactNode;
}) {
  return (
    <section id={id} className="relative px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      {backdrop}
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
      <div className="relative mx-auto max-w-[1140px]">{children}</div>
    </section>
  );
}
