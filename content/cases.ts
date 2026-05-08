/**
 * Études de cas — verbatim de SPEC §16 (12 cas inventés mais réalistes).
 * Chiffres et verbatims clients reproduits à l'identique.
 */

export type CaseSegment =
  | "iaa"
  | "industrie-autre"
  | "tertiaire"
  | "datacenter"
  | "hotellerie"
  | "bureau"
  | "copro-tertiaire"
  | "copro-residentielle"
  | "dom";

export interface CaseStats {
  conso?: string;
  invest: string;
  prime: string;
  reste: string;
  gain?: string;
  roi?: string;
}

export interface CaseStudy {
  slug: string; // for /ressources/etudes-de-cas/[slug]
  ref: string; // CASE-XXX
  title: string;
  region: string;
  /** segment buckets used by the filter */
  segments: CaseSegment[];
  /** label affiché dans le tag de la card */
  tag: string;
  /** sector + conso line */
  activity: string;
  travaux: string;
  fiches: string[];
  /** the 5 chiffres-clés */
  stats: CaseStats;
  /** narrative — 1-2 paragraphs */
  narrative: string;
  /** verbatim quote in italic serif */
  verbatim: { quote: string; author: string; role: string; region: string };
  tone:
    | "rose"
    | "blue"
    | "green"
    | "violet"
    | "orange"
    | "yellow";
  date: string;
}

export const CASES: CaseStudy[] = [
  {
    slug: "case-001",
    ref: "CASE-001",
    title: "Laiterie en Bretagne — récupération chaleur sur groupe froid + calorifugeage.",
    region: "Bretagne",
    tag: "IAA · Bretagne",
    segments: ["iaa"],
    activity: "Production fromagère, 6,8 GWh/an",
    travaux: "Récupération de chaleur sur groupe froid (IND-UT-117) + calorifugeage (IND-UT-131)",
    fiches: ["IND-UT-117", "IND-UT-131"],
    stats: {
      conso: "6,8 GWh/an",
      invest: "184 000 €",
      prime: "98 500 €",
      reste: "85 500 €",
      gain: "41 000 €/an",
      roi: "2,1 ans",
    },
    narrative:
      "Site de transformation laitière de 6,8 GWh/an. Audit DDADUE complet, identification d'un gisement de récupération de chaleur sur les deux groupes froids principaux, calorifugeage des points singuliers vapeur. Mise en compétition de 5 délégataires CEE. Travaux conduits sur 14 semaines avec arrêt de production minimal pendant les changements d'équipement.",
    verbatim: {
      quote:
        "On était dans l'obligation DDADUE et on a découvert qu'on financerait plus de la moitié des travaux par les CEE. Le rapport d'audit nous a servi en interne pour faire valider l'investissement par le groupe.",
      author: "Pascal L.",
      role: "Directeur de site",
      region: "Bretagne",
    },
    tone: "rose",
    date: "Livré 03/2025",
  },
  {
    slug: "case-002",
    ref: "CASE-002",
    title: "Plasturgiste Auvergne-Rhône-Alpes — variateurs presses à injection + presse hybride.",
    region: "Auvergne-Rhône-Alpes",
    tag: "Plasturgie · ARA",
    segments: ["industrie-autre"],
    activity: "Injection plastique pour automobile, 4,2 GWh/an",
    travaux:
      "Variateurs sur 12 presses à injection (IND-UT-102) + presse électrique hybride neuve (IND-UT-129)",
    fiches: ["IND-UT-102", "IND-UT-129"],
    stats: {
      conso: "4,2 GWh/an",
      invest: "312 000 €",
      prime: "142 000 €",
      reste: "170 000 €",
      gain: "58 000 €/an",
      roi: "2,9 ans",
    },
    narrative:
      "Plasturgiste de rang 2 automobile, 4,2 GWh/an. Audit énergétique complet sur le parc de 12 presses à injection. Identification d'un gisement majeur sur la motorisation. Couplé à un investissement neuf en presse électrique hybride, l'ensemble du programme a été financé à 45 % par les CEE.",
    verbatim: {
      quote: "On hésitait à passer en presses électriques hybrides. La prime CEE a été décisive.",
      author: "Sophie M.",
      role: "Responsable production",
      region: "Auvergne",
    },
    tone: "blue",
    date: "Livré 06/2025",
  },
  {
    slug: "case-003",
    ref: "CASE-003",
    title: "Blanchisserie hospitalière IDF — PAC haute température sur chaleur fatale.",
    region: "Île-de-France",
    tag: "Blanchisserie · IDF",
    segments: ["industrie-autre"],
    activity: "Blanchisserie hospitalière, 8,4 GWh/an (vapeur + électricité)",
    travaux: "PAC haute température sur chaleur fatale (IND-UT-137) + récupération sur eaux usées",
    fiches: ["IND-UT-137"],
    stats: {
      conso: "8,4 GWh/an",
      invest: "245 000 €",
      prime: "158 000 €",
      reste: "87 000 €",
      gain: "62 000 €/an",
      roi: "1,4 an",
    },
    narrative:
      "Blanchisserie industrielle desservant un groupement hospitalier d'IDF. Conso vapeur historiquement importante. Notre audit a permis de dimensionner une PAC haute température valorisant la chaleur fatale du process — solution rare mais aujourd'hui mature, dont la prime CEE a financé 65 % de l'investissement.",
    verbatim: {
      quote:
        "On a passé 6 mois à chercher comment financer la transition vapeur. La PAC chaleur fatale était la bonne réponse — on n'aurait pas su la trouver seuls.",
      author: "Karim B.",
      role: "Directeur technique",
      region: "Île-de-France",
    },
    tone: "violet",
    date: "Livré 02/2025",
  },
  {
    slug: "case-004",
    ref: "CASE-004",
    title: "Charcuterie Hauts-de-France — condensation flottante + ISO 50001.",
    region: "Hauts-de-France",
    tag: "IAA · Hauts-de-France",
    segments: ["iaa"],
    activity: "Charcuterie cuite, 5,1 GWh/an",
    travaux:
      "Condensation flottante haute pression (IND-UT-116) + variateurs compresseurs (IND-UT-102) + ISO 50001 (IND-SE-01)",
    fiches: ["IND-UT-116", "IND-UT-102", "IND-SE-01"],
    stats: {
      conso: "5,1 GWh/an",
      invest: "168 000 €",
      prime: "89 000 €",
      reste: "79 000 €",
      gain: "47 000 €/an",
      roi: "1,7 an",
    },
    narrative:
      "Charcuterie industrielle 5,1 GWh/an. Démarche couplée : audit DDADUE conforme + premier engagement ISO 50001. La fiche IND-SE-01 a apporté une prime supplémentaire significative pour la mise en place du SMEn. Économie annuelle de 47 k€ déjà constatée 8 mois après livraison.",
    verbatim: {
      quote:
        "On a couplé l'audit DDADUE avec le démarrage de la démarche ISO 50001. C'est la même équipe qui a tout accompagné.",
      author: "Jean-Marc T.",
      role: "DAF",
      region: "Hauts-de-France",
    },
    tone: "green",
    date: "Livré 04/2025",
  },
  {
    slug: "case-005",
    ref: "CASE-005",
    title: "Brasserie Nouvelle-Aquitaine — récup. compresseurs + calorifugeage cuves.",
    region: "Nouvelle-Aquitaine",
    tag: "IAA · Nouvelle-Aquitaine",
    segments: ["iaa"],
    activity: "Brasserie, 3,2 GWh/an",
    travaux:
      "Récupération chaleur sur compresseurs (IND-UT-103) + calorifugeage cuves (IND-UT-131)",
    fiches: ["IND-UT-103", "IND-UT-131"],
    stats: {
      conso: "3,2 GWh/an",
      invest: "92 000 €",
      prime: "51 000 €",
      reste: "41 000 €",
      gain: "22 000 €/an",
      roi: "1,9 an",
    },
    narrative:
      "Brasserie artisanale 3,2 GWh/an, sous le seuil DDADUE. Audit volontaire commandé en anticipation de la 6ᵉ période et de la conformité 2030. Démarche pilote sur la récupération chaleur compresseurs et le calorifugeage des cuves.",
    verbatim: {
      quote:
        "On était sous le seuil DDADUE mais on a fait l'audit volontaire. Aujourd'hui on prépare la conformité 2030 sereinement.",
      author: "Camille D.",
      role: "Cogérante",
      region: "Nouvelle-Aquitaine",
    },
    tone: "yellow",
    date: "Livré 05/2025",
  },
  {
    slug: "case-006",
    ref: "CASE-006",
    title: "Plateforme logistique alimentaire PACA — régulation HP/BP groupes froids.",
    region: "PACA",
    tag: "Logistique froid · PACA",
    segments: ["iaa"],
    activity: "Entrepôt grand froid, 9,8 GWh/an",
    travaux:
      "Régulation HP/BP groupes froids (IND-UT-115/116) + variateurs ventilateurs évaporateurs",
    fiches: ["IND-UT-115", "IND-UT-116"],
    stats: {
      conso: "9,8 GWh/an",
      invest: "218 000 €",
      prime: "134 000 €",
      reste: "84 000 €",
      gain: "71 000 €/an",
      roi: "1,2 an",
    },
    narrative:
      "Plateforme logistique grand froid, 9,8 GWh/an dont 78 % d'électricité. Travail fin sur la régulation HP/BP de la centrale frigorifique. ROI net de 1,2 an, l'un des cas les plus rentables de notre portefeuille IAA.",
    verbatim: {
      quote:
        "Notre conso électrique est notre premier poste de coût. La régulation flottante a été une révélation.",
      author: "Olivier S.",
      role: "Directeur exploitation",
      region: "PACA",
    },
    tone: "orange",
    date: "Livré 06/2025",
  },
  {
    slug: "case-007",
    ref: "CASE-007",
    title: "Datacenter on-premise IDF — confinement allées + free-cooling.",
    region: "Île-de-France",
    tag: "Datacenter · IDF",
    segments: ["datacenter", "tertiaire"],
    activity: "Datacenter on-premise, ~3 MW IT",
    travaux:
      "Confinement allées chaudes/froides (BAT-TH-153) + free-cooling eau de refroidissement (BAT-TH-156)",
    fiches: ["BAT-TH-153", "BAT-TH-156"],
    stats: {
      invest: "380 000 €",
      prime: "195 000 €",
      reste: "185 000 €",
      gain: "92 000 €/an",
      roi: "2,0 ans",
    },
    narrative:
      "Datacenter d'entreprise on-premise de ~3 MW IT. Audit énergétique avec focus PUE. Mise en place du confinement allées et installation du free-cooling sur eau de refroidissement. PUE divisé par 1,3, soit 92 k€ d'économie annuelle.",
    verbatim: {
      quote:
        "On a divisé notre PUE par 1,3. Et la prime CEE a financé la moitié de l'opération.",
      author: "Antoine R.",
      role: "DSI",
      region: "Île-de-France",
    },
    tone: "green",
    date: "Livré 04/2025",
  },
  {
    slug: "case-008",
    ref: "CASE-008",
    title: "Groupe hôtelier 4★ Occitanie — récup. eaux grises + GTB + ventilo HP.",
    region: "Occitanie",
    tag: "Hôtellerie · Occitanie",
    segments: ["hotellerie", "tertiaire"],
    activity: "Hôtel-restaurant 80 chambres, 1,4 GWh/an",
    travaux:
      "Récupération de chaleur sur eaux grises (BAT-TH-154) + GTB (BAT-TH-116) + ventiloconvecteurs HP (BAT-TH-143)",
    fiches: ["BAT-TH-154", "BAT-TH-116", "BAT-TH-143"],
    stats: {
      conso: "1,4 GWh/an",
      invest: "145 000 €",
      prime: "68 000 €",
      reste: "77 000 €",
      gain: "28 000 €/an",
      roi: "2,7 ans",
    },
    narrative:
      "Hôtel-restaurant 4★ Occitanie, 80 chambres. Trio de fiches : récupération sur eaux grises (gisement clé en hôtellerie), GTB centralisée, ventiloconvecteurs haute performance. Travaux planifiés en basse saison, exploitation maintenue.",
    verbatim: {
      quote:
        "L'AMO d'Agence 3E nous a évité le casse-tête du montage CEE. Trois devis comparés, le meilleur prix négocié pour nous.",
      author: "Hélène B.",
      role: "Directrice générale",
      region: "Occitanie",
    },
    tone: "blue",
    date: "Livré 08/2025",
  },
  {
    slug: "case-009",
    ref: "CASE-009",
    title: "Siège entreprise IDF — raccordement réseau de chaleur + GTB.",
    region: "Île-de-France",
    tag: "Bureaux · IDF",
    segments: ["bureau", "tertiaire"],
    activity: "Siège social 4 200 m², 720 MWh/an",
    travaux: "Raccordement réseau de chaleur urbain (BAT-TH-127) + GTB (BAT-TH-116)",
    fiches: ["BAT-TH-127", "BAT-TH-116"],
    stats: {
      conso: "720 MWh/an",
      invest: "165 000 €",
      prime: "95 000 €",
      reste: "70 000 €",
      gain: "32 000 €/an",
      roi: "2,2 ans",
    },
    narrative:
      "Siège social tertiaire 4 200 m². Conformité décret tertiaire et anticipation BACS. Raccordement au réseau de chaleur urbain disponible et installation d'une GTB classe A. La prime CEE a financé 58 % de l'opération.",
    verbatim: {
      quote:
        "On était très sceptiques sur les CEE — on pensait que c'était pour les particuliers. Erreur.",
      author: "Marc P.",
      role: "Responsable patrimoine",
      region: "Île-de-France",
    },
    tone: "violet",
    date: "Livré 09/2025",
  },
  {
    slug: "case-010",
    ref: "CASE-010",
    title: "Copropriété tertiaire Lyon — optimiseur de relance + équilibrage hydraulique.",
    region: "Rhône",
    tag: "Copro tertiaire · Lyon",
    segments: ["copro-tertiaire", "tertiaire"],
    activity: "Immeuble bureaux 6 000 m², chauffage collectif",
    travaux:
      "Optimiseur de relance (BAT-TH-109) + équilibrage hydraulique (BAT-SE-103)",
    fiches: ["BAT-TH-109", "BAT-SE-103"],
    stats: {
      invest: "38 000 €",
      prime: "24 500 €",
      reste: "13 500 €",
      gain: "11 200 €/an",
      roi: "1,2 an",
    },
    narrative:
      "Copropriété tertiaire 6 000 m², chauffage collectif gaz. Quick wins : optimiseur de relance et équilibrage hydraulique. AG votée à l'unanimité après présentation par notre AMO. 64 % d'investissement financé.",
    verbatim: {
      quote: "60 % de l'investissement financé. AG votée à l'unanimité.",
      author: "Sylvie K.",
      role: "Présidente du conseil syndical",
      region: "Rhône",
    },
    tone: "yellow",
    date: "Livré 03/2025",
  },
  {
    slug: "case-011",
    ref: "CASE-011",
    title: "Copropriété résidentielle Marseille — isolation toitures + GTB chaufferie.",
    region: "Bouches-du-Rhône",
    tag: "Copro · Marseille",
    segments: ["copro-residentielle"],
    activity: "Copropriété 48 lots, chauffage collectif gaz",
    travaux:
      "Isolation toitures-terrasses (BAT-EN-107) + GTB chaufferie + mandataire MaPrimeRénov' Copropriétés",
    fiches: ["BAT-EN-107", "BAT-TH-116"],
    stats: {
      invest: "285 000 €",
      prime: "198 000 €", // aides cumulées
      reste: "87 000 €",
      gain: "−42 % conso",
    },
    narrative:
      "Copropriété 48 lots à Marseille. Mandataire MaPrimeRénov' Copropriétés sur l'opération entière. Trois aides cumulées (MaPrimeRénov' Copro + CEE + Coup de pouce) couvrent 70 % de l'investissement, soit ~1 800 €/lot de reste à charge pour les copropriétaires.",
    verbatim: {
      quote:
        "Sans Agence 3E, on n'aurait jamais su monter le dossier MaPrimeRénov' Copro.",
      author: "Bernard L.",
      role: "Syndic",
      region: "Bouches-du-Rhône",
    },
    tone: "rose",
    date: "Livré 11/2024",
  },
  {
    slug: "case-012",
    ref: "CASE-012",
    title: "Industriel cosmétique La Réunion — isolation murs + climatiseur DOM.",
    region: "La Réunion",
    tag: "Industrie DOM · Réunion",
    segments: ["dom", "industrie-autre"],
    activity: "Production cosmétique 2,9 GWh/an, La Réunion",
    travaux:
      "Isolation murs DOM (INDEN101) + isolation combles DOM (INDEN102) + climatiseur performant (BAT-TH-115)",
    fiches: ["INDEN101", "INDEN102", "BAT-TH-115"],
    stats: {
      conso: "2,9 GWh/an",
      invest: "95 000 €",
      prime: "72 000 €", // barème DOM
      reste: "23 000 €",
      gain: "18 500 €/an",
      roi: "1,2 an",
    },
    narrative:
      "Industriel cosmétique de La Réunion, 2,9 GWh/an. Mobilisation des fiches CEE outre-mer (INDEN101 et 102) avec barème DOM bonifié 25-40 % par rapport à la métropole. ROI net de 1,2 an, prime représente 76 % de l'investissement.",
    verbatim: {
      quote: "Les fiches CEE outre-mer, peu de cabinets les maîtrisent. Agence 3E, oui.",
      author: "Naïma F.",
      role: "Directrice technique",
      region: "La Réunion",
    },
    tone: "orange",
    date: "Livré 07/2025",
  },
];

export const CASES_BY_SLUG = Object.fromEntries(CASES.map((c) => [c.slug, c]));

export const FILTERS: { key: CaseSegment | "all"; label: string }[] = [
  { key: "all", label: "Tous (12)" },
  { key: "iaa", label: "IAA" },
  { key: "industrie-autre", label: "Industrie" },
  { key: "tertiaire", label: "Tertiaire" },
  { key: "datacenter", label: "Datacenter" },
  { key: "hotellerie", label: "Hôtellerie" },
  { key: "bureau", label: "Bureaux" },
  { key: "copro-tertiaire", label: "Copro tertiaire" },
  { key: "copro-residentielle", label: "Copro résidentielle" },
  { key: "dom", label: "Outre-mer" },
];
