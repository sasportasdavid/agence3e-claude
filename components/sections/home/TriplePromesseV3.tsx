/**
 * TriplePromesseV3 — option 2C "Verbe + preuve", brief §3.4.
 *
 * - Container max 1280
 * - 3 cards pastel (rose / mint / blue)
 * - Verbes d'action : Anticipez / Allégez / Capturez
 * - Stats inline + mockup en bas + lien textuel
 *
 * Reprend EXACTEMENT les textes du brief §3.4.
 */

import Link from "next/link";
import {
  MockupPDF,
  MockupDash,
  MockupTable,
} from "@/components/mockups/PromiseMockups";

interface PromiseCard {
  badge: string;
  h3: string;
  desc: React.ReactNode;
  stats: { label: string; value: string }[];
  link: { href: string; label: string };
  tone: "rose" | "mint" | "blue";
  Mockup: React.ComponentType;
}

const CARDS: PromiseCard[] = [
  {
    badge: "Conformité",
    h3: "Anticipez l'audit obligatoire.",
    desc: (
      <>
        Audit énergétique conforme NF EN 16247-3, conduit par Agence 3E
        Audit (OPQIBI 1905). Nous prenons en charge l&apos;intégralité
        de la démarche : visite de site, mesures, modélisation, livrable
        et dépôt sur AIDER. Livraison indicative sous 12 à 16 semaines
        pour les sites &gt; 2,75 GWh annuels.
      </>
    ),
    stats: [
      { label: "Délai", value: "12 à 16 sem." },
      { label: "Norme", value: "NF EN 16247-3" },
    ],
    link: {
      href: "/services/audit-energetique-ddadue",
      label: "Voir un exemple de rapport",
    },
    tone: "rose",
    Mockup: MockupPDF,
  },
  {
    badge: "Économies",
    h3: "Allégez votre facture énergie.",
    desc: (
      <>
        Identification des leviers rentables, hiérarchisation par ROI,
        plan d&apos;action priorisé sur 4 ans. Nous coordonnons l&apos;analyse
        technique, la mise en compétition des solutions et le pilotage de
        leur mise en œuvre — vous voyez exactement quoi faire, dans quel
        ordre, pour quel gain. Chiffres calibrés site par site.
      </>
    ),
    stats: [
      { label: "Approche", value: "Plan d'action 4 ans" },
      { label: "Méthode", value: "ROI maîtrisé" },
    ],
    link: {
      href: "/services/audit-energetique-ddadue#methode",
      label: "Voir notre méthode",
    },
    tone: "mint",
    Mockup: MockupDash,
  },
  {
    badge: "Prime CEE",
    h3: "Capturez la valeur CEE.",
    desc: (
      <>
        Montage et courtage transparent de votre prime CEE auprès des
        délégataires obligés. Nous orchestrons le montage des dossiers,
        la mise en compétition systématique des délégataires, et le
        suivi du versement — mandat écrit, commission affichée en €/MWh
        cumac, dossier par dossier.
      </>
    ),
    stats: [
      { label: "Approche", value: "Mise en compétition" },
      { label: "Suivi", value: "Dossier par dossier" },
    ],
    link: {
      href: "/services/courtage-prime-cee",
      label: "Comprendre la valorisation",
    },
    tone: "blue",
    Mockup: MockupTable,
  },
];

const TONE_BG: Record<PromiseCard["tone"], string> = {
  rose: "bg-[var(--color-pastel-rose)]",
  mint: "bg-[#D9F0E0]",
  blue: "bg-[var(--color-pastel-blue)]",
};

const TONE_BADGE: Record<PromiseCard["tone"], string> = {
  rose: "bg-white/70 text-[#B43E5D]",
  mint: "bg-white/70 text-[#006e46]",
  blue: "bg-white/70 text-[var(--color-primary)]",
};

export function TriplePromesseV3() {
  return (
    <section className="py-32 lg:py-40">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="max-w-[760px]">
          <span className="eyebrow reveal">Notre engagement</span>
          <h2
            className="display reveal mt-6"
            style={{
              fontSize: "clamp(28px, 3.2vw, 44px)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Trois bénéfices, mesurables.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mt-16 lg:mt-20">
          {CARDS.map((c, i) => {
            const Mockup = c.Mockup;
            return (
              <article
                key={c.badge}
                className={`relative rounded-3xl p-10 lg:p-12 pb-0 overflow-hidden flex flex-col reveal hover:-translate-y-1 transition-transform duration-300 ${TONE_BG[c.tone]}`}
                style={{ transitionDelay: `${i * 100}ms`, minHeight: 580 }}
              >
                <span
                  className={`mono text-[11px] tracking-[0.08em] uppercase py-1.5 px-3 rounded-full w-fit ${TONE_BADGE[c.tone]}`}
                >
                  {c.badge}
                </span>
                <h3
                  className="font-semibold text-[var(--color-primary)] mt-5"
                  style={{
                    fontSize: "clamp(22px, 2.4vw, 28px)",
                    letterSpacing: "-0.025em",
                    lineHeight: 1.15,
                  }}
                >
                  {c.h3}
                </h3>
                <p className="text-[14.5px] text-[var(--color-text-2)] leading-[1.65] mt-4">
                  {c.desc}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mt-6 pt-5 border-t border-[#0a25401a]">
                  {c.stats.map((s) => (
                    <div key={s.label}>
                      <div className="mono text-[10px] tracking-[0.08em] uppercase text-[var(--color-text-3)]">
                        {s.label}
                      </div>
                      <div
                        className="it text-[20px] text-[var(--color-primary)] mt-1.5 leading-none"
                        style={{ fontFeatureSettings: '"tnum" 1' }}
                      >
                        {s.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Lien textuel */}
                <div className="mt-6">
                  <Link
                    href={c.link.href}
                    className="text-[14px] font-medium text-[var(--color-primary)] hover:underline underline-offset-2 inline-flex items-center gap-1.5"
                  >
                    {c.link.label}
                    <span aria-hidden>→</span>
                  </Link>
                </div>

                {/* Mockup en bas (déborde via mx-4 + rounded-t-xl) */}
                <div className="mt-auto pt-8 -mx-10 lg:-mx-12">
                  <Mockup />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
