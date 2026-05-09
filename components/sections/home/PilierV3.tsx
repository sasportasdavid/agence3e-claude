/**
 * PilierV3 — Pilier 3 chiffres renforcé, brief §3.2.
 *
 * v3.2 — 1ʳᵉ card : date fixe « 11 oct. 2026 » + DDADUECountdown
 * (composant partagé, voir components/DDADUECountdown.tsx). Le
 * compteur calcule J−XXX côté client après hydratation. Aucun
 * placeholder « Compte à rebours… » résiduel.
 *
 * Server component : on n'a plus besoin de "use client" ici, le
 * countdown est isolé dans son propre composant client.
 */

import { DDADUECountdown } from "@/components/DDADUECountdown";

interface PilierCard {
  big: string | React.ReactNode;
  unit: string;
  body: React.ReactNode;
}

const OTHER_CARDS: PilierCard[] = [
  {
    big: "2,75",
    unit: "GWh/an",
    body: (
      <>
        seuil d&apos;obligation DDADUE. Au-dessus, audit NF EN 16247
        obligatoire avant le 11 octobre 2026.
      </>
    ),
  },
  {
    big: "2 % / 4 %",
    unit: "du CA HT",
    body: (
      <>
        sanctions pour défaut d&apos;audit (2 %) ou récidive (4 %).
        Sanctions cumulables avec d&apos;autres obligations.
      </>
    ),
  },
];

export function PilierV3() {
  return (
    <section className="bg-[var(--color-bg-alt,#FAFBFC)] py-32 lg:py-40">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="max-w-[820px]">
          <span className="eyebrow reveal">DDADUE · 11 octobre 2026</span>
          <h2
            className="display reveal mt-6"
            style={{
              fontSize: "clamp(28px, 3.2vw, 44px)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Trois chiffres pour comprendre l&apos;urgence.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-16 lg:mt-20">
          {/* 1ʳᵉ card : date fixe + DDADUECountdown dynamique */}
          <article className="bg-white border border-[var(--color-border-2)] rounded-3xl p-8 lg:p-10 reveal hover:-translate-y-1 hover:shadow-[0_16px_40px_-8px_rgba(10,37,64,0.10)] transition-all duration-300">
            <div
              className="font-semibold text-[var(--color-primary)]"
              style={{
                fontSize: "clamp(36px, 4.2vw, 56px)",
                letterSpacing: "-0.025em",
                lineHeight: 1.05,
                fontFeatureSettings: '"tnum" 1',
              }}
            >
              11 oct. 2026
            </div>
            <div className="mt-3">
              <DDADUECountdown variant="pill" />
            </div>
            <p className="text-[16px] text-[var(--color-text-2)] leading-[1.65] mt-6">
              Date butoir d&apos;audit énergétique pour les industriels et
              tertiaires consommant plus de 2,75 GWh annuels.
            </p>
          </article>

          {/* 2ᵉ et 3ᵉ cards : valeurs statiques (non-temporelles) */}
          {OTHER_CARDS.map((c, i) => (
            <article
              key={typeof c.big === "string" ? c.big : i}
              className="bg-white border border-[var(--color-border-2)] rounded-3xl p-8 lg:p-10 reveal hover:-translate-y-1 hover:shadow-[0_16px_40px_-8px_rgba(10,37,64,0.10)] transition-all duration-300"
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <div
                className="it text-[var(--color-primary)]"
                style={{
                  fontSize: "clamp(56px, 5.8vw, 80px)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  fontFeatureSettings: '"tnum" 1',
                }}
              >
                {c.big}
              </div>
              <div className="mono text-[12px] tracking-[0.08em] uppercase text-[var(--color-text-3)] mt-3">
                {c.unit}
              </div>
              <p className="text-[16px] text-[var(--color-text-2)] leading-[1.65] mt-6">
                {c.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
