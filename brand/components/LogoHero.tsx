"use client";

import { useId } from "react";

/**
 * LogoHero — version publique / marketing.
 *
 * Source SVG : Section 7 de A3E_Logo_Guidelines__standalone_.html.
 * Reproduction stricte. Aucun effet ajouté (cf. Don't 03).
 *
 * Usages : header site web, cover LinkedIn, kakémono, bannière e-mail
 * marketing, hero supports. Cf. matrice Section 2 du même document.
 *
 * NE PAS utiliser pour : e-mails transactionnels, PDF imprimables
 * monochrome (la ligne aurore disparaît à l'impression — Don't 04).
 *
 * Taille minimale : 200 px de large. En dessous, la ligne aurore
 * devient illisible (Section 3.1). Un avertissement console est
 * émis en développement.
 */
export interface LogoHeroProps {
  /** Largeur en pixels. Défaut 200 (taille minimale). */
  size?: number;
  /** Version sur fond sombre #0A2540 : wordmark blanc + baseline rgba(255,255,255,0.7). */
  negative?: boolean;
  /** Classes additionnelles (ex. utilitaires Tailwind de positionnement). */
  className?: string;
  /** Si fourni, sert d'alt et de titre. Défaut accessible déjà fourni. */
  ariaLabel?: string;
}

export function LogoHero({
  size = 200,
  negative = false,
  className,
  ariaLabel,
}: LogoHeroProps) {
  const reactId = useId().replace(/:/g, "");
  const lineId = `a3e-hero-line-${reactId}`;
  const blurId = `a3e-hero-blur-${reactId}`;

  if (process.env.NODE_ENV !== "production" && size < 200) {
    // eslint-disable-next-line no-console
    console.warn(
      `[LogoHero] size=${size}px sous le seuil minimal de 200 px (Section 3.1 — Logo Guidelines). La ligne aurore deviendra illisible.`,
    );
  }

  const wordmarkFill = negative ? "#FFFFFF" : "#0A2540";
  const baselineFill = negative ? "rgba(255,255,255,0.7)" : "#425466";
  const height = (size * 200) / 400;

  return (
    <svg
      viewBox="0 0 400 200"
      width={size}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={
        ariaLabel ??
        "Agence 3E — Transformez vos obligations en opportunités."
      }
      className={className}
    >
      <defs>
        <linearGradient id={lineId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#6BCFA0" />
          <stop offset="50%" stopColor="#F5C518" />
          <stop offset="100%" stopColor="#6E91D8" />
        </linearGradient>
        <filter
          id={blurId}
          x="-10%"
          y="-200%"
          width="120%"
          height="500%"
        >
          <feGaussianBlur stdDeviation="3.6" />
        </filter>
      </defs>
      <text
        x="200"
        y="92"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontWeight="700"
        fontSize="76"
        letterSpacing="-2.6"
        fill={wordmarkFill}
      >
        A3E
      </text>
      <g transform="translate(4,118)">
        <rect
          x="0"
          y="0"
          width="392"
          height="4"
          rx="2"
          fill={`url(#${lineId})`}
          filter={`url(#${blurId})`}
        />
        <rect
          x="0"
          y="0"
          width="392"
          height="4"
          rx="2"
          fill={`url(#${lineId})`}
          opacity="0.55"
        />
      </g>
      <text
        x="200"
        y="156"
        textAnchor="middle"
        fontFamily="'Source Serif Pro', serif"
        fontStyle="italic"
        fontWeight="400"
        fontSize="14"
        fill={baselineFill}
      >
        Transformez vos obligations en opportunités.
      </text>
    </svg>
  );
}
