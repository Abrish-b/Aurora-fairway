import { BadgeCheck, CalendarClock, Eye } from "lucide-react";

const GREEN = "#1E4737";
const GOLD = "#B8862B";
const INK = "#17231D";
const MUTED = "#5A6560";
const LINE = "rgba(30,71,55,0.14)";
const AMBER = "#9A6B14";
const AMBER_TINT = "rgba(154,107,20,0.10)";
const GREEN_TINT = "rgba(30,71,55,0.08)";

/**
 * Truthful, clearly-labelled illustration of the Aurora SACCO workspace:
 * credential status, liquidity requests in review/disbursed states, and a
 * repayment schedule. No vanity analytics, no invented totals.
 */
export default function WorkspacePreview() {
  return (
    <div
      className="overflow-hidden rounded-[14px] border bg-white shadow-[0_24px_70px_rgba(23,35,29,0.10)]"
      style={{ borderColor: LINE }}
    >
      {/* window bar */}
      <div
        className="flex items-center justify-between gap-3 border-b px-4 py-3"
        style={{ borderColor: LINE, background: "#FDFBF4" }}
      >
        <p
          className="font-mono text-[11px] font-medium tracking-[0.08em]"
          style={{ color: INK }}
        >
          AURORA · SACCO WORKSPACE
        </p>
        <span
          className="rounded-full border px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em]"
          style={{ borderColor: LINE, color: MUTED }}
        >
          Illustrative interface
        </span>
      </div>

      <div className="flex flex-col gap-4 p-4 sm:p-5">
        {/* credential status */}
        <div
          className="flex items-center gap-3 rounded-[10px] border px-4 py-3"
          style={{ borderColor: "rgba(30,71,55,0.24)", background: GREEN_TINT }}
        >
          <BadgeCheck className="h-5 w-5 flex-none" strokeWidth={1.7} style={{ color: GREEN }} />
          <div>
            <p className="text-[13px] font-semibold" style={{ color: INK }}>
              Institution verified
            </p>
            <p className="font-mono text-[11px]" style={{ color: MUTED }}>
              Credential active · issued by Fairway
            </p>
          </div>
        </div>

        {/* liquidity requests */}
        <div className="rounded-[10px] border" style={{ borderColor: LINE }}>
          <p
            className="border-b px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em]"
            style={{ borderColor: LINE, color: MUTED }}
          >
            Liquidity requests
          </p>
          <div
            className="flex items-center justify-between gap-3 border-b px-4 py-3"
            style={{ borderColor: LINE }}
          >
            <div>
              <p className="font-mono text-[12px] font-medium" style={{ color: INK }}>
                LR-0042 · SME working capital
              </p>
              <p className="text-[12px]" style={{ color: MUTED }}>
                Submitted by your credit committee
              </p>
            </div>
            <span
              className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold"
              style={{
                color: AMBER,
                background: AMBER_TINT,
                borderColor: "rgba(154,107,20,0.28)",
              }}
            >
              <Eye className="h-3.5 w-3.5" strokeWidth={1.8} />
              Under Fairway review
            </span>
          </div>
          <div className="flex items-center justify-between gap-3 px-4 py-3">
            <div>
              <p className="font-mono text-[12px] font-medium" style={{ color: INK }}>
                LR-0038 · Member trade finance
              </p>
              <p className="text-[12px]" style={{ color: MUTED }}>
                Settlement recorded on-chain
              </p>
            </div>
            <span
              className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold"
              style={{
                color: GREEN,
                background: GREEN_TINT,
                borderColor: "rgba(30,71,55,0.28)",
              }}
            >
              <BadgeCheck className="h-3.5 w-3.5" strokeWidth={1.8} />
              Disbursed
            </span>
          </div>
        </div>

        {/* repayment schedule */}
        <div className="rounded-[10px] border px-4 py-3" style={{ borderColor: LINE }}>
          <div className="flex items-center justify-between gap-3">
            <p
              className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em]"
              style={{ color: MUTED }}
            >
              <CalendarClock className="h-4 w-4" strokeWidth={1.7} style={{ color: GOLD }} />
              Repayment schedule · LR-0038
            </p>
            <p className="font-mono text-[11px]" style={{ color: MUTED }}>
              3 / 6 reconciled
            </p>
          </div>
          <div className="mt-3 flex gap-1.5" aria-hidden>
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <span
                key={n}
                className="h-1.5 flex-1 rounded-full"
                style={{ background: n <= 3 ? GREEN : "rgba(30,71,55,0.16)" }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
