/**
 * SelecteurPersonas — section pivot de la conversion (brief §3.5).
 * REMPLACE l'ancienne PolesSection (mosaïque 50/25/25).
 *
 * - Container max 1440
 * - 3 tuiles avec aurores variantes (industrie chaude / tertiaire froide /
 *   residentiel verte), chacune cliquable et menant à la page pôle.
 * - Reveal cascadé (delays 0 / 120 / 240 ms)
 * - Hover : aurore intensifie + scale 1.02 + shadow XL
 * - Mobile : empilement vertical, hauteur réduite ~420 px
 *
 * Reprend EXACTEMENT les textes du brief §3.5.
 */

import Link from "next/link";
import { Aurore, type AuroreVariant } from "@/components/Aurore";

interface PersonaTile {
  href: string;
  icon: string;
  h3: string;
  sub: React.ReactNode;
  stat: string;
  variant: AuroreVariant;
  /** Halo radial supplémentaire pour intensifier la nuance */
  halo: string;
}

const TILES: PersonaTile[] = [
  {
    href: "/pole-industrie",
    icon: "🏭",
    h3: "Dirigeant industriel.",
    sub: (
      <>
        Pour vos sites de production : audit DDADUE conforme, gisements
        CEE hiérarchisés, ROI sous 3 ans. 8 secteurs couverts, de
        l&apos;agroalimentaire au verre.
      </>
    ),
    stat: "8 secteurs · 130 fiches CEE",
    variant: "industrie",
    halo:
      "radial-gradient(75% 70% at 80% 18%, rgba(255,139,107,0.32), transparent 60%)",
  },
  {
    href: "/pole-tertiaire",
    icon: "🏢",
    h3: "Gestionnaire tertiaire.",
    sub: (
      <>
        Pour votre parc immobilier : conformité décret tertiaire,
        déclaration OPERAT, GTB performante, trajectoire 2030. Bureaux,
        retail, hôtellerie, datacenters et plus.
      </>
    ),
    stat: "8 sous-segments · 87 M€ primes 2024",
    variant: "tertiaire",
    halo:
      "radial-gradient(75% 70% at 80% 18%, rgba(110,145,216,0.32), transparent 60%)",
  },
  {
    href: "/pole-residentiel",
    icon: "🏡",
    h3: "Propriétaire.",
    sub: (
      <>
        Pour votre maison ou copropriété : MaPrimeRénov&apos;, prime CEE,
        éco-PTZ, TVA 5,5 %. Artisans RGE qualifiés, travaux pilotés,
        devis gratuit.
      </>
    ),
    stat: "Maisons · Copropriétés · 100 €/m² isolation",
    variant: "residentiel",
    halo:
      "radial-gradient(75% 70% at 80% 18%, rgba(107,207,160,0.32), transparent 60%)",
  },
];

export function SelecteurPersonas() {
  return (
    <section className="py-32 lg:py-40">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="max-w-[760px]">
          <span className="eyebrow reveal">Trois segments, une méthode</span>
          <h2
            className="display reveal mt-6"
            style={{
              fontSize: "clamp(40px, 4.4vw, 64px)",
              fontWeight: 600,
              letterSpacing: "-0.035em",
              lineHeight: 1.05,
            }}
          >
            Vous êtes...
          </h2>
          <p className="text-[18px] text-[var(--color-text-2)] leading-[1.65] mt-6 reveal">
            Choisissez votre profil pour voir les solutions adaptées.
            Méthode commune, exigences spécifiques par segment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-16 lg:mt-20">
          {TILES.map((t, i) => (
            <Link
              key={t.href}
              href={t.href}
              className="group relative rounded-3xl overflow-hidden block reveal hover:scale-[1.02] hover:shadow-[0_32px_64px_-16px_rgba(10,37,64,0.20)] transition-all duration-300 bg-white border border-[var(--color-border-2)]"
              style={{
                transitionDelay: `${i * 120}ms`,
                minHeight: 520,
              }}
            >
              {/* Aurore en background */}
              <div className="absolute inset-0 pointer-events-none opacity-85 group-hover:opacity-100 transition-opacity duration-300">
                <Aurore variant={t.variant} className="w-full h-full" />
              </div>
              {/* Halo couleur en plus pour intensifier le ton du segment */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: t.halo }}
              />

              {/* Contenu */}
              <div className="relative z-[1] flex flex-col h-full min-h-[520px] max-md:min-h-[420px] p-10 lg:p-12">
                <div
                  className="text-[44px] leading-none"
                  aria-hidden
                >
                  {t.icon}
                </div>
                <h3
                  className="font-semibold text-[var(--color-primary)] mt-6"
                  style={{
                    fontSize: "clamp(24px, 2.4vw, 32px)",
                    letterSpacing: "-0.025em",
                    lineHeight: 1.15,
                  }}
                >
                  {t.h3}
                </h3>
                <p className="text-[15px] text-[var(--color-text-2)] leading-[1.6] mt-4">
                  {t.sub}
                </p>
                <div className="mono text-[12px] tracking-[0.06em] text-[var(--color-text-3)] mt-6 pt-5 border-t border-[#0a25401a]">
                  {t.stat}
                </div>
                <div className="mt-auto pt-8 flex items-center gap-2 text-[14px] font-medium text-[var(--color-primary)] group-hover:gap-3 transition-all duration-200">
                  Voir mes solutions
                  <span aria-hidden>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
