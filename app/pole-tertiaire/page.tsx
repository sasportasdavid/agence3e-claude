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
import { CaseMini } from "@/components/CaseMini";
import {
  meta,
  breadcrumb,
  hero,
  obligations,
  segments,
  fiches,
  cas,
} from "@/content/poleTertiaire";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: "/pole-tertiaire" },
};

const TONE_BG: Record<string, string> = {
  blue: "bg-[var(--color-pastel-blue)]",
  violet: "bg-[var(--color-pastel-violet)]",
  orange: "bg-[var(--color-pastel-orange)]",
};
const TONE_BLOB: Record<string, string> = {
  blue: "radial-gradient(circle, #6F9CFE 0%, #B5C6FB 60%, transparent 100%)",
  violet: "radial-gradient(circle, #9D7EDC 0%, #C9B5EE 60%, transparent 100%)",
  orange: "radial-gradient(circle, #FF8B6B 0%, #F7C8A8 60%, transparent 100%)",
};

export default function PoleTertiairePage() {
  return (
    <>
      <AuroreDefs />
      <Topbar />
      <SiteHeader />
      <Breadcrumb items={breadcrumb} />

      <main>
        {/* Hero */}
        <section className="relative pt-[60px] pb-[var(--spacing-block-sm)] overflow-hidden">
          <div className="absolute right-0 top-0 w-[55%] h-[700px] opacity-65 pointer-events-none -z-[1] max-[1100px]:opacity-30">
            <Aurore variant="tertiaire" className="w-full h-full" />
          </div>
          <div className="container-x">
            <div className="max-w-[820px]">
              <span className="eyebrow reveal">{hero.eyebrow}</span>
              <h1
                className="display reveal mt-6"
                style={{
                  fontSize: "clamp(44px, 5vw, 72px)",
                  lineHeight: 1.04,
                  letterSpacing: "-0.04em",
                }}
              >
                Audit énergétique et financement CEE
                <br />
                <span className="it">pour le tertiaire.</span>
              </h1>
              <p className="text-[19px] text-[var(--color-text-2)] mt-7 max-w-[640px] leading-[1.55] reveal">
                {hero.sub}
              </p>
              <div className="mt-10 reveal">
                <Link href="/contact" className="btn btn-primary btn-arrow">
                  {hero.cta}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 3 obligations */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <span className="eyebrow reveal">{obligations.eyebrow}</span>
            <h2 className="section-title reveal">
              {obligations.title.lead}
              <br />
              <span className="it">{obligations.title.it}</span>
            </h2>
            <div className="grid grid-cols-3 gap-7 mt-16 max-[1100px]:grid-cols-1">
              {obligations.cards.map((card) => (
                <article
                  key={card.badge}
                  className={`relative rounded-3xl p-9 overflow-hidden min-h-[420px] flex flex-col reveal ${TONE_BG[card.tone]}`}
                >
                  <div
                    className="absolute w-[380px] h-[380px] rounded-full pointer-events-none -top-[120px] -right-[120px]"
                    style={{
                      filter: "blur(60px)",
                      opacity: 0.55,
                      background: TONE_BLOB[card.tone],
                    }}
                  />
                  <span className="relative z-[1] mono text-[11px] py-1.5 px-3 rounded-full bg-white/75 text-[var(--color-primary)] w-fit tracking-[0.04em]">
                    {card.badge}
                  </span>
                  <h3 className="relative z-[1] font-bold text-[24px] tracking-[-0.025em] leading-[1.15] mt-4 text-[var(--color-primary)]">
                    {card.title}
                  </h3>
                  <p className="relative z-[1] text-[14.5px] text-[var(--color-text-2)] mt-3 leading-[1.6]">
                    {card.body}
                  </p>
                  <div className="relative z-[1] mt-auto pt-6">
                    <Link
                      href={card.href}
                      className="text-sm font-medium text-[var(--color-primary)] inline-flex items-center gap-2 hover:gap-3 transition-all"
                    >
                      {card.cta} →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 7 segments */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <span className="eyebrow reveal">{segments.eyebrow}</span>
            <h2 className="section-title reveal">
              {segments.title.lead} <span className="it">{segments.title.it}</span>
            </h2>
            <div className="grid grid-cols-4 gap-4 mt-16 max-[1100px]:grid-cols-2 max-sm:grid-cols-1">
              {segments.items.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="bg-white border border-[var(--color-border)] rounded-2xl p-6 transition-all hover:border-[var(--color-primary)] hover:-translate-y-0.5 reveal min-h-[140px] flex flex-col justify-between"
                >
                  <div className="text-[28px] leading-none">{item.icon}</div>
                  <div>
                    <span className="mono text-[10.5px] text-[var(--color-text-3)] tracking-[0.08em]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="text-[16px] font-semibold tracking-[-0.015em] mt-1.5 text-[var(--color-primary)]">
                      {item.label}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 8 fiches CEE */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <span className="eyebrow reveal">{fiches.eyebrow}</span>
            <h2 className="section-title reveal">
              {fiches.title.lead}
              <br />
              <span className="it">{fiches.title.it}</span>
            </h2>
            <div className="mt-12 bg-white border border-[var(--color-border)] rounded-2xl overflow-hidden reveal">
              <div className="grid grid-cols-[160px_1fr_180px_140px] py-4 px-6 bg-[#fafbfc] border-b border-[var(--color-border)] mono text-[10.5px] tracking-[0.08em] text-[var(--color-text-3)] uppercase max-[1100px]:grid-cols-[110px_1fr_100px]">
                <span>Référence</span>
                <span>Opération</span>
                <span className="max-[1100px]:hidden">Segments</span>
                <span>Prime moy.</span>
              </div>
              {fiches.rows.map((row) => (
                <div
                  key={row.ref}
                  className="grid grid-cols-[160px_1fr_180px_140px] py-4 px-6 border-b border-[var(--color-border-2)] last:border-b-0 items-center text-sm hover:bg-[#fafbfc] transition-colors max-[1100px]:grid-cols-[110px_1fr_100px]"
                >
                  <span className="mono text-xs text-[var(--color-primary)] font-medium">
                    {row.ref}
                  </span>
                  <span className="text-[var(--color-primary)] font-medium">
                    {row.title}
                  </span>
                  <span className="text-[13px] text-[var(--color-text-2)] max-[1100px]:hidden">
                    {row.segments}
                  </span>
                  <span
                    className="it text-[var(--color-primary)] text-[15px]"
                    style={{ fontFeatureSettings: '"tnum" 1' }}
                  >
                    {row.prime}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center reveal">
              <Link
                href="/comprendre/fiches-operations-standardisees"
                className="btn-ghost btn-arrow inline-flex items-center gap-2 font-medium"
              >
                Comprendre les fiches d&apos;opérations standardisées →
              </Link>
            </div>
          </div>
        </section>

        {/* Étude de cas */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <span className="eyebrow reveal">{cas.eyebrow}</span>
            <h2 className="section-title reveal">
              {cas.title.lead} <span className="it">{cas.title.it}</span>
            </h2>
            <div className="mt-16 bg-[var(--color-pastel-violet)] rounded-[32px] p-14 relative overflow-hidden grid grid-cols-[1.2fr_1fr] gap-14 items-center reveal max-[1100px]:grid-cols-1 max-[1100px]:p-8">
              <div
                className="absolute w-[500px] h-[500px] rounded-full pointer-events-none -bottom-[200px] -right-[200px]"
                style={{
                  background:
                    "radial-gradient(circle, #9D7EDC 0%, #C9B5EE 50%, transparent 100%)",
                  filter: "blur(100px)",
                  opacity: 0.6,
                }}
              />
              <div className="relative z-[1]">
                <div className="flex items-center gap-3">
                  <span className="mono text-[11px] tracking-[0.1em] uppercase text-[var(--color-text-2)]">
                    {cas.region}
                  </span>
                  <span className="mono text-[10.5px] text-[var(--color-text-3)] tracking-[0.06em]">
                    {cas.ref}
                  </span>
                </div>
                <h3 className="text-[26px] font-bold tracking-[-0.025em] leading-[1.2] mt-4 text-[var(--color-primary)] max-w-[500px]">
                  Décret tertiaire et BACS sur 4 sites avec GTB centralisée.
                </h3>
                <div className="mono text-[11px] text-[var(--color-text-3)] mt-2 flex gap-3 items-center">
                  <span className="bg-white/70 py-[3px] px-2 rounded text-[var(--color-primary)] font-medium">
                    {cas.fiche}
                  </span>
                  <span>·</span>
                  <span>{cas.date}</span>
                </div>
                <p className="text-[15px] text-[var(--color-text-2)] mt-5 leading-[1.6] max-w-[520px]">
                  {cas.recit}
                </p>
              </div>
              <div className="relative z-[1]">
                <CaseMini
                  rows={cas.stats.map((s) => ({ label: s.l, value: s.v }))}
                  bar={Math.round((148 / 386) * 100)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <div className="bg-[var(--color-primary)] text-white rounded-[32px] py-16 px-14 text-center relative overflow-hidden reveal max-[1100px]:py-12 max-[1100px]:px-8">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(60% 80% at 80% 20%, rgba(110,145,216,0.20), transparent 60%), radial-gradient(50% 60% at 20% 80%, rgba(139,125,216,0.16), transparent 60%)",
                }}
              />
              <div className="relative z-[1] max-w-[700px] mx-auto">
                <span className="eyebrow text-white/60 before:bg-white/30 inline-flex justify-center">
                  Prêt à pré-qualifier ?
                </span>
                <h2
                  className="font-bold tracking-[-0.035em] mt-5"
                  style={{ fontSize: "clamp(32px, 3vw, 48px)" }}
                >
                  Trois textes,
                  <br />
                  <span className="it text-[var(--color-accent)]">
                    une seule équipe.
                  </span>
                </h2>
                <p className="text-[17px] text-white/70 mt-5">
                  Pré-qualif en 6 champs, réponse sous 24 h ouvrées. Aucun
                  engagement.
                </p>
                <Link
                  href="/contact"
                  className="btn btn-arrow mt-8 inline-flex"
                  style={{ background: "var(--color-secondary)", color: "#fff" }}
                >
                  Pré-qualifier mon patrimoine
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
