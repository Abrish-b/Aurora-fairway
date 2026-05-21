import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronDown, Minus } from "lucide-react";

import AnimatedHeading from "./_components/AnimatedHeading";
import CapitalBridgeMap from "./_components/CapitalBridgeMap";
import FadeIn from "./_components/FadeIn";
import InView from "./_components/InView";
import InfrastructurePillars from "./_components/InfrastructurePillars";
import LenderCapacityConsole from "./_components/LenderCapacityConsole";
import PartnershipFlow from "./_components/PartnershipFlow";
import ProblemGapDiagram from "./_components/ProblemGapDiagram";
import ProductiveFinanceWheel from "./_components/ProductiveFinanceWheel";
import PublicValueDashboard from "./_components/PublicValueDashboard";

/* Dark minimal palette */
const BG = "#0A1612";
const IVORY = "#F2EDDF";
const IVORY_DIM = "rgba(242,237,223,0.64)";
const IVORY_MUTED = "rgba(242,237,223,0.42)";
const DIVIDER = "rgba(242,237,223,0.10)";
const GOLD = "#D6A84F";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_155500_808e6fdd-761f-4acd-b3be-cb7e6e700def.mp4";

const navLinks = [
  { href: "#problem", label: "Problem" },
  { href: "#ecosystem", label: "Ecosystem" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#use-cases", label: "Use Cases" },
  { href: "#trust", label: "Trust" },
];

export default function MaledaPage() {
  return (
    <div style={{ background: BG, color: IVORY_DIM }}>
      <Hero />
      <ProblemSection />
      <EcosystemSection />
      <HowItWorksSection />
      <PillarsSection />
      <LenderBenefitsSection />
      <UseCasesSection />
      <WhyNowSection />
      <PublicValueSection />
      <TrustSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}

/* ----------------------------------------------------------------------- */
/* Hero — full-screen video + minimal copy                                 */
/* ----------------------------------------------------------------------- */

function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100dvh] w-full flex-col overflow-hidden"
      style={{ background: BG }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover"
        src={HERO_VIDEO}
      />
      {/* Soft vignettes — keep video raw but ensure text legibility */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,22,18,0.30) 0%, transparent 28%, transparent 55%, rgba(10,22,18,0.55) 88%, rgba(10,22,18,0.85) 100%)",
        }}
      />

      <Navbar />

      <div className="relative z-10 mx-auto mt-auto flex w-full max-w-[1400px] flex-col gap-10 px-6 pb-20 md:px-10 lg:px-14 lg:pb-24">
        <div className="max-w-[820px]">
          <FadeIn delay={80} duration={600}>
            <span
              className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.22em]"
              style={{ color: IVORY_DIM }}
            >
              <span aria-hidden className="h-px w-8" style={{ background: GOLD }} />
              Morning sun · Ethiopia & emerging markets
            </span>
          </FadeIn>

          <AnimatedHeading
            text={"Expand access to\nproductive business finance."}
            className="mt-7 text-[44px] font-medium leading-[1.02] tracking-[-0.025em] sm:text-[60px] lg:text-[76px]"
          />

          <FadeIn delay={1200} duration={700} className="mt-8 max-w-[55ch]">
            <p className="text-[15px] font-light leading-[1.7] sm:text-[17px]" style={{ color: "rgba(242,237,223,0.78)" }}>
              Trusted local-currency finance for productive businesses,
              delivered through regulated lenders.
            </p>
          </FadeIn>

          <FadeIn delay={1450} duration={700} className="mt-10">
            <div className="flex flex-wrap items-center gap-6">
              <a
                href="#cta"
                className="inline-flex h-12 cursor-pointer items-center justify-center gap-2 px-6 text-[13px] font-semibold tracking-tight transition active:scale-[0.98] hover:brightness-110"
                style={{ background: GOLD, color: BG }}
              >
                Partner with Maleda
                <ArrowRight className="h-4 w-4" strokeWidth={1.7} />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex h-12 cursor-pointer items-center gap-2 text-[13px] font-medium transition"
                style={{
                  color: IVORY,
                  borderBottom: `1px solid ${IVORY}`,
                  paddingBottom: 2,
                }}
              >
                See how it works
                <ArrowRight className="h-4 w-4" strokeWidth={1.7} />
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
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10 lg:px-14">
        <div
          className="flex items-center justify-between border-b py-4"
          style={{ borderColor: "rgba(242,237,223,0.16)" }}
        >
          <Link href="#top" className="flex items-center gap-3" aria-label="Maleda home" style={{ color: IVORY }}>
            <span className="text-xl font-semibold tracking-tight">MALEDA</span>
            <span className="hidden text-[10px] font-medium uppercase tracking-[0.22em] sm:inline" style={{ color: IVORY_MUTED }}>
              by Fairway
            </span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[12px] font-medium uppercase tracking-[0.16em] transition-colors duration-200"
                style={{ color: IVORY_DIM }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#cta"
            className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.16em] transition"
            style={{
              color: GOLD,
              borderBottom: `1px solid ${GOLD}`,
              paddingBottom: 2,
            }}
          >
            Partner with Maleda
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.7} />
          </a>
        </div>
      </div>
    </header>
  );
}

/* ----------------------------------------------------------------------- */
/* Shared minimal section primitive                                        */
/* ----------------------------------------------------------------------- */

function Section({
  id,
  num,
  eyebrow,
  title,
  intro,
  children,
}: {
  id: string;
  num: string;
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="relative px-6 py-28 md:px-10 lg:px-14 lg:py-36"
      style={{ borderTop: `1px solid ${DIVIDER}` }}
    >
      <div className="relative mx-auto max-w-[1400px]">
        <InView className="grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.22em]" style={{ color: GOLD }}>
              {num}
            </p>
            <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.22em]" style={{ color: IVORY_MUTED }}>
              {eyebrow}
            </p>
          </div>

          <div>
            <h2
              className="text-[32px] font-medium leading-[1.04] tracking-[-0.025em] sm:text-[44px] lg:text-[52px]"
              style={{ color: IVORY, textWrap: "balance" }}
            >
              {title}
            </h2>
            {intro && (
              <div
                className="mt-6 text-[15px] font-light leading-[1.7]"
                style={{ color: IVORY_DIM, maxWidth: "60ch" }}
              >
                {intro}
              </div>
            )}
            {children}
          </div>
        </InView>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------- */
/* Problem                                                                 */
/* ----------------------------------------------------------------------- */

function ProblemSection() {
  return (
    <Section
      id="problem"
      num="01"
      eyebrow="The challenge"
      title={
        <>
          Credit demand exists.{" "}
          <span style={{ color: GOLD }}>Access does not.</span>
        </>
      }
      intro="Productive businesses are underfinanced — not for lack of opportunity, but because credit infrastructure is fragmented. Maleda connects the two sides."
    >
      <ProblemGapDiagram />
    </Section>
  );
}

/* ----------------------------------------------------------------------- */
/* Ecosystem                                                               */
/* ----------------------------------------------------------------------- */

function EcosystemSection() {
  return (
    <Section
      id="ecosystem"
      num="02"
      eyebrow="A trusted ecosystem"
      title={
        <>
          A trusted ecosystem{" "}
          <span style={{ color: GOLD }}>for productive lending.</span>
        </>
      }
      intro="Maleda connects the institutions required to expand credit safely."
    >
      <div className="mt-16">
        <CapitalBridgeMap />
      </div>

      <ul className="mt-20 divide-y" style={{ borderColor: DIVIDER }}>
        {[
          { role: "Businesses", copy: "Receive financing through trusted local lenders." },
          { role: "Financial Institutions", copy: "Originate and service loans locally." },
          { role: "Maleda", copy: "Identity, compliance, and capital coordination.", highlight: true },
          { role: "Capital Partners", copy: "Structured participation in productive lending." },
          { role: "Public Stakeholders", copy: "Advance inclusion and economic development." },
        ].map((c, i) => (
          <li
            key={c.role}
            className="grid grid-cols-[40px_180px_1fr] items-baseline gap-6 border-t py-5 first:border-t-0"
            style={{ borderColor: DIVIDER }}
          >
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.22em]" style={{ color: IVORY_MUTED }}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3
              className="text-[16px] font-medium tracking-tight"
              style={{ color: c.highlight ? GOLD : IVORY }}
            >
              {c.role}
            </h3>
            <p className="text-[13.5px] font-light leading-[1.7]" style={{ color: IVORY_DIM }}>
              {c.copy}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* ----------------------------------------------------------------------- */
/* How It Works                                                            */
/* ----------------------------------------------------------------------- */

function HowItWorksSection() {
  return (
    <Section
      id="how-it-works"
      num="03"
      eyebrow="How it works"
      title={
        <>
          Built for partnership{" "}
          <span style={{ color: GOLD }}>with local institutions.</span>
        </>
      }
      intro="Maleda is not a lender. Local institutions own origination, underwriting, and servicing."
    >
      <p
        className="mt-10 border-l pl-5 text-[14px] font-medium leading-snug tracking-tight"
        style={{ borderColor: GOLD, color: IVORY }}
      >
        Borrowers receive financing in local currency.{" "}
        <span style={{ color: GOLD }}>Never cryptocurrency.</span>
      </p>

      <PartnershipFlow />
    </Section>
  );
}

/* ----------------------------------------------------------------------- */
/* Infrastructure Pillars                                                  */
/* ----------------------------------------------------------------------- */

function PillarsSection() {
  return (
    <Section
      id="pillars"
      num="04"
      eyebrow="Infrastructure pillars"
      title={
        <>
          Infrastructure for{" "}
          <span style={{ color: GOLD }}>trusted credit expansion.</span>
        </>
      }
      intro="Four operational layers for responsible credit growth."
    >
      <InfrastructurePillars />
    </Section>
  );
}

/* ----------------------------------------------------------------------- */
/* Lender Benefits                                                         */
/* ----------------------------------------------------------------------- */

function LenderBenefitsSection() {
  return (
    <Section
      id="lender-benefits"
      num="05"
      eyebrow="For regulated lenders"
      title={
        <>
          New capital{" "}
          <span style={{ color: GOLD }}>for local lending growth.</span>
        </>
      }
      intro="Built to strengthen the institutions already serving borrowers."
    >
      <LenderCapacityConsole />
    </Section>
  );
}

/* ----------------------------------------------------------------------- */
/* Use Cases                                                               */
/* ----------------------------------------------------------------------- */

function UseCasesSection() {
  return (
    <Section
      id="use-cases"
      num="06"
      eyebrow="Use cases"
      title={
        <>
          Financing <span style={{ color: GOLD }}>real economic growth.</span>
        </>
      }
      intro="Productive sectors served by Maleda-enabled lending."
    >
      <ProductiveFinanceWheel />
    </Section>
  );
}

/* ----------------------------------------------------------------------- */
/* Why Now                                                                 */
/* ----------------------------------------------------------------------- */

function WhyNowSection() {
  const cards = [
    { title: "Business demand is growing", copy: "Emerging market businesses need affordable credit to scale and create jobs." },
    { title: "Lenders need scalable infrastructure", copy: "Banks and MFIs need tools to expand responsible lending." },
    { title: "Capital partners need trusted channels", copy: "Global capital wants compliant pathways into productive finance." },
  ];

  return (
    <Section
      id="why-now"
      num="07"
      eyebrow="Why now"
      title={
        <>
          Global capital.{" "}
          <span style={{ color: GOLD }}>Local opportunity.</span>
        </>
      }
      intro="New global liquidity. Growing emerging-market demand. Maleda connects them safely."
    >
      <div className="mt-16 grid gap-px sm:grid-cols-3" style={{ background: DIVIDER }}>
        {cards.map((c, i) => (
          <article
            key={c.title}
            className="flex flex-col gap-4 p-8"
            style={{ background: BG }}
          >
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.22em]" style={{ color: GOLD }}>
              {String(i + 1).padStart(2, "0")} / 03
            </span>
            <h3 className="text-[18px] font-medium leading-snug tracking-tight" style={{ color: IVORY }}>
              {c.title}
            </h3>
            <p className="text-[13.5px] font-light leading-[1.7]" style={{ color: IVORY_DIM, maxWidth: "44ch" }}>
              {c.copy}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------------------- */
/* Public Value                                                            */
/* ----------------------------------------------------------------------- */

function PublicValueSection() {
  return (
    <Section
      id="public-value"
      num="08"
      eyebrow="Public value"
      title={
        <>
          Designed to support{" "}
          <span style={{ color: GOLD }}>national development.</span>
        </>
      }
      intro="Financial inclusion, SME growth, agriculture, job creation."
    >
      <PublicValueDashboard />
    </Section>
  );
}

/* ----------------------------------------------------------------------- */
/* Trust / FAQ                                                             */
/* ----------------------------------------------------------------------- */

function TrustSection() {
  const items = [
    { q: "Do borrowers receive cryptocurrency?", a: "No. Financing is delivered through regulated local lending channels in applicable local currencies." },
    { q: "Is Maleda a lender?", a: "No. Local regulated financial institutions originate, underwrite, and service loans." },
    { q: "Does Maleda replace local financial institutions?", a: "No. Maleda strengthens regulated lenders by expanding access to capital infrastructure." },
    { q: "Who provides the loan capital?", a: "Structured participation from global capital partners through compliant institutional pathways." },
    { q: "Who manages the borrower relationship?", a: "The local regulated financial institution — including underwriting, servicing, and compliance." },
    { q: "How does Maleda support public priorities?", a: "Designed to support financial inclusion, SME growth, agriculture, trade, women-led enterprises, and job creation." },
  ];

  return (
    <Section
      id="trust"
      num="09"
      eyebrow="Trust"
      title={
        <>
          Designed for{" "}
          <span style={{ color: GOLD }}>institutional trust.</span>
        </>
      }
    >
      <div className="mt-16 divide-y" style={{ borderColor: DIVIDER }}>
        {items.map((item, i) => (
          <details
            key={item.q}
            className="group border-t [&_summary::-webkit-details-marker]:hidden"
            style={{ borderColor: DIVIDER }}
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6" style={{ color: IVORY }}>
              <span className="flex items-baseline gap-4">
                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.22em]" style={{ color: IVORY_MUTED }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[15px] font-medium tracking-tight">{item.q}</span>
              </span>
              <span aria-hidden className="flex h-6 w-6 flex-none items-center justify-center transition-transform duration-300 group-open:rotate-90">
                <Minus className="h-4 w-4 group-open:hidden" strokeWidth={1.6} style={{ color: GOLD }} />
                <ChevronDown className="hidden h-4 w-4 -rotate-90 group-open:block" strokeWidth={1.6} style={{ color: GOLD }} />
              </span>
            </summary>
            <div className="pb-6 pl-[58px]">
              <p className="max-w-[58ch] text-[14px] font-light leading-[1.75]" style={{ color: IVORY_DIM }}>
                {item.a}
              </p>
            </div>
          </details>
        ))}
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------------------- */
/* Final CTA                                                               */
/* ----------------------------------------------------------------------- */

function FinalCTASection() {
  return (
    <section
      id="cta"
      className="relative isolate overflow-hidden px-6 py-32 md:px-10 lg:px-14 lg:py-40"
      style={{ borderTop: `1px solid ${DIVIDER}` }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 30%, rgba(214,168,79,0.10) 0%, transparent 70%)",
        }}
      />
      <InView className="relative mx-auto max-w-[760px] text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em]" style={{ color: GOLD }}>
          Get in touch
        </p>
        <h2
          className="mt-6 text-[36px] font-medium leading-[1.04] tracking-[-0.025em] sm:text-[52px] lg:text-[64px]"
          style={{ color: IVORY, textWrap: "balance" }}
        >
          Expand access to{" "}
          <span style={{ color: GOLD }}>productive credit.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-[52ch] text-[15px] font-light leading-[1.7]" style={{ color: IVORY_DIM }}>
          Whether lender, capital partner, or public stakeholder — Maleda helps
          build stronger credit markets.
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          <a
            href="mailto:hello@fairway.global?subject=Maleda%20partnership"
            className="inline-flex h-12 cursor-pointer items-center justify-center gap-2 px-7 text-[13px] font-semibold tracking-tight transition active:scale-[0.98] hover:brightness-110"
            style={{ background: GOLD, color: BG }}
          >
            Start a conversation
            <ArrowRight className="h-4 w-4" strokeWidth={1.7} />
          </a>
          <a
            href="mailto:hello@fairway.global?subject=Maleda%20partner"
            className="inline-flex h-12 cursor-pointer items-center gap-2 text-[13px] font-medium transition"
            style={{
              color: IVORY,
              borderBottom: `1px solid ${IVORY}`,
              paddingBottom: 2,
            }}
          >
            Partner with Maleda
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.7} />
          </a>
        </div>
      </InView>
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
    <footer
      className="relative z-10 px-6 py-14 md:px-10 lg:px-14"
      style={{ borderTop: `1px solid ${DIVIDER}` }}
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div className="max-w-[440px]">
            <p className="text-xl font-semibold tracking-tight" style={{ color: IVORY }}>
              MALEDA
            </p>
            <p className="mt-3 text-[13px] font-light leading-[1.65]" style={{ color: IVORY_DIM }}>
              Morning-sun infrastructure for productive business finance.
            </p>
            <p className="mt-6 text-[11px] font-light" style={{ color: IVORY_MUTED }}>
              Built by{" "}
              <a
                href="https://www.fairway.global"
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:underline"
                style={{ color: GOLD }}
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
                className="text-[12px] font-medium uppercase tracking-[0.16em] transition-colors duration-200"
                style={{ color: IVORY_DIM }}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <p className="mt-14 text-[11px] font-light leading-relaxed" style={{ color: IVORY_MUTED }}>
          &copy; {new Date().getFullYear()} Fairway. Maleda is infrastructure
          for regulated lenders — not a lender, bank, or deposit-taking
          institution. Inclusion of any priority does not imply endorsement.
        </p>
      </div>
    </footer>
  );
}
