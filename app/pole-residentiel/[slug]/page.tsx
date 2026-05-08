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
import { SUBS_RES, SUBS_RES_BY_SLUG } from "@/content/poleResidentielSubs";

export function generateStaticParams() {
  return SUBS_RES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const sub = SUBS_RES_BY_SLUG[slug];
  if (!sub) return {};
  return {
    title: sub.meta.title,
    description: sub.meta.description,
    alternates: { canonical: `/pole-residentiel/${slug}` },
  };
}

export default async function SubResidentielPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const sub = SUBS_RES_BY_SLUG[slug];
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
          { href: "/pole-residentiel", label: "Résidentiel" },
          { label: sub.nav },
        ]}
      />

      <main>
        {/* Hero */}
        <section className="relative pt-[60px] pb-[var(--spacing-block-sm)] overflow-hidden">
          <div className="absolute right-0 top-0 w-[55%] h-[600px] opacity-55 pointer-events-none -z-[1] max-[1100px]:opacity-30">
            <Aurore variant="residentiel" className="w-full h-full" />
          </div>
          <div className="container-x">
            <div className="max-w-[820px]">
              <span className="eyebrow reveal">{sub.hero.eyebrow}</span>
              <h1
                className="display reveal mt-6"
                style={{
                  fontSize: "clamp(36px, 4.2vw, 56px)",
                  lineHeight: 1.06,
                  letterSpacing: "-0.04em",
                }}
              >
                {sub.hero.h1}
              </h1>
              <p className="text-[19px] text-[var(--color-text-2)] mt-7 max-w-[640px] leading-[1.55] reveal">
                {sub.hero.sub}
              </p>
              <div className="mt-10 reveal">
                <Link href="/contact" className="btn btn-primary btn-arrow">
                  Demander un devis sans engagement
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Blocks */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <div className="grid grid-cols-2 gap-7 max-[1100px]:grid-cols-1">
              {sub.blocks.map((b, i) => (
                <div
                  key={b.title}
                  className="bg-white border border-[var(--color-border)] rounded-2xl p-9 reveal hover:border-[var(--color-primary)] transition-colors"
                >
                  <span
                    className="it text-[36px] text-[var(--color-secondary)] leading-none"
                    style={{ fontFeatureSettings: '"tnum" 1' }}
                  >
                    0{i + 1}
                  </span>
                  <h3 className="text-[22px] font-bold tracking-[-0.025em] mt-4 text-[var(--color-primary)]">
                    {b.title}
                  </h3>
                  <p className="text-[15px] text-[var(--color-text-2)] mt-3 leading-[1.6]">
                    {b.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Étude de cas */}
        {sub.cas && (
          <section className="py-[var(--spacing-block-sm)]">
            <div className="container-x">
              <div className="bg-[var(--color-pastel-rose)] rounded-3xl py-12 px-14 relative overflow-hidden reveal max-[1100px]:py-10 max-[1100px]:px-8">
                <div
                  className="absolute w-[400px] h-[400px] rounded-full pointer-events-none -bottom-[160px] -left-[160px]"
                  style={{
                    background:
                      "radial-gradient(circle, #FF8FA3 0%, #FFB199 60%, transparent 100%)",
                    filter: "blur(80px)",
                    opacity: 0.55,
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
                  <Link href={sub.cas.href} className="btn btn-primary btn-arrow">
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
            <div className="bg-[var(--color-pastel-green)] rounded-[32px] py-14 px-12 text-center relative overflow-hidden reveal max-[1100px]:py-10 max-[1100px]:px-7">
              <div
                className="absolute w-[500px] h-[500px] rounded-full pointer-events-none -top-[180px] -left-[180px]"
                style={{
                  background:
                    "radial-gradient(circle, #6BCFA0 0%, #A8E0BC 60%, transparent 100%)",
                  filter: "blur(100px)",
                  opacity: 0.6,
                }}
              />
              <div className="relative z-[1] max-w-[640px] mx-auto">
                <h2
                  className="font-bold tracking-[-0.035em] text-[var(--color-primary)]"
                  style={{ fontSize: "clamp(28px, 2.6vw, 40px)" }}
                >
                  Vous nous appelez,
                  <br />
                  <span className="it">nous rappelons.</span>
                </h2>
                <p className="text-[16px] text-[var(--color-text-2)] mt-4">
                  Aucun démarchage. Réponse sous 24 h ouvrées.
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
