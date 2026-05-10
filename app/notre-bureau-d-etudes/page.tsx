import type { Metadata } from "next";
import Image from "next/image";
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
    "Notre bureau d'études Agence 3E Audit | Auditeur certifié OPQIBI",
  description:
    "Présentation de notre bureau d'études interne (pôle Agence 3E Audit d'A3E SAS). Qualification OPQIBI 1905, conformité NF EN 16247, pôle opérationnellement cloisonné du pôle Solutions.",
  alternates: { canonical: "/notre-bureau-d-etudes" },
};

/* ============================================================
   v3 — Refonte page bureau d'études (8 sections) :
   1. Hero (avec zone photo cabinet à droite)
   2. Méthode (4 étapes)
   3. Certifications (inchangé)
   4. Couverture (3 colonnes — géo / sectoriel / technique)
   5. Encart bleu nuit « pôle cloisonné »
   6. Normes (inchangé)
   7. Engagement qualité (3 piliers, remplace « Notre matériel »)
   8. Délais indicatifs (anciennement « engagements contractuels »)

   Note : terminologie alignée sur le commit légal A3E SAS — un seul
   SIREN, deux pôles opérationnels cloisonnés (Audit / Solutions),
   pas deux personnes morales distinctes.
   ============================================================ */

const METHODE = [
  {
    num: "01",
    title: "Cadrage et NDA",
    body:
      "Identification du périmètre, signature NDA, recueil documentaire (factures, plans, fiches techniques équipements).",
  },
  {
    num: "02",
    title: "Audit énergétique",
    body:
      "Visite de site, mesures sur points critiques, modélisation des consommations, identification des leviers d'économies.",
  },
  {
    num: "03",
    title: "Plan d'action priorisé",
    body:
      "Hiérarchisation des leviers par ROI, plan d'action sur 4 ans, chiffrage technique et financier.",
  },
  {
    num: "04",
    title: "Livrable et dépôt",
    body:
      "Rapport NF EN 16247-3 complet, dépôt sur AIDER, présentation en CODIR si demandé.",
  },
];

const CERTIFS = [
  { code: "OPQIBI 1905", title: "Audit énergétique des bâtiments" },
  {
    code: "OPQIBI 1907",
    title: "Audit énergétique de l'industrie",
    note: "à confirmer selon profil",
  },
  { code: "OPQIBI 1911", title: "Audit énergétique des maisons individuelles" },
  { code: "RGE Études", title: "Reconnu Garant de l'Environnement" },
  { code: "ATEE", title: "Membre Association Technique Énergie Environnement" },
];

const COUVERTURE = [
  {
    eyebrow: "Géographique",
    items: [
      "France métropolitaine",
      "Outre-mer (DOM)",
      "Déplacements pris en charge",
    ],
  },
  {
    eyebrow: "Sectorielle",
    items: [
      "Sites industriels > 2,75 GWh/an",
      "Bâtiments tertiaires",
      "Copropriétés et résidentiel",
    ],
  },
  {
    eyebrow: "Technique",
    items: ["Process froid IAA", "Plasturgie, métallurgie", "GTB et systèmes énergétiques"],
  },
];

const NORMES = [
  { code: "NF EN 16247-1", title: "Exigences générales pour audit énergétique" },
  { code: "NF EN 16247-3", title: "Audit énergétique de procédés (industrie)" },
  { code: "NF EN 16247-4", title: "Audit énergétique transports" },
  { code: "ISO 50001", title: "Articulation avec les SMÉ certifiés" },
  {
    code: "NF EN 17463",
    title: "Évaluation des décisions d'investissement liées à l'énergie",
  },
];

const QUALITE = [
  {
    eyebrow: "Traçabilité",
    title: "Traçabilité documentaire.",
    body:
      "Toutes les hypothèses de calcul, sources de données et choix méthodologiques sont documentés dans le rapport. Le client peut reproduire le raisonnement.",
  },
  {
    eyebrow: "Métrologie",
    title: "Mesures et instruments.",
    body:
      "Instruments de mesure conformes aux exigences NF EN 16247. Périmètre, incertitudes et limites de la modélisation signalés dans le rapport.",
  },
  {
    eyebrow: "Indépendance",
    title: "Indépendance et transparence.",
    body:
      "Aucune commission perçue par les auditeurs sur les travaux préconisés. Le rapport engage la responsabilité civile professionnelle d'A3E SAS au titre de son pôle Audit.",
  },
];

const ENGAGEMENTS = [
  { duration: "24 h", label: "Pré-qualification", desc: "Retour sous 24 h ouvrées" },
  { duration: "48 h", label: "Devis ferme", desc: "Sous 48 h après pré-qualification" },
  {
    duration: "4 sem.",
    label: "Visite de site",
    desc: "Programmée généralement sous 4 semaines après signature",
  },
  {
    duration: "25 j",
    label: "Rapport d'audit",
    desc: "Livré généralement sous 25 jours après visite",
  },
  { duration: "—", label: "Dépôt AIDER", desc: "Dans les délais réglementaires" },
];

export default function NotreBureauPage() {
  return (
    <>
      <AuroreDefs />
      <Topbar />
      <SiteHeader />
      <Breadcrumb
        items={[
          { href: "/", label: "Accueil" },
          { href: "/", label: "Cabinet" },
          { label: "Notre bureau d'études" },
        ]}
      />

      <main>
        {/* ========================================================
            1. Hero — split texte / photo cabinet
            ======================================================== */}
        <section className="relative pt-[60px] pb-[var(--spacing-block-sm)] overflow-hidden">
          <div className="absolute right-0 top-0 w-[55%] h-[700px] opacity-30 pointer-events-none -z-[1] max-[1100px]:opacity-15">
            <Aurore variant="reglementation" className="w-full h-full" />
          </div>
          <div className="container-x">
            <div className="grid grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center max-[1100px]:grid-cols-1 max-[1100px]:gap-10">
              <div>
                <span className="eyebrow reveal">
                  Cabinet · Bureau d&apos;études interne
                </span>
                <h1
                  className="display reveal mt-6"
                  style={{
                    fontSize: "clamp(40px, 4.6vw, 64px)",
                    lineHeight: 1.04,
                    letterSpacing: "-0.04em",
                  }}
                >
                  Notre bureau d&apos;études : Agence 3E Audit,
                  <br />
                  <span className="it">entité dédiée.</span>
                </h1>
                <p className="text-[19px] text-[var(--color-text-2)] mt-7 max-w-[640px] leading-[1.55] reveal">
                  Le bureau d&apos;études d&apos;A3E SAS est un pôle
                  opérationnellement cloisonné de l&apos;activité commerciale
                  CEE — mandats clients distincts, rémunérations séparées,
                  comptabilité analytique cloisonnée. Cette organisation
                  répond à l&apos;exigence d&apos;indépendance auditeur posée
                  par NF EN 16247-3.
                </p>
                <div className="mt-10 reveal">
                  <Link
                    href="/a-propos/notre-independance"
                    className="btn btn-secondary btn-arrow"
                  >
                    Voir la page Gouvernance
                  </Link>
                </div>
              </div>

              {/* Photo cabinet — Image Next.js optimisée. Le fichier doit
                  exister à `public/cabinet/equipe.jpg`. Vue plongeante d'un
                  ingénieur sur plans techniques (atmosphère bureau d'études). */}
              <div className="reveal">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-[var(--color-pastel-blue)] border border-[var(--color-border-2)]">
                  <Image
                    src="/cabinet/equipe.jpg"
                    alt="Bureau d'études Agence 3E Audit — vue d'un ingénieur travaillant sur des plans techniques"
                    fill
                    sizes="(max-width: 1100px) 100vw, 540px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            2. NOUVELLE — Notre méthode (4 étapes)
            ======================================================== */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <div className="max-w-[760px]">
              <span className="eyebrow reveal">Méthode</span>
              <h2 className="section-title reveal">
                Une méthode, <span className="it">quatre étapes.</span>
              </h2>
              <p className="text-[18px] text-[var(--color-text-2)] leading-[1.65] mt-6 reveal">
                Conduite NF EN 16247 sur l&apos;ensemble du périmètre
                d&apos;audit. De la prise de contact à la livraison du
                rapport AIDER.
              </p>
            </div>

            <div className="grid grid-cols-4 gap-6 mt-14 max-[1100px]:grid-cols-2 max-sm:grid-cols-1">
              {METHODE.map((m, i) => (
                <div
                  key={m.num}
                  className="bg-white border border-[var(--color-border-2)] rounded-2xl p-7 reveal"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div
                    className="it text-[40px] text-[var(--color-secondary)] leading-none"
                    style={{ fontFeatureSettings: '"tnum" 1' }}
                  >
                    {m.num}
                  </div>
                  <h3 className="text-[17px] font-semibold tracking-[-0.02em] mt-4 text-[var(--color-primary)] leading-[1.25]">
                    {m.title}
                  </h3>
                  <p className="text-[14px] text-[var(--color-text-2)] mt-3 leading-[1.6]">
                    {m.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            3. Certifications (inchangé)
            ======================================================== */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <span className="eyebrow reveal">Certifications</span>
            <h2 className="section-title reveal">
              Nos certifications <span className="it">et qualifications.</span>
            </h2>
            <div className="grid grid-cols-3 gap-5 mt-12 max-[1100px]:grid-cols-2 max-sm:grid-cols-1">
              {CERTIFS.map((c) => (
                <div
                  key={c.code}
                  className="bg-white border border-[var(--color-border)] rounded-2xl p-7 reveal"
                >
                  <span className="mono text-[12px] text-[var(--color-primary)] bg-[var(--color-secondary-10)] py-1 px-2.5 rounded inline-block">
                    {c.code}
                  </span>
                  <h3 className="text-[16px] font-semibold tracking-[-0.015em] mt-4 text-[var(--color-primary)]">
                    {c.title}
                  </h3>
                  {c.note && (
                    <p className="mono text-[10.5px] text-[var(--color-text-3)] mt-2 italic">
                      {c.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-8 max-w-[680px] reveal">
              <p className="text-[15px] text-[var(--color-text-2)] leading-[1.6]">
                Nous préparons par ailleurs notre agrément délégataire CEE
                auprès du PNCEE, à horizon 12-18 mois.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================
            4. NOUVELLE — Notre couverture (3 colonnes)
            ======================================================== */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <div className="max-w-[760px]">
              <span className="eyebrow reveal">Couverture</span>
              <h2 className="section-title reveal">
                France entière, du site industriel{" "}
                <span className="it">à la copropriété.</span>
              </h2>
              <p className="text-[18px] text-[var(--color-text-2)] leading-[1.65] mt-6 reveal">
                Capacité d&apos;intervention sur l&apos;ensemble du
                territoire.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-14 max-[1100px]:grid-cols-1">
              {COUVERTURE.map((col, i) => (
                <div
                  key={col.eyebrow}
                  className="bg-white border border-[var(--color-border-2)] rounded-2xl p-8 reveal"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="mono text-[10.5px] tracking-[0.08em] uppercase text-[var(--color-text-3)]">
                    {col.eyebrow}
                  </div>
                  <ul className="mt-5 space-y-3 list-none p-0 m-0">
                    {col.items.map((it) => (
                      <li
                        key={it}
                        className="flex items-start gap-3 text-[15px] text-[var(--color-primary)] leading-[1.5]"
                      >
                        <span
                          aria-hidden
                          className="shrink-0 mt-[9px] w-3 h-[1.5px] bg-[var(--color-primary)]"
                        />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            5. Encart bleu nuit — Pôle cloisonné (reformulé pour
               cohérence A3E SAS unique entité)
            ======================================================== */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <div className="bg-[var(--color-primary)] text-white rounded-[32px] p-16 relative overflow-hidden reveal max-[1100px]:p-10">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(55% 70% at 92% 8%, rgba(245,197,24,0.22), transparent 65%)",
                }}
              />
              <div className="relative z-[1]">
                <span className="eyebrow text-white/60 before:bg-white/30">
                  Conformité NF EN 16247-3
                </span>
                <h2
                  className="font-bold tracking-[-0.035em] mt-5"
                  style={{ fontSize: "clamp(28px, 2.8vw, 44px)" }}
                >
                  Pourquoi un pôle d&apos;études
                  <br />
                  <span className="it text-[var(--color-accent)]">
                    cloisonné.
                  </span>
                </h2>
                <p className="text-[18px] text-white/[0.78] mt-6 leading-[1.6] max-w-[680px]">
                  Les auditeurs du pôle Agence 3E Audit ne perçoivent aucune
                  commission sur les travaux qu&apos;ils recommandent. Ils
                  signent leur rapport en propre, et A3E SAS engage sa
                  responsabilité civile professionnelle directement. Le
                  cloisonnement opérationnel d&apos;avec le pôle Solutions
                  (mandats clients distincts, rémunérations séparées,
                  comptabilité analytique cloisonnée) répond à l&apos;exigence
                  d&apos;indépendance posée par NF EN 16247-3 et conditionne
                  la recevabilité de l&apos;audit par l&apos;administration
                  en cas de contrôle.
                </p>
                <Link
                  href="/a-propos/notre-independance"
                  className="btn btn-arrow mt-8 inline-flex"
                  style={{ background: "var(--color-secondary)", color: "#fff" }}
                >
                  Voir la page Gouvernance
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            6. Normes (inchangé)
            ======================================================== */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <span className="eyebrow reveal">Conformité méthodologique</span>
            <h2 className="section-title reveal">
              Les normes <span className="it">que nous respectons.</span>
            </h2>
            <div className="mt-12 bg-white border border-[var(--color-border)] rounded-2xl overflow-hidden reveal">
              {NORMES.map((n, i) => (
                <div
                  key={n.code}
                  className={`grid grid-cols-[180px_1fr] gap-6 py-5 px-7 items-center hover:bg-[#fafbfc] transition-colors ${
                    i < NORMES.length - 1
                      ? "border-b border-[var(--color-border-2)]"
                      : ""
                  } max-sm:grid-cols-1 max-sm:gap-1`}
                >
                  <span className="mono text-[12.5px] text-[var(--color-primary)] font-medium tracking-[0.04em] bg-[var(--color-secondary-10)] py-1 px-2.5 rounded w-fit">
                    {n.code}
                  </span>
                  <span className="text-[15.5px] text-[var(--color-text)]">
                    {n.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            7. NOUVELLE — Engagement qualité (3 piliers, remplace
               ancienne section « Notre matériel »)
            ======================================================== */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <div className="max-w-[760px]">
              <span className="eyebrow reveal">Engagement</span>
              <h2 className="section-title reveal">
                Rigueur, transparence,{" "}
                <span className="it">traçabilité.</span>
              </h2>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-14 max-[1100px]:grid-cols-1">
              {QUALITE.map((q, i) => (
                <div
                  key={q.eyebrow}
                  className="bg-white border border-[var(--color-border-2)] rounded-2xl p-8 reveal"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="mono text-[10.5px] tracking-[0.08em] uppercase text-[var(--color-secondary)]">
                    {q.eyebrow}
                  </div>
                  <h3
                    className="font-semibold tracking-[-0.02em] mt-4 text-[var(--color-primary)] leading-[1.2]"
                    style={{ fontSize: "clamp(18px, 1.6vw, 22px)" }}
                  >
                    {q.title}
                  </h3>
                  <p className="text-[14.5px] text-[var(--color-text-2)] mt-4 leading-[1.6]">
                    {q.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            8. Délais indicatifs (anciennement « engagements
               contractuels » — H2 reformulé)
            ======================================================== */}
        <section className="py-[var(--spacing-block-sm)]">
          <div className="container-x">
            <div className="max-w-[760px]">
              <span className="eyebrow reveal">Délais indicatifs</span>
              <h2 className="section-title reveal">
                Nos délais <span className="it">indicatifs.</span>
              </h2>
              <p className="text-[18px] text-[var(--color-text-2)] leading-[1.65] mt-6 reveal">
                Délais moyens observés sur les missions précédentes.
                Variables selon complexité du périmètre.
              </p>
            </div>

            <div className="grid grid-cols-5 gap-4 mt-12 max-[1100px]:grid-cols-2 max-sm:grid-cols-1">
              {ENGAGEMENTS.map((e) => (
                <div
                  key={e.label}
                  className="bg-white border border-[var(--color-border)] rounded-2xl p-6 reveal"
                >
                  <div
                    className="it text-[clamp(28px,2.4vw,40px)] text-[var(--color-secondary)] leading-none"
                    style={{ fontFeatureSettings: '"tnum" 1' }}
                  >
                    {e.duration}
                  </div>
                  <h3 className="text-[14px] font-semibold tracking-[-0.015em] mt-3 text-[var(--color-primary)]">
                    {e.label}
                  </h3>
                  <p className="text-[12.5px] text-[var(--color-text-2)] mt-2 leading-[1.5]">
                    {e.desc}
                  </p>
                </div>
              ))}
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
