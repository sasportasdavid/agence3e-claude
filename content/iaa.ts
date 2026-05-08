/**
 * Sous-page /pole-industrie/agroalimentaire-process-froid
 * Verbatim de Section 3.1 du CONTENUS_PAR_PAGE.md.
 */

export const breadcrumb = [
  { href: "/", label: "Accueil" },
  { href: "/", label: "Pôles d'expertise" },
  { href: "/pole-industrie", label: "Industrie" },
  { label: "Agroalimentaire — process froid" },
] as const;

export const meta = {
  title:
    "Audit énergétique et CEE pour l'agroalimentaire à process froid | Agence 3E",
  description:
    "Audit DDADUE pour laiteries, fromageries, charcuteries, plats préparés, surgelés, brasseries. Spécialistes des gisements groupes froids, vapeur, calorifugeage. ROI 2 ans.",
};

export const hero = {
  eyebrow: "Secteur · Agroalimentaire & process froid",
  h1: "Agroalimentaire & process froid.",
  sub: "Production froide, conditionnement réfrigéré, conservation négative — vos lignes consomment énergie et fluides H24. La récupération de chaleur sur les groupes froids et le freecooling sont rentables en 2 à 4 ans.",
  cta: "Pré-qualifier mon site IAA",
  /* v3 (Phase 3) — chiffres clés du secteur affichés sous le hero,
     en parité visuelle avec les 7 autres pages secteurs. */
  chiffres: [
    { value: "14 000", label: "sites IAA en France" },
    { value: "73 %", label: "au-dessus du seuil DDADUE 2,75 GWh" },
    { value: "20 à 40 %", label: "de la conso totale concernée par le froid de process" },
  ],
};

export const lecture = {
  eyebrow: "Notre lecture du secteur",
  title: { lead: "Pourquoi l'IAA est", it: "notre secteur n°1." },
  paragraphs: [
    "L'agroalimentaire est le secteur industriel français le plus énergivore après la chimie et la métallurgie. Il combine deux usages historiquement coûteux à exploiter : le froid (chaîne du froid alimentaire, températures négatives, refroidissement de cuves) et la vapeur process (cuisson, pasteurisation, NEP).",
    "Depuis la crise énergétique de 2022, les marges du secteur sont sous pression. Les directions industrielles cherchent des leviers de productivité énergétique avec un ROI inférieur à 3 ans — et nos audits le démontrent quasi systématiquement.",
    "Notre méthodologie est rodée sur ce vertical : nous avons décomposé les 8 typologies process IAA (laiterie, fromagerie, charcuterie, plats préparés, surgelés, biscuiterie, brasserie, boissons) en grilles d'analyse réutilisables. Cela nous permet de conserver une qualité d'audit constante tout en livrant le rapport sous 25 jours.",
  ],
};

export const perimetre = {
  eyebrow: "Périmètre couvert",
  title: { lead: "Les sites que nous", it: "auditons en IAA." },
  items: [
    "Laiteries et fromageries",
    "Charcuteries industrielles cuites et sèches",
    "Plats préparés frais et appertisés",
    "Surgelés et glaces",
    "Biscuiteries et confiseries",
    "Brasseries et cidreries",
    "Boissons non alcoolisées",
    "Plateformes logistiques alimentaires (grand froid)",
  ],
};

export const gisements = {
  eyebrow: "Les 5 gisements CEE prioritaires",
  title: {
    lead: "Cinq fiches qui paient le plus",
    it: "en IAA process froid.",
  },
  items: [
    {
      n: "01",
      title: "Récupération de chaleur sur groupes de production de froid",
      ref: "IND-UT-117",
      gain: "8–15 %",
      gainLabel: "de la consommation annuelle",
      prime: "50–200 k€",
      roi: "1,5–2,5 ans",
      desc: "La chaleur de condensation des groupes froids est valorisée pour produire de l'eau chaude process ou préchauffer l'eau de chaudière. Premier gisement IAA en ROI et en volume.",
    },
    {
      n: "02",
      title: "Régulation HP/BP groupes froids — condensation flottante",
      ref: "IND-UT-115/116",
      gain: "5–12 %",
      gainLabel: "consommation froid",
      prime: "30–150 k€",
      roi: "1–2 ans",
      desc: "La pression de condensation est ajustée dynamiquement à la température extérieure. Très peu coûteux à mettre en œuvre, gain rapide.",
    },
    {
      n: "03",
      title: "Calorifugeage des points singuliers et réseaux",
      ref: "IND-UT-131 · IND-UT-103",
      gain: "2–6 %",
      gainLabel: "consommation vapeur",
      prime: "5–40 k€",
      roi: "0,8–1,5 an",
      desc: "Souvent négligé, le calorifugeage des vannes, brides et raccords vapeur est rentable en moins d'un an.",
    },
    {
      n: "04",
      title: "Variateurs de vitesse sur moteurs",
      ref: "IND-UT-102 · 132 · 134",
      gain: "15–30 %",
      gainLabel: "par moteur équipé",
      prime: "5–30 k€/moteur",
      roi: "2–3 ans",
      desc: "Compresseurs frigorifiques, ventilateurs de tour aéroréfrigérante, pompes process. À déployer en cascade sur l'ensemble des moteurs > 7,5 kW.",
    },
    {
      n: "05",
      title: "Système de management de l'énergie ISO 50001",
      ref: "IND-SE-01",
      gain: "5–15 %",
      gainLabel: "conso totale via pilotage",
      prime: "30–200 k€",
      roi: "1,5–3 ans",
      desc: "Une démarche structurelle qui pérennise les gains et déclenche une prime CEE proportionnelle aux consommations totales.",
    },
  ],
};

export const cas = {
  eyebrow: "Étude de cas IAA",
  title: { lead: "Cas client :", it: "laiterie en Bretagne." },
  ref: "CASE-001",
  region: "IAA · Bretagne · 4,2 GWh/an",
  fiche: "IND-UT-117",
  date: "Livré 03/2025",
  recit:
    "Site de transformation laitière de 4,2 GWh/an. Audit DDADUE complet, identification d'un gisement de récupération de chaleur sur les deux groupes froids principaux, calorifugeage des points singuliers vapeur. Mise en compétition de 5 délégataires CEE.",
  stats: [
    { l: "Investissement", v: "184 k€" },
    { l: "Prime CEE", v: "98,5 k€" },
    { l: "Reste à charge", v: "85,5 k€" },
    { l: "Gain annuel", v: "41 k€" },
    { l: "ROI net", v: "2,1 ans" },
  ],
  cta: "Voir tous nos cas IAA",
  href: "/ressources/etudes-de-cas?secteur=iaa",
};

export const methode = {
  eyebrow: "Méthodologie spécifique IAA",
  title: { lead: "Nos points de vigilance", it: "audit en IAA." },
  /* v2 — paragraphe gouvernance factuelle (verbatim AJUSTEMENTS_INDEPENDANCE.md
     section 2 / pages secteurs industrie). Rendu en bas de la section méthodologie. */
  intro:
    "L'audit est conduit par Agence 3E Audit, entité certifiée OPQIBI 1905. La méthodologie suit la norme NF EN 16247-3. Le rapport est livré sous format PDF et est votre propriété — vous pouvez le partager avec votre direction, votre commissaire aux comptes, ou tout délégataire CEE de votre choix.",
  items: [
    {
      title: "Chaîne du froid alimentaire",
      desc: "Continuité de service exigée, mesurages non intrusifs, fenêtres d'instrumentation pendant les arrêts techniques.",
    },
    {
      title: "Vapeur process et NEP",
      desc: "Analyse fine des pertes vapeur (purges, calorifugeage, récupération condensats), traitement d'eau (IND-UT-125).",
    },
    {
      title: "Hygiène et conformité sanitaire",
      desc: "Matériaux et installations compatibles agroalimentaire (inox, joints), audit conduit en respect strict des protocoles HACCP.",
    },
    {
      title: "Saisonnalité de production",
      desc: "La mesure pendant 2-3 jours peut ne pas être représentative, nous travaillons sur 12 mois de données de comptage.",
    },
    {
      title: "Sous-comptage",
      desc: "Déploiement progressif de la fiche IND-UT-134 pour atteindre la granularité ISO 50001 si visée.",
    },
  ],
};

export const faq = {
  eyebrow: "FAQ IAA",
  title: { lead: "Trois questions", it: "qui reviennent en IAA." },
  items: [
    {
      q: "Mon process est intermittent, l'audit est-il pertinent ?",
      a: "Oui. Nous adaptons la méthodologie aux campagnes saisonnières (laiterie, brasserie). Les comptages sont calés sur des cycles types et complétés par les historiques de conso.",
    },
    {
      q: "Est-ce que les fiches IND-UT-117 marchent aussi pour le froid alimentaire négatif ?",
      a: "Oui, à condition que la chaleur récupérée soit effectivement valorisée. Sur les surgelés, le delta température fait que la chaleur est très chaude, donc particulièrement utile pour le préchauffage d'eau ou la production d'eau chaude sanitaire.",
    },
    {
      q: "Comment articuler audit DDADUE et plan de décarbonation France 2030 ?",
      a: "L'audit fournit la base technique nécessaire à toute candidature aux dispositifs France 2030 décarbonation industrie. Notre rapport est accepté comme étude technique préalable par BPI France et l'ADEME.",
    },
  ],
};
