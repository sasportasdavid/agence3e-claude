"use client";

/**
 * DDADUECountdown — composant client unique pour afficher J−XXX
 * dynamique vers le 11 octobre 2026 (échéance DDADUE).
 *
 * Réutilisé à 3 endroits sur la Home :
 *   1. PilierV3 (sub mono sous « 11 oct. 2026 »)
 *   2. EncartDDADUE (mini-card Délai)
 *   3. StickyMobileCTA (bottom mobile)
 *
 * SSR-safe : 1ʳᵉ render rend `J−…` (placeholder ancré identique côté
 * client jusqu'au mount), pas de mismatch hydratation. Après mount,
 * useEffect calcule la vraie valeur et re-render.
 *
 * Recalcul automatique chaque heure (utile pour les sessions longues).
 */

import { useEffect, useState } from "react";

const DDADUE_DEADLINE = new Date("2026-10-11T00:00:00");

interface DDADUECountdownProps {
  /** Variante visuelle. `inline` = juste le texte ; `pill` = pastille
   *  pastel verte (utilisée dans PilierV3 sous la date principale). */
  variant?: "inline" | "pill";
  /** Classe additionnelle (typo, taille, couleur). */
  className?: string;
}

function calcDaysLeft(): number {
  const today = new Date();
  const diff = DDADUE_DEADLINE.getTime() - today.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

export function DDADUECountdown({
  variant = "inline",
  className = "",
}: DDADUECountdownProps) {
  // null pendant SSR + 1ʳᵉ render client → placeholder ancré.
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    setDays(calcDaysLeft());
    const id = window.setInterval(() => setDays(calcDaysLeft()), 60 * 60 * 1000);
    return () => window.clearInterval(id);
  }, []);

  const expired = days !== null && days < 0;
  const today = days === 0;

  // Texte affiché
  let text: string;
  if (days === null) text = "J−…";
  else if (expired) text = "Échéance dépassée";
  else if (today) text = "Échéance atteinte";
  else text = `J−${days}`;

  if (variant === "pill") {
    const tone = expired
      ? "bg-[#fbe9e9] text-[var(--color-error)]"
      : today
        ? "bg-[var(--color-pastel-yellow)] text-[var(--color-primary)]"
        : "bg-[var(--color-secondary-10)] text-[#006e46]";
    const dotTone = expired
      ? "bg-[var(--color-error)]"
      : "bg-[var(--color-secondary)]";
    return (
      <span
        className={`mono text-[13.5px] tracking-[0.06em] inline-flex items-center gap-2 py-1 px-2.5 rounded-full ${tone} ${className}`}
      >
        <span
          className={`w-1.5 h-1.5 rounded-full ${dotTone} ${days !== null && !expired ? "ddadue-live-dot" : ""}`}
          aria-hidden
        />
        <span suppressHydrationWarning>{text}</span>
      </span>
    );
  }

  // variant inline (default)
  return (
    <span className={`mono ${className}`} suppressHydrationWarning>
      {text}
    </span>
  );
}
