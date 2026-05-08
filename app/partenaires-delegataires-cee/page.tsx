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

const PARTNERS = [
  {
    name: "TotalEnergies",
    role: "Obligé historique, dépose ses propres CEE et rachète ceux de partenaires.",
  },
];

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

        {/* Partenaires actuels */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <span className="eyebrow reveal">Nos partenaires actuels</span>
            <h2 className="section-title reveal">
              Notre <span className="it">portefeuille délégataires.</span>
            </h2>
            <div className="grid grid-cols-3 gap-6 mt-12 max-[1100px]:grid-cols-1">
              {PARTNERS.map((p) => (
                <div
                  key={p.name}
                  className="bg-white border border-[var(--color-border)] rounded-2xl p-7 reveal"
                >
                  <div className="w-14 h-14 rounded-xl bg-[var(--color-primary)] flex items-center justify-center text-white font-bold text-[14px]">
                    {p.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")
                      .slice(0, 3)
                      .toUpperCase()}
                  </div>
                  <h3 className="text-[18px] font-semibold tracking-[-0.02em] mt-5 text-[var(--color-primary)]">
                    {p.name}
                  </h3>
                  <p className="text-[14.5px] text-[var(--color-text-2)] mt-3 leading-[1.55]">
                    {p.role}
                  </p>
                </div>
              ))}
              {[...Array(4)].map((_, i) => (
                <div
                  key={`placeholder-${i}`}
                  className="bg-[var(--color-pastel-yellow)] border border-dashed border-[var(--color-text-3)] rounded-2xl p-7 reveal flex flex-col justify-center items-center text-center min-h-[200px]"
                >
                  <span className="mono text-[10.5px] tracking-[0.08em] uppercase text-[var(--color-text-3)]">
                    Logo {i + 2}
                  </span>
                  <p className="it text-[15px] text-[var(--color-primary)] mt-3">
                    À ajouter
                  </p>
                </div>
              ))}
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
