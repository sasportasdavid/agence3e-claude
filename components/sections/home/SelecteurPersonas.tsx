/**
 * SelecteurPersonas — section pivot de la conversion (brief §3.5).
 * REMPLACE l'ancienne PolesSection (mosaïque 50/25/25).
 *
 * v3.5.1 — Refonte design alignée DA générale (sobre B2B + palette pastel
 * signature du site, comme TriplePromesseV3 rose/mint/blue) :
 *  - Cards blanches sur border-2 + gradient pastel en top (couleur segment,
 *    fade vers blanc en bas) — la couleur signe le segment sans dominer.
 *  - Disque icône pastel saturé (rounded-2xl) + icône SVG line couleur
 *    segment → impact visuel ciblé, façon Stripe / Linear.
 *  - Bar accent couleur segment en top (3 px) → différenciation supplémentaire.
 *  - Tag mono uppercase + bullets dashes en couleur segment.
 *  - Mapping segment cohérent palette /app/globals.css :
 *    industrie=pastel-orange/#B45A3D · tertiaire=pastel-blue/primary ·
 *    résidentiel=pastel-green/#006e46 (sémantique chaud/corporate/nature).
 *  - Liste de 4 services concrets par persona — la promesse est instanciée.
 *  - Hover discret aligné avec PilierV3 (translate-y -1 + shadow primary).
 *
 * Reprend EXACTEMENT le contenu validé Phase 3 (mini-sprint repositionnement)
 * — découpé en sub court + 4 bullets pour lisibilité.
 *
 * Container max 1440. Reveal cascadé (delays 0 / 120 / 240 ms).
 */

import Link from "next/link";

/* ──────────────────────────────────────────────────────────────
 * Icônes SVG inline (line stroke 1.5, viewBox 32) — cohérent avec
 * le minimalisme du site, color hérité (currentColor).
 * ──────────────────────────────────────────────────────────── */

function IconFactory({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M3 27V12l7 5V12l7 5V12l7 5V8l3-2v21z" />
      <path d="M3 27h26" />
      <path d="M7 22h2M14 22h2M21 22h2" />
      <path d="M22 6V3h2v3" />
    </svg>
  );
}

function IconBuilding({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="6" y="3" width="20" height="26" />
      <path d="M10 8h3M19 8h3M10 13h3M19 13h3M10 18h3M19 18h3" />
      <path d="M14 29v-6h4v6" />
    </svg>
  );
}

function IconHome({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M4 15L16 5l12 10" />
      <path d="M7 13v15h18V13" />
      <rect x="13" y="20" width="6" height="8" />
    </svg>
  );
}

/* ──────────────────────────────────────────────────────────── */

interface PersonaTile {
  href: string;
  tag: string;
  /** Couleur d'accent segment (bar top + tag mono + tirets bullets + icône) */
  accent: string;
  /** Pastel de fond pour le disque icône + gradient top de la card */
  pastel: string;
  Icon: React.FC<{ className?: string }>;
  h3: string;
  sub: string;
  bullets: string[];
  stat: string;
}

const TILES: PersonaTile[] = [
  {
    href: "/pole-industrie",
    tag: "Industrie",
    accent: "#B45A3D",
    pastel: "var(--color-pastel-orange)",
    Icon: IconFactory,
    h3: "Dirigeant industriel.",
    sub: "Pour vos sites de production.",
    bullets: [
      "Audit DDADUE conforme NF EN 16247",
      "Identification des leviers à ROI mesurable",
      "Financement CEE optimisé",
      "Pilotage des travaux",
    ],
    stat: "8 secteurs couverts · de l'agroalimentaire au verre",
  },
  {
    href: "/pole-tertiaire",
    tag: "Tertiaire",
    accent: "var(--color-primary)",
    pastel: "var(--color-pastel-blue)",
    Icon: IconBuilding,
    h3: "Gestionnaire tertiaire.",
    sub: "Pour votre parc immobilier.",
    bullets: [
      "Conformité décret tertiaire (DEET)",
      "Identification des leviers d'efficacité",
      "Financement CEE et aides",
      "Pilotage GTB et travaux jusqu'en 2030",
    ],
    stat: "8 sous-segments · bureaux, retail, hôtellerie, datacenters",
  },
  {
    href: "/pole-residentiel",
    tag: "Résidentiel",
    accent: "#006e46",
    pastel: "var(--color-pastel-green)",
    Icon: IconHome,
    h3: "Propriétaire.",
    sub: "Pour votre maison ou copropriété.",
    bullets: [
      "Audit énergétique",
      "Mobilisation des aides cumulables",
      "Réseau d'artisans RGE qualifiés",
      "Devis gratuit",
    ],
    stat: "Maisons · Copropriétés · Aides cumulables",
  },
];

export function SelecteurPersonas() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="max-w-[760px]">
          <span className="eyebrow reveal">Trois segments couverts</span>
          <h2
            className="display reveal mt-6"
            style={{
              fontSize: "clamp(40px, 4.4vw, 64px)",
              fontWeight: 600,
              letterSpacing: "-0.035em",
              lineHeight: 1.05,
            }}
          >
            Selon votre profil.
          </h2>
          <p className="text-[18px] text-[var(--color-text-2)] leading-[1.65] mt-6 reveal">
            Industrie, tertiaire, copropriété — une méthode, trois
            terrains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-16 lg:mt-20">
          {TILES.map((t, i) => {
            const Icon = t.Icon;
            return (
              <Link
                key={t.href}
                href={t.href}
                className="group relative rounded-3xl overflow-hidden block reveal bg-white border border-[var(--color-border-2)] hover:-translate-y-1 hover:shadow-[0_24px_56px_-16px_rgba(10,37,64,0.16)] hover:border-[var(--color-primary)]/20 transition-all duration-300"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Gradient pastel en top — fade vers white avant la liste.
                    La couleur signe le segment sans dominer ni écraser le
                    contenu (alignement DA TriplePromesseV3). */}
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-[280px] pointer-events-none"
                  style={{
                    background: `linear-gradient(180deg, ${t.pastel} 0%, transparent 100%)`,
                  }}
                />

                {/* Bar accent couleur segment (3 px en top) — au-dessus du
                    gradient pour rester visible et net. */}
                <div
                  aria-hidden
                  className="absolute top-0 left-0 right-0 h-[3px] z-[1]"
                  style={{ background: t.accent }}
                />

                <div className="relative z-[1] flex flex-col h-full p-10 lg:p-12 pt-12 lg:pt-14">
                  {/* Tag mono uppercase couleur segment */}
                  <span
                    className="mono text-[11px] tracking-[0.08em] uppercase"
                    style={{ color: t.accent }}
                  >
                    {t.tag}
                  </span>

                  {/* Icône dans un disque pastel saturé (rounded-2xl) —
                      impact visuel ciblé, façon Stripe / Linear. La couleur
                      accent est appliquée via `color` sur le wrapper, héritée
                      par les SVG via `currentColor`. */}
                  <div
                    className="mt-6 inline-flex w-14 h-14 rounded-2xl items-center justify-center shrink-0"
                    style={{ background: t.pastel, color: t.accent }}
                    aria-hidden
                  >
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* H3 — nom du persona */}
                  <h3
                    className="font-semibold text-[var(--color-primary)] mt-6"
                    style={{
                      fontSize: "clamp(22px, 2.2vw, 28px)",
                      letterSpacing: "-0.025em",
                      lineHeight: 1.15,
                    }}
                  >
                    {t.h3}
                  </h3>

                  {/* Sub courte */}
                  <p className="text-[15px] text-[var(--color-text-2)] leading-[1.55] mt-3">
                    {t.sub}
                  </p>

                  {/* Liste 4 bullets — services concrets */}
                  <ul className="space-y-2.5 mt-6">
                    {t.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 text-[14px] text-[var(--color-text-2)] leading-[1.5]"
                      >
                        <span
                          aria-hidden
                          className="shrink-0 mt-[9px] w-3 h-[1.5px] rounded-full"
                          style={{ background: t.accent }}
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Footer : stat mono + CTA — ancré en bas via mt-auto */}
                  <div className="mt-auto pt-8">
                    <div className="mono text-[10.5px] tracking-[0.06em] uppercase text-[var(--color-text-3)] pb-5 border-b border-[var(--color-border-2)]">
                      {t.stat}
                    </div>
                    <div className="mt-5 flex items-center gap-2 text-[14px] font-medium text-[var(--color-primary)] group-hover:gap-3 transition-all duration-200">
                      Voir mes solutions
                      <span aria-hidden>→</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* v3.1 — Porte de sortie : profils mixtes / atypiques.
            Pattern : pas de cul-de-sac UX, conformément au diagnostic
            simulateurs §3.1 (P0). Bandeau sobre dessous, dirige vers
            /contact pré-rempli avec un marqueur de provenance. */}
        <div className="mt-12 lg:mt-14 reveal">
          <Link
            href="/contact?profil=autre"
            className="group flex items-center gap-5 max-md:flex-col max-md:items-start max-md:gap-3 py-6 px-7 rounded-2xl bg-[var(--color-bg-alt,#FAFBFC)] border border-[var(--color-border-2)] hover:border-[var(--color-primary)] hover:bg-white transition-colors"
          >
            <span
              className="mono text-[11px] tracking-[0.08em] uppercase text-[var(--color-text-3)] shrink-0"
              aria-hidden
            >
              §
            </span>
            <div className="flex-1">
              <div className="text-[16px] font-semibold text-[var(--color-primary)] tracking-[-0.015em]">
                Profil mixte, atypique, ou je ne sais pas encore ?
              </div>
              <p className="text-[14px] text-[var(--color-text-2)] mt-1 leading-[1.55]">
                Groupe avec patrimoine industriel + tertiaire, bailleur
                social, foncière, syndic, opérateur public, cas hors
                France métropolitaine — décrivez-nous votre situation,
                on revient vers vous sous 24 h ouvrées.
              </p>
            </div>
            <span className="mono text-[13px] text-[var(--color-primary)] tracking-[-0.005em] group-hover:translate-x-0.5 transition-transform shrink-0">
              Nous écrire →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
