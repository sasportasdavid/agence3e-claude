import type { Metadata } from "next";
import Link from "next/link";
import { AuroreDefs } from "@/components/AuroreDefs";
import { RevealRoot } from "@/components/Reveal";
import { Topbar } from "@/components/Topbar";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { Aurore } from "@/components/Aurore";
import { LeadForm, SubmitButton } from "@/components/LeadForm";

/**
 * /simulateur-cee — v3.4 (désactivation simulateur multi-step)
 *
 * Le composant Simulateur (4 étapes avec résultat 52 800 € codé en
 * dur) reste dans le repo (components/Simulateur.tsx) mais n'est
 * plus appelé. La page sert maintenant un formulaire de contact
 * pré-rempli pour estimation personnalisée sous 48 h.
 *
 * Les liens existants vers /simulateur-cee?segment=residentiel
 * (mega-menu Particuliers, etc.) continuent de fonctionner —
 * la page lit le queryparam et l'affiche en hidden field pour le
 * lead Resend.
 */

export const metadata: Metadata = {
  title:
    "Estimation prime CEE personnalisée — Sous 48 h | Agence 3E",
  description:
    "Décrivez votre site et votre opération. Notre équipe vous propose une estimation chiffrée sous 48 h, basée sur les fiches CEE officielles et les conditions actuelles du marché.",
  alternates: { canonical: "/simulateur-cee" },
};

export default async function SimulateurPage(props: {
  searchParams: Promise<{ segment?: string; source?: string }>;
}) {
  const sp = await props.searchParams;
  const segment = sp?.segment ?? "";
  const source = sp?.source ?? "estimation-cee";

  return (
    <>
      <AuroreDefs />
      <Topbar />
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden pt-24 pb-32 lg:pt-32 lg:pb-40">
          <div className="absolute right-0 top-0 w-[55%] h-[600px] opacity-50 pointer-events-none -z-[1] max-[1100px]:opacity-30">
            <Aurore variant="ressources" className="w-full h-full" />
          </div>

          <div className="max-w-[880px] mx-auto px-6 lg:px-12">
            <span className="eyebrow reveal">Estimation personnalisée</span>
            <h1
              className="display reveal mt-6"
              style={{
                fontSize: "clamp(36px, 4.4vw, 60px)",
                fontWeight: 600,
                letterSpacing: "-0.035em",
                lineHeight: 1.05,
              }}
            >
              Décrivez votre projet,
              <br />
              <span className="it" style={{ fontWeight: 400 }}>
                on calibre votre estimation.
              </span>
            </h1>
            <p className="text-[18px] text-[var(--color-text-2)] leading-[1.65] mt-7 max-w-[680px] reveal">
              L&apos;estimation précise de votre prime CEE dépend de votre
              secteur, de la taille de votre site et de l&apos;opération
              envisagée. Décrivez votre projet en 2 minutes — notre équipe
              vous revient sous 48 h avec une estimation chiffrée et la
              liste des fiches CEE applicables à votre cas.
            </p>

            <div className="mt-12 reveal">
              <div className="bg-[var(--color-pastel-green)] rounded-[28px] p-10 lg:p-14 relative overflow-hidden">
                <div
                  className="absolute w-[400px] h-[400px] rounded-full pointer-events-none -top-[120px] -right-[120px]"
                  style={{
                    background:
                      "radial-gradient(circle, #6BCFA0 0%, #A8E0BC 50%, transparent 100%)",
                    filter: "blur(80px)",
                    opacity: 0.6,
                  }}
                />
                <div className="relative z-[1]">
                  <span className="eyebrow">Demande d&apos;estimation</span>
                  <h2
                    className="font-bold tracking-[-0.025em] leading-[1.1] mt-4"
                    style={{ fontSize: "clamp(24px, 2.4vw, 32px)" }}
                  >
                    Six champs.{" "}
                    <span className="it" style={{ fontWeight: 400 }}>
                      Estimation chiffrée sous 48 h.
                    </span>
                  </h2>

                  <LeadForm
                    source="simulateur-cee"
                    className="mt-7 bg-white rounded-2xl p-7 shadow-[0_24px_48px_-12px_rgba(10,37,64,0.10)] grid grid-cols-2 gap-[18px] max-md:grid-cols-1 max-md:p-6"
                  >
                    <input type="hidden" name="page-source" value={source} />
                    {segment && (
                      <input
                        type="hidden"
                        name="segment-prefilled"
                        value={segment}
                      />
                    )}

                    <Field
                      name="raison-sociale"
                      label="Raison sociale"
                      placeholder="Ex. Ma Société SAS"
                    />
                    <SelectField
                      name="segment"
                      label="Votre segment"
                      defaultValue={
                        segment === "industrie" ||
                        segment === "tertiaire" ||
                        segment === "residentiel"
                          ? segment
                          : ""
                      }
                      options={[
                        { value: "industrie", label: "Industrie" },
                        { value: "tertiaire", label: "Tertiaire" },
                        { value: "residentiel", label: "Résidentiel" },
                        { value: "autre", label: "Profil mixte / autre" },
                      ]}
                    />

                    <Field
                      name="conso-annuelle"
                      label="Consommation annuelle"
                      placeholder="Ex. 4,2 GWh ou 720 MWh"
                    />
                    <Field
                      name="operation"
                      label="Opération envisagée"
                      placeholder="Ex. Récupération chaleur, isolation, GTB…"
                    />

                    <Field
                      name="email"
                      label="E-mail"
                      placeholder="responsable@entreprise.fr"
                      type="email"
                    />
                    <Field
                      name="phone"
                      label="Téléphone"
                      placeholder="+33 1 23 45 67 89"
                      type="tel"
                    />

                    <div className="col-span-2 max-md:col-span-1">
                      <FieldLabel>Précisions (optionnel)</FieldLabel>
                      <textarea
                        name="contexte"
                        placeholder="Échéance interne, budget, multi-sites, équipement existant…"
                        className="w-full py-3 px-3.5 border border-[var(--color-border)] rounded-[10px] text-sm bg-[#fafbfc] text-[var(--color-text)] min-h-[90px] resize-y focus:outline-none focus:border-[var(--color-secondary)] focus:bg-white focus:shadow-[0_0_0_3px_rgba(0,168,107,0.12)]"
                      />
                    </div>

                    <label className="col-span-2 max-md:col-span-1 flex gap-2.5 items-start text-[12.5px] text-[var(--color-text-2)] py-3 px-3.5 bg-[var(--color-pastel-blue)] rounded-lg leading-[1.5]">
                      <input
                        type="checkbox"
                        name="rgpd"
                        required
                        className="mt-[3px] shrink-0"
                      />
                      <span>
                        J&apos;accepte qu&apos;Agence 3E me contacte sous
                        48 h avec une estimation personnalisée. Aucune
                        cession à des tiers.{" "}
                        <Link
                          href="/politique-confidentialite-rgpd"
                          className="text-[var(--color-primary)] underline"
                        >
                          Politique de confidentialité
                        </Link>
                        .
                      </span>
                    </label>

                    <div className="col-span-2 max-md:col-span-1">
                      <SubmitButton className="w-full justify-center">
                        Demander mon estimation
                      </SubmitButton>
                    </div>
                  </LeadForm>
                </div>
              </div>
            </div>

            <p className="mono text-[11.5px] text-[var(--color-text-3)] tracking-[0.04em] mt-10 leading-[1.7]">
              Toutes les estimations s&apos;appuient sur les fiches CEE
              officielles publiées par l&apos;ATEE et les barèmes en
              vigueur (6ᵉ période).{" "}
              <Link
                href="/comprendre/fiches-operations-standardisees"
                className="text-[var(--color-primary)] underline underline-offset-2"
              >
                Catalogue 130 fiches industrie
              </Link>{" "}
              ·{" "}
              <Link
                href="/comprendre/qu-est-ce-qu-un-cee"
                className="text-[var(--color-primary)] underline underline-offset-2"
              >
                Comprendre les CEE
              </Link>
            </p>
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

function SelectField({
  name,
  label,
  options,
  defaultValue = "",
}: {
  name: string;
  label: string;
  options: { value: string; label: string }[];
  defaultValue?: string;
}) {
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <select
        name={name}
        defaultValue={defaultValue}
        className="w-full py-3 px-3.5 border border-[var(--color-border)] rounded-[10px] text-sm bg-[#fafbfc] text-[var(--color-text)] focus:outline-none focus:border-[var(--color-secondary)] focus:bg-white focus:shadow-[0_0_0_3px_rgba(0,168,107,0.12)]"
      >
        <option value="">— Sélectionner —</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}
