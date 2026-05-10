"use client";

/**
 * Topbar — bandeau bleu nuit en haut de toutes les pages.
 *
 * v3.5.5 (Phase 5.5 mini-sprint repositionnement) — Rotation 3 messages
 * pour supprimer la redondance avec le Hero/Header (« Cabinet de conseil
 * énergétique » / « France métropolitaine » étaient déjà ailleurs).
 *
 *   1. URGENCE        — « DDADUE 11 oct. 2026 · J−XXX » (countdown live)
 *   2. POSITIONNEMENT — « Conformité, économies, financement CEE coordonnés »
 *   3. CRÉDIBILITÉ    — « OPQIBI 1905 · NF EN 16247-3 »
 *
 * Cycle : 4 s par message + 0,4 s fade → 12 s total. CTA « Demander un
 * rappel » fixe à droite, cliquable pendant la rotation.
 *
 * Accessibilité :
 *  - `prefers-reduced-motion` respecté → rotation désactivée, message 1 fixe
 *  - `aria-live="polite"` sur le conteneur → annonce le changement
 *  - `aria-label` explicite sur le CTA
 *
 * Responsive :
 *  - Desktop  ≥1024 → 3 messages full
 *  - Tablette 768–1023 → 3 messages raccourcis
 *  - Mobile   <768 → PAS de rotation, message 1 (mobile) + CTA court
 */

import { useEffect, useRef, useState } from "react";
import { DDADUECountdown } from "@/components/DDADUECountdown";

interface Message {
  /** Variante desktop (≥1024 px) */
  desktop: React.ReactNode;
  /** Variante tablette (768–1023 px) */
  tablet: React.ReactNode;
  /** Variante mobile (<768 px) — affichée uniquement pour le message 1 */
  mobile: React.ReactNode;
}

const COUNTDOWN_CLASS = "text-[12.5px] tracking-[0.01em]";

const MESSAGES: Message[] = [
  {
    desktop: (
      <>
        DDADUE 11 oct. 2026 ·{" "}
        <DDADUECountdown className={COUNTDOWN_CLASS} />
      </>
    ),
    tablet: (
      <>
        DDADUE 2026 · <DDADUECountdown className={COUNTDOWN_CLASS} />
      </>
    ),
    mobile: (
      <>
        DDADUE · <DDADUECountdown className={COUNTDOWN_CLASS} />
      </>
    ),
  },
  {
    desktop: <>Conformité, économies, financement CEE coordonnés</>,
    tablet: <>Cabinet d&apos;orchestration énergétique</>,
    mobile: null, // non utilisé sur mobile (pas de rotation)
  },
  {
    desktop: <>OPQIBI 1905 · NF EN 16247-3</>,
    tablet: <>OPQIBI 1905</>,
    mobile: null,
  },
];

const ROTATION_INTERVAL_MS = 4000;
const FADE_DURATION_MS = 400;

export function Topbar() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const fadeTimeoutRef = useRef<number | null>(null);

  // Détection prefers-reduced-motion + breakpoint mobile (réactif)
  useEffect(() => {
    const motionMQ = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileMQ = window.matchMedia("(max-width: 767px)");

    setReducedMotion(motionMQ.matches);
    setIsMobile(mobileMQ.matches);

    const onMotion = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    const onMobile = (e: MediaQueryListEvent) => setIsMobile(e.matches);

    motionMQ.addEventListener("change", onMotion);
    mobileMQ.addEventListener("change", onMobile);
    return () => {
      motionMQ.removeEventListener("change", onMotion);
      mobileMQ.removeEventListener("change", onMobile);
    };
  }, []);

  // Rotation des messages (désactivée si reduced-motion ou mobile)
  useEffect(() => {
    if (reducedMotion || isMobile) return;

    const intervalId = window.setInterval(() => {
      setVisible(false);
      fadeTimeoutRef.current = window.setTimeout(() => {
        setIndex((i) => (i + 1) % MESSAGES.length);
        setVisible(true);
      }, FADE_DURATION_MS);
    }, ROTATION_INTERVAL_MS);

    return () => {
      window.clearInterval(intervalId);
      if (fadeTimeoutRef.current !== null) {
        window.clearTimeout(fadeTimeoutRef.current);
      }
    };
  }, [reducedMotion, isMobile]);

  const current = MESSAGES[index];

  return (
    <div className="bg-[var(--color-primary)] text-white/[0.78] text-[12.5px] tracking-[0.01em]">
      <div className="flex justify-between items-center gap-4 py-[9px] px-6 lg:px-8 max-w-[1440px] mx-auto">
        {/* Zone gauche : message rotatif (avec aria-live pour annonce SR) */}
        <div
          aria-live="polite"
          aria-atomic="true"
          className={`flex items-center min-w-0 transition-opacity ease-out ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDuration: `${FADE_DURATION_MS}ms` }}
        >
          {/* Mobile : toujours message 1 (pas de rotation) */}
          <span className="inline md:hidden truncate">
            {MESSAGES[0].mobile}
          </span>
          {/* Tablette : index courant, variante raccourcie */}
          <span className="hidden md:inline lg:hidden truncate">
            {current.tablet}
          </span>
          {/* Desktop : index courant, variante full */}
          <span className="hidden lg:inline truncate">
            {current.desktop}
          </span>
        </div>

        {/* CTA fixe à droite — toujours cliquable, ne participe pas à la
            rotation. Variante courte sur mobile pour économiser l'espace. */}
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
