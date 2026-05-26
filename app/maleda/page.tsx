"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, ChevronDown, Minus } from "lucide-react";

import AnimatedHeading from "./_components/AnimatedHeading";
import FadeIn from "./_components/FadeIn";
import InView from "./_components/InView";

/* Dark minimal palette */
const BG = "#0A1612";
const IVORY = "#F2EDDF";
const IVORY_DIM = "rgba(242,237,223,0.64)";
const IVORY_MUTED = "rgba(242,237,223,0.42)";
const DIVIDER = "rgba(242,237,223,0.10)";
const GOLD = "#D6A84F";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_155500_808e6fdd-761f-4acd-b3be-cb7e6e700def.mp4";

type Lang = "en" | "am";

/* ----------------------------------------------------------------------- */
/* Bilingual content object                                                */
/* ----------------------------------------------------------------------- */

const CONTENT = {
  en: {
    nav: {
      problem: "Problem",
      what: "What Maleda Does",
      how: "How It Works",
      use: "Use Cases",
      tech: "Technology Leap",
      trust: "Trust",
      partner: "Partner with Maleda",
    },
    hero: {
      eyebrow: "Morning sun · Ethiopia",
      headline: "A new morning for\nbusiness lending\nin Ethiopia.",
      sub: "Maleda helps regulated financial institutions expand local-currency lending to SMEs, farmers, traders, women-led businesses, and growing enterprises.",
      support: "Verified borrowers. Trusted lenders. Productive credit. No borrower crypto exposure.",
      ctaPrimary: "Partner with Maleda",
      ctaSecondary: "See how it works",
      chips: [
        "Local-currency lending",
        "Regulated institution model",
        "Compliance-first",
        "Built for Ethiopia's productive economy",
      ],
    },
    problem: {
      num: "01",
      eyebrow: "The challenge",
      title: "Credit demand exists. ",
      titleGold: "Access does not.",
      copy: [
        "Across Ethiopia, many productive businesses are ready to grow but cannot access affordable finance.",
        "SMEs, farmers, traders, exporters, and women-led businesses often face limited credit because lending infrastructure is fragmented and funding channels are difficult to scale.",
        "At the same time, regulated lenders need better ways to access capital, verify borrowers, manage risk, and serve more businesses responsibly.",
      ],
      bold: "Maleda connects this gap.",
    },
    what: {
      num: "02",
      eyebrow: "What Maleda does",
      title: "A lending platform ",
      titleGold: "built around local institutions.",
      copy: "Maleda gives regulated lenders the infrastructure to expand productive business lending without losing local control.",
      colA: {
        label: "Local institutions continue to",
        items: [
          "Originate loans",
          "Underwrite borrowers",
          "Serve customers",
          "Manage repayment",
          "Meet regulatory obligations",
        ],
      },
      colB: {
        label: "Maleda supports them with",
        items: [
          "Borrower verification",
          "Compliance workflows",
          "Capital coordination",
          "Reporting tools",
          "Institutional funding access",
        ],
      },
    },
    how: {
      num: "03",
      eyebrow: "How it works",
      title: "Simple for borrowers. ",
      titleGold: "Powerful for institutions.",
      callout: "Borrowers receive financing in local currency. Never cryptocurrency.",
      steps: [
        {
          title: "A regulated lender joins Maleda",
          copy: "The local institution remains the main customer-facing lender.",
        },
        {
          title: "Businesses are verified locally",
          copy: "Borrower identity, eligibility, and business information are checked through trusted channels.",
        },
        {
          title: "Loans are originated in local currency",
          copy: "Borrowers receive financing from the local institution, not from a crypto app.",
        },
        {
          title: "Capital partners participate",
          copy: "Trusted funding partners support loan portfolios through structured institutional pathways.",
        },
        {
          title: "Growth sectors receive finance",
          copy: "Credit reaches SMEs, agriculture, trade, equipment, and women-led businesses.",
        },
      ],
    },
    use: {
      num: "04",
      eyebrow: "Use cases",
      title: "Built for Ethiopia's ",
      titleGold: "productive economy.",
      cards: [
        { title: "SME working capital", copy: "Finance inventory, operations, and expansion." },
        { title: "Agricultural finance", copy: "Support farmers, cooperatives, processors, and agri-supply chains." },
        { title: "Trade finance", copy: "Help importers, exporters, and local traders access working capital." },
        { title: "Women-led businesses", copy: "Expand access to finance for women entrepreneurs." },
        { title: "Equipment financing", copy: "Enable businesses to acquire machinery, vehicles, and productive assets." },
        { title: "Export and manufacturing growth", copy: "Support enterprises that generate jobs and foreign exchange." },
      ],
    },
    tech: {
      num: "05",
      eyebrow: "Technology leap",
      title: "A technology leap ",
      titleGold: "for Ethiopia's credit market.",
      copy: "Maleda can help Ethiopia move from fragmented business lending to a more connected, transparent, and scalable credit system.",
      pillars: [
        {
          label: "For financial institutions",
          copy: "Better tools to serve more qualified businesses.",
        },
        {
          label: "For public stakeholders",
          copy: "Stronger support for SME growth, agriculture, trade, and job creation.",
        },
        {
          label: "For businesses",
          copy: "Better access to finance through trusted local channels.",
        },
      ],
    },
    trust: {
      num: "06",
      eyebrow: "Trust",
      title: "Designed for ",
      titleGold: "institutional trust.",
      items: [
        {
          q: "Do borrowers receive cryptocurrency?",
          a: "No. Borrowers receive financing in local currency through regulated local institutions.",
        },
        {
          q: "Is Maleda a lender?",
          a: "Maleda is a lending platform for institutions, but it does not lend directly to the public. Licensed financial institutions originate, underwrite, and service the loans.",
        },
        {
          q: "Does Maleda replace banks or MFIs?",
          a: "No. Maleda is designed to strengthen regulated lenders, not replace them.",
        },
        {
          q: "Who provides the capital?",
          a: "Maleda helps connect local lending demand with trusted capital partners through structured institutional channels.",
        },
        {
          q: "Who manages the customer relationship?",
          a: "The local regulated financial institution manages the borrower relationship.",
        },
        {
          q: "Why is this important for Ethiopia?",
          a: "It can help expand productive credit for SMEs, agriculture, trade, women-led businesses, and job-creating enterprises.",
        },
      ],
    },
    cta: {
      eyebrow: "Get in touch",
      title: "Partner with Maleda ",
      titleGold: "to expand productive credit.",
      copy: "Whether you are a bank, microfinance institution, capital partner, or public stakeholder, Maleda helps build stronger and more scalable credit markets for Ethiopia's productive economy.",
      button: "Start a conversation",
    },
    footer: {
      tagline: "A lending platform for Ethiopia's productive economy.",
      builtBy: "Built by",
      links: { problem: "Problem", what: "What Maleda Does", how: "How It Works", use: "Use Cases", contact: "Contact" },
      legal:
        "Maleda is infrastructure for regulated lenders — not a bank, microfinance institution, or deposit-taking institution.",
    },
  },

  am: {
    nav: {
      problem: "ችግር",
      what: "ማለዳ ምን ይሰራል",
      how: "እንዴት እንደሚሰራ",
      use: "የአጠቃቀም ምሳሌዎች",
      tech: "የቴክኖሎጂ እርምጃ",
      trust: "እምነት",
      partner: "ከማለዳ ጋር ይተባበሩ",
    },
    hero: {
      eyebrow: "ማለዳ · ኢትዮጵያ",
      headline: "ለኢትዮጵያ የንግድ ብድር\nአዲስ ማለዳ።",
      sub: "ማለዳ የተፈቀዱ የፋይናንስ ተቋማት ለSME፣ ለገበሬዎች፣ ለነጋዴዎች፣ ለሴቶች የሚመሩ ንግዶች እና ለሚያድጉ ድርጅቶች በአካባቢ ገንዘብ ብድር እንዲያስፋፉ ይረዳል።",
      support: "የተረጋገጡ ተበዳሪዎች። የታመኑ ተቋማት። ምርታማ ብድር። ለተበዳሪዎች የክሪፕቶ ግንኙነት የለም።",
      ctaPrimary: "ከማለዳ ጋር ይተባበሩ",
      ctaSecondary: "እንዴት እንደሚሰራ ይመልከቱ",
      chips: [
        "በአካባቢ ገንዘብ ብድር",
        "በተፈቀዱ ተቋማት የሚሰራ",
        "ኮምፕላያንስ ቅድሚያ",
        "ለኢትዮጵያ ምርታማ ኢኮኖሚ የተዘጋጀ",
      ],
    },
    problem: {
      num: "01",
      eyebrow: "ችግሩ",
      title: "የብድር ፍላጎት አለ። ",
      titleGold: "መዳረሻው ግን ውስን ነው።",
      copy: [
        "በኢትዮጵያ ብዙ ምርታማ ንግዶች ለማደግ ዝግጁ ናቸው፤ ነገር ግን ተመጣጣኝ የፋይናንስ መዳረሻ የላቸውም።",
        "SME፣ ገበሬዎች፣ ነጋዴዎች፣ ላኪዎች እና ሴቶች የሚመሩ ንግዶች ብዙ ጊዜ የብድር መዳረሻ ውስንነት ያጋጥማቸዋል። ምክንያቱ የእድል እጥረት ሳይሆን የብድር መሠረተ ልማት መበታተን ነው።",
        "በተመሳሳይ ጊዜ፣ የተፈቀዱ የፋይናንስ ተቋማት ካፒታል ለማግኘት፣ ተበዳሪዎችን ለማረጋገጥ፣ አደጋን ለመቆጣጠር እና ብዙ ንግዶችን በኃላፊነት ለማገልገል የተሻለ መንገድ ይፈልጋሉ።",
      ],
      bold: "ማለዳ ይህንን ክፍተት ያገናኛል።",
    },
    what: {
      num: "02",
      eyebrow: "ማለዳ ምን ይሰራል",
      title: "በአካባቢ ተቋማት ዙሪያ ",
      titleGold: "የተገነባ የብድር መድረክ።",
      copy: "ማለዳ የተፈቀዱ የፋይናንስ ተቋማት የምርታማ ንግድ ብድርን እንዲያስፋፉ የሚያግዝ መሠረተ ልማት ይሰጣል። ይህም የአካባቢ ቁጥጥርን አይቀንስም።",
      colA: {
        label: "የአካባቢ ተቋማት ይቀጥላሉ",
        items: [
          "ብድር ማመንጨት",
          "ተበዳሪዎችን መገምገም",
          "ደንበኞችን ማገልገል",
          "የብድር ክፍያን መከታተል",
          "የህግ እና የቁጥጥር ግዴታዎችን መፈጸም",
        ],
      },
      colB: {
        label: "ማለዳ የሚደግፍበት",
        items: [
          "የተበዳሪ ማረጋገጫ",
          "የኮምፕላያንስ ሂደቶች",
          "የካፒታል ማቀናበሪያ",
          "የሪፖርት መሳሪያዎች",
          "የተቋማዊ ፈንድ መዳረሻ",
        ],
      },
    },
    how: {
      num: "03",
      eyebrow: "እንዴት እንደሚሰራ",
      title: "ለተበዳሪዎች ቀላል። ",
      titleGold: "ለተቋማት ኃይለኛ።",
      callout: "ተበዳሪዎች ብድሩን በአካባቢ ገንዘብ ይቀበላሉ። በፍፁም ክሪፕቶ አይደለም።",
      steps: [
        {
          title: "የተፈቀደ የፋይናንስ ተቋም ከማለዳ ጋር ይተባበራል",
          copy: "የአካባቢ ተቋሙ የደንበኛ ግንኙነት ዋና ተቋም ሆኖ ይቆያል።",
        },
        {
          title: "ንግዶች በአካባቢ ታማኝ መንገዶች ይረጋገጣሉ",
          copy: "የተበዳሪው ማንነት፣ ብቁነት እና የንግድ መረጃ ይመረመራል።",
        },
        {
          title: "ብድር በአካባቢ ገንዘብ ይሰጣል",
          copy: "ተበዳሪው ብድር የሚቀበለው ከአካባቢ ተቋም ነው፤ ከክሪፕቶ መተግበሪያ አይደለም።",
        },
        {
          title: "የካፒታል አጋሮች ይሳተፋሉ",
          copy: "የታመኑ ፈንድ አጋሮች በተዋቀሩ ተቋማዊ መንገዶች የብድር ፖርትፎሊዮዎችን ይደግፋሉ።",
        },
        {
          title: "ምርታማ ዘርፎች ፋይናንስ ያገኛሉ",
          copy: "ብድር ለSME፣ ለግብርና፣ ለንግድ፣ ለመሣሪያ ፋይናንስ እና ለሴቶች የሚመሩ ንግዶች ይደርሳል።",
        },
      ],
    },
    use: {
      num: "04",
      eyebrow: "የአጠቃቀም ምሳሌዎች",
      title: "ለኢትዮጵያ ",
      titleGold: "ምርታማ ኢኮኖሚ የተዘጋጀ።",
      cards: [
        { title: "የSME የስራ ካፒታል", copy: "ለእቃ ግዢ፣ ለስራ እንቅስቃሴ እና ለማስፋፋት ፋይናንስ።" },
        { title: "የግብርና ፋይናንስ", copy: "ለገበሬዎች፣ ለኅብረት ስራ ማህበራት፣ ለማቀነባበሪያዎች እና ለግብርና አቅርቦት ሰንሰለቶች ድጋፍ።" },
        { title: "የንግድ ፋይናንስ", copy: "ላኪዎች፣ አስመጪዎች እና የአካባቢ ነጋዴዎች የስራ ካፒታል እንዲያገኙ ይረዳል።" },
        { title: "ሴቶች የሚመሩ ንግዶች", copy: "ለሴት ኢንተርፕረነሮች የፋይናንስ መዳረሻን ያስፋፋል።" },
        { title: "የመሣሪያ ፋይናንስ", copy: "ንግዶች ማሽነሪ፣ ተሽከርካሪ እና ምርታማ ንብረት እንዲገዙ ይረዳል።" },
        { title: "የላኪነት እና የማምረቻ እድገት", copy: "ስራ የሚፈጥሩ እና የውጭ ምንዛሬ የሚያመጡ ድርጅቶችን ይደግፋል።" },
      ],
    },
    tech: {
      num: "05",
      eyebrow: "የቴክኖሎጂ እርምጃ",
      title: "ለኢትዮጵያ የብድር ገበያ ",
      titleGold: "የቴክኖሎጂ እርምጃ።",
      copy: "ማለዳ ኢትዮጵያ ከተበታተነ የንግድ ብድር ስርዓት ወደ የተገናኘ፣ ግልጽ እና ለማስፋፋት የሚችል የብድር ስርዓት እንድትሸጋገር ሊረዳ ይችላል።",
      pillars: [
        {
          label: "ለፋይናንስ ተቋማት",
          copy: "ብዙ ብቁ ንግዶችን ለማገልገል የተሻሉ መሳሪያዎች።",
        },
        {
          label: "ለሕዝባዊ ባለድርሻዎች",
          copy: "የSME እድገትን፣ ግብርናን፣ ንግድን እና የስራ ፈጠራን የሚደግፍ መሠረት።",
        },
        {
          label: "ለንግዶች",
          copy: "በታመኑ የአካባቢ ተቋማት በኩል የተሻለ የፋይናንስ መዳረሻ።",
        },
      ],
    },
    trust: {
      num: "06",
      eyebrow: "እምነት",
      title: "ለተቋማዊ እምነት ",
      titleGold: "የተዘጋጀ።",
      items: [
        {
          q: "ተበዳሪዎች ክሪፕቶ ይቀበላሉ?",
          a: "አይ። ተበዳሪዎች ብድር የሚቀበሉት በአካባቢ ገንዘብ ነው፤ በተፈቀዱ የአካባቢ ተቋማት በኩል።",
        },
        {
          q: "ማለዳ ብድር ይሰጣል?",
          a: "ማለዳ ለተቋማት የተዘጋጀ የብድር መድረክ ነው፤ ግን በቀጥታ ለሕዝብ ብድር አይሰጥም። የተፈቀዱ የፋይናንስ ተቋማት ብድሩን ያመነጫሉ፣ ተበዳሪውን ይገመግማሉ እና አገልግሎቱን ይቆጣጠራሉ።",
        },
        {
          q: "ማለዳ ባንኮችን ወይም ማይክሮ ፋይናንስን ይተካል?",
          a: "አይ። ማለዳ የተፈቀዱ የፋይናንስ ተቋማትን ለማጠናከር የተዘጋጀ ነው፣ ለመተካት አይደለም።",
        },
        {
          q: "ካፒታሉን ማን ያቀርባል?",
          a: "ማለዳ የአካባቢ የብድር ፍላጎትን ከታመኑ የካፒታል አጋሮች ጋር በተዋቀሩ ተቋማዊ መንገዶች ለማገናኘት ይረዳል።",
        },
        {
          q: "የደንበኛ ግንኙነትን ማን ይቆጣጠራል?",
          a: "የአካባቢ የተፈቀደ የፋይናንስ ተቋም የተበዳሪውን ግንኙነት ይቆጣጠራል።",
        },
        {
          q: "ይህ ለኢትዮጵያ ለምን አስፈላጊ ነው?",
          a: "ለSME፣ ለግብርና፣ ለንግድ፣ ለሴቶች የሚመሩ ንግዶች እና ለስራ ፈጠራ ድርጅቶች ምርታማ ብድር ለማስፋፋት ሊረዳ ይችላል።",
        },
      ],
    },
    cta: {
      eyebrow: "እኛን ያግኙን",
      title: "ምርታማ ብድርን ለማስፋፋት ",
      titleGold: "ከማለዳ ጋር ይተባበሩ።",
      copy: "ባንክ፣ ማይክሮ ፋይናንስ ተቋም፣ የካፒታል አጋር ወይም ሕዝባዊ ባለድርሻ ከሆኑ፣ ማለዳ ለኢትዮጵያ ምርታማ ኢኮኖሚ ጠንካራ እና ሊስፋፋ የሚችል የብድር ገበያ ለመገንባት ይረዳል።",
      button: "ውይይት ይጀምሩ",
    },
    footer: {
      tagline: "ለኢትዮጵያ ምርታማ ኢኮኖሚ የተዘጋጀ የብድር መድረክ።",
      builtBy: "የተገነባው በ",
      links: { problem: "ችግር", what: "ማለዳ ምን ይሰራል", how: "እንዴት እንደሚሰራ", use: "የአጠቃቀም ምሳሌዎች", contact: "ግንኙነት" },
      legal:
        "ማለዳ ለተፈቀዱ የፋይናንስ ተቋማት የተዘጋጀ መሠረተ ልማት ነው — ባንክ፣ ማይክሮ ፋይናንስ ተቋም ወይም ተቀማጭ የሚቀበል ተቋም አይደለም።",
    },
  },
};

/* ----------------------------------------------------------------------- */
/* Page                                                                    */
/* ----------------------------------------------------------------------- */

export default function MaledaPage() {
  const [lang, setLang] = useState<Lang>("en");
  const t = CONTENT[lang];

  // Apply language-aware typography to the entire page subtree.
  const fontVar =
    lang === "am" ? "var(--font-maleda-am), 'Noto Sans Ethiopic', sans-serif" : "var(--font-maleda-en), Inter, system-ui, sans-serif";
  const lineHeightClass = lang === "am" ? "[&_p]:leading-[1.9] [&_li]:leading-[1.9]" : "";

  return (
    <div
      lang={lang}
      className={lineHeightClass}
      style={{ background: BG, color: IVORY_DIM, fontFamily: fontVar }}
    >
      <Hero lang={lang} setLang={setLang} t={t} />
      <ProblemSection t={t} />
      <WhatMaledaDoes t={t} />
      <HowItWorksSection t={t} />
      <UseCasesSection t={t} />
      <TechnologyLeapSection t={t} />
      <TrustSection t={t} />
      <FinalCTASection t={t} />
      <Footer lang={lang} t={t} />
    </div>
  );
}

type T = (typeof CONTENT)["en"];

/* ----------------------------------------------------------------------- */
/* Hero + Navbar                                                           */
/* ----------------------------------------------------------------------- */

function Hero({
  lang,
  setLang,
  t,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: T;
}) {
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
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,22,18,0.30) 0%, transparent 28%, transparent 55%, rgba(10,22,18,0.55) 88%, rgba(10,22,18,0.85) 100%)",
        }}
      />

      <Navbar lang={lang} setLang={setLang} t={t} />

      <div className="relative z-10 mx-auto mt-auto flex w-full max-w-[1400px] flex-col gap-10 px-6 pb-20 md:px-10 lg:px-14 lg:pb-24">
        <div className="max-w-[820px]">
          <FadeIn delay={80} duration={600}>
            <span
              className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.22em]"
              style={{ color: IVORY_DIM }}
            >
              <span aria-hidden className="h-px w-8" style={{ background: GOLD }} />
              {t.hero.eyebrow}
            </span>
          </FadeIn>

          <AnimatedHeading
            key={lang} // re-trigger animation on language switch
            text={t.hero.headline}
            className={`mt-7 text-[40px] font-medium leading-[1.06] tracking-[-0.025em] sm:text-[56px] ${
              lang === "am" ? "lg:text-[64px]" : "lg:text-[72px]"
            }`}
          />

          <FadeIn delay={1100} duration={700} className="mt-8 max-w-[58ch]">
            <p
              className="text-[15px] font-light leading-[1.7] sm:text-[17px]"
              style={{ color: "rgba(242,237,223,0.80)" }}
            >
              {t.hero.sub}
            </p>
          </FadeIn>

          <FadeIn delay={1300} duration={700} className="mt-4 max-w-[58ch]">
            <p className="text-[12px] font-light leading-[1.7]" style={{ color: IVORY_MUTED }}>
              {t.hero.support}
            </p>
          </FadeIn>

          <FadeIn delay={1500} duration={700} className="mt-10">
            <div className="flex flex-wrap items-center gap-6">
              <a
                href="#cta"
                className="inline-flex h-12 cursor-pointer items-center justify-center gap-2 px-6 text-[13px] font-semibold tracking-tight transition active:scale-[0.98] hover:brightness-110"
                style={{ background: GOLD, color: BG }}
              >
                {t.hero.ctaPrimary}
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
                {t.hero.ctaSecondary}
                <ArrowRight className="h-4 w-4" strokeWidth={1.7} />
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={1750} duration={700} className="mt-12 max-w-[760px]">
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-4">
              {t.hero.chips.map((c) => (
                <span
                  key={c}
                  className="border-t pt-3 text-[11px] font-medium leading-snug"
                  style={{ borderColor: "rgba(242,237,223,0.18)", color: "rgba(242,237,223,0.78)" }}
                >
                  {c}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

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
    { href: "#problem", label: t.nav.problem },
    { href: "#what", label: t.nav.what },
    { href: "#how-it-works", label: t.nav.how },
    { href: "#use-cases", label: t.nav.use },
    { href: "#trust", label: t.nav.trust },
  ];

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

          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((link) => (
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

          <div className="flex items-center gap-6">
            <LangToggle lang={lang} setLang={setLang} />
            <a
              href="#cta"
              className="hidden items-center gap-2 text-[12px] font-medium uppercase tracking-[0.16em] transition sm:inline-flex"
              style={{
                color: GOLD,
                borderBottom: `1px solid ${GOLD}`,
                paddingBottom: 2,
              }}
            >
              {t.nav.partner}
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.7} />
            </a>
          </div>
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
      className="inline-flex items-center text-[12px] font-medium uppercase tracking-[0.16em]"
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        aria-label="Switch to English"
        className="cursor-pointer transition-colors duration-200"
        style={{
          color: lang === "en" ? GOLD : IVORY_DIM,
          borderBottom: lang === "en" ? `1px solid ${GOLD}` : "1px solid transparent",
          paddingBottom: 2,
        }}
      >
        EN
      </button>
      <span aria-hidden className="mx-2" style={{ color: IVORY_MUTED }}>
        |
      </span>
      <button
        type="button"
        onClick={() => setLang("am")}
        aria-pressed={lang === "am"}
        aria-label="ወደ አማርኛ ቀይር"
        className="cursor-pointer transition-colors duration-200"
        style={{
          color: lang === "am" ? GOLD : IVORY_DIM,
          borderBottom: lang === "am" ? `1px solid ${GOLD}` : "1px solid transparent",
          paddingBottom: 2,
          fontFamily: "var(--font-maleda-am), 'Noto Sans Ethiopic', sans-serif",
        }}
      >
        አማ
      </button>
    </div>
  );
}

/* ----------------------------------------------------------------------- */
/* Section primitive                                                        */
/* ----------------------------------------------------------------------- */

function Section({
  id,
  num,
  eyebrow,
  title,
  titleGold,
  intro,
  children,
}: {
  id: string;
  num: string;
  eyebrow: string;
  title: string;
  titleGold: string;
  intro?: React.ReactNode;
  children?: React.ReactNode;
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
              className="text-[30px] font-medium leading-[1.06] tracking-[-0.025em] sm:text-[42px] lg:text-[50px]"
              style={{ color: IVORY, textWrap: "balance" }}
            >
              {title}
              <span style={{ color: GOLD }}>{titleGold}</span>
            </h2>
            {intro && (
              <div className="mt-6 text-[15px] font-light leading-[1.75]" style={{ color: IVORY_DIM, maxWidth: "60ch" }}>
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

function ProblemSection({ t }: { t: T }) {
  return (
    <Section
      id="problem"
      num={t.problem.num}
      eyebrow={t.problem.eyebrow}
      title={t.problem.title}
      titleGold={t.problem.titleGold}
    >
      <div className="mt-8 space-y-5">
        {t.problem.copy.map((p, i) => (
          <p key={i} className="text-[15px] font-light leading-[1.75]" style={{ color: IVORY_DIM, maxWidth: "62ch" }}>
            {p}
          </p>
        ))}
      </div>
      <p
        className="mt-10 border-l pl-5 text-[20px] font-medium leading-snug tracking-tight sm:text-[26px]"
        style={{ borderColor: GOLD, color: IVORY }}
      >
        {t.problem.bold}
      </p>
    </Section>
  );
}

/* ----------------------------------------------------------------------- */
/* What Maleda Does                                                        */
/* ----------------------------------------------------------------------- */

function WhatMaledaDoes({ t }: { t: T }) {
  return (
    <Section
      id="what"
      num={t.what.num}
      eyebrow={t.what.eyebrow}
      title={t.what.title}
      titleGold={t.what.titleGold}
      intro={<p>{t.what.copy}</p>}
    >
      <div className="mt-16 grid gap-10 md:grid-cols-2 md:gap-16">
        <DualList label={t.what.colA.label} items={t.what.colA.items} />
        <DualList label={t.what.colB.label} items={t.what.colB.items} accent />
      </div>
    </Section>
  );
}

function DualList({ label, items, accent = false }: { label: string; items: readonly string[]; accent?: boolean }) {
  return (
    <div>
      <p
        className="text-[10px] font-medium uppercase tracking-[0.22em]"
        style={{ color: accent ? GOLD : IVORY_MUTED }}
      >
        {label}
      </p>
      <ul className="mt-5 divide-y" style={{ borderColor: DIVIDER }}>
        {items.map((item, i) => (
          <li
            key={item}
            className="grid grid-cols-[42px_1fr] items-baseline gap-3 border-t py-4 first:border-t-0"
            style={{ borderColor: DIVIDER }}
          >
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.22em]" style={{ color: IVORY_MUTED }}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-[15px] font-medium leading-snug tracking-tight" style={{ color: IVORY }}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ----------------------------------------------------------------------- */
/* How It Works                                                            */
/* ----------------------------------------------------------------------- */

function HowItWorksSection({ t }: { t: T }) {
  return (
    <Section
      id="how-it-works"
      num={t.how.num}
      eyebrow={t.how.eyebrow}
      title={t.how.title}
      titleGold={t.how.titleGold}
    >
      <p
        className="mt-10 border-l pl-5 text-[14px] font-medium leading-snug tracking-tight"
        style={{ borderColor: GOLD, color: IVORY }}
      >
        {t.how.callout}
      </p>

      <ol className="relative mt-16">
        <div
          aria-hidden
          className="absolute left-[14px] top-0 bottom-0 w-px"
          style={{ background: "rgba(242,237,223,0.10)" }}
        />
        {t.how.steps.map((s, i) => (
          <li key={i} className="relative pl-12 pb-10 last:pb-0">
            <span
              aria-hidden
              className="absolute left-[8px] top-1 h-[13px] w-[13px] rounded-full"
              style={{ background: GOLD, border: `1px solid ${GOLD}` }}
            />
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.22em]" style={{ color: GOLD }}>
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-3 text-[18px] font-medium leading-snug tracking-tight" style={{ color: IVORY }}>
              {s.title}
            </h3>
            <p className="mt-2 max-w-[58ch] text-[14px] font-light leading-[1.7]" style={{ color: IVORY_DIM }}>
              {s.copy}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

/* ----------------------------------------------------------------------- */
/* Use Cases                                                               */
/* ----------------------------------------------------------------------- */

function UseCasesSection({ t }: { t: T }) {
  return (
    <Section
      id="use-cases"
      num={t.use.num}
      eyebrow={t.use.eyebrow}
      title={t.use.title}
      titleGold={t.use.titleGold}
    >
      <div className="mt-16 grid gap-px sm:grid-cols-2 lg:grid-cols-3" style={{ background: DIVIDER }}>
        {t.use.cards.map((c, i) => (
          <article key={c.title} className="flex flex-col gap-4 p-8" style={{ background: BG }}>
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.22em]" style={{ color: GOLD }}>
              {String(i + 1).padStart(2, "0")} / 06
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
/* Technology Leap                                                         */
/* ----------------------------------------------------------------------- */

function TechnologyLeapSection({ t }: { t: T }) {
  return (
    <Section
      id="tech"
      num={t.tech.num}
      eyebrow={t.tech.eyebrow}
      title={t.tech.title}
      titleGold={t.tech.titleGold}
      intro={<p>{t.tech.copy}</p>}
    >
      <ul className="mt-16 divide-y" style={{ borderColor: DIVIDER }}>
        {t.tech.pillars.map((p, i) => (
          <li
            key={p.label}
            className="grid grid-cols-1 gap-3 border-t py-7 first:border-t-0 sm:grid-cols-[280px_1fr] sm:gap-10"
            style={{ borderColor: DIVIDER }}
          >
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.22em]" style={{ color: GOLD }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[15px] font-medium leading-snug tracking-tight" style={{ color: IVORY }}>
                {p.label}
              </h3>
            </div>
            <p className="text-[14px] font-light leading-[1.75]" style={{ color: IVORY_DIM, maxWidth: "58ch" }}>
              {p.copy}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* ----------------------------------------------------------------------- */
/* Trust / FAQ                                                             */
/* ----------------------------------------------------------------------- */

function TrustSection({ t }: { t: T }) {
  return (
    <Section
      id="trust"
      num={t.trust.num}
      eyebrow={t.trust.eyebrow}
      title={t.trust.title}
      titleGold={t.trust.titleGold}
    >
      <div className="mt-16">
        {t.trust.items.map((item, i) => (
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

function FinalCTASection({ t }: { t: T }) {
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
      <InView className="relative mx-auto max-w-[820px] text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em]" style={{ color: GOLD }}>
          {t.cta.eyebrow}
        </p>
        <h2
          className="mt-6 text-[34px] font-medium leading-[1.06] tracking-[-0.025em] sm:text-[48px] lg:text-[58px]"
          style={{ color: IVORY, textWrap: "balance" }}
        >
          {t.cta.title}
          <span style={{ color: GOLD }}>{t.cta.titleGold}</span>
        </h2>
        <p className="mx-auto mt-6 max-w-[58ch] text-[15px] font-light leading-[1.75]" style={{ color: IVORY_DIM }}>
          {t.cta.copy}
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          <a
            href="mailto:hello@fairway.global?subject=Maleda%20partnership"
            className="inline-flex h-12 cursor-pointer items-center justify-center gap-2 px-7 text-[13px] font-semibold tracking-tight transition active:scale-[0.98] hover:brightness-110"
            style={{ background: GOLD, color: BG }}
          >
            {t.cta.button}
            <ArrowRight className="h-4 w-4" strokeWidth={1.7} />
          </a>
        </div>
      </InView>
    </section>
  );
}

/* ----------------------------------------------------------------------- */
/* Footer                                                                  */
/* ----------------------------------------------------------------------- */

function Footer({ lang, t }: { lang: Lang; t: T }) {
  const footerLinks = [
    { href: "#problem", label: t.footer.links.problem },
    { href: "#what", label: t.footer.links.what },
    { href: "#how-it-works", label: t.footer.links.how },
    { href: "#use-cases", label: t.footer.links.use },
    { href: "#cta", label: t.footer.links.contact },
  ];

  return (
    <footer
      className="relative z-10 px-6 py-14 md:px-10 lg:px-14"
      style={{ borderTop: `1px solid ${DIVIDER}` }}
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div className="max-w-[460px]">
            <p className="text-xl font-semibold tracking-tight" style={{ color: IVORY }}>
              MALEDA
            </p>
            <p className="mt-3 text-[13px] font-light leading-[1.65]" style={{ color: IVORY_DIM }}>
              {t.footer.tagline}
            </p>
            <p className="mt-6 text-[11px] font-light" style={{ color: IVORY_MUTED }}>
              {t.footer.builtBy}{" "}
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
          &copy; {new Date().getFullYear()} Fairway. {t.footer.legal}
        </p>
      </div>
    </footer>
  );
}
