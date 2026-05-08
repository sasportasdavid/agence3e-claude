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
    "Comment Agence 3E s'organise en deux entités juridiquement distinctes pour respecter l'indépendance auditeur exigée par la norme NF EN 16247-3. SIREN, OPQIBI, FAQ.",
  alternates: { canonical: "/a-propos/notre-independance" },
};

/* ============================================================
   v2 — Page de gouvernance factuelle (cf. AJUSTEMENTS_INDEPENDANCE.md
   section 2). Ton posé/technique, pas manifeste.
   Textes verbatim du livrable.
   ============================================================ */

const FAQ = [
  {
    q: "Pourquoi cette séparation ?",
    a: "La norme NF EN 16247-3 impose à l'auditeur énergétique d'être indépendant des solutions techniques et des installateurs qu'il pourrait recommander. L'objectif est d'éviter le conflit d'intérêt classique où un cabinet recommanderait des travaux dont il toucherait ensuite la marge installateur ou le commissionnement matériel. Notre séparation en deux entités garantit cette indépendance.",
  },
  {
    q: "Est-ce que je dois travailler avec les deux entités ?",
    a: "Non. Vous pouvez choisir de mandater uniquement Agence 3E Audit pour votre obligation DDADUE. Vous repartez avec un rapport d'audit livré sous format PDF, vous gérez ensuite la mise en œuvre comme vous le souhaitez : avec vos installateurs habituels, avec un autre courtier CEE, ou avec Agence 3E Solutions. Aucun engagement n'est imposé sur la suite.",
  },
  {
    q: "Combien ça coûte de plus ?",
    a: "Le coût de notre dispositif est aligné sur la moyenne du marché des audits DDADUE (entre 8 et 25 k€ HT selon la taille du site). La séparation en deux entités n'engendre pas de surcoût pour vous : nos coûts internes de gouvernance sont absorbés dans notre fonctionnement.",
  },
  {
    q: "Vous gagnez quoi sur les CEE et comment c'est encadré ?",
    a: "Si vous choisissez de poursuivre avec Agence 3E Solutions, notre rémunération sur les CEE est fixée à l'avance dans un mandat écrit signé. Elle prend la forme d'une commission de courtage exprimée en €/MWh cumac négocié. Vous voyez le prix net du marché et notre commission, séparément. Pas de marge cachée, pas de surfacturation par défaut.",
  },
  {
    q: "Comment vous vous comparez à Hellio ou Effy qui n'ont qu'une entité ?",
    a: "Hellio et Effy sont des délégataires CEE. Leur modèle économique repose sur la valorisation des CEE qu'ils achètent et revendent. C'est un modèle légitime mais structurellement différent du nôtre : leur rémunération dépend des travaux qu'ils financent. Chez Agence 3E, l'auditeur ne dépend pas du courtage. C'est un choix d'organisation différent, pas un jugement de valeur.",
  },
  {
    q: "Que se passe-t-il si je conteste un audit ?",
    a: "L'auditeur d'Agence 3E Audit est tenu à la conformité NF EN 16247-3. Si vous contestez un de ses constats, vous avez accès à : (1) une note explicative complémentaire de l'auditeur, (2) le calcul détaillé des gisements, (3) si litige persistant, recours à un expert tiers OPQIBI. Notre rapport peut être contre-expertisé, c'est un droit.",
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
                qu&apos;il pourrait recommander. Voici comment Agence 3E
                s&apos;organise pour garantir cette indépendance, et comment
                vous pouvez la vérifier.
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
                  : que les gisements d&apos;économies identifiés
                  correspondent à la réalité technique du site, et non à ce
                  que l&apos;auditeur a intérêt à vendre par la suite.
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
              Deux entités{" "}
              <span className="it">juridiquement distinctes.</span>
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
                  Agence 3E s&apos;organise en deux entités juridiquement
                  distinctes pour respecter l&apos;exigence d&apos;indépendance
                  imposée par la norme NF EN 16247-3 sur les audits
                  énergétiques en industrie.
                </p>
                <p className="text-[17px] text-[var(--color-text-2)] leading-[1.7] reveal">
                  <strong>Agence 3E Audit</strong> est l&apos;entité qui
                  conduit les audits réglementaires DDADUE et les audits
                  volontaires. Elle est certifiée OPQIBI 1905, qualification
                  reconnue pour l&apos;audit énergétique. Ses auditeurs sont
                  salariés de cette entité, ne perçoivent aucune rémunération
                  variable liée aux travaux ou aux montants de prime CEE, et
                  ne sont pas commissionnés sur les recommandations
                  qu&apos;ils formulent dans leurs rapports.
                </p>
                <p className="text-[17px] text-[var(--color-text-2)] leading-[1.7] reveal">
                  <strong>Agence 3E Solutions</strong> est l&apos;entité qui
                  opère le montage des dossiers CEE, le courtage de la prime,
                  et la mise en relation avec des installateurs RGE
                  qualifiés. C&apos;est cette entité qui contractualise avec
                  un délégataire CEE pour valoriser le gisement identifié.
                </p>
                <p className="text-[17px] text-[var(--color-text-2)] leading-[1.7] reveal">
                  Les deux entités sont séparées : capital, dirigeance,
                  équipes, locaux, systèmes informatiques et comptabilité.
                  Cette séparation est documentée et auditable. Vous pouvez
                  choisir de travailler uniquement avec Agence 3E Audit
                  (livrable : rapport d&apos;audit DDADUE) sans engagement
                  sur la suite, ou de poursuivre la mission avec Agence 3E
                  Solutions une fois l&apos;audit livré. Le choix vous
                  appartient.
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
                title="SIREN des deux entités"
                body="Les deux SIREN d'Agence 3E Audit et Agence 3E Solutions sont disponibles sur Annuaire-Entreprises (annuaire-entreprises.data.gouv.fr). Vous pouvez vérifier la séparation capitalistique, les dirigeants, les codes APE et l'historique des dépôts de comptes."
              />
              <VerifyCard
                num="02"
                title="Certification OPQIBI 1905"
                body="La qualification OPQIBI 1905 d'Agence 3E Audit est consultable sur opqibi.com (annuaire des qualifiés). Le certificat est aussi disponible en téléchargement sur demande."
              />
              <VerifyCard
                num="03"
                title="Convention NF EN 16247"
                body="La convention de prestation conforme NF EN 16247-3 est annexée à chaque devis d'audit. Elle décrit la méthodologie, les délais, les engagements et les voies de recours. Disponible en lecture sur demande avant signature."
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
   Schéma simple : 2 entités côte à côte avec une mention "≠"
   au centre. Pas de visuel complexe — juste une grille HTML.
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

      {/* Lignes de bifurcation */}
      <div className="relative mt-3 h-12 max-sm:h-8">
        <div className="absolute left-1/2 top-0 w-px h-3 bg-[var(--color-border)]" />
        <div className="absolute left-1/4 right-1/4 top-3 h-px bg-[var(--color-border)] max-sm:left-[12%] max-sm:right-[12%]" />
        <div className="absolute left-1/4 top-3 w-px h-9 bg-[var(--color-border)] max-sm:left-[12%] max-sm:h-5" />
        <div className="absolute right-1/4 top-3 w-px h-9 bg-[var(--color-border)] max-sm:right-[12%] max-sm:h-5" />
      </div>

      {/* Contrats */}
      <div className="grid grid-cols-2 gap-12 max-sm:gap-3 mb-3">
        <div className="text-center">
          <span className="mono text-[10.5px] tracking-[0.08em] uppercase text-[var(--color-text-3)]">
            Contrat n°1 — Audit DDADUE
          </span>
        </div>
        <div className="text-center">
          <span className="mono text-[10.5px] tracking-[0.08em] uppercase text-[var(--color-text-3)]">
            Contrat n°2 — Courtage CEE + AMO
          </span>
        </div>
      </div>

      {/* Deux cards entités */}
      <div className="grid grid-cols-2 gap-12 max-sm:gap-3">
        <div className="bg-[var(--color-pastel-blue)] rounded-2xl p-6 text-center">
          <div className="mono text-[10px] tracking-[0.1em] uppercase text-[var(--color-text-3)]">
            Entité 1
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
            Entité 2
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

      {/* Mention séparation */}
      <div className="mt-6 text-center">
        <div className="inline-flex items-center gap-2 mono text-[11px] tracking-[0.08em] uppercase text-[var(--color-text-3)] py-2 px-4 bg-[#fafbfc] rounded-full border border-[var(--color-border)]">
          Capital · dirigeance · équipes · locaux · SI · comptabilité —
          tous séparés
        </div>
      </div>
    </div>
  );
}
