import type { Metadata } from "next";
import { AuroreDefs } from "@/components/AuroreDefs";
import { RevealRoot } from "@/components/Reveal";
import { Topbar } from "@/components/Topbar";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { Aurore } from "@/components/Aurore";
import { Breadcrumb } from "@/components/Breadcrumb";
import { GLOSSARY, ALPHABET } from "@/content/glossaire";

export const metadata: Metadata = {
  title: "Glossaire — Audit énergétique, CEE, DDADUE | Agence 3E",
  description:
    "Glossaire de référence : ADEME, AIDER, AMO, BAR, BAT, CEE, cumac, DDADUE, GTB, ISO 50001, OPQIBI, PNCEE, RGE, et plus de 50 termes définis.",
  alternates: { canonical: "/ressources/glossaire" },
};

export default function GlossairePage() {
  return (
    <>
      <AuroreDefs />
      <Topbar />
      <SiteHeader />
      <Breadcrumb
        items={[
          { href: "/", label: "Accueil" },
          { href: "/", label: "Ressources" },
          { label: "Glossaire" },
        ]}
      />

      <main>
        <section className="relative pt-[60px] pb-[var(--spacing-block-sm)] overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-[500px] opacity-40 pointer-events-none -z-[1]">
            <Aurore variant="ressources" className="w-full h-full" />
          </div>
          <div className="container-x">
            <div className="max-w-[820px]">
              <span className="eyebrow reveal">Ressources · Glossaire</span>
              <h1
                className="display reveal mt-6"
                style={{
                  fontSize: "clamp(40px, 4.6vw, 64px)",
                  lineHeight: 1.04,
                  letterSpacing: "-0.04em",
                }}
              >
                Glossaire <span className="it">de référence.</span>
              </h1>
              <p className="text-[19px] text-[var(--color-text-2)] mt-6 max-w-[640px] leading-[1.55] reveal">
                ADEME, AIDER, AMO, cumac, DDADUE, GTB, ISO 50001, PNCEE,
                OPQIBI… Définitions courtes des termes clés de l&apos;audit
                énergétique, des CEE et de la performance énergétique.
              </p>
            </div>

            {/* A-Z navigation */}
            <nav
              aria-label="Navigation alphabétique"
              className="mt-10 sticky top-[100px] z-10 bg-white/85 backdrop-blur-md py-4 px-5 rounded-2xl border border-[var(--color-border)] reveal"
            >
              <div className="flex gap-1.5 flex-wrap">
                {ALPHABET.map((letter) => (
                  <a
                    key={letter}
                    href={`#${letter}`}
                    className="mono text-[12px] py-1.5 px-2.5 bg-white border border-[var(--color-border)] rounded text-[var(--color-text-2)] hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-colors"
                  >
                    {letter}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </section>

        <section className="pb-[var(--spacing-block)]">
          <div className="container-x">
            <div className="max-w-[860px]">
              {ALPHABET.map((letter) => (
                <div key={letter} id={letter} className="scroll-mt-[180px] mb-16">
                  <h2
                    className="it text-[64px] text-[var(--color-secondary)] leading-none border-b border-[var(--color-border)] pb-3 mb-7"
                    style={{ fontFeatureSettings: '"tnum" 1' }}
                  >
                    {letter}
                  </h2>
                  <dl className="flex flex-col gap-7">
                    {GLOSSARY[letter].map((entry) => (
                      <div key={entry.term} className="reveal">
                        <dt className="text-[20px] font-bold tracking-[-0.02em] text-[var(--color-primary)]">
                          {entry.term}
                        </dt>
                        <dd className="text-[15.5px] text-[var(--color-text-2)] leading-[1.6] mt-2">
                          {entry.def}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
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
