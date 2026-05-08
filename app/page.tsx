import { AuroreDefs } from "@/components/AuroreDefs";
import { RevealRoot } from "@/components/Reveal";
import { Topbar } from "@/components/Topbar";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { HeroSection } from "@/components/sections/HeroSection";
import { PilierSection } from "@/components/sections/PilierSection";
import { PromiseSection } from "@/components/sections/PromiseSection";
import { PolesSection } from "@/components/sections/PolesSection";
/* v2 — IndepSection retirée de la Home (cf. MENU_ET_HOME_V2.md modification 4).
   Le contenu est conservé sur la page dédiée /a-propos/notre-independance,
   accessible depuis le mega-menu Ressources et le footer. */
import { DDADUESection } from "@/components/sections/DDADUESection";
import { CasesSection } from "@/components/sections/CasesSection";
import { HowSection } from "@/components/sections/HowSection";
import { SimSection } from "@/components/sections/SimSection";
import { ResourcesSection } from "@/components/sections/ResourcesSection";

export default function Home() {
  return (
    <>
      <AuroreDefs />
      <Topbar />
      <SiteHeader />
      <main>
        <HeroSection />
        <PilierSection />
        <PromiseSection />
        <PolesSection />
        <DDADUESection />
        <CasesSection />
        <HowSection />
        <SimSection />
        <ResourcesSection />
      </main>
      <SiteFooter />
      <StickyMobileCTA />
      <RevealRoot />
    </>
  );
}
