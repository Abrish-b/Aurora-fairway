const GREEN = "#1E4737";
const GOLD = "#B8862B";
const INK = "#17231D";
const MUTED = "#5A6560";
const LINE = "rgba(30,71,55,0.22)";

type Node = {
  title: string;
  sub: string;
};

const NODES: Node[] = [
  { title: "Fairway", sub: "Reviews & approves liquidity" },
  { title: "Aurora rail", sub: "Controlled USDM settlement" },
  { title: "Your SACCO", sub: "Lends in your own process" },
  { title: "Members & SMEs", sub: "Local businesses you know" },
];

/**
 * The liquidity journey — Aurora's one-diagram explanation.
 * Funds travel Fairway → Aurora rail → SACCO → members; repayments
 * return through the SACCO and are reconciled in the workspace.
 */
export default function LiquidityJourney() {
  return (
    <figure className="m-0">
      {/* Desktop / tablet: horizontal SVG journey */}
      <div
        className="hidden rounded-[12px] border bg-white p-4 sm:block sm:p-6"
        style={{ borderColor: LINE }}
      >
        <svg
          viewBox="0 0 1040 320"
          role="img"
          aria-label="Diagram: approved liquidity moves from Fairway through the Aurora rail to your SACCO, which lends to members and SMEs. Repayments return through the SACCO and are reconciled in Aurora."
          className="h-auto w-full"
        >
          {/* forward flow line */}
          <line
            x1="238"
            y1="128"
            x2="272"
            y2="128"
            stroke={GOLD}
            strokeWidth="1.6"
            className="sundown-dash-travel"
          />
          <line
            x1="498"
            y1="128"
            x2="532"
            y2="128"
            stroke={GOLD}
            strokeWidth="1.6"
            className="sundown-dash-travel"
          />
          <line
            x1="758"
            y1="128"
            x2="792"
            y2="128"
            stroke={GOLD}
            strokeWidth="1.6"
            className="sundown-dash-travel"
          />
          {/* arrowheads */}
          {[272, 532, 792].map((x) => (
            <path
              key={x}
              d={`M ${x - 7} 123 L ${x} 128 L ${x - 7} 133`}
              fill="none"
              stroke={GOLD}
              strokeWidth="1.6"
            />
          ))}

          {/* nodes */}
          {NODES.map((n, i) => {
            const x = 18 + i * 260;
            const isSacco = i === 2;
            return (
              <g key={n.title}>
                <rect
                  x={x}
                  y={86}
                  width={220}
                  height={84}
                  rx={10}
                  fill={isSacco ? GREEN : "#FDFBF4"}
                  stroke={isSacco ? GREEN : LINE}
                  strokeWidth="1.4"
                />
                <text
                  x={x + 110}
                  y={122}
                  textAnchor="middle"
                  fontSize="17"
                  fontWeight="600"
                  fill={isSacco ? "#F6F1E4" : INK}
                  style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
                >
                  {n.title}
                </text>
                <text
                  x={x + 110}
                  y={146}
                  textAnchor="middle"
                  fontSize="12.5"
                  fill={isSacco ? "rgba(246,241,228,0.75)" : MUTED}
                  style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
                >
                  {n.sub}
                </text>
                <text
                  x={x + 110}
                  y={72}
                  textAnchor="middle"
                  fontSize="11"
                  letterSpacing="2"
                  fill={GOLD}
                  style={{ fontFamily: "var(--font-geist-mono), monospace" }}
                >
                  {`0${i + 1}`}
                </text>
              </g>
            );
          })}

          {/* repayment return arc */}
          <path
            d="M 908 170 C 908 240, 820 252, 700 252 L 360 252 C 240 252, 148 240, 148 178"
            fill="none"
            stroke={GREEN}
            strokeWidth="1.4"
            strokeDasharray="5 7"
            opacity="0.55"
          />
          <path
            d="M 143 187 L 148 176 L 154 187"
            fill="none"
            stroke={GREEN}
            strokeWidth="1.4"
            opacity="0.7"
          />
          <text
            x="520"
            y="286"
            textAnchor="middle"
            fontSize="12.5"
            fill={MUTED}
            style={{ fontFamily: "var(--font-geist-mono), monospace" }}
          >
            Repayments return through your SACCO · reconciled in the Aurora workspace
          </text>
        </svg>
      </div>

      {/* Mobile: stacked journey */}
      <ol
        className="flex flex-col gap-0 rounded-[12px] border bg-white p-5 sm:hidden"
        style={{ borderColor: LINE }}
      >
        {NODES.map((n, i) => {
          const isSacco = i === 2;
          return (
            <li key={n.title} className="relative pb-5 pl-8 last:pb-0">
              {i < NODES.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-[9px] top-6 h-full w-px"
                  style={{ background: LINE }}
                />
              )}
              <span
                aria-hidden
                className="absolute left-0 top-1 flex h-[19px] w-[19px] items-center justify-center rounded-full text-[9px] font-bold"
                style={{
                  background: isSacco ? GREEN : "#FDFBF4",
                  border: `1px solid ${isSacco ? GREEN : LINE}`,
                  color: isSacco ? "#F6F1E4" : GOLD,
                }}
              >
                {i + 1}
              </span>
              <p className="text-[15px] font-semibold" style={{ color: INK }}>
                {n.title}
              </p>
              <p className="mt-0.5 text-[13px] leading-6" style={{ color: MUTED }}>
                {n.sub}
              </p>
            </li>
          );
        })}
        <li
          className="mt-4 border-t pt-4 font-mono text-[11px] leading-5"
          style={{ borderColor: LINE, color: MUTED }}
        >
          Repayments return through your SACCO · reconciled in the Aurora
          workspace
        </li>
      </ol>

      <figcaption className="sr-only">
        The Aurora liquidity journey: Fairway reviews and approves liquidity,
        the Aurora rail settles it in USDM, your SACCO lends through its own
        process, and members and SMEs receive financing locally. Repayments
        return through the SACCO and are reconciled in Aurora.
      </figcaption>
    </figure>
  );
}
