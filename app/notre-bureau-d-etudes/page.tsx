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
    "Notre bureau d'études Agence 3E Audit | Auditeur certifié OPQIBI",
  description:
    "Présentation de notre bureau d'études interne. Auditeur certifié OPQIBI 1905, conformité NF EN 16247, entité juridique distincte (Agence 3E Audit).",
  alternates: { canonical: "/notre-bureau-d-etudes" },
};

const CERTIFS = [
  { code: "OPQIBI 1905", title: "Audit énergétique des bâtiments" },
  { code: "OPQIBI 1907", title: "Audit énergétique de l'industrie", note: "à confirmer selon profil" },
  { code: "OPQIBI 1911", title: "Audit énergétique des maisons individuelles" },
  { code: "RGE Études", title: "Reconnu Garant de l'Environnement" },
  { code: "ATEE", title: "Membre Association Technique Énergie Environnement" },
];

const NORMES = [
  { code: "NF EN 16247-1", title: "Exigences générales pour audit énergétique" },
  { code: "NF EN 16247-3", title: "Audit énergétique de procédés (industrie)" },
  { code: "NF EN 16247-4", title: "Audit énergétique transports" },
  { code: "ISO 50001", title: "Articulation avec les SMÉ certifiés" },
  { code: "NF EN 17463", title: "Évaluation des décisions d'investissement liées à l'énergie" },
];

const ENGAGEMENTS = [
  { duration: "24 h", label: "Pré-qualification", desc: "Retour sous 24h ouvrées" },
  { duration: "48 h", label: "Devis ferme", desc: "Sous 48h après pré-qualification" },
  { duration: "4 sem.", label: "Visite de site", desc: "Programmée sous 4 semaines après signature" },
  { duration: "25 j", label: "Rapport d'audit", desc: "Livré sous 25 jours après visite" },
  { duration: "—", label: "Dépôt AIDER", desc: "Dans les délais réglementaires, garanti" },
];

export default function NotreBureauPage() {
  return (
    <>
      <AuroreDefs />
      <Topbar />
      <SiteHeader />
      <Breadcrumb
        items={[
          { href: "/", label: "Accueil" },
          { href: "/", label: "Cabinet" },
          { label: "Notre bureau d'études" },
        ]}
      />

      <main>
        {/* Hero */}
        <section className="relative pt-[60px] pb-[var(--spacing-block-sm)] overflow-hidden">
          <div className="absolute right-0 top-0 w-[55%] h-[700px] opacity-50 pointer-events-none -z-[1] max-[1100px]:opacity-25">
            <Aurore variant="reglementation" className="w-full h-full" />
          </div>
          <div className="container-x">
            <div className="max-w-[820px]">
              <span className="eyebrow reveal">
                Cabinet · Bureau d&apos;études interne
              </span>
              <h1
                className="display reveal mt-6"
                style={{
                  fontSize: "clamp(40px, 4.6vw, 64px)",
                  lineHeight: 1.04,
                  letterSpacing: "-0.04em",
                }}
              >
                Notre bureau d&apos;études : Agence 3E Audit,
                <br />
                <span className="it">entité dédiée.</span>
              </h1>
              <p className="text-[19px] text-[var(--color-text-2)] mt-7 max-w-[680px] leading-[1.55] reveal">
                Le bureau d&apos;études du groupe est une entité juridique
                distincte de l&apos;entité commerciale, conformément à
                l&apos;exigence d&apos;indépendance auditeur posée par
                NF EN 16247-3. Cette organisation est documentée sur la page
                Gouvernance.
              </p>
              <div className="mt-10 reveal">
                <Link
                  href="/a-propos/notre-independance"
                  className="btn btn-secondary btn-arrow"
                >
                  Voir la page Gouvernance
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Auditeur certifié — placeholder portrait */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <div className="grid grid-cols-[1fr_1.4fr] gap-16 items-start max-[1100px]:grid-cols-1 max-[1100px]:gap-8">
              <div>
                <span className="eyebrow reveal">L&apos;auditeur certifié</span>
                <h2 className="section-title reveal">
                  Notre auditeur <span className="it">certifié.</span>
                </h2>
              </div>
              <div className="bg-[var(--color-pastel-blue)] rounded-3xl p-10 reveal max-w-[640px]">
                <div className="w-20 h-20 rounded-full bg-[var(--color-primary)] flex items-center justify-center it text-[28px] text-white mb-6">
                  A3E
                </div>
                <p className="it text-[17px] text-[var(--color-primary)] leading-[1.6]">
                  [Photo professionnelle, biographie courte de l&apos;associé
                  certifié — parcours, années d&apos;expérience industrielle,
                  secteurs maîtrisés, formations continues. Format 5–8 lignes.]
                </p>
                <p className="mono text-[11px] text-[var(--color-text-3)] tracking-[0.08em] uppercase mt-5">
                  Section à compléter par votre équipe
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <span className="eyebrow reveal">Certifications</span>
            <h2 className="section-title reveal">
              Nos certifications <span className="it">et qualifications.</span>
            </h2>
            <div className="grid grid-cols-3 gap-5 mt-12 max-[1100px]:grid-cols-2 max-sm:grid-cols-1">
              {CERTIFS.map((c) => (
                <div
                  key={c.code}
                  className="bg-white border border-[var(--color-border)] rounded-2xl p-7 reveal"
                >
                  <span className="mono text-[12px] text-[var(--color-primary)] bg-[var(--color-secondary-10)] py-1 px-2.5 rounded inline-block">
                    {c.code}
                  </span>
                  <h3 className="text-[16px] font-semibold tracking-[-0.015em] mt-4 text-[var(--color-primary)]">
                    {c.title}
                  </h3>
                  {c.note && (
                    <p className="mono text-[10.5px] text-[var(--color-text-3)] mt-2 italic">
                      {c.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-8 max-w-[680px] reveal">
              <p className="text-[15px] text-[var(--color-text-2)] leading-[1.6]">
                Nous préparons par ailleurs notre agrément délégataire CEE
                auprès du PNCEE, à horizon 12-18 mois.
              </p>
            </div>
          </div>
        </section>

        {/* Pourquoi entité séparée */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <div className="bg-[var(--color-primary)] text-white rounded-[32px] p-16 relative overflow-hidden reveal max-[1100px]:p-10">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(55% 70% at 92% 8%, rgba(245,197,24,0.22), transparent 65%)",
                }}
              />
              <div className="relative z-[1]">
                <span className="eyebrow text-white/60 before:bg-white/30">
                  Conformité NF EN 16247-3
                </span>
                <h2
                  className="font-bold tracking-[-0.035em] mt-5"
                  style={{ fontSize: "clamp(28px, 2.8vw, 44px)" }}
                >
                  Pourquoi une entité juridique
                  <br />
                  <span className="it text-[var(--color-accent)]">séparée.</span>
                </h2>
                <p className="text-[18px] text-white/[0.78] mt-6 leading-[1.6] max-w-[680px]">
                  L&apos;auditeur d&apos;Agence 3E Audit ne perçoit aucune
                  commission sur les travaux qu&apos;il recommande. Il signe
                  son rapport en propre, engage sa responsabilité civile
                  professionnelle directement. Cette organisation respecte
                  l&apos;exigence d&apos;indépendance posée par la norme
                  NF EN 16247-3 et conditionne la recevabilité de
                  l&apos;audit par l&apos;administration en cas de contrôle.
                </p>
                <Link
                  href="/a-propos/notre-independance"
                  className="btn btn-arrow mt-8 inline-flex"
                  style={{ background: "var(--color-secondary)", color: "#fff" }}
                >
                  Voir la page Gouvernance
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Normes */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <span className="eyebrow reveal">Conformité méthodologique</span>
            <h2 className="section-title reveal">
              Les normes <span className="it">que nous respectons.</span>
            </h2>
            <div className="mt-12 bg-white border border-[var(--color-border)] rounded-2xl overflow-hidden reveal">
              {NORMES.map((n, i) => (
                <div
                  key={n.code}
                  className={`grid grid-cols-[180px_1fr] gap-6 py-5 px-7 items-center hover:bg-[#fafbfc] transition-colors ${
                    i < NORMES.length - 1
                      ? "border-b border-[var(--color-border-2)]"
                      : ""
                  } max-sm:grid-cols-1 max-sm:gap-1`}
                >
                  <span className="mono text-[12.5px] text-[var(--color-primary)] font-medium tracking-[0.04em] bg-[var(--color-secondary-10)] py-1 px-2.5 rounded w-fit">
                    {n.code}
                  </span>
                  <span className="text-[15.5px] text-[var(--color-text)]">
                    {n.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Outillage placeholder */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <span className="eyebrow reveal">Outillage technique</span>
            <h2 className="section-title reveal">
              Notre matériel <span className="it">d&apos;audit.</span>
            </h2>
            <div className="mt-10 bg-[var(--color-pastel-yellow)] rounded-2xl p-9 max-w-[860px] reveal">
              <p className="it text-[17px] text-[var(--color-primary)] leading-[1.6]">
                Liste exhaustive à compléter selon votre matériel réel : pinces
                ampèremétriques, débitmètres, caméras thermiques, analyseurs de
                combustion, logiciels de modélisation. Marques et modèles pour
                crédibilité.
              </p>
              <p className="mono text-[11px] text-[var(--color-text-3)] tracking-[0.08em] uppercase mt-4">
                Section à compléter par votre équipe
              </p>
            </div>
          </div>
        </section>

        {/* Engagements de délais */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <span className="eyebrow reveal">Engagements de délais</span>
            <h2 className="section-title reveal">
              Nos engagements <span className="it">contractuels.</span>
            </h2>
            <div className="grid grid-cols-5 gap-4 mt-12 max-[1100px]:grid-cols-2 max-sm:grid-cols-1">
              {ENGAGEMENTS.map((e) => (
                <div
                  key={e.label}
                  className="bg-white border border-[var(--color-border)] rounded-2xl p-6 reveal"
                >
                  <div
                    className="it text-[clamp(28px,2.4vw,40px)] text-[var(--color-secondary)] leading-none"
                    style={{ fontFeatureSettings: '"tnum" 1' }}
                  >
                    {e.duration}
                  </div>
                  <h3 className="text-[14px] font-semibold tracking-[-0.015em] mt-3 text-[var(--color-primary)]">
                    {e.label}
                  </h3>
                  <p className="text-[12.5px] text-[var(--color-text-2)] mt-2 leading-[1.5]">
                    {e.desc}
                  </p>
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
