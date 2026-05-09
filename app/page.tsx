/**
 * Home v3 — recomposition complète, cf. brief §3 (sections) + §6.2.
 *
 * Ordre des sections :
 *   1. HeroV3                 — §3.1 (mockup triple)
 *   2. PilierV3                — §3.2 (3 chiffres DDADUE)
 *   3. SimulateurEncart        — §3.3 (encart vert remonté)
 *   4. TriplePromesseV3        — §3.4 (Anticipez / Allégez / Capturez)
 *   5. SelecteurPersonas       — §3.5 (3 personas, REMPLACE PolesSection)
 *   6. EncartDDADUE            — §3.6 (alerte 11 oct 2026, container 880)
 *   7. CasesGrille             — §3.7 (6 cards 3 cols + 4 filtres)
 *   8. HowSection              — §3.8 (timeline 4 étapes, container 880)
 *   9. ResourcesSection        — §3.9 (3 cards aller plus loin)
 *
 * Composants v2 retirés (HeroSection / PilierSection / PromiseSection /
 * PolesSection / DDADUESection / CasesSection / SimSection) sont supprimés
 * du repo via D.4.
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

export default function Home() {
  return (
    <>
      <AuroreDefs />
      <Topbar />
      <SiteHeader />
      <main>
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
