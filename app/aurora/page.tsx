import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  ClipboardCheck,
  Database,
  Eye,
  FileCheck2,
  Fingerprint,
  HandCoins,
  Landmark,
  LayoutDashboard,
  Lock,
  Menu,
  ScrollText,
  ShieldCheck,
  Store,
  Users,
  type LucideIcon,
} from "lucide-react";

import AccordionFAQ from "@/components/aurora/AccordionFAQ";
import LiquidityJourney from "./_components/LiquidityJourney";
import WorkspacePreview from "./_components/WorkspacePreview";

/* Warm institutional palette — daylight counterpart to the Aurora dark pages */
const PAPER = "#FBF7EE";
const SURFACE = "#FFFFFF";
const INK = "#17231D";
const GREEN = "#1E4737";
const GREEN_DEEP = "#132E23";
const GOLD = "#B8862B";
const MUTED = "#5A6560";
const LINE = "rgba(30,71,55,0.14)";

const CALENDLY =
  "https://calendly.com/heikki-fairway/fairway-demo?month=2026-05";

/* ---------------------------------------------------------------- */
/* Content                                                          */
/* ---------------------------------------------------------------- */

const VALUE_CARDS: { icon: LucideIcon; title: string; copy: string }[] = [
  {
    icon: Landmark,
    title: "Institutional liquidity",
    copy: "Request working-capital liquidity for member and SME lending beyond what your savings pool allows. Each request is reviewed and approved by Fairway.",
  },
  {
    icon: LayoutDashboard,
    title: "Operational visibility",
    copy: "Requests, approvals, disbursements, schedules, and repayments live in one workspace your committee and your board can both read.",
  },
  {
    icon: BadgeCheck,
    title: "Verified access",
    copy: "One-time institutional verification gives your SACCO a trusted profile. Verification is proven with a digital credential — not paperwork resubmitted every time.",
  },
  {
    icon: Store,
    title: "Member & SME impact",
    copy: "More capacity for the shopkeepers, traders, and producers your SACCO already serves — through your own loan process, in your own community.",
  },
];

const STEPS: { title: string; copy: string }[] = [
  {
    title: "Verify your SACCO",
    copy: "Share your registration and governance documents once. Fairway verifies your institution and issues a digital credential that proves it.",
  },
  {
    title: "Request liquidity",
    copy: "Your committee approves a member or SME lending need, then submits a liquidity request from the Aurora workspace.",
  },
  {
    title: "Fairway reviews",
    copy: "A person at Fairway reviews every request. Approvals and declines are visible in the workspace, with status you can track.",
  },
  {
    title: "Funds disburse",
    copy: "Approved funds move on Aurora's controlled settlement rail, and the disbursement is recorded with a confirmed settlement entry.",
  },
  {
    title: "Lend, track, repay",
    copy: "Your SACCO lends through its own process. Schedules, repayments, and reconciliation stay visible in the workspace until closure.",
  },
];

const SACCO_DOES = [
  "Holds the member relationship, in your community",
  "Underwrites and approves each member or SME loan",
  "Disburses to borrowers through your own process",
  "Services loans and manages collections",
  "Answers to your members and your board",
];

const AURORA_DOES = [
  "Verifies your institution and issues its credential",
  "Reviews and approves liquidity requests",
  "Settles approved funds on a controlled USDM rail",
  "Keeps schedules, records, and reconciliation in one place",
  "Provides role-based access for your team",
];

const TRUST_ROWS: { icon: LucideIcon; title: string; copy: string }[] = [
  {
    icon: Fingerprint,
    title: "Verified institutions only",
    copy: "Aurora is KYC-gated. Every SACCO on the rail has been verified by Fairway before it can request or receive anything.",
  },
  {
    icon: Lock,
    title: "Member privacy is protected",
    copy: "Verification is proven with privacy-preserving digital credentials. Your members' personal information is not published to any blockchain.",
  },
  {
    icon: Database,
    title: "Confirmed settlement records",
    copy: "Disbursements and repayments settle on Cardano, a public settlement ledger. The result for your SACCO is practical: an audit trail your board and auditors can rely on.",
  },
  {
    icon: Eye,
    title: "Human review, not automation",
    copy: "Fairway reviews every liquidity request before approval. Role-based controls decide who in your SACCO can submit, approve, and view.",
  },
  {
    icon: HandCoins,
    title: "USDM, in plain terms",
    copy: "USDM is a regulated digital settlement instrument pegged to the US dollar. It is how funds move on the rail — your SACCO works with amounts and schedules, and your members never need to handle cryptocurrency.",
  },
];

const READINESS = [
  {
    icon: Building2,
    text: "A registered SACCO or SACCO union with active member lending",
  },
  {
    icon: ScrollText,
    text: "Registration and governance documents for institutional verification",
  },
  {
    icon: Users,
    text: "A general manager or credit officer available for onboarding",
  },
  {
    icon: ClipboardCheck,
    text: "A committee process for approving the loans you would fund",
  },
];

const FAQ_ITEMS = [
  {
    q: "Who is Aurora for?",
    a: "Aurora is built for Ethiopian SACCOs and SACCO unions. The SACCO is the customer and the user of the workspace; members and SMEs benefit through the SACCO's own lending.",
  },
  {
    q: "Does Aurora replace our SACCO?",
    a: "No. Your SACCO remains the lender. Aurora never lends directly to individuals — it supplies liquidity and record-keeping around your existing lending process, and your member relationships stay yours.",
  },
  {
    q: "What do USDM and Cardano mean for us in practice?",
    a: "USDM is the digital settlement instrument funds move in; Cardano is the public ledger where each settlement is confirmed. In practice your SACCO sees amounts, statuses, and schedules in the workspace — and gains a stronger audit trail. No blockchain knowledge is required to operate Aurora.",
  },
  {
    q: "Does our members' information go on a blockchain?",
    a: "No. Borrower and member personal information stays with your SACCO. Verification is proven with privacy-preserving credentials, so the rail can confirm your SACCO is verified without publishing personal data.",
  },
  {
    q: "How are liquidity requests approved?",
    a: "Your committee approves the lending need and submits the request. Fairway reviews it — a human decision, not an automatic one — and the outcome appears in your workspace. Approval is not guaranteed, and pilot capacity is limited.",
  },
  {
    q: "Is Aurora live today?",
    a: "Aurora is a pilot programme operated by Fairway. Joining starts with a conversation: we walk through your SACCO's lending, verification, and what the pilot involves before anything is signed.",
  },
];

/* ---------------------------------------------------------------- */
/* Page                                                             */
/* ---------------------------------------------------------------- */

export default function AuroraSaccoPage() {
  return (
    <div id="top" style={{ background: PAPER, color: INK }}>
      <Nav />
      <main>
        <Hero />
        <ValueSection />
        <JourneySection />
        <HowItWorks />
        <ControlSection />
        <MembersSection />
        <TrustSection />
        <ReadinessSection />
        <AccordionFAQ
          tone="bone"
          eyebrow="FAQ"
          title="Questions SACCO leaders ask us."
          copy="Straight answers about what Aurora is, what it is not, and what the pilot involves."
          items={FAQ_ITEMS}
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
    { href: "#why", label: "Why Aurora" },
    { href: "#how", label: "How it works" },
    { href: "#control", label: "Control" },
    { href: "#trust", label: "Trust" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div
        className="mx-auto flex w-full max-w-[1240px] items-center justify-between rounded-[10px] border px-4 py-3 shadow-[0_14px_50px_rgba(23,35,29,0.08)] backdrop-blur-xl sm:px-5"
        style={{ borderColor: LINE, background: "rgba(251,247,238,0.88)" }}
      >
        <Link
          href="#top"
          aria-label="Aurora for SACCOs — top of page"
          className="inline-flex items-center gap-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B8862B]"
        >
          <Image
            src="/brand/Aurora-logo-modified.png"
            alt=""
            width={665}
            height={665}
            className="h-8 w-8 object-contain"
            priority
          />
          <span className="flex flex-col leading-none">
            <Image
              src="/brand/aurora-nav.png"
              alt="Aurora"
              width={944}
              height={137}
              className="h-[15px] w-auto object-contain"
              priority
            />
            <span
              className="mt-1 text-[9px] font-bold uppercase tracking-[0.24em]"
              style={{ color: MUTED }}
            >
              For SACCOs
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 text-[12px] font-semibold uppercase lg:flex"
          style={{ color: MUTED }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2.5 transition duration-200 hover:bg-[#1E4737]/6 hover:text-[#1E4737]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-10 items-center justify-center rounded-full px-5 text-[12px] font-bold uppercase tracking-[0.06em] text-[#F6F1E4] transition duration-200 hover:opacity-90 sm:inline-flex"
            style={{ background: GREEN }}
          >
            Join the pilot
          </a>
          <details className="group relative lg:hidden">
            <summary
              className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border transition [&::-webkit-details-marker]:hidden"
              style={{ borderColor: LINE, color: GREEN }}
            >
              <span className="sr-only">Open navigation</span>
              <Menu className="h-5 w-5" strokeWidth={1.7} />
            </summary>
            <div
              className="absolute right-0 top-12 w-[230px] rounded-[10px] border p-2 shadow-[0_24px_70px_rgba(23,35,29,0.16)]"
              style={{ borderColor: LINE, background: PAPER }}
            >
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block rounded-[7px] px-3 py-2.5 text-[13px] font-semibold transition hover:bg-[#1E4737]/6"
                  style={{ color: INK }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block rounded-[7px] px-3 py-2.5 text-[13px] font-bold text-[#F6F1E4]"
                style={{ background: GREEN }}
              >
                Join the pilot
              </a>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

/* ---------------------------------------------------------------- */
/* Hero                                                             */
/* ---------------------------------------------------------------- */

function Hero() {
  return (
    <section className="px-5 pb-16 pt-36 sm:px-8 sm:pt-40 lg:px-12">
      <div className="mx-auto grid w-full max-w-[1240px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="reveal-up">
          <p
            className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em]"
            style={{ borderColor: "rgba(184,134,43,0.4)", color: GOLD }}
          >
            <span
              aria-hidden
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: GOLD }}
            />
            Pilot programme · Ethiopian SACCOs
          </p>
          <h1
            className="mt-6 font-serif text-[38px] leading-[1.08] sm:text-[52px] lg:text-[58px]"
            style={{ color: INK }}
          >
            More lending capacity for the businesses your SACCO{" "}
            <em style={{ color: GREEN }}>already knows.</em>
          </h1>
          <p
            className="mt-6 max-w-[54ch] text-[16px] leading-8 sm:text-[17px]"
            style={{ color: MUTED }}
          >
            Aurora is a verified liquidity and settlement rail operated by
            Fairway. Your SACCO requests institutional liquidity, disburses
            approved funds to members and SMEs through your own process, and
            tracks repayment — all from one workspace, with your member
            relationships intact.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2 rounded-full px-7 text-[13px] font-bold uppercase tracking-[0.06em] text-[#F6F1E4] transition duration-200 hover:opacity-90"
              style={{ background: GREEN }}
            >
              Join the pilot
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </a>
            <a
              href="#how"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border px-7 text-[13px] font-bold uppercase tracking-[0.06em] transition duration-200 hover:bg-[#1E4737]/5"
              style={{ borderColor: "rgba(23,35,29,0.28)", color: INK }}
            >
              See how it works
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </a>
          </div>
          <ul className="mt-10 flex flex-wrap gap-2.5" aria-label="Key facts">
            {[
              "Your SACCO remains the lender",
              "Fairway reviews every request",
              "Members never handle cryptocurrency",
            ].map((chip) => (
              <li
                key={chip}
                className="inline-flex items-center gap-2 rounded-full border bg-white px-3.5 py-2 text-[12px] font-medium"
                style={{ borderColor: LINE, color: MUTED }}
              >
                <BadgeCheck
                  className="h-3.5 w-3.5 flex-none"
                  strokeWidth={1.8}
                  style={{ color: GOLD }}
                />
                {chip}
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal-up-soft">
          <WorkspacePreview />
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Sections                                                         */
/* ---------------------------------------------------------------- */

function SectionHead({
  id,
  eyebrow,
  title,
  copy,
}: {
  id?: string;
  eyebrow: string;
  title: React.ReactNode;
  copy?: string;
}) {
  return (
    <div id={id} className="reveal-up max-w-[640px] scroll-mt-28">
      <p
        className="text-[11px] font-bold uppercase tracking-[0.22em]"
        style={{ color: GOLD }}
      >
        {eyebrow}
      </p>
      <h2
        className="mt-3 font-serif text-[32px] leading-[1.14] sm:text-[40px]"
        style={{ color: INK }}
      >
        {title}
      </h2>
      {copy && (
        <p className="mt-4 text-[15px] leading-7" style={{ color: MUTED }}>
          {copy}
        </p>
      )}
    </div>
  );
}

function ValueSection() {
  return (
    <section className="px-5 py-20 sm:px-8 lg:px-12" style={{ background: SURFACE }}>
      <div className="mx-auto w-full max-w-[1240px]">
        <SectionHead
          id="why"
          eyebrow="Built for Ethiopian SACCOs"
          title={
            <>
              Your savings pool sets the ceiling.{" "}
              <em style={{ color: GREEN }}>Aurora raises it.</em>
            </>
          }
          copy="Member loan demand often outgrows member deposits. Aurora gives verified SACCOs a disciplined way to bring in institutional liquidity — without giving up the role that makes a SACCO a SACCO."
        />
        <div className="reveal-up-stagger mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUE_CARDS.map((card) => (
            <div
              key={card.title}
              className="rounded-[12px] border p-6"
              style={{ borderColor: LINE, background: PAPER }}
            >
              <card.icon
                className="h-6 w-6"
                strokeWidth={1.6}
                style={{ color: GREEN }}
              />
              <h3 className="mt-5 text-[17px] font-semibold" style={{ color: INK }}>
                {card.title}
              </h3>
              <p className="mt-2.5 text-[13.5px] leading-6" style={{ color: MUTED }}>
                {card.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function JourneySection() {
  return (
    <section className="px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-[1240px]">
        <SectionHead
          eyebrow="The liquidity journey"
          title={
            <>
              One rail, four stops —{" "}
              <em style={{ color: GREEN }}>and your SACCO in the middle.</em>
            </>
          }
          copy="Approved liquidity travels a single, controlled path. Funds reach borrowers only through your SACCO, and repayments are reconciled back in the same workspace."
        />
        <div className="reveal-up-soft mt-12">
          <LiquidityJourney />
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section
      className="px-5 py-20 sm:px-8 lg:px-12"
      style={{ background: SURFACE }}
    >
      <div className="mx-auto w-full max-w-[1240px]">
        <SectionHead
          id="how"
          eyebrow="How it works"
          title={
            <>
              From verification to repayment,{" "}
              <em style={{ color: GREEN }}>five clear steps.</em>
            </>
          }
        />
        <ol className="reveal-up-stagger mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className="rounded-[12px] border p-6"
              style={{ borderColor: LINE, background: PAPER }}
            >
              <p
                className="font-mono text-[12px] font-semibold tracking-[0.18em]"
                style={{ color: GOLD }}
              >
                STEP 0{i + 1}
              </p>
              <h3 className="mt-3 text-[16px] font-semibold" style={{ color: INK }}>
                {step.title}
              </h3>
              <p className="mt-2 text-[13px] leading-6" style={{ color: MUTED }}>
                {step.copy}
              </p>
            </li>
          ))}
        </ol>
        <p
          className="mt-8 font-mono text-[12px] tracking-[0.04em]"
          style={{ color: MUTED }}
        >
          Approval is a human decision at Fairway — reviewed, not automatic,
          and never guaranteed.
        </p>
      </div>
    </section>
  );
}

function ControlSection() {
  return (
    <section className="px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-[1240px]">
        <SectionHead
          id="control"
          eyebrow="Your SACCO stays in control"
          title={
            <>
              Aurora is the rail.{" "}
              <em style={{ color: GREEN }}>You are the lender.</em>
            </>
          }
          copy="The clearest way to understand Aurora is to see where the line sits. Everything member-facing stays with your SACCO."
        />
        <div className="reveal-up mt-12 grid gap-5 lg:grid-cols-2">
          <div
            className="rounded-[12px] border p-7"
            style={{ borderColor: "rgba(30,71,55,0.3)", background: GREEN }}
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D9A441]">
              Your SACCO does
            </p>
            <ul className="mt-5 flex flex-col gap-3.5">
              {SACCO_DOES.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[14.5px] leading-6 text-[#F6F1E4]"
                >
                  <BadgeCheck
                    className="mt-0.5 h-[18px] w-[18px] flex-none text-[#D9A441]"
                    strokeWidth={1.8}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="rounded-[12px] border p-7"
            style={{ borderColor: LINE, background: SURFACE }}
          >
            <p
              className="text-[11px] font-bold uppercase tracking-[0.2em]"
              style={{ color: GOLD }}
            >
              Aurora & Fairway do
            </p>
            <ul className="mt-5 flex flex-col gap-3.5">
              {AURORA_DOES.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[14.5px] leading-6"
                  style={{ color: INK }}
                >
                  <ShieldCheck
                    className="mt-0.5 h-[18px] w-[18px] flex-none"
                    strokeWidth={1.8}
                    style={{ color: GREEN }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p
          className="reveal-up-soft mt-8 max-w-[640px] text-[15px] font-medium leading-7"
          style={{ color: INK }}
        >
          Aurora never lends directly to individuals.{" "}
          <span style={{ color: MUTED }}>
            Every birr of financing a member or SME receives comes from their
            own SACCO, decided by their own SACCO.
          </span>
        </p>
      </div>
    </section>
  );
}

function MembersSection() {
  const items = [
    {
      icon: Store,
      title: "Working capital when trade needs it",
      copy: "Inventory before a holiday season, inputs before planting, stock for a growing shop — capacity that arrives on the SACCO's timeline, not a distant lender's.",
    },
    {
      icon: Users,
      title: "Decisions made by people who know them",
      copy: "Underwriting stays local. The committee that approves a member's loan is the same one that knows their business and their history.",
    },
    {
      icon: FileCheck2,
      title: "A clearer process to point to",
      copy: "Disbursement status and repayment schedules are recorded and visible to the SACCO — fewer surprises for the borrower, better answers from the office.",
    },
  ];

  return (
    <section
      className="px-5 py-20 sm:px-8 lg:px-12"
      style={{ background: SURFACE }}
    >
      <div className="mx-auto w-full max-w-[1240px]">
        <SectionHead
          id="members"
          eyebrow="For members and SMEs"
          title={
            <>
              The benefit lands where it should —{" "}
              <em style={{ color: GREEN }}>in your community.</em>
            </>
          }
          copy="Members and SMEs never interact with Aurora directly. What they notice is their SACCO saying yes more often."
        />
        <div className="reveal-up-stagger mt-12 grid gap-5 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-[12px] border p-6"
              style={{ borderColor: LINE, background: PAPER }}
            >
              <item.icon
                className="h-6 w-6"
                strokeWidth={1.6}
                style={{ color: GOLD }}
              />
              <h3 className="mt-5 text-[16px] font-semibold" style={{ color: INK }}>
                {item.title}
              </h3>
              <p className="mt-2.5 text-[13.5px] leading-6" style={{ color: MUTED }}>
                {item.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-[1240px]">
        <SectionHead
          id="trust"
          eyebrow="Trust & transparency"
          title={
            <>
              Trustworthy without requiring{" "}
              <em style={{ color: GREEN }}>blockchain knowledge.</em>
            </>
          }
          copy="The technology matters because of what it gives your SACCO: verified access, protected member data, and records that stand up to an audit."
        />
        <div
          className="reveal-up mt-12 overflow-hidden rounded-[12px] border"
          style={{ borderColor: LINE, background: SURFACE }}
        >
          {TRUST_ROWS.map((row, i) => (
            <div
              key={row.title}
              className="grid gap-3 px-6 py-6 sm:grid-cols-[220px_1fr] sm:gap-8 sm:px-8"
              style={{
                borderTop: i === 0 ? "none" : `1px solid ${LINE}`,
              }}
            >
              <p
                className="inline-flex items-start gap-3 text-[15px] font-semibold"
                style={{ color: INK }}
              >
                <row.icon
                  className="mt-0.5 h-5 w-5 flex-none"
                  strokeWidth={1.7}
                  style={{ color: GREEN }}
                />
                {row.title}
              </p>
              <p className="text-[14px] leading-7" style={{ color: MUTED }}>
                {row.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReadinessSection() {
  return (
    <section
      className="px-5 py-20 sm:px-8 lg:px-12"
      style={{ background: SURFACE }}
    >
      <div className="mx-auto grid w-full max-w-[1240px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHead
          id="pilot"
          eyebrow="Pilot readiness"
          title={
            <>
              What a pilot conversation{" "}
              <em style={{ color: GREEN }}>covers.</em>
            </>
          }
          copy="There is no long application to fill before we talk. These are the things we will walk through together to see whether the pilot fits your SACCO. Pilot capacity is limited, and joining the conversation does not commit your SACCO to anything."
        />
        <ul className="reveal-up-stagger grid gap-4 sm:grid-cols-2">
          {READINESS.map((item) => (
            <li
              key={item.text}
              className="flex items-start gap-3.5 rounded-[12px] border p-5"
              style={{ borderColor: LINE, background: PAPER }}
            >
              <item.icon
                className="mt-0.5 h-5 w-5 flex-none"
                strokeWidth={1.7}
                style={{ color: GOLD }}
              />
              <span className="text-[13.5px] leading-6" style={{ color: INK }}>
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="cta" className="px-5 py-24 sm:px-8 lg:px-12">
      <div
        className="relative mx-auto w-full max-w-[1240px] overflow-hidden rounded-[18px] px-7 py-16 text-center sm:px-12"
        style={{ background: GREEN_DEEP }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-40 opacity-40"
          style={{
            background:
              "radial-gradient(90% 120% at 50% 130%, rgba(217,164,65,0.5) 0%, rgba(217,164,65,0.12) 45%, transparent 75%)",
          }}
        />
        <div className="relative">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#D9A441]">
            Aurora · Pilot programme
          </p>
          <h2 className="mx-auto mt-4 max-w-[22ch] font-serif text-[32px] leading-[1.12] text-[#F6F1E4] sm:text-[42px]">
            Bring more capacity to the lending your community trusts.
          </h2>
          <p className="mx-auto mt-5 max-w-[52ch] text-[15px] leading-7 text-[#F6F1E4]/70">
            A 30-minute conversation with Fairway is enough to know whether the
            pilot fits your SACCO. No commitment, no paperwork to start.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#D9A441] px-8 text-[13px] font-bold uppercase tracking-[0.06em] text-[#132E23] transition duration-200 hover:bg-[#E7BC66]"
            >
              Join the pilot
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </a>
            <a
              href="#how"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[#F6F1E4]/30 px-8 text-[13px] font-bold uppercase tracking-[0.06em] text-[#F6F1E4] transition duration-200 hover:bg-white/5"
            >
              Review the process
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="border-t px-5 py-14 sm:px-8 lg:px-12"
      style={{ borderColor: LINE }}
    >
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="flex flex-col justify-between gap-10 sm:flex-row">
          <div className="max-w-[380px]">
            <div className="flex items-center gap-2.5">
              <Image
                src="/brand/Aurora-logo-modified.png"
                alt=""
                width={665}
                height={665}
                className="h-8 w-8 object-contain"
              />
              <Image
                src="/brand/aurora-nav.png"
                alt="Aurora"
                width={944}
                height={137}
                className="h-[14px] w-auto object-contain"
              />
            </div>
            <p className="mt-4 text-[13px] leading-6" style={{ color: MUTED }}>
              Aurora is a verified liquidity and settlement rail for Ethiopian
              SACCOs, operated by Fairway. The SACCO remains the lender.
            </p>
          </div>
          <nav
            className="grid grid-cols-2 gap-x-14 gap-y-2.5 text-[13px]"
            aria-label="Footer"
          >
            <a href="#how" className="hover:underline" style={{ color: MUTED }}>
              How it works
            </a>
            <a
              href="https://fairway.global"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              style={{ color: MUTED }}
            >
              Fairway
            </a>
            <a href="#trust" className="hover:underline" style={{ color: MUTED }}>
              Trust
            </a>
            <Link
              href="/sundown"
              className="hover:underline"
              style={{ color: MUTED }}
            >
              Sundown — open infrastructure
            </Link>
            <a href="#faq" className="hover:underline" style={{ color: MUTED }}>
              FAQ
            </a>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              style={{ color: MUTED }}
            >
              Join the pilot
            </a>
          </nav>
        </div>
        <p
          className="mt-12 border-t pt-6 font-mono text-[11px] leading-6"
          style={{ borderColor: LINE, color: MUTED }}
        >
          © 2026 Fairway · Aurora is a pilot programme. Participation,
          approvals, and liquidity are subject to verification and the pilot
          agreement — nothing on this page is a guarantee of funding.
        </p>
      </div>
    </footer>
  );
}
