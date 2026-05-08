/**
 * Sous-pages /pole-industrie/[slug] — verticaux forts (plasturgie, blanchisserie)
 * + 7 secteurs secondaires (template court). Verbatim de CONTENUS §3.2-3.4.
 *
 * NB : `/pole-industrie/agroalimentaire-process-froid` est une page custom
 * (vertical fort cœur de cœur), elle n'est pas dans cette liste.
 */

export type Strength = "fort" | "secondaire";

export interface IndGisement {
  ref: string;
  title: string;
  gain: string;
  prime: string;
  roi: string;
  desc?: string;
}

export interface SubInd {
  slug: string;
  nav: string;
  strength: Strength;
  meta: { title: string; description: string };
  hero: { eyebrow: string; h1: string; sub: string };
  /** sectoral reading — 1-3 paragraphs */
  lecture?: { title: string; paragraphs: string[] };
  /** sites covered list */
  perimetre: string[];
  /** prioritised CEE fiches */
  gisements: IndGisement[];
  /** vigilance bullet list */
  vigilance?: { title: string; items: string[] };
  /** related case ref */
  cas?: { ref: string; label: string; href: string };
  /** mention spécifique (Verre, Bois etc.) */
  mention?: string;
}

export const SUBS_IND: SubInd[] = [
  {
    slug: "plasturgie",
    nav: "Plasturgie",
    strength: "fort",
    meta: {
      title: "Audit énergétique et CEE pour la plasturgie | Agence 3E",
      description:
        "Audit DDADUE pour transformateurs plastiques (injection, extrusion, thermoformage). Spécialistes variateurs presses, récupération chaleur moules, presses électriques hybrides.",
    },
    hero: {
      eyebrow: "Vertical fort 02",
      h1: "Audit énergétique et CEE pour la plasturgie.",
      sub: "Injection plastique, extrusion, thermoformage, soufflage. La plasturgie française subit la pression des marges depuis 2022. Nos audits identifient en moyenne 18 à 25 % de gains potentiels — financés en grande partie par les CEE.",
    },
    lecture: {
      title: "Pourquoi la plasturgie est un secteur prioritaire pour nous",
      paragraphs: [
        "3 500 sites en France selon la Fédération de la Plasturgie, environ 1 200 au-dessus du seuil DDADUE. Le secteur partage une homogénéité technique forte : presses à injection, extrudeuses, lignes de thermoformage. Cette homogénéité nous permet de réutiliser 70 à 80 % de la même méthodologie d'audit d'un site à l'autre — c'est notre moteur de scalabilité.",
        "Côté gisements, la plasturgie a deux postes énergétiques dominants : la consommation électrique des presses (motorisation hydraulique sur les modèles classiques) et la production de froid pour le refroidissement des moules. Les leviers sont massifs et bien documentés par les fiches CEE 6ᵉ période.",
      ],
    },
    perimetre: [
      "Injection plastique (auto, électroménager, médical, emballage)",
      "Extrusion (profilés, films, tubes)",
      "Thermoformage (emballage, plateaux, médical)",
      "Soufflage (bouteilles, contenants)",
      "Sites combinés et transformation seconde",
    ],
    gisements: [
      {
        ref: "IND-UT-102",
        title: "Variateurs sur presses à injection",
        gain: "20–40 %",
        prime: "5–30 k€/presse",
        roi: "2–3 ans",
        desc: "Le gisement n°1 du secteur. Sur un parc de 12 presses, l'économie annuelle dépasse souvent 50 k€/an.",
      },
      {
        ref: "IND-UT-129",
        title: "Presse à injecter électrique ou hybride",
        gain: "30–60 %",
        prime: "20–80 k€/presse",
        roi: "3–5 ans",
        desc: "Lors du renouvellement de presse, la prime CEE peut couvrir 30–50 % du surcoût électrique vs hydraulique. Décisive pour basculer.",
      },
      {
        ref: "IND-UT-113 · 103",
        title: "Récupération de chaleur sur groupes de refroidissement de moules",
        gain: "5–12 %",
        prime: "15–60 k€",
        roi: "1,5–2,5 ans",
        desc: "Réutilisation pour le chauffage d'atelier, l'eau chaude sanitaire, ou les besoins process annexes.",
      },
      {
        ref: "IND-UT-131",
        title: "Calorifugeage des fourreaux d'injection",
        gain: "3–8 %",
        prime: "5–15 k€",
        roi: "0,8–1,5 an",
        desc: "Investissement faible, retour très rapide. Trop souvent oublié.",
      },
      {
        ref: "IND-UT-120 · 124 · 140",
        title: "Optimisation des compresseurs d'air comprimé",
        gain: "15–25 %",
        prime: "10–50 k€",
        roi: "1,5–3 ans",
        desc: "Air basse pression, séquenceur électronique, mise en veille des machines. Pack souvent traité ensemble.",
      },
    ],
    vigilance: {
      title: "Nos points de vigilance audit en plasturgie",
      items: [
        "Diversité du parc machines : nous auditons presse par presse, en distinguant hydrauliques, électriques et hybrides.",
        "Cycles de production : la consommation varie fortement selon le polymère et le moule. Nous croisons les données de la GPAO avec les comptages électriques.",
        "Production d'air comprimé : poste souvent sous-estimé, audité spécifiquement avec test de fuites.",
        "Refroidissement de moules : analyse fine du couple groupe froid + tour aéroréfrigérante.",
      ],
    },
    cas: {
      ref: "CASE-002",
      label: "Plasturgiste Auvergne-Rhône-Alpes",
      href: "/ressources/etudes-de-cas/case-002",
    },
  },
  {
    slug: "blanchisseries-industrielles",
    nav: "Blanchisserie",
    strength: "fort",
    meta: {
      title:
        "Audit énergétique et CEE pour les blanchisseries industrielles | Agence 3E",
      description:
        "Audit DDADUE pour blanchisseries hôtelières, hospitalières, EHPAD, vêtement de travail. Spécialistes PAC haute température, récupération chaleur eaux usées et condensats.",
    },
    hero: {
      eyebrow: "Vertical fort 03",
      h1: "Audit énergétique et CEE pour les blanchisseries industrielles.",
      sub: "Hôtellerie-restauration, hospitalier, EHPAD, vêtement de travail. La blanchisserie industrielle combine des consommations vapeur, eau chaude, séchage et repassage qui en font l'un des secteurs les plus intenses en énergie au m². Nos audits identifient des ROI inférieurs à 18 mois.",
    },
    lecture: {
      title: "Pourquoi la blanchisserie est notre niche premium",
      paragraphs: [
        "600 sites principaux en France, dont la quasi-totalité est au-dessus du seuil DDADUE de 2,75 GWh/an. Le secteur est une niche peu adressée par les majors généralistes — qui le considèrent trop spécialisé pour leurs équipes commerciales standardisées. C'est précisément notre avantage.",
        "La communauté professionnelle est restreinte (GEIST, indépendants, captifs hospitaliers), le bouche-à-oreille y est puissant, et les directions techniques cherchent activement des partenaires qui maîtrisent les spécificités de leur process.",
        "Côté gisements, la chaleur fatale est partout : eaux usées chaudes (60-70 °C), condensats de vapeur, air d'extraction des séchoirs. La PAC haute température devient une solution mature pour valoriser ces flux.",
      ],
    },
    perimetre: [
      "Blanchisseries servant l'hôtellerie-restauration (CHR)",
      "Blanchisseries hospitalières et cliniques",
      "Blanchisseries des EHPAD (en propre ou mutualisées)",
      "Blanchisseries de vêtement de travail (workwear)",
      "Blanchisseries pressing industriel",
      "Centres de location-entretien",
    ],
    gisements: [
      {
        ref: "IND-UT-137",
        title: "Pompe à chaleur haute température sur chaleur fatale",
        gain: "25–45 %",
        prime: "80–300 k€",
        roi: "1–2 ans",
        desc: "Le gisement-roi du secteur. La PAC valorise la chaleur des eaux usées (60-70 °C) pour produire de l'eau chaude à 85-90 °C, alimentant le tunnel de lavage.",
      },
      {
        ref: "IND-UT-104 · 103",
        title: "Récupération de chaleur sur condensats de vapeur",
        gain: "8–15 %",
        prime: "20–60 k€",
        roi: "1–1,5 an",
        desc: "Les condensats sont systématiquement chauds, leur récupération est quasi sans investissement.",
      },
      {
        ref: "IND-UT-131",
        title: "Calorifugeage des réseaux vapeur",
        gain: "4–8 %",
        prime: "8–30 k€",
        roi: "0,8–1,2 an",
        desc: "Très souvent dégradé sur les sites anciens, les économies sont massives en simple remplacement de calorifuges.",
      },
      {
        ref: "—",
        title: "Optimisation des séchoirs et trains de lavage",
        gain: "10–20 %",
        prime: "20–80 k€",
        roi: "2–3 ans",
        desc: "Régulation fine de l'air d'extraction, récupération de chaleur, automatismes.",
      },
      {
        ref: "IND-UT-139",
        title: "Stockage de chaleur fatale",
        gain: "5–12 %",
        prime: "50–250 k€",
        roi: "2–4 ans",
        desc: "Désynchronisation production/usage de chaleur. Particulièrement pertinent quand la production de linge est par cycles.",
      },
    ],
    vigilance: {
      title: "Nos points de vigilance audit en blanchisserie",
      items: [
        "Eau chaude et eau froide : analyse couplée des deux réseaux, pertes thermiques sur les bouclages.",
        "Tunnel de lavage : décomposition zone par zone (prélavage, lavage, rinçage), valorisation des eaux de rinçage.",
        "Séchoirs et calandres : croisement consommation vapeur / production de linge sec.",
        "Vapeur process : audit chaudière vapeur, traitement d'eau, optimisation de pression.",
        "Saisonnalité : pour les blanchisseries CHR, forte saisonnalité estivale qui doit être lissée dans les calculs.",
      ],
    },
    cas: {
      ref: "CASE-003",
      label: "Blanchisserie hospitalière IDF",
      href: "/ressources/etudes-de-cas/case-003",
    },
  },
  // === 7 secteurs secondaires ===
  {
    slug: "metallurgie-fonderie",
    nav: "Métallurgie & Fonderie",
    strength: "secondaire",
    meta: {
      title:
        "Audit énergétique et CEE pour la métallurgie et la fonderie | Agence 3E",
      description:
        "Audit DDADUE pour fonderies, traitements thermiques, presses, laminoirs. Méthodologie NF EN 16247-3, fiches CEE industrielles, accompagnement multi-sites.",
    },
    hero: {
      eyebrow: "Secteur industriel · 04",
      h1: "Audit énergétique et CEE pour la métallurgie et la fonderie.",
      sub: "Fours de fusion, traitements thermiques, presses à chaud, laminoirs, lignes de galvanisation. Notre méthodologie d'audit NF EN 16247-3 s'applique à tous les process métallurgiques. Pour les expertises pointues spécifiques (fours haute température notamment), nous mobilisons des sous-traitants spécialisés du secteur.",
    },
    perimetre: [
      "Fonderies fer, acier, alliages légers, cuivre",
      "Traitements thermiques (cémentation, trempe, revenu)",
      "Forges et presses à chaud",
      "Laminoirs et tréfileries",
      "Lignes de galvanisation et traitement de surface",
      "Découpe et assemblage à chaud",
    ],
    gisements: [
      { ref: "IND-UT-118", title: "Brûleur récupération chaleur four industriel", gain: "—", prime: "40–150 k€", roi: "—" },
      { ref: "IND-UT-104", title: "Économiseur effluents gazeux chaudière", gain: "—", prime: "20–80 k€", roi: "—" },
      { ref: "IND-UT-130", title: "Condenseur effluents gazeux chaudière", gain: "—", prime: "30–100 k€", roi: "—" },
      { ref: "IND-UT-137", title: "PAC sur chaleur fatale", gain: "—", prime: "80–300 k€", roi: "—" },
      { ref: "IND-UT-102 · 132", title: "Variateurs et moteurs IE4", gain: "—", prime: "5–30 k€/moteur", roi: "—" },
    ],
    mention:
      "La métallurgie est un secteur où nous auditons régulièrement, sans en faire notre spécialité historique. Nos auditeurs maîtrisent la norme NF EN 16247-3 et les bilans thermiques industriels. Pour les expertises pointues (modélisation CFD de fours, optimisation de cycles thermiques avancés), nous travaillons avec des sous-traitants reconnus du secteur.",
  },
  {
    slug: "papier-carton",
    nav: "Papier & Carton",
    strength: "secondaire",
    meta: {
      title: "Audit énergétique et CEE pour le papier et le carton | Agence 3E",
      description:
        "Audit DDADUE pour papetiers, cartonneries, transformateurs. Machines à papier, sécheurs, raffineurs, traitement d'eau. Méthodologie NF EN 16247-3.",
    },
    hero: {
      eyebrow: "Secteur industriel · 05",
      h1: "Audit énergétique et CEE pour le papier et le carton.",
      sub: "Machines à papier, sécheurs, raffineurs, presses, traitement d'eau. Le secteur combine vapeur process, électricité moteurs et eau chaude — trois leviers CEE majeurs.",
    },
    perimetre: [
      "Machines à papier intégrées",
      "Cartonneries et caisses",
      "Transformation et impression",
      "Recyclage papetier",
      "Tuyauteries process et chaudières vapeur",
      "Stations de traitement des eaux",
    ],
    gisements: [
      { ref: "IND-UT-117", title: "Récupération de chaleur (sécheurs, machines)", gain: "—", prime: "50–200 k€", roi: "—" },
      { ref: "IND-UT-103", title: "Optimisation compresseurs d'air", gain: "—", prime: "10–40 k€", roi: "—" },
      { ref: "IND-UT-104 · 130", title: "Économiseur / condenseur effluents chaudières", gain: "—", prime: "20–100 k€", roi: "—" },
      { ref: "IND-UT-131", title: "Calorifugeage réseaux vapeur", gain: "—", prime: "8–30 k€", roi: "—" },
      { ref: "IND-UT-102", title: "Variateurs sur moteurs > 11 kW", gain: "—", prime: "5–30 k€/moteur", roi: "—" },
    ],
  },
  {
    slug: "chimie-cosmetique",
    nav: "Chimie & Cosmétique",
    strength: "secondaire",
    meta: {
      title: "Audit énergétique et CEE pour la chimie et la cosmétique | Agence 3E",
      description:
        "Audit DDADUE pour réacteurs, distillation, séchage, vapeur process, salles propres. Articulation possible ISO 50001.",
    },
    hero: {
      eyebrow: "Secteur industriel · 06",
      h1: "Audit énergétique et CEE pour la chimie et la cosmétique.",
      sub: "Réacteurs, distillation, séchage, vapeur process, salles propres. Sites souvent déjà engagés dans une démarche ISO 50001 — nous articulons audit DDADUE et SMÉ.",
    },
    perimetre: [
      "Chimie de spécialités",
      "Pharmacie et façonniers",
      "Cosmétique et parfumerie",
      "Salles propres et bioproduction",
      "Réacteurs chauffés et autoclaves",
      "Distillation et séchage",
    ],
    gisements: [
      { ref: "IND-UT-117", title: "Récupération chaleur sur groupe froid / process", gain: "—", prime: "50–200 k€", roi: "—" },
      { ref: "IND-UT-104 · 130", title: "Effluents gazeux chaudière (économiseur, condenseur)", gain: "—", prime: "20–100 k€", roi: "—" },
      { ref: "IND-UT-118", title: "Brûleur récupération chaleur four industriel", gain: "—", prime: "40–150 k€", roi: "—" },
      { ref: "IND-UT-131", title: "Calorifugeage points singuliers vapeur", gain: "—", prime: "5–30 k€", roi: "—" },
      { ref: "IND-SE-01", title: "Système de management de l'énergie ISO 50001", gain: "—", prime: "30–200 k€", roi: "—" },
    ],
  },
  {
    slug: "textile-cuir",
    nav: "Textile & Cuir",
    strength: "secondaire",
    meta: {
      title: "Audit énergétique et CEE pour le textile et le cuir | Agence 3E",
      description:
        "Audit DDADUE pour teintureries, finition, fibrage, mégisserie. PAC haute température sur chaleur fatale, récupération chaudière, calorifugeage.",
    },
    hero: {
      eyebrow: "Secteur industriel · 07",
      h1: "Audit énergétique et CEE pour le textile et le cuir.",
      sub: "Teinture, finition, séchage, traitement d'eau, fibrage. La chaleur fatale (eaux teintures, condensats) est un gisement massif valorisable par PAC haute température.",
    },
    perimetre: [
      "Teintureries et finition",
      "Filature et tissage",
      "Mégisserie et tannerie",
      "Confection et apprêt",
      "Laveries et nettoyage technique",
    ],
    gisements: [
      { ref: "IND-UT-137", title: "PAC haute température sur chaleur fatale", gain: "—", prime: "80–300 k€", roi: "—" },
      { ref: "IND-UT-104 · 130", title: "Économiseur / condenseur chaudière", gain: "—", prime: "20–100 k€", roi: "—" },
      { ref: "IND-UT-131", title: "Calorifugeage réseaux vapeur", gain: "—", prime: "8–30 k€", roi: "—" },
      { ref: "IND-UT-102", title: "Variateurs sur moteurs", gain: "—", prime: "5–30 k€/moteur", roi: "—" },
    ],
  },
  {
    slug: "verre-ceramique",
    nav: "Verre & Céramique",
    strength: "secondaire",
    meta: {
      title: "Audit énergétique et CEE pour le verre et la céramique | Agence 3E",
      description:
        "Audit DDADUE pour fours de fusion, recuit, modelage. Brûleur récupération, économiseur, condenseur. Sous-traitance experte sur fours haute température.",
    },
    hero: {
      eyebrow: "Secteur industriel · 08",
      h1: "Audit énergétique et CEE pour le verre et la céramique.",
      sub: "Fours de fusion, recuit, refroidissement contrôlé, modelage. Sur les fours haute température, nous travaillons systématiquement avec un sous-traitant spécialisé.",
    },
    perimetre: [
      "Verreries d'emballage et plates",
      "Verres techniques et optiques",
      "Céramique sanitaire et carrelage",
      "Réfractaires et porcelaines",
      "Modelage, cuisson, recuit",
    ],
    gisements: [
      { ref: "IND-UT-118", title: "Brûleur récupération chaleur four industriel", gain: "—", prime: "40–150 k€", roi: "—" },
      { ref: "IND-UT-104 · 130", title: "Économiseur / condenseur effluents", gain: "—", prime: "20–100 k€", roi: "—" },
      { ref: "IND-UT-103", title: "Optimisation compresseurs d'air", gain: "—", prime: "10–40 k€", roi: "—" },
      { ref: "IND-UT-131", title: "Calorifugeage des réseaux", gain: "—", prime: "8–30 k€", roi: "—" },
    ],
    mention:
      "Sur les fours haute température (verreries d'emballage, fours de fusion), nous travaillons systématiquement avec un sous-traitant spécialisé du secteur. Notre rôle est de cadrer l'audit globalement (NF EN 16247-3) et de coordonner l'expertise pointue.",
  },
  {
    slug: "bois-ameublement",
    nav: "Bois & Ameublement",
    strength: "secondaire",
    meta: {
      title: "Audit énergétique et CEE pour le bois et l'ameublement | Agence 3E",
      description:
        "Audit DDADUE pour scieries, ameublement, parqueterie. Sécheurs, chaufferies biomasse, aspiration. Audit complet du système biomasse.",
    },
    hero: {
      eyebrow: "Secteur industriel · 09",
      h1: "Audit énergétique et CEE pour le bois et l'ameublement.",
      sub: "Séchoirs, chaufferies biomasse, aspiration, presses, vernissage. Vos chutes de bois alimentent souvent votre chaufferie — nous auditons l'ensemble du système.",
    },
    perimetre: [
      "Scieries et 1re transformation",
      "Ameublement et menuiserie industrielle",
      "Parqueterie et lambris",
      "Panneaux composites (MDF, OSB)",
      "Aspiration centralisée et combustion biomasse",
    ],
    gisements: [
      { ref: "IND-UT-137", title: "PAC sur chaleur fatale (séchoirs, condensation)", gain: "—", prime: "60–250 k€", roi: "—" },
      { ref: "IND-UT-104", title: "Économiseur effluents gazeux chaudière biomasse", gain: "—", prime: "20–80 k€", roi: "—" },
      { ref: "IND-UT-103", title: "Compresseurs aspiration", gain: "—", prime: "10–40 k€", roi: "—" },
      { ref: "IND-UT-131", title: "Calorifugeage réseaux", gain: "—", prime: "5–30 k€", roi: "—" },
    ],
    mention:
      "Vos chutes de bois alimentent souvent votre chaufferie. Notre audit couvre l'ensemble du système : aspiration centralisée, broyage, dosage, combustion biomasse, valorisation cendres.",
  },
  {
    slug: "autres-secteurs-industriels",
    nav: "Autres secteurs",
    strength: "secondaire",
    meta: {
      title: "Audit énergétique pour tous secteurs industriels | Agence 3E",
      description:
        "Vous êtes industriel et votre secteur n'apparaît pas dans la liste ? Notre méthodologie d'audit NF EN 16247-3 s'applique à tout site industriel assujetti DDADUE.",
    },
    hero: {
      eyebrow: "Page attrape-tout",
      h1: "Audit énergétique pour tous les secteurs industriels.",
      sub: "Vous êtes industriel et votre secteur n'apparaît pas dans la liste ? Contactez-nous : notre méthodologie d'audit NF EN 16247-3 s'applique à tout site industriel assujetti DDADUE.",
    },
    perimetre: [
      "Sites mono-établissement ou multi-sites",
      "Process continu ou batch",
      "Mix énergétique électricité, gaz, fuel, biomasse, vapeur",
      "Périmètres mixte industrie + tertiaire (siège + atelier)",
      "Audit volontaire pré-DDADUE pour anticipation",
    ],
    gisements: [
      { ref: "IND-UT-117", title: "Récupération chaleur process", gain: "—", prime: "50–200 k€", roi: "—" },
      { ref: "IND-UT-103", title: "Variation vitesse moteurs > 11 kW", gain: "—", prime: "5–30 k€", roi: "—" },
      { ref: "IND-UT-131", title: "Calorifugeage points singuliers vapeur", gain: "—", prime: "5–30 k€", roi: "—" },
      { ref: "IND-SE-01", title: "Système management énergie ISO 50001", gain: "—", prime: "30–200 k€", roi: "—" },
    ],
    mention:
      "218 fiches CEE actives en 2026, dont 40+ sectorielles industrie. Nous identifions les fiches applicables à votre process spécifique en pré-qualification.",
  },
];

export const SUBS_IND_BY_SLUG = Object.fromEntries(
  SUBS_IND.map((s) => [s.slug, s] as const),
);
