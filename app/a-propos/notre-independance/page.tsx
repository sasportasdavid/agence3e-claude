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

export const metadata: Metadata = {
  title:
    "Gouvernance et conformité NF EN 16247 | Agence 3E",
  description:
    "Comment A3E SAS cloisonne ses pôles Audit et Solutions pour respecter l'indépendance auditeur exigée par la norme NF EN 16247-3. SIREN, OPQIBI, FAQ.",
  alternates: { canonical: "/a-propos/notre-independance" },
};

/* ============================================================
   v2 — Page de gouvernance factuelle (cf. AJUSTEMENTS_INDEPENDANCE.md
   section 2). Ton posé/technique, pas manifeste.
   Textes verbatim du livrable.
   ============================================================ */

const FAQ = [
  {
    q: "Pourquoi ce cloisonnement ?",
    a: "La norme NF EN 16247-3 impose à l'auditeur énergétique d'être indépendant des solutions techniques et des installateurs qu'il pourrait recommander. L'objectif est d'éviter le conflit d'intérêt classique où un cabinet recommanderait des travaux dont il toucherait ensuite la marge installateur ou le commissionnement matériel. Notre cloisonnement opérationnel entre les pôles Audit et Solutions, formalisé par mandats clients distincts et comptabilité analytique séparée, est conçu pour répondre à cette exigence.",
  },
  {
    q: "Est-ce que je dois travailler avec les deux pôles ?",
    a: "Non. Vous pouvez choisir de mandater uniquement le pôle Agence 3E Audit pour votre obligation DDADUE. Vous repartez avec un rapport d'audit livré sous format PDF, vous gérez ensuite la mise en œuvre comme vous le souhaitez : avec vos installateurs habituels, avec un autre courtier CEE, ou avec le pôle Agence 3E Solutions. Aucun engagement n'est imposé sur la suite.",
  },
  {
    q: "Combien ça coûte de plus ?",
    a: "Le coût de notre dispositif est aligné sur la moyenne du marché des audits DDADUE (entre 8 et 25 k€ HT selon la taille du site). Le cloisonnement opérationnel entre nos deux pôles n'engendre pas de surcoût pour vous : nos coûts internes de gouvernance sont absorbés dans notre fonctionnement.",
  },
  {
    q: "Vous gagnez quoi sur les CEE et comment c'est encadré ?",
    a: "Si vous choisissez de poursuivre avec le pôle Agence 3E Solutions, notre rémunération sur les CEE est fixée à l'avance dans un mandat écrit signé. Elle prend la forme d'une commission de courtage exprimée en €/MWh cumac négocié. Vous voyez le prix net du marché et notre commission, séparément. Pas de marge cachée, pas de surfacturation par défaut. Important : la rémunération des auditeurs du pôle Audit ne dépend ni des dossiers Solutions, ni des montants des primes CEE.",
  },
  {
    q: "Comment vous vous comparez à Hellio ou Effy ?",
    a: "Hellio et Effy sont des délégataires CEE. Leur modèle économique repose sur la valorisation des CEE qu'ils achètent et revendent. C'est un modèle légitime mais structurellement différent du nôtre : leur rémunération dépend des travaux qu'ils financent. Chez A3E, le pôle Audit ne dépend pas commercialement du pôle Solutions — la séparation des mandats et la comptabilité analytique cloisonnée sont conçues pour neutraliser ce lien. C'est un choix d'organisation différent, pas un jugement de valeur.",
  },
  {
    q: "Que se passe-t-il si je conteste un audit ?",
    a: "L'auditeur du pôle Agence 3E Audit est tenu à la conformité NF EN 16247-3. Si vous contestez un de ses constats, vous avez accès à : (1) une note explicative complémentaire de l'auditeur, (2) le calcul détaillé des leviers identifiés, (3) si litige persistant, recours à un expert tiers OPQIBI. Notre rapport peut être contre-expertisé, c'est un droit.",
  },
];

export default function GouvernancePage() {
  return (
    <>
      <AuroreDefs />
      <Topbar />
      <SiteHeader />
      <Breadcrumb
        items={[
          { href: "/", label: "Accueil" },
          { href: "/a-propos/notre-mission", label: "À propos" },
          { label: "Gouvernance et conformité" },
        ]}
      />

      <main>
        {/* Hero */}
        <section className="relative pt-[60px] pb-[var(--spacing-block-sm)] overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-[600px] opacity-35 pointer-events-none -z-[1]">
            <Aurore variant="ressources" className="w-full h-full" />
          </div>
          <div className="container-x">
            <div className="max-w-[860px]">
              <span className="eyebrow reveal">À propos · Gouvernance</span>
              <h1
                className="display reveal mt-6"
                style={{
                  fontSize: "clamp(40px, 4.6vw, 64px)",
                  lineHeight: 1.04,
                  letterSpacing: "-0.04em",
                }}
              >
                Gouvernance et conformité <span className="it">NF EN 16247.</span>
              </h1>
              <p className="text-[19px] text-[var(--color-text-2)] mt-7 max-w-[720px] leading-[1.55] reveal">
                La norme NF EN 16247-3 impose à l&apos;auditeur énergétique
                d&apos;être indépendant des solutions et des installateurs
                qu&apos;il pourrait recommander. Voici comment A3E SAS
                cloisonne ses pôles Audit et Solutions pour garantir cette
                indépendance, et comment vous pouvez la vérifier.
              </p>
            </div>
          </div>
        </section>

        {/* 1. La norme NF EN 16247-3 */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <div className="grid grid-cols-[1fr_1.4fr] gap-16 items-start max-[1100px]:grid-cols-1 max-[1100px]:gap-8">
              <div>
                <span className="eyebrow reveal">01 · La norme</span>
                <h2 className="section-title reveal">
                  Ce que dit{" "}
                  <span className="it">NF EN 16247-3.</span>
                </h2>
              </div>
              <div className="flex flex-col gap-5 max-w-[680px]">
                <p className="text-[17px] text-[var(--color-text-2)] leading-[1.7] reveal">
                  La norme européenne <strong>NF EN 16247</strong> (transposée
                  en droit français par AFNOR) précise les exigences
                  applicables à l&apos;audit énergétique. La{" "}
                  <strong>partie 3</strong> traite spécifiquement des audits
                  conduits sur les procédés industriels, qui sont les plus
                  sensibles au conflit d&apos;intérêt entre l&apos;auditeur
                  et les fournisseurs de solutions.
                </p>
                <p className="text-[17px] text-[var(--color-text-2)] leading-[1.7] reveal">
                  L&apos;article L. 233-1 du Code de l&apos;Énergie (transposition
                  DDADUE) renvoie explicitement aux normes NF EN 16247-1, 3
                  et 4 pour la conformité de l&apos;audit obligatoire. Un
                  rapport non conforme à la norme n&apos;est pas opposable au
                  PNCEE et expose l&apos;entreprise à la sanction de 2 % du
                  CA HT.
                </p>
                <p className="text-[17px] text-[var(--color-text-2)] leading-[1.7] reveal">
                  L&apos;exigence d&apos;indépendance vise un objectif simple
                  : que les leviers d&apos;économies identifiés correspondent
                  à la réalité technique du site, et non à ce que
                  l&apos;auditeur a intérêt à vendre par la suite.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Notre organisation */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <span className="eyebrow reveal">02 · Notre organisation</span>
            <h2 className="section-title reveal">
              Deux pôles opérationnels{" "}
              <span className="it">cloisonnés.</span>
            </h2>

            {/* Schéma simple */}
            <div className="mt-12 max-w-[920px] reveal">
              <EntityDiagram />
            </div>

            <div className="mt-14 grid grid-cols-[1fr_1.4fr] gap-16 items-start max-[1100px]:grid-cols-1 max-[1100px]:gap-8">
              <div>
                <p className="it text-[20px] text-[var(--color-primary)] leading-[1.5] reveal">
                  Une organisation, pas un manifeste.
                </p>
              </div>
              <div className="flex flex-col gap-5 max-w-[680px]">
                <p className="text-[17px] text-[var(--color-text-2)] leading-[1.7] reveal">
                  A3E SAS (SIREN 887 859 254) structure son activité en deux
                  pôles opérationnels cloisonnés pour répondre à
                  l&apos;exigence d&apos;indépendance imposée par la norme
                  NF EN 16247-3 sur les audits énergétiques en industrie.
                </p>
                <p className="text-[17px] text-[var(--color-text-2)] leading-[1.7] reveal">
                  <strong>Agence 3E Audit</strong> est le pôle qui conduit
                  les audits réglementaires DDADUE et les audits volontaires.
                  Il est porté par la qualification OPQIBI 1905 d&apos;A3E
                  SAS, reconnue pour l&apos;audit énergétique. Les auditeurs
                  rattachés à ce pôle ne perçoivent aucune rémunération
                  variable liée aux travaux ou aux montants de prime CEE, et
                  ne sont pas commissionnés sur les recommandations
                  qu&apos;ils formulent dans leurs rapports.
                </p>
                <p className="text-[17px] text-[var(--color-text-2)] leading-[1.7] reveal">
                  <strong>Agence 3E Solutions</strong> est le pôle qui opère
                  le montage des dossiers CEE, le courtage de la prime, et
                  la mise en relation avec des installateurs RGE qualifiés.
                  C&apos;est ce pôle qui contractualise avec un délégataire
                  CEE pour valoriser le levier identifié.
                </p>
                <p className="text-[17px] text-[var(--color-text-2)] leading-[1.7] reveal">
                  Le cloisonnement entre les deux pôles repose sur :
                  mandats clients distincts (un mandat pour l&apos;audit, un
                  mandat séparé pour le montage CEE et l&apos;AMO),
                  comptabilité analytique séparée, équipes distinctes,
                  rémunérations cloisonnées, et règles internes de prévention
                  des conflits d&apos;intérêt. Vous pouvez choisir de
                  travailler uniquement avec le pôle Audit (livrable :
                  rapport d&apos;audit DDADUE) sans engagement sur la suite,
                  ou de poursuivre la mission avec le pôle Solutions une fois
                  l&apos;audit livré. Le choix vous appartient.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Comment vérifier */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <span className="eyebrow reveal">03 · Vérifier</span>
            <h2 className="section-title reveal">
              Comment vous pouvez{" "}
              <span className="it">le vérifier vous-même.</span>
            </h2>
            <div className="mt-12 grid grid-cols-3 gap-7 max-[1100px]:grid-cols-1">
              <VerifyCard
                num="01"
                title="SIREN A3E SAS"
                body="A3E SAS est immatriculée sous le SIREN 887 859 254 (RCS Paris). La fiche officielle est consultable sur Annuaire-Entreprises (annuaire-entreprises.data.gouv.fr) : forme juridique, dirigeants, code APE, historique des dépôts de comptes."
              />
              <VerifyCard
                num="02"
                title="Certification OPQIBI 1905"
                body="La qualification OPQIBI 1905, requise pour l'activité d'audit énergétique, est consultable sur opqibi.com (annuaire des qualifiés). Le certificat est également disponible en téléchargement sur demande."
              />
              <VerifyCard
                num="03"
                title="Mandats et convention NF EN 16247"
                body="Le mandat d'audit (pôle Audit) et le mandat de courtage CEE (pôle Solutions) sont distincts et signés séparément. La convention de prestation conforme NF EN 16247-3 est annexée à chaque devis d'audit : méthodologie, délais, engagements, voies de recours. Disponible en lecture sur demande avant signature."
              />
            </div>
          </div>
        </section>

        {/* 4. FAQ */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <span className="eyebrow reveal">04 · FAQ</span>
            <h2 className="section-title reveal">
              Six questions{" "}
              <span className="it">qui reviennent.</span>
            </h2>
            <div className="mt-14 max-w-[880px]">
              {FAQ.map((item, i) => (
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
                  <div className="pb-7 pl-14 pr-0 text-[15px] text-[var(--color-text-2)] leading-[1.65] max-w-[720px]">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA fin */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <div className="bg-[var(--color-pastel-blue)] rounded-3xl py-12 px-14 max-w-[920px] reveal max-[1100px]:py-10 max-[1100px]:px-7">
              <span className="eyebrow">Pour aller plus loin</span>
              <h3 className="text-[24px] font-bold tracking-[-0.025em] mt-4 text-[var(--color-primary)]">
                La norme NF EN 16247-3 expliquée{" "}
                <span className="it">en pédagogie.</span>
              </h3>
              <p className="text-[15px] text-[var(--color-text-2)] mt-3 leading-[1.6] max-w-[560px]">
                Origine, 4 parties, exigences précises d&apos;indépendance,
                contrôles. Page de référence à part, sans mention commerciale.
              </p>
              <Link
                href="/comprendre/independance-auditeur-nf-en-16247"
                className="btn btn-primary btn-arrow mt-6 inline-flex"
              >
                Lire la fiche norme
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

function VerifyCard({
  num,
  title,
  body,
}: {
  num: string;
  title: string;
  body: string;
}) {
  return (
    <div className="bg-white border border-[var(--color-border)] rounded-2xl p-7 reveal">
      <span
        className="it text-[36px] text-[var(--color-secondary)] leading-none"
        style={{ fontFeatureSettings: '"tnum" 1' }}
      >
        {num}
      </span>
      <h3 className="text-[18px] font-bold tracking-[-0.02em] mt-3 text-[var(--color-primary)]">
        {title}
      </h3>
      <p className="text-[14.5px] text-[var(--color-text-2)] mt-3 leading-[1.6]">
        {body}
      </p>
    </div>
  );
}

/* ============================================================
   Schéma simple : A3E SAS en haut, deux pôles cloisonnés en
   dessous, avec mandats client distincts. Reflète la réalité
   légale (1 personne morale) et l'organisation interne.
   ============================================================ */
function EntityDiagram() {
  return (
    <div className="bg-white border border-[var(--color-border)] rounded-3xl p-10 max-sm:p-6">
      {/* Client en haut */}
      <div className="text-center">
        <div className="inline-block py-3 px-7 bg-[var(--color-primary)] text-white rounded-full text-[14px] font-semibold tracking-[-0.01em]">
          Vous (client industriel ou tertiaire)
        </div>
      </div>

      {/* Personne morale unique — A3E SAS */}
      <div className="mt-5 text-center">
        <div className="inline-block py-2 px-5 bg-[var(--color-bg-alt,#FAFBFC)] border border-[var(--color-border)] rounded-full">
          <span className="mono text-[10.5px] tracking-[0.08em] uppercase text-[var(--color-text-3)]">
            A3E SAS · SIREN 887 859 254
          </span>
        </div>
      </div>

      {/* Lignes de bifurcation */}
      <div className="relative mt-3 h-12 max-sm:h-8">
        <div className="absolute left-1/2 top-0 w-px h-3 bg-[var(--color-border)]" />
        <div className="absolute left-1/4 right-1/4 top-3 h-px bg-[var(--color-border)] max-sm:left-[12%] max-sm:right-[12%]" />
        <div className="absolute left-1/4 top-3 w-px h-9 bg-[var(--color-border)] max-sm:left-[12%] max-sm:h-5" />
        <div className="absolute right-1/4 top-3 w-px h-9 bg-[var(--color-border)] max-sm:right-[12%] max-sm:h-5" />
      </div>

      {/* Mandats */}
      <div className="grid grid-cols-2 gap-12 max-sm:gap-3 mb-3">
        <div className="text-center">
          <span className="mono text-[10.5px] tracking-[0.08em] uppercase text-[var(--color-text-3)]">
            Mandat n°1 — Audit DDADUE
          </span>
        </div>
        <div className="text-center">
          <span className="mono text-[10.5px] tracking-[0.08em] uppercase text-[var(--color-text-3)]">
            Mandat n°2 — Courtage CEE + AMO
          </span>
        </div>
      </div>

      {/* Deux cards pôles */}
      <div className="grid grid-cols-2 gap-12 max-sm:gap-3">
        <div className="bg-[var(--color-pastel-blue)] rounded-2xl p-6 text-center">
          <div className="mono text-[10px] tracking-[0.1em] uppercase text-[var(--color-text-3)]">
            Pôle 1
          </div>
          <div className="text-[18px] font-bold text-[var(--color-primary)] mt-2 tracking-[-0.02em]">
            Agence 3E Audit
          </div>
          <div className="it text-[14px] text-[var(--color-primary)] mt-1">
            Bureau d&apos;études · OPQIBI 1905
          </div>
          <div className="text-[12px] text-[var(--color-text-2)] mt-3 leading-[1.5]">
            Audits NF EN 16247-1 et 16247-3, dépôt AIDER, plan
            d&apos;action chiffré.
          </div>
        </div>
        <div className="bg-[var(--color-pastel-green)] rounded-2xl p-6 text-center">
          <div className="mono text-[10px] tracking-[0.1em] uppercase text-[var(--color-text-3)]">
            Pôle 2
          </div>
          <div className="text-[18px] font-bold text-[var(--color-primary)] mt-2 tracking-[-0.02em]">
            Agence 3E Solutions
          </div>
          <div className="it text-[14px] text-[var(--color-primary)] mt-1">
            Hub commercial CEE
          </div>
          <div className="text-[12px] text-[var(--color-text-2)] mt-3 leading-[1.5]">
            Montage et courtage CEE, mise en relation installateurs RGE,
            suivi de chantier AMO.
          </div>
        </div>
      </div>

      {/* Mention cloisonnement */}
      <div className="mt-6 text-center">
        <div className="inline-flex items-center gap-2 mono text-[11px] tracking-[0.08em] uppercase text-[var(--color-text-3)] py-2 px-4 bg-[#fafbfc] rounded-full border border-[var(--color-border)]">
          Mandats · équipes · rémunérations · comptabilité analytique —
          cloisonnés
        </div>
      </div>
    </div>
  );
}
