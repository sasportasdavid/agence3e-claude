/**
 * Page test temporaire — refonte Home v3 (Phase A).
 * À supprimer en Phase D §D.5.
 *
 * Affiche les 3 nouveaux composants v3 côte à côte pour validation
 * visuelle avant recomposition de app/page.tsx.
 */

import { AuroreDefs } from "@/components/AuroreDefs";
import { RevealRoot } from "@/components/Reveal";
import { Topbar } from "@/components/Topbar";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

import { HeroV3 } from "@/components/sections/home/HeroV3";
import { PilierV3 } from "@/components/sections/home/PilierV3";
import { SimulateurEncart } from "@/components/sections/home/SimulateurEncart";
import { TriplePromesseV3 } from "@/components/sections/home/TriplePromesseV3";
import { SelecteurPersonas } from "@/components/sections/home/SelecteurPersonas";
import { EncartDDADUE } from "@/components/sections/home/EncartDDADUE";
import { CasesGrille } from "@/components/sections/home/CasesGrille";
import { HowSection } from "@/components/sections/HowSection";
import { ResourcesSection } from "@/components/sections/ResourcesSection";

export const metadata = {
  title: "Home v3 — preview (test page)",
  robots: { index: false, follow: false },
};

export default function TestHomeV3() {
  return (
    <>
      <AuroreDefs />
      <Topbar />
      <SiteHeader />
      <main>
        {/* Ordre Phase D §D.3 (anticipé en page de test) */}
        <HeroV3 />
        <PilierV3 />
        <SimulateurEncart />
        <TriplePromesseV3 />
        <SelecteurPersonas />
        <EncartDDADUE />
        <CasesGrille />
        <HowSection />
        <ResourcesSection />
      </main>
      <SiteFooter />
      <StickyMobileCTA />
      <RevealRoot />
    </>
  );
}
