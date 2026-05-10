"use client";

/**
 * Topbar — bandeau bleu nuit en haut de toutes les pages.
 *
 * v3.5.5b — Marquee défilant en boucle (R→L) des 3 messages clés, pour
 * remplacer la rotation par fade (Phase 5.5) → mouvement continu plus
 * dynamique, lecture naturelle, pas de "saut" de message.
 *
 *   1. URGENCE        — « DDADUE 11 oct. 2026 · J−XXX » (countdown live)
 *   2. POSITIONNEMENT — « Conformité, économies, financement CEE coordonnés »
 *   3. CRÉDIBILITÉ    — « OPQIBI 1905 · NF EN 16247-3 »
 *
 * Implémentation marquee :
 *  - Container `overflow-hidden` flex-1
 *  - Track `inline-flex whitespace-nowrap` avec messages dupliqués 2×
 *  - Animation CSS `topbar-marquee` (translateX 0 → -50%, 40 s, linear,
 *    infinite) — voir app/globals.css
 *  - Pause au hover (curiosité utilisateur)
 *  - prefers-reduced-motion → animation: none (messages alignés visibles
 *    autant que la largeur le permet, pas de défilement)
 *
 * CTA « Demander un rappel » fixe à droite, cliquable en permanence,
 * /contact?source=topbar.
 *
 * Le composant doit rester client (`"use client"`) car DDADUECountdown
 * est un client component (useEffect pour J−XXX live).
 */

import { DDADUECountdown } from "@/components/DDADUECountdown";

const COUNTDOWN_CLASS = "text-[12.5px] tracking-[0.01em]";

const MESSAGES: React.ReactNode[] = [
  <>
    DDADUE 11 oct. 2026 · <DDADUECountdown className={COUNTDOWN_CLASS} />
  </>,
  <>Conformité, économies, financement CEE coordonnés</>,
  <>OPQIBI 1905 · NF EN 16247-3</>,
];

/** Item marquee unique : message + séparateur dot pastel.
 *  Le padding horizontal et le séparateur sont identiques pour chaque item
 *  → la duplication 2× donne un raccord parfait à translateX(-50%). */
function MarqueeItem({
  children,
  ariaHidden,
}: {
  children: React.ReactNode;
  ariaHidden: boolean;
}) {
  return (
    <span
      className="inline-flex items-center shrink-0"
      aria-hidden={ariaHidden || undefined}
    >
      <span className="px-8">{children}</span>
      <span
        aria-hidden
        className="w-1 h-1 rounded-full bg-[var(--color-accent)]"
      />
    </span>
  );
}

export function Topbar() {
  return (
    <div className="bg-[var(--color-primary)] text-white/[0.78] text-[12.5px] tracking-[0.01em] overflow-hidden">
      <div className="flex justify-between items-center gap-4 py-[9px] px-6 lg:px-8 max-w-[1440px] mx-auto">
        {/* Marquee zone — overflow-hidden, défilement R→L en boucle */}
        <div
          className="flex-1 min-w-0 overflow-hidden"
          aria-label="Messages d'information défilants"
        >
          <div className="topbar-marquee-track inline-flex whitespace-nowrap">
            {/* 1ʳᵉ série — annoncée aux lecteurs d'écran */}
            {MESSAGES.map((m, i) => (
              <MarqueeItem key={`a-${i}`} ariaHidden={false}>
                {m}
              </MarqueeItem>
            ))}
            {/* 2ᵉ série dupliquée — masquée aux lecteurs d'écran (pas de
                doublon vocal). Sert uniquement à boucler la translation. */}
            {MESSAGES.map((m, i) => (
              <MarqueeItem key={`b-${i}`} ariaHidden>
                {m}
              </MarqueeItem>
            ))}
          </div>
        </div>

        {/* CTA fixe à droite — toujours cliquable, ne participe pas au
            défilement. Variante courte sur mobile pour économiser l'espace. */}
        <a
          href="/contact?source=topbar"
          aria-label="Demander un rappel sous 24 heures ouvrées"
          className="text-white font-medium hover:text-[var(--color-accent)] transition-colors shrink-0"
        >
          <span className="max-md:hidden">Demander un rappel →</span>
          <span className="md:hidden">Rappel →</span>
        </a>
      </div>
    </div>
  );
}
