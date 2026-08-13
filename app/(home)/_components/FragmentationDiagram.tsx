import { FAINT, GOLD, GOLD_HAIR, GOLD_LIGHT, HAIR, INK, PANEL, PANEL_DEEP } from "./theme";

const IMPLS = ["Lending impl. A", "Lending impl. B", "Lending impl. C"];
const CONSUMERS = ["Capital provider", "Application", "Analytics", "Wallet"];

const IMPL_Y = [90, 170, 250];
const CONSUMER_Y = [66, 136, 206, 276];

const BOX_H = 40;
const CONSUMER_H = 36;

export default function FragmentationDiagram() {
  return (
    <figure className="m-0">
      <div
        className="aurora-blueprint overflow-x-auto rounded-[22px] border"
        style={{ borderColor: HAIR, backgroundColor: "rgba(255,255,255,0.016)" }}
      >
        <svg
          viewBox="0 0 1000 400"
          role="img"
          aria-label="Left: four capital providers and applications each wiring bespoke point-to-point integrations to three independent lending implementations — twelve separate integrations. Right: the same three implementations publish through one shared Aurora market layer, which every participant queries once."
          className="min-w-[880px] p-2"
        >
          {/* ---------- left: point to point ---------- */}
          <text
            x={30}
            y={30}
            fill={FAINT}
            fontSize="10"
            fontWeight="600"
            letterSpacing="2"
            fontFamily="var(--font-geist-mono), monospace"
          >
            WITHOUT SHARED STANDARDS
          </text>

          {IMPL_Y.map((y, i) =>
            CONSUMER_Y.map((cy, j) => (
              <path
                key={`${i}-${j}`}
                d={`M 148 ${y + BOX_H / 2} C 220 ${y + BOX_H / 2}, 228 ${cy + CONSUMER_H / 2}, 300 ${cy + CONSUMER_H / 2}`}
                fill="none"
                stroke="rgba(244,239,227,0.17)"
                strokeWidth="1"
              />
            )),
          )}

          {IMPL_Y.map((y, i) => (
            <NodeBox key={`impl-${i}`} x={30} y={y} w={118} h={BOX_H} label={IMPLS[i]} />
          ))}
          {CONSUMER_Y.map((y, i) => (
            <NodeBox
              key={`cons-${i}`}
              x={300}
              y={y}
              w={130}
              h={CONSUMER_H}
              label={CONSUMERS[i]}
            />
          ))}

          <text
            x={30}
            y={368}
            fill="rgba(244,239,227,0.55)"
            fontSize="11"
            fontFamily="var(--font-geist-mono), monospace"
          >
            12 bespoke integrations · 12 metadata formats
          </text>

          {/* ---------- divider + transform arrow ---------- */}
          <line
            x1={470}
            y1={44}
            x2={470}
            y2={348}
            stroke="rgba(244,239,227,0.12)"
            strokeWidth="1"
            strokeDasharray="3 6"
          />
          <g transform="translate(497, 194)">
            <circle r="17" fill={PANEL} stroke={GOLD_HAIR} strokeWidth="1" />
            <path
              d="M -5 -6 L 5 0 L -5 6"
              fill="none"
              stroke={GOLD_LIGHT}
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>

          {/* ---------- right: one shared layer ---------- */}
          <text
            x={530}
            y={30}
            fill={GOLD}
            fontSize="10"
            fontWeight="600"
            letterSpacing="2"
            fontFamily="var(--font-geist-mono), monospace"
          >
            WITH AURORA — ONE SHARED MARKET LAYER
          </text>

          {IMPL_Y.map((y, i) => (
            <line
              key={`in-${i}`}
              x1={648}
              y1={y + BOX_H / 2}
              x2={700}
              y2={y + BOX_H / 2}
              stroke="rgba(246,184,75,0.45)"
              strokeWidth="1.2"
            />
          ))}
          {CONSUMER_Y.map((y, i) => (
            <line
              key={`out-${i}`}
              x1={764}
              y1={y + CONSUMER_H / 2}
              x2={846}
              y2={y + CONSUMER_H / 2}
              stroke="rgba(246,184,75,0.45)"
              strokeWidth="1.2"
            />
          ))}

          {/* shared layer slab */}
          <rect
            x={700}
            y={58}
            width={64}
            height={264}
            rx={14}
            fill="rgba(246,184,75,0.07)"
            stroke={GOLD_HAIR}
            strokeWidth="1.2"
          />
          <rect x={712} y={58} width={40} height={2} rx={1} fill={GOLD} opacity="0.75" />
          <text
            x={732}
            y={190}
            transform="rotate(-90 732 190)"
            textAnchor="middle"
            fill={GOLD_LIGHT}
            fontSize="11"
            fontWeight="600"
            letterSpacing="2.4"
            fontFamily="var(--font-geist-mono), monospace"
          >
            AURORA MARKET LAYER
          </text>

          {IMPL_Y.map((y, i) => (
            <NodeBox key={`rimpl-${i}`} x={530} y={y} w={118} h={BOX_H} label={IMPLS[i]} />
          ))}
          {CONSUMER_Y.map((y, i) => (
            <NodeBox
              key={`rcons-${i}`}
              x={846}
              y={y}
              w={130}
              h={CONSUMER_H}
              label={CONSUMERS[i]}
              accent
            />
          ))}

          <text
            x={530}
            y={368}
            fill={GOLD_LIGHT}
            fontSize="11"
            fontFamily="var(--font-geist-mono), monospace"
          >
            1 metadata standard · 1 query surface · N participants
          </text>
        </svg>
      </div>
    </figure>
  );
}

function NodeBox({
  x,
  y,
  w,
  h,
  label,
  accent = false,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  accent?: boolean;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={9}
        fill={accent ? PANEL : PANEL_DEEP}
        stroke={accent ? GOLD_HAIR : "rgba(244,239,227,0.16)"}
        strokeWidth="1"
      />
      <text
        x={x + w / 2}
        y={y + h / 2 + 4}
        textAnchor="middle"
        fill={accent ? INK : "rgba(244,239,227,0.72)"}
        fontSize="11.5"
      >
        {label}
      </text>
    </g>
  );
}
