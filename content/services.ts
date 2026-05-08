/**
 * 12 pages /services/[slug] — verbatim CONTENUS §8.
 */

export interface ServiceListItem {
  title?: string;
  body?: string;
  /** simple bullet for "process" lists */
  bullet?: string;
}

export interface Service {
  slug: string;
  nav: string;
  meta: { title: string; description: string };
  hero: { eyebrow: string; h1: string; sub: string };
  /** definition / context block */
  definition?: string;
  /** cadre réglementaire */
  cadre?: string[];
  /** notre approche / process */
  approche?: { title: string; body?: string; items?: string[] };
  /** livrables */
  livrables?: string[];
  /** delais et tarifs */
  delais?: string;
  tarif?: string;
  /** atout CEE / mention */
  atout?: string;
  /** form variant */
  formProfile?: "industrie" | "tertiaire" | "residentiel" | "mixte";
  /** v2 — bloc "Notre organisation" en bas de page (mention factuelle
      gouvernance, lien vers /cabinet/notre-independance). */
  gouvernance?: string;
  /** v2 — bloc "Notre rémunération" pour les pages courtage / montage CEE
      (texte verbatim AJUSTEMENTS_INDEPENDANCE.md section 2). */
  remuneration?: string;
}

export const SERVICES: Service[] = [
  {
    slug: "audit-energetique-ddadue",
    nav: "Audit énergétique DDADUE",
    meta: {
      title: "Audit énergétique DDADUE conforme NF EN 16247 | Agence 3E",
      description:
        "Audit énergétique réglementaire DDADUE conforme NF EN 16247-1, 16247-3 et 16247-4 pour industrie et tertiaire. Délai 25 jours après visite, dépôt AIDER.",
    },
    hero: {
      eyebrow: "Service · Audit réglementaire",
      h1: "Audit énergétique réglementaire DDADUE.",
      sub: "L'audit obligatoire pour les sites industriels et tertiaires consommant plus de 2,75 GWh/an. Conforme NF EN 16247, déposé sur AIDER, accepté par l'administration.",
    },
    definition:
      "L'audit énergétique réglementaire DDADUE est imposé par la loi du 30 avril 2025 transposant la directive européenne EED 2023/1791. Il s'applique aux entités juridiques dont la consommation annuelle moyenne d'énergie finale dépasse 2,75 GWh sur les trois dernières années.",
    cadre: [
      "Loi n° 2025-391 du 30 avril 2025 (loi DDADUE)",
      "Articles 17 à 25",
      "Norme NF EN 16247-1 (générale), 16247-3 (industrie), 16247-4 (transports)",
      "Premier audit dans le nouveau régime à réaliser avant le 11 octobre 2026",
    ],
    approche: {
      title: "Méthodologie en 7 étapes",
      body: "Auditeur certifié OPQIBI, mesurages, modélisation, plan d'action chiffré. Voir la page Pôle Industrie pour le détail des 7 étapes.",
    },
    livrables: [
      "Rapport d'audit conforme NF EN 16247",
      "Plan d'action hiérarchisé par ROI",
      "Note de synthèse pour direction",
      "Attestation de dépôt AIDER",
      "Documentation pour la publication d'avancement annuelle",
    ],
    delais: "6 à 8 semaines de la pré-qualification au rapport.",
    tarif: "6 000 à 18 000 € HT selon complexité du site et nombre d'établissements.",
    formProfile: "mixte",
    /* v2 — gouvernance factuelle (lien vers /cabinet/notre-independance). */
    gouvernance:
      "L'audit DDADUE est conduit par Agence 3E Audit, entité certifiée OPQIBI 1905, juridiquement distincte d'Agence 3E Solutions (montage et courtage CEE). Cette organisation respecte l'exigence d'indépendance auditeur posée par NF EN 16247-3.",
  },
  {
    slug: "iso-50001-systeme-management-energie",
    nav: "ISO 50001",
    meta: {
      title: "Mise en place ISO 50001 — Système de management de l'énergie | Agence 3E",
      description:
        "Accompagnement à la mise en place et à la certification ISO 50001 pour les sites industriels et tertiaires. Articulation avec audit DDADUE.",
    },
    hero: {
      eyebrow: "Service · Système management énergie",
      h1: "ISO 50001 — Mise en place et certification de votre système de management de l'énergie.",
      sub: "La certification ISO 50001 substitue à l'audit DDADUE quand son périmètre couvre 80 % des consommations. Elle est par ailleurs obligatoire à compter de 2027 pour les sites consommant plus de 23,6 GWh/an.",
    },
    cadre: [
      "Loi DDADUE 2025, article 25",
      "Obligation ISO 50001 à compter du 11 octobre 2027 pour sites > 23,6 GWh/an",
      "Substitution audit DDADUE si couverture 80 % minimum",
    ],
    approche: {
      title: "Process en 7 étapes",
      items: [
        "Diagnostic préalable — État des lieux des pratiques actuelles",
        "Élaboration de la politique énergétique",
        "Revue énergétique initiale (proche de l'audit DDADUE)",
        "Mise en place des procédures et indicateurs (IPÉ et SCÉ)",
        "Formation des équipes",
        "Accompagnement à l'audit interne",
        "Préparation à l'audit de certification (LNE, AFNOR, Bureau Veritas, Dekra…)",
      ],
    },
    delais: "12 à 18 mois selon la maturité initiale du site.",
    tarif: "Forfaitisé selon complexité, à partir de 25 k€ HT.",
    atout:
      "La fiche IND-SE-01 délivre une prime CEE proportionnelle aux consommations totales du site, qui peut financer une partie significative du déploiement.",
    formProfile: "industrie",
  },
  {
    slug: "montage-dossiers-cee",
    nav: "Montage dossiers CEE",
    meta: {
      title: "Montage et dépôt de dossiers CEE | Agence 3E",
      description:
        "Constitution complète du dossier réglementaire conforme aux exigences PNCEE, dépôt auprès du délégataire ou de l'obligé partenaire, suivi jusqu'au paiement.",
    },
    hero: {
      eyebrow: "Service · Montage CEE",
      h1: "Montage et dépôt de dossiers CEE.",
      sub: "Constitution complète du dossier réglementaire conforme aux exigences PNCEE, dépôt auprès du délégataire ou de l'obligé partenaire, suivi jusqu'au paiement.",
    },
    approche: {
      title: "Process complet",
      items: [
        "Vérification d'éligibilité de l'opération (fiche, conditions, éligibilité bénéficiaire)",
        "Préparation des pièces : devis, attestations sur l'honneur, factures",
        "Calcul cumac précis selon formule réglementaire",
        "Constitution du dossier complet (jusqu'à 10-15 pièces selon fiche)",
        "Vérification interne qualité",
        "Dépôt auprès du délégataire ou obligé sélectionné",
        "Suivi des éventuelles demandes de compléments",
        "Confirmation du paiement de la prime",
        "Archivage 6 ans (durée de conservation réglementaire)",
      ],
    },
    tarif: "Inclus dans la rémunération sur marge CEE. Pas de facturation directe au client industriel.",
    formProfile: "mixte",
    /* v2 — paragraphe Notre rémunération (texte verbatim livrable §2). */
    remuneration:
      "Le courtage CEE est opéré par Agence 3E Solutions, entité distincte d'Agence 3E Audit. Lorsque nous prenons en main votre dossier CEE, vous signez un mandat écrit qui précise la commission de courtage en €/MWh cumac négocié. Cette commission est notre seule rémunération sur la prime CEE — elle est facturée en transparence, séparée du prix de cession à l'obligé. Vous avez ainsi la visibilité complète sur le prix net du marché et sur ce que perçoit Agence 3E Solutions.",
    gouvernance:
      "Le montage de dossier est opéré par Agence 3E Solutions, entité distincte d'Agence 3E Audit (audits NF EN 16247). Cette séparation est documentée sur la page Gouvernance.",
  },
  {
    slug: "courtage-prime-cee",
    nav: "Courtage prime CEE",
    meta: {
      title: "Courtage de prime CEE — Mise en concurrence des délégataires | Agence 3E",
      description:
        "Le prix de rachat du kWh cumac n'est pas fixe. Mise en concurrence de 3 à 5 délégataires sur chaque opération.",
    },
    hero: {
      eyebrow: "Service · Courtage CEE",
      h1: "Courtage de prime CEE — Mise en concurrence des délégataires.",
      sub: "Le prix de rachat du kWh cumac n'est pas fixe. Nous mettons en concurrence 3 à 5 délégataires sur chaque opération pour obtenir le meilleur prix pour vous.",
    },
    definition:
      "Pourquoi c'est important : le différentiel typique entre la meilleure et la moins bonne offre est de 0,5 à 2 €/MWh cumac. Sur une prime de 100 000 €, cela représente plusieurs milliers d'euros de gain pour vous.",
    approche: {
      title: "Notre engagement de transparence",
      body: "Nous vous communiquons toutes les offres reçues. Vous choisissez. Notre rémunération est calculée sur l'écart négocié versus l'offre médiane, en accord contractuel explicite.",
    },
    formProfile: "mixte",
    /* v2 — Notre rémunération (texte verbatim livrable §2). */
    remuneration:
      "Le courtage CEE est opéré par Agence 3E Solutions, entité distincte d'Agence 3E Audit. Lorsque nous prenons en main votre dossier CEE, vous signez un mandat écrit qui précise la commission de courtage en €/MWh cumac négocié. Cette commission est notre seule rémunération sur la prime CEE — elle est facturée en transparence, séparée du prix de cession à l'obligé. Vous avez ainsi la visibilité complète sur le prix net du marché et sur ce que perçoit Agence 3E Solutions.",
    gouvernance:
      "Le courtage est opéré par Agence 3E Solutions, entité distincte d'Agence 3E Audit. Cette séparation respecte l'exigence d'indépendance auditeur posée par NF EN 16247-3.",
  },
  {
    slug: "amo-travaux-efficacite-energetique",
    nav: "AMO travaux",
    meta: {
      title: "AMO travaux d'efficacité énergétique | Agence 3E",
      description:
        "Pilotage de bout en bout du chantier : appel d'offres installateurs, sélection, suivi technique, réception, contrôle, dossier CEE.",
    },
    hero: {
      eyebrow: "Service · AMO travaux",
      h1: "AMO travaux d'efficacité énergétique.",
      sub: "Pilotage de bout en bout du chantier : appel d'offres installateurs, sélection, suivi technique, réception, contrôle, dossier CEE.",
    },
    approche: {
      title: "Périmètre de notre AMO",
      items: [
        "Rédaction du cahier des charges technique",
        "Mise en concurrence d'installateurs (3 minimum dans notre réseau RGE)",
        "Analyse des offres et recommandation",
        "Suivi du chantier en réunions périodiques",
        "Levée des réserves à la réception",
        "Contrôle de conformité aux règles CEE",
        "Constitution du dossier CEE post-travaux",
      ],
    },
    tarif: "3 à 8 % du montant des travaux selon complexité.",
    formProfile: "mixte",
  },
  {
    slug: "mise-relation-installateurs-rge",
    nav: "Mise en relation RGE",
    meta: {
      title: "Mise en relation avec un installateur RGE qualifié | Agence 3E",
      description:
        "Notre réseau d'installateurs RGE est sélectionné sur des critères stricts. Plusieurs installateurs en concurrence pour vous.",
    },
    hero: {
      eyebrow: "Service · Réseau RGE",
      h1: "Mise en relation avec un installateur RGE qualifié.",
      sub: "Notre réseau d'installateurs RGE est sélectionné sur des critères stricts. Nous mettons systématiquement plusieurs installateurs en concurrence pour vous.",
    },
    definition:
      "Voir notre page dédiée /reseau-installateurs-rge pour le détail des critères de sélection et de la charte qualité.",
    formProfile: "mixte",
  },
  {
    slug: "decret-tertiaire-operat",
    nav: "Décret tertiaire / OPERAT",
    meta: {
      title: "Décret tertiaire et déclaration OPERAT | Agence 3E",
      description:
        "Conformité aux objectifs Éco Énergie Tertiaire (-40 % en 2030, -50 % en 2040, -60 % en 2050) et déclaration annuelle sur la plateforme OPERAT de l'ADEME.",
    },
    hero: {
      eyebrow: "Service · Décret tertiaire",
      h1: "Décret tertiaire et déclaration OPERAT.",
      sub: "Conformité aux objectifs Éco Énergie Tertiaire (-40 % en 2030, -50 % en 2040, -60 % en 2050) et déclaration annuelle sur la plateforme OPERAT de l'ADEME.",
    },
    approche: {
      title: "Notre offre",
      items: [
        "Sélection de l'année de référence optimale",
        "Calcul des objectifs en valeurs absolue et relative",
        "Plan de réduction chiffré",
        "Déclaration OPERAT annuelle",
        "Modulations admises (sinistres, changements d'usage, technique)",
      ],
    },
    formProfile: "tertiaire",
  },
  {
    slug: "decret-bacs",
    nav: "Décret BACS",
    meta: {
      title: "Décret BACS — Mise en conformité GTB | Agence 3E",
      description:
        "Obligation d'installation d'un système d'automatisation et de contrôle pour les bâtiments tertiaires équipés d'un système thermique de plus de 290 kW (70 kW au 1er janvier 2027).",
    },
    hero: {
      eyebrow: "Service · BACS / GTB",
      h1: "Décret BACS — Mise en conformité GTB de votre patrimoine tertiaire.",
      sub: "Obligation d'installation d'un système d'automatisation et de contrôle pour les bâtiments tertiaires équipés d'un système thermique de plus de 290 kW (puissance abaissée à 70 kW au 1er janvier 2027).",
    },
    approche: {
      title: "Notre offre",
      items: [
        "Audit du parc équipement existant",
        "Préconisations GTB classe B minimum",
        "Mise en relation avec installateurs spécialisés GTB",
        "Montage CEE BAT-TH-116",
      ],
    },
    formProfile: "tertiaire",
  },
  {
    slug: "bilan-carbone-ges",
    nav: "Bilan carbone & BEGES",
    meta: {
      title: "Bilan carbone et BEGES réglementaire | Agence 3E",
      description:
        "BEGES obligatoire pour les entreprises de plus de 500 salariés en métropole, 250 en outre-mer. Réalisé en cohérence avec votre audit énergétique.",
    },
    hero: {
      eyebrow: "Service · Bilan carbone",
      h1: "Bilan carbone et BEGES réglementaire.",
      sub: "BEGES obligatoire pour les entreprises de plus de 500 salariés en métropole, 250 en outre-mer. Nous le réalisons en cohérence avec votre audit énergétique.",
    },
    formProfile: "mixte",
  },
  {
    slug: "audit-volontaire-pre-audit",
    nav: "Audit volontaire / pré-audit",
    meta: {
      title: "Audit énergétique volontaire ou pré-audit | Agence 3E",
      description:
        "Pour les sites sous le seuil DDADUE qui veulent piloter leur performance, ou pour cadrer un audit complet à venir.",
    },
    hero: {
      eyebrow: "Service · Audit volontaire",
      h1: "Audit énergétique volontaire ou pré-audit.",
      sub: "Pour les sites sous le seuil DDADUE qui veulent piloter leur performance, ou pour cadrer un audit complet à venir.",
    },
    approche: {
      title: "Format pré-audit",
      body: "1 jour sur site + note de synthèse 5–10 pages identifiant les gisements prioritaires.",
    },
    tarif: "2 500 à 4 500 € HT.",
    formProfile: "mixte",
  },
  {
    slug: "etudes-thermiques-rt-re",
    nav: "Études thermiques RT / RE2020",
    meta: {
      title: "Études thermiques RT et RE2020 | Agence 3E",
      description:
        "Études réglementaires pour bâtiments neufs, attestations de conformité Bbio et Cep.",
    },
    hero: {
      eyebrow: "Service · RT / RE2020",
      h1: "Études thermiques RT et RE2020.",
      sub: "Études réglementaires pour bâtiments neufs, attestations de conformité.",
    },
    approche: {
      title: "Notre offre",
      body: "Études RE2020 résidentiel et tertiaire, attestation Bbio et Cep, accompagnement maître d'ouvrage et maître d'œuvre.",
    },
    formProfile: "mixte",
  },
  {
    slug: "suivi-quadriennal-veille",
    nav: "Suivi quadriennal & veille",
    meta: {
      title: "Suivi quadriennal et veille réglementaire | Agence 3E",
      description:
        "Notre engagement long terme. Mise à jour annuelle des indicateurs, alertes réglementaires, préparation du prochain audit.",
    },
    hero: {
      eyebrow: "Service · Suivi long terme",
      h1: "Suivi quadriennal et veille réglementaire.",
      sub: "Notre engagement long terme. Mise à jour annuelle des indicateurs, alertes réglementaires, préparation du prochain audit. Inclus dans la mission, sans surcoût.",
    },
    approche: {
      title: "Périmètre",
      items: [
        "Bilan annuel des consommations versus rapport d'audit",
        "Mise à jour de la publication d'avancement obligatoire",
        "Veille réglementaire personnalisée (DDADUE, CEE, décret tertiaire)",
        "Préparation anticipée du prochain audit (dans 4 ans)",
      ],
    },
    formProfile: "mixte",
  },
];

export const SERVICES_BY_SLUG = Object.fromEntries(
  SERVICES.map((s) => [s.slug, s] as const),
);
