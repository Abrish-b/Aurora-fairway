"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import AnimatedHeading from "./_components/AnimatedHeading";
import FadeIn from "./_components/FadeIn";
import InView from "./_components/InView";
import ProblemSplitVisual from "./_components/ProblemSplitVisual";
import SpeedComparisonVisual from "./_components/SpeedComparisonVisual";
import LenderEcosystemMap from "./_components/LenderEcosystemMap";
import ParticipationFlow from "./_components/ParticipationFlow";
import ControlBoundaryDiagram from "./_components/ControlBoundaryDiagram";
import PrivateRecordsVisual from "./_components/PrivateRecordsVisual";
import InstitutionalTrustFramework from "./_components/InstitutionalTrustFramework";
import BehindTheScenesInfra from "./_components/BehindTheScenesInfra";

/* Dark institutional palette */
const BG = "#0A1612";
const IVORY = "#F2EDDF";
const IVORY_DIM = "rgba(242,237,223,0.64)";
const IVORY_MUTED = "rgba(242,237,223,0.42)";
const DIVIDER = "rgba(242,237,223,0.10)";
const GOLD = "#D6A84F";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_155500_808e6fdd-761f-4acd-b3be-cb7e6e700def.mp4";

const CALENDLY = "https://calendly.com/heikki-fairway/fairway-demo?month=2026-05";

type Lang = "en" | "am";

const BRAND = { en: "AURORA", am: "ማለዳ" } as const;

/* ----------------------------------------------------------------------- */
/* Bilingual content object                                                */
/* ----------------------------------------------------------------------- */

const CONTENT = {
  en: {
    nav: {
      problem: "The opportunity",
      speed: "Why speed",
      ecosystem: "Ecosystem",
      how: "How it works",
      control: "Control",
      trust: "Trust",
      partner: "Partner with Aurora",
    },
    hero: {
      eyebrow: "Aurora · Ethiopia",
      headline: "Access global digital capital\nfor productive lending.",
      sub: "Structured capital access for lending institutions.",
      ctaPrimary: "Partner with Aurora",
      ctaSecondary: "See how it works",
      chips: [
        "Institutions remain the lender",
        "Faster capital access",
        "Structured participation",
        "Compliance-aware infrastructure",
      ],
    },
    problem: {
      num: "01",
      eyebrow: "The opportunity",
      title: "Global capital exists. ",
      titleGold: "Productive lenders remain constrained.",
      sub: "Aurora connects productive lenders with structured international capital participation.",
      split: {
        leftEyebrow: "Local productive lenders",
        leftTitle: "Originate, underwrite, service",
        leftChips: ["Banks", "MFIs", "Regulated lenders"],
        middleLabel: "Aurora infrastructure",
        rightEyebrow: "Global digital capital",
        rightTitle: "Structured participation",
        rightChips: ["DFIs", "Institutional capital", "Capital partners"],
      },
    },
    speed: {
      num: "02",
      eyebrow: "Why speed matters",
      title: "Short-duration lending should not depend ",
      titleGold: "on slow facility negotiations.",
      visual: {
        slowEyebrow: "Traditional path",
        slowLabel: "Bilateral facility negotiation",
        slowSteps: ["Term sheet", "Diligence", "Legal drafting", "Disbursement"],
        fastEyebrow: "Aurora path",
        fastLabel: "Structured participation flow",
        fastSteps: ["Opportunity", "Participation", "Capital", "Lending continues"],
        footnote: "Repeatable pathways replace one-off facility processes — without changing who underwrites or services the loan.",
      },
    },
    ecosystem: {
      num: "03",
      eyebrow: "Ecosystem",
      title: "Fairway connects lenders with ",
      titleGold: "digital capital infrastructure.",
      sub: "Lenders continue lending. Fairway provides the capital access infrastructure.",
      map: {
        capital:   { label: "Capital Partners",     copy: "Participate in productive lending through structured institutional pathways." },
        aurora:    { label: "Fairway / Aurora",     copy: "Structured capital access, compliance-aware infrastructure, coordination rails." },
        lender:    { label: "Lending Institutions", copy: "Originate, underwrite, service, and collect locally. The central operational actor." },
        borrowers: { label: "Borrowers",            copy: "Receive financing through their regulated local lender, in local currency." },
        public:    { label: "Public Stakeholders",  copy: "Provide oversight and support financial inclusion, SME growth, and job creation." },
        hint: "Hover or focus any node to see its role",
        flowLabel: "Capital flow",
        oversightLabel: "Oversight & support",
      },
    },
    how: {
      num: "04",
      eyebrow: "How it works",
      title: "Four steps. ",
      titleGold: "Institutions stay in control.",
      steps: [
        { title: "Lender approves opportunity", copy: "" },
        { title: "Structured participation request", copy: "" },
        { title: "Eligible capital participates", copy: "" },
        { title: "Local lending continues", copy: "" },
      ],
      footer: "Capital moves. The relationship stays.",
    },
    control: {
      num: "05",
      eyebrow: "Control",
      title: "Institutions remain ",
      titleGold: "in control.",
      sub: "Underwriting, borrower relationships, servicing, and collections remain with the lender.",
      visual: {
        lenderTitle: "Inside lender control",
        lenderItems: [
          "Underwriting",
          "Borrower relationship",
          "Servicing",
          "Collections",
          "Compliance responsibility",
        ],
        auroraTitle: "Aurora support layer",
        auroraItems: [
          "Structured capital access",
          "Participation coordination",
          "Reporting infrastructure",
          "Policy controls",
        ],
        divider: "Boundary",
      },
    },
    privacy: {
      num: "06",
      eyebrow: "Privacy",
      title: "Private borrower records ",
      titleGold: "stay with the lender.",
      sub: "Aurora coordinates structured funding participation without exposing borrower files.",
      visual: {
        leftTitle: "Private Borrower Records",
        leftEyebrow: "Lender custody",
        leftBadge: "Maintained securely by the lending institution",
        leftItems: [
          "Borrower full name",
          "National ID number",
          "Business registration",
          "Contact details",
          "Address",
          "Employment / business information",
          "Signed loan agreement",
          "Supporting financial records",
          "Internal credit assessment",
          "Compliance review records",
        ],
        connectorTitle: "Verification converted into proof references",
        connectorCopy: "Verification can be confirmed without exposing raw borrower documents.",
        rightTitle: "Digital Funding Participation Record",
        rightEyebrow: "Aurora · Ledger entry",
        rightRecord: [
          { label: "Transaction ID", value: "TX-2026-AUR-00481" },
          { label: "Funding amount", value: "USD 250,000" },
          { label: "Duration", value: "180 days" },
          { label: "Repayment schedule", value: "Monthly · 6 installments" },
          { label: "Verification proof", value: "vfp:a1b2···9c4d" },
          { label: "Agreement proof", value: "agp:c3d4···7e8f" },
          { label: "Institution authorization", value: "Bank · Approved" },
          { label: "Participation conditions", value: "Tier-1 eligible" },
          { label: "Status", value: "Active" },
          { label: "Metadata hash", value: "0x8f3c···d92a" },
        ],
        validationTitle: "Proof validation",
        validation: [
          { label: "Verification", value: "Confirmed" },
          { label: "Agreement", value: "Confirmed" },
          { label: "Policy status", value: "Compliant" },
          { label: "Privacy mode", value: "Protected" },
        ],
        stateLabel: "Transaction state",
        states: ["Created", "Verified", "Funded", "Active"],
        activeState: 3,
        statementTitle: "No borrower personal documents are publicly stored.",
        statementSub: "Only structured participation records and verification references are digitally coordinated.",
        pillars: [
          { title: "Privacy by design", copy: "Institution-controlled." },
          { title: "Verification confirmation", copy: "Proofs without source files." },
          { title: "Auditability", copy: "Records support review." },
          { title: "Transaction integrity", copy: "Consistency and accountability." },
          { title: "Compliance", copy: "Built for institutional governance." },
        ],
        closing: "Borrower information stays with the lender. Aurora coordinates funding participation around it.",
      },
    },
    trust: {
      num: "07",
      eyebrow: "Trust",
      title: "Built for ",
      titleGold: "institutional trust.",
      sub: "Verification, auditability, policy controls, and structured governance.",
      pillars: [
        { title: "Verification", copy: "Defined processes confirm participants and opportunities." },
        { title: "Auditability", copy: "Flows are recorded and reviewable." },
        { title: "Policy Controls", copy: "Eligibility and reporting rules are configurable." },
        { title: "Structured Governance", copy: "Defined responsibilities and oversight." },
      ],
    },
    tech: {
      num: "08",
      eyebrow: "Infrastructure",
      title: "Modern digital ",
      titleGold: "financial infrastructure.",
      sub: "Secure digital rails operating behind the scenes — not a borrower-facing crypto product.",
      visual: {
        frontTitle: "Front stage",
        frontItems: [
          { label: "Local lender", copy: "Regulated, customer-facing." },
          { label: "Borrower experience", copy: "Familiar institution. No crypto." },
          { label: "Local-currency loan", copy: "Originated and serviced locally." },
        ],
        backTitle: "Back stage",
        backItems: [
          { label: "Structured participation", copy: "Packaged and coordinated." },
          { label: "Compliance controls", copy: "Rules enforced pre-participation." },
          { label: "Digital coordination", copy: "Modern rails move capital." },
          { label: "Reporting rails", copy: "Standardised reporting." },
        ],
        separator: "Institution-led front · capital rails behind",
      },
    },
    cta: {
      eyebrow: "Get in touch",
      title: "Toward broader ",
      titleGold: "capital access.",
      sub: "A repeatable operating model for productive lending participation.",
      ctaPrimary: "Partner with Aurora",
      ctaSecondary: "Start a conversation",
    },
    footer: {
      tagline: "Capital access infrastructure for productive lending institutions.",
      builtBy: "Built by",
      links: {
        problem: "The opportunity",
        ecosystem: "Ecosystem",
        how: "How it works",
        trust: "Trust",
        contact: "Contact",
      },
      legal:
        "Aurora is infrastructure for regulated lenders — not a bank or deposit-taking institution. Borrowers do not interact with crypto.",
    },
  },

  am: {
    nav: {
      problem: "እድሉ",
      speed: "ለምን ፍጥነት",
      ecosystem: "ኢኮሲስተም",
      how: "እንዴት ይሰራል",
      control: "ቁጥጥር",
      trust: "እምነት",
      partner: "ከማለዳ ጋር ይተባበሩ",
    },
    hero: {
      eyebrow: "ማለዳ · ኢትዮጵያ",
      headline: "ለምርታማ ብድር\nዓለም አቀፍ ዲጂታል ካፒታል መዳረሻ።",
      sub: "ለብድር ተቋማት የተዋቀረ የካፒታል መዳረሻ።",
      ctaPrimary: "ከማለዳ ጋር ይተባበሩ",
      ctaSecondary: "እንዴት እንደሚሰራ ይመልከቱ",
      chips: [
        "ተቋማት ብድር ሰጪ ሆነው ይቆያሉ",
        "ፈጣን የካፒታል መዳረሻ",
        "የተዋቀረ ተሳትፎ",
        "ኮምፕላያንስን የሚያገናዝብ መሠረተ ልማት",
      ],
    },
    problem: {
      num: "01",
      eyebrow: "እድሉ",
      title: "ዓለም አቀፍ ካፒታል አለ። ",
      titleGold: "ምርታማ ብድር ተቋማት ግን እገዳዎች ያጋጥማቸዋል።",
      sub: "ማለዳ ምርታማ ብድር ተቋማትን ከተዋቀረ ዓለም አቀፍ የካፒታል ተሳትፎ ጋር ያገናኛል።",
      split: {
        leftEyebrow: "የአካባቢ ምርታማ ብድር ተቋማት",
        leftTitle: "ብድር ማመንጨት፣ መገምገም፣ ማስተናገድ",
        leftChips: ["ባንኮች", "ማይክሮ ፋይናንስ", "የተፈቀዱ ብድር ተቋማት"],
        middleLabel: "ማለዳ መሠረተ ልማት",
        rightEyebrow: "ዓለም አቀፍ ዲጂታል ካፒታል",
        rightTitle: "የተዋቀረ ተሳትፎ",
        rightChips: ["DFIs", "ተቋማዊ ካፒታል", "የካፒታል አጋሮች"],
      },
    },
    speed: {
      num: "02",
      eyebrow: "ፍጥነት ለምን ያስፈልጋል",
      title: "አጭር ጊዜ የሚወስዱ ብድሮች ",
      titleGold: "በቀስ የሚሄዱ የፋሲሊቲ ድርድሮች ላይ መመስረት የለባቸውም።",
      visual: {
        slowEyebrow: "የተለመደ መንገድ",
        slowLabel: "የሁለትዮሽ የፋሲሊቲ ድርድር",
        slowSteps: ["የውል ሰነድ", "ዲሊጀንስ", "የህግ ሰነድ", "ስርጭት"],
        fastEyebrow: "የማለዳ መንገድ",
        fastLabel: "የተዋቀረ የተሳትፎ ፍሰት",
        fastSteps: ["እድል", "ተሳትፎ", "ካፒታል", "ብድር መስጠት ይቀጥላል"],
        footnote: "ተደጋጋሚ መንገዶች የአንድ ጊዜ የፋሲሊቲ ሂደቶችን ይተካሉ — የሚገመግመው ወይም የሚያስተዳድረው ግን አይቀየርም።",
      },
    },
    ecosystem: {
      num: "03",
      eyebrow: "ኢኮሲስተም",
      title: "ፌርዌይ ብድር ተቋማትን ",
      titleGold: "ከዲጂታል ካፒታል መሠረተ ልማት ጋር ያገናኛል።",
      sub: "ብድር ተቋማት ብድር መስጠታቸውን ይቀጥላሉ። ፌርዌይ የካፒታል መዳረሻ መሠረተ ልማትን ይሰጣል።",
      map: {
        capital:   { label: "የካፒታል አጋሮች",   copy: "በተዋቀሩ ተቋማዊ መንገዶች ምርታማ ብድር ላይ ይሳተፋሉ።" },
        aurora:    { label: "ፌርዌይ / ማለዳ",   copy: "የተዋቀረ የካፒታል መዳረሻ፣ ኮምፕላያንስን የሚያገናዝብ መሠረተ ልማት እና የማቀናበሪያ መንገዶች።" },
        lender:    { label: "ብድር ተቋማት",     copy: "በአካባቢ ብድር ያመነጫሉ፣ ይገመግማሉ፣ ያስተናግዳሉ እና ይሰበስባሉ። ዋናው ኦፕሬሽናል ተዋናይ።" },
        borrowers: { label: "ተበዳሪዎች",       copy: "በተፈቀዱ የአካባቢ ብድር ተቋማት በኩል በአካባቢ ገንዘብ ብድር ይቀበላሉ።" },
        public:    { label: "ሕዝባዊ ባለድርሻዎች", copy: "ቁጥጥር ይሰጣሉ እና የፋይናንስ ተደራሽነትን፣ የSME እድገትን እና የስራ ፈጠራን ይደግፋሉ።" },
        hint: "ሚናውን ለመመልከት በማንኛውም ኖድ ላይ ይጠቁሙ",
        flowLabel: "የካፒታል ፍሰት",
        oversightLabel: "ቁጥጥር እና ድጋፍ",
      },
    },
    how: {
      num: "04",
      eyebrow: "እንዴት ይሰራል",
      title: "አራት ደረጃዎች። ",
      titleGold: "ተቋማት ቁጥጥርን ይይዛሉ።",
      steps: [
        { title: "ብድር ተቋሙ ያጸድቃል", copy: "" },
        { title: "የተዋቀረ የተሳትፎ ጥያቄ", copy: "" },
        { title: "ብቁ ካፒታል ይሳተፋል", copy: "" },
        { title: "የአካባቢ ብድር ይቀጥላል", copy: "" },
      ],
      footer: "ካፒታል ይንቀሳቀሳል። ግንኙነቱ ይቆያል።",
    },
    control: {
      num: "05",
      eyebrow: "ቁጥጥር",
      title: "ተቋማት ",
      titleGold: "ቁጥጥርን ይይዛሉ።",
      sub: "የብድር ግምገማ፣ የተበዳሪ ግንኙነት፣ አገልግሎት እና ክፍያ መሰብሰብ በብድር ተቋሙ ይቆያል።",
      visual: {
        lenderTitle: "በብድር ተቋሙ ቁጥጥር ውስጥ",
        lenderItems: [
          "የብድር ግምገማ",
          "የተበዳሪ ግንኙነት",
          "አገልግሎት",
          "ክፍያ መሰብሰብ",
          "የኮምፕላያንስ ኃላፊነት",
        ],
        auroraTitle: "የማለዳ ድጋፍ ሽፋን",
        auroraItems: [
          "የተዋቀረ የካፒታል መዳረሻ",
          "የተሳትፎ ማቀናበር",
          "የሪፖርት መሠረተ ልማት",
          "የፖሊሲ ቁጥጥሮች",
        ],
        divider: "ድንበር",
      },
    },
    privacy: {
      num: "06",
      eyebrow: "ግላዊነት",
      title: "የተበዳሪ የግል መረጃ ",
      titleGold: "በብድር ተቋሙ ይቆያል።",
      sub: "ማለዳ የተዋቀረ የፈንድ ተሳትፎን ያቀናብራል፤ የተበዳሪ ፋይሎችን ግን አያጋልጥም።",
      visual: {
        leftTitle: "የተበዳሪ የግል መዝገቦች",
        leftEyebrow: "በብድር ተቋሙ ይያዛል",
        leftBadge: "በብድር ተቋሙ በደህንነት ይያዛል",
        leftItems: [
          "የተበዳሪ ሙሉ ስም",
          "ብሔራዊ መታወቂያ ቁጥር",
          "የንግድ ምዝገባ",
          "የመገናኛ መረጃ",
          "አድራሻ",
          "የስራ / የንግድ መረጃ",
          "የተፈረመ የብድር ስምምነት",
          "ደጋፊ የፋይናንስ መዝገቦች",
          "ውስጣዊ የብድር ግምገማ",
          "የኮምፕላያንስ ግምገማ መዝገቦች",
        ],
        connectorTitle: "ማረጋገጫ ወደ የማስረጃ ማጣቀሻዎች ይቀየራል",
        connectorCopy: "ማረጋገጫ የተበዳሪ ጥሬ ሰነዶችን ሳያጋልጥ ሊረጋገጥ ይችላል።",
        rightTitle: "የዲጂታል ፈንድ ተሳትፎ መዝገብ",
        rightEyebrow: "ማለዳ · የመዝገብ ግቤት",
        rightRecord: [
          { label: "የግብይት መለያ", value: "TX-2026-AUR-00481" },
          { label: "የፈንድ መጠን", value: "USD 250,000" },
          { label: "ቆይታ", value: "180 ቀናት" },
          { label: "የክፍያ መርሐግብር", value: "ወርሃዊ · 6 ክፍያዎች" },
          { label: "የማረጋገጫ ማስረጃ", value: "vfp:a1b2···9c4d" },
          { label: "የስምምነት ማስረጃ", value: "agp:c3d4···7e8f" },
          { label: "የተቋም ፈቃድ", value: "ባንክ · ጸድቋል" },
          { label: "የተሳትፎ ሁኔታዎች", value: "ደረጃ-1 ብቁ" },
          { label: "ሁኔታ", value: "ንቁ" },
          { label: "ሜታዳታ ሃሽ", value: "0x8f3c···d92a" },
        ],
        validationTitle: "የማስረጃ ማረጋገጫ",
        validation: [
          { label: "ማረጋገጫ", value: "ተረጋግጧል" },
          { label: "ስምምነት", value: "ተረጋግጧል" },
          { label: "የፖሊሲ ሁኔታ", value: "ኮምፕላያንት" },
          { label: "የግላዊነት ሁነታ", value: "የተጠበቀ" },
        ],
        stateLabel: "የግብይት ሁኔታ",
        states: ["ተፈጥሯል", "ተረጋግጧል", "ተደግፏል", "ንቁ"],
        activeState: 3,
        statementTitle: "የተበዳሪ የግል ሰነዶች በሕዝብ ፊት አይቀመጡም።",
        statementSub: "የተዋቀሩ የተሳትፎ መዝገቦች እና የማረጋገጫ ማጣቀሻዎች ብቻ በዲጂታል ይቀናበራሉ።",
        pillars: [
          { title: "በንድፍ ግላዊነት", copy: "በተቋም ቁጥጥር ስር።" },
          { title: "የማረጋገጫ ማረጋገጥ", copy: "ሰነዶችን ሳያጋልጡ።" },
          { title: "ለኦዲት የሚመች", copy: "መዝገቦች ለግምገማ።" },
          { title: "የመዝገብ ታማኝነት", copy: "ወጥነት እና ኃላፊነት።" },
          { title: "ኮምፕላያንስ", copy: "ለተቋማዊ አስተዳደር።" },
        ],
        closing: "የተበዳሪ መረጃ በብድር ተቋሙ ይቆያል። ማለዳ ዙሪያውን የፈንድ ተሳትፎን ያቀናብራል።",
      },
    },
    trust: {
      num: "07",
      eyebrow: "እምነት",
      title: "ለተቋማዊ ",
      titleGold: "መተማመን የተገነባ።",
      sub: "ማረጋገጫ፣ ኦዲት መደረግ የሚችል አሰራር፣ የፖሊሲ ቁጥጥር እና የተዋቀረ አስተዳደር።",
      pillars: [
        { title: "ማረጋገጫ", copy: "ተሳታፊዎች እና እድሎች ይረጋገጣሉ።" },
        { title: "ኦዲት የሚደረግ", copy: "ፍሰቶች ይመዘገባሉ እና ይገመገማሉ።" },
        { title: "የፖሊሲ ቁጥጥሮች", copy: "ህጎች ሊዋቀሩ ይችላሉ።" },
        { title: "የተዋቀረ አስተዳደር", copy: "የተወሰኑ ኃላፊነቶች እና ቁጥጥር።" },
      ],
    },
    tech: {
      num: "08",
      eyebrow: "መሠረተ ልማት",
      title: "ዘመናዊ ዲጂታል ",
      titleGold: "የፋይናንስ መሠረተ ልማት።",
      sub: "ከጀርባ የሚሰሩ ደህንነታቸው የተጠበቀ ዲጂታል መንገዶች — ለተበዳሪዎች የሚታይ የክሪፕቶ ምርት አይደለም።",
      visual: {
        frontTitle: "የፊት መድረክ",
        frontItems: [
          { label: "የአካባቢ ብድር ተቋም", copy: "የተፈቀደ፣ የደንበኛ ግንኙነት ያለው።" },
          { label: "የተበዳሪ ተሞክሮ", copy: "የታወቀ ተቋም። ክሪፕቶ የለም።" },
          { label: "በአካባቢ ገንዘብ ብድር", copy: "በአካባቢ ይመነጫል እና ይስተናገዳል።" },
        ],
        backTitle: "የጀርባ መድረክ",
        backItems: [
          { label: "የተዋቀረ ተሳትፎ", copy: "ይዋቀራል እና ይቀናበራል።" },
          { label: "የኮምፕላያንስ ቁጥጥሮች", copy: "ህጎች ቅድሚያ ይተገበራሉ።" },
          { label: "የዲጂታል ማቀናበር", copy: "ዘመናዊ መንገዶች።" },
          { label: "የሪፖርት መንገዶች", copy: "መደበኛ ሪፖርት።" },
        ],
        separator: "በተቋም መሪነት የፊት · ከጀርባ የካፒታል መሠረተ ልማት",
      },
    },
    cta: {
      eyebrow: "እኛን ያግኙን",
      title: "ወደ ሰፊ ",
      titleGold: "የካፒታል መዳረሻ።",
      sub: "ለምርታማ ብድር ተሳትፎ ተደጋጋሚ የሆነ የአሰራር ሞዴል።",
      ctaPrimary: "ከማለዳ ጋር ይተባበሩ",
      ctaSecondary: "ውይይት ይጀምሩ",
    },
    footer: {
      tagline: "ለምርታማ ብድር ተቋማት የካፒታል መዳረሻ መሠረተ ልማት።",
      builtBy: "የተገነባው በ",
      links: {
        problem: "እድሉ",
        ecosystem: "ኢኮሲስተም",
        how: "እንዴት ይሰራል",
        trust: "እምነት",
        contact: "ግንኙነት",
      },
      legal:
        "ማለዳ ለተፈቀዱ ብድር ተቋማት መሠረተ ልማት ነው — ባንክ ወይም ተቀማጭ የሚቀበል ተቋም አይደለም። ተበዳሪዎች ከክሪፕቶ ጋር አይገናኙም።",
    },
  },
};

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
      <Hero lang={lang} setLang={setLang} t={t} />
      <ProblemSection t={t} />
      <SpeedSection t={t} />
      <EcosystemSection t={t} />
      <HowItWorksSection t={t} />
      <ControlSection t={t} />
      <PrivacySection t={t} />
      <TrustSection t={t} />
      <TechnologySection t={t} />
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
        <div className="max-w-[860px]">
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
            key={lang}
            text={t.hero.headline}
            className={`mt-7 text-[36px] font-medium leading-[1.06] tracking-[-0.025em] sm:text-[52px] ${
              lang === "am" ? "lg:text-[60px]" : "lg:text-[68px]"
            }`}
          />

          <FadeIn delay={1100} duration={700} className="mt-8 max-w-[60ch]">
            <p
              className="text-[16px] font-light leading-[1.55] tracking-tight sm:text-[18px]"
              style={{ color: IVORY }}
            >
              {t.hero.sub}
            </p>
          </FadeIn>

          <FadeIn delay={1500} duration={700} className="mt-10">
            <div className="flex flex-wrap items-center gap-6">
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 cursor-pointer items-center justify-center gap-2 px-6 text-[13px] font-semibold tracking-tight transition active:scale-[0.98] hover:brightness-110"
                style={{ background: GOLD, color: BG }}
              >
                {t.hero.ctaPrimary}
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.7} />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex h-12 cursor-pointer items-center gap-2 text-[13px] font-medium transition"
                style={{ color: IVORY, borderBottom: `1px solid ${IVORY}`, paddingBottom: 2 }}
              >
                {t.hero.ctaSecondary}
                <ArrowRight className="h-4 w-4" strokeWidth={1.7} />
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={1750} duration={700} className="mt-12 max-w-[820px]">
            <div className="grid grid-cols-2 gap-x-5 gap-y-3 sm:grid-cols-4">
              {t.hero.chips.map((c) => (
                <span
                  key={c}
                  className="border-t pt-3 text-[11.5px] font-medium leading-snug"
                  style={{ borderColor: GOLD, color: IVORY }}
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
    { href: "#speed", label: t.nav.speed },
    { href: "#ecosystem", label: t.nav.ecosystem },
    { href: "#how-it-works", label: t.nav.how },
    { href: "#control", label: t.nav.control },
    { href: "#trust", label: t.nav.trust },
  ];

  return (
    <header className="relative z-30 pt-6">
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10 lg:px-14">
        <div
          className="flex items-center justify-between border-b py-4"
          style={{ borderColor: "rgba(242,237,223,0.16)" }}
        >
          <Link
            href="#top"
            className="flex items-center gap-3"
            aria-label={lang === "am" ? "ማለዳ home" : "Aurora home"}
            style={{ color: IVORY }}
          >
            <span
              className={`font-semibold tracking-tight ${lang === "am" ? "text-2xl" : "text-xl"}`}
              style={
                lang === "am"
                  ? { fontFamily: "var(--font-maleda-am), 'Noto Sans Ethiopic', sans-serif" }
                  : undefined
              }
            >
              {BRAND[lang]}
            </span>
            <span
              className="hidden text-[10px] font-medium uppercase tracking-[0.22em] sm:inline"
              style={{ color: IVORY_MUTED }}
            >
              by Fairway
            </span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
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
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 text-[12px] font-medium uppercase tracking-[0.16em] transition sm:inline-flex"
              style={{ color: GOLD, borderBottom: `1px solid ${GOLD}`, paddingBottom: 2 }}
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
/* Section primitive                                                       */
/* ----------------------------------------------------------------------- */

function Section({
  id,
  num,
  eyebrow,
  title,
  titleGold,
  sub,
  intro,
  children,
  background,
}: {
  id: string;
  num: string;
  eyebrow: string;
  title: string;
  titleGold: string;
  sub?: string;
  intro?: React.ReactNode;
  children?: React.ReactNode;
  background?: string;
}) {
  return (
    <section
      id={id}
      className="relative px-6 py-28 md:px-10 lg:px-14 lg:py-36"
      style={{ borderTop: `1px solid ${DIVIDER}`, background: background ?? "transparent" }}
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
              className="text-[28px] font-medium leading-[1.06] tracking-[-0.025em] sm:text-[40px] lg:text-[48px]"
              style={{ color: IVORY, textWrap: "balance" }}
            >
              {title}
              <span style={{ color: GOLD }}>{titleGold}</span>
            </h2>
            {sub && (
              <p
                className="mt-5 text-[16px] font-light leading-[1.55] tracking-tight"
                style={{ color: IVORY, maxWidth: "60ch" }}
              >
                {sub}
              </p>
            )}
            {intro && (
              <div
                className="mt-6 text-[14.5px] font-light leading-[1.75]"
                style={{ color: IVORY_DIM, maxWidth: "62ch" }}
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
/* Problem                                                                  */
/* ----------------------------------------------------------------------- */

function ProblemSection({ t }: { t: T }) {
  return (
    <Section
      id="problem"
      num={t.problem.num}
      eyebrow={t.problem.eyebrow}
      title={t.problem.title}
      titleGold={t.problem.titleGold}
      sub={t.problem.sub}
    >
      <ProblemSplitVisual labels={t.problem.split} />
    </Section>
  );
}

/* ----------------------------------------------------------------------- */
/* Speed                                                                    */
/* ----------------------------------------------------------------------- */

function SpeedSection({ t }: { t: T }) {
  return (
    <Section
      id="speed"
      num={t.speed.num}
      eyebrow={t.speed.eyebrow}
      title={t.speed.title}
      titleGold={t.speed.titleGold}
    >
      <SpeedComparisonVisual labels={t.speed.visual} />
    </Section>
  );
}

/* ----------------------------------------------------------------------- */
/* Ecosystem                                                                */
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
    >
      <LenderEcosystemMap labels={t.ecosystem.map} />
    </Section>
  );
}

/* ----------------------------------------------------------------------- */
/* How It Works                                                             */
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
      <ParticipationFlow steps={t.how.steps} footer={t.how.footer} />
    </Section>
  );
}

/* ----------------------------------------------------------------------- */
/* Institutions remain in control                                           */
/* ----------------------------------------------------------------------- */

function ControlSection({ t }: { t: T }) {
  return (
    <Section
      id="control"
      num={t.control.num}
      eyebrow={t.control.eyebrow}
      title={t.control.title}
      titleGold={t.control.titleGold}
      sub={t.control.sub}
    >
      <ControlBoundaryDiagram labels={t.control.visual} />
    </Section>
  );
}

/* ----------------------------------------------------------------------- */
/* Private data stays private                                               */
/* ----------------------------------------------------------------------- */

function PrivacySection({ t }: { t: T }) {
  return (
    <Section
      id="privacy"
      num={t.privacy.num}
      eyebrow={t.privacy.eyebrow}
      title={t.privacy.title}
      titleGold={t.privacy.titleGold}
      sub={t.privacy.sub}
    >
      <PrivateRecordsVisual labels={t.privacy.visual} />
    </Section>
  );
}

/* ----------------------------------------------------------------------- */
/* Trust                                                                    */
/* ----------------------------------------------------------------------- */

function TrustSection({ t }: { t: T }) {
  return (
    <Section
      id="trust"
      num={t.trust.num}
      eyebrow={t.trust.eyebrow}
      title={t.trust.title}
      titleGold={t.trust.titleGold}
      sub={t.trust.sub}
    >
      <InstitutionalTrustFramework pillars={t.trust.pillars} />
    </Section>
  );
}

/* ----------------------------------------------------------------------- */
/* Technology                                                               */
/* ----------------------------------------------------------------------- */

function TechnologySection({ t }: { t: T }) {
  return (
    <Section
      id="tech"
      num={t.tech.num}
      eyebrow={t.tech.eyebrow}
      title={t.tech.title}
      titleGold={t.tech.titleGold}
      sub={t.tech.sub}
    >
      <BehindTheScenesInfra labels={t.tech.visual} />
    </Section>
  );
}

/* ----------------------------------------------------------------------- */
/* Final CTA                                                                */
/* ----------------------------------------------------------------------- */

function FinalCTASection({ t }: { t: T }) {
  return (
    <section
      id="cta"
      className="relative isolate overflow-hidden px-6 py-32 md:px-10 lg:px-14 lg:py-40"
      style={{ borderTop: `1px solid ${DIVIDER}`, background: "#0B1A14" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 30%, rgba(214,168,79,0.14) 0%, transparent 70%)",
        }}
      />
      <InView className="relative mx-auto max-w-[860px] text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em]" style={{ color: GOLD }}>
          {t.cta.eyebrow}
        </p>
        <h2
          className="mt-6 text-[32px] font-medium leading-[1.06] tracking-[-0.025em] sm:text-[46px] lg:text-[56px]"
          style={{ color: IVORY, textWrap: "balance" }}
        >
          {t.cta.title}
          <span style={{ color: GOLD }}>{t.cta.titleGold}</span>
        </h2>
        <p className="mx-auto mt-5 max-w-[58ch] text-[15px] font-light leading-[1.55] tracking-tight" style={{ color: IVORY }}>
          {t.cta.sub}
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 cursor-pointer items-center justify-center gap-2 px-7 text-[13px] font-semibold tracking-tight transition active:scale-[0.98] hover:brightness-110"
            style={{ background: GOLD, color: BG }}
          >
            {t.cta.ctaPrimary}
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.7} />
          </a>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 cursor-pointer items-center gap-2 text-[13px] font-medium transition"
            style={{ color: IVORY, borderBottom: `1px solid ${IVORY}`, paddingBottom: 2 }}
          >
            {t.cta.ctaSecondary}
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.7} />
          </a>
        </div>
      </InView>
    </section>
  );
}

/* ----------------------------------------------------------------------- */
/* Footer                                                                   */
/* ----------------------------------------------------------------------- */

function Footer({ lang, t }: { lang: Lang; t: T }) {
  const footerLinks = [
    { href: "#problem", label: t.footer.links.problem },
    { href: "#ecosystem", label: t.footer.links.ecosystem },
    { href: "#how-it-works", label: t.footer.links.how },
    { href: "#trust", label: t.footer.links.trust },
    { href: CALENDLY, label: t.footer.links.contact, external: true },
  ];

  return (
    <footer
      className="relative z-10 px-6 py-14 md:px-10 lg:px-14"
      style={{ borderTop: `1px solid ${DIVIDER}` }}
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div className="max-w-[520px]">
            <p
              className={`font-semibold tracking-tight ${lang === "am" ? "text-2xl" : "text-xl"}`}
              style={{
                color: IVORY,
                fontFamily:
                  lang === "am"
                    ? "var(--font-maleda-am), 'Noto Sans Ethiopic', sans-serif"
                    : undefined,
              }}
            >
              {BRAND[lang]}
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
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noopener noreferrer" : undefined}
                className="text-[12px] font-medium uppercase tracking-[0.16em] transition-colors duration-200"
                style={{ color: IVORY_DIM }}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <p className="mt-14 text-[11px] font-light leading-relaxed" style={{ color: IVORY_MUTED, maxWidth: "80ch" }}>
          &copy; {new Date().getFullYear()} Fairway. {t.footer.legal}
        </p>
      </div>
    </footer>
  );
}
