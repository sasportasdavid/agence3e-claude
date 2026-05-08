import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { AuroreDefs } from "@/components/AuroreDefs";
import { RevealRoot } from "@/components/Reveal";
import { Topbar } from "@/components/Topbar";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { Aurore } from "@/components/Aurore";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SUBS, SUBS_BY_SLUG } from "@/content/poleTertiaireSubs";

export function generateStaticParams() {
  return SUBS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const sub = SUBS_BY_SLUG[slug];
  if (!sub) return {};
  return {
    title: sub.meta.title,
    description: sub.meta.description,
    alternates: { canonical: `/pole-tertiaire/${slug}` },
  };
}

export default async function SubTertiairePage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const sub = SUBS_BY_SLUG[slug];
  if (!sub) notFound();

  return (
    <>
      <AuroreDefs />
      <Topbar />
      <SiteHeader />
      <Breadcrumb
        items={[
          { href: "/", label: "Accueil" },
          { href: "/", label: "Pôles d'expertise" },
          { href: "/pole-tertiaire", label: "Tertiaire" },
          { label: sub.nav },
        ]}
      />

      <main>
        {/* Hero */}
        <section className="relative pt-[60px] pb-[var(--spacing-block-sm)] overflow-hidden">
          <div className="absolute right-0 top-0 w-[55%] h-[600px] opacity-55 pointer-events-none -z-[1] max-[1100px]:opacity-30">
            <Aurore variant="tertiaire" className="w-full h-full" />
          </div>
          <div className="container-x">
            <div className="max-w-[820px]">
              <span className="eyebrow reveal">
                Vertical tertiaire · {sub.nav}
              </span>
              <h1
                className="display reveal mt-6"
                style={{
                  fontSize: "clamp(36px, 4.2vw, 60px)",
                  lineHeight: 1.04,
                  letterSpacing: "-0.04em",
                }}
              >
                {sub.h1.split(" ").slice(0, -2).join(" ")}{" "}
                <span className="it">
                  {sub.h1.split(" ").slice(-2).join(" ")}
                </span>
              </h1>
              <p className="text-[19px] text-[var(--color-text-2)] mt-7 max-w-[680px] leading-[1.55] reveal">
                {sub.sub}
              </p>
              <div className="mt-10 reveal">
                <Link href="/contact" className="btn btn-primary btn-arrow">
                  Pré-qualifier mon site {sub.nav.toLowerCase()}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Cadre réglementaire (si présent) */}
        {sub.cadre && (
          <section className="py-[var(--spacing-block-sm)]">
            <div className="container-x">
              <span className="eyebrow reveal">Cadre réglementaire applicable</span>
              <h2 className="section-title reveal">
                Trois cadres à articuler{" "}
                <span className="it">selon votre patrimoine.</span>
              </h2>
              <div className="grid grid-cols-3 gap-5 mt-12 max-[1100px]:grid-cols-1">
                {sub.cadre.map((c, i) => (
                  <div
                    key={c.label}
                    className="bg-[var(--color-pastel-blue)] rounded-2xl p-7 reveal"
                  >
                    <span
                      className="it text-[28px] text-[var(--color-primary)]"
                      style={{ fontFeatureSettings: '"tnum" 1' }}
                    >
                      0{i + 1}
                    </span>
                    <h3 className="font-bold text-[18px] tracking-[-0.015em] mt-3 text-[var(--color-primary)]">
                      {c.label}
                    </h3>
                    {c.threshold && (
                      <div className="mono text-[12px] text-[var(--color-text-2)] mt-2 tracking-[0.04em]">
                        {c.threshold}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Spécificité (si présente) */}
        {sub.specificite && (
          <section className="py-[var(--spacing-block-sm)]">
            <div className="container-x">
              <div className="bg-white border border-[var(--color-border)] border-l-[3px] border-l-[var(--color-secondary)] rounded-2xl p-10 max-w-[860px] reveal">
                <span className="eyebrow">Spécificité sectorielle</span>
                <h2 className="text-[28px] font-bold tracking-[-0.025em] leading-[1.2] mt-4 text-[var(--color-primary)]">
                  {sub.specificite.title}
                </h2>
                <p className="text-[16px] text-[var(--color-text-2)] mt-4 leading-[1.6]">
                  {sub.specificite.body}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Gisements CEE prioritaires */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <span className="eyebrow reveal">Gisements CEE prioritaires</span>
            <h2 className="section-title reveal">
              Les fiches qui paient le plus{" "}
              <span className="it">en {sub.nav.toLowerCase()}.</span>
            </h2>
            <div className="mt-12 bg-white border border-[var(--color-border)] rounded-2xl overflow-hidden reveal">
              {sub.fiches.map((f, i) => (
                <div
                  key={f.ref}
                  className={`grid grid-cols-[180px_1fr] gap-6 py-5 px-7 items-center hover:bg-[#fafbfc] transition-colors ${
                    i < sub.fiches.length - 1
                      ? "border-b border-[var(--color-border-2)]"
                      : ""
                  } max-sm:grid-cols-1 max-sm:gap-1`}
                >
                  <span className="mono text-[12.5px] text-[var(--color-primary)] font-medium tracking-[0.04em] bg-[var(--color-secondary-10)] py-1 px-2.5 rounded w-fit">
                    {f.ref}
                  </span>
                  <span className="text-[15.5px] text-[var(--color-text)]">
                    {f.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Étude de cas (si liée) */}
        {sub.cas && (
          <section className="py-[var(--spacing-block-sm)]">
            <div className="container-x">
              <div className="bg-[var(--color-pastel-violet)] rounded-3xl py-12 px-14 relative overflow-hidden reveal max-[1100px]:py-10 max-[1100px]:px-8">
                <div
                  className="absolute w-[400px] h-[400px] rounded-full pointer-events-none -bottom-[160px] -right-[160px]"
                  style={{
                    background:
                      "radial-gradient(circle, #9D7EDC 0%, #C9B5EE 60%, transparent 100%)",
                    filter: "blur(80px)",
                    opacity: 0.6,
                  }}
                />
                <div className="relative z-[1] flex justify-between items-center gap-6 flex-wrap">
                  <div>
                    <span className="eyebrow">Étude de cas associée</span>
                    <h3 className="text-[24px] font-bold tracking-[-0.025em] mt-3 text-[var(--color-primary)]">
                      {sub.cas.label}
                    </h3>
                    <span className="mono text-[11px] text-[var(--color-text-3)] tracking-[0.06em] mt-2 inline-block">
                      {sub.cas.ref}
                    </span>
                  </div>
                  <Link
                    href={`/ressources/etudes-de-cas/${sub.cas.ref.toLowerCase()}`}
                    className="btn btn-primary btn-arrow"
                  >
                    Lire le cas complet
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA final */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <div className="bg-[var(--color-primary)] text-white rounded-[32px] py-14 px-12 text-center relative overflow-hidden reveal max-[1100px]:py-10 max-[1100px]:px-7">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(60% 80% at 80% 20%, rgba(110,145,216,0.18), transparent 60%), radial-gradient(50% 60% at 20% 80%, rgba(139,125,216,0.16), transparent 60%)",
                }}
              />
              <div className="relative z-[1] max-w-[640px] mx-auto">
                <h2
                  className="font-bold tracking-[-0.035em]"
                  style={{ fontSize: "clamp(28px, 2.6vw, 40px)" }}
                >
                  Pré-qualifier mon site
                  <br />
                  <span className="it text-[var(--color-accent)]">
                    en 6 champs.
                  </span>
                </h2>
                <p className="text-[16px] text-white/70 mt-4">
                  Réponse sous 24 h ouvrées. Aucun engagement.
                </p>
                <Link
                  href="/contact"
                  className="btn btn-arrow mt-7 inline-flex"
                  style={{
                    background: "var(--color-secondary)",
                    color: "#fff",
                  }}
                >
                  Demander un rappel
                </Link>
              </div>
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
