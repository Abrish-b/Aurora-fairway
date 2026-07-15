import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Database,
  FileText,
  Filter,
  Fingerprint,
  Layers,
  Menu,
  ScanLine,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Sundown design-system tokens (system-design repo, tokens/*.css)     */
/* ------------------------------------------------------------------ */

const NIGHT = "#07080B";
const NIGHT_850 = "#0A0C10";
const SURFACE = "#0E1016";
const RAISED = "#14171E";
const LINE = "#1C2129";
const LINE_STRONG = "#2A303A";
const BONE = "#F4F0E6";
const MUTED = "#A8A290";
const FAINT = "#726D60";
const GOLD = "#DCBC73";
const GOLD_CORE = "#CBA65E";
const GOLD_LINE = "rgba(203,166,94,0.30)";
const GOLD_TINT = "rgba(203,166,94,0.10)";
const GOLD_INK = "#120E04";
const PENDING = "#E0A24C";
const PENDING_TINT = "rgba(224,162,76,0.13)";
const PENDING_LINE = "rgba(224,162,76,0.38)";

const HORIZON_SKY =
  "radial-gradient(120% 90% at 50% 118%, #FFE281 0%, #E4801E 12%, #7E2E0E 26%, #12101E 55%, #05070E 100%)";

const REPO_URL =
  "https://github.com/fairway-global/sundown-metadata-standard-and-indexer";

const DISPLAY: CSSProperties = {
  fontFamily: "var(--font-sd-display), ui-serif, Georgia, serif",
};
const SERIF_ITALIC: CSSProperties = {
  fontFamily: "var(--font-sd-serif), ui-serif, Georgia, serif",
  fontStyle: "italic",
  fontWeight: 500,
  letterSpacing: 0,
};
const MONO: CSSProperties = {
  fontFamily: "var(--font-sd-mono), ui-monospace, monospace",
  fontVariantNumeric: "tabular-nums",
};

/* ------------------------------------------------------------------ */
/* Content (source: repo README — no invented claims)                  */
/* ------------------------------------------------------------------ */

const CAPS = [
  {
    no: "01",
    icon: FileText,
    title: "Metadata standard",
    copy: "A versioned schema for attaching identity proofs, verification status, and loan-level compliance data to credit-market UTxOs as CIP-20 transaction metadata.",
  },
  {
    no: "02",
    icon: Database,
    title: "Off-chain indexer",
    copy: "Monitors credit-market UTxOs via CIP-89 beacon tokens, verifies attached proofs, tracks loan lifecycles, and exposes a queryable API. Self-hostable.",
  },
  {
    no: "03",
    icon: Fingerprint,
    title: "Proof generation",
    copy: "Zero-knowledge proofs derived from verifiable credentials confirm verification without placing personal data on-chain.",
  },
  {
    no: "04",
    icon: Filter,
    title: "Lender filtering",
    copy: "Capital providers query opportunities by verification status, issuer, or jurisdiction. The view respects each rule.",
  },
];

const FLOW = [
  { no: "01", title: "Origination", copy: "Verified institutions publish loan requests with verification metadata attached." },
  { no: "02", title: "Indexing", copy: "The indexer detects new opportunities via CIP-89 beacons and verifies proofs." },
  { no: "03", title: "Discovery", copy: "Capital providers query for opportunities filtered by verification status or jurisdiction." },
  { no: "04", title: "Funding", copy: "Capital deploys into verified opportunities on the base market." },
  { no: "05", title: "Repayment", copy: "Repayment history associates with the originating entity's credentials." },
  { no: "06", title: "Settlement", copy: "Regulated infrastructure converts between Cardano-native stablecoins and local fiat." },
];

const PRINCIPLES = [
  {
    title: "Technology-agnostic",
    copy: "The standard supports multiple credential and proof systems. No single vendor is assumed.",
  },
  {
    title: "Proof-based",
    copy: "Verification relies on cryptographic proofs that anyone can independently check.",
  },
  {
    title: "Privacy-preserving",
    copy: "No personal or borrower data is stored on-chain. Proofs confirm status, not identity details.",
  },
  {
    title: "Open participation",
    copy: "The metadata layer is opt-in. Participation is not required to use the underlying market.",
  },
];

const FOUNDATIONS = [
  ["Cardano eUTxO", "each loan is a discrete, auditable on-chain object"],
  ["CIP-89 beacon tokens", "distributed discovery without central registries"],
  ["CIP-20 transaction metadata", "proof envelopes ride beside the transaction"],
  ["ZK proofs from verifiable credentials", "verification without exposure"],
  ["USDM", "regulated Cardano-native stablecoin for settlement"],
  ["Midnight", "future integration for proof infrastructure"],
] as const;

const ROADMAP = [
  {
    m: "M1",
    t: "Month 1",
    title: "Specification & design",
    d: "Metadata spec · indexer architecture · SACCO partnership agreements · pilot operating model",
  },
  {
    m: "M2",
    t: "Months 2–3",
    title: "Infrastructure delivery",
    d: "Testnet indexer · validated metadata standard · developer documentation · settlement workflow validation",
  },
  {
    m: "M3",
    t: "Months 4–5",
    title: "Pilot round 1",
    d: "Mainnet deployment · first verified SACCO lending · dRep dashboard · progress report",
  },
  {
    m: "M4",
    t: "Months 6–8",
    title: "Pilot round 2 & market validation",
    d: "Recycled capital deployment · infrastructure improvements · capital-provider engagement",
  },
  {
    m: "M5",
    t: "Months 9–12",
    title: "Pilot round 3 & handover",
    d: "Final pilot round · case study · capital-provider framework · ecosystem documentation",
  },
];

const CONSORTIUM = [
  {
    name: "Fairway",
    role: "Standard development, indexer implementation, verification infrastructure, SACCO onboarding.",
  },
  {
    name: "Fallen Icarus",
    role: "Credit-market architecture, metadata framework review, CIP-89 alignment.",
  },
  {
    name: "Sundial",
    role: "Capital-provider engagement, market design, institutional onboarding.",
  },
];

const PAYLOAD = `{
  "loan_request_id": "lr_8a32f1",
  "originator": {
    "wallet": "addr1q…",
    "proofs": [
      { "type": "kyc",          "issuer": "veridian:et", "exp": "2027-03-12" },
      { "type": "entity",       "issuer": "fairway:legal" },
      { "type": "jurisdiction", "issuer": "veridian:et", "value": "ET" }
    ]
  },
  "compliance": {
    "scheme": "sundown.v1",
    "verifier": "indexer.fairway.global",
    "verified_at": "2026-05-04T12:08:00Z"
  }
}`;

/* ------------------------------------------------------------------ */
/* Motif primitives                                                    */
/* ------------------------------------------------------------------ */

/** Register-mark corner ticks (design-system .sd-ticks). */
function Ticks() {
  const base: CSSProperties = {
    position: "absolute",
    width: 9,
    height: 9,
    borderStyle: "solid",
    borderColor: GOLD_LINE,
    borderWidth: 0,
  };
  return (
    <span aria-hidden className="pointer-events-none absolute inset-0">
      <i style={{ ...base, top: -1, left: -1, borderTopWidth: 1, borderLeftWidth: 1 }} />
      <i style={{ ...base, top: -1, right: -1, borderTopWidth: 1, borderRightWidth: 1 }} />
      <i style={{ ...base, bottom: -1, left: -1, borderBottomWidth: 1, borderLeftWidth: 1 }} />
      <i style={{ ...base, bottom: -1, right: -1, borderBottomWidth: 1, borderRightWidth: 1 }} />
    </span>
  );
}

/** North-star divider (design-system .sd-star-divider). */
function StarDivider() {
  return (
    <div aria-hidden className="flex w-full items-center">
      <span
        className="h-px flex-1"
        style={{ background: `linear-gradient(90deg, transparent, ${GOLD_LINE})` }}
      />
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        className="mx-3 flex-none"
        fill={GOLD}
      >
        <path d="M7 0 L8.4 5.6 L14 7 L8.4 8.4 L7 14 L5.6 8.4 L0 7 L5.6 5.6 Z" />
      </svg>
      <span
        className="h-px flex-1"
        style={{ background: `linear-gradient(90deg, ${GOLD_LINE}, transparent)` }}
      />
    </div>
  );
}

function Marker({ children }: { children: ReactNode }) {
  return (
    <p
      className="text-[13px] uppercase"
      style={{ ...DISPLAY, letterSpacing: "0.22em", color: GOLD }}
    >
      {children}
    </p>
  );
}

function SectionHead({
  id,
  marker,
  title,
  copy,
}: {
  id?: string;
  marker: string;
  title: ReactNode;
  copy?: ReactNode;
}) {
  return (
    <div id={id} className="reveal-up max-w-[640px] scroll-mt-28">
      <Marker>{marker}</Marker>
      <h2
        className="mt-4 text-[26px] font-semibold leading-[1.24] sm:text-[32px]"
        style={{ color: BONE, letterSpacing: "-0.005em" }}
      >
        {title}
      </h2>
      {copy && (
        <p className="mt-3 text-[15px] leading-7" style={{ color: MUTED }}>
          {copy}
        </p>
      )}
    </div>
  );
}

function Em({ children }: { children: ReactNode }) {
  return (
    <em style={{ ...SERIF_ITALIC, color: GOLD, fontSize: "1.12em" }}>{children}</em>
  );
}

function GoldButton({
  href,
  children,
  external,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="inline-flex min-h-11 items-center gap-2 rounded-[3px] px-6 text-[13px] font-semibold transition duration-200 hover:brightness-110"
      style={{ background: GOLD_CORE, color: GOLD_INK }}
    >
      {children}
    </a>
  );
}

function GhostButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex min-h-11 items-center gap-2 rounded-[3px] border px-6 text-[13px] font-medium transition duration-200 hover:bg-white/5"
      style={{ borderColor: LINE_STRONG, color: BONE }}
    >
      {children}
    </a>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function SundownPage() {
  return (
    <div id="top" style={{ background: NIGHT, color: BONE }}>
      <Nav />
      <main>
        <Hero />
        <Boundary />
        <Components />
        <WhyMetadata />
        <Flow />
        <Framework />
        <Architecture />
        <Pilot />
        <Roadmap />
        <Consortium />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------------------- Nav -------------------------------- */

function Nav() {
  const links = [
    { href: "#what", label: "What it is" },
    { href: "#flow", label: "Core flow" },
    { href: "#architecture", label: "Architecture" },
    { href: "#pilot", label: "Pilot" },
    { href: "#roadmap", label: "Roadmap" },
  ];

  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur-md"
      style={{ borderColor: LINE, background: "rgba(7,8,11,0.86)" }}
    >
      <div className="mx-auto flex w-full max-w-[1120px] items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="#top"
          aria-label="Sundown — top of page"
          className="inline-flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#DCBC73]"
        >
          <Image
            src="/brand/sundown-emblem.png"
            alt=""
            width={132}
            height={132}
            className="h-8 w-8 rounded-full object-contain"
            priority
          />
          <span
            className="text-[15px] uppercase"
            style={{ ...DISPLAY, letterSpacing: "0.46em", color: GOLD }}
          >
            Sundown
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium transition hover:text-[#F4F0E6]"
              style={{ color: MUTED }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-9 items-center gap-2 rounded-[3px] px-4 text-[12px] font-semibold transition duration-200 hover:brightness-110"
            style={{ background: GOLD_CORE, color: GOLD_INK }}
          >
            View repository
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
          </a>
        </nav>

        <details className="group relative lg:hidden">
          <summary
            className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-[3px] border [&::-webkit-details-marker]:hidden"
            style={{ borderColor: LINE_STRONG, color: GOLD }}
          >
            <span className="sr-only">Open navigation</span>
            <Menu className="h-5 w-5" strokeWidth={1.5} />
          </summary>
          <div
            className="absolute right-0 top-12 w-[230px] rounded-[5px] border p-2 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.55)]"
            style={{ borderColor: LINE_STRONG, background: RAISED }}
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block rounded-[3px] px-3 py-2.5 text-[13px] font-medium transition hover:bg-white/5"
                style={{ color: BONE }}
              >
                {l.label}
              </a>
            ))}
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block rounded-[3px] px-3 py-2.5 text-[13px] font-semibold"
              style={{ background: GOLD_CORE, color: GOLD_INK }}
            >
              View repository
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}

/* ---------------------------- Hero ------------------------------- */

function Hero() {
  return (
    <section
      className="relative overflow-hidden border-b"
      style={{ borderColor: LINE }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background: HORIZON_SKY,
          maskImage: "linear-gradient(180deg, #000 0%, #000 40%, transparent 92%)",
          WebkitMaskImage:
            "linear-gradient(180deg, #000 0%, #000 40%, transparent 92%)",
        }}
      />
      <div className="relative mx-auto w-full max-w-[1120px] px-5 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-24">
        <Marker>Fairway · Fallen Icarus · Sundial — for Cardano</Marker>
        <h1
          className="mt-7 max-w-[17ch] text-[34px] uppercase leading-[1.1] sm:text-[52px] lg:text-[60px]"
          style={{ ...DISPLAY, letterSpacing: "0.06em", color: BONE }}
        >
          An open <span style={{ color: GOLD }}>identity &amp; compliance</span>{" "}
          layer for P2P credit.
        </h1>
        <p
          className="mt-7 max-w-[58ch] text-[16px] leading-[1.65] sm:text-[17px]"
          style={{ color: MUTED }}
        >
          Sundown is an open-source metadata standard and off-chain indexer for
          peer-to-peer credit markets on Cardano. It attaches verifiable
          identity proofs to loans as transaction metadata and lets lenders
          filter for verified opportunities. It does not rebuild lending rails
          — base contracts remain unchanged.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <GoldButton href={REPO_URL} external>
            View repository
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </GoldButton>
          <GhostButton href="#flow">
            See the core flow
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </GhostButton>
        </div>
        <ul className="mt-10 flex flex-wrap gap-2.5" aria-label="Key properties">
          {[
            { icon: FileText, label: "Metadata standard" },
            { icon: Database, label: "Off-chain indexer" },
            { icon: Fingerprint, label: "Privacy-preserving proofs" },
            { icon: Layers, label: "Base contracts unchanged" },
          ].map((chip) => (
            <li
              key={chip.label}
              className="inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-[12px] font-medium"
              style={{ borderColor: LINE, background: SURFACE, color: MUTED }}
            >
              <chip.icon className="h-3.5 w-3.5" strokeWidth={1.5} style={{ color: GOLD }} />
              {chip.label}
            </li>
          ))}
        </ul>
        <p
          className="mt-10 text-[11px] uppercase tracking-[0.14em]"
          style={{ ...MONO, color: FAINT }}
        >
          Status: pre-development · Treasury proposal · Apache-2.0
        </p>
      </div>
    </section>
  );
}

/* ------------------------- Boundary ------------------------------ */

function Boundary() {
  return (
    <section className="border-b px-5 py-16 sm:px-8" style={{ borderColor: LINE }}>
      <div className="mx-auto w-full max-w-[1120px]">
        <SectionHead
          id="what"
          marker="What Sundown is"
          title={
            <>
              One open layer. One operating company.{" "}
              <Em>Clear scope.</Em>
            </>
          }
          copy="The project separates open infrastructure from commercial operations. Sundown is the open layer; Aurora is Fairway's service built on top of it."
        />
        <div className="reveal-up-stagger mt-10 grid gap-5 lg:grid-cols-2">
          <div
            className="relative rounded-[5px] p-7"
            style={{ background: SURFACE, border: `1px solid ${LINE}` }}
          >
            <Ticks />
            <div className="flex items-center justify-between gap-3">
              <h3
                className="text-[15px] uppercase"
                style={{ ...DISPLAY, letterSpacing: "0.22em", color: GOLD }}
              >
                Sundown
              </h3>
              <span
                className="rounded-[2px] border px-2 py-1 text-[10px] uppercase tracking-[0.14em]"
                style={{ ...MONO, borderColor: GOLD_LINE, color: GOLD, background: GOLD_TINT }}
              >
                Open source · Apache-2.0
              </span>
            </div>
            <ul className="mt-6 flex flex-col gap-3">
              {[
                "Metadata standard for identity and compliance proofs",
                "Off-chain indexing and loan-lifecycle tracking",
                "Zero-knowledge proof generation",
                "Connections to Bitcoin and stablecoin liquidity",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[14px] leading-6"
                  style={{ color: BONE }}
                >
                  <span
                    aria-hidden
                    className="mt-[9px] h-1 w-1 flex-none rounded-full"
                    style={{ background: GOLD }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-[5px] p-7"
            style={{ background: NIGHT_850, border: `1px solid ${LINE}` }}
          >
            <div className="flex items-center justify-between gap-3">
              <h3
                className="text-[15px] uppercase"
                style={{ ...DISPLAY, letterSpacing: "0.22em", color: BONE }}
              >
                Aurora
              </h3>
              <span
                className="rounded-[2px] border px-2 py-1 text-[10px] uppercase tracking-[0.14em]"
                style={{ ...MONO, borderColor: LINE_STRONG, color: MUTED }}
              >
                Proprietary · Fairway
              </span>
            </div>
            <ul className="mt-6 flex flex-col gap-3">
              {[
                "SACCO onboarding and verification operations",
                "Local fiat payments",
                "Legal frameworks and agreements",
                "Lending operations and support",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[14px] leading-6"
                  style={{ color: MUTED }}
                >
                  <span
                    aria-hidden
                    className="mt-[9px] h-1 w-1 flex-none rounded-full"
                    style={{ background: FAINT }}
                  />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/aurora"
              className="mt-6 inline-flex items-center gap-2 text-[13px] font-medium transition hover:brightness-110"
              style={{ color: GOLD }}
            >
              Aurora for SACCOs
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
        <div
          className="reveal-up-soft mt-6 rounded-[5px] border px-5 py-4 text-[13.5px] leading-6"
          style={{ borderColor: GOLD_LINE, background: GOLD_TINT, color: BONE }}
        >
          <span className="font-semibold" style={{ color: GOLD }}>
            The base market stays permissionless.
          </span>{" "}
          Sundown adds verified views and filtering for participants who
          require compliance. It does not gate the underlying market, and the
          metadata layer is opt-in.
        </div>
      </div>
    </section>
  );
}

/* ------------------------- Components ---------------------------- */

function Components() {
  return (
    <section className="border-b px-5 py-16 sm:px-8" style={{ borderColor: LINE }}>
      <div className="mx-auto w-full max-w-[1120px]">
        <SectionHead
          id="components"
          marker="Core components"
          title={
            <>
              Four capabilities around <Em>one envelope.</Em>
            </>
          }
          copy="Identity checks live in transaction metadata, not in smart-contract validators. The envelope travels beside the loan; the indexer makes it queryable."
        />
        <div
          className="reveal-up mt-10 grid overflow-hidden rounded-[5px] border sm:grid-cols-2"
          style={{ borderColor: LINE, background: LINE, gap: 1 }}
        >
          {CAPS.map((cap) => (
            <div key={cap.no} className="relative p-6" style={{ background: SURFACE }}>
              <cap.icon
                className="absolute right-5 top-5 h-[18px] w-[18px]"
                strokeWidth={1.5}
                style={{ color: FAINT }}
              />
              <span
                className="text-[13px]"
                style={{ ...DISPLAY, letterSpacing: "0.2em", color: GOLD }}
              >
                {cap.no}
              </span>
              <h3
                className="mt-4 text-[16px] font-semibold"
                style={{ color: BONE }}
              >
                {cap.title}
              </h3>
              <p className="mt-2 text-[13.5px] leading-6" style={{ color: MUTED }}>
                {cap.copy}
              </p>
            </div>
          ))}
        </div>

        <div
          className="reveal-up-soft mt-6 overflow-hidden rounded-[5px] border"
          style={{ borderColor: LINE, background: SURFACE }}
        >
          <div
            className="flex flex-wrap items-center justify-between gap-2 border-b px-5 py-3"
            style={{ borderColor: LINE }}
          >
            <span
              className="text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: FAINT }}
            >
              Illustrative proof envelope
            </span>
            <span className="text-[12px]" style={{ ...MONO, color: GOLD }}>
              sundown.v1 · draft
            </span>
          </div>
          <pre
            className="m-0 overflow-x-auto px-5 py-5 text-[12px] leading-[1.7]"
            style={{ ...MONO, color: MUTED }}
          >
            {PAYLOAD}
          </pre>
        </div>
      </div>
    </section>
  );
}

/* ----------------------- Why metadata ---------------------------- */

function WhyMetadata() {
  const items = [
    {
      title: "Efficiency",
      copy: "No additional on-chain computation. Verification costs nothing at the contract level.",
    },
    {
      title: "Flexibility",
      copy: "New proof types can be added without modifying deployed lending contracts.",
    },
    {
      title: "Permissionless",
      copy: "Lending contracts remain open. The metadata layer is opt-in for those who need it.",
    },
  ];
  return (
    <section className="border-b px-5 py-16 sm:px-8" style={{ borderColor: LINE }}>
      <div className="mx-auto w-full max-w-[1120px]">
        <SectionHead
          marker="Design decision"
          title={
            <>
              Metadata, <Em>not validators.</Em>
            </>
          }
          copy="Sundown deliberately places identity logic in transaction metadata rather than in smart-contract validators."
        />
        <div className="reveal-up-stagger mt-10 grid gap-5 md:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="border-l pl-6"
              style={{ borderColor: i === 0 ? GOLD_LINE : LINE }}
            >
              <p
                className="text-[12px]"
                style={{ ...DISPLAY, letterSpacing: "0.18em", color: GOLD }}
              >
                {`0${i + 1}`}
              </p>
              <h3 className="mt-3 text-[16px] font-semibold" style={{ color: BONE }}>
                {item.title}
              </h3>
              <p className="mt-2 text-[13.5px] leading-6" style={{ color: MUTED }}>
                {item.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- Flow ------------------------------- */

function Flow() {
  return (
    <section className="border-b px-5 py-16 sm:px-8" style={{ borderColor: LINE }}>
      <div className="mx-auto w-full max-w-[1120px]">
        <SectionHead
          id="flow"
          marker="Core flow"
          title={
            <>
              From origination to <Em>settlement.</Em>
            </>
          }
          copy="Six stages. Identity proofs travel as structured metadata; lenders see a filtered, eligibility-aware view."
        />
        <ol className="reveal-up-stagger mt-10 grid gap-x-0 gap-y-8 sm:grid-cols-2 lg:grid-cols-6">
          {FLOW.map((step) => (
            <li
              key={step.no}
              className="px-0 sm:px-5 lg:border-l lg:first:border-l-0 lg:first:pl-0"
              style={{ borderColor: LINE }}
            >
              <span
                className="text-[11px]"
                style={{ ...DISPLAY, letterSpacing: "0.18em", color: GOLD }}
              >
                STEP {step.no}
              </span>
              <h3 className="mt-3 text-[15px] font-semibold" style={{ color: BONE }}>
                {step.title}
              </h3>
              <p className="mt-1.5 text-[12px] leading-5" style={{ color: FAINT }}>
                {step.copy}
              </p>
            </li>
          ))}
        </ol>
        <p
          className="mt-10 flex items-center gap-2 text-[12px]"
          style={{ ...MONO, color: FAINT }}
        >
          <ScanLine className="h-3.5 w-3.5" strokeWidth={1.5} style={{ color: GOLD }} />
          Proofs ride beside the transaction · base contracts unchanged
        </p>
      </div>
    </section>
  );
}

/* ------------------------- Framework ----------------------------- */

function Framework() {
  return (
    <section className="border-b px-5 py-16 sm:px-8" style={{ borderColor: LINE }}>
      <div className="mx-auto w-full max-w-[1120px]">
        <SectionHead
          marker="Verification framework"
          title={
            <>
              Four principles, <Em>stated plainly.</Em>
            </>
          }
        />
        <div className="reveal-up-stagger mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLES.map((p) => (
            <div
              key={p.title}
              className="relative rounded-[5px] p-6"
              style={{ background: SURFACE, border: `1px solid ${LINE}` }}
            >
              <span
                aria-hidden
                className="absolute left-4 right-4 top-0 h-px"
                style={{ background: GOLD_LINE }}
              />
              <h3 className="text-[15px] font-semibold" style={{ color: BONE }}>
                {p.title}
              </h3>
              <p className="mt-2 text-[13px] leading-6" style={{ color: MUTED }}>
                {p.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------ Architecture --------------------------- */

function Architecture() {
  return (
    <section className="border-b px-5 py-16 sm:px-8" style={{ borderColor: LINE }}>
      <div className="mx-auto grid w-full max-w-[1120px] gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHead
            id="architecture"
            marker="Architecture"
            title={
              <>
                Three layers. <Em>Clear boundaries.</Em>
              </>
            }
            copy="Sundown is the middle layer. It does not own the base market, and it does not own credential issuance."
          />
          <div className="reveal-up mt-8 flex flex-col gap-2.5">
            <div
              className="rounded-[3px] border px-4 py-3.5 text-[13.5px]"
              style={{ borderColor: LINE, background: SURFACE, color: MUTED }}
            >
              Identity providers{" "}
              <span style={{ color: FAINT }}>· issuers, verifiable credentials</span>
            </div>
            <div
              className="relative rounded-[3px] p-4"
              style={{ background: SURFACE, border: `1px solid ${LINE}` }}
            >
              <Ticks />
              <div className="flex items-center gap-2.5">
                <span
                  className="rounded-[2px] border px-2 py-0.5 text-[10px] uppercase tracking-[0.12em]"
                  style={{ ...MONO, borderColor: GOLD_LINE, color: GOLD, background: GOLD_TINT }}
                >
                  Verified
                </span>
                <span className="text-[13.5px] font-semibold" style={{ color: BONE }}>
                  Sundown layer
                </span>
              </div>
              <p className="mt-1.5 text-[12px]" style={{ color: MUTED }}>
                Metadata standard · indexing · discovery · filtering
              </p>
            </div>
            <div
              className="rounded-[3px] border px-4 py-3.5 text-[13.5px]"
              style={{ borderColor: LINE, background: SURFACE, color: MUTED }}
            >
              Base lending{" "}
              <span style={{ color: FAINT }}>· open P2P credit-market contracts</span>
            </div>
          </div>
        </div>

        <div
          className="reveal-up-soft overflow-hidden rounded-[5px] border"
          style={{ borderColor: LINE, background: SURFACE }}
        >
          <p
            className="border-b px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em]"
            style={{ borderColor: LINE, color: FAINT }}
          >
            Technical foundations
          </p>
          <ul className="flex flex-col">
            {FOUNDATIONS.map(([term, def], i) => (
              <li
                key={term}
                className="grid gap-1 px-5 py-3.5 sm:grid-cols-[240px_1fr] sm:gap-4"
                style={{ borderTop: i === 0 ? "none" : `1px solid ${LINE}` }}
              >
                <span className="text-[12.5px] font-medium" style={{ ...MONO, color: GOLD }}>
                  {term}
                </span>
                <span className="text-[13px] leading-6" style={{ color: MUTED }}>
                  {def}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- Pilot ------------------------------ */

function Pilot() {
  return (
    <section className="border-b px-5 py-16 sm:px-8" style={{ borderColor: LINE }}>
      <div className="mx-auto grid w-full max-w-[1120px] gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <SectionHead
            id="pilot"
            marker="Pilot context"
            title={
              <>
                Validated with <Em>Ethiopian SACCOs.</Em>
              </>
            }
            copy="The infrastructure is validated through a Treasury-backed pilot with Ethiopian Savings and Credit Cooperative Organizations. A reserved ADA allocation is converted to USDM and deployed in progressive lending rounds into verified opportunities."
          />
          <p
            className="reveal-up-soft mt-6 max-w-[58ch] text-[14px] leading-7"
            style={{ color: MUTED }}
          >
            SACCOs keep responsibility for borrower onboarding, underwriting,
            compliance, and collections. Sundown provides the verification and
            discovery infrastructure; the operational rail for the pilot is
            Aurora.
          </p>
          <Link
            href="/aurora"
            className="reveal-up-soft mt-6 inline-flex items-center gap-2 text-[13px] font-medium transition hover:brightness-110"
            style={{ color: GOLD }}
          >
            Aurora for SACCOs
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </Link>
        </div>

        <div
          className="reveal-up relative rounded-[5px] p-6"
          style={{ background: SURFACE, border: `1px solid ${LINE}` }}
        >
          <Ticks />
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.18em]"
            style={{ color: FAINT }}
          >
            Pilot operating facts
          </p>
          <dl className="mt-4 flex flex-col">
            {[
              ["Liquidity custody", "Independent pilot trustees · 2-of-3 multisignature"],
              ["Settlement", "Encryptus · regulated settlement infrastructure"],
              ["Instrument", "USDM · regulated Cardano-native stablecoin"],
              ["Operations", "Aurora · operated by Fairway"],
              ["Underwriting", "Remains with each SACCO"],
            ].map(([k, v], i) => (
              <div
                key={k}
                className="grid gap-1 py-3 sm:grid-cols-[150px_1fr] sm:gap-4"
                style={{ borderTop: i === 0 ? "none" : `1px solid ${LINE}` }}
              >
                <dt className="text-[12px] font-medium" style={{ ...MONO, color: GOLD }}>
                  {k}
                </dt>
                <dd className="m-0 text-[13px] leading-6" style={{ color: MUTED }}>
                  {v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Roadmap ----------------------------- */

function Roadmap() {
  return (
    <section className="border-b px-5 py-16 sm:px-8" style={{ borderColor: LINE }}>
      <div className="mx-auto w-full max-w-[1120px]">
        <SectionHead
          id="roadmap"
          marker="Milestone roadmap"
          title={
            <>
              Twelve months, <Em>five gates.</Em>
            </>
          }
          copy="Specifications, indexer source, documentation, and tooling are published as open-source deliverables on the milestone schedule."
        />
        <div
          className="reveal-up mt-10 overflow-x-auto rounded-[5px] border"
          style={{ borderColor: LINE }}
        >
          <table className="w-full min-w-[680px] border-collapse text-left">
            <thead>
              <tr style={{ background: RAISED }}>
                {["Milestone", "Timeline", "Deliverables"].map((h) => (
                  <th
                    key={h}
                    className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.16em]"
                    style={{ color: FAINT, borderBottom: `1px solid ${LINE}` }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROADMAP.map((row, i) => (
                <tr key={row.m} style={{ background: i % 2 ? NIGHT_850 : SURFACE }}>
                  <td
                    className="whitespace-nowrap px-4 py-3.5 align-top text-[13px] font-medium"
                    style={{ ...MONO, color: GOLD, borderBottom: `1px solid ${LINE}` }}
                  >
                    {row.m} — {row.title}
                  </td>
                  <td
                    className="whitespace-nowrap px-4 py-3.5 align-top text-[13px]"
                    style={{ ...MONO, color: MUTED, borderBottom: `1px solid ${LINE}` }}
                  >
                    {row.t}
                  </td>
                  <td
                    className="px-4 py-3.5 align-top text-[13px] leading-6"
                    style={{ color: MUTED, borderBottom: `1px solid ${LINE}` }}
                  >
                    {row.d}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div
          className="reveal-up-soft mt-6 flex items-start gap-3 rounded-[5px] border px-5 py-4"
          style={{ borderColor: PENDING_LINE, background: PENDING_TINT }}
        >
          <span
            aria-hidden
            className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full"
            style={{ background: PENDING }}
          />
          <p className="text-[13.5px] leading-6" style={{ color: BONE }}>
            <span className="font-semibold" style={{ color: PENDING }}>
              Pre-development.
            </span>{" "}
            This repository is a placeholder for the Sundown Treasury proposal.
            Development commences upon approval.
          </p>
        </div>
      </div>
    </section>
  );
}

/* -------------------------- Consortium --------------------------- */

function Consortium() {
  return (
    <section className="border-b px-5 py-16 sm:px-8" style={{ borderColor: LINE }}>
      <div className="mx-auto w-full max-w-[1120px]">
        <SectionHead
          id="partnership"
          marker="Consortium"
          title={
            <>
              Built by three parties, <Em>each with a defined role.</Em>
            </>
          }
        />
        <div className="reveal-up-stagger mt-10 grid gap-5 md:grid-cols-3">
          {CONSORTIUM.map((c) => (
            <div
              key={c.name}
              className="rounded-[5px] p-6"
              style={{ background: SURFACE, border: `1px solid ${LINE}` }}
            >
              <h3
                className="text-[14px] uppercase"
                style={{ ...DISPLAY, letterSpacing: "0.18em", color: GOLD }}
              >
                {c.name}
              </h3>
              <p className="mt-3 text-[13.5px] leading-6" style={{ color: MUTED }}>
                {c.role}
              </p>
            </div>
          ))}
        </div>
        <p className="reveal-up-soft mt-8 text-[12.5px] leading-6" style={{ color: FAINT }}>
          Pilot service providers: independent pilot trustees (2-of-3
          multisignature custody of pilot liquidity) and Encryptus (regulated
          settlement infrastructure).
        </p>
      </div>
    </section>
  );
}

/* ---------------------------- Footer ----------------------------- */

function Footer() {
  return (
    <footer className="px-5 py-14 sm:px-8">
      <div className="mx-auto w-full max-w-[1120px]">
        <StarDivider />
        <div className="mt-10 flex flex-col justify-between gap-10 sm:flex-row sm:items-start">
          <div className="max-w-[400px]">
            <div className="flex items-center gap-3">
              <Image
                src="/brand/sundown-emblem.png"
                alt=""
                width={132}
                height={132}
                className="h-9 w-9 rounded-full object-contain"
              />
              <span
                className="text-[14px] uppercase"
                style={{ ...DISPLAY, letterSpacing: "0.46em", color: GOLD }}
              >
                Sundown
              </span>
            </div>
            <p className="mt-4 text-[13px] leading-6" style={{ color: MUTED }}>
              An open-source identity and compliance layer for P2P credit
              markets on Cardano. Built by Fairway in consortium with Fallen
              Icarus and Sundial.
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-x-12 gap-y-2.5 text-[13px]" aria-label="Footer">
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#F4F0E6]"
              style={{ color: MUTED }}
            >
              Repository
            </a>
            <a
              href="https://fairway.global"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#F4F0E6]"
              style={{ color: MUTED }}
            >
              Fairway
            </a>
            <Link
              href="/aurora"
              className="transition hover:text-[#F4F0E6]"
              style={{ color: MUTED }}
            >
              Aurora for SACCOs
            </Link>
            <Link
              href="/"
              className="transition hover:text-[#F4F0E6]"
              style={{ color: MUTED }}
            >
              Aurora stack
            </Link>
          </nav>
        </div>
        <p
          className="mt-12 border-t pt-6 text-[11px] leading-6"
          style={{ ...MONO, borderColor: LINE, color: FAINT }}
        >
          © 2026 Fairway Oy · Apache-2.0 · Sundown Treasury proposal — link
          pending governance submission
        </p>
      </div>
    </footer>
  );
}
