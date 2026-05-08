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
  title:
    "Notre indépendance d'auditeur — pierre angulaire de notre modèle | Agence 3E",
  description:
    "Comment Agence 3E sépare juridiquement l'audit du commerce des travaux pour garantir l'indépendance NF EN 16247 et la défendabilité du rapport face au PNCEE.",
  alternates: { canonical: "/notre-independance" },
};

const PROBLEMES = [
  "Recommandations orientées vers les solutions que l'entité distribue",
  "Conflit d'intérêts implicite, jamais affiché",
  "Défendabilité fragile en cas de contrôle PNCEE",
  "Confusion des rôles dans l'esprit du client",
];

const GARANTIES = [
  {
    title: "Rapport techniquement neutre",
    desc: "L'auditeur n'a aucun intérêt à prescrire telle solution plutôt que telle autre.",
  },
  {
    title: "Défendabilité juridique",
    desc: "En cas de contrôle, votre rapport est inattaquable sur l'indépendance.",
  },
  {
    title: "Liberté totale du choix d'installateur",
    desc: "Vous pouvez ignorer notre réseau et travailler avec n'importe quel installateur RGE.",
  },
  {
    title: "Possibilité de second avis",
    desc: "Vous pouvez consulter un autre cabinet sans perdre l'antériorité de notre audit.",
  },
];

export default function NotreIndependancePage() {
  return (
    <>
      <AuroreDefs />
      <Topbar />
      <SiteHeader />
      <Breadcrumb
        items={[
          { href: "/", label: "Accueil" },
          { href: "/", label: "Cabinet" },
          { label: "Notre indépendance" },
        ]}
      />

      <main>
        {/* Hero */}
        <section className="relative pt-[60px] pb-[var(--spacing-block-sm)] overflow-hidden bg-[var(--color-primary)] text-white">
          <div className="absolute inset-0 opacity-60 pointer-events-none">
            <Aurore
              variant="reglementation"
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <div className="container-x relative z-[1]">
            <span className="eyebrow text-white/60 before:bg-white/30 reveal">
              Manifeste · pilier de notre modèle
            </span>
            <h1
              className="display reveal mt-6"
              style={{
                fontSize: "clamp(48px, 5.4vw, 80px)",
                lineHeight: 1.02,
                letterSpacing: "-0.04em",
              }}
            >
              Notre indépendance d&apos;auditeur,
              <br />
              <span className="it text-[var(--color-accent)] font-normal">
                pierre angulaire de notre modèle.
              </span>
            </h1>
            <p className="text-[19px] text-white/[0.78] mt-8 max-w-[680px] leading-[1.55] reveal">
              La norme NF EN 16247-1 §4.4 impose une stricte séparation entre
              l&apos;auditeur énergétique et le vendeur de travaux. La plupart des
              acteurs du marché logent les deux activités dans la même entité.
              Pas nous.
            </p>
          </div>
        </section>

        {/* Bloc 2 — Norme */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <div className="max-w-[860px]">
              <span className="eyebrow reveal">L&apos;exigence normative</span>
              <h2 className="section-title reveal">
                Ce que dit la <span className="it">norme NF EN 16247-1.</span>
              </h2>
              <blockquote className="mt-12 it text-[clamp(24px,2.4vw,32px)] text-[var(--color-primary)] leading-[1.35] border-l-4 border-[var(--color-accent)] pl-8 reveal">
                « L&apos;auditeur énergétique doit être indépendant des activités
                auditées et notamment des fournisseurs de services et
                d&apos;équipements énergétiques. »
              </blockquote>
              <p className="mt-8 text-[17px] text-[var(--color-text-2)] leading-[1.6] reveal">
                Cette exigence n&apos;est pas optionnelle. Elle est inscrite dans la
                norme de référence européenne, transposée en droit français, et
                opposable en cas de contrôle PNCEE ou ADEME.
              </p>
            </div>
          </div>
        </section>

        {/* Bloc 3 — Problème du marché */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <div className="bg-[var(--color-pastel-orange)] rounded-3xl py-16 px-14 relative overflow-hidden max-[1100px]:py-12 max-[1100px]:px-8 reveal">
              <div
                className="absolute w-[480px] h-[480px] rounded-full pointer-events-none -top-[180px] -right-[180px]"
                style={{
                  background:
                    "radial-gradient(circle, #FF8B6B 0%, #F7A85A 60%, transparent 100%)",
                  filter: "blur(80px)",
                  opacity: 0.5,
                }}
              />
              <div className="relative z-[1] max-w-[860px]">
                <span className="eyebrow">Le problème du marché</span>
                <h2 className="section-title">
                  Pourquoi la plupart des acteurs <span className="it">ne respectent pas vraiment cette exigence.</span>
                </h2>
                <p className="text-[17px] text-[var(--color-text-2)] mt-7 leading-[1.6] max-w-[680px]">
                  Le marché de l&apos;audit énergétique est majoritairement tenu
                  par des acteurs intégrés : ils réalisent l&apos;audit, prescrivent
                  les travaux, vendent les solutions techniques et touchent une
                  commission sur ces travaux. Toutes ces activités sont logées
                  dans la même entité juridique.
                </p>
                <h3 className="mono text-[12px] tracking-[0.12em] uppercase text-[var(--color-primary)] mt-10 mb-4">
                  Conséquences directes
                </h3>
                <ul className="grid grid-cols-2 gap-4 list-none p-0 max-sm:grid-cols-1">
                  {PROBLEMES.map((p) => (
                    <li
                      key={p}
                      className="flex gap-3 items-start py-4 px-5 bg-white/60 backdrop-blur-md rounded-xl text-[15px] text-[var(--color-text)]"
                    >
                      <span className="text-[var(--color-error)] font-bold shrink-0 mt-px">
                        ✕
                      </span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Bloc 4 — Notre architecture juridique (schéma) */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <span className="eyebrow reveal">Notre architecture juridique</span>
            <h2 className="section-title reveal">
              Notre réponse : <span className="it">deux entités juridiquement distinctes.</span>
            </h2>
            <p className="section-lede reveal">
              Vous signez deux contrats avec deux personnes morales différentes.
              Aucun flux financier direct entre elles au titre du même dossier.
            </p>

            <div className="mt-16 max-w-[920px] mx-auto reveal">
              <ArchitectureDiagram />
            </div>
          </div>
        </section>

        {/* Bloc 5 — 4 garanties */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <span className="eyebrow reveal">Pour vous, en pratique</span>
            <h2 className="section-title reveal">
              Quatre garanties <span className="it">concrètes.</span>
            </h2>
            <div className="grid grid-cols-2 gap-7 mt-16 max-[1100px]:grid-cols-1">
              {GARANTIES.map((g, i) => (
                <div
                  key={g.title}
                  className="bg-white border border-[var(--color-border)] rounded-2xl p-9 transition-all hover:border-[var(--color-primary)] hover:-translate-y-1 reveal"
                >
                  <div
                    className="it text-[40px] text-[var(--color-secondary)] leading-none"
                    style={{ fontFeatureSettings: '"tnum" 1' }}
                  >
                    0{i + 1}
                  </div>
                  <h3 className="text-[22px] font-bold tracking-[-0.025em] mt-4 text-[var(--color-primary)]">
                    {g.title}
                  </h3>
                  <p className="text-[15px] text-[var(--color-text-2)] mt-3 leading-[1.55]">
                    {g.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bloc 6 — Charte */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <div className="bg-[var(--color-primary)] text-white rounded-[32px] p-20 relative overflow-hidden grid grid-cols-[1.2fr_1fr] gap-16 items-center reveal max-[1100px]:grid-cols-1 max-[1100px]:p-12">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(55% 70% at 92% 8%, rgba(245,197,24,0.22), transparent 65%), radial-gradient(50% 70% at 5% 100%, rgba(0,168,107,0.20), transparent 65%)",
                }}
              />
              <div className="relative z-[1]">
                <span className="eyebrow text-white/60 before:bg-white/30">
                  Notre engagement formalisé
                </span>
                <h2
                  className="font-bold tracking-[-0.035em] leading-[1.04] mt-5"
                  style={{ fontSize: "clamp(32px, 2.8vw, 44px)" }}
                >
                  Notre charte
                  <br />
                  <span className="it text-[var(--color-accent)]">
                    d&apos;indépendance.
                  </span>
                </h2>
                <p className="text-[17px] text-white/[0.78] mt-5 leading-[1.55] max-w-[480px]">
                  Contractuelle, opposable, publiée. Elle reprend les
                  4 garanties ci-dessus et engage juridiquement Agence 3E à
                  l&apos;égard de chaque client.
                </p>
              </div>
              <div className="relative z-[1] flex flex-col gap-4 max-sm:items-stretch">
                <Link
                  href="/contact"
                  className="btn btn-arrow inline-flex justify-center"
                  style={{ background: "var(--color-secondary)", color: "#fff" }}
                >
                  Télécharger notre charte (PDF)
                </Link>
                <Link
                  href="/comprendre/independance-auditeur-nf-en-16247"
                  className="btn btn-secondary inline-flex justify-center"
                >
                  Approfondir la norme NF EN 16247
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

function ArchitectureDiagram() {
  return (
    <div className="bg-white border border-[var(--color-border)] rounded-[24px] p-12 max-sm:p-7">
      {/* Client */}
      <div className="text-center">
        <div className="inline-block py-3 px-7 bg-[var(--color-primary)] text-white rounded-full text-[15px] font-semibold tracking-[-0.01em]">
          Vous (client industriel ou tertiaire)
        </div>
      </div>
      {/* V split */}
      <div className="relative mt-3 h-12 max-sm:h-8">
        <div className="absolute left-1/2 top-0 w-px h-3 bg-[var(--color-border)]" />
        <div className="absolute left-1/4 right-1/4 top-3 h-px bg-[var(--color-border)] max-sm:left-[12%] max-sm:right-[12%]" />
        <div className="absolute left-1/4 top-3 w-px h-9 bg-[var(--color-border)] max-sm:left-[12%] max-sm:h-5" />
        <div className="absolute right-1/4 top-3 w-px h-9 bg-[var(--color-border)] max-sm:right-[12%] max-sm:h-5" />
      </div>
      {/* Contracts row */}
      <div className="grid grid-cols-2 gap-12 max-sm:gap-4">
        <div className="text-center">
          <span className="mono text-[11px] tracking-[0.08em] uppercase text-[var(--color-text-3)]">
            Contrat n°1 — audit
          </span>
        </div>
        <div className="text-center">
          <span className="mono text-[11px] tracking-[0.08em] uppercase text-[var(--color-text-3)]">
            Contrat n°2 — AMO + CEE
          </span>
        </div>
      </div>
      {/* Two entities */}
      <div className="grid grid-cols-2 gap-12 mt-4 max-sm:gap-4">
        <div className="bg-[var(--color-pastel-blue)] rounded-2xl p-6 text-center">
          <div className="mono text-[10px] tracking-[0.1em] uppercase text-[var(--color-text-3)]">
            Entité 1
          </div>
          <div className="text-[18px] font-bold text-[var(--color-primary)] mt-2 tracking-[-0.02em]">
            Agence 3E Audit
          </div>
          <div className="it text-[15px] text-[var(--color-primary)] mt-1">
            Bureau d&apos;études
          </div>
        </div>
        <div className="bg-[var(--color-pastel-green)] rounded-2xl p-6 text-center">
          <div className="mono text-[10px] tracking-[0.1em] uppercase text-[var(--color-text-3)]">
            Entité 2
          </div>
          <div className="text-[18px] font-bold text-[var(--color-primary)] mt-2 tracking-[-0.02em]">
            Agence 3E Solutions
          </div>
          <div className="it text-[15px] text-[var(--color-primary)] mt-1">
            Hub commercial
          </div>
        </div>
      </div>
      {/* Mention barrière */}
      <div className="mt-8 text-center">
        <div className="inline-flex items-center gap-2 mono text-[11px] tracking-[0.08em] uppercase text-[var(--color-error)] py-2 px-4 bg-[#fbe9e9] rounded-full">
          <span>⊘</span>
          Aucun flux financier direct entre les deux entités au titre du même dossier
        </div>
      </div>
    </div>
  );
}
