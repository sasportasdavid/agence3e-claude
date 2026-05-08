import { AuroreDefs } from "@/components/AuroreDefs";
import { Topbar } from "@/components/Topbar";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  /* Pages légales : layout sobre, sans aurore. */
  return (
    <>
      <AuroreDefs />
      <Topbar />
      <SiteHeader />
      <main>
        <article className="container-x py-16 max-w-[820px] !mx-auto">
          {children}
        </article>
      </main>
      <SiteFooter />
      <StickyMobileCTA />
    </>
  );
}
