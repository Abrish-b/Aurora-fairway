import type { ReactNode } from "react";
import { Plus } from "lucide-react";

export type AccordionFAQItem = {
  q: string;
  a: ReactNode;
};

type AccordionFAQProps = {
  items: AccordionFAQItem[];
  eyebrow?: string;
  title?: ReactNode;
  copy?: ReactNode;
  layout?: "split" | "stacked";
  tone?: "light" | "bone";
  id?: string;
};

const GOLD = "#C89B3C";
const GRAY_BODY = "#6F6F6F";

export default function AccordionFAQ({
  items,
  eyebrow = "FAQ",
  title,
  copy,
  layout = "split",
  tone = "light",
  id = "faq",
}: AccordionFAQProps) {
  const bg = tone === "bone" ? "#fffdf7" : "#ffffff";

  const list = (
    <div className="overflow-hidden rounded-[10px] border border-[#1B384C]/14 bg-white shadow-[0_18px_60px_rgba(33,42,50,0.06)]">
      {items.map((item, i) => (
        <details
          key={`${i}-${typeof item.q === "string" ? item.q : i}`}
          className="group border-b border-[#1B384C]/10 last:border-b-0 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer items-center justify-between gap-6 px-5 py-5 text-left text-[16px] font-semibold text-[#101823] transition hover:text-[#d99a2b]">
            <span>{item.q}</span>
            <Plus
              className="h-5 w-5 flex-none transition duration-200 group-open:rotate-45"
              strokeWidth={1.7}
              style={{ color: GOLD }}
            />
          </summary>
          <div
            className="px-5 pb-6 pr-10 text-[14px] leading-7"
            style={{ color: GRAY_BODY }}
          >
            {item.a}
          </div>
        </details>
      ))}
    </div>
  );

  return (
    <section
      id={id}
      className="px-5 py-24 sm:px-8 lg:px-12"
      style={{ background: bg }}
    >
      <div className="mx-auto max-w-[1180px]">
        {layout === "split" ? (
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr]">
            <div>
              <p
                className="text-[11px] font-bold uppercase tracking-[0.22em]"
                style={{ color: GOLD }}
              >
                {eyebrow}
              </p>
              {title && (
                <h2 className="mt-3 font-serif text-[34px] font-normal leading-tight text-[#101823] sm:text-[40px]">
                  {title}
                </h2>
              )}
              {copy && (
                <p
                  className="mt-4 max-w-[420px] text-[14px] leading-7"
                  style={{ color: GRAY_BODY }}
                >
                  {copy}
                </p>
              )}
            </div>
            {list}
          </div>
        ) : (
          <>
            <div className="mb-10 max-w-[640px]">
              <p
                className="text-[11px] font-bold uppercase tracking-[0.22em]"
                style={{ color: GOLD }}
              >
                {eyebrow}
              </p>
              {title && (
                <h2 className="mt-3 font-serif text-[34px] font-normal leading-tight text-[#101823] sm:text-[40px]">
                  {title}
                </h2>
              )}
              {copy && (
                <p
                  className="mt-4 text-[14px] leading-7"
                  style={{ color: GRAY_BODY }}
                >
                  {copy}
                </p>
              )}
            </div>
            {list}
          </>
        )}
      </div>
    </section>
  );
}
