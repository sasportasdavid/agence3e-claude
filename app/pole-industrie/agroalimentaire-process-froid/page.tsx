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
import { PIForm } from "@/components/sections/pole-industrie/PIForm";
import {
  meta,
  breadcrumb,
  hero,
  lecture,
  perimetre,
  gisements,
  cas,
  methode,
  faq,
} from "@/content/iaa";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: "/pole-industrie/agroalimentaire-process-froid" },
};

export default function IAAPage() {
  return (
    <>
      <AuroreDefs />
      <Topbar />
      <SiteHeader />
      <Breadcrumb items={breadcrumb} />

      <main>
        {/* Hero */}
        <section className="relative pt-[60px] pb-[var(--spacing-block-sm)] overflow-hidden">
          <div className="absolute right-0 top-0 w-[60%] h-[700px] opacity-70 pointer-events-none -z-[1] max-[1100px]:opacity-40">
            <Aurore variant="heroIndustrie" className="w-full h-full" />
          </div>
          <div className="container-x">
            <div className="max-w-[820px]">
              <span className="eyebrow reveal">{hero.eyebrow}</span>
              <h1
                className="display reveal mt-6"
                style={{
                  fontSize: "clamp(40px, 4.6vw, 64px)",
                  lineHeight: 1.04,
                  letterSpacing: "-0.04em",
                }}
              >
                {hero.h1}
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

            {/* v3 (Phase 3) — 3 chiffres clés du secteur, en parité visuelle
                stricte avec les 7 autres pages secteurs (cf. SECTEURS_INDUSTRIE_V2.md). */}
            <div className="grid grid-cols-3 gap-6 mt-16 max-[1100px]:grid-cols-1">
              {hero.chiffres.map((c, i) => (
                <div
                  key={c.label}
                  className="bg-white border border-[var(--color-border)] rounded-2xl p-7 reveal"
                >
                  <span className="mono text-[10.5px] tracking-[0.08em] uppercase text-[var(--color-text-3)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div
                    className="it text-[clamp(32px,3vw,44px)] text-[var(--color-primary)] mt-3 leading-none"
                    style={{ fontFeatureSettings: '"tnum" 1' }}
                  >
                    {c.value}
                  </div>
                  <p className="text-[14px] text-[var(--color-text-2)] mt-4 leading-[1.5]">
                    {c.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Notre lecture */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <div className="grid grid-cols-[1fr_1.4fr] gap-16 items-start max-[1100px]:grid-cols-1 max-[1100px]:gap-8">
              <div>
                <span className="eyebrow reveal">{lecture.eyebrow}</span>
                <h2 className="section-title reveal">
                  {lecture.title.lead}
                  <br />
                  <span className="it">{lecture.title.it}</span>
                </h2>
              </div>
              <div className="flex flex-col gap-5 max-w-[680px]">
                {lecture.paragraphs.map((p, i) => (
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

        {/* Périmètre 8 typologies */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <span className="eyebrow reveal">{perimetre.eyebrow}</span>
            <h2 className="section-title reveal">
              {perimetre.title.lead}{" "}
              <span className="it">{perimetre.title.it}</span>
            </h2>
            <ul className="grid grid-cols-4 gap-4 mt-16 list-none p-0 max-[1100px]:grid-cols-2 max-sm:grid-cols-1">
              {perimetre.items.map((item, i) => (
                <li
                  key={item}
                  className="bg-white border border-[var(--color-border)] rounded-2xl p-6 reveal flex flex-col justify-between min-h-[120px] hover:border-[var(--color-primary)] hover:-translate-y-0.5 transition-all"
                >
                  <span className="mono text-[11px] text-[var(--color-text-3)] tracking-[0.08em]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[16px] font-semibold tracking-[-0.015em] mt-3 text-[var(--color-primary)]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 5 gisements prioritaires */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <span className="eyebrow reveal">{gisements.eyebrow}</span>
            <h2 className="section-title reveal">
              {gisements.title.lead}
              <br />
              <span className="it">{gisements.title.it}</span>
            </h2>

            <div className="mt-16 flex flex-col gap-6">
              {gisements.items.map((g) => (
                <article
                  key={g.n}
                  className="bg-white border border-[var(--color-border)] rounded-3xl p-10 grid grid-cols-[80px_1.3fr_1fr] gap-10 items-start reveal hover:border-[var(--color-primary)] transition-colors max-[1100px]:grid-cols-1 max-[1100px]:gap-6 max-[1100px]:p-7"
                >
                  <div
                    className="it text-[64px] text-[var(--color-secondary)] leading-none"
                    style={{ fontFeatureSettings: '"tnum" 1' }}
                  >
                    {g.n}
                  </div>
                  <div>
                    <span className="mono text-[11px] tracking-[0.08em] text-[var(--color-primary)] bg-[var(--color-secondary-10)] py-1 px-2.5 rounded inline-block">
                      {g.ref}
                    </span>
                    <h3 className="text-[24px] font-bold tracking-[-0.025em] leading-[1.2] mt-3 text-[var(--color-primary)] max-w-[480px]">
                      {g.title}
                    </h3>
                    <p className="text-[15px] text-[var(--color-text-2)] mt-3 leading-[1.55] max-w-[520px]">
                      {g.desc}
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-3 max-sm:grid-cols-1">
                    <Stat label="Gain typique" value={g.gain} sub={g.gainLabel} accent />
                    <Stat label="Prime CEE" value={g.prime} />
                    <Stat label="ROI moyen" value={g.roi} />
                  </div>
                </article>
              ))}
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

            <div className="mt-16 bg-[var(--color-pastel-green)] rounded-[32px] p-14 relative overflow-hidden grid grid-cols-[1.2fr_1fr] gap-14 items-center reveal max-[1100px]:grid-cols-1 max-[1100px]:p-8">
              <div
                className="absolute w-[500px] h-[500px] rounded-full pointer-events-none -bottom-[200px] -left-[200px]"
                style={{
                  background:
                    "radial-gradient(circle, #6BCFA0 0%, #A8E0BC 50%, transparent 100%)",
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
                <h3 className="text-[28px] font-bold tracking-[-0.025em] leading-[1.2] mt-4 text-[var(--color-primary)] max-w-[500px]">
                  Récupération chaleur sur groupe froid + calorifugeage points singuliers.
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
                <div className="mt-7">
                  <Link
                    href={cas.href}
                    className="btn-ghost btn-arrow inline-flex items-center gap-2 font-medium"
                  >
                    {cas.cta} →
                  </Link>
                </div>
              </div>
              <div className="relative z-[1]">
                <CaseMini
                  rows={cas.stats.map((s) => ({ label: s.l, value: s.v }))}
                  bar={Math.round((98.5 / 184) * 100)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Méthodologie spécifique IAA */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <span className="eyebrow reveal">{methode.eyebrow}</span>
            <h2 className="section-title reveal">
              {methode.title.lead} <span className="it">{methode.title.it}</span>
            </h2>
            {/* v2 — paragraphe gouvernance factuelle (verbatim livrable §2). */}
            <p className="text-[16px] text-[var(--color-text-2)] mt-6 max-w-[780px] leading-[1.7] reveal">
              {methode.intro}
            </p>
            <div className="grid grid-cols-2 gap-7 mt-12 max-[1100px]:grid-cols-1">
              {methode.items.map((m) => (
                <div
                  key={m.title}
                  className="bg-white border border-[var(--color-border)] border-l-[3px] border-l-[var(--color-secondary)] rounded-2xl p-7 reveal"
                >
                  <h4 className="text-[18px] font-semibold tracking-[-0.015em] text-[var(--color-primary)]">
                    {m.title}
                  </h4>
                  <p className="text-[14.5px] text-[var(--color-text-2)] mt-3 leading-[1.6]">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <span className="eyebrow reveal">{faq.eyebrow}</span>
            <h2 className="section-title reveal">
              {faq.title.lead} <span className="it">{faq.title.it}</span>
            </h2>
            <div className="mt-14 max-w-[880px]">
              {faq.items.map((item, i) => (
                <details
                  key={item.q}
                  className="border-b border-[var(--color-border)] group"
                >
                  <summary className="py-6 cursor-pointer grid grid-cols-[40px_1fr_24px] gap-4 items-center list-none [&::-webkit-details-marker]:hidden">
                    <span className="mono text-xs text-[var(--color-text-3)] tracking-[0.08em]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[18px] font-medium tracking-[-0.015em] text-[var(--color-primary)]">
                      {item.q}
                    </span>
                    <span className="text-[22px] text-[var(--color-text-2)] leading-none transition-transform duration-200 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="pb-7 pl-14 pr-0 text-[15px] text-[var(--color-text-2)] leading-[1.6] max-w-[720px]">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Form pré-qualif IAA (réutilise PIForm) */}
        <PIForm />
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
  sub,
  accent,
}: {
  label: string;
  value: string;
  sub?: string;
  accent?: boolean;
}) {
  return (
    <div className={`p-4 rounded-xl ${accent ? "bg-[var(--color-secondary-10)]" : "bg-[#fafbfc] border border-[var(--color-border)]"}`}>
      <div className="mono text-[10px] tracking-[0.08em] uppercase text-[var(--color-text-3)]">
        {label}
      </div>
      <div
        className={`it text-[22px] mt-1.5 leading-none ${accent ? "text-[#006e46]" : "text-[var(--color-primary)]"}`}
        style={{ fontFeatureSettings: '"tnum" 1' }}
      >
        {value}
      </div>
      {sub && (
        <div className="mono text-[9.5px] text-[var(--color-text-3)] mt-1.5 tracking-[0.04em]">
          {sub}
        </div>
      )}
    </div>
  );
}
