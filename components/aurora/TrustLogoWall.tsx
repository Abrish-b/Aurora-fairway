import Image from "next/image";

type LogoEntry = {
  name: string;
  src?: string;
  alt?: string;
  invert?: boolean;
};

type TrustLogoWallProps = {
  eyebrow?: string;
  title?: string;
  copy?: string;
  partners?: LogoEntry[];
  backers?: LogoEntry[];
  partnersLabel?: string;
  backersLabel?: string;
  tone?: "light" | "bone" | "white";
  id?: string;
};

const GOLD = "#C89B3C";
const GRAY_BODY = "#6F6F6F";

const DEFAULT_PARTNERS: LogoEntry[] = [
  { name: "Fairway", src: "/brand/fairway-logo.png", alt: "Fairway" },
  { name: "Sundial", src: "/brand/download.webp", alt: "Sundial" },
  { name: "Cardano", src: "/brand/cardano.png", alt: "Cardano" },
  {
    name: "Midnight",
    src: "/brand/midnight.png",
    alt: "Midnight",
    invert: true,
  },
  { name: "Veridian", src: "/brand/veridian.png", alt: "Veridian" },
  { name: "CIP-113", src: "/brand/cip113-logo.png", alt: "CIP-113" },
  {
    name: "Strike Finance",
    src: "/brand/strike-finance-modified.png",
    alt: "Strike Finance",
  },
  {
    name: "Fluid Tokens",
    src: "/brand/fluid-tokens-modified.png",
    alt: "Fluid Tokens",
  },
];

const DEFAULT_BACKERS: LogoEntry[] = [
  {
    name: "Outlier Ventures",
    src: "/brand/outlier-ventures.webp",
    alt: "Outlier Ventures",
    invert: true,
  },
  { name: "CV Labs", src: "/brand/cv-labs.png", alt: "CV Labs" },
  {
    name: "Cardano Catalyst",
    src: "/brand/cardano-catalyst.png",
    alt: "Cardano Catalyst",
  },
  {
    name: "Business Finland",
    src: "/brand/business-finland.png",
    alt: "Business Finland",
  },
  {
    name: "Midnight Foundation",
    src: "/brand/midnight-foundation.png",
    alt: "Midnight Foundation",
  },
];

export default function TrustLogoWall({
  eyebrow = "Ecosystem",
  title = "Built alongside the right partners.",
  copy = "Aurora and Sundown are developed in collaboration with Cardano-native infrastructure teams and supported by ecosystem programs across Europe.",
  partners = DEFAULT_PARTNERS,
  backers = DEFAULT_BACKERS,
  partnersLabel = "Partners & ecosystem",
  backersLabel = "Backed by · ecosystem support",
  tone = "white",
  id = "trust",
}: TrustLogoWallProps) {
  const bg =
    tone === "bone" ? "#fffdf7" : tone === "light" ? "#fffaf2" : "#ffffff";

  return (
    <section
      id={id}
      className="px-5 py-20 sm:px-8 lg:px-12"
      style={{ background: bg }}
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="max-w-[640px]">
          <p
            className="text-[11px] font-bold uppercase tracking-[0.22em]"
            style={{ color: GOLD }}
          >
            {eyebrow}
          </p>
          <h2 className="mt-3 font-serif text-[30px] font-normal leading-tight text-[#101823] sm:text-[38px]">
            {title}
          </h2>
          {copy && (
            <p
              className="mt-4 text-[14px] leading-7"
              style={{ color: GRAY_BODY }}
            >
              {copy}
            </p>
          )}
        </div>

        {partners.length > 0 && (
          <div className="mt-12">
            <p
              className="text-[10px] font-bold uppercase tracking-[0.24em]"
              style={{ color: GRAY_BODY }}
            >
              {partnersLabel}
            </p>
            <div className="mt-5 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8">
              {partners.map((logo) => (
                <LogoTile key={logo.name} entry={logo} />
              ))}
            </div>
          </div>
        )}

        {backers.length > 0 && (
          <div className="mt-12 rounded-[12px] border border-[#1B384C]/10 bg-white p-6 sm:p-8">
            <p
              className="text-[10px] font-bold uppercase tracking-[0.24em]"
              style={{ color: GRAY_BODY }}
            >
              {backersLabel}
            </p>
            <div className="mt-5 grid grid-cols-2 items-center gap-x-8 gap-y-5 sm:grid-cols-3 lg:grid-cols-5">
              {backers.map((b) => (
                <LogoTile key={b.name} entry={b} muted />
              ))}
            </div>
            <p
              className="mt-6 border-t border-[#1B384C]/10 pt-4 text-[11px] leading-6"
              style={{ color: GRAY_BODY }}
            >
              Logos represent ecosystem programs, accelerators, and grant
              support.
               {/* Inclusion does not imply equity investment unless stated
              elsewhere. */}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function LogoTile({
  entry,
  muted = false,
}: {
  entry: LogoEntry;
  muted?: boolean;
}) {
  if (entry.src) {
    return (
      <div className="flex h-12 items-center justify-center">
        <Image
          src={entry.src}
          alt={entry.alt ?? entry.name}
          width={140}
          height={48}
          className={`h-full w-auto max-w-[140px] object-contain ${
            muted ? "opacity-60" : "opacity-90"
          } transition hover:opacity-100`}
          style={
            entry.invert
              ? { filter: "invert(1) brightness(0.85)" }
              : undefined
          }
        />
      </div>
    );
  }
  return (
    <div className="flex h-12 items-center justify-center">
      <span
        className={`font-serif text-[18px] tracking-[0.01em] ${
          muted ? "text-[#1B384C]/55" : "text-[#1B384C]/80"
        }`}
      >
        {entry.name}
      </span>
    </div>
  );
}
