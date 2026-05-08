/**
 * HeroV3 — Hero refondu (option 1C "Compétences"), brief §3.1.
 *
 * - Container max 1440 (full-bleed background avec aurore industrie)
 * - Grille 2 colonnes desktop : texte (50 %) + MockupTriple (50 %)
 * - H1 mix Inter + Source Serif italique pour les mots-clés
 * - 2 CTAs (primary + secondary) + trust row mono
 * - Padding monumental : pt-32 lg:pt-40 / pb-40 lg:pb-56
 *
 * Reprend EXACTEMENT les textes du brief §3.1.
 */

import Link from "next/link";
import { Aurore } from "@/components/Aurore";
import { MockupTriple } from "@/components/mockups/MockupTriple";

export function HeroV3() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #F8F9FB 0%, #FFFFFF 100%)",
      }}
    >
      {/* Aurore industrie — fullbleed */}
      <div className="absolute inset-0 pointer-events-none -z-[1] opacity-95 max-lg:opacity-50">
        <Aurore variant="industrie" className="w-full h-full" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-32 pb-40 lg:pt-40 lg:pb-56">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Colonne 1 — texte */}
          <div>
            <span className="eyebrow reveal">
              Cabinet de conseil en performance énergétique
            </span>
            <h1
              className="display reveal mt-7"
              style={{
                fontSize: "clamp(40px, 6.6vw, 92px)",
                lineHeight: 1.02,
                letterSpacing: "-0.045em",
                fontWeight: 600,
              }}
            >
              L&apos;énergie comme
              <br />
              <span
                className="it text-[var(--color-primary)]"
                style={{ fontWeight: 400, letterSpacing: "-0.025em" }}
              >
                un sujet stratégique.
              </span>
            </h1>
            <p className="text-[20px] text-[var(--color-text-2)] leading-[1.55] mt-8 max-w-[560px] reveal">
              Pour vos sites industriels, votre parc tertiaire ou votre
              logement — audit conforme, primes CEE optimisées, travaux
              pilotés. Trois segments, une méthode, un interlocuteur.
            </p>

            {/* CTAs */}
            <div className="flex gap-3 mt-10 reveal max-sm:flex-col">
              <Link
                href="#encart-ddadue"
                className="btn btn-primary btn-arrow"
              >
                Vérifier mon obligation
              </Link>
              <Link
                href="#encart-simulateur"
                className="btn btn-secondary"
              >
                Calculer mes économies
              </Link>
            </div>

            {/* Trust row */}
            <div className="mt-12 reveal">
              <p className="mono text-[13px] text-[var(--color-text-3)] tracking-[0.04em] leading-[1.7] max-sm:text-[12px]">
                OPQIBI 1905
                <span className="mx-3 text-[var(--color-border)]">·</span>
                NF EN 16247-3
                <span className="mx-3 text-[var(--color-border)]">·</span>
                France métropolitaine &amp; outre-mer
              </p>
            </div>
          </div>

          {/* Colonne 2 — MockupTriple */}
          <div className="relative max-lg:mt-8">
            <MockupTriple />
          </div>
        </div>
      </div>
    </section>
  );
}
