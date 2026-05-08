/**
 * Aurore — signature SVG. Eight contextual variants per AURORES.html.
 * Picks the right gradient ids declared in <AuroreDefs />.
 */

export type AuroreVariant =
  | "industrie"
  | "tertiaire"
  | "residentiel"
  | "outremer"
  | "reglementation"
  | "ressources"
  | "compact"
  | "alert"
  | "hero" // Maquette 2 v4 hero — pink/orange/violet
  | "heroIndustrie"; // Maquette 3 v2 hero — vert/jaune validé

function HeroPaths({
  g1,
  g2,
  g3,
  highlightStroke,
}: {
  g1: string;
  g2: string;
  g3: string;
  highlightStroke: string;
}) {
  return (
    <>
      <g filter="url(#aur-blur)">
        <path
          d="M 200 100 Q 500 0 700 250 Q 800 450 600 600 Q 400 750 250 600 Q 100 450 200 100 Z"
          fill={`url(#${g1})`}
          opacity="0.95"
        />
      </g>
      <g filter="url(#aur-blur)">
        <path
          d="M 350 200 Q 600 100 750 350 Q 800 550 600 700 Q 400 800 300 650 Q 200 500 350 200 Z"
          fill={`url(#${g2})`}
          opacity="0.7"
          style={{ mixBlendMode: "screen" }}
        />
      </g>
      <g filter="url(#aur-blur)">
        <path
          d="M 100 400 Q 200 200 450 250 Q 700 300 650 500 Q 600 700 350 700 Q 100 700 100 400 Z"
          fill={`url(#${g3})`}
          opacity="0.55"
          style={{ mixBlendMode: "multiply" }}
        />
      </g>
      <g filter="url(#aur-blur-light)" opacity="0.6">
        <path
          d="M 250 180 Q 500 80 720 280"
          stroke={highlightStroke}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
      </g>
    </>
  );
}

// Standard 3-path layout used by all "regular" variants
function StandardPaths({
  g1,
  g2,
  g3,
  o1 = 0.92,
  o2 = 0.7,
  o3 = 0.55,
}: {
  g1: string;
  g2: string;
  g3: string;
  o1?: number;
  o2?: number;
  o3?: number;
}) {
  return (
    <>
      <g filter="url(#aur-blur)">
        <path
          d="M 100 80 Q 400 -20 700 120 Q 820 280 600 400 Q 300 480 120 380 Q -20 240 100 80 Z"
          fill={`url(#${g1})`}
          opacity={o1}
        />
      </g>
      <g filter="url(#aur-blur)" style={{ mixBlendMode: "screen" }}>
        <path
          d="M 280 40 Q 560 60 760 220 Q 800 380 560 440 Q 280 460 220 280 Q 160 100 280 40 Z"
          fill={`url(#${g2})`}
          opacity={o2}
        />
      </g>
      <g filter="url(#aur-blur)" style={{ mixBlendMode: "multiply" }}>
        <path
          d="M 60 280 Q 200 140 460 200 Q 720 260 660 380 Q 600 480 320 460 Q 40 440 60 280 Z"
          fill={`url(#${g3})`}
          opacity={o3}
        />
      </g>
    </>
  );
}

function CompactPaths() {
  return (
    <>
      <g filter="url(#aur-blur-sm)">
        <path
          d="M 80 50 Q 400 -20 720 80 Q 800 180 560 240 Q 240 280 80 200 Q -20 130 80 50 Z"
          fill="url(#aur-cmp-1)"
          opacity="0.9"
        />
      </g>
      <g filter="url(#aur-blur-sm)" style={{ mixBlendMode: "multiply" }}>
        <path
          d="M 240 30 Q 540 60 740 160 Q 720 240 480 270 Q 240 280 200 180 Q 160 80 240 30 Z"
          fill="url(#aur-cmp-2)"
          opacity="0.5"
        />
      </g>
    </>
  );
}

function variantPaths(variant: AuroreVariant) {
  switch (variant) {
    case "industrie":
      return <StandardPaths g1="aur-ind-1" g2="aur-ind-2" g3="aur-ind-3" />;
    case "tertiaire":
      return (
        <StandardPaths g1="aur-ter-1" g2="aur-ter-2" g3="aur-ter-3" o1={0.9} />
      );
    case "residentiel":
      return (
        <StandardPaths g1="aur-res-1" g2="aur-res-2" g3="aur-res-3" o2={0.65} />
      );
    case "outremer":
      return <StandardPaths g1="aur-dom-1" g2="aur-dom-2" g3="aur-dom-3" />;
    case "reglementation":
      return (
        <StandardPaths
          g1="aur-reg-1"
          g2="aur-reg-2"
          g3="aur-reg-3"
          o1={0.95}
          o3={0.5}
        />
      );
    case "ressources":
      return (
        <>
          <g filter="url(#aur-blur)">
            <path
              d="M 100 80 Q 400 -20 700 120 Q 820 280 600 400 Q 300 480 120 380 Q -20 240 100 80 Z"
              fill="url(#aur-edi-1)"
              opacity="0.85"
            />
          </g>
          <g filter="url(#aur-blur)" style={{ mixBlendMode: "multiply" }}>
            <path
              d="M 280 40 Q 560 60 760 220 Q 800 380 560 440 Q 280 460 220 280 Q 160 100 280 40 Z"
              fill="url(#aur-edi-2)"
              opacity="0.55"
            />
          </g>
          <g filter="url(#aur-blur)" style={{ mixBlendMode: "screen" }}>
            <path
              d="M 60 280 Q 200 140 460 200 Q 720 260 660 380 Q 600 480 320 460 Q 40 440 60 280 Z"
              fill="url(#aur-edi-3)"
              opacity="0.5"
            />
          </g>
        </>
      );
    case "compact":
      return <CompactPaths />;
    case "alert":
      return (
        <>
          <g filter="url(#aur-blur)">
            <path
              d="M 100 80 Q 400 -20 700 120 Q 820 280 600 400 Q 300 480 120 380 Q -20 240 100 80 Z"
              fill="url(#aur-alt-1)"
              opacity="0.92"
            />
          </g>
          <g filter="url(#aur-blur)" style={{ mixBlendMode: "screen" }}>
            <path
              d="M 280 40 Q 560 60 760 220 Q 800 380 560 440 Q 280 460 220 280 Q 160 100 280 40 Z"
              fill="url(#aur-alt-2)"
              opacity="0.65"
            />
          </g>
          <g filter="url(#aur-blur)" style={{ mixBlendMode: "multiply" }}>
            <path
              d="M 60 130 Q 200 60 460 90 Q 720 130 660 220 Q 600 280 320 270 Q 40 260 60 130 Z"
              fill="url(#aur-alt-3)"
              opacity="0.5"
            />
          </g>
        </>
      );
    case "heroIndustrie":
      return (
        <HeroPaths
          g1="aur-pi-1"
          g2="aur-pi-2"
          g3="aur-pi-3"
          highlightStroke="#E0F5A5"
        />
      );
    case "hero":
    default:
      return (
        <HeroPaths
          g1="aur-grad-1"
          g2="aur-grad-2"
          g3="aur-grad-3"
          highlightStroke="#FFCBA4"
        />
      );
  }
}

const VIEWBOXES: Record<AuroreVariant, string> = {
  hero: "0 0 800 800",
  heroIndustrie: "0 0 800 800",
  industrie: "0 0 800 460",
  tertiaire: "0 0 800 460",
  residentiel: "0 0 800 460",
  outremer: "0 0 800 460",
  reglementation: "0 0 800 460",
  ressources: "0 0 800 460",
  compact: "0 0 800 280",
  alert: "0 0 800 280",
};

export function Aurore({
  variant = "hero",
  className,
  style,
}: {
  variant?: AuroreVariant;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox={VIEWBOXES[variant]}
      preserveAspectRatio="xMidYMid slice"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {variantPaths(variant)}
    </svg>
  );
}
