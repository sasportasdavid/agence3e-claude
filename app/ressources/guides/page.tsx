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
  title: "Guides PDF — Audit, CEE, DDADUE | Agence 3E",
  description:
    "Guides PDF téléchargeables : DDADUE 2025 pour les industriels, kWh cumac, panorama des fiches CEE 6ᵉ période.",
  alternates: { canonical: "/ressources/guides" },
};

const GUIDES = [
  {
    title: "DDADUE 2025 — qui, quoi, quand. Le guide complet du dirigeant.",
    pages: "24 pages",
    audience: "Industriels & DAF",
    excerpt:
      "Tout ce qu'un dirigeant doit savoir sur la nouvelle loi : seuils, calendrier, sanctions, parcours type, articulation ISO 50001. PDF téléchargeable contre email.",
    tone: "rose" as const,
  },
  {
    title: "Le panorama des fiches CEE industrielles 6ᵉ période.",
    pages: "32 pages",
    audience: "Direction industrielle",
    excerpt:
      "Présentation systématique des 40+ fiches industrielles applicables : forfait kWh cumac, conditions, durée de vie, prime indicative.",
    tone: "blue" as const,
  },
  {
    title: "Calculer le kWh cumac et le ROI net post-CEE.",
    pages: "16 pages",
    audience: "Responsable performance",
    excerpt:
      "Tutoriel pas à pas avec exemples chiffrés sur les fiches IND-UT-117, IND-UT-103, IND-UT-137. Formules, tableaux Excel, méthodologie BE.",
    tone: "green" as const,
  },
];

const TONE_BG: Record<string, string> = {
  rose: "bg-[var(--color-pastel-rose)]",
  blue: "bg-[var(--color-pastel-blue)]",
  green: "bg-[var(--color-pastel-green)]",
};

export default function GuidesPage() {
  return (
    <>
      <AuroreDefs />
      <Topbar />
      <SiteHeader />
      <Breadcrumb
        items={[
          { href: "/", label: "Accueil" },
          { href: "/", label: "Ressources" },
          { label: "Guides" },
        ]}
      />

      <main>
        <section className="relative pt-[60px] pb-[var(--spacing-block-sm)] overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-[600px] opacity-45 pointer-events-none -z-[1]">
            <Aurore variant="ressources" className="w-full h-full" />
          </div>
          <div className="container-x">
            <span className="eyebrow reveal">Ressources · Guides PDF</span>
            <h1
              className="display reveal mt-6"
              style={{
                fontSize: "clamp(48px, 5.4vw, 72px)",
                lineHeight: 1.04,
                letterSpacing: "-0.04em",
              }}
            >
              Guides PDF
              <br />
              <span className="it">téléchargeables.</span>
            </h1>
            <p className="text-[19px] text-[var(--color-text-2)] mt-7 max-w-[680px] leading-[1.55] reveal">
              Documents pédagogiques de référence, téléchargeables contre une
              adresse email professionnelle. Aucune cession à des tiers.
            </p>
          </div>
        </section>

        <section className="pb-[var(--spacing-block)]">
          <div className="container-x">
            <div className="grid grid-cols-3 gap-7 max-[1100px]:grid-cols-1">
              {GUIDES.map((g, i) => (
                <div
                  key={g.title}
                  className={`relative rounded-3xl p-9 overflow-hidden flex flex-col min-h-[380px] reveal ${TONE_BG[g.tone]}`}
                >
                  <span className="mono text-[10.5px] tracking-[0.1em] uppercase text-[var(--color-text-2)]">
                    Guide {String(i + 1).padStart(2, "0")} · {g.pages}
                  </span>
                  <span className="mono text-[10.5px] text-[var(--color-text-3)] mt-1">
                    Audience : {g.audience}
                  </span>
                  <h2 className="text-[22px] font-bold tracking-[-0.025em] leading-[1.2] mt-5 text-[var(--color-primary)]">
                    {g.title}
                  </h2>
                  <p className="text-[14.5px] text-[var(--color-text-2)] mt-4 leading-[1.6]">
                    {g.excerpt}
                  </p>
                  <Link
                    href="/contact"
                    className="btn btn-primary btn-arrow mt-auto pt-7 inline-flex w-fit"
                  >
                    Télécharger le PDF
                  </Link>
                </div>
              ))}
            </div>
            <div className="mt-12 max-w-[680px] reveal">
              <p className="mono text-[11.5px] text-[var(--color-text-3)] tracking-[0.06em] uppercase">
                Pages à connecter à votre stack lead capture (Brevo, Resend,
                HubSpot…) — currently lien vers /contact.
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
