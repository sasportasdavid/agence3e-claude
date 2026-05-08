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
import { SERVICES } from "@/content/services";

export const metadata: Metadata = {
  title: "Nos 12 services — Audit, CEE, AMO, ISO 50001 | Agence 3E",
  description:
    "Audit DDADUE, ISO 50001, montage CEE, courtage, AMO travaux, mise en relation RGE, décret tertiaire/BACS, bilan carbone… 12 services autour de la performance énergétique.",
  alternates: { canonical: "/services" },
};

export default function ServicesIndex() {
  return (
    <>
      <AuroreDefs />
      <Topbar />
      <SiteHeader />
      <Breadcrumb
        items={[
          { href: "/", label: "Accueil" },
          { label: "Services" },
        ]}
      />

      <main>
        <section className="relative pt-[60px] pb-[var(--spacing-block-sm)] overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-[600px] opacity-50 pointer-events-none -z-[1]">
            <Aurore variant="ressources" className="w-full h-full" />
          </div>
          <div className="container-x">
            <span className="eyebrow reveal">12 services · Cabinet de conseil</span>
            <h1
              className="display reveal mt-6"
              style={{
                fontSize: "clamp(48px, 5.4vw, 76px)",
                lineHeight: 1.04,
                letterSpacing: "-0.04em",
              }}
            >
              Nos services
              <br />
              <span className="it">de A à Z.</span>
            </h1>
            <p className="text-[19px] text-[var(--color-text-2)] mt-7 max-w-[680px] leading-[1.55] reveal">
              De l&apos;audit DDADUE au pilotage AMO travaux, en passant par
              ISO 50001, le courtage CEE et le décret tertiaire. Un seul
              interlocuteur sur tout le cycle.
            </p>
          </div>
        </section>

        <section className="pb-[var(--spacing-block)]">
          <div className="container-x">
            <div className="grid grid-cols-3 gap-7 max-[1100px]:grid-cols-2 max-sm:grid-cols-1">
              {SERVICES.map((s, i) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="bg-white border border-[var(--color-border)] rounded-2xl p-7 transition-all hover:border-[var(--color-primary)] hover:-translate-y-1 reveal flex flex-col min-h-[220px]"
                >
                  <span
                    className="it text-[28px] text-[var(--color-secondary)] leading-none"
                    style={{ fontFeatureSettings: '"tnum" 1' }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-[18px] font-bold tracking-[-0.02em] leading-[1.25] mt-4 text-[var(--color-primary)]">
                    {s.nav}
                  </h2>
                  <p className="text-[13.5px] text-[var(--color-text-2)] mt-3 leading-[1.55] line-clamp-3">
                    {s.hero.sub}
                  </p>
                  <span className="mono text-[11px] text-[var(--color-secondary)] mt-auto pt-5">
                    Découvrir →
                  </span>
                </Link>
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
