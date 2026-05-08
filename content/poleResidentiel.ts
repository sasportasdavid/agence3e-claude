/**
 * /pole-residentiel — verbatim de Section 5.1 du CONTENUS_PAR_PAGE.md
 */

export const breadcrumb = [
  { href: "/", label: "Accueil" },
  { href: "/", label: "Pôles d'expertise" },
  { label: "Résidentiel" },
] as const;

export const meta = {
  title:
    "Audit énergétique, MaPrimeRénov' et CEE pour particuliers et copropriétés | Agence 3E",
  description:
    "Cabinet indépendant en rénovation énergétique. Audit obligatoire vente DPE F/G, MaPrimeRénov' Copropriétés, CEE résidentiel. Réseau RGE national.",
};

export const hero = {
  eyebrow: "Pôle Résidentiel · Particuliers & copropriétés",
  h1: "Audit énergétique, MaPrimeRénov' et CEE pour particuliers et copropriétés.",
  sub: "Notre savoir-faire industriel et tertiaire au service de votre logement. Audit énergétique réglementaire ou volontaire, accompagnement aux aides, mise en relation avec un installateur RGE de notre réseau. Pas de démarchage téléphonique abusif. Vous nous appelez, nous rappelons.",
  cta: "Demander un devis sans engagement",
};

export const pourquoi = {
  eyebrow: "Pourquoi nous",
  title: { lead: "Quatre raisons", it: "face aux acteurs B2C génériques." },
  items: [
    {
      title: "Auditeurs certifiés RGE Études + OPQIBI 1905 et 1911",
      desc: "Qualifications reconnues, audits opposables, défendables face à l'Anah et aux délégataires CEE.",
    },
    {
      title: "Mandataire MaPrimeRénov' agréé Anah",
      desc: "Statut en cours d'agrément. Nous portons votre dossier de A à Z, vous n'avancez rien.",
    },
    {
      title: "Réseau d'installateurs RGE rigoureusement sélectionnés",
      desc: "Vérification annuelle des qualifications, retours clients, conformité administrative.",
    },
    {
      title: "Pas de démarchage téléphonique entrant non sollicité",
      desc: "Vous nous appelez, nous rappelons. Aucune liste démarchée, aucun appel à froid.",
    },
  ],
};

export const portes = {
  eyebrow: "Deux portes d'entrée",
  title: { lead: "Vous êtes propriétaire", it: "de quel type de bien ?" },
  cards: [
    {
      tone: "rose" as const,
      badge: "Bien individuel",
      title: { lead: "Maison", it: "individuelle." },
      desc: "Pavillon, maison de ville, maison ancienne, résidence secondaire. Audit énergétique réglementaire (vente passoire) ou volontaire, bouquets de travaux, montage des aides.",
      cta: "Maisons individuelles",
      href: "/pole-residentiel/maisons-individuelles",
    },
    {
      tone: "blue" as const,
      badge: "Collectif",
      title: { lead: "Copropriété", it: "syndicale." },
      desc: "Petites et grandes copropriétés, syndic professionnel ou bénévole. AMO MaPrimeRénov' Copropriétés, plan pluriannuel de travaux, audit énergétique copropriété.",
      cta: "Copropriétés",
      href: "/pole-residentiel/coproprietes",
    },
  ],
};

export const aides = {
  eyebrow: "Aides financières",
  title: { lead: "Toutes les aides", it: "que nous mobilisons." },
  items: [
    {
      title: "MaPrimeRénov'",
      desc: "Selon revenus, jusqu'à plusieurs milliers d'euros pour les rénovations d'ampleur.",
    },
    {
      title: "MaPrimeRénov' Copropriétés",
      desc: "Pour les copros, avec AMO obligatoire.",
    },
    {
      title: "Coup de pouce Chauffage et Isolation",
      desc: "Bonifications CEE.",
    },
    {
      title: "Certificats d'Économies d'Énergie (CEE)",
      desc: "Cumulables avec MaPrimeRénov'.",
    },
    {
      title: "Éco-prêt à taux zéro (Éco-PTZ)",
      desc: "Jusqu'à 50 000 €.",
    },
    {
      title: "TVA réduite à 5,5 %",
      desc: "Pour les travaux d'efficacité énergétique.",
    },
    {
      title: "Aides locales",
      desc: "Région, département, intercommunalité, ANAH.",
    },
  ],
};

export const etapes = {
  eyebrow: "Notre méthode",
  title: { lead: "Notre accompagnement", it: "de A à Z." },
  steps: [
    { n: 1, title: "Audit", desc: "Bilan énergétique du logement, scénarios chiffrés." },
    { n: 2, title: "Choix scénario", desc: "Sélection des travaux selon vos objectifs et budget." },
    { n: 3, title: "Devis RGE", desc: "Mise en concurrence dans notre réseau RGE." },
    { n: 4, title: "Montage aides", desc: "MaPrimeRénov', CEE, autres aides." },
    { n: 5, title: "Chantier", desc: "Suivi de la réalisation par les installateurs." },
    { n: 6, title: "Contrôle & versement", desc: "Vérification post-travaux, versement des aides." },
  ],
};
