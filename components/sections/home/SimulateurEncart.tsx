/**
 * SimulateurEncart — encart simulateur remonté (brief §3.3).
 *
 * Décision stratégique : remonté juste après le pilier 3 chiffres pour
 * augmenter la conversion (recommandation UX externe).
 *
 * - Container max 1280
 * - Encart bg-secondary-10 (vert pastel doux), padding p-12 lg:p-20,
 *   rounded-3xl, border secondary-20
 * - Aurore variant "compact" en background opacity 0.4
 * - Grille 2 colonnes : texte + mockup tableau cumac (extrait)
 * - CTA primary vert (--secondary)
 *
 * Reprend EXACTEMENT les textes du brief §3.3.
 */

import Link from "next/link";
import { Aurore } from "@/components/Aurore";

interface CumacRow {
  ref: string;
  op: string;
  cumac: string;
  type: string;
}

/* v3.4 — colonne 'Prime CEE' en € retiree, remplacee par 'Type'
   (categorie technique). Total : 'Total estime 442,7 k€' devient
   'Total programme 55 100 MWh cumac · 6 operations'. */
const ROWS: CumacRow[] = [
  { ref: "IND-UT-117", op: "Récup. chaleur groupes froids", cumac: "12 400", type: "Process froid" },
  { ref: "IND-UT-103", op: "Variation vitesse moteurs", cumac: "8 200", type: "Motorisation" },
  { ref: "IND-UT-134", op: "Calorifugeage points sing.", cumac: "3 100", type: "Réseau" },
  { ref: "IND-UT-137", op: "PAC haute température", cumac: "21 800", type: "Récup. chaleur" },
  { ref: "IND-UT-114", op: "Calorifugeage réseaux", cumac: "5 600", type: "Réseau" },
  { ref: "IND-UT-129", op: "Échangeur condensats", cumac: "4 200", type: "Récup. chaleur" },
];

export function SimulateurEncart() {
  return (
    <section
      id="encart-simulateur"
      className="py-20 lg:py-28"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div
          className="relative rounded-3xl border overflow-hidden reveal"
          style={{
            background: "var(--color-secondary-10)",
            borderColor: "rgba(0, 168, 107, 0.2)",
          }}
        >
          {/* Aurore compact en background, opacity 0.4 */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <Aurore variant="compact" className="w-full h-full" />
          </div>

          <div className="relative z-[1] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-12 lg:p-20">
            {/* Colonne 1 — texte + CTA. v3.4 : simulateur transformé en
                formulaire de contact. Plus d'estimation factice exposée. */}
            <div>
              <span className="eyebrow">Estimation personnalisée · sous 48 h</span>
              <h2
                className="display mt-6"
                style={{
                  fontSize: "clamp(28px, 3.2vw, 44px)",
                  fontWeight: 600,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                }}
              >
                Estimation personnalisée
                <br />
                de votre prime CEE.
              </h2>
              <p className="text-[17px] text-[var(--color-text-2)] leading-[1.65] mt-6 max-w-[520px]">
                Décrivez votre site et votre opération en 2 minutes. Notre
                équipe vous propose une estimation chiffrée sous 48 h,
                basée sur les fiches CEE officielles et les conditions
                actuelles du marché.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact?source=estimation-cee&type=estimation"
                  className="btn btn-arrow inline-flex"
                  style={{
                    background: "var(--color-secondary)",
                    color: "#FFFFFF",
                  }}
                >
                  Demander mon estimation
                </Link>
              </div>
            </div>

            {/* Colonne 2 — mockup tableau cumac (extrait) */}
            <div className="bg-white rounded-2xl shadow-[0_24px_48px_-12px_rgba(10,37,64,0.12)] overflow-hidden">
              <div className="py-3 px-5 border-b border-[var(--color-border-2)] flex justify-between items-center bg-[#fafbfc]">
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#d8dde5]" />
                  <span className="w-2 h-2 rounded-full bg-[#d8dde5]" />
                  <span className="w-2 h-2 rounded-full bg-[#d8dde5]" />
                </div>
                <span className="mono text-[10px] text-[var(--color-text-3)]">
                  TABLEAU_CUMAC.csv
                </span>
              </div>
              <div className="grid grid-cols-[110px_1fr_85px_120px] py-2.5 px-5 mono text-[9.5px] uppercase tracking-[0.06em] text-[var(--color-text-3)] border-b border-[var(--color-border-2)] bg-[#fafbfc]">
                <span>Réf</span>
                <span>Opération</span>
                <span className="text-right">MWh cumac</span>
                <span className="text-right">Type</span>
              </div>
              {ROWS.map((r, i) => (
                <div
                  key={r.ref}
                  className={`grid grid-cols-[110px_1fr_85px_120px] py-2.5 px-5 items-center text-[12px] ${
                    i < ROWS.length - 1
                      ? "border-b border-[var(--color-border-2)]"
                      : ""
                  }`}
                >
                  <span className="mono text-[10.5px] text-[var(--color-primary)] font-medium">
                    {r.ref}
                  </span>
                  <span className="text-[var(--color-primary)] truncate">
                    {r.op}
                  </span>
                  <span className="text-right mono text-[11px] text-[var(--color-text-2)]">
                    {r.cumac}
                  </span>
                  <span className="text-right text-[11.5px] text-[var(--color-text-2)]">
                    {r.type}
                  </span>
                </div>
              ))}
              <div className="py-3 px-5 bg-[var(--color-secondary-10)] flex justify-between items-center border-t border-[var(--color-border-2)]">
                <span className="mono text-[10px] uppercase tracking-[0.06em] text-[var(--color-text-3)]">
                  Total programme
                </span>
                <span className="mono text-[12px] text-[var(--color-primary)] tracking-[0.04em]">
                  55 100 MWh cumac · 6 opérations
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
