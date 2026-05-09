/**
 * Home page editorial content. Strings only — copy is taken verbatim from
 * Maquette 2 v4 - Aurore.html and SPEC_SITE_AGENCE3E.md (the spec is
 * authoritative on chiffres-clés, ne pas paraphraser).
 *
 * The original spec asked for an MDX-per-page approach. We picked a TS
 * data file for the home because every section is a layout-driven custom
 * component — MDX would only host strings without prose, so the value
 * goes to zero. Long-form pages (Comprendre, Blog, Glossaire) will be MDX.
 */

/* ---------- Types partagés ---------- */

export type Tone =
  | "rose"
  | "blue"
  | "green"
  | "violet"
  | "orange"
  | "yellow";

export interface PromiseCard {
  tone: "rose" | "blue" | "green";
  badge: string;
  /** when true, badge utilise --color-secondary plein vert. */
  badgeAccent?: boolean;
  title: { lead: string; it: string };
  desc: string;
  checks: string[];
  mockup: "pdf" | "table" | "dash";
}

export interface CaseStat {
  l: string;
  v: string;
}

export interface CaseMini {
  rows: { label: string; value: string }[];
  bar: number;
}

export interface CaseItem {
  span: 2 | 3;
  tone: Tone;
  tag: string;
  ref: string;
  title: string;
  meta: { ref: string; date: string };
  stats: CaseStat[];
  /** Optionnel : encart de synthèse sur les cas "feature". */
  mini?: CaseMini;
}

export const hero = {
  eyebrow: "Conformité · Financement · Travaux",
  h1Lines: [
    "Conformité DDADUE,",
    "primes CEE optimisées,",
    "travaux pilotés.",
  ],
  h1Tail: "Un seul interlocuteur.",
  /* v2 — sub-headline factuelle (cf. MENU_ET_HOME_V2.md modification 1) */
  sub: "Audit DDADUE conforme NF EN 16247, montage CEE compétitif, suivi du gisement à la mise en service. Industrie, tertiaire, résidentiel — France métropolitaine et outre-mer.",
  ctaPrimary: "Demander un rappel sous 24h",
  ctaSecondary: "Estimer ma prime CEE",
  trustText: "Plus de 30 fiches CEE industrielles maîtrisées",
};

export const pilier = {
  eyebrow: "Le pilier de la conformité DDADUE",
  title: { lead: "L'échéance approche.", tail: "Trois chiffres à retenir." },
  lede: "La loi DDADUE du 30 avril 2025 transpose la directive européenne d'efficacité énergétique. Sites industriels et tertiaires concernés au-dessus du seuil — sanction maximale 2 % du CA HT, 4 % en récidive.",
  stats: [
    {
      n: "01",
      value: "218",
      serif: true,
      label:
        "fiches CEE actives à la 6ᵉ période — dont 40+ sectorielles industrie applicables au panel client.",
    },
    {
      n: "02",
      value: "11 oct. 2026",
      serif: false,
      label:
        "date butoir DDADUE pour les sites > 2,75 GWh/an. J–522 à compter d'aujourd'hui.",
      labelHighlight: "J–522",
    },
    {
      n: "03",
      value: "2,75 GWh",
      serif: true,
      label:
        "seuil annuel d'assujettissement à l'audit obligatoire NF EN 16247. Renouvellement tous les 4 ans.",
    },
  ],
};

export const promise: {
  eyebrow: string;
  title: readonly (string | { it: string })[];
  cards: PromiseCard[];
} = {
  eyebrow: "Trois engagements",
  /* v2 — H2 ajusté pour rester cohérent avec la nouvelle 3e card (Suivi). */
  title: ["Conforme.", "Bancable.", { it: "Suivi sur la durée." }] as const,
  cards: [
    {
      tone: "rose" as const,
      badge: "Réglementaire",
      title: { lead: "Rapport d'audit", it: "conforme à la lettre." },
      desc: "Périmètre > 80 % des consommations, méthodologie NF EN 16247-1/3/4, dépôt AIDER inclus. Délai 12 semaines garanti contractuellement.",
      checks: [
        "Périmètre élargi sur 4 ans",
        "Dépôt AIDER inclus",
        "Délai garanti 12 semaines",
      ],
      mockup: "pdf" as const,
    },
    {
      /* v2 — swap green ↔ blue : la card "Bancable" passe en green pour
         libérer le bleu pour la nouvelle 3e card "Suivi pluriannuel". */
      tone: "green" as const,
      badge: "Bancable",
      title: { lead: "Tableau cumac", it: "opposable." },
      desc: "CAPEX/OPEX détaillé ligne par ligne, ROI net post-CEE, hiérarchie des gisements. Document remis au comité d'investissement, défendable en CODIR.",
      checks: [
        "CAPEX/OPEX par opération",
        "ROI net post-CEE",
        "Priorisation des gisements",
      ],
      mockup: "table" as const,
    },
    {
      /* v2 — 3e card remplacée par "Suivi pluriannuel garanti".
         Texte verbatim MENU_ET_HOME_V2.md modification 2. */
      tone: "blue" as const,
      badge: "Suivi inclus",
      title: { lead: "Suivi pluriannuel", it: "garanti." },
      desc: "Veille réglementaire, points trimestriels, déclaration OPERAT, remontée du terrain. Pendant 4 ans, on reste à vos côtés.",
      checks: [
        "Veille réglementaire continue",
        "Points trimestriels",
        "Déclaration OPERAT incluse",
      ],
      mockup: "dash" as const,
    },
  ],
};

export const poles = {
  eyebrow: "Trois pôles d'expertise",
  title: { lead: "Trois métiers,", it: "une même méthode." },
  tiles: [
    {
      size: "lg" as const,
      eyebrow: "Notre cœur d'expertise",
      title: {
        lead: "Industrie",
        it: "— le terrain où la spécialisation fait gagner.",
      },
      desc: "IAA process froid, plasturgie, blanchisserie, traitement de surface. Les fiches CEE industrielles maîtrisées sont le levier de différenciation : 218 fiches actives, 40+ sectorielles industrie, des primes nettement supérieures aux opérations standardisées tertiaires.",
      cta: "Découvrir le pôle Industrie →",
      href: "/pole-industrie",
    },
    {
      size: "md" as const,
      eyebrow: "Décret tertiaire · BACS",
      title: { lead: "Tertiaire", it: "" },
      desc: "Bureaux, retail, hôtellerie, datacenters, santé, enseignement.",
      cta: "Découvrir →",
      href: "/pole-tertiaire",
    },
    {
      /* v2 — libellé "Résidentiel" → "Particuliers".
         URL technique conservée /pole-residentiel/ (cf. MENU_ET_HOME_V2.md mod 3). */
      size: "sm" as const,
      eyebrow: "MaPrimeRénov' · Copros",
      title: { lead: "Particuliers", it: "" },
      desc: "Maisons individuelles, copropriétés, bailleurs sociaux.",
      cta: "Découvrir →",
      href: "/pole-residentiel",
    },
  ],
};

/* v2 — l'export `indep` (manifeste défensif) a été supprimé en Phase 2.
   La section IndepSection a été retirée de la Home en Phase 1. Le
   composant components/sections/IndepSection.tsx existe encore mais
   n'est plus importé nulle part — il pourra être supprimé dans un
   sprint ultérieur si confirmation. Le contenu factuel équivalent
   vit désormais sur /a-propos/notre-independance et
   /comprendre/independance-auditeur-nf-en-16247. */

export const ddadue = {
  eyebrow: "Échéance réglementaire",
  title: {
    lead: "Audit DDADUE :",
    it: "vérifier mon éligibilité en 30 secondes.",
  },
  body: "Sites industriels et tertiaires > 2,75 GWh/an concernés. Au-delà du 11 octobre 2026, sanction maximale de 2 % du CA HT, 4 % en récidive. Le diagnostic d'éligibilité est gratuit et sans engagement.",
  ctaPrimary: "Vérifier mon éligibilité",
  ctaGhost: "Comprendre la loi DDADUE →",
  meta: [
    {
      label: "Date butoir",
      value: "11 oct. 2026",
      sub: "soit J–522 — au rythme actuel des audits, le carnet de commandes des cabinets se ferme à l'été 2026.",
    },
    {
      label: "Sanction maximale",
      value: "2 % du CA HT",
      sub: "4 % en cas de récidive — décret n° 2025-XXX du 30 avril 2025.",
    },
  ],
};

/* v3 — Méthode 4 étapes, brief §3.8 (texte verbatim). */
export const how = {
  eyebrow: "Méthode",
  title: { lead: "Quatre étapes,", it: "un seul interlocuteur." },
  steps: [
    {
      n: 1,
      title: "Cadrage NDA",
      duration: "Semaine 0",
      desc: "Comprendre vos enjeux. Signature NDA, recueil documentaire, périmètre d'audit défini.",
    },
    {
      n: 2,
      title: "Audit énergétique DDADUE",
      duration: "Semaines 1–6",
      desc: "Visite de site, campagne de mesures, modélisation des gisements. Livrable : rapport NF EN 16247-3.",
    },
    {
      n: 3,
      title: "Montage CEE",
      duration: "Semaines 7–10",
      desc: "Constitution des dossiers de prime CEE, négociation auprès des délégataires, mandat de courtage signé.",
    },
    {
      n: 4,
      title: "Pilotage AMO travaux",
      duration: "Semaines 11–30+",
      desc: "Qualification installateurs RGE, suivi chantier, réception. Versement prime CEE sous 60 jours après mise en service.",
    },
  ],
};

export const sim = {
  eyebrow: "Estimateur en ligne",
  title: {
    lead: "Estimer la prime CEE",
    sub: "de mon site",
    it: "en quatre questions.",
  },
  lede: "Quatre questions sectorielles, une fourchette indicative basse / haute, un rappel sous 24 h pour transformer la fourchette en montant ferme.",
  meta: ["4 étapes", "Sans engagement", "Estimation immédiate"],
  cta: "Lancer le simulateur",
};

/* v3 — Ressources, brief §3.9 (texte verbatim eyebrow / H2 / sub).
 * Mix recommandé : 2 articles blog + 1 guide PDF téléchargeable. */
export const resources = {
  eyebrow: "Ressources",
  title: { lead: "Aller", it: "plus loin." },
  sub: "Articles, guides et fiches pratiques pour comprendre le dispositif CEE et l'audit DDADUE.",
  items: [
    {
      tag: "Article · 8 min",
      title:
        "6ᵉ période CEE : ce qui change vraiment pour les industriels.",
      cta: "Lire l'article",
      href: "/comprendre/6e-periode-cee-2026-2030",
    },
    {
      tag: "Décryptage · 12 min",
      title:
        "ISO 50001 vs DDADUE : équivalence, complémentarité, quand basculer.",
      cta: "Lire le décryptage",
      href: "/comprendre/iso-50001-vs-audit-ddadue",
    },
    {
      tag: "Guide PDF · 24 pages",
      title:
        "DDADUE 2026 — qui, quoi, quand. Le guide complet du dirigeant.",
      cta: "Télécharger le guide",
      href: "/ressources/guides",
    },
  ],
  ctaAll: "Voir toutes les ressources",
  hrefAll: "/ressources",
};
