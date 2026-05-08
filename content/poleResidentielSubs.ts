/**
 * Sous-pages /pole-residentiel/[slug] — verbatim de Section 5.2-5.3.
 */

export interface ResBlock {
  title: string;
  body: string;
}

export interface SubRes {
  slug: string;
  nav: string;
  meta: { title: string; description: string };
  hero: { eyebrow: string; h1: string; sub: string };
  blocks: ResBlock[];
  /** Optional case ref */
  cas?: { ref: string; label: string; href: string };
}

export const SUBS_RES: SubRes[] = [
  {
    slug: "maisons-individuelles",
    nav: "Maisons individuelles",
    meta: {
      title: "Audit énergétique maison + MaPrimeRénov' + CEE | Agence 3E",
      description:
        "Audit énergétique réglementaire vente passoire DPE F/G, audit volontaire, bouquets de travaux, MaPrimeRénov', CEE résidentiel. Réseau RGE national.",
    },
    hero: {
      eyebrow: "Vertical résidentiel · Maisons",
      h1: "Audit énergétique maison individuelle, MaPrimeRénov' et CEE.",
      sub: "Vous voulez vendre une maison classée F ou G ? Vous voulez rénover globalement et profiter des aides ? Vous voulez juste mieux comprendre vos consommations ? Nous vous accompagnons.",
    },
    blocks: [
      {
        title: "Audit obligatoire vente DPE F/G",
        body:
          "Depuis avril 2023, la vente d'une maison individuelle classée passoire thermique (DPE F ou G) impose la fourniture d'un audit énergétique au futur acquéreur. Extension aux logements E en 2025, D en 2034. Notre audit est conforme à l'arrêté et accepté par les notaires.",
      },
      {
        title: "Audit volontaire (rénovation globale)",
        body:
          "Si vous voulez engager une rénovation globale et bénéficier de MaPrimeRénov' bonifiée, l'audit énergétique est obligatoire. Nous le réalisons par notre réseau d'auditeurs certifiés et nous déduisons l'aide MaPrimeRénov' jusqu'à 500 € directement de votre devis.",
      },
      {
        title: "Bouquets de travaux",
        body:
          "Pour atteindre les classes énergétiques visées (D, C, B), un bouquet cohérent est nécessaire. Combinaisons typiques : isolation combles + murs + ECS solaire ; pompe à chaleur + isolation + VMC ; chaudière biomasse + isolation toiture.",
      },
      {
        title: "Tarif et aides",
        body:
          "Audit énergétique réglementaire : 800 à 1 200 € selon surface. MaPrimeRénov' jusqu'à 500 € sur l'audit pour les ménages éligibles. Audit déduit du devis si vous nous mandatez sur les travaux.",
      },
    ],
  },
  {
    slug: "coproprietes",
    nav: "Copropriétés",
    meta: {
      title:
        "Audit énergétique copropriété + MaPrimeRénov' Copro + CEE | Agence 3E",
      description:
        "AMO MaPrimeRénov' Copropriétés, audit énergétique copropriété, plan pluriannuel de travaux, mobilisation CEE pour syndics et conseils syndicaux.",
    },
    hero: {
      eyebrow: "Vertical résidentiel · Copros",
      h1: "Audit énergétique copropriété, MaPrimeRénov' Copropriétés et CEE.",
      sub: "Pour les syndics, conseils syndicaux et présidents de copropriété qui veulent engager une rénovation énergétique à l'échelle de l'immeuble. AMO complète, représentation Anah, mobilisation CEE.",
    },
    blocks: [
      {
        title: "DPE collectif obligatoire",
        body:
          "Depuis 2024 et selon le calendrier progressif (50+ lots, 200+ lots), les copropriétés doivent disposer d'un DPE collectif. Nous le réalisons par notre réseau d'auditeurs certifiés.",
      },
      {
        title: "MaPrimeRénov' Copropriétés",
        body:
          "Aide majeure pour les copropriétés engageant une rénovation globale (gain ≥ 35 %). L'AMO est obligatoire et nous sommes mandataires Anah. Nous portons votre dossier de A à Z.",
      },
      {
        title: "Plan Pluriannuel de Travaux (PPT)",
        body:
          "Obligatoire pour les copropriétés de 15 ans et plus selon calendrier progressif depuis 2023. Notre offre couvre l'élaboration du PPT en lien avec votre architecte et votre syndic.",
      },
      {
        title: "Notre rôle d'AMO copropriété",
        body:
          "Audit énergétique copropriété conforme · AMO MaPrimeRénov' Copropriétés (statut Anah) · représentation auprès des partenaires (Anah, délégataires CEE, installateurs) · préparation des AG (notes de présentation, supports de vote) · suivi du chantier multi-corps d'état.",
      },
    ],
    cas: {
      ref: "CASE-011",
      label: "Copropriété résidentielle Marseille",
      href: "/ressources/etudes-de-cas/case-011",
    },
  },
];

export const SUBS_RES_BY_SLUG = Object.fromEntries(
  SUBS_RES.map((s) => [s.slug, s] as const),
);
