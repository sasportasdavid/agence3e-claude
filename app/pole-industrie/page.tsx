import type { Metadata } from "next";
import { AuroreDefs } from "@/components/AuroreDefs";
import { RevealRoot } from "@/components/Reveal";
import { Topbar } from "@/components/Topbar";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PageDivider } from "@/components/PageDivider";
import { PIHero } from "@/components/sections/pole-industrie/PIHero";
import { PIDDADUE } from "@/components/sections/pole-industrie/PIDDADUE";
import { PISecteurs } from "@/components/sections/pole-industrie/PISecteurs";
import { PIMethode } from "@/components/sections/pole-industrie/PIMethode";
import { PIAMO } from "@/components/sections/pole-industrie/PIAMO";
import { PICatalogue } from "@/components/sections/pole-industrie/PICatalogue";
import { PIForm } from "@/components/sections/pole-industrie/PIForm";
import { PIFAQ } from "@/components/sections/pole-industrie/PIFAQ";
import { breadcrumb, divider } from "@/content/poleIndustrie";

export const metadata: Metadata = {
  title:
    "Pôle Industrie — Audit DDADUE, primes CEE optimisées | Agence 3E",
  description:
    "Audit DDADUE conforme NF EN 16247-3 pour industriels français. 218 fiches CEE actives, 40+ sectorielles industrie. Huit secteurs couverts à parité (agroalimentaire, plasturgie, blanchisserie, métallurgie, chimie-pharma-cosmétique, imprimerie, bois-papier-carton, verre-céramique). Montage CEE en compétition, AMO travaux jusqu'à la mise en service.",
  alternates: { canonical: "/pole-industrie" },
};

export default function PoleIndustriePage() {
  return (
    <>
      <AuroreDefs />
      <Topbar />
      <SiteHeader />
      <Breadcrumb items={breadcrumb} />
      <main>
        <PIHero />
        <PIDDADUE />
        <PISecteurs />
        <PIMethode />
        <PIAMO />
        <PICatalogue />
        <PIForm />
        <PIFAQ />
      </main>
      <PageDivider
        eyebrow={divider.eyebrow}
        titleLead={divider.title.lead}
        titleIt={divider.title.it}
        body={divider.body}
        cta={divider.cta}
        href={divider.href}
      />
      <SiteFooter />
      <StickyMobileCTA />
      <RevealRoot />
    </>
  );
}
