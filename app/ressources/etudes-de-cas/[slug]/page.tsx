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
import { CASES, CASES_BY_SLUG } from "@/content/cases";

export function generateStaticParams() {
  return CASES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const c = CASES_BY_SLUG[slug];
  if (!c) return {};
  return {
    title: `${c.ref} — ${c.title} | Agence 3E`,
    description: `${c.activity} · ${c.travaux} · Investissement ${c.stats.invest} · Prime CEE ${c.stats.prime}.`,
    alternates: { canonical: `/ressources/etudes-de-cas/${c.slug}` },
  };
}

const TONE_BG: Record<string, string> = {
  rose: "bg-[var(--color-pastel-rose)]",
  blue: "bg-[var(--color-pastel-blue)]",
  green: "bg-[var(--color-pastel-green)]",
  violet: "bg-[var(--color-pastel-violet)]",
  orange: "bg-[var(--color-pastel-orange)]",
  yellow: "bg-[var(--color-pastel-yellow)]",
};

const TONE_BLOB: Record<string, React.CSSProperties> = {
  rose: {
    background:
      "radial-gradient(circle, #FF8FA3 0%, #FFC0A0 60%, transparent 100%)",
    top: -180,
    right: -180,
  },
  blue: {
    background:
      "radial-gradient(circle, #6F9CFE 0%, #B5C6FB 60%, transparent 100%)",
    top: -180,
    right: -180,
  },
  green: {
    background:
      "radial-gradient(circle, #6BCFA0 0%, #A8E0BC 60%, transparent 100%)",
    top: -180,
    right: -180,
  },
  violet: {
    background:
      "radial-gradient(circle, #9D7EDC 0%, #C9B5EE 60%, transparent 100%)",
    bottom: -180,
    right: -180,
  },
  orange: {
    background:
      "radial-gradient(circle, #FF8B6B 0%, #F7C8A8 60%, transparent 100%)",
    bottom: -180,
    left: -180,
  },
  yellow: {
    background:
      "radial-gradient(circle, #F5C518 0%, #F7DD8A 60%, transparent 100%)",
    top: -180,
    right: -180,
    opacity: 0.5,
  },
};

export default async function CasePage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const c = CASES_BY_SLUG[slug];
  if (!c) notFound();

  const otherCases = CASES.filter((x) => x.slug !== c.slug).slice(0, 3);

  return (
    <>
      <AuroreDefs />
      <Topbar />
      <SiteHeader />
      <Breadcrumb
        items={[
          { href: "/", label: "Accueil" },
          { href: "/ressources/etudes-de-cas", label: "Études de cas" },
          { label: c.ref },
        ]}
      />

      <main>
        {/* Hero pastel */}
        <section className="pt-10 pb-[var(--spacing-block-sm)]">
          <div className="container-x">
            <div
              className={`relative rounded-[32px] py-16 px-14 overflow-hidden ${TONE_BG[c.tone]} max-[1100px]:py-12 max-[1100px]:px-8`}
            >
              <div
                className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
                style={{
                  filter: "blur(100px)",
                  opacity: 0.55,
                  ...TONE_BLOB[c.tone],
                }}
              />
              <div className="relative z-[1]">
                <div className="flex items-center gap-3 mb-6">
                  <span className="mono text-[11px] tracking-[0.1em] uppercase text-[var(--color-text-2)] py-1.5 px-3 bg-white/70 rounded-full">
                    {c.tag}
                  </span>
                  <span className="mono text-[11px] text-[var(--color-text-3)] tracking-[0.06em]">
                    {c.ref} · {c.date}
                  </span>
                </div>
                <h1
                  className="display"
                  style={{
                    fontSize: "clamp(36px, 4vw, 56px)",
                    lineHeight: 1.06,
                    letterSpacing: "-0.04em",
                  }}
                >
                  {c.title}
                </h1>
                <p className="text-[18px] text-[var(--color-text-2)] mt-6 max-w-[640px] leading-[1.55]">
                  <strong className="text-[var(--color-primary)]">Activité :</strong>{" "}
                  {c.activity}
                  <br />
                  <strong className="text-[var(--color-primary)]">Travaux :</strong>{" "}
                  {c.travaux}
                </p>
                <div className="mt-8 flex gap-2 flex-wrap">
                  {c.fiches.map((f) => (
                    <span
                      key={f}
                      className="mono text-[11px] py-1.5 px-3 bg-white/70 backdrop-blur-md text-[var(--color-primary)] rounded font-medium"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5 chiffres clés */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <span className="eyebrow reveal">Chiffres clés</span>
            <h2 className="section-title reveal">
              Encart <span className="it">défendable.</span>
            </h2>
            <div className="grid grid-cols-5 gap-4 mt-12 max-[1100px]:grid-cols-2 max-sm:grid-cols-1">
              {c.stats.conso && <KeyStat label="Conso avant" value={c.stats.conso} />}
              <KeyStat label="Investissement" value={c.stats.invest} highlight />
              <KeyStat label="Prime CEE" value={c.stats.prime} highlight tone="green" />
              <KeyStat label="Reste à charge" value={c.stats.reste} />
              {c.stats.gain && <KeyStat label="Gain annuel" value={c.stats.gain} />}
              {c.stats.roi && <KeyStat label="ROI net" value={c.stats.roi} highlight tone="accent" />}
            </div>
          </div>
        </section>

        {/* Récit */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <div className="grid grid-cols-[1fr_1.4fr] gap-16 items-start max-[1100px]:grid-cols-1 max-[1100px]:gap-8">
              <div>
                <span className="eyebrow reveal">Récit du dossier</span>
                <h2 className="section-title reveal">
                  Contexte, solution, <span className="it">résultat.</span>
                </h2>
              </div>
              <div className="max-w-[680px]">
                <p className="text-[18px] text-[var(--color-text-2)] leading-[1.7] reveal">
                  {c.narrative}
                </p>
                <blockquote className="mt-10 pl-7 border-l-4 border-[var(--color-accent)] reveal">
                  <p className="it text-[22px] text-[var(--color-primary)] leading-[1.5]">
                    « {c.verbatim.quote} »
                  </p>
                  <footer className="mt-4 mono text-[12px] text-[var(--color-text-3)] tracking-[0.04em]">
                    — <strong className="text-[var(--color-primary)] not-italic">{c.verbatim.author}</strong>
                    , {c.verbatim.role}, {c.verbatim.region}
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Autres cas */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <span className="eyebrow reveal">Autres dossiers</span>
            <h2 className="section-title reveal">
              À découvrir <span className="it">aussi.</span>
            </h2>
            <div className="grid grid-cols-3 gap-7 mt-12 max-[1100px]:grid-cols-1">
              {otherCases.map((other) => (
                <Link
                  key={other.slug}
                  href={`/ressources/etudes-de-cas/${other.slug}`}
                  className={`relative rounded-2xl p-7 overflow-hidden flex flex-col min-h-[200px] transition-transform hover:-translate-y-0.5 reveal ${TONE_BG[other.tone]}`}
                >
                  <div className="flex justify-between mb-4">
                    <span className="mono text-[10.5px] tracking-[0.1em] uppercase text-[var(--color-text-2)]">
                      {other.tag}
                    </span>
                    <span className="mono text-[10px] text-[var(--color-text-3)]">
                      {other.ref}
                    </span>
                  </div>
                  <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-[var(--color-primary)] leading-[1.25]">
                    {other.title}
                  </h3>
                  <span className="mt-auto pt-4 mono text-[11px] text-[var(--color-secondary)]">
                    Lire le cas →
                  </span>
                </Link>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/ressources/etudes-de-cas"
                className="btn-ghost btn-arrow inline-flex items-center gap-2 font-medium"
              >
                Voir les 12 cas →
              </Link>
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

function KeyStat({
  label,
  value,
  highlight,
  tone,
}: {
  label: string;
  value: string;
  highlight?: boolean;
  tone?: "green" | "accent";
}) {
  const valueClass =
    tone === "green"
      ? "text-[#006e46]"
      : tone === "accent"
        ? "text-[var(--color-secondary)]"
        : "text-[var(--color-primary)]";
  return (
    <div
      className={`p-5 rounded-2xl reveal ${highlight ? "bg-[var(--color-secondary-10)]" : "bg-white border border-[var(--color-border)]"}`}
    >
      <div className="mono text-[10px] tracking-[0.08em] uppercase text-[var(--color-text-3)]">
        {label}
      </div>
      <div
        className={`it text-[clamp(22px,2vw,28px)] mt-2 leading-none ${valueClass}`}
        style={{ fontFeatureSettings: '"tnum" 1' }}
      >
        {value}
      </div>
    </div>
  );
}
