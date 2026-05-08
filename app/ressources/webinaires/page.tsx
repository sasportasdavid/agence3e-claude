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
  title: "Webinaires — Audit DDADUE, CEE, ISO 50001 | Agence 3E",
  description:
    "Webinaires Agence 3E — sessions live et replays sur l'audit énergétique, les CEE, ISO 50001 et la performance industrielle.",
  alternates: { canonical: "/ressources/webinaires" },
};

export default function WebinairesPage() {
  return (
    <>
      <AuroreDefs />
      <Topbar />
      <SiteHeader />
      <Breadcrumb
        items={[
          { href: "/", label: "Accueil" },
          { href: "/", label: "Ressources" },
          { label: "Webinaires" },
        ]}
      />

      <main>
        <section className="relative pt-[60px] pb-[var(--spacing-block-sm)] overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-[600px] opacity-45 pointer-events-none -z-[1]">
            <Aurore variant="ressources" className="w-full h-full" />
          </div>
          <div className="container-x">
            <span className="eyebrow reveal">Ressources · Webinaires</span>
            <h1
              className="display reveal mt-6"
              style={{
                fontSize: "clamp(40px, 5vw, 64px)",
                lineHeight: 1.04,
                letterSpacing: "-0.04em",
              }}
            >
              Webinaires
              <br />
              <span className="it">live et replays.</span>
            </h1>
            <p className="text-[19px] text-[var(--color-text-2)] mt-7 max-w-[680px] leading-[1.55] reveal">
              Sessions techniques sur l&apos;audit énergétique DDADUE, le
              mécanisme CEE, ISO 50001 et la performance industrielle.
              Format : 30 minutes de présentation + 15 minutes de Q&amp;R.
            </p>
          </div>
        </section>

        <section className="pb-[var(--spacing-block-sm)]">
          <div className="container-x">
            <div className="bg-[var(--color-pastel-yellow)] rounded-3xl p-12 max-w-[860px] reveal">
              <span className="eyebrow">Programme à venir</span>
              <h2 className="text-[28px] font-bold tracking-[-0.025em] mt-4 text-[var(--color-primary)]">
                Premier webinaire <span className="it">en préparation.</span>
              </h2>
              <p className="text-[17px] text-[var(--color-text-2)] mt-5 leading-[1.6]">
                <strong className="text-[var(--color-primary)]">
                  DDADUE 2025 — comment se mettre en conformité avant le 11
                  octobre 2026
                </strong>{" "}
                · 45 minutes · Industriels et tertiaires assujettis
              </p>
              <p className="text-[15px] text-[var(--color-text-3)] mt-3 leading-[1.55]">
                Date à confirmer. Inscrivez-vous pour être notifié.
              </p>
              <Link
                href="/contact"
                className="btn btn-primary btn-arrow mt-7 inline-flex"
              >
                M&apos;inscrire à la newsletter
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-[var(--spacing-block)]">
          <div className="container-x">
            <div className="bg-[var(--color-pastel-blue)] rounded-2xl p-9 max-w-[860px] reveal">
              <span className="mono text-[10.5px] tracking-[0.1em] uppercase text-[var(--color-text-3)]">
                Page à compléter
              </span>
              <p className="text-[15px] text-[var(--color-text-2)] mt-3 leading-[1.6]">
                Connectez votre solution de webinaires (Livestorm, Zoom Webinar,
                On24, etc.) et ajoutez ici la grille des sessions à venir + les
                replays vidéo. La grille suivra le pattern d&apos;une liste
                filtrable comme le blog.
              </p>
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
