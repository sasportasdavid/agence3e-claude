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

export const metadata: Metadata = {
  title: "Nos délégataires CEE partenaires | Agence 3E",
  description:
    "Liste de nos délégataires CEE partenaires. Mise en concurrence systématique sur chaque dossier pour obtenir le meilleur prix de rachat du kWh cumac.",
  alternates: { canonical: "/partenaires-delegataires-cee" },
};

export default function PartenairesPage() {
  return (
    <>
      <AuroreDefs />
      <Topbar />
      <SiteHeader />
      <Breadcrumb
        items={[
          { href: "/", label: "Accueil" },
          { href: "/", label: "Cabinet" },
          { label: "Délégataires partenaires" },
        ]}
      />

      <main>
        {/* Hero */}
        <section className="relative pt-[60px] pb-[var(--spacing-block-sm)] overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-[600px] opacity-50 pointer-events-none -z-[1]">
            <Aurore variant="ressources" className="w-full h-full" />
          </div>
          <div className="container-x">
            <div className="max-w-[820px]">
              <span className="eyebrow reveal">Cabinet · Délégataires CEE</span>
              <h1
                className="display reveal mt-6"
                style={{
                  fontSize: "clamp(40px, 4.6vw, 64px)",
                  lineHeight: 1.04,
                  letterSpacing: "-0.04em",
                }}
              >
                Nos délégataires CEE
                <br />
                <span className="it">partenaires.</span>
              </h1>
              <p className="text-[19px] text-[var(--color-text-2)] mt-7 max-w-[680px] leading-[1.55] reveal">
                Nous mettons en concurrence plusieurs délégataires sur chaque
                dossier CEE. Plus nous avons de partenaires, plus nous obtenons
                un prix de rachat élevé pour vous.
              </p>
            </div>
          </div>
        </section>

        {/* Comment nous travaillons */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <div className="bg-[var(--color-pastel-green)] rounded-3xl p-12 max-w-[920px] reveal">
              <span className="eyebrow">Comment nous travaillons</span>
              <h2 className="text-[28px] font-bold tracking-[-0.025em] leading-[1.2] mt-4 text-[var(--color-primary)]">
                Mise en concurrence{" "}
                <span className="it">systématique.</span>
              </h2>
              <p className="text-[16px] text-[var(--color-text-2)] mt-5 leading-[1.6]">
                Pour chaque opération CEE, nous interrogeons systématiquement
                plusieurs délégataires sur le même périmètre, à la même date.
                Nous comparons les prix de rachat du kWh cumac, négocions, et
                retenons l&apos;offre la plus avantageuse pour vous.
              </p>
              <div className="mt-8 flex items-baseline gap-4 flex-wrap">
                <span
                  className="it text-[40px] text-[var(--color-secondary)] leading-none"
                  style={{ fontFeatureSettings: '"tnum" 1' }}
                >
                  0,5 à 2 €
                </span>
                <span className="text-[14px] text-[var(--color-text-2)]">
                  /MWh cumac de différentiel typique entre la meilleure et la
                  moins bonne offre — soit plusieurs milliers d&apos;euros sur
                  une opération moyenne.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Partenaires actuels — pas de logos publics par neutralité
            commerciale (alignement avec /reseau-installateurs-rge) :
            la liste anonymisée est communiquée aux clients en cours
            de mission, pas affichée publiquement. */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <div className="max-w-[820px]">
              <span className="eyebrow reveal">Nos partenaires actuels</span>
              <h2 className="section-title reveal">
                Une <span className="it">mise en compétition</span>{" "}
                systématique.
              </h2>
              <div className="mt-10 space-y-5 reveal">
                <p className="text-[17px] text-[var(--color-text-2)] leading-[1.7]">
                  Nous travaillons avec un portefeuille de délégataires CEE
                  référencés, sélectionnés pour leur capacité financière,
                  leur réactivité de versement et la transparence de leurs
                  prix au cumac. Pour chaque dossier client, nous mettons en
                  compétition plusieurs délégataires afin d&apos;obtenir le
                  meilleur prix négocié.
                </p>
                <p className="text-[17px] text-[var(--color-text-2)] leading-[1.7]">
                  Liste des délégataires partenaires actuels disponible sur
                  demande aux clients en cours de mission.
                </p>
              </div>

              {/* Mini badge mono cohérent avec l'encart « Liste anonymisée »
                  de /reseau-installateurs-rge */}
              <div className="mt-8 reveal">
                <div className="inline-flex items-center gap-2 mono text-[10.5px] tracking-[0.08em] uppercase text-[var(--color-secondary)] py-2 px-4 bg-[var(--color-bg-alt,#FAFBFC)] border border-[var(--color-border-2)] rounded-full">
                  Sur demande
                  <span aria-hidden className="text-[var(--color-text-3)]">
                    —
                  </span>
                  Aucun délégataire nommé publiquement
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Devenir partenaire */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <div className="bg-[var(--color-primary)] text-white rounded-[32px] py-14 px-12 grid grid-cols-[1.4fr_1fr] gap-12 items-center relative overflow-hidden reveal max-[1100px]:grid-cols-1 max-[1100px]:py-10 max-[1100px]:px-7">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(60% 80% at 80% 20%, rgba(245,197,24,0.16), transparent 60%)",
                }}
              />
              <div className="relative z-[1]">
                <span className="eyebrow text-white/60 before:bg-white/30">
                  Devenir partenaire délégataire
                </span>
                <h2
                  className="font-bold tracking-[-0.035em] mt-5"
                  style={{ fontSize: "clamp(28px, 2.8vw, 40px)" }}
                >
                  Vous êtes délégataire CEE
                  <br />
                  <span className="it text-[var(--color-accent)]">
                    et souhaitez nous rejoindre ?
                  </span>
                </h2>
                <p className="text-[16px] text-white/[0.78] mt-5 leading-[1.6]">
                  Contactez notre équipe pour étudier un cadre de coopération.
                </p>
              </div>
              <div className="relative z-[1]">
                <Link
                  href="/contact"
                  className="btn btn-arrow inline-flex justify-center w-full"
                  style={{ background: "var(--color-secondary)", color: "#fff" }}
                >
                  Demander un partenariat
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
