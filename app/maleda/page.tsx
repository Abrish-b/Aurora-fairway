"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  ClipboardList,
  Eye,
  ScanLine,
  Sun,
  TrendingUp,
  UserPlus,
} from "lucide-react";

import AnimatedHeading from "./_components/AnimatedHeading";
import FadeIn from "./_components/FadeIn";
import InView from "./_components/InView";
import GoldOrb from "./_components/GoldOrb";
import CulturalPattern from "./_components/CulturalPattern";

/* Maleda palette — deep green grounding, warm gold + sunrise orange, ivory cards */
const BG = "#0A1612";
const PANEL = "#0D1D16";
const IVORY = "#F2EDDF";
const IVORY_DIM = "rgba(242,237,223,0.64)";
const IVORY_MUTED = "rgba(242,237,223,0.42)";
const DIVIDER = "rgba(242,237,223,0.10)";
const GOLD = "#D6A84F";
const ORANGE = "#E07B39";
const CARD_INK = "#122019";
const CARD_BODY = "rgba(18,32,25,0.72)";

const CALENDLY = "https://calendly.com/heikki-fairway/fairway-demo?month=2026-05";

const IMG = "/maleda";

type Lang = "en" | "am";

const BRAND = { en: "MALEDA", am: "ማለዳ" } as const;

type IconType = typeof Sun;

/* ----------------------------------------------------------------------- */
/* Bilingual content                                                        */
/* ----------------------------------------------------------------------- */

const CONTENT = {
  en: {
    nav: {
      story: "The story",
      platform: "Platform",
      sacco: "SACCOs",
      ecosystem: "Ecosystem",
      impact: "Impact",
      partner: "Partner with Maleda",
    },
    hero: {
      eyebrow: "Maleda · Ethiopia",
      headline: "A new dawn for Ethiopia's\nSME lending ecosystem.",
      sub: "Maleda helps SACCOs and lending institutions support SMEs with trusted, local-currency financing pathways.",
      ctaPrimary: "Partner with Maleda",
      ctaSecondary: "Explore the ecosystem",
      chips: ["Built for SMEs", "Built for SACCOs", "Local-currency lending", "Trusted verification"],
      image: "Ethiopian SME shop owner at sunrise, with community business activity in the background",
    },
    story: {
      num: "01",
      eyebrow: "The story",
      title: "Meet the businesses ",
      titleGold: "Maleda is built for.",
      sub: "Across Ethiopia, small businesses are ready to grow. They need trusted finance, clear processes, and strong local partners.",
      cards: [
        { name: "Shop Owner", need: "Needs working capital to restock inventory.", image: "Ethiopian retail shop owner behind the counter" },
        { name: "Farmer / Agri SME", need: "Needs seasonal finance for inputs and production.", image: "Ethiopian farmer with harvested grain" },
        { name: "Woman Entrepreneur", need: "Needs growth capital for a small business.", image: "Ethiopian woman entrepreneur packing products" },
      ],
    },
    platform: {
      num: "02",
      eyebrow: "Platform",
      title: "The Maleda platform ",
      titleGold: "at a glance.",
      sub: "Simple tools for trust, lending, and growth.",
      cards: [
        { name: "Verify", copy: "Know the SME or member before lending.", tip: "Verification dashboard" },
        { name: "Organize", copy: "Help SACCOs manage lending workflows clearly.", tip: "Lending workflow dashboard" },
        { name: "Grow", copy: "Support more productive businesses through stronger participation.", tip: "Growth and reporting dashboard" },
      ],
    },
    sacco: {
      num: "03",
      eyebrow: "SACCO spotlight",
      title: "SACCOs are the ",
      titleGold: "local trust layer.",
      sub: "Maleda helps SACCOs serve members better without replacing their role.",
      image: "SACCO loan officer meeting members and reviewing loan applications",
      benefits: ["Member onboarding", "Loan workflow support", "Verification tools", "Reporting visibility"],
    },
    ecosystem: {
      num: "04",
      eyebrow: "Ecosystem",
      title: "One ecosystem. ",
      titleGold: "Many productive businesses.",
      sub: "Maleda connects local trust, lending workflows, and productive finance opportunities.",
      image: "Ethiopia's SME and SACCO lending ecosystem, connected around Maleda",
    },
    usecases: {
      num: "05",
      eyebrow: "Use cases",
      title: "Use cases ",
      titleGold: "across Ethiopia.",
      cards: [
        { name: "SME working capital", image: "Ethiopian shop owner restocking shelves" },
        { name: "SACCO member loans", image: "SACCO members meeting around a table" },
        { name: "Agriculture finance", image: "Farmer tending seedlings at sunrise" },
        { name: "Women-led enterprises", image: "Woman entrepreneur preparing baked goods" },
        { name: "Trader finance", image: "Local market trader arranging produce" },
        { name: "Small equipment finance", image: "Carpenter working in a small workshop" },
      ],
    },
    impact: {
      num: "06",
      eyebrow: "Impact",
      title: "When lending works, ",
      titleGold: "communities grow.",
      image: "SMEs and SACCO partners meeting at sunset",
      cards: [
        { value: "2,400+", label: "More SMEs served" },
        { value: "3×", label: "Faster member onboarding" },
        { value: "92%", label: "Better lending visibility" },
        { value: "140+", label: "Stronger SACCO operations" },
        { value: "ETB 380M", label: "More productive finance" },
        { value: "5,700+", label: "More local jobs supported" },
      ],
      disclaimer: "Illustrative outcomes. Actual results depend on partner implementation.",
    },
    cta: {
      title: "Partner with Maleda to grow productive lending.",
      copy: "For SACCOs, lenders, SME partners, and capital partners ready to support Ethiopia's real economy.",
      button: "Partner with Maleda",
    },
    footer: {
      tagline: "Structured capital access for productive lending institutions.",
      trust: "Institutions remain the lender. Maleda provides the capital access infrastructure.",
      builtBy: "Built by Fairway",
      visit: "Visit Fairway",
      platformHeading: "Explore",
      platformLinks: ["The story", "Platform", "SACCO spotlight", "Ecosystem", "Impact"],
      servesHeading: "Who it serves",
      serves: ["Banks", "Microfinance institutions", "SACCOs", "SMEs", "Capital partners", "SME support organizations"],
      sectorsHeading: "Productive sectors",
      sectors: ["SME lending", "Agriculture", "Trade finance", "Equipment finance", "Women-led enterprises", "Job-creating businesses"],
      copyright: "© 2026 Maleda / Fairway. All rights reserved.",
      disclaimer: "Maleda provides infrastructure for regulated institutional participation. It does not lend directly to the public and does not replace licensed financial institutions.",
      legalLinks: ["Privacy", "Terms", "Contact"],
    },
  },

  am: {
    nav: {
      story: "ታሪኩ",
      platform: "መድረክ",
      sacco: "SACCOዎች",
      ecosystem: "ስርዓቱ",
      impact: "ተጽዕኖ",
      partner: "ከማለዳ ጋር ይተባበሩ",
    },
    hero: {
      eyebrow: "ማለዳ · ኢትዮጵያ",
      headline: "ለኢትዮጵያ የSME ብድር ስርዓት\nአዲስ ጎህ።",
      sub: "ማለዳ ለSACCOዎች እና ለብድር ተቋማት SMEዎችን በታመነ እና በአካባቢ ገንዘብ ብድር መንገድ እንዲደግፉ ይረዳል።",
      ctaPrimary: "ከማለዳ ጋር ይተባበሩ",
      ctaSecondary: "ስርዓቱን ይመልከቱ",
      chips: ["ለSMEዎች የተገነባ", "ለSACCOዎች የተገነባ", "በአካባቢ ገንዘብ ብድር", "የታመነ ማረጋገጫ"],
      image: "የኢትዮጵያ የሱቅ ባለቤት በጎህ ጊዜ",
    },
    story: {
      num: "01",
      eyebrow: "ታሪኩ",
      title: "ማለዳ የተገነባው ",
      titleGold: "ለእነዚህ ንግዶች ነው።",
      sub: "በኢትዮጵያ ብዙ ትንሽ ንግዶች ለማደግ ዝግጁ ናቸው። የሚያስፈልጋቸው ታማኝ ፋይናንስ፣ ግልጽ ሂደት እና ጠንካራ የአካባቢ አጋሮች ናቸው።",
      cards: [
        { name: "የሱቅ ባለቤት", need: "ለእቃ መሙላት የስራ ካፒታል ይፈልጋል።", image: "የኢትዮጵያ የሱቅ ባለቤት" },
        { name: "የግብርና SME", need: "ለግብዓት እና ለምርት ወቅታዊ ፋይናንስ ይፈልጋል።", image: "የኢትዮጵያ ገበሬ ወይም የግብርና SME" },
        { name: "ሴት ኢንተርፕረነር", need: "ንግዷን ለማሳደግ ካፒታል ይፈልጋል።", image: "የኢትዮጵያ ሴት ኢንተርፕረነር" },
      ],
    },
    platform: {
      num: "02",
      eyebrow: "መድረክ",
      title: "የማለዳ መድረክ ",
      titleGold: "በአጭር።",
      sub: "ለመተማመን፣ ለብድር እና ለእድገት ቀላል መሳሪያዎች።",
      cards: [
        { name: "ማረጋገጥ", copy: "ከመበደር በፊት SMEውን ወይም አባሉን በተሻለ ይወቁ።", tip: "የማረጋገጫ ዳሽቦርድ" },
        { name: "ማደራጀት", copy: "SACCOዎች የብድር ሂደታቸውን በግልጽ እንዲያስተዳድሩ ይረዳል።", tip: "የብድር ሂደት ዳሽቦርድ" },
        { name: "ማሳደግ", copy: "ብዙ ምርታማ ንግዶችን በጠንካራ ተሳትፎ ይደግፋል።", tip: "የእድገት እና ሪፖርት ዳሽቦርድ" },
      ],
    },
    sacco: {
      num: "03",
      eyebrow: "የSACCO ትኩረት",
      title: "SACCOዎች የአካባቢ ",
      titleGold: "መተማመኛ መሠረት ናቸው።",
      sub: "ማለዳ የSACCOዎችን ሚና ሳይተካ አባላትን በተሻለ እንዲያገለግሉ ይረዳል።",
      image: "የSACCO ሰራተኞች ከአባላት ጋር ሲገናኙ",
      benefits: ["የአባላት ምዝገባ", "የብድር ሂደት ድጋፍ", "የማረጋገጫ መሳሪያዎች", "የሪፖርት ግልጽነት"],
    },
    ecosystem: {
      num: "04",
      eyebrow: "ስርዓቱ",
      title: "አንድ ስርዓት። ",
      titleGold: "ብዙ ምርታማ ንግዶች።",
      sub: "ማለዳ የአካባቢ መተማመንን፣ የብድር ሂደቶችን እና ምርታማ የፋይናንስ እድሎችን ያገናኛል።",
      image: "የኢትዮጵያ የSME እና የSACCO ብድር ስርዓት በማለዳ ዙሪያ",
    },
    usecases: {
      num: "05",
      eyebrow: "አጠቃቀሞች",
      title: "በኢትዮጵያ ",
      titleGold: "የሚሰሩ አጠቃቀሞች።",
      cards: [
        { name: "የSME የስራ ካፒታል", image: "የኢትዮጵያ ሱቅ ወይም ትንሽ ንግድ" },
        { name: "የSACCO አባላት ብድር", image: "የSACCO አባላት ስብሰባ" },
        { name: "የግብርና ፋይናንስ", image: "ገበሬ ወይም የግብርና ንግድ" },
        { name: "ሴቶች የሚመሩ ንግዶች", image: "ሴት ኢንተርፕረነር" },
        { name: "የነጋዴዎች ፋይናንስ", image: "የአካባቢ ገበያ ነጋዴ" },
        { name: "የትንሽ መሣሪያ ፋይናንስ", image: "ትንሽ ማሽነሪ ወይም ወርክሾፕ" },
      ],
    },
    impact: {
      num: "06",
      eyebrow: "ተጽዕኖ",
      title: "ብድር በትክክል ሲሰራ፣ ",
      titleGold: "ማህበረሰቦች ያድጋሉ።",
      image: "SMEዎች እና የSACCO አጋሮች በምሽት ብርሃን ሲገናኙ",
      cards: [
        { value: "2,400+", label: "ብዙ SMEዎች ይገለገላሉ" },
        { value: "3×", label: "ፈጣን የአባላት ምዝገባ" },
        { value: "92%", label: "የተሻለ የብድር ግልጽነት" },
        { value: "140+", label: "ጠንካራ የSACCO አሰራር" },
        { value: "ETB 380M", label: "ብዙ ምርታማ ፋይናንስ" },
        { value: "5,700+", label: "ብዙ የአካባቢ ስራ ድጋፍ" },
      ],
      disclaimer: "ውጤቶቹ ምሳሌያዊ ናቸው። ትክክለኛ ውጤት በአጋር አፈፃፀም ላይ ይመሰረታል።",
    },
    cta: {
      title: "ምርታማ ብድርን ለማሳደግ ከማለዳ ጋር ይተባበሩ።",
      copy: "የኢትዮጵያን እውነተኛ ኢኮኖሚ ለመደገፍ ዝግጁ ለሆኑ SACCOዎች፣ ብድር ተቋማት፣ የSME አጋሮች እና የካፒታል አጋሮች።",
      button: "ከማለዳ ጋር ይተባበሩ",
    },
    footer: {
      tagline: "ለምርታማ ብድር ተቋማት የተዋቀረ የካፒታል መዳረሻ።",
      trust: "ተቋማት ብድር ሰጪ ሆነው ይቆያሉ። ማለዳ የካፒታል መዳረሻ መሠረተ ልማትን ይሰጣል።",
      builtBy: "የተገነባው በ Fairway",
      visit: "Fairway ይጎብኙ",
      platformHeading: "ይመልከቱ",
      platformLinks: ["ታሪኩ", "መድረክ", "የSACCO ትኩረት", "ስርዓቱ", "ተጽዕኖ"],
      servesHeading: "ለማን ይጠቅማል",
      serves: ["ባንኮች", "ማይክሮ ፋይናንስ ተቋማት", "SACCOዎች", "SMEዎች", "የካፒታል አጋሮች", "የSME ድጋፍ ድርጅቶች"],
      sectorsHeading: "ምርታማ ዘርፎች",
      sectors: ["የSME ብድር", "ግብርና", "የንግድ ፋይናንስ", "የመሣሪያ ፋይናንስ", "ሴቶች የሚመሩ ንግዶች", "የስራ ፈጠራ ንግዶች"],
      copyright: "© 2026 ማለዳ / Fairway. መብቱ በሙሉ የተጠበቀ ነው።",
      disclaimer: "ማለዳ ለተቋማዊ ተሳትፎ መሠረተ ልማት ይሰጣል። በቀጥታ ለሕዝብ ብድር አይሰጥም፣ የተፈቀዱ የፋይናንስ ተቋማትንም አይተካም።",
      legalLinks: ["ግላዊነት", "ውሎች", "አግኙን"],
    },
  },
};

type T = (typeof CONTENT)["en"];

const STORY_IMAGES = [
  `${IMG}/story-shop-owner.png`,
  `${IMG}/story-agri-sme.png`,
  `${IMG}/story-woman-entrepreneur.png`,
];
const PLATFORM_IMAGES = [
  `${IMG}/platform-verify.png`,
  `${IMG}/platform-organize.png`,
  `${IMG}/platform-grow.png`,
];
const USECASE_IMAGES = [
  `${IMG}/usecase-working-capital.png`,
  `${IMG}/usecase-member-loans.png`,
  `${IMG}/usecase-agriculture.png`,
  `${IMG}/usecase-women-led.png`,
  `${IMG}/usecase-trader.png`,
  `${IMG}/usecase-equipment.png`,
];
const SACCO_ICONS: IconType[] = [UserPlus, ClipboardList, BadgeCheck, Eye];
const PLATFORM_ICONS: IconType[] = [ScanLine, ClipboardList, TrendingUp];

/* ----------------------------------------------------------------------- */
/* Page                                                                    */
/* ----------------------------------------------------------------------- */

export default function MaledaPage() {
  const [lang, setLang] = useState<Lang>("en");
  const t = CONTENT[lang];

  const fontVar =
    lang === "am"
      ? "var(--font-maleda-am), 'Noto Sans Ethiopic', sans-serif"
      : "var(--font-maleda-en), Inter, system-ui, sans-serif";
  const lineHeightClass = lang === "am" ? "[&_p]:leading-[1.9] [&_li]:leading-[1.9]" : "";

  return (
    <div
      lang={lang}
      className={lineHeightClass}
      style={{ background: BG, color: IVORY_DIM, fontFamily: fontVar }}
    >
      <Navbar lang={lang} setLang={setLang} t={t} />
      <Hero lang={lang} t={t} />
      <StorySection t={t} />
      <PlatformSection t={t} />
      <SaccoSection t={t} />
      <EcosystemSection t={t} />
      <UseCasesSection t={t} />
      <ImpactSection t={t} />
      <PartnerCTA t={t} />
      <Footer lang={lang} t={t} />
    </div>
  );
}

/* ----------------------------------------------------------------------- */
/* Navbar                                                                   */
/* ----------------------------------------------------------------------- */

function Navbar({
  lang,
  setLang,
  t,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: T;
}) {
  const links = [
    { href: "#story", label: t.nav.story },
    { href: "#platform", label: t.nav.platform },
    { href: "#sacco", label: t.nav.sacco },
    { href: "#ecosystem", label: t.nav.ecosystem },
    { href: "#impact", label: t.nav.impact },
  ];

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl"
      style={{ borderColor: DIVIDER, background: "rgba(10,22,18,0.8)" }}
    >
      <div className="mx-auto flex w-full max-w-[1360px] items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="#top"
          className="flex items-center gap-2.5"
          aria-label={lang === "am" ? "ማለዳ home" : "Maleda home"}
          style={{ color: IVORY }}
        >
          <span aria-hidden className="relative inline-flex h-4 w-4 overflow-hidden">
            <span
              className="absolute bottom-0 left-1/2 h-4 w-4 -translate-x-1/2 translate-y-1/2 rounded-full"
              style={{ background: `linear-gradient(180deg, ${GOLD}, ${ORANGE})` }}
            />
          </span>
          <span
            className={`font-semibold tracking-tight ${lang === "am" ? "text-2xl" : "text-lg tracking-[0.14em]"}`}
            style={
              lang === "am"
                ? { fontFamily: "var(--font-maleda-am), 'Noto Sans Ethiopic', sans-serif" }
                : undefined
            }
          >
            {BRAND[lang]}
          </span>
          <span className="hidden text-[10px] font-medium uppercase tracking-[0.22em] sm:inline" style={{ color: IVORY_MUTED }}>
            by Fairway
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[12px] font-medium uppercase tracking-[0.14em] transition-colors duration-200 hover:text-[#F2EDDF]"
              style={{ color: IVORY_DIM }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <LangToggle lang={lang} setLang={setLang} />
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-10 items-center gap-2 rounded-full px-5 text-[12px] font-semibold tracking-tight transition hover:brightness-110 active:scale-[0.98] sm:inline-flex"
            style={{ background: `linear-gradient(180deg, ${GOLD}, #C08F35)`, color: "#1A1206" }}
          >
            {t.nav.partner}
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.8} />
          </a>
        </div>
      </div>
    </header>
  );
}

function LangToggle({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div
      role="group"
      aria-label="Language selector"
      className="inline-flex items-center overflow-hidden rounded-full border text-[11px] font-semibold uppercase tracking-[0.12em]"
      style={{ borderColor: "rgba(242,237,223,0.25)" }}
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        aria-label="Switch to English"
        className="cursor-pointer px-3 py-1.5 transition-colors duration-200"
        style={{ background: lang === "en" ? GOLD : "transparent", color: lang === "en" ? "#1A1206" : IVORY_DIM }}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("am")}
        aria-pressed={lang === "am"}
        aria-label="ወደ አማርኛ ቀይር"
        className="cursor-pointer px-3 py-1.5 transition-colors duration-200"
        style={{
          background: lang === "am" ? GOLD : "transparent",
          color: lang === "am" ? "#1A1206" : IVORY_DIM,
          fontFamily: "var(--font-maleda-am), 'Noto Sans Ethiopic', sans-serif",
        }}
      >
        አማ
      </button>
    </div>
  );
}

/* ----------------------------------------------------------------------- */
/* Hero — warm sunrise, split with large hero photo                         */
/* ----------------------------------------------------------------------- */

function Hero({ lang, t }: { lang: Lang; t: T }) {
  return (
    <section id="top" className="relative isolate overflow-hidden" style={{ background: BG }}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(75% 55% at 50% 108%, rgba(224,123,57,0.28) 0%, rgba(214,168,79,0.14) 42%, transparent 72%)",
        }}
      />
      <GoldOrb className="absolute -right-[12%] top-[8%] -z-10 h-[420px] w-[420px] opacity-40 lg:h-[560px] lg:w-[560px]" />
      <CulturalPattern variant="dark" intensity={0.04} className="-z-10 opacity-50" />

      <div className="mx-auto grid w-full max-w-[1360px] items-center gap-12 px-6 pb-16 pt-32 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-24 lg:pt-40">
        <div>
          <FadeIn delay={80} duration={600}>
            <span
              className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em]"
              style={{ borderColor: "rgba(214,168,79,0.45)", color: GOLD, background: "rgba(10,22,18,0.5)" }}
            >
              <Sun className="h-3 w-3" strokeWidth={1.8} />
              {t.hero.eyebrow}
            </span>
          </FadeIn>

          <AnimatedHeading
            key={lang}
            text={t.hero.headline}
            className={`mt-7 text-[34px] font-semibold leading-[1.08] tracking-[-0.025em] sm:text-[46px] ${
              lang === "am" ? "lg:text-[50px]" : "lg:text-[58px]"
            }`}
          />

          <FadeIn delay={1000} duration={700} className="mt-6 max-w-[54ch]">
            <p className="text-[16px] font-light leading-[1.65] tracking-tight sm:text-[17px]" style={{ color: IVORY }}>
              {t.hero.sub}
            </p>
          </FadeIn>

          <FadeIn delay={1350} duration={700} className="mt-9">
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-full px-7 text-[13px] font-semibold tracking-tight transition hover:brightness-110 active:scale-[0.98]"
                style={{ background: `linear-gradient(180deg, ${GOLD}, #C08F35)`, color: "#1A1206" }}
              >
                {t.hero.ctaPrimary}
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.7} />
              </a>
              <a
                href="#ecosystem"
                className="inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-full border px-7 text-[13px] font-medium tracking-tight transition hover:bg-white/5"
                style={{ borderColor: "rgba(242,237,223,0.3)", color: IVORY }}
              >
                {t.hero.ctaSecondary}
                <ArrowRight className="h-4 w-4" strokeWidth={1.7} />
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={1650} duration={700} className="mt-10">
            <div className="flex flex-wrap gap-2.5">
              {t.hero.chips.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-[11.5px] font-medium"
                  style={{ borderColor: "rgba(214,168,79,0.35)", color: IVORY, background: "rgba(13,29,22,0.6)" }}
                >
                  <BadgeCheck className="h-3.5 w-3.5" strokeWidth={1.7} style={{ color: GOLD }} />
                  {c}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={600} duration={800}>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-[0_40px_100px_rgba(0,0,0,0.45)] transition-transform duration-500 hover:-translate-y-1 lg:aspect-[5/4]">
            <Image
              src={`${IMG}/hero.png`}
              alt={t.hero.image}
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-center"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{ background: "linear-gradient(180deg, transparent 65%, rgba(10,22,18,0.35) 100%)" }}
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------- */
/* Section shell                                                            */
/* ----------------------------------------------------------------------- */

function Section({
  id,
  num,
  eyebrow,
  title,
  titleGold,
  sub,
  children,
  background,
  center = false,
}: {
  id: string;
  num: string;
  eyebrow: string;
  title: string;
  titleGold: string;
  sub?: string;
  children?: React.ReactNode;
  background?: string;
  center?: boolean;
}) {
  return (
    <section
      id={id}
      className="relative px-6 py-24 md:px-10 lg:py-28"
      style={{ borderTop: `1px solid ${DIVIDER}`, background: background ?? "transparent" }}
    >
      <div className="relative mx-auto max-w-[1360px]">
        <InView className={center ? "flex flex-col items-center text-center" : ""}>
          <span
            className="inline-flex items-center gap-2.5 rounded-full border px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em]"
            style={{ borderColor: "rgba(214,168,79,0.4)", color: GOLD, background: PANEL }}
          >
            <span className="font-mono" style={{ color: IVORY_MUTED }}>{num}</span>
            {eyebrow}
          </span>

          <h2
            className={`mt-6 text-[28px] font-semibold leading-[1.1] tracking-[-0.025em] sm:text-[38px] lg:text-[44px] ${center ? "max-w-[24ch]" : "max-w-[26ch]"}`}
            style={{ color: IVORY, textWrap: "balance" }}
          >
            {title}
            <span style={{ color: GOLD }}>{titleGold}</span>
          </h2>
          {sub && (
            <p
              className="mt-4 text-[15px] font-light leading-[1.65] tracking-tight"
              style={{ color: IVORY, maxWidth: "56ch" }}
            >
              {sub}
            </p>
          )}
          <div className="mt-12 w-full">{children}</div>
        </InView>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------- */
/* 01 Story — three SME profile cards                                       */
/* ----------------------------------------------------------------------- */

function StorySection({ t }: { t: T }) {
  return (
    <Section
      id="story"
      num={t.story.num}
      eyebrow={t.story.eyebrow}
      title={t.story.title}
      titleGold={t.story.titleGold}
      sub={t.story.sub}
    >
      <div className="grid gap-5 md:grid-cols-3">
        {t.story.cards.map((card, i) => (
          <article
            key={card.name}
            className="group overflow-hidden rounded-2xl transition-transform duration-500 hover:-translate-y-1.5"
            style={{ background: IVORY }}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={STORY_IMAGES[i]}
                alt={card.image}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>
            <div className="p-6">
              <h3 className="text-[17px] font-semibold tracking-tight" style={{ color: CARD_INK }}>
                {card.name}
              </h3>
              <p className="mt-2 text-[13.5px] leading-[1.6]" style={{ color: CARD_BODY }}>
                {card.need}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------------------- */
/* 02 Platform — three product cards with dashboard visuals                 */
/* ----------------------------------------------------------------------- */

function PlatformSection({ t }: { t: T }) {
  return (
    <Section
      id="platform"
      num={t.platform.num}
      eyebrow={t.platform.eyebrow}
      title={t.platform.title}
      titleGold={t.platform.titleGold}
      sub={t.platform.sub}
      background={PANEL}
    >
      <div className="grid gap-5 md:grid-cols-3">
        {t.platform.cards.map((card, i) => {
          const Icon = PLATFORM_ICONS[i];
          return (
            <article
              key={card.name}
              className="group relative rounded-2xl p-6 transition-transform duration-500 hover:scale-[1.02] sm:p-7"
              style={{ background: IVORY }}
            >
              <div className="flex items-center justify-between">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full"
                  style={{ background: "rgba(214,168,79,0.18)" }}
                >
                  <Icon className="h-5 w-5" strokeWidth={1.6} style={{ color: "#8A5A1F" }} />
                </span>
                <span
                  className="rounded-full px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: "rgba(18,32,25,0.08)", color: CARD_BODY }}
                >
                  {card.tip}
                </span>
              </div>
              <h3 className="mt-5 text-[19px] font-semibold tracking-tight" style={{ color: CARD_INK }}>
                {card.name}
              </h3>
              <p className="mt-2 min-h-[44px] text-[13.5px] leading-[1.6]" style={{ color: CARD_BODY }}>
                {card.copy}
              </p>
              <div
                className="relative mt-6 aspect-[4/3] w-full overflow-hidden rounded-xl border"
                style={{ borderColor: "rgba(18,32,25,0.1)" }}
              >
                <Image
                  src={PLATFORM_IMAGES[i]}
                  alt={card.tip}
                  fill
                  sizes="(min-width: 768px) 30vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------------------- */
/* 03 SACCO spotlight — photo left, benefit cards right                     */
/* ----------------------------------------------------------------------- */

function SaccoSection({ t }: { t: T }) {
  return (
    <Section
      id="sacco"
      num={t.sacco.num}
      eyebrow={t.sacco.eyebrow}
      title={t.sacco.title}
      titleGold={t.sacco.titleGold}
      sub={t.sacco.sub}
    >
      <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
        <div className="relative min-h-[320px] w-full overflow-hidden rounded-2xl transition-transform duration-500 hover:-translate-y-1 lg:min-h-0">
          <Image
            src={`${IMG}/sacco-spotlight.png`}
            alt={t.sacco.image}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {t.sacco.benefits.map((b, i) => {
            const Icon = SACCO_ICONS[i];
            return (
              <div
                key={b}
                className="flex flex-col justify-center gap-3 rounded-2xl p-6 transition-transform duration-500 hover:-translate-y-1"
                style={{ background: IVORY }}
              >
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full"
                  style={{ background: "rgba(214,168,79,0.18)" }}
                >
                  <Icon className="h-5 w-5" strokeWidth={1.6} style={{ color: "#8A5A1F" }} />
                </span>
                <p className="text-[15px] font-semibold tracking-tight" style={{ color: CARD_INK }}>
                  {b}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------------------- */
/* 04 Ecosystem — full ecosystem map visual                                 */
/* ----------------------------------------------------------------------- */

function EcosystemSection({ t }: { t: T }) {
  return (
    <Section
      id="ecosystem"
      num={t.ecosystem.num}
      eyebrow={t.ecosystem.eyebrow}
      title={t.ecosystem.title}
      titleGold={t.ecosystem.titleGold}
      sub={t.ecosystem.sub}
      background={PANEL}
      center
    >
      <div
        className="relative mx-auto aspect-[16/9] w-full max-w-[1100px] overflow-hidden rounded-2xl border shadow-[0_40px_100px_rgba(0,0,0,0.4)] transition-transform duration-500 hover:-translate-y-1"
        style={{ borderColor: "rgba(214,168,79,0.3)" }}
      >
        <Image
          src={`${IMG}/ecosystem-map.png`}
          alt={t.ecosystem.image}
          fill
          sizes="(min-width: 1280px) 1100px, 100vw"
          className="object-cover object-center"
        />
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------------------- */
/* 05 Use cases — six image-led cards                                       */
/* ----------------------------------------------------------------------- */

function UseCasesSection({ t }: { t: T }) {
  return (
    <Section
      id="usecases"
      num={t.usecases.num}
      eyebrow={t.usecases.eyebrow}
      title={t.usecases.title}
      titleGold={t.usecases.titleGold}
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {t.usecases.cards.map((card, i) => (
          <article
            key={card.name}
            className="group relative overflow-hidden rounded-2xl transition duration-500 hover:-translate-y-1 hover:brightness-110"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 z-10 rounded-2xl border-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ borderColor: GOLD }}
            />
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={USECASE_IMAGES[i]}
                alt={card.image}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>
            <div
              className="absolute inset-x-0 bottom-0 z-10 px-5 pb-4 pt-12"
              style={{ background: "linear-gradient(180deg, transparent 0%, rgba(10,22,18,0.88) 75%)" }}
            >
              <p className="text-[14.5px] font-semibold tracking-tight" style={{ color: IVORY }}>
                {card.name}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------------------- */
/* 06 Impact — partnership photo + metric cards                             */
/* ----------------------------------------------------------------------- */

function ImpactSection({ t }: { t: T }) {
  return (
    <Section
      id="impact"
      num={t.impact.num}
      eyebrow={t.impact.eyebrow}
      title={t.impact.title}
      titleGold={t.impact.titleGold}
      background={PANEL}
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <div className="relative min-h-[300px] w-full overflow-hidden rounded-2xl transition-transform duration-500 hover:-translate-y-1 lg:min-h-0">
          <Image
            src={`${IMG}/partnership.png`}
            alt={t.impact.image}
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover object-center"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, transparent 60%, rgba(10,22,18,0.4) 100%)" }}
          />
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
          {t.impact.cards.map((card) => (
            <div
              key={card.label}
              className="flex flex-col justify-center rounded-2xl border p-5 transition-transform duration-500 hover:-translate-y-1 sm:p-6"
              style={{ borderColor: "rgba(214,168,79,0.22)", background: "rgba(10,22,18,0.55)" }}
            >
              <p
                className="font-mono text-[24px] font-medium leading-none tracking-tight sm:text-[30px]"
                style={{ color: GOLD, fontVariantNumeric: "tabular-nums" }}
              >
                {card.value}
              </p>
              <p className="mt-3 text-[12.5px] font-medium leading-snug sm:text-[13px]" style={{ color: IVORY }}>
                {card.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-6 text-[11.5px]" style={{ color: IVORY_MUTED }}>
        {t.impact.disclaimer}
      </p>
    </Section>
  );
}

/* ----------------------------------------------------------------------- */
/* 07 Partner CTA — warm photographic band                                  */
/* ----------------------------------------------------------------------- */

function PartnerCTA({ t }: { t: T }) {
  return (
    <section id="cta" className="relative px-6 py-24 md:px-10 lg:py-28" style={{ borderTop: `1px solid ${DIVIDER}` }}>
      <div className="relative mx-auto max-w-[1360px] overflow-hidden rounded-3xl px-8 py-16 text-center sm:px-14 sm:py-24">
        <Image
          src={`${IMG}/cta-background.png`}
          alt=""
          fill
          sizes="(min-width: 1440px) 1360px, 100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(10,22,18,0.66) 0%, rgba(10,22,18,0.45) 55%, rgba(10,22,18,0.7) 100%)" }}
        />
        <InView className="relative">
          <h2
            className="mx-auto max-w-[24ch] text-[30px] font-semibold leading-[1.1] tracking-[-0.025em] drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)] sm:text-[42px]"
            style={{ color: IVORY, textWrap: "balance" }}
          >
            {t.cta.title}
          </h2>
          <p
            className="mx-auto mt-5 max-w-[54ch] text-[15px] font-light leading-[1.65] drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]"
            style={{ color: "rgba(242,237,223,0.92)" }}
          >
            {t.cta.copy}
          </p>
          <div className="mt-10">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-8 py-3.5 text-[13.5px] font-semibold tracking-tight transition hover:brightness-110 active:scale-[0.98]"
              style={{ background: `linear-gradient(180deg, ${GOLD}, #C08F35)`, color: "#1A1206" }}
            >
              {t.cta.button}
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.7} />
            </a>
          </div>
        </InView>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------- */
/* Footer                                                                   */
/* ----------------------------------------------------------------------- */

const F_BG = "#063B2E";
const F_TEXT = "#F7F1E6";
const F_MUTED = "rgba(247,241,230,0.68)";
const F_GOLD = "#D6A84F";
const F_BORDER = "rgba(214,168,79,0.22)";

const FAIRWAY_URL = "https://www.fairway.global";
const PLATFORM_HREFS = ["#story", "#platform", "#sacco", "#ecosystem", "#impact"];
const LEGAL_HREFS = ["#", "#", CALENDLY];

function Footer({ lang, t }: { lang: Lang; t: T }) {
  const f = t.footer;
  const amFont =
    lang === "am" ? "var(--font-maleda-am), 'Noto Sans Ethiopic', sans-serif" : undefined;

  return (
    <footer
      className="relative isolate z-10 overflow-hidden"
      style={{ background: F_BG, color: F_TEXT, borderTop: `1px solid ${F_BORDER}` }}
      aria-label={lang === "am" ? "የግርጌ ክፍል" : "Footer"}
    >
      <Image
        src={`${IMG}/footer-pattern.png`}
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover object-center opacity-30"
      />
      <CulturalPattern variant="dark" intensity={0.04} className="opacity-40" />

      <div className="relative mx-auto max-w-[1360px] px-6 md:px-10">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 py-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-x-12">
          <div className="col-span-2 lg:col-span-1">
            <p
              className={`font-semibold ${lang === "am" ? "text-2xl tracking-tight" : "text-xl tracking-[0.14em]"}`}
              style={{ color: F_TEXT, fontFamily: amFont }}
            >
              {BRAND[lang]}
            </p>
            <p className="mt-3 max-w-[34ch] text-[13px] font-light leading-[1.65]" style={{ color: F_MUTED }}>
              {f.tagline}
            </p>
            <p
              className="mt-5 max-w-[34ch] border-l pl-4 text-[12px] font-light leading-[1.7]"
              style={{ color: F_MUTED, borderColor: F_GOLD }}
            >
              {f.trust}
            </p>
            <div className="mt-6">
              <p className="text-[11px] font-medium uppercase tracking-[0.16em]" style={{ color: F_MUTED }}>
                {f.builtBy}
              </p>
              <a
                href={FAIRWAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={f.visit}
                className="mt-1.5 inline-flex items-center gap-1.5 text-[12px] font-medium underline-offset-4 transition hover:underline"
                style={{ color: F_GOLD }}
              >
                {f.visit}
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.7} />
              </a>
            </div>
          </div>

          <FooterColumn heading={f.platformHeading} amFont={amFont}>
            <ul className="space-y-2.5">
              {f.platformLinks.map((label, i) => (
                <li key={label}>
                  <a
                    href={PLATFORM_HREFS[i]}
                    className="text-[13px] font-light leading-snug transition hover:text-[#F7F1E6]"
                    style={{ color: F_MUTED }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn heading={f.servesHeading} amFont={amFont}>
            <ul className="space-y-2.5">
              {f.serves.map((item) => (
                <FooterItem key={item}>{item}</FooterItem>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn heading={f.sectorsHeading} amFont={amFont}>
            <ul className="space-y-2.5">
              {f.sectors.map((item) => (
                <FooterItem key={item}>{item}</FooterItem>
              ))}
            </ul>
          </FooterColumn>
        </div>

        <div className="h-px w-full" style={{ background: F_BORDER }} />

        <div className="flex flex-col gap-6 py-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-[72ch]">
            <p className="text-[12px] font-medium" style={{ color: F_TEXT }}>
              {f.copyright}
            </p>
            <p className="mt-3 text-[11px] font-light leading-[1.7]" style={{ color: F_MUTED }}>
              {f.disclaimer}
            </p>
          </div>
          <nav
            className="flex flex-wrap gap-x-6 gap-y-2"
            aria-label={lang === "am" ? "የሕግ አገናኞች" : "Legal links"}
          >
            {f.legalLinks.map((label, i) => {
              const href = LEGAL_HREFS[i];
              const external = href === CALENDLY;
              return (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="text-[12px] font-medium uppercase tracking-[0.14em] transition hover:text-[#F7F1E6]"
                  style={{ color: F_MUTED }}
                >
                  {label}
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  heading,
  amFont,
  children,
}: {
  heading: string;
  amFont?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3
        className="mb-5 text-[11px] font-semibold uppercase tracking-[0.18em]"
        style={{ color: F_GOLD, fontFamily: amFont }}
      >
        {heading}
      </h3>
      {children}
    </div>
  );
}

function FooterItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-baseline gap-2.5 text-[13px] font-light leading-snug" style={{ color: F_MUTED }}>
      <span aria-hidden className="mt-1.5 inline-block h-[5px] w-[5px] flex-none rounded-full" style={{ background: F_GOLD }} />
      <span>{children}</span>
    </li>
  );
}
