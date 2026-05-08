/**
 * Blog index — 5 articles définis dans CONTENUS §13.
 */

export type BlogCategory =
  | "reglementation"
  | "cee"
  | "industrie"
  | "tertiaire"
  | "residentiel"
  | "etudes";

export interface BlogArticle {
  slug: string;
  title: string;
  category: BlogCategory;
  catLabel: string;
  readTime: string;
  excerpt: string;
  date: string;
  /** tone for the card in the index */
  tone: "rose" | "blue" | "green" | "violet" | "orange" | "yellow";
}

export const BLOG_CATEGORIES: { key: BlogCategory | "all"; label: string }[] = [
  { key: "all", label: "Tous (5)" },
  { key: "reglementation", label: "Réglementation" },
  { key: "cee", label: "CEE" },
  { key: "industrie", label: "Industrie" },
  { key: "tertiaire", label: "Tertiaire" },
  { key: "residentiel", label: "Résidentiel" },
  { key: "etudes", label: "Études et chiffres" },
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    slug: "ddadue-2025-ce-qui-change-pour-les-industriels",
    title:
      "DDADUE 2025 : ce qui change pour les industriels au 11 octobre 2026",
    category: "reglementation",
    catLabel: "Réglementation",
    readTime: "8 min",
    excerpt:
      "Du critère taille au critère consommation, le seuil 2,75 GWh/an, le calendrier, les sanctions, le cas particulier ISO 50001 et les pièges à éviter.",
    date: "Avril 2026",
    tone: "rose",
  },
  {
    slug: "calculer-prime-cee-fiches-ind-ut-117-103",
    title:
      "Comment calculer votre prime CEE avec les fiches IND-UT-117 et IND-UT-103",
    category: "cee",
    catLabel: "CEE",
    readTime: "10 min",
    excerpt:
      "Tutoriel pédagogique avec exemples chiffrés sur les deux fiches récupération de chaleur les plus utilisées en industrie. Formules, exemples laiterie + brasserie, comparaison de prix.",
    date: "Mars 2026",
    tone: "green",
  },
  {
    slug: "recuperation-chaleur-groupes-froids-5-erreurs",
    title:
      "Récupération de chaleur sur groupes froids : 5 erreurs qui coûtent cher en agroalimentaire",
    category: "industrie",
    catLabel: "Industrie",
    readTime: "7 min",
    excerpt:
      "Sous-dimensionnement de l'échangeur, oubli de la régulation, absence de mesure du gain, négligence du désembouage, sous-estimation des pertes thermiques de stockage.",
    date: "Mars 2026",
    tone: "blue",
  },
  {
    slug: "plasturgie-variateurs-presses-injection-gisement-1",
    title:
      "Plasturgie : pourquoi les variateurs sur presses à injection sont le gisement n°1 du secteur",
    category: "industrie",
    catLabel: "Industrie",
    readTime: "6 min",
    excerpt:
      "ROI typique des variateurs en plasturgie. Données sectorielles, exemples chiffrés, freins habituellement opposés à l'investissement.",
    date: "Février 2026",
    tone: "yellow",
  },
  {
    slug: "blanchisseries-4-leviers-economies-2026",
    title:
      "Blanchisseries industrielles : 4 leviers d'économies sous-exploités en 2026",
    category: "industrie",
    catLabel: "Industrie",
    readTime: "8 min",
    excerpt:
      "Tour d'horizon des gisements en blanchisserie : PAC haute température sur eaux usées, récupération condensats, optimisation séchoirs, stockage chaleur fatale.",
    date: "Février 2026",
    tone: "violet",
  },
];

export const BLOG_BY_SLUG = Object.fromEntries(
  BLOG_ARTICLES.map((a) => [a.slug, a] as const),
);
