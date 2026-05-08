/**
 * Aurore — gradient + filter <defs> shared by every aurore variant.
 * Mounted once in the root layout so any <Aurore variant=…> can reference
 * the gradient ids by url(#…).
 */
export function AuroreDefs() {
  return (
    <svg
      width="0"
      height="0"
      style={{ position: "absolute" }}
      aria-hidden="true"
    >
      <defs>
        {/* 01 — Industrie / chaude */}
        <linearGradient id="aur-ind-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF8B6B" />
          <stop offset="50%" stopColor="#F7A85A" />
          <stop offset="100%" stopColor="#FFD86B" />
        </linearGradient>
        <linearGradient id="aur-ind-2" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF6E8A" />
          <stop offset="100%" stopColor="#FFB668" />
        </linearGradient>
        <linearGradient id="aur-ind-3" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFD86B" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#FF8B6B" stopOpacity="0.4" />
        </linearGradient>

        {/* 02 — Tertiaire / froide */}
        <linearGradient id="aur-ter-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6E91D8" />
          <stop offset="50%" stopColor="#8B7DD8" />
          <stop offset="100%" stopColor="#A8C5F0" />
        </linearGradient>
        <linearGradient id="aur-ter-2" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5A6FB8" />
          <stop offset="100%" stopColor="#9FB4E8" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="aur-ter-3" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#B8A8E8" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#6E91D8" stopOpacity="0.3" />
        </linearGradient>

        {/* 03 — Résidentiel / verte */}
        <linearGradient id="aur-res-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5BC290" />
          <stop offset="50%" stopColor="#9FD86B" />
          <stop offset="100%" stopColor="#F5DD8A" />
        </linearGradient>
        <linearGradient id="aur-res-2" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4CC18E" />
          <stop offset="100%" stopColor="#C9EE5D" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="aur-res-3" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FCF1C8" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#5BC290" stopOpacity="0.35" />
        </linearGradient>

        {/* 04 — Outre-mer / tropicale */}
        <linearGradient id="aur-dom-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3DD0C8" />
          <stop offset="50%" stopColor="#6FE0CC" />
          <stop offset="100%" stopColor="#FF9B7E" />
        </linearGradient>
        <linearGradient id="aur-dom-2" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF7E68" />
          <stop offset="100%" stopColor="#FFD08C" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="aur-dom-3" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#9FE5DC" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#3DD0C8" stopOpacity="0.3" />
        </linearGradient>

        {/* 05 — Réglementation / grave */}
        <linearGradient id="aur-reg-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1F3A5F" />
          <stop offset="60%" stopColor="#4A5F85" />
          <stop offset="100%" stopColor="#C8868D" />
        </linearGradient>
        <linearGradient id="aur-reg-2" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8B5A6E" />
          <stop offset="100%" stopColor="#3A4F75" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="aur-reg-3" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D29DA0" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#1F3A5F" stopOpacity="0.3" />
        </linearGradient>

        {/* 06 — Ressources / éditoriale */}
        <linearGradient id="aur-edi-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B8A8E0" />
          <stop offset="50%" stopColor="#C8D8B8" />
          <stop offset="100%" stopColor="#E8DCC0" />
        </linearGradient>
        <linearGradient id="aur-edi-2" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#A8B89F" />
          <stop offset="100%" stopColor="#D5C8E5" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="aur-edi-3" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E8DCC0" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#B8A8E0" stopOpacity="0.3" />
        </linearGradient>

        {/* 07 — Compact (vert/jaune) */}
        <linearGradient id="aur-cmp-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00C97A" />
          <stop offset="100%" stopColor="#FFD86B" />
        </linearGradient>
        <linearGradient id="aur-cmp-2" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5BC290" />
          <stop offset="100%" stopColor="#FFB668" stopOpacity="0.6" />
        </linearGradient>

        {/* 08 — Alert */}
        <linearGradient id="aur-alt-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D64545" />
          <stop offset="50%" stopColor="#E58060" />
          <stop offset="100%" stopColor="#F5C518" />
        </linearGradient>
        <linearGradient id="aur-alt-2" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#B53838" />
          <stop offset="100%" stopColor="#FF8B6B" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="aur-alt-3" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFD08C" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#D64545" stopOpacity="0.25" />
        </linearGradient>

        {/* Hero aliases used by Maquette 2 v4 (home). */}
        <linearGradient id="aur-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B9D" />
          <stop offset="40%" stopColor="#FF8C5A" />
          <stop offset="100%" stopColor="#FFD86B" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="aur-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C5CFF" />
          <stop offset="50%" stopColor="#5B8DEF" />
          <stop offset="100%" stopColor="#36C5F0" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="aur-grad-3" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9B5DE5" />
          <stop offset="100%" stopColor="#F15BB5" stopOpacity="0.5" />
        </linearGradient>

        {/* Pôle Industrie hero — vert/jaune (Maquette 3 v2 validated palette).
            Distinct from the AURORES.html "industrie" variant which is warm
            corail/ambre — the validated mockup uses green/yellow on this page. */}
        <linearGradient id="aur-pi-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00C97A" />
          <stop offset="50%" stopColor="#7FD86B" />
          <stop offset="100%" stopColor="#FFD86B" stopOpacity="0.85" />
        </linearGradient>
        <linearGradient id="aur-pi-2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5C518" />
          <stop offset="100%" stopColor="#FFAA5C" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="aur-pi-3" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5BC290" />
          <stop offset="100%" stopColor="#C9EE5D" stopOpacity="0.5" />
        </linearGradient>

        <filter
          id="aur-blur"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
        >
          <feGaussianBlur stdDeviation="40" />
        </filter>
        <filter id="aur-blur-light">
          <feGaussianBlur stdDeviation="20" />
        </filter>
        <filter id="aur-blur-sm">
          <feGaussianBlur stdDeviation="22" />
        </filter>
        <filter id="aur-blur-lg">
          <feGaussianBlur stdDeviation="60" />
        </filter>
      </defs>
    </svg>
  );
}
