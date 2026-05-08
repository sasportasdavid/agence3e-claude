/**
 * /pole-tertiaire — verbatim de Section 4.1 du CONTENUS_PAR_PAGE.md
 */

export const breadcrumb = [
  { href: "/", label: "Accueil" },
  { href: "/", label: "Pôles d'expertise" },
  { label: "Tertiaire" },
] as const;

export const meta = {
  title:
    "Audit énergétique, décret tertiaire et CEE pour le tertiaire | Agence 3E",
  description:
    "Audit énergétique pour bureaux, commerces, hôtellerie, santé, enseignement, datacenters et copropriétés tertiaires. Conformité décret tertiaire, OPERAT, BACS, DDADUE.",
};

export const hero = {
  eyebrow: "Pôle Tertiaire · Privé & public",
  h1: "Audit énergétique et financement CEE pour le tertiaire.",
  sub: "Bureaux, commerces, hôtellerie-restauration, santé, enseignement, datacenters, copropriétés tertiaires. Trois cadres réglementaires (décret tertiaire, décret BACS, DDADUE), une seule équipe pour vous accompagner.",
  cta: "Pré-qualifier mon patrimoine",
};

export const obligations = {
  eyebrow: "Trois obligations à articuler",
  title: { lead: "Trois textes qui encadrent", it: "votre patrimoine tertiaire." },
  cards: [
    {
      tone: "blue" as const,
      badge: "Décret tertiaire",
      title: "Éco Énergie Tertiaire",
      body: "S'applique aux bâtiments tertiaires de plus de 1 000 m² de surface utile. Objectifs de réduction des consommations : -40 % en 2030, -50 % en 2040, -60 % en 2050 par rapport à une année de référence. Déclaration annuelle obligatoire sur la plateforme OPERAT.",
      cta: "En savoir plus",
      href: "/services/decret-tertiaire-operat",
    },
    {
      tone: "violet" as const,
      badge: "Décret BACS",
      title: "Automatisation & contrôle",
      body: "S'applique aux bâtiments tertiaires neufs et existants équipés de systèmes thermiques de plus de 290 kW (puissance abaissée à 70 kW au 1er janvier 2027). Obligation d'installer un système d'automatisation et de contrôle (GTB).",
      cta: "En savoir plus",
      href: "/services/decret-bacs",
    },
    {
      tone: "orange" as const,
      badge: "DDADUE 2025",
      title: "Audit obligatoire",
      body: "S'applique aux entités juridiques tertiaires consommant plus de 2,75 GWh/an. Audit énergétique obligatoire avant le 11 octobre 2026. Sanctions jusqu'à 2 % du CA HT.",
      cta: "Calendrier DDADUE",
      href: "/comprendre/loi-ddadue-2025-expliquee",
    },
  ],
};

export const segments = {
  eyebrow: "Nos 7 segments couverts",
  title: { lead: "Sept segments", it: "d'expertise tertiaire." },
  items: [
    { href: "/pole-tertiaire/bureaux", icon: "🏢", label: "Bureaux" },
    { href: "/pole-tertiaire/commerces-retail", icon: "🛍", label: "Commerces & Retail" },
    { href: "/pole-tertiaire/hotellerie-restauration", icon: "🍽", label: "Hôtellerie-Restauration" },
    { href: "/pole-tertiaire/sante-medico-social", icon: "🏥", label: "Santé & Médico-social" },
    { href: "/pole-tertiaire/enseignement", icon: "🎓", label: "Enseignement" },
    { href: "/pole-tertiaire/datacenters", icon: "💻", label: "Datacenters" },
    { href: "/pole-tertiaire/coproprietes-tertiaires", icon: "🏘", label: "Copropriétés tertiaires" },
  ],
};

export const fiches = {
  eyebrow: "Catalogue tertiaire",
  title: { lead: "Huit fiches CEE tertiaire", it: "qui paient le plus." },
  rows: [
    { ref: "BAT-TH-127", title: "Raccordement à un réseau de chaleur", segments: "Tous tertiaires", prime: "80–300 k€" },
    { ref: "BAT-TH-116", title: "Système de gestion technique du bâtiment (GTB)", segments: "Tous tertiaires", prime: "30–150 k€" },
    { ref: "BAT-TH-104", title: "Récupérateur de chaleur sur ventilation", segments: "Bureaux, santé", prime: "20–80 k€" },
    { ref: "BAT-EN-101/102/103", title: "Isolation combles, murs, plancher", segments: "Tous tertiaires", prime: "30–200 k€" },
    { ref: "BAT-TH-143", title: "Ventiloconvecteurs haute performance", segments: "Bureaux, hôtellerie", prime: "15–60 k€" },
    { ref: "BAT-TH-153", title: "Confinement allées chaudes/froides", segments: "Datacenters", prime: "50–200 k€" },
    { ref: "BAT-TH-156", title: "Free-cooling par eau de refroidissement", segments: "Datacenters, IAA", prime: "30–120 k€" },
    { ref: "BAT-EQ-135", title: "Alimentation sans interruption performante", segments: "Datacenters, santé", prime: "20–80 k€" },
  ],
};

export const cas = {
  eyebrow: "Étude de cas tertiaire",
  title: { lead: "Cas client :", it: "groupe hôtelier en Occitanie." },
  ref: "CASE-008",
  region: "Hôtellerie · Occitanie · 4 sites",
  fiche: "BAT-TH-116",
  date: "Livré 08/2025",
  recit: "Groupe hôtelier 4 étoiles avec 4 sites en région Occitanie. Mission d'audit DDADUE multi-sites, déploiement d'une GTB centralisée, mise en conformité décret tertiaire et BACS sur l'ensemble du parc.",
  stats: [
    { l: "Investissement", v: "386 k€" },
    { l: "Prime CEE", v: "148 k€" },
    { l: "Reste à charge", v: "238 k€" },
    { l: "ROI net", v: "3,2 ans" },
  ],
};
