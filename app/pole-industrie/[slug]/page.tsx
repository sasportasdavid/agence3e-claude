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
import { SUBS_IND, SUBS_IND_BY_SLUG } from "@/content/poleIndustrieSubs";

export function generateStaticParams() {
  return SUBS_IND.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const sub = SUBS_IND_BY_SLUG[slug];
  if (!sub) return {};
  return {
    title: sub.meta.title,
    description: sub.meta.description,
    alternates: { canonical: `/pole-industrie/${slug}` },
  };
}

export default async function SubIndustriePage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const sub = SUBS_IND_BY_SLUG[slug];
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
          { href: "/pole-industrie", label: "Industrie" },
          { label: sub.nav },
        ]}
      />

      <main>
        {/* Hero */}
        <section className="relative pt-[60px] pb-[var(--spacing-block-sm)] overflow-hidden">
          <div className="absolute right-0 top-0 w-[60%] h-[700px] opacity-65 pointer-events-none -z-[1] max-[1100px]:opacity-30">
            <Aurore variant="heroIndustrie" className="w-full h-full" />
          </div>
          <div className="container-x">
            <div className="max-w-[820px]">
              <span className="eyebrow reveal">{sub.hero.eyebrow}</span>
              <h1
                className="display reveal mt-6"
                style={{
                  fontSize: "clamp(40px, 4.6vw, 64px)",
                  lineHeight: 1.04,
                  letterSpacing: "-0.04em",
                }}
              >
                {sub.hero.h1}
              </h1>
              <p className="text-[19px] text-[var(--color-text-2)] mt-7 max-w-[680px] leading-[1.55] reveal">
                {sub.hero.sub}
              </p>
              <div className="mt-10 reveal">
                <Link href="/contact" className="btn btn-primary btn-arrow">
                  Pré-qualifier mon site {sub.nav.toLowerCase()}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Lecture du secteur (verticaux forts) */}
        {sub.lecture && (
          <section className="py-[var(--spacing-block-sm)]">
            <div className="container-x">
              <div className="grid grid-cols-[1fr_1.4fr] gap-16 items-start max-[1100px]:grid-cols-1 max-[1100px]:gap-8">
                <div>
                  <span className="eyebrow reveal">Notre lecture du secteur</span>
                  <h2 className="section-title reveal">{sub.lecture.title}</h2>
                </div>
                <div className="flex flex-col gap-5 max-w-[680px]">
                  {sub.lecture.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className={`text-[17px] text-[var(--color-text-2)] leading-[1.6] reveal ${
                        i === 0
                          ? "it text-[20px] text-[var(--color-primary)] leading-[1.5]"
                          : ""
                      }`}
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Périmètre */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <span className="eyebrow reveal">Périmètre couvert</span>
            <h2 className="section-title reveal">
              Les sites que nous{" "}
              <span className="it">auditons en {sub.nav.toLowerCase()}.</span>
            </h2>
            <ul className="grid grid-cols-3 gap-4 mt-12 list-none p-0 max-[1100px]:grid-cols-2 max-sm:grid-cols-1">
              {sub.perimetre.map((item, i) => (
                <li
                  key={item}
                  className="bg-white border border-[var(--color-border)] rounded-2xl p-6 reveal flex flex-col justify-between min-h-[110px] hover:border-[var(--color-primary)] hover:-translate-y-0.5 transition-all"
                >
                  <span className="mono text-[11px] text-[var(--color-text-3)] tracking-[0.08em]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] font-semibold tracking-[-0.015em] mt-3 text-[var(--color-primary)]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Mention spécifique (verre, bois, etc.) */}
        {sub.mention && (
          <section className="py-[var(--spacing-block-sm)]">
            <div className="container-x">
              <div className="bg-[var(--color-pastel-yellow)] rounded-2xl p-10 max-w-[860px] reveal">
                <p className="it text-[20px] text-[var(--color-primary)] leading-[1.5]">
                  {sub.mention}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Gisements CEE */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <span className="eyebrow reveal">Gisements CEE prioritaires</span>
            <h2 className="section-title reveal">
              Les fiches qui paient le plus
              <br />
              <span className="it">en {sub.nav.toLowerCase()}.</span>
            </h2>
            <div className="mt-12 flex flex-col gap-4">
              {sub.gisements.map((g, i) => (
                <article
                  key={`${g.ref}-${i}`}
                  className="bg-white border border-[var(--color-border)] rounded-2xl p-7 grid grid-cols-[60px_1.3fr_1fr] gap-8 items-start reveal hover:border-[var(--color-primary)] transition-colors max-[1100px]:grid-cols-1 max-[1100px]:gap-4 max-[1100px]:p-5"
                >
                  <div
                    className="it text-[36px] text-[var(--color-secondary)] leading-none"
                    style={{ fontFeatureSettings: '"tnum" 1' }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <span className="mono text-[11px] tracking-[0.06em] text-[var(--color-primary)] bg-[var(--color-secondary-10)] py-1 px-2 rounded inline-block">
                      {g.ref}
                    </span>
                    <h3 className="text-[18px] font-semibold tracking-[-0.02em] mt-2 text-[var(--color-primary)]">
                      {g.title}
                    </h3>
                    {g.desc && (
                      <p className="text-[14px] text-[var(--color-text-2)] mt-2 leading-[1.55] max-w-[460px]">
                        {g.desc}
                      </p>
                    )}
                  </div>
                  <div className="grid grid-cols-3 gap-2 max-sm:grid-cols-1">
                    <Stat label="Gain" value={g.gain} />
                    <Stat label="Prime" value={g.prime} accent />
                    <Stat label="ROI" value={g.roi} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Vigilance audit */}
        {sub.vigilance && (
          <section className="py-[var(--spacing-block-sm)]">
            <div className="container-x">
              <span className="eyebrow reveal">Méthodologie spécifique</span>
              <h2 className="section-title reveal">{sub.vigilance.title}</h2>
              <div className="grid grid-cols-2 gap-5 mt-12 max-[1100px]:grid-cols-1">
                {sub.vigilance.items.map((item) => (
                  <div
                    key={item}
                    className="bg-white border border-[var(--color-border)] border-l-[3px] border-l-[var(--color-secondary)] rounded-2xl p-6 reveal"
                  >
                    <p className="text-[14.5px] text-[var(--color-text-2)] leading-[1.6]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Étude de cas associée */}
        {sub.cas && (
          <section className="py-[var(--spacing-block-sm)]">
            <div className="container-x">
              <div className="bg-[var(--color-pastel-green)] rounded-3xl py-12 px-14 relative overflow-hidden reveal max-[1100px]:py-10 max-[1100px]:px-8">
                <div
                  className="absolute w-[400px] h-[400px] rounded-full pointer-events-none -bottom-[160px] -right-[160px]"
                  style={{
                    background:
                      "radial-gradient(circle, #6BCFA0 0%, #A8E0BC 60%, transparent 100%)",
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
            <div className="bg-[var(--color-primary)] text-white rounded-[32px] py-14 px-12 text-center relative overflow-hidden reveal max-[1100px]:py-10 max-[1100px]:px-7">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(60% 80% at 80% 20%, rgba(245,197,24,0.12), transparent 60%), radial-gradient(50% 60% at 20% 80%, rgba(0,168,107,0.14), transparent 60%)",
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

function Stat({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className={`p-3 rounded-lg ${accent ? "bg-[var(--color-secondary-10)]" : "bg-[#fafbfc]"}`}>
      <div className="mono text-[9.5px] tracking-[0.06em] uppercase text-[var(--color-text-3)]">
        {label}
      </div>
      <div
        className={`it text-[16px] mt-1 leading-none ${accent ? "text-[#006e46]" : "text-[var(--color-primary)]"}`}
        style={{ fontFeatureSettings: '"tnum" 1' }}
      >
        {value}
      </div>
    </div>
  );
}
