/**
 * Pôle Industrie page editorial content. Verbatim from
 * Maquette 3 v2 - Pole Industrie Aurore.html and SPEC_SITE_AGENCE3E.md.
 */

export const breadcrumb = [
  { href: "/", label: "Accueil" },
  { href: "/", label: "Pôles d'expertise" },
  { label: "Industrie" },
] as const;

export const hero = {
  eyebrow: "Pôle Industrie · Cœur d'expertise",
  h1Lead: ["Là où la spécialisation", "fait gagner."],
  h1It: "Industriels français : nos primes CEE sont les plus importantes.",
  sub: "218 fiches CEE actives, 40+ sectorielles industrie. IAA process froid, plasturgie, blanchisserie, traitement de surface. Audit DDADUE, montage CEE en compétition, AMO travaux jusqu'à la mise en service.",
  ctaPrimary: "Pré-qualifier mon site industriel",
  ctaSecondary: "Voir les 12 fiches CEE",
  trustText: "Plus de 30 fiches CEE industrielles maîtrisées",
};

export const ddadue = {
  eyebrow: "Échéance réglementaire",
  title: {
    lead: "Audit DDADUE pour l'industrie :",
    it: "deux critères d'éligibilité.",
  },
  body: "Sites industriels français consommant plus de 2,75 GWh/an d'énergie finale, ou sociétés > 250 ETP avec CA > 50 M€ ou bilan > 43 M€. Audit obligatoire NF EN 16247-1 et 16247-3, renouvellement tous les 4 ans.",
  cta: "Vérifier mon éligibilité",
  meta: [
    {
      label: "Date butoir",
      value: "11 oct. 2026",
      sub: "soit J–522. Carnets de cabinets en saturation été 2026.",
    },
    {
      label: "Sanctions",
      value: "2 % & 4 % CA HT",
      sub: "2 % en 1ʳᵉ infraction · 4 % en récidive (décret 2025).",
    },
  ],
};

export const specialites = {
  eyebrow: "Trois spécialités industrielles",
  title: { lead: "Les terrains où nous avons", it: "la main la plus sûre." },
  cards: [
    {
      tone: "green" as const,
      badge: "IAA · Process froid",
      title: "Agroalimentaire — process froid.",
      desc: "Laiteries, fromageries, charcuteries, plats préparés, surgelés. Récupération chaleur sur groupes froids, calorifugeage vapeur, NEP.",
      stats: [
        { l: "Sites France", v: "~1 800" },
        { l: "> seuil DDADUE", v: "~62 %" },
        { l: "Ticket audit", v: "35–80 k€" },
        { l: "Gisement moyen", v: "18–28 %" },
      ],
    },
    {
      tone: "yellow" as const,
      badge: "Plasturgie",
      title: "Plasturgie — extrusion, injection, soufflage.",
      desc: "Variation de vitesse extrudeuses, calorifugeage moules, récupération chaleur compresseurs, optimisation cycle injection.",
      stats: [
        { l: "Sites France", v: "~1 200" },
        { l: "> seuil DDADUE", v: "~48 %" },
        { l: "Ticket audit", v: "28–65 k€" },
        { l: "Gisement moyen", v: "15–22 %" },
      ],
    },
    {
      tone: "mint" as const,
      badge: "Blanchisserie",
      title: "Blanchisserie industrielle.",
      desc: "Récupération eaux grises, calorifugeage tunnels, optimisation cycle séchage, valorisation chaleur fatale en pré-chauffage.",
      stats: [
        { l: "Sites France", v: "~280" },
        { l: "> seuil DDADUE", v: "~58 %" },
        { l: "Ticket audit", v: "22–55 k€" },
        { l: "Gisement moyen", v: "14–20 %" },
      ],
    },
  ],
};

export const autresSecteurs = {
  eyebrow: "Autres secteurs industriels couverts",
  title: { lead: "Sept verticaux", it: "en plus." },
  tiles: [
    { num: "04", title: "Traitement de surface", desc: "Bains chauffés, four de séchage, ventilation captation." },
    { num: "05", title: "Métallurgie", desc: "Fours, traitements thermiques, fonderie aluminium." },
    { num: "06", title: "Verre & céramique", desc: "Fours de fusion, refroidissement, pots de cuisson." },
    { num: "07", title: "Papier & carton", desc: "Sécheurs vapeur, broyeurs, calandres." },
    { num: "08", title: "Chimie spécialités", desc: "Réacteurs chauffés, distillation, séchage." },
    { num: "09", title: "Pharmacie & cosmétique", desc: "NEP, salles propres, autoclaves stérilisation." },
    { num: "10", title: "Bois & ameublement", desc: "Sécheurs, presses chauffées, aspiration copeaux." },
    {
      num: "11",
      title: "Mon secteur n'y est pas ?",
      desc: "Décrivez-nous votre process, on s'adapte.",
      dark: true,
    },
  ],
};

export const methode = {
  eyebrow: "Méthodologie",
  title: { lead: "Sept étapes,", it: "douze à seize semaines." },
  steps: [
    { n: 1, title: "Cadrage NDA", duration: "Sem. 0 → 1", desc: "Pré-qualif, NDA, périmètre." },
    { n: 2, title: "Collecte 24 mois", duration: "Sem. 1 → 2", desc: "Factures, comptages, plans." },
    { n: 3, title: "Visite terrain", duration: "Sem. 2 → 4", desc: "Inspection, instrumentation." },
    { n: 4, title: "Modélisation", duration: "Sem. 4 → 6", desc: "Calculs, scénarios, gisements." },
    { n: 5, title: "Rapport NF 16247", duration: "Sem. 6 → 8", desc: "Livrable conforme, dépôt AIDER." },
    { n: 6, title: "Montage CEE", duration: "Sem. 8 → 12", desc: "Compétition 5 délégataires." },
    { n: 7, title: "AMO travaux", duration: "Sem. 12 → 16", desc: "Pilotage, attestations, EMMY." },
  ],
};

export const amo = {
  eyebrow: "AMO travaux jusqu'à mise en service",
  title: {
    lead: "L'auditeur sait ce qu'il faut faire.",
    it: "L'AMO s'assure que ça soit fait.",
  },
  body: "L'AMO travaux est opérée par Agence 3E Solutions sur un mandat écrit. Notre rémunération est fixée à la pré-qualif, nos engagements sont écrits, le client garde la main du choix des installateurs.",
  engagements: [
    {
      title: "Mandat écrit, rémunération fixée",
      desc: "Aucune commission cachée des installateurs. Rémunération AMO fixée contractuellement en cadrage.",
    },
    {
      title: "Réception conforme NF EN 16247-3",
      desc: "Vérification ITE, métrologie post-travaux, attestation pour dépôt EMMY.",
    },
    {
      title: "Suivi exploitation 12 mois",
      desc: "M&V, compteurs, ajustements, garantie de performance annoncée.",
    },
    {
      title: "Versement prime contrôlé",
      desc: "Suivi du dossier délégataire jusqu'au virement, défense en cas de litige.",
    },
  ],
};

export type CatalogCategory = "all" | "ut" | "ba" | "se" | "phare";
export interface CatalogFiche {
  ref: string;
  title: string;
  sector: string;
  prime: string;
  status: "phare" | "std" | "dom";
  cat: "ut" | "ba" | "se";
}

export const catalogue = {
  eyebrow: "Catalogue fiches CEE industrie",
  title: { lead: "Douze fiches qui couvrent", it: "l'essentiel des plans d'action." },
  filters: [
    { key: "all", label: "Toutes (12)" },
    { key: "ut", label: "UT — Utilités" },
    { key: "ba", label: "BA — Bâtiment" },
    { key: "se", label: "SE — Services" },
    { key: "phare", label: "Phares (7)" },
  ] as { key: CatalogCategory; label: string }[],
  rows: [
    { ref: "IND-UT-117", title: "Récupération chaleur sur groupe froid", sector: "IAA, agro", prime: "98,5 k€", status: "phare", cat: "ut" },
    { ref: "IND-UT-103", title: "Variation vitesse moteurs > 11 kW", sector: "Tous secteurs", prime: "59 k€", status: "phare", cat: "ut" },
    { ref: "IND-UT-134", title: "Calorifugeage points singuliers vapeur", sector: "IAA, chimie", prime: "24,8 k€", status: "phare", cat: "ut" },
    { ref: "IND-UT-137", title: "PAC haute température (process)", sector: "IAA, agro", prime: "186 k€", status: "phare", cat: "ut" },
    { ref: "IND-UT-114", title: "Motovariateur synchrone permanent", sector: "Tous secteurs", prime: "42 k€", status: "phare", cat: "ut" },
    { ref: "IND-UT-122", title: "Compresseur d'air à variation", sector: "Tous secteurs", prime: "38 k€", status: "phare", cat: "ut" },
    { ref: "IND-BA-112", title: "Isolation toiture bâtiment industriel", sector: "Tous secteurs", prime: "62 k€", status: "phare", cat: "ba" },
    { ref: "IND-UT-104", title: "Brûleur régulé sur turbine", sector: "Métallurgie, verre", prime: "82 k€", status: "std", cat: "ut" },
    { ref: "IND-UT-141", title: "Détection de fuites air comprimé", sector: "Tous secteurs", prime: "12 k€", status: "std", cat: "ut" },
    { ref: "IND-SE-101", title: "Système management énergie ISO 50001", sector: "Tous secteurs", prime: "28 k€", status: "std", cat: "se" },
    { ref: "IND-UT-105", title: "Récupération chaleur fumées chaudière", sector: "IAA, papier", prime: "74 k€", status: "std", cat: "ut" },
    { ref: "INDEN101", title: "Isolation murs DOM industrie", sector: "Outre-mer", prime: "112 k€", status: "dom", cat: "ut" },
  ] satisfies CatalogFiche[],
};

export const form = {
  eyebrow: "Pré-qualification industrielle",
  title: { lead: "Six champs.", it: "Une réponse sous 24 h." },
  reass: [
    { strong: "Sans engagement.", text: "Estimation et pré-qualif gratuites." },
    { strong: "NDA disponible.", text: "Dès la pré-qualif si besoin." },
    { strong: "Réponse rapide.", text: "Rappel sous 24h ouvrées." },
  ],
  cta: "Pré-qualifier mon site",
  fields: {
    raisonSociale: { label: "Raison sociale", placeholder: "Ex. Laiterie Bretagne SAS" },
    siret: { label: "SIRET", placeholder: "123 456 789 00012" },
    secteurOptions: ["IAA — process froid", "Plasturgie", "Blanchisserie", "Métallurgie", "Autre"],
    consoOptions: ["< 2,75 GWh", "2,75 – 5 GWh", "5 – 10 GWh", "10 – 50 GWh", "> 50 GWh"],
    email: { label: "E-mail dirigeant", placeholder: "responsable@entreprise.fr" },
    phone: { label: "Téléphone", placeholder: "+33 1 23 45 67 89" },
    contexte: {
      label: "Contexte (optionnel)",
      placeholder: "Audit déjà engagé ? Échéance interne ? Périmètre multi-sites ?",
    },
  },
};

export const faq = {
  eyebrow: "Questions fréquentes",
  title: { lead: "Huit questions", it: "qui reviennent." },
  items: [
    {
      q: "Mon site fait 2,5 GWh/an, suis-je concerné par DDADUE ?",
      a: "Le seuil DDADUE est de 2,75 GWh/an d'énergie finale. Toutefois, si votre société dépasse 250 ETP avec CA > 50 M€ ou bilan > 43 M€, vous restez assujetti au titre du critère « grande entreprise ». Pré-qualifions-le ensemble.",
    },
    {
      q: "Combien coûte un audit DDADUE pour un site IAA de 4 GWh ?",
      a: "Pour un site IAA process froid de 4 GWh/an mono-établissement, le ticket d'audit se situe typiquement entre 35 et 50 k€ HT, selon la complexité du process et le périmètre. Devis ferme remis sous 5 jours après cadrage.",
    },
    {
      q: "Délai pour avoir le rapport en main ?",
      a: "12 semaines garanti contractuellement, à compter de la signature du devis et de la collecte complète des factures sur 24 mois. Visite terrain dans les 4 premières semaines.",
    },
    {
      q: "Qu'est-ce qui distingue Agence 3E d'un installateur certifié RGE ?",
      a: "Notre métier est l'audit et le courtage CEE, pas la pose. La norme NF EN 16247-3 exige que l'auditeur soit indépendant des solutions et installateurs qu'il pourrait recommander. Un installateur RGE qui propose un audit « gratuit » couplé à sa prestation n'est pas conforme à cette exigence. Notre rapport est opposable au PNCEE parce qu'il sort d'une entité dédiée à l'audit (Agence 3E Audit, certifiée OPQIBI 1905).",
    },
    {
      q: "Vous valorisez la prime CEE ou bien c'est nous qui le faisons ?",
      a: "Nous montons le dossier CEE et le mettons en compétition auprès de 5 délégataires. La prime est versée directement au client. Notre rémunération sur cette partie est indexée sur le succès et un % de la prime obtenue, contractualisé en amont.",
    },
    {
      q: "Vous travaillez en outre-mer ?",
      a: "Oui. Antilles, Réunion, Guyane, Mayotte. Fiches CEE spécifiques DOM (INDEN101, etc.) qui offrent des primes 25–40 % supérieures à la métropole sur certaines opérations. Frais de visite terrain au tarif réel.",
    },
    {
      q: "L'audit ISO 50001 vaut-il DDADUE ?",
      a: "Oui sous conditions : la certification ISO 50001 en cours de validité, couvrant ≥ 80 % des consos, dispense de l'audit DDADUE quadriennal. Voir notre page « ISO 50001 vs DDADUE » pour le détail des équivalences et le bon arbitrage selon votre situation.",
    },
    {
      q: "Et si je dépose mon audit après le 11 oct. 2026 ?",
      a: "Sanction administrative possible : 2 % du CA HT en 1ʳᵉ infraction, 4 % en récidive (décret n° 2025-XXX). Au rythme actuel des audits déposés sur AIDER, le carnet de commandes des cabinets se ferme à l'été 2026 — l'arbitrage est plutôt « démarrer maintenant » que « attendre encore un peu ».",
    },
  ],
};

export const divider = {
  eyebrow: "Vertical fort 01",
  title: { lead: "Suite : page dédiée", it: "agroalimentaire — process froid." },
  body: "Notre cœur de cœur. Voir le prototype dédié pour la mise en perspective sectorielle complète.",
  cta: "Ouvrir la sous-page IAA",
  href: "/pole-industrie/agroalimentaire-process-froid",
};
