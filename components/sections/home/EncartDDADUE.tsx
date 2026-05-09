/**
 * EncartDDADUE — encart alerte échéance imminente (brief §3.6).
 *
 * - Container max 880 (lecture confort, texte éditorial)
 * - Encart pastel orange clair, border-l-4 border-orange, rounded-2xl
 * - Live-dot rouge pulsante près du eyebrow
 * - 3 mini-cards (Délai / Seuil / Sanction)
 * - CTA primary "Vérifier mon obligation"
 * - Note de bas en mono : sources juridiques
 *
 * Reprend EXACTEMENT les textes du brief §3.6.
 */

import Link from "next/link";

export function EncartDDADUE() {
  return (
    <section
      id="encart-ddadue"
      className="py-32 lg:py-40"
    >
      <div className="max-w-[880px] mx-auto px-6 lg:px-12">
        <article
          className="rounded-2xl p-12 lg:p-16 reveal"
          style={{
            background: "var(--color-pastel-orange)",
            borderLeft: "4px solid #FF8B6B",
          }}
        >
          {/* Eyebrow + live-dot */}
          <div className="flex items-center gap-2.5">
            <span className="ddadue-live-dot w-2 h-2 rounded-full bg-[var(--color-error)]" />
            <span className="mono text-[12px] tracking-[0.08em] uppercase text-[#B43E5D] font-semibold">
              Échéance imminente
            </span>
          </div>

          {/* H2 */}
          <h2
            className="mt-5"
            style={{
              fontSize: "clamp(28px, 3.2vw, 44px)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.12,
              color: "var(--color-primary)",
            }}
          >
            11 octobre 2026.
            <br />
            La conformité DDADUE n&apos;est plus une option.
          </h2>

          {/* Sub paragraphe */}
          <p className="text-[17px] text-[var(--color-text-2)] leading-[1.7] mt-6">
            La directive européenne sur l&apos;efficacité énergétique
            impose un audit NF EN 16247-3 à toutes les entreprises
            consommant plus de 2,75 GWh annuels. Au-delà du 11 octobre
            2026, l&apos;absence d&apos;audit conforme expose
            l&apos;entreprise à des sanctions de 2 % du chiffre
            d&apos;affaires hors taxes (4 % en cas de récidive).
            L&apos;audit doit être renouvelé tous les 4 ans.
          </p>

          {/* 3 mini-cards */}
          <div className="grid grid-cols-3 gap-4 mt-10 max-md:grid-cols-1">
            <div className="bg-white/70 rounded-xl p-5 border border-[#FF8B6B]/20">
              <div className="mono text-[10px] uppercase tracking-[0.08em] text-[var(--color-text-3)]">
                Délai
              </div>
              <div className="mono text-[22px] text-[var(--color-primary)] mt-2 font-semibold tracking-[-0.01em]">
                J−522
              </div>
              <p className="text-[12.5px] text-[var(--color-text-2)] mt-2 leading-[1.5]">
                avant le 11 oct. 2026
              </p>
            </div>

            <div className="bg-white/70 rounded-xl p-5 border border-[#FF8B6B]/20">
              <div className="mono text-[10px] uppercase tracking-[0.08em] text-[var(--color-text-3)]">
                Seuil
              </div>
              <div className="mono text-[22px] text-[var(--color-primary)] mt-2 font-semibold tracking-[-0.01em]">
                2,75 GWh/an
              </div>
              <p className="text-[12.5px] text-[var(--color-text-2)] mt-2 leading-[1.5]">
                ou ~ 200 k€ de facture
              </p>
            </div>

            <div className="bg-white/70 rounded-xl p-5 border border-[#FF8B6B]/20">
              <div className="mono text-[10px] uppercase tracking-[0.08em] text-[var(--color-text-3)]">
                Sanction
              </div>
              <div className="mono text-[22px] text-[var(--color-primary)] mt-2 font-semibold tracking-[-0.01em]">
                2 / 4 %
              </div>
              <p className="text-[12.5px] text-[var(--color-text-2)] mt-2 leading-[1.5]">
                du CA HT + récidive
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10">
            <Link
              href="/comprendre/loi-ddadue-2025-expliquee"
              className="btn btn-primary btn-arrow inline-flex"
            >
              Vérifier mon obligation
            </Link>
          </div>

          {/* Note de bas */}
          <p className="mono text-[11px] text-[var(--color-text-3)] tracking-[0.04em] mt-10 leading-[1.7] opacity-70">
            Sources : Code de l&apos;énergie L. 233-1
            <span className="mx-2">·</span>
            Décret 2014-1393
            <span className="mx-2">·</span>
            Audit NF EN 16247
          </p>
        </article>
      </div>
    </section>
  );
}
