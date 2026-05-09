"use client";

/**
 * PilierV3 — Pilier 3 chiffres renforcé, brief §3.2.
 *
 * v3.1 — 1ʳᵉ card transformée : date fixe « 11 oct. 2026 » comme chiffre
 * principal + compteur dynamique « J−XXX » en sub mono recalculé à
 * chaque visite. SSR-safe : on rend une valeur ancrée côté serveur,
 * remplacée par la vraie valeur après hydratation côté client.
 *
 * Le but : ne plus mentir avec un « 522 jours » statique.
 */

import { useEffect, useState } from "react";

const DDADUE_DEADLINE = new Date("2026-10-11T00:00:00");

interface PilierCard {
  big: string | React.ReactNode;
  unit: string;
  body: React.ReactNode;
}

function useDaysToDeadline(): number | null {
  // null pendant SSR + 1ʳᵉ render client → on affiche un placeholder
  // ancré (pas de mismatch hydratation).
  const [days, setDays] = useState<number | null>(null);
  useEffect(() => {
    const compute = () => {
      const today = new Date();
      const ms = DDADUE_DEADLINE.getTime() - today.getTime();
      setDays(Math.max(0, Math.ceil(ms / (1000 * 60 * 60 * 24))));
    };
    compute();
    // Recalcule chaque heure (utile pour les visiteurs longue session)
    const id = window.setInterval(compute, 60 * 60 * 1000);
    return () => window.clearInterval(id);
  }, []);
  return days;
}

function FirstCard() {
  const days = useDaysToDeadline();
  // Placeholder ancré (SSR + 1ʳᵉ render client) — affiche un J−placeholder
  // cohérent visuellement, remplacé silencieusement après hydratation.
  const sub = days === null ? "Compte à rebours…" : `J−${days}`;
  const expired = days !== null && days <= 0;

  return (
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
      <div
        className={`mono text-[13.5px] tracking-[0.06em] mt-3 inline-flex items-center gap-2 py-1 px-2.5 rounded-full ${
          expired
            ? "bg-[#fbe9e9] text-[var(--color-error)]"
            : "bg-[var(--color-secondary-10)] text-[#006e46]"
        }`}
      >
        <span
          className={`w-1.5 h-1.5 rounded-full ${expired ? "bg-[var(--color-error)]" : "bg-[var(--color-secondary)]"} ${days !== null ? "ddadue-live-dot" : ""}`}
          aria-hidden
        />
        <span>{expired ? "Échéance dépassée" : sub}</span>
      </div>
      <p className="text-[16px] text-[var(--color-text-2)] leading-[1.65] mt-6">
        Date butoir d&apos;audit énergétique pour les industriels et
        tertiaires consommant plus de 2,75 GWh annuels. Compte à rebours
        recalculé en temps réel.
      </p>
    </article>
  );
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
          {/* 1ʳᵉ card : date fixe + compteur dynamique J−XXX */}
          <FirstCard />

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
