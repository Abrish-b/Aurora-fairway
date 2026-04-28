import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Moon,
  ShieldCheck,
  Lock,
  Check,
  Database,
  Building2,
  Layers,
  LineChart,
  Vault,
  Briefcase,
  Network,
} from "lucide-react";
import { AuroraHeroLighting } from "@/components/aurora/AuroraHeroLighting";

/*  Aurora — Credit markets for Bitcoin on chain
    Tokens
    NAVY     #1B384C    brand
    INK      #0B1620    text
    BONE     #F2EEE6    background — warm Nordic linen
    PAPER    #F8F5ED    inset surfaces
    DAWN     #E8C97A    sunrise gold — primary signal
    STEEL    #5C8FB0    institutional cyan
    AURORA   #7AAD8C    aurora green — tertiary glow only
    BTC      #C8923D    muted bitcoin gold — collateral artifacts
*/

export default function AuroraBTCCreditPage() {
  return (
    <div className="min-h-screen bg-[#F2EEE6] text-[#0B1620] font-sans antialiased">
      <Nav />
      <Hero />
      <WhyNow />
      <Problem />
      <HowItWorks />
      <TrustLayer />
      <Infrastructure />
      <Participants />
      <LoanInstruments />
      <Underwriting />
      <Ecosystem />
      <Vision />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* --------------------------------- NAV -------------------------------- */

function Nav() {
  const links = [
    { href: "#why-now", label: "Why now" },
    { href: "#how-it-works", label: "How it works" },
    { href: "#trust-layer", label: "Trust layer" },
    { href: "#markets", label: "Markets" },
    { href: "#ecosystem", label: "Ecosystem" },
    { href: "#vision", label: "Vision" },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#06111E]/45 text-[#F8F5ED] shadow-[0_12px_45px_-28px_rgba(0,0,0,0.9)] backdrop-blur-2xl">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 md:px-10">
        <a href="#top" className="flex items-baseline gap-3">
          <span className="font-serif text-[20px] italic text-[#F8F5ED]">Aurora</span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.22em] text-[#F8F5ED]/45 sm:inline">
            by Fairway
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-[11px] uppercase tracking-[0.16em] text-[#F8F5ED]/62 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-[#FFE0A0]">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3 md:gap-5">
          <a
            href="#"
            className="hidden items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-[#F8F5ED]/52 transition hover:text-[#FFE0A0] md:inline-flex"
          >
            <Moon className="h-3 w-3" /> Kaamos
          </a>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 border border-white/15 bg-white/[0.08] px-3 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-[#F8F5ED] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition hover:border-[#E8C97A]/55 hover:bg-[#E8C97A]/15 hover:text-[#FFE0A0] sm:px-4"
          >
            <span className="hidden sm:inline">Request access</span>
            <span className="sm:hidden">Access</span>
          </a>
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-[#E8C97A]/35 to-transparent" />
    </header>
  );
}

/* --------------------------------- HERO ------------------------------- */

function Hero() {
  return (
    <AuroraHeroLighting>
      <div className="relative mx-auto max-w-[1440px] px-6 pt-32 pb-20 md:px-10 md:pt-36 md:pb-28">
        <div className="mb-12 flex flex-wrap items-baseline justify-between gap-3">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#F8F5ED]/50">
            Aurora · v0.1 · Bitcoin credit markets
          </div>
          <div className="text-left font-mono text-[10px] uppercase tracking-[0.22em] text-[#F8F5ED]/50 md:text-right">
            <div>Reykjavík · Helsinki · 64.1466° N</div>
            <div className="mt-2 hidden text-[9px] text-[#E8C97A]/55 md:block">
              Move mouse or use WASD / arrow keys
            </div>
          </div>
        </div>

        <h1
          className="max-w-[1040px] bg-clip-text font-serif text-[48px] font-normal leading-[0.96] text-transparent md:text-[120px]"
          style={{
            backgroundImage:
              "linear-gradient(112deg, #fffaf0 0%, #f8f5ed 34%, #ffca55 52%, #ffffff 68%, #8fb8d0 100%)",
            backgroundPosition: "var(--aurora-light-x-percent) 50%",
            backgroundSize: "210% 100%",
            textShadow:
              "0 0 34px rgba(255, 184, 19, var(--aurora-light-headline-alpha)), 0 16px 64px rgba(0, 0, 0, 0.58)",
          }}
        >
          Credit markets for
          <br />
          <span className="italic">Bitcoin, on chain.</span>
        </h1>

        <div className="mt-12 grid gap-10 md:mt-20 md:grid-cols-12 md:gap-12">
          <p className="max-w-2xl text-[17px] leading-[1.65] text-[#F8F5ED]/72 md:col-span-6">
            Aurora is Fairway&apos;s institutional layer for Bitcoin-backed credit
            markets — turning the world&apos;s hardest asset into{" "}
            <span className="italic text-[#FFE0A0]">
              productive collateral for verified, programmable on-chain credit.
            </span>
          </p>

          <div className="flex flex-wrap items-center gap-4 md:col-span-5 md:col-start-8">
            <a
              href="#cta"
              className="group inline-flex items-center gap-3 bg-[#F8F5ED] px-6 py-4 text-[11px] font-medium uppercase tracking-[0.18em] text-[#06101D] transition hover:bg-[#FFE8AD]"
              style={{
                boxShadow:
                  "0 0 42px rgba(255, 184, 19, var(--aurora-light-card-alpha)), inset 0 1px 0 rgba(255, 255, 255, 0.64)",
              }}
            >
              Request access
              <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 border border-white/15 bg-[#06111E]/35 px-6 py-4 text-[11px] font-medium uppercase tracking-[0.18em] text-[#F8F5ED]/80 backdrop-blur-xl transition hover:border-[#E8C97A]/45 hover:text-[#FFE0A0]"
              style={{
                boxShadow:
                  "0 0 34px rgba(255, 184, 19, var(--aurora-light-card-alpha)), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
              }}
            >
              Explore Aurora
            </a>
          </div>
        </div>

        <div className="mt-16 md:mt-24">
          <CapitalMarketsDashboard />
        </div>
      </div>
    </AuroraHeroLighting>
  );
}

/* --------------------- HERO DASHBOARD --------------------- */

function CapitalMarketsDashboard() {
  return (
    <div
      className="overflow-hidden border border-white/10 bg-white/[0.045] shadow-[0_38px_110px_-46px_rgba(0,0,0,0.78)] backdrop-blur-xl"
      style={{
        boxShadow:
          "0 38px 110px -46px rgba(0, 0, 0, 0.78), 0 0 62px rgba(255, 184, 19, var(--aurora-light-card-alpha)), inset 0 1px 0 rgba(255, 255, 255, 0.09)",
      }}
    >
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-white/[0.055] px-6 py-3">
        <div className="flex items-center gap-4">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#F8F5ED]/58">
            Aurora · Bitcoin credit markets
          </div>
          <div className="hidden h-3 w-px bg-white/15 md:block" />
          <div className="hidden font-mono text-[10px] text-[#F8F5ED]/52 md:block">
            Mainnet · audited
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[#F8F5ED]/52 md:flex">
            <span>Verified NAV</span>
            <span className="font-serif text-[14px] not-italic text-[#FFE0A0]">$4.21B</span>
          </div>
          <div className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-[#9FC8DF]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FDB813]" />
            Live
          </div>
        </div>
      </div>

      <div className="grid gap-px bg-white/10 md:grid-cols-2">
        <CollateralVaultPanel />
        <CreditOpportunityPanel />
        <LoanInstrumentPanel />
        <UnderwritingPanel />
      </div>

      <div className="grid gap-6 border-t border-white/10 bg-white/[0.045] px-6 py-4 font-mono text-[10px] uppercase tracking-[0.22em] text-[#F8F5ED]/54 md:grid-cols-4">
        <Strip k="BTC under collateral" v="32,841" />
        <Strip k="Active counterparties" v="148" />
        <Strip k="Tokenized loans" v="87" />
        <Strip k="Verified jurisdictions" v="14" />
      </div>
    </div>
  );
}

function Strip({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <span>{k}</span>
      <span className="font-serif text-[16px] not-italic text-[#FFE0A0]">{v}</span>
    </div>
  );
}

function PanelHeader({ kicker, status }: { kicker: string; status?: string }) {
  return (
    <div className="flex items-center justify-between border-b border-white/10 px-6 py-3">
      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#F8F5ED]/54">
        {kicker}
      </div>
      {status ? (
        <div className="inline-flex items-center gap-1.5 font-mono text-[9.5px] uppercase tracking-[0.22em] text-[#9FC8DF]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#FDB813]" />
          {status}
        </div>
      ) : null}
    </div>
  );
}

function CollateralVaultPanel() {
  return (
    <div className="bg-[#07111F]/78">
      <PanelHeader kicker="Collateral vault" status="Active" />
      <div className="space-y-6 px-6 py-6 md:px-8">
        <div>
          <div className="font-serif text-[40px] leading-none text-[#FFE0A0] md:text-[52px]">
            1,847.2 <span className="font-mono text-[18px] tracking-normal text-[#F8F5ED]/48">BTC</span>
          </div>
          <div className="mt-2 font-mono text-[11px] text-[#F8F5ED]/58">
            $124.32M @ $67,302 / BTC
          </div>
        </div>

        <div>
          <div className="flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-[#F8F5ED]/54">
            <span>LTV</span>
            <span className="text-[#FFE0A0]">42%</span>
          </div>
          <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#5C8FB0] via-[#E8C97A] to-[#FDB813]"
              style={{ width: "42%" }}
            />
          </div>
          <div className="mt-3 flex items-baseline justify-between font-mono text-[10px] text-[#F8F5ED]/54">
            <span>Liquidation</span>
            <span className="text-[#F8F5ED]">$31,210 / BTC</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Field k="Custody" v="Multi-sig · MPC" />
          <Field k="Audit" v="Annual · big-four" />
        </div>
      </div>
    </div>
  );
}

function CreditOpportunityPanel() {
  return (
    <div className="bg-[#07111F]/72">
      <PanelHeader kicker="Open credit request" status="A+ tier" />
      <div className="space-y-6 px-6 py-6 md:px-8">
        <div>
          <div className="font-serif text-[40px] leading-none text-[#FFE0A0] md:text-[52px]">
            12,000,000 <span className="font-mono text-[18px] tracking-normal text-[#F8F5ED]/48">USDC</span>
          </div>
          <div className="mt-2 font-mono text-[11px] text-[#F8F5ED]/58">
            9.20% APR · 180d · bullet
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Field k="Counterparty" v="Verified · BaFin" />
          <Field k="Jurisdiction" v="EU · DE" />
          <Field k="Coll. ratio" v="240%" />
          <Field k="Schedule" v="Quarterly fee" />
        </div>

        <div className="flex flex-wrap gap-2">
          <Tag icon={ShieldCheck} label="KYB attested" />
          <Tag icon={Check} label="Issuer recognized" />
          <Tag icon={Lock} label="ZK underwriting" />
        </div>
      </div>
    </div>
  );
}

function LoanInstrumentPanel() {
  return (
    <div className="bg-[#07111F]/72">
      <PanelHeader kicker="Loan instrument" status="Issued" />
      <div className="space-y-6 px-6 py-6 md:px-8">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#F8F5ED]/48">
            Series III · BTC-backed
          </div>
          <div className="mt-1 font-serif text-[36px] leading-none text-[#FFE0A0] md:text-[44px]">
            FWY—BOND—024
          </div>
          <div className="mt-2 font-serif text-[14px] italic text-[#F8F5ED]/58">
            European treasury financing
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 border-t border-white/10 pt-5">
          <Field k="Standard" v="CIP-113 · ERC-3643" />
          <Field k="Maturity" v="2027 · Q3" />
          <Field k="Holders" v="KYC&apos;d only" />
          <Field k="Coupon" v="Quarterly · 6.40%" />
        </div>

        <div className="flex items-center justify-between border-t border-white/10 pt-4">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#F8F5ED]/48">
            Transferable · permissioned
          </div>
          <div className="h-7 w-7 rounded-full bg-gradient-to-br from-[#E8C97A] via-[#C8923D] to-[#1B384C]" />
        </div>
      </div>
    </div>
  );
}

function UnderwritingPanel() {
  return (
    <div className="bg-[#07111F]/78">
      <PanelHeader kicker="Underwriting signal" status="Refreshed 4m" />
      <div className="space-y-5 px-6 py-6 md:px-8">
        <div className="flex items-baseline justify-between">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#F8F5ED]/48">
              Risk band
            </div>
            <div className="mt-2 font-serif text-[64px] leading-none text-[#FFE0A0] md:text-[80px]">
              A
            </div>
          </div>
          <div className="text-right">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#F8F5ED]/48">
              Composite
            </div>
            <div className="mt-2 font-serif text-[28px] text-[#FFE0A0]">782</div>
          </div>
        </div>

        <div className="space-y-2">
          <SignalBar label="BTC collateral ratio" pct={92} />
          <SignalBar label="Repayment history" pct={84} />
          <SignalBar label="Verified entity" pct={100} />
          <SignalBar label="Off-chain attestation" pct={71} />
        </div>

        <div className="flex items-center justify-between border-t border-white/10 pt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-[#F8F5ED]/48">
          <span>Raw data exposed</span>
          <span className="text-[#FFE0A0]">none · zk-attested</span>
        </div>
      </div>
    </div>
  );
}

function SignalBar({ label, pct }: { label: string; pct: number }) {
  return (
    <div>
      <div className="flex items-baseline justify-between font-mono text-[10px] text-[#F8F5ED]/58">
        <span className="uppercase tracking-[0.18em]">{label}</span>
        <span className="text-[#FFE0A0]">{pct}</span>
      </div>
      <div className="mt-1 h-1 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#5C8FB0] via-[#E8C97A] to-[#FDB813]"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function Field({ k, v }: { k: string; v: string }) {
  return (
    <div
      className="border border-white/10 bg-white/[0.045] px-3 py-2"
      style={{
        boxShadow:
          "0 0 18px rgba(255, 184, 19, var(--aurora-light-card-alpha)), inset 0 1px 0 rgba(255, 255, 255, 0.06)",
      }}
    >
      <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#F8F5ED]/45">{k}</div>
      <div className="mt-0.5 font-mono text-[11px] text-[#FFE0A0]">{v}</div>
    </div>
  );
}

function Tag({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 border border-[#5C8FB0]/40 bg-[#5C8FB0]/10 px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.22em] text-[#D7EFFA]">
      <Icon className="h-3 w-3" />
      {label}
    </span>
  );
}

/* ------------------------------- WHY NOW ------------------------------ */

function WhyNow() {
  const points = [
    { k: "ETF era", v: "Bitcoin ETFs legitimized BTC as a treasury holding for institutions, funds, and listed companies." },
    { k: "Stablecoin proof", v: "Stablecoin-denominated credit markets demonstrated demand for compliant on-chain debt at scale." },
    { k: "Tokenization", v: "Tokenized treasuries and structured products are moving fixed-income capital onto public chains." },
    { k: "Identity rails", v: "Verifiable credentials, zk attestations, and on-chain compliance frameworks are now production-grade." },
    { k: "Idle balance sheets", v: "Most institutional BTC sits dormant — held, but financially unproductive." },
    { k: "The intersection", v: "Aurora sits where Bitcoin collateral, verified counterparties, and programmable credit converge." },
  ];

  return (
    <section id="why-now" className="border-b border-[#0B1620]/10">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32">
        <div className="mb-16 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-1 font-mono text-[12px] tracking-[0.18em] text-[#0B1620]/45">
            § 01
          </div>
          <div className="md:col-span-7">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#0B1620]/45">
              The market shift
            </div>
            <h2 className="mt-5 font-serif text-[40px] leading-[1.04] tracking-[-0.015em] md:text-[64px]">
              Bitcoin is becoming{" "}
              <span className="italic text-[#1B384C]">balance-sheet infrastructure.</span>
            </h2>
          </div>
          <p className="md:col-span-4 self-end max-w-md text-[14px] leading-[1.7] text-[#0B1620]/70">
            The conditions for institutional Bitcoin credit markets — pristine
            collateral, mature compliance rails, audited custody, on-chain
            settlement — exist for the first time, simultaneously.
          </p>
        </div>

        <div className="grid gap-px bg-[#0B1620]/12 md:grid-cols-3">
          {points.map((p) => (
            <div key={p.k} className="bg-[#F2EEE6] p-8 md:p-10">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#5C8FB0]">{p.k}</div>
              <p className="mt-6 text-[14px] leading-[1.75] text-[#0B1620]/75">{p.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- PROBLEM ------------------------------ */

function Problem() {
  return (
    <section className="border-b border-[#0B1620]/10 bg-[#0B1620]/[0.025]">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32">
        <div className="mb-16 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-1 font-mono text-[12px] tracking-[0.18em] text-[#0B1620]/45">
            § 02
          </div>
          <div className="md:col-span-9">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#0B1620]/45">
              The problem
            </div>
            <h2 className="mt-5 font-serif text-[40px] leading-[1.04] tracking-[-0.015em] md:text-[64px]">
              Bitcoin sits idle —{" "}
              <span className="italic text-[#1B384C]">or enters fragmented DeFi.</span>
            </h2>
          </div>
        </div>

        <div className="grid gap-px bg-[#0B1620]/12 md:grid-cols-3">
          <div className="bg-[#F2EEE6] p-8 md:p-10">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#0B1620]/55">
              The old model
            </div>
            <h3 className="mt-6 font-serif text-[26px] leading-[1.2] text-[#0B1620]">
              Bitcoin sits dormant.
            </h3>
            <p className="mt-4 text-[14px] leading-[1.7] text-[#0B1620]/70">
              Institutional BTC accumulates on balance sheets and in custody —
              but produces no return, supports no credit, and finances no
              counterparty.
            </p>
          </div>

          <div className="bg-[#F2EEE6] p-8 md:p-10">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#0B1620]/55">
              The current DeFi model
            </div>
            <h3 className="mt-6 font-serif text-[26px] leading-[1.2] text-[#0B1620]">
              Wrapped, fragmented, retail-risked.
            </h3>
            <p className="mt-4 text-[14px] leading-[1.7] text-[#0B1620]/70">
              BTC enters DeFi only by being bridged, wrapped, and pushed into
              opaque counterparty pools — fragmenting liquidity and exposing
              institutions to retail-grade risk.
            </p>
          </div>

          <div className="relative bg-[#1B384C] p-8 text-[#F2EEE6] md:p-10">
            <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(232,201,122,0.18),transparent_60%)]" />
            <div className="relative">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#E8C97A]">
                The Aurora model
              </div>
              <h3 className="mt-6 font-serif text-[26px] leading-[1.2] italic">
                Compliant credit, on-chain.
              </h3>
              <p className="mt-4 text-[14px] leading-[1.7] text-white/75">
                BTC becomes pristine collateral for verified counterparties —
                participating in tokenized credit instruments under
                jurisdictional fit, with privacy-preserving underwriting.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-x-10 gap-y-4 border-t border-[#0B1620]/15 pt-8 md:grid-cols-3">
          <Pill k="Counterparty trust" />
          <Pill k="Jurisdiction-aware access" />
          <Pill k="Privacy-preserving verification" />
          <Pill k="Clear loan instruments" />
          <Pill k="Transparent servicing" />
          <Pill k="Institutional market structure" />
        </div>
      </div>
    </section>
  );
}

function Pill({ k }: { k: string }) {
  return (
    <div className="flex items-center gap-3 border-b border-dotted border-[#0B1620]/20 pb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[#0B1620]/65">
      <Check className="h-3.5 w-3.5 text-[#1B384C]" strokeWidth={2.5} />
      {k}
    </div>
  );
}

/* --------------------------- HOW IT WORKS --------------------------- */

function HowItWorks() {
  const steps = [
    {
      n: "01",
      role: "Onboarding",
      title: "Verified entry",
      copy: "Institutions and sophisticated counterparties onboard through Fairway identity rails — one credentialed surface, reusable across markets.",
    },
    {
      n: "02",
      role: "Collateral",
      title: "BTC posted as collateral",
      copy: "Bitcoin is posted or represented as pristine collateral through audited custody and compatible on-chain infrastructure.",
    },
    {
      n: "03",
      role: "Origination",
      title: "Credit market access",
      copy: "Credit opportunities are originated through Sundown-style P2P credit flows — gated by credentials, scored by underwriting proofs.",
    },
    {
      n: "04",
      role: "Issuance",
      title: "Tokenized loan instrument",
      copy: "Each loan is represented as a programmable, securities-grade on-chain instrument — with eligible-holder rules, lifecycle, and provenance.",
    },
    {
      n: "05",
      role: "Servicing",
      title: "Transparent settlement",
      copy: "Settlement, repayment, servicing, and credit history remain transparent and audit-traceable end-to-end.",
    },
  ];

  return (
    <section id="how-it-works" className="border-b border-[#0B1620]/10">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32">
        <div className="mb-16 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-1 font-mono text-[12px] tracking-[0.18em] text-[#0B1620]/45">
            § 03
          </div>
          <div className="md:col-span-7">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#0B1620]/45">
              How Aurora works
            </div>
            <h2 className="mt-5 font-serif text-[40px] leading-[1.04] tracking-[-0.015em] md:text-[64px]">
              Five steps from collateral{" "}
              <span className="italic text-[#1B384C]">to credit instrument.</span>
            </h2>
          </div>
          <p className="md:col-span-4 self-end max-w-md text-[14px] leading-[1.7] text-[#0B1620]/70">
            Aurora is not a retail lending app — it is institutional
            infrastructure. Every step is credentialed, every artifact is
            attestable, every position is auditable.
          </p>
        </div>

        <div className="grid gap-px bg-[#0B1620]/12 md:grid-cols-5">
          {steps.map((s) => (
            <div key={s.n} className="bg-[#F2EEE6] p-7 md:p-8">
              <div className="flex items-baseline justify-between">
                <div className="font-mono text-[12px] tracking-[0.18em] text-[#1B384C]">{s.n}</div>
                <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#0B1620]/45">
                  {s.role}
                </div>
              </div>
              <div className="mt-7 font-serif text-[20px] leading-[1.2] tracking-[-0.005em] text-[#0B1620]">
                {s.title}
              </div>
              <p className="mt-3 text-[12.5px] leading-[1.65] text-[#0B1620]/70">{s.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- TRUST LAYER ---------------------------- */

function TrustLayer() {
  return (
    <section id="trust-layer" className="border-b border-[#0B1620]/10 bg-[#0B1620]/[0.025]">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32">
        <div className="mb-16 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-1 font-mono text-[12px] tracking-[0.18em] text-[#0B1620]/45">
            § 04
          </div>
          <div className="md:col-span-7">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#0B1620]/45">
              Trust layer
            </div>
            <h2 className="mt-5 font-serif text-[40px] leading-[1.04] tracking-[-0.015em] md:text-[64px]">
              Verified counterparties{" "}
              <span className="italic text-[#1B384C]">without exposing data.</span>
            </h2>
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="flex flex-col gap-8 md:col-span-5">
            <p className="text-[16px] leading-[1.75] text-[#0B1620]/75">
              Participants prove eligibility, jurisdiction, and counterparty
              status — without surrendering raw personal or institutional
              data to every market participant. Identity rides as
              cryptographic attestation, not as record.
            </p>
            <ul className="space-y-3 border-t border-[#0B1620]/15 pt-6">
              {[
                ["Fairway Wallet", "Institutional credential vault and signing surface."],
                ["Veridian SSI", "W3C verifiable credentials issued by recognized providers."],
                ["Selective disclosure", "Share only the field a counterparty needs."],
                ["Role credentials", "Beneficial owners, signatories, fund managers, traders."],
              ].map(([k, v]) => (
                <li key={k} className="border-b border-dotted border-[#0B1620]/20 pb-3">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#5C8FB0]">{k}</div>
                  <p className="mt-1.5 text-[13.5px] leading-[1.6] text-[#0B1620]/75">{v}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-7">
            <IdentityProofPanel />
          </div>
        </div>
      </div>
    </section>
  );
}

function IdentityProofPanel() {
  const proofs: Array<{ k: string; v: string; status: "ok" | "info" | "minimal" }> = [
    { k: "KYC", v: "Verified · Veridian Registry", status: "ok" },
    { k: "Jurisdiction", v: "EU · DE — BaFin attested", status: "ok" },
    { k: "Legal entity", v: "GmbH · LEI 39120…b41c", status: "ok" },
    { k: "Role", v: "Authorized signatory", status: "ok" },
    { k: "Counterparty", v: "Approved · A+ tier", status: "ok" },
    { k: "Personal data exposed", v: "Minimal · ZK-disclosed", status: "minimal" },
  ];
  return (
    <div className="border border-[#0B1620]/15 bg-[#F8F5ED]">
      <PanelHeader kicker="Counterparty profile" status="Verified" />
      <div className="space-y-3 px-6 py-6 md:px-8">
        {proofs.map((p) => (
          <div key={p.k} className="flex items-baseline justify-between gap-4 border-b border-dotted border-[#0B1620]/20 pb-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#0B1620]/55">{p.k}</span>
            <span className="flex items-center gap-2 text-right font-mono text-[12px] text-[#0B1620]">
              {p.status === "ok" && <Check className="h-3 w-3 text-[#1B384C]" strokeWidth={2.5} />}
              {p.status === "minimal" && <Lock className="h-3 w-3 text-[#1B384C]" />}
              {p.v}
            </span>
          </div>
        ))}
        <div className="flex flex-wrap gap-2 pt-3">
          <Tag icon={ShieldCheck} label="KYC verified" />
          <Tag icon={Check} label="Jurisdiction eligible" />
          <Tag icon={Check} label="Legal entity verified" />
          <Tag icon={Lock} label="Selective disclosure" />
        </div>
      </div>
    </div>
  );
}

/* --------------------- CREDIT MARKET INFRASTRUCTURE --------------------- */

function Infrastructure() {
  return (
    <section className="border-b border-[#0B1620]/10">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32">
        <div className="mb-16 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-1 font-mono text-[12px] tracking-[0.18em] text-[#0B1620]/45">
            § 05
          </div>
          <div className="md:col-span-7">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#0B1620]/45">
              Credit market infrastructure
            </div>
            <h2 className="mt-5 font-serif text-[40px] leading-[1.04] tracking-[-0.015em] md:text-[64px]">
              From BTC collateral{" "}
              <span className="italic text-[#1B384C]">to programmable credit.</span>
            </h2>
          </div>
          <p className="md:col-span-4 self-end max-w-md text-[14px] leading-[1.7] text-[#0B1620]/70">
            Aurora composes six layers of infrastructure — from Bitcoin
            custody through identity, credit origination, underwriting,
            issuance, and institutional servicing.
          </p>
        </div>

        <ArchitectureStack />
      </div>
    </section>
  );
}

function ArchitectureStack() {
  const layers: Array<{
    tier: string;
    title: string;
    items: string[];
    tone: "navy" | "paper" | "navy-soft";
  }> = [
    {
      tier: "Layer 06 — Settlement & servicing",
      title: "Institutional rails",
      tone: "navy",
      items: ["On-chain servicing", "Audit-grade reporting", "MiFID-aligned exports"],
    },
    {
      tier: "Layer 05 — Tokenized instruments",
      title: "Loan instruments",
      tone: "navy",
      items: ["CIP-113 · ERC-3643", "Eligible-holder rules", "Lifecycle & redemption"],
    },
    {
      tier: "Layer 04 — Underwriting",
      title: "Underwriting & ZK proofs",
      tone: "navy",
      items: ["BTC collateral health", "zkTLS-attested signals", "Selective disclosure"],
    },
    {
      tier: "Layer 03 — Credit markets",
      title: "Sundown — P2P credit",
      tone: "navy",
      items: ["Identity-aware loan requests", "Compliance indexer", "Lender filtering"],
    },
    {
      tier: "Layer 02 — Identity",
      title: "Verified counterparty",
      tone: "navy-soft",
      items: ["Veridian-issued credentials", "Fairway Wallet", "Jurisdiction & entity proofs"],
    },
    {
      tier: "Layer 01 — Collateral",
      title: "Bitcoin collateral",
      tone: "paper",
      items: ["BTC custody integration", "Multi-sig & MPC", "Real-time NAV feed"],
    },
  ];

  return (
    <div className="border border-[#0B1620]/15 bg-[#F8F5ED]">
      <div className="flex items-center justify-between border-b border-[#0B1620]/12 px-6 py-3">
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#0B1620]/55">
          Reference architecture
        </div>
        <div className="font-mono text-[10px] text-[#0B1620]/55">
          extends Sundial · settles on Cardano · Midnight-aligned
        </div>
      </div>

      <div className="px-6 py-10 md:px-10 md:py-12">
        <div className="space-y-2">
          {layers.map((l, idx) => (
            <div key={l.title} className="relative">
              <ArchLayer {...l} />
              {idx < layers.length - 1 && (
                <div className="my-1 flex justify-center">
                  <svg width="14" height="20" viewBox="0 0 14 20" className="text-[#0B1620]/35" aria-hidden>
                    <line x1="7" y1="0" x2="7" y2="14" stroke="currentColor" strokeWidth="1" />
                    <path d="M2 12 L7 19 L12 12" fill="none" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-x-10 gap-y-6 border-t border-[#0B1620]/15 pt-8 md:grid-cols-3">
          <Note k="Composable" v="Each layer is replaceable. Custodians, oracles, and identity providers plug into the same credentialed surface." />
          <Note k="Non-fragmenting" v="Sundown extends existing Cardano P2P lending architecture — it does not duplicate or split liquidity." />
          <Note k="Audit-traceable" v="Every action emits a cryptographic artifact — credential, proof, instrument — verifiable end-to-end." />
        </div>
      </div>
    </div>
  );
}

function ArchLayer({
  tier,
  title,
  items,
  tone,
}: {
  tier: string;
  title: string;
  items: string[];
  tone: "navy" | "paper" | "navy-soft";
}) {
  const styles = {
    navy: "border-[#1B384C]/80 bg-[#1B384C] text-[#F2EEE6]",
    "navy-soft": "border-[#1B384C]/30 bg-[#1B384C]/[0.92] text-[#F2EEE6]",
    paper: "border-[#0B1620]/25 bg-[#F2EEE6] text-[#0B1620]",
  } as const;
  const isLight = tone === "paper";
  return (
    <div className={`border ${styles[tone]}`}>
      <div
        className={`flex items-baseline justify-between border-b px-6 py-3 ${
          isLight ? "border-[#0B1620]/12" : "border-white/15"
        }`}
      >
        <div
          className={`font-mono text-[10px] uppercase tracking-[0.22em] ${
            isLight ? "text-[#0B1620]/55" : "text-[#E8C97A]"
          }`}
        >
          {tier}
        </div>
        <div className={`font-serif text-[18px] italic ${isLight ? "text-[#1B384C]" : "text-[#F2EEE6]"}`}>
          {title}
        </div>
      </div>
      <div className="grid gap-3 px-6 py-4 sm:grid-cols-3">
        {items.map((it) => (
          <div
            key={it}
            className={`flex items-center gap-2 font-mono text-[11px] ${
              isLight ? "text-[#0B1620]/75" : "text-white/80"
            }`}
          >
            <span className={`h-1 w-1 rounded-full ${isLight ? "bg-[#1B384C]" : "bg-[#E8C97A]"}`} />
            {it}
          </div>
        ))}
      </div>
    </div>
  );
}

function Note({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#5C8FB0]">{k}</div>
      <p className="mt-3 text-[13px] leading-[1.7] text-[#0B1620]/70">{v}</p>
    </div>
  );
}

/* --------------------------- PARTICIPANTS --------------------------- */

function Participants() {
  const cards = [
    {
      icon: Vault,
      audience: "BTC treasury companies",
      copy: "Use BTC as productive collateral without selling core holdings — finance operations, treasury obligations, and counterparty exposure.",
    },
    {
      icon: Briefcase,
      audience: "Funds & allocators",
      copy: "Access verified Bitcoin-backed credit opportunities under counterparty controls, jurisdictional fit, and clear instrument terms.",
    },
    {
      icon: Network,
      audience: "OTC desks",
      copy: "Support BTC financing, collateral mobility, and structured credit workflows with on-chain settlement and audit posture.",
    },
    {
      icon: Building2,
      audience: "DAOs & on-chain treasuries",
      copy: "Unlock credit access against treasury holdings while maintaining transparent governance and on-chain collateral visibility.",
    },
    {
      icon: LineChart,
      audience: "Professional lenders",
      copy: "Filter opportunities by identity, jurisdiction, proof type, collateral profile, and risk band — under your own underwriting policy.",
    },
    {
      icon: Layers,
      audience: "Structured credit builders",
      copy: "Compose loan-backed instruments, tranches, and the foundations of on-chain fixed income from verified, programmable positions.",
    },
  ];

  return (
    <section id="markets" className="border-b border-[#0B1620]/10 bg-[#0B1620]/[0.025]">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32">
        <div className="mb-16 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-1 font-mono text-[12px] tracking-[0.18em] text-[#0B1620]/45">
            § 06
          </div>
          <div className="md:col-span-9">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#0B1620]/45">
              Market participants
            </div>
            <h2 className="mt-5 font-serif text-[40px] leading-[1.04] tracking-[-0.015em] md:text-[64px]">
              Built for{" "}
              <span className="italic text-[#1B384C]">serious capital.</span>
            </h2>
          </div>
        </div>

        <div className="grid gap-px bg-[#0B1620]/12 md:grid-cols-3">
          {cards.map((c) => (
            <div key={c.audience} className="bg-[#F2EEE6] p-8 md:p-10">
              <div className="flex items-center justify-between">
                <c.icon className="h-5 w-5 text-[#1B384C]" strokeWidth={1.5} />
                <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#0B1620]/40">
                  Aurora · participant
                </span>
              </div>
              <h3 className="mt-8 font-serif text-[22px] leading-[1.2] tracking-[-0.005em] text-[#1B384C]">
                {c.audience}
              </h3>
              <p className="mt-4 text-[13.5px] leading-[1.7] text-[#0B1620]/72">{c.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------- TOKENIZED LOAN INSTRUMENTS ---------------------- */

function LoanInstruments() {
  return (
    <section className="border-b border-[#0B1620]/10">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32">
        <div className="mb-16 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-1 font-mono text-[12px] tracking-[0.18em] text-[#0B1620]/45">
            § 07
          </div>
          <div className="md:col-span-7">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#0B1620]/45">
              Tokenized loan instruments
            </div>
            <h2 className="mt-5 font-serif text-[40px] leading-[1.04] tracking-[-0.015em] md:text-[64px]">
              Credit positions that become{" "}
              <span className="italic text-[#1B384C]">market infrastructure.</span>
            </h2>
          </div>
          <p className="md:col-span-4 self-end max-w-md text-[14px] leading-[1.7] text-[#0B1620]/70">
            Each Aurora loan is represented as a programmable, securities-grade
            on-chain instrument — the substrate from which fixed-income
            products, BTC repo markets, and bond tokenization can be composed.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <BondCertificate />
          </div>
          <div className="flex flex-col gap-8 md:col-span-5">
            <p className="text-[16px] leading-[1.75] text-[#0B1620]/75">
              An Aurora loan is not a position in a pool — it is a discrete,
              attestable instrument with eligible-holder rules, lifecycle
              controls, and provenance baked into the artifact itself.
            </p>
            <ul className="space-y-3 border-t border-[#0B1620]/15 pt-6">
              {[
                ["NFT bond structures", "Each loan is a unique on-chain certificate, not fungible exposure."],
                ["CIP-113 · ERC-3643", "Permissioned standards with native transfer restrictions."],
                ["Eligible-holder rules", "Only credentialed counterparties can hold or transfer."],
                ["Future fixed income", "Substrate for tranches, repo, and bond tokenization."],
              ].map(([k, v]) => (
                <li key={k} className="border-b border-dotted border-[#0B1620]/20 pb-3">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#5C8FB0]">{k}</div>
                  <p className="mt-1.5 text-[13.5px] leading-[1.6] text-[#0B1620]/75">{v}</p>
                </li>
              ))}
            </ul>
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#0B1620]/45">
              * Specimen instrument · forward-looking design surface
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BondCertificate() {
  return (
    <div className="border border-[#0B1620]/15 bg-[#F8F5ED]">
      <div className="flex items-baseline justify-between border-b border-[#0B1620]/15 px-8 py-4">
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#0B1620]/55">
          Specimen — loan instrument
        </div>
        <div className="font-mono text-[10px] text-[#0B1620]/55">001 / 001</div>
      </div>

      <div className="px-8 py-12">
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#0B1620]/45">
          Series III · BTC-backed
        </div>
        <div className="mt-2 font-serif text-[44px] leading-none tracking-[-0.01em] text-[#1B384C] md:text-[60px]">
          FWY—BOND—024
        </div>
        <div className="mt-3 font-serif text-[16px] italic text-[#0B1620]/65">
          European treasury financing, on-chain
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-[#0B1620]/15 pt-7">
          <BondField k="Standard" v="CIP-113 · ERC-3643" />
          <BondField k="Jurisdiction" v="EU · MiCA" />
          <BondField k="Principal" v="12,000,000 USDC" />
          <BondField k="Maturity" v="2027 · Q3" />
          <BondField k="Coupon" v="6.40% · Quarterly" />
          <BondField k="Collateral" v="240% BTC" />
          <BondField k="Holders" v="KYC&apos;d · transferable" />
          <BondField k="Audit" v="Annual · big-four" />
        </div>

        <div className="mt-10 border-t border-[#0B1620]/15 pt-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#0B1620]/45">
            Issuer attestation
          </div>
          <div className="mt-2 font-mono text-[11px] leading-[1.65] text-[#0B1620]/65">
            Issued by FWY-ISR-024 under Veridian KYB · A+
            <br />
            Sealed: 0x83b0···7e1a · 2026-04-28
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-[#0B1620]/15 pt-6">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#E8C97A] via-[#C8923D] to-[#1B384C] ring-1 ring-[#1B384C]/20" />
          <div className="font-serif text-[13px] italic text-[#0B1620]/65">— Aurora · Fairway</div>
        </div>
      </div>
    </div>
  );
}

function BondField({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#0B1620]/45">{k}</div>
      <div className="mt-0.5 font-serif text-[16px] text-[#1B384C]">{v}</div>
    </div>
  );
}

/* ---------------------------- UNDERWRITING ---------------------------- */

function Underwriting() {
  return (
    <section className="border-b border-[#0B1620]/10 bg-[#0B1620]/[0.025]">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32">
        <div className="mb-16 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-1 font-mono text-[12px] tracking-[0.18em] text-[#0B1620]/45">
            § 08
          </div>
          <div className="md:col-span-7">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#0B1620]/45">
              Privacy-preserving underwriting
            </div>
            <h2 className="mt-5 font-serif text-[40px] leading-[1.04] tracking-[-0.015em] md:text-[64px]">
              Better credit decisions{" "}
              <span className="italic text-[#1B384C]">without raw data extraction.</span>
            </h2>
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <UnderwritingDetail />
          </div>
          <div className="flex flex-col gap-8 md:col-span-5">
            <p className="text-[16px] leading-[1.75] text-[#0B1620]/75">
              Aurora composes underwriting from public on-chain history,
              live BTC collateral, verified credentials, and zk-attested
              off-chain financial signals — without exposing the underlying
              records to any market participant.
            </p>
            <ul className="space-y-3 border-t border-[#0B1620]/15 pt-6">
              {[
                ["Public on-chain history", "Repayment behaviour, collateral usage, default record."],
                ["Live BTC collateral", "Real-time ratio, custody status, NAV feed."],
                ["Verified credentials", "Identity, jurisdiction, role, legal entity."],
                ["zkTLS attestations", "Banking, payroll, exchange — proven, never revealed."],
              ].map(([k, v]) => (
                <li key={k} className="border-b border-dotted border-[#0B1620]/20 pb-3">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#5C8FB0]">{k}</div>
                  <p className="mt-1.5 text-[13.5px] leading-[1.6] text-[#0B1620]/75">{v}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function UnderwritingDetail() {
  return (
    <div className="border border-[#0B1620]/15 bg-[#F8F5ED]">
      <PanelHeader kicker="Underwriting composite" status="Refreshed 4m" />
      <div className="grid gap-px bg-[#0B1620]/10 md:grid-cols-2">
        <div className="space-y-5 bg-[#F8F5ED] p-6 md:p-8">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#0B1620]/45">
              Risk band
            </div>
            <div className="mt-2 flex items-baseline gap-3">
              <div className="font-serif text-[80px] leading-none tracking-[-0.02em] text-[#1B384C] md:text-[112px]">
                A
              </div>
              <div className="font-mono text-[12px] text-[#0B1620]/55">composite 782</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 border-t border-[#0B1620]/15 pt-5">
            <Field k="BTC coll. ratio" v="240%" />
            <Field k="Default record" v="Clean" />
            <Field k="Jurisdiction" v="EU · DE" />
            <Field k="Verified entity" v="Yes" />
          </div>
        </div>

        <div className="space-y-4 bg-[#F8F5ED] p-6 md:p-8">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#0B1620]/45">
            Signal contributions
          </div>
          <div className="space-y-2.5">
            <SignalBar label="On-chain repayment" pct={88} />
            <SignalBar label="BTC collateral health" pct={92} />
            <SignalBar label="Banking · zkTLS" pct={71} />
            <SignalBar label="Exchange · zkTLS" pct={64} />
            <SignalBar label="Verified entity" pct={100} />
          </div>
          <div className="border-t border-[#0B1620]/15 pt-4 font-mono text-[10px] leading-[1.7] text-[#0B1620]/55">
            Disclosed: <span className="text-[#1B384C]">tier · expiry</span>
            <br />
            Redacted: <span className="text-[#1B384C]">balances · counterparties · txs</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-[#0B1620]/12 px-6 py-4 font-mono text-[10px] uppercase tracking-[0.22em] text-[#0B1620]/45">
        <div className="inline-flex items-center gap-2">
          <Database className="h-3 w-3" /> aurora.underwriting / score
        </div>
        <div className="text-[#1B384C]">raw data exposed: none</div>
      </div>
    </div>
  );
}

/* ----------------------------- ECOSYSTEM ----------------------------- */

function Ecosystem() {
  const groups = [
    { tier: "Settlement", items: ["Cardano", "Midnight (privacy)", "Future multi-chain"] },
    { tier: "Identity", items: ["Veridian", "Fairway Wallet", "Recognized issuers"] },
    { tier: "Credit markets", items: ["Sundial Protocol", "Sundown layer", "Future market partners"] },
    { tier: "Builders", items: ["Fairway", "Fallen Icarus", "IOG context"] },
  ];

  return (
    <section id="ecosystem" className="border-b border-[#0B1620]/10">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32">
        <div className="mb-16 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-1 font-mono text-[12px] tracking-[0.18em] text-[#0B1620]/45">
            § 09
          </div>
          <div className="md:col-span-9">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#0B1620]/45">
              Ecosystem
            </div>
            <h2 className="mt-5 font-serif text-[40px] leading-[1.04] tracking-[-0.015em] md:text-[64px]">
              Built with Cardano-native{" "}
              <span className="italic text-[#1B384C]">credit infrastructure.</span>
            </h2>
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-4">
          {groups.map((g) => (
            <div key={g.tier} className="border-t border-[#0B1620]/20 pt-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#0B1620]/45">
                {g.tier}
              </div>
              <ul className="mt-6 space-y-3">
                {g.items.map((it) => (
                  <li key={it} className="font-serif text-[18px] italic text-[#1B384C]">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 border-t border-[#0B1620]/15 pt-8 md:grid-cols-12 md:items-baseline">
          <p className="md:col-span-7 max-w-2xl font-serif text-[20px] italic leading-[1.45] text-[#1B384C] md:text-[24px]">
            &ldquo;Aurora extends existing credit infrastructure. It does not
            duplicate or fragment liquidity.&rdquo;
          </p>
          <p className="md:col-span-4 md:col-start-9 self-end text-[13px] leading-[1.75] text-[#0B1620]/65">
            Sundial provides the P2P credit base. Sundown adds identity at the
            edge. Veridian and Fairway carry the trust layer. Cardano settles.
            Midnight aligns the privacy direction.
          </p>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- VISION -------------------------------- */

function Vision() {
  const pillars = [
    "On-chain fixed income",
    "BTC repo markets",
    "Treasury financing",
    "Collateral mobility",
    "Programmable debt rails",
    "Verified credit markets",
    "Tokenized debt instruments",
    "Loan-backed securities",
  ];
  return (
    <section id="vision" className="border-b border-[#0B1620]/10">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32">
        <div className="mb-16 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-1 font-mono text-[12px] tracking-[0.18em] text-[#0B1620]/45">
            § 10
          </div>
          <div className="md:col-span-9">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#0B1620]/45">
              Long-term vision
            </div>
            <h2 className="mt-5 font-serif text-[40px] leading-[1.04] tracking-[-0.015em] md:text-[64px]">
              The first credible version of{" "}
              <span className="italic text-[#1B384C]">Bitcoin credit markets.</span>
            </h2>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-[16px] leading-[1.75] text-[#0B1620]/75">
              Aurora is not a lending app. It is the substrate for the
              fixed-income, repo, and structured credit markets that will
              emerge as Bitcoin becomes balance-sheet infrastructure for
              institutional capital.
            </p>
            <p className="mt-6 text-[16px] leading-[1.75] text-[#0B1620]/75">
              Each piece composes deliberately — collateral, identity, credit
              markets, underwriting, instruments, settlement — toward a
              single, credible architecture.
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="grid gap-px bg-[#0B1620]/12 sm:grid-cols-2">
              {pillars.map((p) => (
                <div
                  key={p}
                  className="flex items-center gap-3 bg-[#F2EEE6] px-5 py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[#0B1620]/75"
                >
                  <ArrowRight className="h-3 w-3 text-[#1B384C]" />
                  {p}
                </div>
              ))}
            </div>
            <div className="mt-6 font-serif text-[18px] italic leading-[1.45] text-[#1B384C] md:text-[22px]">
              &ldquo;The substrate from which on-chain capital markets are built.&rdquo;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ FINAL CTA ------------------------------ */

function FinalCTA() {
  return (
    <section id="cta" className="relative overflow-hidden border-b border-[#0B1620]/10">
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-[#F2EEE6] via-[#F2EEE6] to-[#E8C97A]/35" />
      <div aria-hidden className="absolute -bottom-40 left-1/2 h-80 w-[1100px] -translate-x-1/2 rounded-full bg-[#E8C97A]/45 blur-3xl" />
      <div aria-hidden className="absolute -bottom-20 right-0 h-64 w-[400px] rounded-full bg-[#7AAD8C]/25 blur-3xl" />

      <div className="relative mx-auto max-w-[1200px] px-6 py-32 text-center md:px-10 md:py-44">
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#0B1620]/45">
          § 11 — Onboarding
        </div>
        <h2 className="mt-8 font-serif text-[48px] leading-[0.97] tracking-[-0.02em] text-[#0B1620] md:text-[110px]">
          Bring Bitcoin into{" "}
          <br className="hidden md:block" />
          structured <span className="italic text-[#1B384C]">on-chain credit.</span>
        </h2>
        <p className="mx-auto mt-12 max-w-2xl text-[16px] leading-[1.7] text-[#0B1620]/72">
          Aurora gives institutions, lenders, and BTC holders the rails to turn
          Bitcoin collateral into verified, programmable credit markets — built
          on Cardano-native infrastructure, designed for the next cycle.
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
          <a
            href="#"
            className="group inline-flex items-center gap-3 bg-[#1B384C] px-8 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-[#F2EEE6] transition hover:bg-[#0E2333]"
          >
            Request access
            <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-[#0B1620]/25 px-8 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-[#0B1620]/75 transition hover:border-[#1B384C] hover:text-[#1B384C]"
          >
            Partner with us
          </a>
        </div>
        <div className="mt-10 font-mono text-[10px] uppercase tracking-[0.22em] text-[#0B1620]/45">
          For institutional capital · There is no waitlist
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- FOOTER -------------------------------- */

function Footer() {
  return (
    <footer className="bg-[#F2EEE6]">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10">
        <div className="mb-16 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-[28px] italic text-[#1B384C]">Aurora</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#0B1620]/45">
                by Fairway
              </span>
            </div>
            <p className="mt-6 max-w-sm text-[14px] leading-[1.75] text-[#0B1620]/65">
              The institutional layer for Bitcoin-backed credit markets
              on-chain. Verified counterparties. Programmable loan
              instruments. Privacy-preserving underwriting.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-3 border border-[#0B1620]/20 px-4 py-2.5 hover:border-[#1B384C]"
            >
              <Moon className="h-3 w-3 text-[#0B1620]/60" />
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#0B1620]/65">
                Visit Kaamos — the midnight surface
              </span>
              <ArrowUpRight className="h-3 w-3 text-[#1B384C]" />
            </a>
          </div>

          <FooterCol
            title="Aurora"
            links={["Why now", "How it works", "Trust layer", "Markets", "Vision"]}
          />
          <FooterCol
            title="Infrastructure"
            links={["BTC collateral", "Sundown — P2P credit", "Underwriting · zk", "Loan instruments"]}
          />
          <FooterCol
            title="Resources"
            links={["Documentation", "Architecture", "Aurora thesis", "Press"]}
          />
        </div>

        <div className="border-t border-[#0B1620]/15 pt-8">
          <div className="grid gap-4 font-mono text-[10px] uppercase tracking-[0.22em] text-[#0B1620]/55 md:grid-cols-12">
            <div className="md:col-span-3">© 2026 Fairway Labs ehf.</div>
            <div className="md:col-span-3">Reykjavík · Helsinki · Singapore</div>
            <div className="md:col-span-3">Aurora · v0.1 · 7e1a83b0</div>
            <div className="md:col-span-3 md:text-right">Built on Cardano</div>
          </div>
          <div className="mt-5 flex flex-wrap gap-x-8 gap-y-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[#0B1620]/45">
            <a href="#" className="hover:text-[#1B384C]">Privacy</a>
            <a href="#" className="hover:text-[#1B384C]">Terms</a>
            <a href="#" className="hover:text-[#1B384C]">Disclosures</a>
            <a href="#" className="hover:text-[#1B384C]">Security</a>
            <a href="#" className="hover:text-[#1B384C]">Audit reports</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="md:col-span-2">
      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#0B1620]/45">
        {title}
      </div>
      <ul className="mt-6 space-y-3">
        {links.map((l) => (
          <li key={l}>
            <a
              href="#"
              className="font-serif text-[15px] text-[#0B1620] hover:italic hover:text-[#1B384C]"
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
