import { AuroreDefs } from "@/components/AuroreDefs";
import { RevealRoot } from "@/components/Reveal";
import { Topbar } from "@/components/Topbar";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { Aurore } from "@/components/Aurore";

export default function AProposLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AuroreDefs />
      <Topbar />
      <SiteHeader />
      <main>
        <div className="relative">
          <div className="absolute inset-x-0 top-0 h-[600px] opacity-35 pointer-events-none -z-[1]">
            <Aurore variant="ressources" className="w-full h-full" />
          </div>
          <article className="container-x py-16 max-w-[820px] !mx-auto">
            {children}
          </article>
        </div>
      </main>
      <SiteFooter />
      <StickyMobileCTA />
      <RevealRoot />
    </>
  );
}
