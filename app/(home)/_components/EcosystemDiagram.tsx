import { FAINT, GOLD, GOLD_HAIR, GOLD_LIGHT, HAIR, INK, PANEL, PANEL_DEEP } from "./theme";

const APPS = [
  "Capital desk tooling",
  "Portfolio dashboards",
  "Wallet integrations",
  "Market analytics",
  "Future applications",
];

const IMPLS = ["Lending impl. A", "Lending impl. B", "Future implementations"];

const APP_W = 172;
const APP_X = [30, 232, 434, 636, 838];
const IMPL_W = 200;
const IMPL_X = [160, 420, 680];

export default function EcosystemDiagram() {
  return (
    <figure className="m-0">
      <div
        className="aurora-blueprint overflow-x-auto rounded-[22px] border"
        style={{ borderColor: HAIR, backgroundColor: "rgba(255,255,255,0.016)" }}
      >
        <svg
          viewBox="0 0 1040 316"
          role="img"
          aria-label="Five independent applications — capital desk tooling, portfolio dashboards, wallet integrations, market analytics, and future applications — all build on one shared Aurora standards layer, which in turn reads from multiple independent lending implementations."
          className="min-w-[880px] p-2"
        >
          {/* app → layer */}
          {APP_X.map((x, i) => (
            <line
              key={`up-${i}`}
              x1={x + APP_W / 2}
              y1={78}
              x2={x + APP_W / 2}
              y2={140}
              stroke="rgba(246,184,75,0.34)"
              strokeWidth="1.2"
            />
          ))}

          {APPS.map((label, i) => (
            <g key={label}>
              <rect
                x={APP_X[i]}
                y={34}
                width={APP_W}
                height={44}
                rx={10}
                fill={PANEL}
                stroke={i === APPS.length - 1 ? "rgba(244,239,227,0.16)" : GOLD_HAIR}
                strokeWidth="1"
                strokeDasharray={i === APPS.length - 1 ? "4 4" : undefined}
              />
              <text
                x={APP_X[i] + APP_W / 2}
                y={61}
                textAnchor="middle"
                fill={i === APPS.length - 1 ? "rgba(244,239,227,0.6)" : INK}
                fontSize="11.5"
              >
                {label}
              </text>
            </g>
          ))}

          {/* shared standards layer */}
          <rect
            x={30}
            y={140}
            width={980}
            height={58}
            rx={14}
            fill="rgba(246,184,75,0.08)"
            stroke={GOLD_HAIR}
            strokeWidth="1.2"
          />
          <rect x={30} y={140} width={980} height={2} rx={1} fill={GOLD} opacity="0.55" />
          <text
            x={520}
            y={166}
            textAnchor="middle"
            fill={GOLD_LIGHT}
            fontSize="11.5"
            fontWeight="600"
            letterSpacing="2.6"
            fontFamily="var(--font-geist-mono), monospace"
          >
            AURORA — METADATA · VERIFICATION · DISCOVERY · OPEN APIS
          </text>
          <text
            x={520}
            y={184}
            textAnchor="middle"
            fill="rgba(255,204,115,0.55)"
            fontSize="10.5"
            letterSpacing="1.4"
            fontFamily="var(--font-geist-mono), monospace"
          >
            APACHE 2.0 · REUSABLE · INDEPENDENTLY OPERABLE
          </text>

          {/* layer → implementations */}
          {IMPL_X.map((x, i) => (
            <line
              key={`down-${i}`}
              x1={x + IMPL_W / 2}
              y1={198}
              x2={x + IMPL_W / 2}
              y2={238}
              stroke="rgba(244,239,227,0.18)"
              strokeWidth="1.2"
            />
          ))}

          {IMPLS.map((label, i) => (
            <g key={label}>
              <rect
                x={IMPL_X[i]}
                y={238}
                width={IMPL_W}
                height={44}
                rx={10}
                fill={PANEL_DEEP}
                stroke="rgba(244,239,227,0.16)"
                strokeWidth="1"
                strokeDasharray={i === IMPLS.length - 1 ? "4 4" : undefined}
              />
              <text
                x={IMPL_X[i] + IMPL_W / 2}
                y={265}
                textAnchor="middle"
                fill="rgba(244,239,227,0.72)"
                fontSize="11.5"
              >
                {label}
              </text>
            </g>
          ))}

          <text
            x={30}
            y={304}
            fill={FAINT}
            fontSize="10.5"
            fontFamily="var(--font-geist-mono), monospace"
          >
            No exclusive permission required from any single implementation team.
          </text>
        </svg>
      </div>
    </figure>
  );
}
