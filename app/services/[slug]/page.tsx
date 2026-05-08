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
import { SERVICES, SERVICES_BY_SLUG } from "@/content/services";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const s = SERVICES_BY_SLUG[slug];
  if (!s) return {};
  return {
    title: s.meta.title,
    description: s.meta.description,
    alternates: { canonical: `/services/${slug}` },
  };
}

export default async function ServicePage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const s = SERVICES_BY_SLUG[slug];
  if (!s) notFound();

  const auroreVariant =
    s.formProfile === "industrie"
      ? "heroIndustrie"
      : s.formProfile === "tertiaire"
        ? "tertiaire"
        : s.formProfile === "residentiel"
          ? "residentiel"
          : "ressources";

  return (
    <>
      <AuroreDefs />
      <Topbar />
      <SiteHeader />
      <Breadcrumb
        items={[
          { href: "/", label: "Accueil" },
          { href: "/services", label: "Services" },
          { label: s.nav },
        ]}
      />

      <main>
        {/* Hero */}
        <section className="relative pt-[60px] pb-[var(--spacing-block-sm)] overflow-hidden">
          <div className="absolute right-0 top-0 w-[55%] h-[600px] opacity-50 pointer-events-none -z-[1] max-[1100px]:opacity-25">
            <Aurore variant={auroreVariant} className="w-full h-full" />
          </div>
          <div className="container-x">
            <div className="max-w-[820px]">
              <span className="eyebrow reveal">{s.hero.eyebrow}</span>
              <h1
                className="display reveal mt-6"
                style={{
                  fontSize: "clamp(36px, 4.4vw, 60px)",
                  lineHeight: 1.04,
                  letterSpacing: "-0.04em",
                }}
              >
                {s.hero.h1}
              </h1>
              <p className="text-[19px] text-[var(--color-text-2)] mt-7 max-w-[680px] leading-[1.55] reveal">
                {s.hero.sub}
              </p>
              <div className="mt-10 reveal">
                <Link href="/contact" className="btn btn-primary btn-arrow">
                  Demander un devis
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Définition (si présente) */}
        {s.definition && (
          <section className="py-[var(--spacing-block-sm)]">
            <div className="container-x">
              <div className="bg-[var(--color-pastel-blue)] rounded-2xl p-10 max-w-[860px] reveal">
                <span className="eyebrow">Définition</span>
                <p className="it text-[19px] text-[var(--color-primary)] mt-5 leading-[1.6]">
                  {s.definition}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Cadre réglementaire */}
        {s.cadre && (
          <section className="py-[var(--spacing-block-sm)]">
            <div className="container-x">
              <span className="eyebrow reveal">Cadre réglementaire</span>
              <h2 className="section-title reveal">
                Les textes <span className="it">applicables.</span>
              </h2>
              <ul className="mt-12 list-none p-0 max-w-[860px]">
                {s.cadre.map((item, i) => (
                  <li
                    key={item}
                    className={`flex gap-5 py-5 ${i < s.cadre!.length - 1 ? "border-b border-[var(--color-border)]" : ""} reveal`}
                  >
                    <span className="mono text-[12px] tracking-[0.06em] text-[var(--color-text-3)] shrink-0 pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[16px] text-[var(--color-primary)] leading-[1.5]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Notre approche */}
        {s.approche && (
          <section className="py-[var(--spacing-block-sm)]">
            <div className="container-x">
              <span className="eyebrow reveal">Notre approche</span>
              <h2 className="section-title reveal">{s.approche.title}</h2>
              {s.approche.body && (
                <p className="section-lede reveal">{s.approche.body}</p>
              )}
              {s.approche.items && (
                <ol className="mt-12 list-none p-0 max-w-[860px]">
                  {s.approche.items.map((item, i) => (
                    <li
                      key={item}
                      className="flex gap-5 py-5 border-b border-[var(--color-border)] last:border-b-0 reveal"
                    >
                      <span
                        className="it text-[28px] text-[var(--color-secondary)] leading-none shrink-0"
                        style={{ fontFeatureSettings: '"tnum" 1' }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[16px] text-[var(--color-primary)] leading-[1.55]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ol>
              )}
            </div>
          </section>
        )}

        {/* Livrables */}
        {s.livrables && (
          <section className="py-[var(--spacing-block-sm)]">
            <div className="container-x">
              <span className="eyebrow reveal">Livrables</span>
              <h2 className="section-title reveal">
                Ce que vous <span className="it">recevez.</span>
              </h2>
              <ul className="grid grid-cols-2 gap-4 mt-12 list-none p-0 max-[1100px]:grid-cols-1">
                {s.livrables.map((item) => (
                  <li
                    key={item}
                    className="bg-white border border-[var(--color-border)] rounded-2xl p-6 reveal flex gap-4 items-start"
                  >
                    <span className="text-[var(--color-secondary)] font-bold shrink-0 mt-px text-lg">
                      ✓
                    </span>
                    <span className="text-[15px] text-[var(--color-primary)] leading-[1.5]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Délais & Tarifs */}
        {(s.delais || s.tarif) && (
          <section className="py-[var(--spacing-block-sm)]">
            <div className="container-x">
              <span className="eyebrow reveal">Délais et tarifs</span>
              <h2 className="section-title reveal">
                Ordre de grandeur <span className="it">indicatif.</span>
              </h2>
              <div className="grid grid-cols-2 gap-7 mt-12 max-[1100px]:grid-cols-1">
                {s.delais && (
                  <div className="bg-[var(--color-pastel-blue)] rounded-2xl p-9 reveal">
                    <span className="mono text-[10.5px] tracking-[0.08em] uppercase text-[var(--color-text-3)]">
                      Délais
                    </span>
                    <p className="it text-[24px] text-[var(--color-primary)] mt-3 leading-[1.4]">
                      {s.delais}
                    </p>
                  </div>
                )}
                {s.tarif && (
                  <div className="bg-[var(--color-pastel-green)] rounded-2xl p-9 reveal">
                    <span className="mono text-[10.5px] tracking-[0.08em] uppercase text-[var(--color-text-3)]">
                      Tarif
                    </span>
                    <p className="it text-[24px] text-[var(--color-primary)] mt-3 leading-[1.4]">
                      {s.tarif}
                    </p>
                  </div>
                )}
              </div>
              {s.atout && (
                <div className="mt-10 bg-[var(--color-pastel-yellow)] rounded-2xl p-7 reveal max-w-[860px]">
                  <span className="mono text-[10.5px] tracking-[0.1em] uppercase text-[var(--color-text-3)]">
                    Atout CEE
                  </span>
                  <p className="text-[16px] text-[var(--color-primary)] mt-3 leading-[1.6]">
                    {s.atout}
                  </p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* v2 — Notre rémunération (courtage / montage CEE uniquement) */}
        {s.remuneration && (
          <section className="py-[var(--spacing-block-sm)]">
            <div className="container-x">
              <div className="bg-[var(--color-pastel-blue)] rounded-2xl p-9 max-w-[860px] reveal">
                <span className="eyebrow">Notre rémunération</span>
                <p className="text-[16px] text-[var(--color-primary)] mt-4 leading-[1.65]">
                  {s.remuneration}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* v2 — Notre organisation (mention factuelle gouvernance, lien vers cabinet) */}
        {s.gouvernance && (
          <section className="py-[var(--spacing-block-sm)]">
            <div className="container-x">
              <div className="bg-white border border-[var(--color-border)] rounded-2xl p-7 max-w-[860px] reveal">
                <span className="mono text-[10.5px] tracking-[0.1em] uppercase text-[var(--color-text-3)]">
                  Notre organisation
                </span>
                <p className="text-[15px] text-[var(--color-text-2)] mt-3 leading-[1.6]">
                  {s.gouvernance}{" "}
                  <Link
                    href="/cabinet/notre-independance"
                    className="text-[var(--color-secondary)] underline underline-offset-2 hover:text-[#006e46]"
                  >
                    Voir la page Gouvernance
                  </Link>
                  .
                </p>
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
                    "radial-gradient(60% 80% at 80% 20%, rgba(245,197,24,0.16), transparent 60%), radial-gradient(50% 60% at 20% 80%, rgba(0,168,107,0.18), transparent 60%)",
                }}
              />
              <div className="relative z-[1] max-w-[640px] mx-auto">
                <h2
                  className="font-bold tracking-[-0.035em]"
                  style={{ fontSize: "clamp(28px, 2.6vw, 40px)" }}
                >
                  Pré-qualifier mon projet
                  <br />
                  <span className="it text-[var(--color-accent)]">
                    en 6 champs.
                  </span>
                </h2>
                <p className="text-[16px] text-white/70 mt-4">
                  Réponse sous 24 h ouvrées.
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
