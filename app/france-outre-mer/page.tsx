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
  title: "Audit énergétique et CEE en outre-mer (DOM) | Agence 3E",
  description:
    "Audit énergétique et valorisation CEE en Guadeloupe, Martinique, Guyane, Réunion, Mayotte. Spécialistes des fiches CEE DOM, contraintes climat tropical.",
  alternates: { canonical: "/france-outre-mer" },
};

const FICHES = [
  { ref: "BAT-EN-108", label: "Isolation des murs France d'outre-mer", segment: "Tertiaire" },
  { ref: "BAT-EN-106", label: "Isolation combles ou toitures DOM", segment: "Tertiaire" },
  { ref: "BAT-EN-109", label: "Réduction apports solaires par toiture DOM", segment: "Tertiaire" },
  { ref: "BAT-EN-110", label: "Protections baies contre rayonnement solaire DOM", segment: "Tertiaire" },
  { ref: "BAT-EN-112", label: "Revêtements réflectifs en toiture", segment: "Tertiaire" },
  { ref: "BAT-TH-115", label: "Climatiseur performant DOM", segment: "Tertiaire" },
  { ref: "BAT-TH-121", label: "Chauffe-eau solaire DOM", segment: "Tertiaire" },
  { ref: "BAT-TH-122", label: "Programmateur intermittence climatisation DOM", segment: "Tertiaire" },
  { ref: "INDEN101", label: "Isolation murs DOM industrie", segment: "Industrie" },
  { ref: "INDEN102", label: "Isolation combles/toitures DOM industrie", segment: "Industrie" },
];

const SPECIFICITES = [
  {
    title: "Climat tropical inversé",
    body: "La climatisation domine, le chauffage est marginal. Les fiches CEE DOM portent sur l'isolation thermique côté chaud (réduction des apports solaires), la climatisation performante, et la production d'eau chaude par solaire thermique.",
  },
  {
    title: "Fiches dédiées DOM",
    body: "Une dizaine de fiches CEE existent uniquement pour les DOM, avec des coefficients adaptés. Il faut les connaître pour optimiser le montage des dossiers.",
  },
  {
    title: "Logistique territoriale",
    body: "Audits programmés sur 1-3 jours sur site, déplacements de l'auditeur ou mobilisation d'un partenaire local selon territoire et selon contrainte de délai.",
  },
];

const DISPOSITIF = [
  "Pré-qualification 100 % à distance",
  "Mission terrain : auditeur métropole déplacé OU partenaire local accrédité",
  "Délais légèrement majorés vs métropole (logistique, fret matériel mesure)",
  "Délégataires CEE acceptant les opérations DOM (tous ne le font pas)",
];

export default function FranceOutreMerPage() {
  return (
    <>
      <AuroreDefs />
      <Topbar />
      <SiteHeader />
      <Breadcrumb
        items={[
          { href: "/", label: "Accueil" },
          { label: "France outre-mer" },
        ]}
      />

      <main>
        {/* Hero */}
        <section className="relative pt-[60px] pb-[var(--spacing-block-sm)] overflow-hidden">
          <div className="absolute right-0 top-0 w-[60%] h-[700px] opacity-65 pointer-events-none -z-[1] max-[1100px]:opacity-30">
            <Aurore variant="outremer" className="w-full h-full" />
          </div>
          <div className="container-x">
            <div className="max-w-[860px]">
              <span className="eyebrow reveal">DOM · Aurore tropicale</span>
              <h1
                className="display reveal mt-6"
                style={{
                  fontSize: "clamp(36px, 4.4vw, 60px)",
                  lineHeight: 1.04,
                  letterSpacing: "-0.04em",
                }}
              >
                Audit énergétique et CEE
                <br />
                <span className="it">en outre-mer.</span>
              </h1>
              <p className="text-[19px] text-[var(--color-text-2)] mt-7 max-w-[680px] leading-[1.55] reveal">
                Guadeloupe, Martinique, Guyane, La Réunion, Mayotte. Les fiches
                CEE applicables aux DOM sont distinctes des fiches métropole.
                Nous maîtrisons spécifiquement les opérations DOM, du résidentiel
                à l&apos;industrie, avec une logistique adaptée aux territoires.
              </p>
              <div className="mt-10 reveal">
                <Link href="/contact" className="btn btn-primary btn-arrow">
                  Demander un devis DOM
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 3 spécificités */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <span className="eyebrow reveal">Spécificités CEE DOM</span>
            <h2 className="section-title reveal">
              Pourquoi les CEE DOM sont <span className="it">à part.</span>
            </h2>
            <div className="grid grid-cols-3 gap-7 mt-12 max-[1100px]:grid-cols-1">
              {SPECIFICITES.map((s, i) => (
                <div
                  key={s.title}
                  className="bg-white border border-[var(--color-border)] rounded-2xl p-8 reveal"
                >
                  <span
                    className="it text-[40px] text-[var(--color-secondary)] leading-none"
                    style={{ fontFeatureSettings: '"tnum" 1' }}
                  >
                    0{i + 1}
                  </span>
                  <h3 className="text-[20px] font-bold tracking-[-0.025em] mt-4 text-[var(--color-primary)]">
                    {s.title}
                  </h3>
                  <p className="text-[14.5px] text-[var(--color-text-2)] mt-3 leading-[1.6]">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10 fiches DOM table */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <span className="eyebrow reveal">Fiches CEE DOM phares</span>
            <h2 className="section-title reveal">
              Les 10 fiches CEE DOM <span className="it">que nous traitons.</span>
            </h2>
            <div className="mt-12 bg-white border border-[var(--color-border)] rounded-2xl overflow-hidden reveal">
              <div className="grid grid-cols-[160px_1fr_140px] py-4 px-6 bg-[#fafbfc] border-b border-[var(--color-border)] mono text-[10.5px] tracking-[0.08em] text-[var(--color-text-3)] uppercase max-sm:grid-cols-[110px_1fr]">
                <span>Référence</span>
                <span>Intitulé</span>
                <span className="max-sm:hidden">Bénéficiaire</span>
              </div>
              {FICHES.map((f, i) => (
                <div
                  key={f.ref}
                  className={`grid grid-cols-[160px_1fr_140px] py-4 px-6 items-center text-sm hover:bg-[#fafbfc] transition-colors max-sm:grid-cols-[110px_1fr] ${
                    i < FICHES.length - 1
                      ? "border-b border-[var(--color-border-2)]"
                      : ""
                  }`}
                >
                  <span className="mono text-xs text-[var(--color-primary)] font-medium">
                    {f.ref}
                  </span>
                  <span className="text-[var(--color-primary)] font-medium">
                    {f.label}
                  </span>
                  <span
                    className={`mono text-[11px] py-1 px-2 rounded w-fit max-sm:hidden ${
                      f.segment === "Industrie"
                        ? "bg-[var(--color-secondary-10)] text-[#006e46]"
                        : "bg-[var(--color-pastel-blue)] text-[var(--color-primary)]"
                    }`}
                  >
                    {f.segment}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dispositif */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <div className="bg-[var(--color-primary)] text-white rounded-[32px] p-16 relative overflow-hidden reveal max-[1100px]:p-10">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(50% 70% at 100% 0%, rgba(61,208,200,0.18), transparent 60%), radial-gradient(50% 70% at 0% 100%, rgba(255,155,126,0.16), transparent 60%)",
                }}
              />
              <div className="relative z-[1]">
                <span className="eyebrow text-white/60 before:bg-white/30">
                  Notre dispositif d&apos;intervention DOM
                </span>
                <h2
                  className="font-bold tracking-[-0.035em] mt-5"
                  style={{ fontSize: "clamp(28px, 2.8vw, 44px)" }}
                >
                  Comment nous travaillons
                  <br />
                  <span className="it text-[var(--color-accent)]">
                    en outre-mer.
                  </span>
                </h2>
                <ul className="grid grid-cols-2 gap-4 list-none p-0 mt-10 max-[1100px]:grid-cols-1">
                  {DISPOSITIF.map((d) => (
                    <li
                      key={d}
                      className="flex gap-3 items-start py-4 px-5 bg-white/[0.06] rounded-xl border-l-[3px] border-[var(--color-accent)]"
                    >
                      <span className="text-[var(--color-accent)] font-bold shrink-0 mt-px">
                        ✓
                      </span>
                      <span className="text-[15px] text-white/85">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Étude de cas */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <div className="bg-[var(--color-pastel-orange)] rounded-3xl py-12 px-14 relative overflow-hidden reveal max-[1100px]:py-10 max-[1100px]:px-8">
              <div
                className="absolute w-[400px] h-[400px] rounded-full pointer-events-none -bottom-[160px] -right-[160px]"
                style={{
                  background:
                    "radial-gradient(circle, #FF8B6B 0%, #F7C8A8 60%, transparent 100%)",
                  filter: "blur(80px)",
                  opacity: 0.6,
                }}
              />
              <div className="relative z-[1] flex justify-between items-center gap-6 flex-wrap">
                <div>
                  <span className="eyebrow">Étude de cas DOM</span>
                  <h3 className="text-[24px] font-bold tracking-[-0.025em] mt-3 text-[var(--color-primary)]">
                    Industriel cosmétique La Réunion
                  </h3>
                  <span className="mono text-[11px] text-[var(--color-text-3)] tracking-[0.06em] mt-2 inline-block">
                    CASE-012
                  </span>
                </div>
                <Link
                  href="/ressources/etudes-de-cas/case-012"
                  className="btn btn-primary btn-arrow"
                >
                  Lire le cas complet
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
