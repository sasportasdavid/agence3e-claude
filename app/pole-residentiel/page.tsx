import type { Metadata } from "next";
import Link from "next/link";
import { AuroreDefs } from "@/components/AuroreDefs";
import { RevealRoot } from "@/components/Reveal";
import { Topbar } from "@/components/Topbar";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { Aurore } from "@/components/Aurore";
import { Breadcrumb } from "@/components/Breadcrumb";
import {
  meta,
  breadcrumb,
  hero,
  pourquoi,
  portes,
  aides,
  etapes,
} from "@/content/poleResidentiel";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: "/pole-residentiel" },
};

const TONE_BG: Record<string, string> = {
  rose: "bg-[var(--color-pastel-rose)]",
  blue: "bg-[var(--color-pastel-blue)]",
};
const TONE_BLOB: Record<string, string> = {
  rose: "radial-gradient(circle, #FF8FA3 0%, #FFB199 60%, transparent 100%)",
  blue: "radial-gradient(circle, #6F9CFE 0%, #B5C6FB 60%, transparent 100%)",
};

export default function PoleResidentielPage() {
  return (
    <>
      <AuroreDefs />
      <Topbar />
      <SiteHeader />
      <Breadcrumb items={breadcrumb} />

      <main>
        {/* Hero */}
        <section className="relative pt-[60px] pb-[var(--spacing-block-sm)] overflow-hidden">
          <div className="absolute right-0 top-0 w-[55%] h-[700px] opacity-65 pointer-events-none -z-[1] max-[1100px]:opacity-30">
            <Aurore variant="residentiel" className="w-full h-full" />
          </div>
          <div className="container-x">
            <div className="max-w-[820px]">
              <span className="eyebrow reveal">{hero.eyebrow}</span>
              <h1
                className="display reveal mt-6"
                style={{
                  fontSize: "clamp(40px, 4.6vw, 64px)",
                  lineHeight: 1.04,
                  letterSpacing: "-0.04em",
                }}
              >
                Audit énergétique, MaPrimeRénov&apos; et CEE
                <br />
                <span className="it">pour particuliers et copropriétés.</span>
              </h1>
              <p className="text-[19px] text-[var(--color-text-2)] mt-7 max-w-[680px] leading-[1.55] reveal">
                {hero.sub}
              </p>
              <div className="mt-10 reveal">
                <Link href="/contact" className="btn btn-primary btn-arrow">
                  {hero.cta}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi nous */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <span className="eyebrow reveal">{pourquoi.eyebrow}</span>
            <h2 className="section-title reveal">
              {pourquoi.title.lead} <span className="it">{pourquoi.title.it}</span>
            </h2>
            <div className="grid grid-cols-2 gap-6 mt-16 max-[1100px]:grid-cols-1">
              {pourquoi.items.map((p) => (
                <div
                  key={p.title}
                  className="bg-white border border-[var(--color-border)] rounded-2xl p-7 flex gap-5 items-start reveal hover:border-[var(--color-primary)] transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-[var(--color-secondary-10)] text-[var(--color-secondary)] flex items-center justify-center text-base font-bold shrink-0">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-[17px] font-semibold tracking-[-0.015em] text-[var(--color-primary)]">
                      {p.title}
                    </h3>
                    <p className="text-[14.5px] text-[var(--color-text-2)] mt-2 leading-[1.55]">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2 portes d'entrée */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <span className="eyebrow reveal">{portes.eyebrow}</span>
            <h2 className="section-title reveal">
              {portes.title.lead} <span className="it">{portes.title.it}</span>
            </h2>
            <div className="grid grid-cols-2 gap-7 mt-16 max-[1100px]:grid-cols-1">
              {portes.cards.map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className={`relative rounded-3xl p-10 overflow-hidden min-h-[360px] flex flex-col reveal transition-transform hover:-translate-y-1 ${TONE_BG[card.tone]}`}
                >
                  <div
                    className="absolute w-[400px] h-[400px] rounded-full pointer-events-none -top-[140px] -right-[140px]"
                    style={{
                      filter: "blur(70px)",
                      opacity: 0.6,
                      background: TONE_BLOB[card.tone],
                    }}
                  />
                  <span className="relative z-[1] mono text-[11px] py-1.5 px-3 rounded-full bg-white/75 text-[var(--color-primary)] w-fit tracking-[0.04em]">
                    {card.badge}
                  </span>
                  <h3 className="relative z-[1] font-bold text-[32px] tracking-[-0.03em] leading-[1.1] mt-5 text-[var(--color-primary)]">
                    {card.title.lead} <span className="it">{card.title.it}</span>
                  </h3>
                  <p className="relative z-[1] text-[15px] text-[var(--color-text-2)] mt-4 leading-[1.6]">
                    {card.desc}
                  </p>
                  <span className="relative z-[1] mt-auto pt-7 text-sm font-medium text-[var(--color-primary)] inline-flex items-center gap-2">
                    Découvrir → {card.cta}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Aides */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <span className="eyebrow reveal">{aides.eyebrow}</span>
            <h2 className="section-title reveal">
              {aides.title.lead} <span className="it">{aides.title.it}</span>
            </h2>
            <div className="grid grid-cols-3 gap-5 mt-16 max-[1100px]:grid-cols-2 max-sm:grid-cols-1">
              {aides.items.map((a, i) => (
                <div
                  key={a.title}
                  className="bg-white border border-[var(--color-border)] rounded-2xl p-6 reveal flex flex-col"
                >
                  <span
                    className="it text-[28px] text-[var(--color-secondary)] leading-none"
                    style={{ fontFeatureSettings: '"tnum" 1' }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[17px] font-semibold tracking-[-0.015em] text-[var(--color-primary)] mt-3">
                    {a.title}
                  </h3>
                  <p className="text-[13.5px] text-[var(--color-text-2)] mt-2 leading-[1.55]">
                    {a.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Étapes type 6 */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <span className="eyebrow reveal">{etapes.eyebrow}</span>
            <h2 className="section-title reveal">
              {etapes.title.lead} <span className="it">{etapes.title.it}</span>
            </h2>
            <div className="relative grid grid-cols-6 gap-4 mt-16 max-[1100px]:grid-cols-3 max-sm:grid-cols-1">
              <div
                className="absolute top-8 left-[4%] right-[4%] h-px opacity-40 max-[1100px]:hidden"
                style={{
                  background:
                    "linear-gradient(90deg, var(--color-secondary), var(--color-accent), var(--color-primary))",
                }}
              />
              {etapes.steps.map((s) => (
                <div key={s.n} className="px-1 reveal">
                  <div className="w-16 h-16 rounded-full bg-white border border-[var(--color-border)] flex items-center justify-center it text-[24px] text-[var(--color-primary)] relative z-[1] shadow-[0_4px_12px_rgba(10,37,64,0.06)]">
                    {s.n}
                  </div>
                  <h4 className="font-semibold text-[15.5px] tracking-[-0.015em] mt-5 text-[var(--color-primary)]">
                    {s.title}
                  </h4>
                  <p className="text-[12.5px] text-[var(--color-text-2)] mt-2 leading-[1.5]">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <div className="bg-[var(--color-pastel-green)] rounded-[32px] py-16 px-14 text-center relative overflow-hidden reveal max-[1100px]:py-12 max-[1100px]:px-8">
              <div
                className="absolute w-[500px] h-[500px] rounded-full pointer-events-none -top-[180px] -left-[180px]"
                style={{
                  background:
                    "radial-gradient(circle, #6BCFA0 0%, #A8E0BC 60%, transparent 100%)",
                  filter: "blur(100px)",
                  opacity: 0.6,
                }}
              />
              <div className="relative z-[1] max-w-[680px] mx-auto">
                <span className="eyebrow inline-flex justify-center">
                  Démarrons ensemble
                </span>
                <h2
                  className="font-bold tracking-[-0.035em] mt-5 text-[var(--color-primary)]"
                  style={{ fontSize: "clamp(32px, 3vw, 48px)" }}
                >
                  Vous nous appelez,
                  <br />
                  <span className="it">nous rappelons.</span>
                </h2>
                <p className="text-[17px] text-[var(--color-text-2)] mt-5">
                  Aucun démarchage, aucune liste, aucun appel à froid. Vous
                  prenez l&apos;initiative, nous vous recontactons sous 24 h.
                </p>
                <Link
                  href="/contact"
                  className="btn btn-arrow mt-8 inline-flex"
                  style={{ background: "var(--color-secondary)", color: "#fff" }}
                >
                  Demander un devis sans engagement
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <StickyMobileCTA />
      <RevealRoot />
    </>
  );
}
