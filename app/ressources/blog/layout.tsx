/**
 * /ressources/blog/[article] — wrapper qui réutilise le layout long-form
 * MDX (sidebar éditoriale, max-width 820px).
 */
import { AuroreDefs } from "@/components/AuroreDefs";
import { RevealRoot } from "@/components/Reveal";
import { Topbar } from "@/components/Topbar";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AuroreDefs />
      <Topbar />
      <SiteHeader />
      {children}
      <SiteFooter />
      <StickyMobileCTA />
      <RevealRoot />
    </>
  );
}
