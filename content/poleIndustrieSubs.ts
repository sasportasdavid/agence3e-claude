/**
 * Sous-pages /pole-industrie/[slug] — 7 secteurs à parité.
 *
 * Verbatim de SECTEURS_INDUSTRIE_V2.md.
 *
 * NB : `/pole-industrie/agroalimentaire-process-froid` (IAA) reste une page
 * custom (content/iaa.ts). Les 7 autres secteurs partagent ce template.
 */

export interface SectorChiffre {
  /** Valeur typographique (ex. "3 500", "73 %", "20 à 40 %"). */
  value: string;
  /** Légende (ex. "sites IAA en France"). */
  label: string;
}

export interface SectorSousSegment {
  title: string;
  desc: string;
}

export interface SectorGisement {
  ref: string;
  title: string;
  cumac: string;
  prime: string;
}

export interface SectorCas {
  /** Titre court, ex. "Fonderie d'aluminium Grand Est — 145 GWh annuels". */
  title: string;
  /** Type "indicatif" — affiche le disclaimer. */
  type: "indicatif" | "client";
  /** Contexte audit (1-2 lignes). */
  contexte: string;
  /** Description opérations (1-2 lignes). */
  operations: string;
  /** Stats chiffrées : invest / prime / ROI / éco. */
  stats: { label: string; value: string }[];
  /** Référence cas (CASE-XXX) si lien vers /etudes-de-cas/[slug]. */
  ref?: string;
  href?: string;
}

export interface SectorMethodeStep {
  title: string;
  desc: string;
}

export interface SectorFormChamp {
  label: string;
  type: "select" | "text" | "number";
  options?: string[];
  placeholder?: string;
}

export interface SectorData {
  slug: string;
  /** Nom court (ex. "Plasturgie"). */
  nav: string;
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    h1: string;
    sub: string;
    chiffres: SectorChiffre[];
  };
  lecture: {
    title: { lead: string; it: string };
    paragraphs: string[];
  };
  sousSegments: {
    title: { lead: string; it: string };
    items: SectorSousSegment[];
  };
  gisements: {
    title: { lead: string; it: string };
    items: SectorGisement[];
    note?: string;
  };
  cas: SectorCas;
  methode: {
    title: { lead: string; it: string };
    steps: SectorMethodeStep[];
  };
  form: {
    /** Valeur préremplie pour le champ "secteur" du LeadForm. */
    secteurValue: string;
    /** 3-5 champs spécifiques au secteur. */
    champs: SectorFormChamp[];
  };
}

export const SECTORS: SectorData[] = [
  // ─────────────────────────────────────────────────────────────
  // SECTEUR 2 — PLASTURGIE
  // ─────────────────────────────────────────────────────────────
  {
    slug: "plasturgie",
    nav: "Plasturgie",
    meta: {
      title: "Audit énergétique et CEE — Plasturgie | Agence 3E",
      description:
        "Audit DDADUE pour transformateurs plastiques (injection, extrusion, soufflage, thermoformage). Régulation thermique, variation de vitesse, air comprimé. ROI 2–5 ans.",
    },
    hero: {
      eyebrow: "Secteur · Plasturgie",
      h1: "Plasturgie.",
      sub: "Presses à injection, extrusion, soufflage — vos process sont énergivores par nature. La régulation des fourreaux et la variation de vitesse sur compresseurs représentent les deux gisements les plus accessibles, avec un retour sous 2 à 5 ans.",
      chiffres: [
        { value: "3 500", label: "sites en France (injection, extrusion, soufflage, thermoformage)" },
        { value: "1 000–1 200", label: "sites au-dessus du seuil DDADUE" },
        { value: "35 à 50 %", label: "de la conso liée aux moteurs et à l'air comprimé" },
      ],
    },
    lecture: {
      title: { lead: "Lecture du", it: "secteur." },
      paragraphs: [
        "La plasturgie française regroupe environ 3 500 sites industriels, dont entre 1 000 et 1 200 dépassent le seuil 2,75 GWh annuels imposé par la directive efficacité énergétique. Le secteur est dominé par l'injection (60 % des sites) suivi par l'extrusion (25 %), le soufflage et le thermoformage.",
        "Le poste électrique pèse 70 à 85 % de la facture énergétique, contre 15 à 30 % pour la chaleur de process et l'air comprimé. Les gisements les plus rentables sont concentrés sur trois leviers : la régulation thermique des fourreaux (variateurs sur résistances chauffantes, isolation thermique des cylindres), la variation de vitesse sur les pompes hydrauliques des presses, et l'air comprimé (compresseurs à variation de vitesse, récupération de chaleur, traque des fuites).",
        "Au-delà de la DDADUE, le secteur est concerné par le Pacte Industrie (formation décarbonation), par les enjeux liés au recyclage des thermoplastiques (loi AGEC, taxe générale sur les activités polluantes TGAP) et par la directive Éco-conception sur certains équipements.",
      ],
    },
    sousSegments: {
      title: { lead: "Sous-segments", it: "couverts." },
      items: [
        { title: "Injection plastique", desc: "Presses < 500 t à > 2 000 t, multi-matières." },
        { title: "Extrusion", desc: "Films, profilés, tubes, gaines." },
        { title: "Soufflage", desc: "Bouteilles, flacons PE/PET, conteneurs." },
        { title: "Thermoformage", desc: "Barquettes, plateaux, emballages alimentaires." },
        { title: "Composites & pièces techniques", desc: "RTM, pultrusion, drapage." },
      ],
    },
    gisements: {
      title: { lead: "Gisements CEE", it: "prioritaires." },
      items: [
        { ref: "IND-UT-102", title: "Variation électronique de vitesse sur moteur", cumac: "0,4 à 2,5 GWh cumac/site", prime: "3 à 21 k€" },
        { ref: "IND-UT-103", title: "Récupération de chaleur sur compresseur d'air", cumac: "0,3 à 1,8 GWh cumac/site", prime: "3 à 15 k€" },
        { ref: "IND-BA-110", title: "Déstratificateur ou brasseur d'air", cumac: "0,2 à 0,9 GWh cumac/site", prime: "2 à 8 k€" },
        { ref: "IND-UT-114", title: "Système de calorifugeage de réseaux", cumac: "0,3 à 1,2 GWh cumac/site", prime: "3 à 10 k€" },
        { ref: "IND-UT-136", title: "Systèmes moto-régulés", cumac: "0,5 à 2,0 GWh cumac/site", prime: "4 à 17 k€" },
      ],
      note: "Fourchettes indicatives basées sur la taille moyenne d'un site plasturgie de 3 à 30 GWh annuels. À valider par audit.",
    },
    cas: {
      title: "Injecteur Auvergne-Rhône-Alpes — 95 GWh annuels",
      type: "indicatif",
      contexte: "Audit DDADUE : 5 gisements identifiés sur presses, compresseurs et tour aéroréfrigérante.",
      operations: "Variation vitesse sur 12 presses + récupération chaleur compresseur.",
      stats: [
        { label: "Investissement", value: "312 000 €" },
        { label: "Prime CEE", value: "167 000 €" },
        { label: "ROI net", value: "3,2 ans" },
        { label: "Économies", value: "1 480 MWh/an" },
      ],
      ref: "CASE-002",
      href: "/ressources/etudes-de-cas/case-002",
    },
    methode: {
      title: { lead: "Méthodologie", it: "plasturgie." },
      steps: [
        { title: "Visite technique de cadrage", desc: "Inventaire parc machines, mesures puissance instantanée, fuites air comprimé." },
        { title: "Audit énergétique DDADUE", desc: "Campagne de mesures sur 1 à 2 cycles complets de production." },
        { title: "Plan d'action chiffré", desc: "5 à 10 opérations priorisées, focus utilités (air comprimé, eau glacée)." },
        { title: "AMO travaux", desc: "Qualification installateurs spécialisés (Atlas Copco, Kaeser, MGI Coutier, …)." },
        { title: "Suivi pluriannuel", desc: "Déclaration et versement primes, monitoring puissance, veille réglementaire." },
      ],
    },
    form: {
      secteurValue: "Plasturgie",
      champs: [
        { label: "Sous-segment", type: "select", options: ["Injection", "Extrusion", "Soufflage", "Thermoformage", "Composites"] },
        { label: "Nombre de presses ou lignes", type: "number", placeholder: "Ex. 12" },
        { label: "Puissance électrique installée totale (kW)", type: "number", placeholder: "Ex. 1 800" },
        { label: "Consommation annuelle (GWh ou MWh)", type: "text", placeholder: "Ex. 5,2 GWh" },
        { label: "Récupération de chaleur sur compresseur", type: "select", options: ["Oui", "Non"] },
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────
  // SECTEUR 3 — BLANCHISSERIES INDUSTRIELLES
  // ─────────────────────────────────────────────────────────────
  {
    slug: "blanchisseries-industrielles",
    nav: "Blanchisseries industrielles",
    meta: {
      title: "Audit énergétique et CEE — Blanchisseries industrielles | Agence 3E",
      description:
        "Audit DDADUE pour blanchisseries hôtelières, hospitalières, industrielles. Récupération de chaleur sur effluents, calorifugeage des réseaux vapeur. ROI 3–5 ans.",
    },
    hero: {
      eyebrow: "Secteur · Blanchisseries industrielles",
      h1: "Blanchisseries industrielles.",
      sub: "Tunnels de lavage, calandres, sécheurs — votre production de vapeur et d'eau chaude est le poste numéro 1. La récupération de chaleur sur effluents et le calorifugeage des réseaux dégagent 25 à 45 % d'économies, avec un retour sous 3 à 5 ans.",
      chiffres: [
        { value: "600", label: "sites principaux en France (industrielles, hospitalières, lignes plates)" },
        { value: "Quasi-totalité", label: "au-dessus du seuil DDADUE" },
        { value: "60 à 75 %", label: "de la conso liée à l'eau chaude et la vapeur" },
      ],
    },
    lecture: {
      title: { lead: "Lecture du", it: "secteur." },
      paragraphs: [
        "Le secteur de la blanchisserie industrielle française compte environ 600 sites principaux, dont la quasi-totalité dépasse largement le seuil 2,75 GWh imposé par la DDADUE. Le marché est segmenté en trois grandes activités : blanchisseries hôtelières et de restauration (linge plat principalement), blanchisseries hospitalières (linge contaminé, exigences hygiène strictes) et blanchisseries industrielles (vêtements de travail, linge professionnel).",
        "Le poste énergétique est dominé à 60-75 % par la production d'eau chaude et de vapeur (chaudières gaz, réseaux de distribution, calandres et sécheurs). Le reste se répartit entre la motorisation (tunnels de lavage, essoreuses), la ventilation hygiène (renouvellement d'air zones contaminées, séparation linge sale/propre) et l'air comprimé (séchage, transferts pneumatiques).",
        "Les gisements les plus rentables s'articulent autour de quatre leviers : récupération de chaleur sur effluents et fumées, calorifugeage des réseaux vapeur et eau chaude, régulation des sécheurs et calandres, et récupération de chaleur sur les compresseurs.",
      ],
    },
    sousSegments: {
      title: { lead: "Sous-segments", it: "couverts." },
      items: [
        { title: "Blanchisseries hôtelières et restauration", desc: "Linge plat, multi-clients." },
        { title: "Blanchisseries hospitalières", desc: "Linge contaminé, normes ISO 14065 / RABC." },
        { title: "Blanchisseries industrielles & vêtements pros", desc: "Mono-client, location-entretien." },
      ],
    },
    gisements: {
      title: { lead: "Gisements CEE", it: "prioritaires." },
      items: [
        { ref: "IND-UT-117", title: "Récupération de chaleur (groupe froid ou échangeur)", cumac: "1,5 à 5,5 GWh cumac/site", prime: "12 à 47 k€" },
        { ref: "IND-UT-114", title: "Calorifugeage de réseaux vapeur ou eau chaude", cumac: "0,8 à 2,8 GWh cumac/site", prime: "7 à 24 k€" },
        { ref: "IND-UT-129", title: "Échangeur de chaleur sur condensats", cumac: "0,5 à 2,0 GWh cumac/site", prime: "4 à 17 k€" },
        { ref: "IND-UT-103", title: "Récupération de chaleur sur compresseur d'air", cumac: "0,4 à 1,5 GWh cumac/site", prime: "3 à 13 k€" },
        { ref: "IND-UT-137", title: "Système de récupération sur effluents", cumac: "0,6 à 2,4 GWh cumac/site", prime: "5 à 20 k€" },
      ],
      note: "Fourchettes indicatives basées sur la taille moyenne d'un site blanchisserie de 5 à 40 GWh annuels. À valider par audit.",
    },
    cas: {
      title: "Blanchisserie hospitalière Île-de-France — 38 GWh annuels",
      type: "indicatif",
      contexte: "Audit DDADUE : 4 gisements identifiés (effluents, calorifugeage, condensats, compresseurs).",
      operations: "Récupération chaleur sur effluents + calorifugeage 1 200 m de réseau.",
      stats: [
        { label: "Investissement", value: "247 000 €" },
        { label: "Prime CEE", value: "138 000 €" },
        { label: "ROI net", value: "3,8 ans" },
        { label: "Économies", value: "1 120 MWh/an (gaz + élec)" },
      ],
      ref: "CASE-003",
      href: "/ressources/etudes-de-cas/case-003",
    },
    methode: {
      title: { lead: "Méthodologie", it: "blanchisserie." },
      steps: [
        { title: "Visite technique de cadrage", desc: "Relevés réseaux vapeur, prises de température sur effluents, inventaire calorifugeage existant." },
        { title: "Audit énergétique DDADUE", desc: "Campagne de mesures sur 1 cycle hebdomadaire (jours haute/basse production)." },
        { title: "Plan d'action chiffré", desc: "Focus production de chaleur, calorifugeage, et récupérations multiples." },
        { title: "AMO travaux", desc: "Qualification installateurs spécialisés (récupérateurs Hellio Industries, échangeurs Alfa Laval, etc.)." },
        { title: "Suivi pluriannuel", desc: "Monitoring conso vapeur, veille réglementaire spécifique (RABC pour hospitalier)." },
      ],
    },
    form: {
      secteurValue: "Blanchisserie",
      champs: [
        { label: "Sous-segment", type: "select", options: ["Hôtelière", "Hospitalière", "Industrielle vêtements"] },
        { label: "Capacité tonnage hebdomadaire (tonnes / semaine)", type: "number", placeholder: "Ex. 35" },
        { label: "Combustible chaudière", type: "select", options: ["Gaz naturel", "Propane", "Fioul", "Biomasse"] },
        { label: "Calorifugeage réseaux vapeur", type: "select", options: ["Oui", "Partiel", "Non"] },
        { label: "Récupération chaleur effluents", type: "select", options: ["Oui", "Non"] },
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────
  // SECTEUR 4 — MÉTALLURGIE & FONDERIE
  // ─────────────────────────────────────────────────────────────
  {
    slug: "metallurgie-fonderie",
    nav: "Métallurgie & fonderie",
    meta: {
      title: "Audit énergétique et CEE — Métallurgie & fonderie | Agence 3E",
      description:
        "Audit DDADUE pour fonderies, forges, traitement thermique et de surface. Récupération sur fumées, calorifugeage haute température, opération spécifique chaleur fatale.",
    },
    hero: {
      eyebrow: "Secteur · Métallurgie & fonderie",
      h1: "Métallurgie & fonderie.",
      sub: "Fours électriques ou gaz, traitement thermique, traitement de surface — vos gisements sont concentrés sur la chaleur process et les utilités. Récupération sur fumées, calorifugeage et variation de vitesse représentent 80 % du potentiel d'économies.",
      chiffres: [
        { value: "4 200", label: "sites industriels (fonderies, forges, usinage, traitement)" },
        { value: "~ 1 800", label: "sites au-dessus du seuil DDADUE" },
        { value: "50 à 70 %", label: "de la conso liée à la chaleur process" },
      ],
    },
    lecture: {
      title: { lead: "Lecture du", it: "secteur." },
      paragraphs: [
        "La métallurgie et fonderie française regroupe environ 4 200 sites, dont près de 1 800 dépassent le seuil 2,75 GWh fixé par la DDADUE. Le secteur couvre des activités très diverses : fonderies (fonte, acier, aluminium, alliages spéciaux), forges et estampage, usinage de précision, traitement thermique (cémentation, trempe, revenu), traitement de surface (galvanisation, anodisation, peinture).",
        "Le poste énergétique est dominé par la chaleur process (50 à 70 % de la facture) : fours électriques (induction, à arc) ou à gaz (résistifs, radiants), bains de traitement, étuves de séchage. Le reste se répartit entre l'air comprimé (souvent surdimensionné), les utilités (production d'eau de refroidissement, ventilation captation fumées) et l'éclairage industriel.",
        "Les gisements de récupération de chaleur sur fumées, le calorifugeage des fours et des réseaux haute température, ainsi que la modernisation des compresseurs et moteurs constituent les leviers principaux. La filière fait également l'objet de plans de décarbonation sectoriels ADEME (programme DECARB IND) et de programmes spécifiques sur la chaleur fatale (récupération sur fumées de fonderie pour préchauffage process ou réseaux de chaleur urbains).",
      ],
    },
    sousSegments: {
      title: { lead: "Sous-segments", it: "couverts." },
      items: [
        { title: "Fonderies", desc: "Fonte, acier, aluminium, métaux non ferreux." },
        { title: "Forges & estampage à chaud", desc: "Pièces auto, aéronautique, défense." },
        { title: "Traitement thermique", desc: "Cémentation, trempe, revenu." },
        { title: "Traitement de surface", desc: "Galvanisation, anodisation, électrodéposition." },
        { title: "Usinage & mécanique de précision", desc: "Pièces aéro, auto, défense." },
      ],
    },
    gisements: {
      title: { lead: "Gisements CEE", it: "prioritaires." },
      items: [
        { ref: "IND-UT-114", title: "Calorifugeage réseaux haute température", cumac: "0,6 à 2,5 GWh cumac/site", prime: "5 à 21 k€" },
        { ref: "IND-UT-103", title: "Récupération de chaleur sur compresseur d'air", cumac: "0,4 à 1,8 GWh cumac/site", prime: "3 à 15 k€" },
        { ref: "IND-UT-102", title: "Variation électronique de vitesse moteur", cumac: "0,3 à 1,5 GWh cumac/site", prime: "3 à 13 k€" },
        { ref: "IND-UT-118", title: "Récupération de chaleur sur fours", cumac: "1,0 à 4,5 GWh cumac/site", prime: "9 à 38 k€" },
        { ref: "IND-SE-01", title: "Opération spécifique (récupération chaleur fatale)", cumac: "Variable", prime: "50 à 500+ k€" },
      ],
      note: "Pour la métallurgie, l'opération spécifique IND-SE-01 (hors fiches standardisées) est souvent la plus rentable, mais nécessite un dossier dédié.",
    },
    cas: {
      title: "Fonderie d'aluminium Grand Est — 145 GWh annuels",
      type: "indicatif",
      contexte: "Audit DDADUE : 6 gisements identifiés (fumées four, calorifugeage poches, compresseurs, ventilation).",
      operations: "Récupération chaleur fumées four à induction + calorifugeage 800 m réseau eau de refroidissement.",
      stats: [
        { label: "Investissement", value: "580 000 €" },
        { label: "Prime CEE", value: "345 000 € (dont 220 000 € en op. spéc.)" },
        { label: "ROI net", value: "4,2 ans" },
        { label: "Économies", value: "2 850 MWh/an" },
      ],
      ref: "CASE-014",
      href: "/ressources/etudes-de-cas/case-014",
    },
    methode: {
      title: { lead: "Méthodologie", it: "métallurgie." },
      steps: [
        { title: "Visite technique de cadrage", desc: "Inventaire parc fours, mesures températures fumées, audit ventilation captation." },
        { title: "Audit énergétique DDADUE", desc: "Campagne de mesures sur 4 semaines (production normale)." },
        { title: "Plan d'action chiffré", desc: "Combinaison fiches standardisées + opération spécifique si gisement chaleur fatale identifié." },
        { title: "AMO travaux", desc: "Qualification installateurs spécialisés haute température (récupérateurs, échangeurs réfractaires)." },
        { title: "Suivi pluriannuel", desc: "Monitoring rendements four, veille décarbonation sectorielle." },
      ],
    },
    form: {
      secteurValue: "Métallurgie",
      champs: [
        { label: "Sous-segment", type: "select", options: ["Fonderie", "Forge", "Traitement thermique", "Traitement surface", "Usinage"] },
        { label: "Type de four principal", type: "select", options: ["Induction", "Arc", "Résistance", "Gaz"] },
        { label: "Tonnage annuel produit", type: "text", placeholder: "Ex. 12 000 t" },
        { label: "Consommation annuelle totale (GWh)", type: "text", placeholder: "Ex. 145" },
        { label: "Température fumées principales (°C)", type: "number", placeholder: "Ex. 650" },
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────
  // SECTEUR 5 — CHIMIE, PHARMACIE & COSMÉTIQUE
  // ─────────────────────────────────────────────────────────────
  {
    slug: "chimie-pharmacie-cosmetique",
    nav: "Chimie, pharmacie & cosmétique",
    meta: {
      title: "Audit énergétique et CEE — Chimie, pharmacie & cosmétique | Agence 3E",
      description:
        "Audit DDADUE pour chimie fine, pharma, cosmétique. Récupération sur condenseurs, optimisation CTA salles propres, calorifugeage. ROI 3 ans.",
    },
    hero: {
      eyebrow: "Secteur · Chimie, pharmacie & cosmétique",
      h1: "Chimie, pharmacie & cosmétique.",
      sub: "Réacteurs, distillateurs, salles propres, lyophilisation — vos process exigent température et hygrométrie maîtrisées. Récupération sur condenseurs, optimisation CTA et variation de vitesse libèrent 20 à 35 % d'économies.",
      chiffres: [
        { value: "3 200", label: "sites en France (chimie fine, pharma, cosmétique)" },
        { value: "~ 1 400", label: "sites au-dessus du seuil DDADUE" },
        { value: "40 à 55 %", label: "de la conso liée au process et aux fluides" },
      ],
    },
    lecture: {
      title: { lead: "Lecture du", it: "secteur." },
      paragraphs: [
        "La chimie, la pharmacie et la cosmétique françaises totalisent environ 3 200 sites de production, dont près de 1 400 dépassent le seuil DDADUE. Trois sous-segments structurent le marché : la chimie fine et la pétrochimie (synthèse moléculaire, intermédiaires de réaction), la pharmacie (formulation, conditionnement, biotechs) et la cosmétique (formulation, parfumerie, soin).",
        "Le poste énergétique se distribue entre la chaleur process (réacteurs, distillation, lyophilisation, séchage), le froid process (cristallisation, conservation principes actifs, salles propres), les utilités (eau ultra-pure, vapeur stérile, azote, air comprimé sec) et la ventilation des salles propres (Centrales de Traitement d'Air dimensionnées pour ISO 5/6/7/8). Les CTA des sites pharma fonctionnent en marche permanente et représentent souvent 25 à 40 % de la consommation totale.",
        "Les gisements les plus rentables se concentrent sur la récupération de chaleur sur condenseurs et compresseurs, l'optimisation des CTA (récupération sur air extrait, variation de vitesse, free-cooling), le calorifugeage des réseaux et la modernisation des chaudières vapeur. Le secteur fait également l'objet de programmes spécifiques liés à la réduction des solvants organiques volatils (directive COV) et à la gestion des produits dangereux (Seveso).",
      ],
    },
    sousSegments: {
      title: { lead: "Sous-segments", it: "couverts." },
      items: [
        { title: "Chimie fine & pétrochimie", desc: "Synthèse, intermédiaires, polymères." },
        { title: "Pharmacie & biotechs", desc: "Principes actifs, formulation, conditionnement stérile." },
        { title: "Cosmétique", desc: "Formulation, parfumerie, soin." },
        { title: "Compléments alimentaires & nutraceutique", desc: "Formes orales, poudres, formulations spéciales." },
        { title: "Encres, peintures & vernis industriels", desc: "Formulation, broyage, conditionnement." },
      ],
    },
    gisements: {
      title: { lead: "Gisements CEE", it: "prioritaires." },
      items: [
        { ref: "IND-UT-117", title: "Récupération de chaleur sur groupe froid", cumac: "1,2 à 4,0 GWh cumac/site", prime: "10 à 34 k€" },
        { ref: "IND-UT-103", title: "Récupération de chaleur sur compresseur d'air", cumac: "0,4 à 1,8 GWh cumac/site", prime: "3 à 15 k€" },
        { ref: "IND-UT-114", title: "Calorifugeage réseaux", cumac: "0,5 à 2,2 GWh cumac/site", prime: "4 à 19 k€" },
        { ref: "IND-UT-131", title: "Optimisation des CTA (variation vitesse + récupération)", cumac: "0,8 à 3,5 GWh cumac/site", prime: "7 à 30 k€" },
        { ref: "IND-UT-139", title: "Récupération de chaleur sur fumées chaudière", cumac: "0,6 à 2,4 GWh cumac/site", prime: "5 à 20 k€" },
      ],
      note: "Fourchettes indicatives basées sur la taille moyenne d'un site chimie / pharma / cosmétique de 8 à 80 GWh annuels. À valider par audit.",
    },
    cas: {
      title: "Site cosmétique Provence — 62 GWh annuels",
      type: "indicatif",
      contexte: "Audit DDADUE : 5 gisements identifiés (CTA, chaudière, calorifugeage, compresseurs, eau glacée).",
      operations: "Optimisation 4 CTA + variation vitesse + récupération chaleur condenseurs.",
      stats: [
        { label: "Investissement", value: "268 000 €" },
        { label: "Prime CEE", value: "152 000 €" },
        { label: "ROI net", value: "3,1 ans" },
        { label: "Économies", value: "1 380 MWh/an" },
      ],
      ref: "CASE-015",
      href: "/ressources/etudes-de-cas/case-015",
    },
    methode: {
      title: { lead: "Méthodologie", it: "chimie-pharma-cosmétique." },
      steps: [
        { title: "Visite technique de cadrage", desc: "Inventaire CTA, audit production froid/chaleur, mesure renouvellement air zones contrôlées." },
        { title: "Audit énergétique DDADUE", desc: "Campagne de mesures avec attention spécifique aux salles propres (continuité service)." },
        { title: "Plan d'action chiffré", desc: "Focus utilités (vapeur, froid, air comprimé) avant process pour minimiser impact qualité." },
        { title: "AMO travaux", desc: "Installateurs qualifiés pour environnement contrôlé (BPF, ISO 14644)." },
        { title: "Suivi pluriannuel", desc: "Monitoring conso CTA, veille COV/Seveso, traçabilité documentaire pharma." },
      ],
    },
    form: {
      secteurValue: "Chimie / pharma / cosmétique",
      champs: [
        { label: "Sous-segment", type: "select", options: ["Chimie fine", "Pharma", "Cosmétique", "Complément alim.", "Encres-peintures"] },
        { label: "Salles propres ISO 5/6/7/8", type: "select", options: ["Oui", "Non"] },
        { label: "Nombre de Centrales de Traitement d'Air", type: "number", placeholder: "Ex. 8" },
        { label: "Consommation annuelle totale (GWh)", type: "text", placeholder: "Ex. 62" },
        { label: "Production de vapeur", type: "select", options: ["Oui — chaudière", "Oui — réseau", "Non"] },
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────
  // SECTEUR 6 — IMPRIMERIE & INDUSTRIES GRAPHIQUES
  // ─────────────────────────────────────────────────────────────
  {
    slug: "imprimerie",
    nav: "Imprimerie & industries graphiques",
    meta: {
      title: "Audit énergétique et CEE — Imprimerie & industries graphiques | Agence 3E",
      description:
        "Audit DDADUE pour imprimeurs offset, héliogravure, flexographie, sérigraphie. Récupération chaleur compresseurs, déstratification atelier, variation de vitesse.",
    },
    hero: {
      eyebrow: "Secteur · Imprimerie & industries graphiques",
      h1: "Imprimerie & industries graphiques.",
      sub: "Rotatives offset, héliogravure, sérigraphie, finition — vos sécheurs et vos compresseurs sont les premiers postes. Récupération de chaleur, variation de vitesse et calorifugeage débloquent 20 à 30 % d'économies.",
      chiffres: [
        { value: "2 800", label: "sites en France (presses, finition, façonnage)" },
        { value: "~ 800", label: "sites au-dessus du seuil DDADUE" },
        { value: "35 à 50 %", label: "de la conso liée aux sécheurs et compresseurs" },
      ],
    },
    lecture: {
      title: { lead: "Lecture du", it: "secteur." },
      paragraphs: [
        "L'imprimerie et les industries graphiques françaises regroupent environ 2 800 sites, dont près de 800 dépassent le seuil DDADUE. Le secteur connaît une mutation importante : recul du papier traditionnel, croissance de l'emballage imprimé et de l'impression numérique. Trois grandes catégories de procédés cohabitent : l'offset (feuilles, bobines, presses rotatives), l'héliogravure (haut de gamme, longues séries), la flexographie & sérigraphie (emballage souple, étiquettes), et l'impression numérique (tirages courts, personnalisation).",
        "Le poste énergétique est dominé par les sécheurs UV ou IR des presses et les compresseurs d'air comprimé (35 à 50 % de la facture combinée), suivis par le chauffage des locaux (forte hauteur sous plafond), l'éclairage et la ventilation captation des solvants.",
        "Les gisements les plus rentables se concentrent sur la récupération de chaleur sur compresseurs, la variation de vitesse sur les pompes et ventilateurs, le calorifugeage des réseaux vapeur ou eau chaude, et la modernisation des sécheurs (passage UV-LED notamment, avec gain d'efficacité de 30 à 50 % vs UV-mercure). Le secteur est également concerné par la directive COV (composés organiques volatils) et les obligations de reporting carbone scope 3 (papier, encres, transport).",
      ],
    },
    sousSegments: {
      title: { lead: "Sous-segments", it: "couverts." },
      items: [
        { title: "Offset feuilles & bobines", desc: "Presses moyennes et grandes." },
        { title: "Héliogravure & flexographie", desc: "Emballage souple, étiquettes haut de gamme." },
        { title: "Sérigraphie & impression spéciale", desc: "Textile, signalétique, électronique imprimée." },
        { title: "Façonnage & reliure industriels", desc: "Brochage, dorure, gaufrage, conditionnement." },
      ],
    },
    gisements: {
      title: { lead: "Gisements CEE", it: "prioritaires." },
      items: [
        { ref: "IND-UT-103", title: "Récupération de chaleur sur compresseur d'air", cumac: "0,5 à 2,0 GWh cumac/site", prime: "4 à 17 k€" },
        { ref: "IND-UT-102", title: "Variation électronique de vitesse moteur", cumac: "0,3 à 1,5 GWh cumac/site", prime: "3 à 13 k€" },
        { ref: "IND-UT-114", title: "Calorifugeage de réseaux", cumac: "0,4 à 1,8 GWh cumac/site", prime: "3 à 15 k€" },
        { ref: "IND-BA-110", title: "Déstratificateur d'air (atelier grande hauteur)", cumac: "0,3 à 1,2 GWh cumac/site", prime: "2 à 10 k€" },
        { ref: "IND-UT-129", title: "Échangeur sur condensats", cumac: "0,4 à 1,6 GWh cumac/site", prime: "3 à 14 k€" },
      ],
      note: "Fourchettes indicatives basées sur la taille moyenne d'un site imprimerie de 3 à 25 GWh annuels. À valider par audit.",
    },
    cas: {
      title: "Imprimerie offset Hauts-de-France — 28 GWh annuels",
      type: "indicatif",
      contexte: "Audit DDADUE : 4 gisements identifiés (compresseurs, calorifugeage, déstratification, variateurs).",
      operations: "Récupération chaleur sur 2 compresseurs + déstratification atelier 4 200 m².",
      stats: [
        { label: "Investissement", value: "138 000 €" },
        { label: "Prime CEE", value: "78 000 €" },
        { label: "ROI net", value: "3,4 ans" },
        { label: "Économies", value: "760 MWh/an" },
      ],
      ref: "CASE-016",
      href: "/ressources/etudes-de-cas/case-016",
    },
    methode: {
      title: { lead: "Méthodologie", it: "imprimerie." },
      steps: [
        { title: "Visite technique de cadrage", desc: "Inventaire presses, mesure puissance compresseurs, relevé hauteur sous plafond." },
        { title: "Audit énergétique DDADUE", desc: "Campagne de mesures sur 2 semaines représentatives." },
        { title: "Plan d'action chiffré", desc: "Focus utilités air comprimé + ambiance atelier." },
        { title: "AMO travaux", desc: "Installateurs spécialisés air comprimé et chauffage industriel." },
        { title: "Suivi pluriannuel", desc: "Monitoring débit compresseurs, veille évolution COV." },
      ],
    },
    form: {
      secteurValue: "Imprimerie",
      champs: [
        { label: "Sous-segment", type: "select", options: ["Offset", "Héliogravure", "Flexographie", "Sérigraphie", "Façonnage"] },
        { label: "Nombre de presses", type: "number", placeholder: "Ex. 6" },
        { label: "Puissance compresseur principal (kW)", type: "number", placeholder: "Ex. 75" },
        { label: "Hauteur sous plafond atelier (m)", type: "number", placeholder: "Ex. 7" },
        { label: "Consommation annuelle (GWh ou MWh)", type: "text", placeholder: "Ex. 28 GWh" },
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────
  // SECTEUR 7 — BOIS, PAPIER & CARTON
  // ─────────────────────────────────────────────────────────────
  {
    slug: "bois-papier-carton",
    nav: "Bois, papier & carton",
    meta: {
      title: "Audit énergétique et CEE — Bois, papier & carton | Agence 3E",
      description:
        "Audit DDADUE pour scieries, papeteries, panneaux, carton ondulé. Récupération chaleur sécheurs, calorifugeage, opération spécifique vapeur sécheur.",
    },
    hero: {
      eyebrow: "Secteur · Bois, papier & carton",
      h1: "Bois, papier & carton.",
      sub: "Sécheurs, presses, broyeurs, chaudières biomasse — votre process consomme massivement de la chaleur. Récupération de chaleur fatale, optimisation séchage et calorifugeage débloquent jusqu'à 35 % d'économies.",
      chiffres: [
        { value: "2 100", label: "sites industriels en France (papeteries, scieries, panneaux)" },
        { value: "~ 1 200", label: "sites au-dessus du seuil DDADUE" },
        { value: "55 à 75 %", label: "de la conso liée à la chaleur process" },
      ],
    },
    lecture: {
      title: { lead: "Lecture du", it: "secteur." },
      paragraphs: [
        "L'industrie du bois, du papier et du carton française regroupe environ 2 100 sites de production, dont près de 1 200 dépassent le seuil DDADUE. Le secteur couvre des activités très diverses : scieries et bois construction (séchage, raboterie, ameublement), papeteries et cartonneries (production de pâte, machines à papier, conversion), panneaux dérivés (OSB, particules, MDF) et emballage carton ondulé.",
        "Le poste énergétique est dominé à 55-75 % par la chaleur process : sécheurs (papier, panneaux, bois), presses chauffantes, étuves. La plupart des sites disposent de chaudières biomasse alimentées par leurs propres déchets de production (chutes, sciures, écorces), ce qui en fait des candidats idéaux pour des opérations de récupération de chaleur fatale valorisables en CEE spécifiques.",
        "Les gisements rentables se concentrent sur la modernisation des sécheurs (récupération vapeur d'eau, optimisation rideaux), le calorifugeage des réseaux vapeur et eau chaude (souvent étendus dans ces sites), la variation de vitesse sur les ventilateurs de séchage et les pompes de circulation, et la récupération de chaleur sur fumées chaudière. Le secteur fait également l'objet de programmes ADEME spécifiques biomasse et de plans de décarbonation sectoriels (filière bois construction notamment).",
      ],
    },
    sousSegments: {
      title: { lead: "Sous-segments", it: "couverts." },
      items: [
        { title: "Scieries & première transformation bois", desc: "Séchage, raboterie, ameublement." },
        { title: "Papeteries & cartonneries", desc: "Pâte à papier, machines à papier, conversion." },
        { title: "Panneaux dérivés", desc: "OSB, particules, MDF, contreplaqué." },
        { title: "Emballage carton ondulé & conversion", desc: "Onduleuses, transformation, impression." },
      ],
    },
    gisements: {
      title: { lead: "Gisements CEE", it: "prioritaires." },
      items: [
        { ref: "IND-UT-114", title: "Calorifugeage réseaux vapeur ou eau chaude", cumac: "0,8 à 3,5 GWh cumac/site", prime: "7 à 30 k€" },
        { ref: "IND-UT-118", title: "Récupération de chaleur sur fours/sécheurs", cumac: "1,2 à 5,0 GWh cumac/site", prime: "10 à 42 k€" },
        { ref: "IND-UT-139", title: "Récupération de chaleur sur fumées chaudière", cumac: "0,8 à 3,2 GWh cumac/site", prime: "7 à 27 k€" },
        { ref: "IND-UT-102", title: "Variation électronique de vitesse moteur", cumac: "0,4 à 2,0 GWh cumac/site", prime: "3 à 17 k€" },
        { ref: "IND-SE-01", title: "Opération spécifique (récupération vapeur sécheur)", cumac: "Variable", prime: "80 à 600+ k€" },
      ],
      note: "Pour les papeteries et panneaux dérivés, l'opération spécifique IND-SE-01 sur récupération vapeur sécheur est souvent le gisement le plus rentable.",
    },
    cas: {
      title: "Papeterie Auvergne-Rhône-Alpes — 220 GWh annuels",
      type: "indicatif",
      contexte: "Audit DDADUE : 6 gisements identifiés (sécheur principal, fumées chaudière, calorifugeage, ventilateurs).",
      operations: "Récupération vapeur sécheur (opération spécifique) + calorifugeage 1 800 m réseau.",
      stats: [
        { label: "Investissement", value: "920 000 €" },
        { label: "Prime CEE", value: "540 000 € (dont 380 000 € en op. spéc.)" },
        { label: "ROI net", value: "3,8 ans" },
        { label: "Économies", value: "4 200 MWh/an" },
      ],
      ref: "CASE-017",
      href: "/ressources/etudes-de-cas/case-017",
    },
    methode: {
      title: { lead: "Méthodologie", it: "bois-papier." },
      steps: [
        { title: "Visite technique de cadrage", desc: "Inventaire sécheurs, mesure température fumées chaudière, audit calorifugeage." },
        { title: "Audit énergétique DDADUE", desc: "Campagne de mesures sur 1 cycle de production complet (haute saison)." },
        { title: "Plan d'action chiffré", desc: "Combinaison fiches + opération spécifique si gisement vapeur sécheur identifié." },
        { title: "AMO travaux", desc: "Installateurs spécialisés haute puissance vapeur et systèmes de récupération." },
        { title: "Suivi pluriannuel", desc: "Monitoring rendement chaudière, veille décarbonation sectorielle." },
      ],
    },
    form: {
      secteurValue: "Bois, papier & carton",
      champs: [
        { label: "Sous-segment", type: "select", options: ["Scierie", "Papeterie", "Panneaux", "Carton ondulé"] },
        { label: "Type de chaudière principale", type: "select", options: ["Gaz", "Fioul", "Biomasse", "Multi-énergie"] },
        { label: "Consommation annuelle totale (GWh)", type: "text", placeholder: "Ex. 220" },
        { label: "Sécheurs > 500 kW", type: "select", options: ["Oui", "Non"] },
        { label: "Calorifugeage réseau vapeur", type: "select", options: ["Oui", "Partiel", "Non"] },
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────
  // SECTEUR 8 — VERRE & CÉRAMIQUE
  // ─────────────────────────────────────────────────────────────
  {
    slug: "verre-ceramique",
    nav: "Verre & céramique",
    meta: {
      title: "Audit énergétique et CEE — Verre & céramique | Agence 3E",
      description:
        "Audit DDADUE pour verriers et céramistes (verre creux, plat, technique, sanitaire). Récupération sur fumées, préchauffage matières, opération spécifique haute température.",
    },
    hero: {
      eyebrow: "Secteur · Verre & céramique",
      h1: "Verre & céramique.",
      sub: "Fours de fusion, fours de cuisson, étuves de séchage — vos températures process dépassent souvent 1 200 °C. Récupération sur fumées et préchauffage matières premières représentent les gisements majeurs.",
      chiffres: [
        { value: "1 200", label: "sites en France (verre creux, plat, technique, céramique, faïence, sanitaire)" },
        { value: "~ 700", label: "sites au-dessus du seuil DDADUE" },
        { value: "65 à 85 %", label: "de la conso liée aux fours haute température" },
      ],
    },
    lecture: {
      title: { lead: "Lecture du", it: "secteur." },
      paragraphs: [
        "Le verre et la céramique français regroupent environ 1 200 sites de production, dont près de 700 dépassent le seuil DDADUE. Le secteur est intrinsèquement énergivore en raison des températures process élevées : fours de fusion verre à 1 500 °C, fours de cuisson céramique à 1 100-1 300 °C, étuves de séchage à 200-400 °C. Quatre sous-segments principaux structurent le secteur : verre creux (bouteilles, flacons), verre plat (vitrage, verre technique), céramique sanitaire et carrelage, et céramique technique et réfractaires.",
        "Le poste énergétique est dominé à 65-85 % par les fours haute température (gaz, électrique, ou hybrides). Le reste se répartit entre la production de chaleur de séchage, l'air comprimé (souvent intensif en céramique pour pulvérisation et formage), et la ventilation (captation fumées, refroidissement post-cuisson).",
        "Les gisements les plus rentables sont concentrés sur la récupération de chaleur sur fumées (préchauffage air de combustion, préchauffage matières premières, production d'eau chaude), le calorifugeage des fours et réseaux haute température, l'optimisation de la combustion (régulation O2, brûleurs nouvelle génération) et la variation de vitesse sur les ventilateurs. Le secteur fait l'objet de programmes spécifiques liés à la décarbonation des fours (substitution gaz → électrique ou hydrogène) et de plans de filière verre ADEME.",
      ],
    },
    sousSegments: {
      title: { lead: "Sous-segments", it: "couverts." },
      items: [
        { title: "Verre creux", desc: "Bouteilles, flacons, contenants." },
        { title: "Verre plat", desc: "Vitrage bâtiment, verre auto, verre technique." },
        { title: "Céramique sanitaire & carrelage", desc: "Sanitaire, carrelage mural et sol." },
        { title: "Céramique technique & réfractaires", desc: "Pièces techniques, isolants, briques réfractaires." },
      ],
    },
    gisements: {
      title: { lead: "Gisements CEE", it: "prioritaires." },
      items: [
        { ref: "IND-UT-118", title: "Récupération de chaleur sur fours", cumac: "2,0 à 8,0 GWh cumac/site", prime: "17 à 68 k€" },
        { ref: "IND-UT-114", title: "Calorifugeage réseaux haute température", cumac: "0,8 à 3,5 GWh cumac/site", prime: "7 à 30 k€" },
        { ref: "IND-UT-139", title: "Récupération de chaleur sur fumées", cumac: "1,0 à 4,5 GWh cumac/site", prime: "9 à 38 k€" },
        { ref: "IND-UT-102", title: "Variation électronique de vitesse", cumac: "0,3 à 1,5 GWh cumac/site", prime: "3 à 13 k€" },
        { ref: "IND-SE-01", title: "Opération spécifique (préchauffage matières)", cumac: "Variable", prime: "100 à 800+ k€" },
      ],
      note: "Sur les fours haute température, l'opération spécifique IND-SE-01 (préchauffage matières premières, récupération haute température) est souvent prioritaire.",
    },
    cas: {
      title: "Verrerie creuse Sud-Est — 175 GWh annuels",
      type: "indicatif",
      contexte: "Audit DDADUE : 5 gisements identifiés (préchauffage air combustion, récupération vapeur, calorifugeage, ventilateurs, éclairage).",
      operations: "Préchauffage air combustion four (opération spécifique) + calorifugeage 600 m réseau.",
      stats: [
        { label: "Investissement", value: "750 000 €" },
        { label: "Prime CEE", value: "432 000 € (dont 320 000 € en op. spéc.)" },
        { label: "ROI net", value: "3,2 ans" },
        { label: "Économies", value: "3 280 MWh/an" },
      ],
      ref: "CASE-018",
      href: "/ressources/etudes-de-cas/case-018",
    },
    methode: {
      title: { lead: "Méthodologie", it: "verre-céramique." },
      steps: [
        { title: "Visite technique de cadrage", desc: "Inventaire fours, mesure températures fumées, audit isolation thermique." },
        { title: "Audit énergétique DDADUE", desc: "Campagne de mesures sur 2 semaines (production normale, sans changement matière)." },
        { title: "Plan d'action chiffré", desc: "Opération spécifique souvent prioritaire (préchauffage matières, récupération haute température)." },
        { title: "AMO travaux", desc: "Installateurs spécialisés très haute température (réfractaires, échangeurs Inconel)." },
        { title: "Suivi pluriannuel", desc: "Monitoring rendement four, veille décarbonation filière." },
      ],
    },
    form: {
      secteurValue: "Verre & céramique",
      champs: [
        { label: "Sous-segment", type: "select", options: ["Verre creux", "Verre plat", "Céramique sanitaire", "Céramique technique"] },
        { label: "Température process maximale (°C)", type: "number", placeholder: "Ex. 1 500" },
        { label: "Combustible four principal", type: "select", options: ["Gaz naturel", "Électrique", "Hybride", "Autre"] },
        { label: "Consommation annuelle totale (GWh)", type: "text", placeholder: "Ex. 175" },
        { label: "Tonnage annuel produit", type: "text", placeholder: "Ex. 80 000 t" },
      ],
    },
  },
];

export const SECTORS_BY_SLUG: Record<string, SectorData> = Object.fromEntries(
  SECTORS.map((s) => [s.slug, s] as const),
);

/* ──────────────────────────────────────────────────────────────
 * Index pour la grille /pole-industrie (8 secteurs à parité).
 * IAA est la 1ʳᵉ tuile, suivie des 7 secteurs ci-dessus.
 * Une 9ᵉ tuile "Mon secteur n'y est pas" est ajoutée au rendu
 * dans le composant PISecteurs pour ouvrir le formulaire de contact.
 * ──────────────────────────────────────────────────────────────
 */

export interface SectorIndex {
  slug: string;
  nav: string;
  /** Une-ligne de pitch (extrait du sub-headline). */
  pitch: string;
  /** Chiffre clé (parc France) à afficher en grand. */
  parc: string;
  /** Tone pastel pour la card. */
  tone: "rose" | "blue" | "green" | "violet" | "orange" | "yellow" | "mint";
}

export const SECTORS_INDEX: SectorIndex[] = [
  {
    slug: "agroalimentaire-process-froid",
    nav: "Agroalimentaire & process froid",
    pitch: "Production froide, conditionnement réfrigéré, conservation négative — récupération de chaleur et freecooling rentables en 2 à 4 ans.",
    parc: "14 000 sites",
    tone: "green",
  },
  {
    slug: "plasturgie",
    nav: "Plasturgie",
    pitch: "Presses à injection, extrusion, soufflage — régulation des fourreaux et variation de vitesse compresseurs sur 2 à 5 ans.",
    parc: "3 500 sites",
    tone: "yellow",
  },
  {
    slug: "blanchisseries-industrielles",
    nav: "Blanchisseries industrielles",
    pitch: "Tunnels de lavage, calandres, sécheurs — récupération chaleur effluents et calorifugeage : 25 à 45 % d'économies.",
    parc: "600 sites",
    tone: "mint",
  },
  {
    slug: "metallurgie-fonderie",
    nav: "Métallurgie & fonderie",
    pitch: "Fours électriques ou gaz, traitement thermique, traitement de surface — récupération sur fumées et calorifugeage haute température.",
    parc: "4 200 sites",
    tone: "orange",
  },
  {
    slug: "chimie-pharmacie-cosmetique",
    nav: "Chimie, pharmacie & cosmétique",
    pitch: "Réacteurs, distillateurs, salles propres — récupération sur condenseurs, optimisation CTA : 20 à 35 % d'économies.",
    parc: "3 200 sites",
    tone: "blue",
  },
  {
    slug: "imprimerie",
    nav: "Imprimerie & industries graphiques",
    pitch: "Rotatives offset, héliogravure, sérigraphie, finition — récupération chaleur compresseurs et déstratification atelier.",
    parc: "2 800 sites",
    tone: "violet",
  },
  {
    slug: "bois-papier-carton",
    nav: "Bois, papier & carton",
    pitch: "Sécheurs, presses, broyeurs, chaudières biomasse — récupération chaleur fatale et calorifugeage : jusqu'à 35 % d'économies.",
    parc: "2 100 sites",
    tone: "rose",
  },
  {
    slug: "verre-ceramique",
    nav: "Verre & céramique",
    pitch: "Fours de fusion, fours de cuisson, étuves — récupération sur fumées et préchauffage matières premières.",
    parc: "1 200 sites",
    tone: "yellow",
  },
];
