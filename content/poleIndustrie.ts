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
  sub: "218 fiches CEE actives, 40+ sectorielles industrie. Huit secteurs industriels couverts à parité — agroalimentaire, plasturgie, blanchisserie, métallurgie, chimie-pharma-cosmétique, imprimerie, bois-papier-carton, verre-céramique. Audit DDADUE, montage CEE en compétition, AMO travaux jusqu'à la mise en service.",
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

/* v3 (Phase 3) — Les exports `specialites` (3 verticaux forts) et
 * `autresSecteurs` (7 secteurs noyés) ont été retirés au profit d'une
 * grille unique à parité de 8 secteurs (cf. SECTORS_INDEX dans
 * content/poleIndustrieSubs.ts, rendue par PISecteurs.tsx). */

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

/* v3 (Phase 3) — Liste des 12 fiches CEE industrie alignée sur le livrable
 * SECTEURS_INDUSTRIE_V2.md : IND-UT-117, IND-UT-103, IND-UT-131, IND-UT-102,
 * IND-UT-134, IND-SE-01, IND-UT-137, IND-UT-139, IND-UT-118, IND-UT-114,
 * IND-UT-129, IND-UT-135. */
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
    { ref: "IND-UT-117", title: "Récupération de chaleur sur groupe froid", sector: "IAA, chimie, blanchisserie", prime: "8 à 47 k€", status: "phare", cat: "ut" },
    { ref: "IND-UT-103", title: "Récupération de chaleur sur compresseur d'air", sector: "Tous secteurs", prime: "2 à 17 k€", status: "phare", cat: "ut" },
    { ref: "IND-UT-131", title: "Optimisation des CTA (variation + récupération)", sector: "Chimie, pharma, cosmétique", prime: "7 à 30 k€", status: "phare", cat: "ut" },
    { ref: "IND-UT-102", title: "Variation électronique de vitesse moteur", sector: "Tous secteurs", prime: "2 à 21 k€", status: "phare", cat: "ut" },
    { ref: "IND-UT-134", title: "Sous-comptage énergétique", sector: "Tous secteurs", prime: "Selon parc", status: "phare", cat: "ut" },
    { ref: "IND-SE-01", title: "Opération spécifique (chaleur fatale, préchauffage)", sector: "Métallurgie, verre, bois-papier", prime: "50 à 800+ k€", status: "phare", cat: "se" },
    { ref: "IND-UT-137", title: "Système de récupération sur effluents", sector: "Blanchisserie, IAA", prime: "5 à 20 k€", status: "phare", cat: "ut" },
    { ref: "IND-UT-139", title: "Récupération de chaleur sur fumées chaudière", sector: "Chimie, bois-papier, verre", prime: "5 à 38 k€", status: "std", cat: "ut" },
    { ref: "IND-UT-118", title: "Récupération de chaleur sur fours", sector: "Métallurgie, verre, bois-papier", prime: "9 à 68 k€", status: "std", cat: "ut" },
    { ref: "IND-UT-114", title: "Calorifugeage de réseaux", sector: "Tous secteurs", prime: "3 à 30 k€", status: "std", cat: "ut" },
    { ref: "IND-UT-129", title: "Échangeur de chaleur sur condensats", sector: "Blanchisserie, imprimerie", prime: "3 à 17 k€", status: "std", cat: "ut" },
    { ref: "IND-UT-135", title: "Freecooling par eau de refroidissement", sector: "IAA, datacenter, chimie", prime: "7 à 27 k€", status: "std", cat: "ut" },
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
      a: "Notre métier est l'audit et le courtage CEE, pas la pose. La norme NF EN 16247-3 exige que l'auditeur soit indépendant des solutions et installateurs qu'il pourrait recommander. Un installateur RGE qui propose un audit « gratuit » couplé à sa prestation n'est pas conforme à cette exigence. Notre rapport est opposable au PNCEE parce qu'il sort d'un pôle dédié à l'audit (Agence 3E Audit, qualifié OPQIBI 1905), opérationnellement cloisonné de notre activité commerciale CEE.",
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
  eyebrow: "Pré-qualification industrielle",
  title: { lead: "Sous 24 h ouvrées :", it: "estimation, devis, calendrier." },
  body: "Décrivez-nous votre site (secteur, conso, échéance) — nous vous rappelons sous 24 h ouvrées avec une fourchette d'audit, un calendrier de visite et la liste des gisements CEE prioritaires identifiés en pré-qualif.",
  cta: "Pré-qualifier mon site",
  href: "/contact",
};
