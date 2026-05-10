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
import { LeadForm, SubmitButton } from "@/components/LeadForm";
import { SECTORS, SECTORS_BY_SLUG } from "@/content/poleIndustrieSubs";

export function generateStaticParams() {
  return SECTORS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const sector = SECTORS_BY_SLUG[slug];
  if (!sector) return {};
  return {
    title: sector.meta.title,
    description: sector.meta.description,
    alternates: { canonical: `/pole-industrie/${slug}` },
  };
}

export default async function SectorPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const s = SECTORS_BY_SLUG[slug];
  if (!s) notFound();

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
          { label: s.nav },
        ]}
      />

      <main>
        {/* 1. Hero — H1 + sub + 3 chiffres + CTA */}
        <section className="relative pt-[60px] pb-[var(--spacing-block-sm)] overflow-hidden">
          <div className="absolute right-0 top-0 w-[60%] h-[700px] opacity-65 pointer-events-none -z-[1] max-[1100px]:opacity-30">
            <Aurore variant="heroIndustrie" className="w-full h-full" />
          </div>
          <div className="container-x">
            <div className="max-w-[820px]">
              <span className="eyebrow reveal">{s.hero.eyebrow}</span>
              <h1
                className="display reveal mt-6"
                style={{
                  fontSize: "clamp(40px, 4.6vw, 64px)",
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
                  Pré-qualifier mon site
                </Link>
              </div>
            </div>

            {/* 3 chiffres clés du secteur */}
            <div className="grid grid-cols-3 gap-6 mt-16 max-[1100px]:grid-cols-1">
              {s.hero.chiffres.map((c, i) => (
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

        {/* 2. Lecture du secteur */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <div className="grid grid-cols-[1fr_1.4fr] gap-16 items-start max-[1100px]:grid-cols-1 max-[1100px]:gap-8">
              <div>
                <span className="eyebrow reveal">Lecture du secteur</span>
                <h2 className="section-title reveal">
                  {s.lecture.title.lead}
                  <br />
                  <span className="it">{s.lecture.title.it}</span>
                </h2>
              </div>
              <div className="flex flex-col gap-5 max-w-[680px]">
                {s.lecture.paragraphs.map((p, i) => (
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

        {/* 3. Sous-segments */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <span className="eyebrow reveal">Sous-segments</span>
            <h2 className="section-title reveal">
              {s.sousSegments.title.lead}{" "}
              <span className="it">{s.sousSegments.title.it}</span>
            </h2>
            <ul
              className={`grid gap-4 mt-12 list-none p-0 ${
                s.sousSegments.items.length >= 5
                  ? "grid-cols-5 max-[1100px]:grid-cols-2 max-sm:grid-cols-1"
                  : s.sousSegments.items.length === 4
                    ? "grid-cols-4 max-[1100px]:grid-cols-2 max-sm:grid-cols-1"
                    : "grid-cols-3 max-[1100px]:grid-cols-2 max-sm:grid-cols-1"
              }`}
            >
              {s.sousSegments.items.map((sub, i) => (
                <li
                  key={sub.title}
                  className="bg-white border border-[var(--color-border)] rounded-2xl p-6 reveal flex flex-col min-h-[160px] hover:border-[var(--color-primary)] hover:-translate-y-0.5 transition-all"
                >
                  <span className="mono text-[11px] text-[var(--color-text-3)] tracking-[0.08em]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[15.5px] font-semibold tracking-[-0.015em] mt-3 text-[var(--color-primary)]">
                    {sub.title}
                  </h3>
                  <p className="text-[12.5px] text-[var(--color-text-2)] mt-2 leading-[1.5]">
                    {sub.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4. Gisements CEE */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <span className="eyebrow reveal">Gisements CEE prioritaires</span>
            <h2 className="section-title reveal">
              {s.gisements.title.lead}{" "}
              <span className="it">{s.gisements.title.it}</span>
            </h2>
            <div className="mt-12 bg-white border border-[var(--color-border)] rounded-2xl overflow-hidden reveal">
              <div className="grid grid-cols-[160px_1fr_220px_200px] py-4 px-6 bg-[#fafbfc] border-b border-[var(--color-border)] mono text-[10.5px] tracking-[0.08em] text-[var(--color-text-3)] uppercase max-[1100px]:hidden">
                <span>Code fiche</span>
                <span>Opération</span>
                <span>Cumac typique</span>
                <span>Prime indicative</span>
              </div>
              {s.gisements.items.map((g, i) => (
                <div
                  key={`${g.ref}-${i}`}
                  className={`grid grid-cols-[160px_1fr_220px_200px] py-5 px-6 items-center text-sm hover:bg-[#fafbfc] transition-colors max-[1100px]:grid-cols-1 max-[1100px]:gap-2 max-[1100px]:py-4 ${
                    i < s.gisements.items.length - 1
                      ? "border-b border-[var(--color-border-2)]"
                      : ""
                  }`}
                >
                  <span className="mono text-[12px] text-[var(--color-primary)] bg-[var(--color-secondary-10)] py-1 px-2.5 rounded w-fit font-medium">
                    {g.ref}
                  </span>
                  <span className="text-[15px] text-[var(--color-primary)] font-medium max-[1100px]:mt-1">
                    {g.title}
                  </span>
                  <span className="text-[13.5px] text-[var(--color-text-2)] max-[1100px]:mt-1">
                    <span className="mono text-[9.5px] uppercase tracking-[0.06em] text-[var(--color-text-3)] block max-[1100px]:inline-block max-[1100px]:mr-2">
                      Cumac :
                    </span>
                    {g.cumac}
                  </span>
                  <span
                    className="it text-[18px] text-[#006e46] max-[1100px]:mt-1"
                    style={{ fontFeatureSettings: '"tnum" 1' }}
                  >
                    <span className="mono text-[9.5px] uppercase tracking-[0.06em] text-[var(--color-text-3)] block not-italic max-[1100px]:inline-block max-[1100px]:mr-2">
                      Prime :
                    </span>
                    {g.prime}
                  </span>
                </div>
              ))}
            </div>
            {s.gisements.note && (
              <p className="mono text-[11px] text-[var(--color-text-3)] mt-4 italic leading-[1.5] max-w-[760px] reveal">
                {s.gisements.note}
              </p>
            )}
          </div>
        </section>

        {/* 5. Étude de cas indicative */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <span className="eyebrow reveal">Étude de cas indicative</span>
            <h2 className="section-title reveal">
              Cas type <span className="it">sectoriel.</span>
            </h2>

            <div className="mt-12 bg-[var(--color-pastel-green)] rounded-[32px] p-12 relative overflow-hidden grid grid-cols-[1.2fr_1fr] gap-12 items-center reveal max-[1100px]:grid-cols-1 max-[1100px]:p-8">
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
                {s.cas.type === "indicatif" && (
                  <span className="mono text-[10.5px] tracking-[0.1em] uppercase text-[var(--color-text-3)] bg-white/70 py-1 px-2.5 rounded inline-block">
                    Cas type sectoriel — illustration indicative
                  </span>
                )}
                <h3 className="text-[26px] font-bold tracking-[-0.025em] leading-[1.2] mt-4 text-[var(--color-primary)] max-w-[520px]">
                  {s.cas.title}
                </h3>
                <p className="text-[15px] text-[var(--color-text-2)] mt-5 leading-[1.6] max-w-[520px]">
                  <strong className="text-[var(--color-primary)]">
                    Contexte —
                  </strong>{" "}
                  {s.cas.contexte}
                </p>
                <p className="text-[15px] text-[var(--color-text-2)] mt-3 leading-[1.6] max-w-[520px]">
                  <strong className="text-[var(--color-primary)]">
                    Opérations —
                  </strong>{" "}
                  {s.cas.operations}
                </p>
                {s.cas.ref && s.cas.href && s.cas.type !== "indicatif" && (
                  <div className="mt-7">
                    <Link
                      href={s.cas.href}
                      className="btn-ghost btn-arrow inline-flex items-center gap-2 font-medium"
                    >
                      Voir le cas complet →
                    </Link>
                  </div>
                )}
              </div>

              <div className="relative z-[1] bg-white rounded-2xl p-7 shadow-[0_24px_48px_-12px_rgba(10,37,64,0.10)]">
                <div className="grid grid-cols-2 gap-5">
                  {s.cas.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="mono text-[10px] tracking-[0.08em] uppercase text-[var(--color-text-3)]">
                        {stat.label}
                      </div>
                      <div
                        className="it text-[20px] text-[var(--color-primary)] mt-2 leading-[1.15]"
                        style={{ fontFeatureSettings: '"tnum" 1' }}
                      >
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>
                {s.cas.ref && (
                  <div className="mt-5 pt-5 border-t border-[var(--color-border)]">
                    <span className="mono text-[10px] text-[var(--color-text-3)] tracking-[0.08em]">
                      Réf. {s.cas.ref}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 6. Méthodologie spécifique */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <span className="eyebrow reveal">Méthodologie spécifique</span>
            <h2 className="section-title reveal">
              {s.methode.title.lead}{" "}
              <span className="it">{s.methode.title.it}</span>
            </h2>
            <ol className="mt-12 list-none p-0 max-w-[860px]">
              {s.methode.steps.map((step, i) => (
                <li
                  key={step.title}
                  className="grid grid-cols-[60px_1fr] gap-6 py-5 border-b border-[var(--color-border)] last:border-b-0 items-start reveal"
                >
                  <span
                    className="it text-[36px] text-[var(--color-secondary)] leading-none shrink-0"
                    style={{ fontFeatureSettings: '"tnum" 1' }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="text-[18px] font-semibold tracking-[-0.015em] text-[var(--color-primary)]">
                      {step.title}
                    </h4>
                    <p className="text-[14.5px] text-[var(--color-text-2)] mt-2 leading-[1.6]">
                      {step.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 7. Formulaire pré-qualifié — secteur pré-rempli + champs spécifiques */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <div className="bg-[var(--color-pastel-green)] rounded-[32px] p-16 relative overflow-hidden grid grid-cols-[1fr_1.3fr] gap-14 reveal max-[1100px]:grid-cols-1 max-[1100px]:p-10">
              <div
                className="absolute w-[600px] h-[600px] rounded-full pointer-events-none -top-[200px] -right-[200px]"
                style={{
                  background:
                    "radial-gradient(circle, #6BCFA0 0%, #A8E0BC 50%, transparent 100%)",
                  filter: "blur(100px)",
                  opacity: 0.7,
                }}
              />
              <div className="relative z-[1]">
                <span className="eyebrow">Pré-qualification</span>
                <h2
                  className="font-bold tracking-[-0.03em] leading-[1.05] mt-5"
                  style={{ fontSize: "clamp(28px, 2.6vw, 40px)" }}
                >
                  Pré-qualifier mon site
                  <br />
                  <span className="it">{s.nav.toLowerCase()}.</span>
                </h2>
                <div className="flex flex-col gap-3.5 mt-7">
                  <Reass strong="Sans engagement." text="Estimation et pré-qualif gratuites." />
                  <Reass strong="NDA disponible." text="Dès la pré-qualif si besoin." />
                  <Reass strong="Réponse rapide." text="Rappel sous 24 h ouvrées." />
                </div>
              </div>
              <LeadForm
                source="pole-industrie"
                className="relative z-[1] bg-white rounded-[20px] p-8 shadow-[0_24px_48px_-12px_rgba(10,37,64,0.10)] grid grid-cols-2 gap-[18px] max-[1100px]:grid-cols-1 max-[1100px]:p-6"
              >
                <input type="hidden" name="page-source" value={s.slug} />
                <input type="hidden" name="secteur" value={s.form.secteurValue} />

                <Field name="raison-sociale" label="Raison sociale" placeholder="Ex. Ma Société SAS" />
                <Field name="siret" label="SIRET" placeholder="123 456 789 00012" />

                {s.form.champs.map((c, i) => (
                  <DynField key={c.label} idx={i} field={c} />
                ))}

                <Field name="email" type="email" label="E-mail dirigeant" placeholder="responsable@entreprise.fr" />
                <Field name="phone" type="tel" label="Téléphone" placeholder="+33 1 23 45 67 89" />

                <div className="col-span-2 max-[1100px]:col-span-1">
                  <FieldLabel>Contexte (optionnel)</FieldLabel>
                  <textarea
                    name="contexte"
                    placeholder="Audit déjà engagé ? Échéance interne ? Multi-sites ? Cas atypique ?"
                    className="w-full py-3 px-3.5 border border-[var(--color-border)] rounded-[10px] text-sm bg-[#fafbfc] text-[var(--color-text)] min-h-[80px] resize-y focus:outline-none focus:border-[var(--color-secondary)] focus:bg-white focus:shadow-[0_0_0_3px_rgba(0,168,107,0.12)]"
                  />
                </div>
                {/* v3.1 — RGPD checkbox manquante avant ce fix
                    (cf. diagnostic §2.3, P0 conformité). */}
                <label className="col-span-2 max-[1100px]:col-span-1 flex gap-2.5 items-start text-[12.5px] text-[var(--color-text-2)] py-3 px-3.5 bg-[var(--color-pastel-blue)] rounded-lg leading-[1.5]">
                  <input type="checkbox" name="rgpd" required className="mt-[3px] shrink-0" />
                  <span>
                    J&apos;accepte qu&apos;Agence 3E me contacte sous 24 h
                    avec une pré-qualification chiffrée. Aucune cession à
                    des tiers.{" "}
                    <Link
                      href="/politique-confidentialite-rgpd"
                      className="text-[var(--color-primary)] underline"
                    >
                      Politique de confidentialité
                    </Link>
                    .
                  </span>
                </label>
                <div className="col-span-2 max-[1100px]:col-span-1">
                  <SubmitButton className="w-full justify-center">
                    Pré-qualifier mon site
                  </SubmitButton>
                </div>
              </LeadForm>
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

function Reass({ strong, text }: { strong: string; text: string }) {
  return (
    <div className="flex gap-3 items-start">
      <div className="w-[22px] h-[22px] rounded-full bg-[var(--color-secondary)] text-white text-[11px] font-bold flex items-center justify-center shrink-0">
        ✓
      </div>
      <p className="m-0 text-sm">
        <strong className="text-[var(--color-primary)]">{strong}</strong> {text}
      </p>
    </div>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="mono text-[10.5px] tracking-[0.08em] text-[var(--color-text-3)] uppercase block mb-1.5">
      {children}
    </label>
  );
}

function Field({
  name,
  label,
  placeholder,
  type = "text",
}: {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full py-3 px-3.5 border border-[var(--color-border)] rounded-[10px] text-sm bg-[#fafbfc] text-[var(--color-text)] focus:outline-none focus:border-[var(--color-secondary)] focus:bg-white focus:shadow-[0_0_0_3px_rgba(0,168,107,0.12)]"
      />
    </div>
  );
}

function DynField({
  field,
  idx,
}: {
  field: { label: string; type: "select" | "text" | "number"; options?: string[]; placeholder?: string };
  idx: number;
}) {
  const name = `champ-${idx}`;
  const baseClass =
    "w-full py-3 px-3.5 border border-[var(--color-border)] rounded-[10px] text-sm bg-[#fafbfc] text-[var(--color-text)] focus:outline-none focus:border-[var(--color-secondary)] focus:bg-white focus:shadow-[0_0_0_3px_rgba(0,168,107,0.12)]";

  return (
    <div>
      <FieldLabel>{field.label}</FieldLabel>
      {field.type === "select" && field.options ? (
        <select name={name} className={baseClass}>
          <option value="">— Sélectionner —</option>
          {field.options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
          {/* v3.1 — Option « Autre » pour ne pas bloquer les profils
              atypiques (cf. diagnostic §2.3 P1). L'utilisateur peut
              préciser dans le champ Contexte ci-dessous. */}
          <option value="autre">— Autre, précisez en commentaire</option>
        </select>
      ) : (
        <input
          type={field.type === "number" ? "number" : "text"}
          name={name}
          placeholder={field.placeholder ?? ""}
          className={baseClass}
        />
      )}
    </div>
  );
}
