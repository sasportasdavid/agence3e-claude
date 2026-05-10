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
  title: "Notre réseau d'installateurs RGE | Agence 3E",
  description:
    "Comment fonctionne notre réseau d'installateurs RGE. Critères de sélection, charte qualité, mise en concurrence systématique pour nos clients.",
  alternates: { canonical: "/reseau-installateurs-rge" },
};

const CRITERES = [
  "Qualification RGE valide et adaptée à l'opération concernée",
  "Expérience sectorielle démontrée (3 références minimum dans le secteur du client)",
  "Capacité d'intervention sur la zone géographique",
  "Assurance décennale et RC pro à jour",
  "Note moyenne client positive (Trustpilot, Google, Pages Jaunes)",
  "Acceptation de la charte qualité Agence 3E",
];

export default function ReseauRGEPage() {
  return (
    <>
      <AuroreDefs />
      <Topbar />
      <SiteHeader />
      <Breadcrumb
        items={[
          { href: "/", label: "Accueil" },
          { href: "/", label: "Cabinet" },
          { label: "Réseau RGE" },
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
              <span className="eyebrow reveal">Cabinet · Réseau installateurs</span>
              <h1
                className="display reveal mt-6"
                style={{
                  fontSize: "clamp(40px, 4.6vw, 64px)",
                  lineHeight: 1.04,
                  letterSpacing: "-0.04em",
                }}
              >
                Notre réseau d&apos;installateurs RGE
                <br />
                <span className="it">qualifiés.</span>
              </h1>
              <p className="text-[19px] text-[var(--color-text-2)] mt-7 max-w-[680px] leading-[1.55] reveal">
                Sélectionnés sur la base de leur expérience sectorielle, de leur
                capacité d&apos;intervention nationale et de leur historique de
                qualité. Vous gardez la liberté finale du choix.
              </p>
            </div>
          </div>
        </section>

        {/* Critères de sélection */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <span className="eyebrow reveal">Critères de sélection</span>
            <h2 className="section-title reveal">
              Comment nous sélectionnons{" "}
              <span className="it">nos installateurs.</span>
            </h2>
            <ul className="grid grid-cols-2 gap-5 mt-12 list-none p-0 max-[1100px]:grid-cols-1">
              {CRITERES.map((c, i) => (
                <li
                  key={c}
                  className="bg-white border border-[var(--color-border)] rounded-2xl p-7 reveal flex gap-5 items-start"
                >
                  <div
                    className="it text-[28px] text-[var(--color-secondary)] leading-none shrink-0"
                    style={{ fontFeatureSettings: '"tnum" 1' }}
                  >
                    0{i + 1}
                  </div>
                  <p className="text-[15px] text-[var(--color-primary)] leading-[1.55] m-0">
                    {c}
                  </p>
                </li>
              ))}
            </ul>

            {/* Encart sobre — positionnement neutralité commerciale.
                Nous ne publions pas la liste des installateurs partenaires
                pour éviter toute lecture comme prescription ou priorisation
                publique. Les clients en cours de mission peuvent obtenir
                une liste anonymisée par région et qualification. */}
            <div className="mt-10 reveal">
              <div className="bg-[var(--color-bg-alt,#FAFBFC)] border border-[var(--color-border-2)] rounded-2xl py-7 px-8 max-w-[820px] flex items-start gap-5 max-sm:flex-col max-sm:gap-3">
                <div
                  className="mono text-[10.5px] tracking-[0.08em] uppercase text-[var(--color-secondary)] shrink-0 pt-1"
                  aria-hidden
                >
                  Sur demande
                </div>
                <div>
                  <h3 className="text-[16px] font-semibold tracking-[-0.015em] text-[var(--color-primary)] leading-[1.3]">
                    Liste anonymisée disponible sur demande.
                  </h3>
                  <p className="text-[14px] text-[var(--color-text-2)] mt-2 leading-[1.6]">
                    Nous ne publions pas la liste de nos installateurs
                    partenaires pour respecter notre engagement de neutralité
                    commerciale. Une liste anonymisée par région et
                    qualification peut être communiquée sur demande aux
                    clients en cours de mission.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comment nous travaillons */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <div className="bg-[var(--color-pastel-blue)] rounded-3xl p-12 max-w-[920px] reveal">
              <span className="eyebrow">Comment nous travaillons</span>
              <h2 className="text-[28px] font-bold tracking-[-0.025em] leading-[1.2] mt-4 text-[var(--color-primary)]">
                Mise en concurrence{" "}
                <span className="it">de 3 installateurs minimum.</span>
              </h2>
              <p className="text-[16px] text-[var(--color-text-2)] mt-5 leading-[1.6]">
                Pour chaque projet de travaux, nous sélectionnons 3 installateurs
                minimum dans notre réseau, sur les critères ci-dessus. Nous
                demandons les devis, les comparons, vous présentons les offres.
                Vous choisissez.
              </p>
              <p className="text-[16px] text-[var(--color-text-2)] mt-4 leading-[1.6]">
                Vous pouvez aussi consulter un installateur hors de notre
                réseau et nous accepterons de monter le dossier CEE quel que
                soit votre choix — cette liberté contractuelle est une
                exigence directe de la norme NF EN 16247-3.
              </p>
            </div>
          </div>
        </section>

        {/* Devenir partenaire installateur */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <div className="bg-[var(--color-primary)] text-white rounded-[32px] py-14 px-12 grid grid-cols-[1.4fr_1fr] gap-12 items-center relative overflow-hidden reveal max-[1100px]:grid-cols-1 max-[1100px]:py-10 max-[1100px]:px-7">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(60% 80% at 80% 20%, rgba(0,168,107,0.18), transparent 60%)",
                }}
              />
              <div className="relative z-[1]">
                <span className="eyebrow text-white/60 before:bg-white/30">
                  Devenir installateur partenaire
                </span>
                <h2
                  className="font-bold tracking-[-0.035em] mt-5"
                  style={{ fontSize: "clamp(28px, 2.8vw, 40px)" }}
                >
                  Vous êtes une entreprise RGE
                  <br />
                  <span className="it text-[var(--color-accent)]">
                    et souhaitez rejoindre notre réseau ?
                  </span>
                </h2>
                <p className="text-[16px] text-white/[0.78] mt-5 leading-[1.6]">
                  Contactez-nous pour candidater. Nous étudions chaque demande
                  selon les 6 critères de sélection ci-dessus.
                </p>
              </div>
              <div className="relative z-[1]">
                <Link
                  href="/contact"
                  className="btn btn-arrow inline-flex justify-center w-full"
                  style={{ background: "var(--color-secondary)", color: "#fff" }}
                >
                  Candidater au réseau
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
