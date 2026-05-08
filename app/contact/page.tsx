import type { Metadata } from "next";
import Link from "next/link";
import { AuroreDefs } from "@/components/AuroreDefs";
import { RevealRoot } from "@/components/Reveal";
import { Topbar } from "@/components/Topbar";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { Aurore } from "@/components/Aurore";
import { contactPage as c } from "@/content/contact";
import { LeadForm, SubmitButton } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: c.meta.title,
  description: c.meta.description,
  alternates: { canonical: "/contact" },
};

const TONE_BG: Record<string, string> = {
  rose: "bg-[var(--color-pastel-rose)]",
  blue: "bg-[var(--color-pastel-blue)]",
  green: "bg-[var(--color-pastel-green)]",
};
const TONE_BLOB: Record<string, React.CSSProperties> = {
  rose: {
    background: "radial-gradient(circle, #FF8FA3 0%, #FFB199 60%, transparent 100%)",
  },
  blue: {
    background: "radial-gradient(circle, #6F9CFE 0%, #B5C6FB 60%, transparent 100%)",
  },
  green: {
    background: "radial-gradient(circle, #6BCFA0 0%, #A8E0BC 60%, transparent 100%)",
  },
};

export default function ContactPage() {
  return (
    <>
      <AuroreDefs />
      <Topbar />
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative pt-[80px] pb-[var(--spacing-block-sm)] overflow-hidden">
          <div className="absolute inset-0 -z-[1] opacity-50">
            <Aurore variant="ressources" className="w-full h-full" />
          </div>
          <div className="container-x">
            <span className="eyebrow reveal">Contact</span>
            <h1
              className="display reveal mt-6"
              style={{
                fontSize: "clamp(48px, 5.4vw, 76px)",
                lineHeight: 1.02,
                letterSpacing: "-0.04em",
              }}
            >
              {c.hero.h1.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="it">{c.hero.h1.split(" ").slice(-1)[0]}</span>
            </h1>
            <p className="text-[20px] text-[var(--color-text-2)] mt-6 max-w-[640px] reveal">
              {c.hero.sub}
            </p>

            <div className="mt-12 flex gap-8 flex-wrap text-[15px] reveal max-sm:flex-col max-sm:gap-3">
              <a
                href={`tel:${c.coords.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 hover:text-[var(--color-secondary)]"
              >
                <span className="w-9 h-9 rounded-full bg-[var(--color-secondary-10)] flex items-center justify-center text-[var(--color-secondary)] text-base font-bold">
                  ☎
                </span>
                <span>
                  <span className="mono text-[10.5px] tracking-[0.08em] uppercase text-[var(--color-text-3)] block">
                    Téléphone
                  </span>
                  <span className="font-semibold">{c.coords.phone}</span>
                </span>
              </a>
              <a
                href={`mailto:${c.coords.email}`}
                className="flex items-center gap-3 hover:text-[var(--color-secondary)]"
              >
                <span className="w-9 h-9 rounded-full bg-[var(--color-secondary-10)] flex items-center justify-center text-[var(--color-secondary)] text-base font-bold">
                  ✉
                </span>
                <span>
                  <span className="mono text-[10.5px] tracking-[0.08em] uppercase text-[var(--color-text-3)] block">
                    Email
                  </span>
                  <span className="font-semibold">{c.coords.email}</span>
                </span>
              </a>
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-full bg-[var(--color-secondary-10)] flex items-center justify-center text-[var(--color-secondary)] text-base font-bold">
                  ⏱
                </span>
                <span>
                  <span className="mono text-[10.5px] tracking-[0.08em] uppercase text-[var(--color-text-3)] block">
                    Horaires
                  </span>
                  <span className="font-semibold">{c.coords.horaires}</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 3 portes d'entrée */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <span className="eyebrow reveal">Trois portes d&apos;entrée</span>
            <h2 className="section-title reveal">
              Quel est votre <span className="it">profil ?</span>
            </h2>
            <div className="grid grid-cols-3 gap-7 mt-20 max-[1100px]:grid-cols-1">
              {c.cards.map((card) => (
                <Link
                  key={card.eyebrow}
                  href={card.href}
                  className={`relative rounded-3xl p-10 overflow-hidden min-h-[360px] flex flex-col transition-transform duration-300 hover:-translate-y-1 reveal ${TONE_BG[card.tone]}`}
                >
                  <div
                    className="absolute w-[380px] h-[380px] rounded-full pointer-events-none -top-[120px] -right-[120px]"
                    style={{
                      filter: "blur(60px)",
                      opacity: 0.65,
                      ...TONE_BLOB[card.tone],
                    }}
                  />
                  <span className="relative z-[1] mono text-[11px] tracking-[0.1em] uppercase text-[var(--color-text-2)]">
                    {card.eyebrow}
                  </span>
                  <h3 className="relative z-[1] font-bold text-[28px] tracking-[-0.025em] leading-[1.1] mt-4 text-[var(--color-primary)]">
                    {card.title.lead} <span className="it">{card.title.it}</span>
                  </h3>
                  <p className="relative z-[1] text-[15px] text-[var(--color-text-2)] mt-4 leading-[1.55]">
                    {card.desc}
                  </p>
                  <span className="relative z-[1] mt-auto pt-6 text-sm font-medium text-[var(--color-primary)] inline-flex items-center gap-2">
                    {card.cta} →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Generic form */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <div className="bg-[var(--color-pastel-green)] rounded-[32px] p-20 relative overflow-hidden grid grid-cols-[1fr_1.3fr] gap-16 reveal max-[1100px]:grid-cols-1 max-[1100px]:p-12">
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
                <span className="eyebrow">{c.form.eyebrow}</span>
                <h2
                  className="font-bold tracking-[-0.03em] leading-[1.05] mt-5"
                  style={{ fontSize: "clamp(32px, 2.8vw, 44px)" }}
                >
                  {c.form.title.lead}
                  <br />
                  <span className="it" style={{ fontSize: "inherit" }}>
                    {c.form.title.it}
                  </span>
                </h2>
                <p className="text-base text-[var(--color-text-2)] mt-4 leading-[1.55] max-w-[420px]">
                  {c.form.body}
                </p>
              </div>
              <LeadForm
                source="contact-generic"
                className="relative z-[1] bg-white rounded-[20px] p-9 shadow-[0_24px_48px_-12px_rgba(10,37,64,0.10)] grid grid-cols-2 gap-[18px] max-[1100px]:grid-cols-1 max-[1100px]:p-7"
              >
                <Field
                  name="nom"
                  label="Nom · Prénom"
                  placeholder="Julie Morel"
                />
                <Field
                  name="societe"
                  label="Société · Organisme"
                  placeholder="Optionnel"
                />
                <Field
                  name="email"
                  label="Email"
                  placeholder="vous@societe.fr"
                  type="email"
                />
                <Field
                  name="phone"
                  label="Téléphone"
                  placeholder="+33 6 12 34 56 78"
                  type="tel"
                />
                <div className="col-span-2 max-[1100px]:col-span-1">
                  <FieldLabel>Votre message</FieldLabel>
                  <textarea
                    name="message"
                    placeholder="Décrivez votre projet en quelques lignes — secteur, échéance, contact souhaité…"
                    className="w-full py-3 px-3.5 border border-[var(--color-border)] rounded-[10px] text-sm bg-[#fafbfc] text-[var(--color-text)] min-h-[120px] resize-y focus:outline-none focus:border-[var(--color-secondary)] focus:bg-white focus:shadow-[0_0_0_3px_rgba(0,168,107,0.12)]"
                  />
                </div>
                <label className="col-span-2 flex gap-2.5 items-start text-[12.5px] text-[var(--color-text-2)] py-3 px-3.5 bg-[var(--color-pastel-blue)] rounded-lg leading-[1.5] max-[1100px]:col-span-1">
                  <input type="checkbox" required className="mt-[3px] shrink-0" />
                  <span>
                    J&apos;accepte qu&apos;Agence 3E me contacte. Aucune cession à des tiers.{" "}
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
                    Envoyer ma demande
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
