import type { Metadata } from "next";
import { AuroreDefs } from "@/components/AuroreDefs";
import { RevealRoot } from "@/components/Reveal";
import { Topbar } from "@/components/Topbar";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { Aurore } from "@/components/Aurore";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CasesList } from "./CasesList";

export const metadata: Metadata = {
  title: "Études de cas — 12 dossiers récents | Agence 3E",
  description:
    "12 cas clients audités, montés en CEE et accompagnés en AMO travaux. Industrie, tertiaire, copropriétés, outre-mer. Chiffres défendables, fiches CEE référencées.",
  alternates: { canonical: "/ressources/etudes-de-cas" },
};

export default function CasesPage() {
  return (
    <>
      <AuroreDefs />
      <Topbar />
      <SiteHeader />
      <Breadcrumb
        items={[
          { href: "/", label: "Accueil" },
          { href: "/", label: "Ressources" },
          { label: "Études de cas" },
        ]}
      />

      <main>
        {/* Hero */}
        <section className="relative pt-[60px] pb-[var(--spacing-block-sm)] overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-[600px] opacity-45 pointer-events-none -z-[1]">
            <Aurore variant="ressources" className="w-full h-full" />
          </div>
          <div className="container-x">
            <span className="eyebrow reveal">Études de cas · Format unique</span>
            <h1
              className="display reveal mt-6"
              style={{
                fontSize: "clamp(48px, 5.4vw, 72px)",
                lineHeight: 1.04,
                letterSpacing: "-0.04em",
              }}
            >
              Douze dossiers récents,
              <br />
              <span className="it">chiffres défendables.</span>
            </h1>
            <p className="text-[19px] text-[var(--color-text-2)] mt-7 max-w-[680px] leading-[1.55] reveal">
              Industrie, tertiaire, copropriétés, outre-mer. Chaque cas
              comprend les chiffres clés (investissement, prime CEE, ROI), le
              récit, le verbatim client. Filtres par segment ci-dessous.
            </p>
          </div>
        </section>

        {/* Liste filtrable */}
        <section className="pb-[var(--spacing-block)]">
          <CasesList />
        </section>
      </main>

      <SiteFooter />
      <StickyMobileCTA />
      <RevealRoot />
    </>
  );
}
