/**
 * Simulateur CEE — données extraites verbatim de Maquette 4 - Simulateur CEE.html
 * (8 sous-segments × 3 segments + 7-8 opérations × 3 segments).
 */

export type Segment = "industrie" | "tertiaire" | "residentiel";

export interface SubSegment {
  name: string;
  meta: string;
  tag?: string;
}

export interface Operation {
  name: string;
  ref: string;
  tags: string[];
  popular?: boolean;
}

export const SEGMENTS: {
  key: Segment;
  num: string;
  name: string;
  desc: string;
  fiches: string;
  /** CSS variant id used for the aurore inside the seg-card */
  aurClass: "industrie" | "tertiaire" | "residentiel";
}[] = [
  {
    key: "industrie",
    num: "01 · Industrie",
    name: "Industrie.",
    desc: "IAA, plasturgie, blanchisserie, fonderie, traitement de surface, datacenter industriel.",
    fiches: "130+",
    aurClass: "industrie",
  },
  {
    key: "tertiaire",
    num: "02 · Tertiaire",
    name: "Tertiaire.",
    desc: "Bureaux, retail, hôtellerie, datacenter, santé, enseignement, logistique froide.",
    fiches: "90+",
    aurClass: "tertiaire",
  },
  {
    key: "residentiel",
    num: "03 · Résidentiel",
    name: "Résidentiel.",
    desc: "Maison individuelle, copropriété, bailleur social, logement collectif, parc HLM.",
    fiches: "60+",
    aurClass: "residentiel",
  },
];

export const SUBSEGMENTS: Record<Segment, SubSegment[]> = {
  industrie: [
    { name: "Agroalimentaire · process froid", meta: "IAA · 1 380 sites · ticket audit moyen 24 k€", tag: "Cœur métier" },
    { name: "Plasturgie · injection / extrusion", meta: "420 sites · gisement homogène 30%", tag: "Vertical fort" },
    { name: "Blanchisserie · pressing industriel", meta: "180 sites · prime moyenne 95 k€", tag: "Vertical fort" },
    { name: "Fonderie · traitement thermique", meta: "95 sites > seuil DDADUE" },
    { name: "Traitement de surface · galvano", meta: "230 sites · forte intensité énergétique" },
    { name: "Papier · carton · imprimerie", meta: "140 sites · vapeur process" },
    { name: "Chimie · pharmacie · cosmétique", meta: "380 sites · process complexe" },
    { name: "Datacenter industriel · télécoms", meta: "60 sites · enjeu cooling" },
  ],
  tertiaire: [
    { name: "Bureaux · siège / open-space", meta: "flotte > 5 000 m²", tag: "Cœur métier" },
    { name: "Retail · grande distribution", meta: "froid commercial · 8 000+ enseignes", tag: "Vertical fort" },
    { name: "Hôtellerie · restauration", meta: "15 000 sites · classement étoiles" },
    { name: "Datacenter · cloud · télécoms", meta: "120 sites · PUE cible 1,4", tag: "Vertical fort" },
    { name: "Santé · clinique · EHPAD", meta: "4 200 établissements" },
    { name: "Enseignement · campus · CFA", meta: "patrimoine > 10 000 m²" },
    { name: "Logistique · froid négatif", meta: "780 entrepôts > 8 000 m²" },
    { name: "Sport · loisirs · culture", meta: "piscines · gymnases · cinémas" },
  ],
  residentiel: [
    { name: "Maison individuelle propriétaire", meta: "projets isolation · chaudière · PAC", tag: "Cœur métier" },
    { name: "Copropriété · syndic", meta: "300 000 syndicats en France", tag: "Vertical fort" },
    { name: "Bailleur social · OPH", meta: "4 100 000 logements gérés", tag: "Vertical fort" },
    { name: "Logement collectif privé", meta: "parc avant 1990" },
    { name: "Locatif · investisseur", meta: "régime LMNP / PINEL" },
    { name: "Outre-mer · DOM", meta: "fiches dédiées BAREN101 / 106" },
  ],
};

export const OPERATIONS: Record<Segment, Operation[]> = {
  industrie: [
    { name: "Groupe froid haute efficacité avec récupération", ref: "IND-UT-117 · pôle utilités", tags: ["Forte demande", "ROI < 3 ans"], popular: true },
    { name: "Pompe à chaleur haute température", ref: "IND-UT-137 · vapeur process / récup eaux", tags: ["Structurant"], popular: true },
    { name: "Variateurs électroniques de vitesse", ref: "IND-UT-103 · moteurs ventilation / pompage", tags: ["Quick win", "ROI < 2 ans"], popular: true },
    { name: "Récupération de chaleur sur compresseurs d'air", ref: "IND-UT-128 · échangeur eau chaude", tags: ["ROI < 2 ans"] },
    { name: "Optimisation conduite chaudière vapeur", ref: "IND-SE-102 · pilotage régulation", tags: ["Quick win"] },
    { name: "Système de mesurage IPMVP", ref: "BAT-SE-104 · 14 sous-compteurs", tags: ["Sans travaux"] },
    { name: "Isolation calorifuge réseaux process", ref: "IND-UT-131 · vapeur · eau chaude", tags: [] },
    { name: "Récupération eaux grises NEP / CIP", ref: "BAT-TH-154 · spécifique IAA", tags: ["Vertical IAA"] },
  ],
  tertiaire: [
    { name: "Climatisation à haute efficacité", ref: "BAT-TH-101 · DRV / VRV", tags: ["Forte demande"], popular: true },
    { name: "Éclairage LED · GTB 4 fonctions", ref: "BAT-EQ-127 · pilotage central", tags: ["Quick win"], popular: true },
    { name: "Récupération chaleur datacenter", ref: "BAT-TH-138 · réseau chaleur urbain", tags: ["Structurant"], popular: true },
    { name: "GTB · gestion technique bâtiment", ref: "BAT-TH-116 · classe A IPMVP", tags: [] },
    { name: "Isolation toiture-terrasse", ref: "BAT-EN-105 · R = 7 m².K/W", tags: [] },
    { name: "VMC double flux haut rendement", ref: "BAT-TH-125 · échangeur 92 %", tags: [] },
    { name: "Boucle d'eau froide variateur", ref: "BAT-UT-108 · primaire CTA", tags: [] },
  ],
  residentiel: [
    { name: "Isolation des combles perdus", ref: "BAR-EN-101 · R = 7 m².K/W", tags: ["Forte demande"], popular: true },
    { name: "Pompe à chaleur air / eau", ref: "BAR-TH-104 · COP > 4,5", tags: ["Forte demande"], popular: true },
    { name: "Isolation murs par l'extérieur (ITE)", ref: "BAR-EN-102 · 820 m² façade", tags: ["Structurant"], popular: true },
    { name: "Chaudière biomasse haute performance", ref: "BAR-TH-107 · pellets · classe 5", tags: [] },
    { name: "Fenêtres double vitrage haute performance", ref: "BAR-EN-104 · Uw < 1,3", tags: [] },
    { name: "Programmateur d'intermittence", ref: "BAR-TH-118 · pilotage chauffage", tags: ["Quick win"] },
    { name: "Calorifugeage bouclage ECS", ref: "BAR-TH-160 · spécifique copro", tags: ["Vertical copro"] },
  ],
};

export const CLIMATIC_ZONES = [
  "H1a — Nord-Est",
  "H1b — Île-de-France",
  "H1c — Grand-Est",
  "H2a — Bretagne / Pays-de-Loire",
  "H2b — Centre-Val-de-Loire",
  "H2c — Sud-Ouest",
  "H2d — Sud-Est",
  "H3 — Méditerranée",
  "DOM — Antilles · Réunion · Mayotte · Guyane",
];

export const ENGAGEMENT_YEARS = ["2026", "2027", "2028"];

export const QPV_OPTIONS = ["Non", "Oui — précarité énergétique", "Oui — QPV"];

export const STEP_LABELS: Record<number, string> = {
  1: "Choix du segment",
  2: "Sous-secteur",
  3: "Opération CEE",
  4: "Paramètres & contact",
};
