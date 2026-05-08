/**
 * Sous-pages /pole-tertiaire/[slug] — verbatim de Section 4.2 du
 * CONTENUS_PAR_PAGE.md (lignes 759-905).
 */

export interface FicheRef {
  ref: string;
  label: string;
}

export interface CadreItem {
  label: string;
  threshold?: string;
}

export interface SubTertiaire {
  slug: string;
  nav: string;
  icon: string;
  meta: { title: string; description: string };
  h1: string;
  sub: string;
  cadre?: CadreItem[];
  fiches: FicheRef[];
  /** Optional pédagogique block */
  specificite?: { title: string; body: string };
  /** Optional case ref for cross-linking */
  cas?: { ref: string; label: string };
}

export const SUBS: SubTertiaire[] = [
  {
    slug: "bureaux",
    nav: "Bureaux",
    icon: "🏢",
    meta: {
      title: "Audit énergétique et CEE pour les immeubles de bureaux | Agence 3E",
      description:
        "Sièges sociaux, immeubles tertiaires multi-locataires, plateaux ouverts. Décret tertiaire, BACS, audit DDADUE — un seul interlocuteur.",
    },
    h1: "Audit énergétique et CEE pour les immeubles de bureaux.",
    sub: "Sièges sociaux, immeubles tertiaires multi-locataires, plateaux ouverts. Décret tertiaire, BACS, audit DDADUE — un seul interlocuteur pour les trois.",
    cadre: [
      { label: "Décret tertiaire", threshold: "surface ≥ 1 000 m²" },
      { label: "Décret BACS", threshold: "système thermique ≥ 290 kW" },
      { label: "DDADUE", threshold: "conso ≥ 2,75 GWh/an" },
    ],
    fiches: [
      { ref: "BAT-TH-116", label: "GTB (système de gestion technique du bâtiment)" },
      { ref: "BAT-TH-127", label: "Raccordement réseau de chaleur urbain" },
      { ref: "BAT-EN-101/102/103", label: "Isolation combles, murs, plancher" },
      { ref: "BAT-TH-104", label: "Récupérateur sur ventilation" },
      { ref: "BAT-TH-143", label: "Ventiloconvecteurs haute performance" },
    ],
    cas: { ref: "CASE-009", label: "Bureau d'entreprise tertiaire IDF" },
  },
  {
    slug: "commerces-retail",
    nav: "Commerces & Retail",
    icon: "🛍",
    meta: {
      title: "Audit énergétique et CEE pour les commerces et le retail | Agence 3E",
      description:
        "Surfaces de vente, centres commerciaux, magasins en réseau. Spécialités froid commercial, GTB, isolation. Conformité décret tertiaire dès 1 000 m².",
    },
    h1: "Audit énergétique et CEE pour les commerces et le retail.",
    sub: "Surfaces de vente, centres commerciaux, magasins en réseau. Spécialités : éclairage LED, fermetures meubles frigorifiques, GTB. Conformité décret tertiaire dès 1 000 m².",
    fiches: [
      { ref: "BAT-EQ-124", label: "Fermeture meubles frigo positifs" },
      { ref: "BAT-EQ-125", label: "Fermeture meubles frigo négatifs" },
      { ref: "BAT-EQ-117", label: "Installation frigo CO₂ subcritique/transcritique" },
      { ref: "BAT-EQ-130", label: "Condensation frigo haute efficacité" },
      { ref: "BAT-EQ-134", label: "Meuble frigo performant avec groupe intégré" },
      { ref: "BAT-TH-116", label: "GTB" },
      { ref: "BAT-EN-*", label: "Isolation enveloppe (combles, murs, plancher)" },
      { ref: "BAT-EQ-129", label: "Lanterneaux d'éclairage zénithal (entrepôts retail)" },
    ],
    specificite: {
      title: "Mission cadre multi-sites pour les enseignes",
      body: "Pour les enseignes en réseau, nous proposons une mission cadre multi-sites avec audit échantillonné représentatif (admis par DDADUE sous conditions). Notre méthodologie permet de couvrir 100 % du parc avec un audit terrain sur 15 % des sites représentatifs.",
    },
  },
  {
    slug: "hotellerie-restauration",
    nav: "Hôtellerie-Restauration",
    icon: "🍽",
    meta: {
      title: "Audit énergétique et CEE pour l'hôtellerie-restauration | Agence 3E",
      description:
        "Hôtels, restaurants, résidences hôtelières, hébergements de plein air. Eau chaude sanitaire, climatisation, récupération sur eaux grises, GTB.",
    },
    h1: "Audit énergétique et CEE pour l'hôtellerie-restauration.",
    sub: "Hôtels, restaurants, résidences hôtelières, hébergements de plein air. Spécialités : eau chaude sanitaire, climatisation, récupération sur eaux grises, GTB.",
    fiches: [
      { ref: "BAT-TH-127", label: "Raccordement réseau de chaleur" },
      { ref: "BAT-TH-154", label: "Récupération sur eaux grises (gisement clé en hôtellerie)" },
      { ref: "BAT-TH-116", label: "GTB" },
      { ref: "BAT-TH-143", label: "Ventiloconvecteurs haute performance" },
      { ref: "BAT-TH-111 / 121", label: "Chauffe-eau solaire (métropole + DOM)" },
      { ref: "BAT-TH-158", label: "PAC réversible air/air" },
      { ref: "BAT-TH-163", label: "PAC air/eau" },
    ],
    specificite: {
      title: "Audits programmés en basse saison",
      body: "Audits programmés en basse saison pour ne pas perturber l'exploitation. Mesurages compatibles avec une présence client.",
    },
    cas: { ref: "CASE-008", label: "Hôtel 4 étoiles Occitanie" },
  },
  {
    slug: "sante-medico-social",
    nav: "Santé & Médico-social",
    icon: "🏥",
    meta: {
      title: "Audit énergétique et CEE pour la santé et le médico-social | Agence 3E",
      description:
        "Hôpitaux, cliniques, EHPAD, maisons de santé. Cumul fréquent décret tertiaire + DDADUE + datacenter intégré + blanchisserie captive.",
    },
    h1: "Audit énergétique et CEE pour la santé et le médico-social.",
    sub: "Hôpitaux, cliniques, EHPAD, maisons de santé. Cumul fréquent : décret tertiaire + DDADUE + datacenter intégré + blanchisserie captive. Notre offre couvre l'ensemble.",
    fiches: [
      { ref: "BAT-TH-127", label: "Raccordement réseau de chaleur urbain" },
      { ref: "BAT-TH-116", label: "GTB" },
      { ref: "BAT-EQ-135", label: "Onduleur ASI performant" },
      { ref: "BAT-TH-104", label: "Récupération sur ventilation" },
      { ref: "BAT-TH-110", label: "Récupérateur à condensation" },
      { ref: "BAT-EN-*", label: "Isolation enveloppe" },
    ],
    specificite: {
      title: "Spécificités sectorielles",
      body: "Continuité de service : audits non intrusifs, mesurages compatibles 24/7. Datacenter intégré : renvoi vers la page datacenters pour la partie IT. Blanchisserie captive : renvoi vers la page blanchisseries industrielles. Marchés publics : maîtrise des codes commande publique (UGAP, CHEOPS, etc.).",
    },
  },
  {
    slug: "enseignement",
    nav: "Enseignement",
    icon: "🎓",
    meta: {
      title: "Audit énergétique et CEE pour l'enseignement | Agence 3E",
      description:
        "Écoles, collèges, lycées, universités, internats. Patrimoine public ou privé. Audit conforme aux obligations + accompagnement programmes ACTEE / EduRénov.",
    },
    h1: "Audit énergétique et CEE pour l'enseignement.",
    sub: "Écoles, collèges, lycées, universités, internats. Patrimoine public ou privé, gestion par collectivité ou opérateur. Audit conforme aux obligations + accompagnement programmes spéciaux.",
    fiches: [
      { ref: "BAT-TH-127", label: "Raccordement réseau de chaleur" },
      { ref: "BAT-TH-157", label: "Chaudière biomasse collective" },
      { ref: "BAT-EN-101/102/103", label: "Isolation enveloppe" },
      { ref: "BAT-TH-125", label: "VMC simple flux modulée" },
      { ref: "BAT-TH-126", label: "VMC double flux échangeur" },
      { ref: "BAT-TH-116", label: "GTB" },
      { ref: "BAT-EQ-129", label: "Lanterneaux d'éclairage zénithal" },
      { ref: "BAT-EQ-131", label: "Conduits de lumière naturelle" },
    ],
    specificite: {
      title: "Cadre selon le type de patrimoine",
      body: "Patrimoine collectivités : programmes ACTEE, EduRénov, France 2030. Patrimoine privé : décret tertiaire applicable.",
    },
  },
  {
    slug: "datacenters",
    nav: "Datacenters",
    icon: "💻",
    meta: {
      title: "Audit énergétique et CEE pour les datacenters | Agence 3E",
      description:
        "Datacenters d'entreprise, hébergeurs, colocations. Audit complet PUE, gisements free-cooling, confinement, récupération chaleur fatale.",
    },
    h1: "Audit énergétique et CEE pour les datacenters.",
    sub: "Datacenters d'entreprise, hébergeurs, colocations. Notre approche : audit complet PUE, identification des gisements free-cooling, confinement, récupération de chaleur fatale.",
    fiches: [
      { ref: "BAT-TH-153", label: "Confinement allées chaudes/froides" },
      { ref: "BAT-TH-156", label: "Free-cooling par eau de refroidissement" },
      { ref: "BAT-TH-139", label: "Récupération de chaleur sur groupe froid" },
      { ref: "BAT-EQ-135", label: "Onduleur ASI performant" },
      { ref: "BAT-TH-159", label: "Raccordement à un réseau de froid" },
      { ref: "BAT-TH-161", label: "Maintien en température groupes électrogènes" },
    ],
    specificite: {
      title: "Spécificités DDADUE 2025 + métriques cibles",
      body: "Les datacenters sont désormais soumis à des obligations spécifiques de transmission de données environnementales et de performance. Métriques cibles : PUE, WUE, ERE. Notre rapport intègre une trajectoire de réduction conforme aux meilleures pratiques sectorielles (Code of Conduct, Climate Neutral Data Centre Pact).",
    },
    cas: { ref: "CASE-007", label: "Datacenter d'entreprise IDF" },
  },
  {
    slug: "coproprietes-tertiaires",
    nav: "Copropriétés tertiaires",
    icon: "🏘",
    meta: {
      title: "Audit énergétique et CEE pour les copropriétés tertiaires | Agence 3E",
      description:
        "Immeubles de bureaux en copropriété, monopropriétés tertiaires. Coordination avec syndic, AG, conseil syndical. AMO et CEE.",
    },
    h1: "Audit énergétique et CEE pour les copropriétés tertiaires.",
    sub: "Immeubles de bureaux en copropriété, monopropriétés tertiaires. Coordination avec syndic, AG, conseil syndical. Articulation MaPrimeRénov' Copro absente (réservé au résidentiel) — optimisation 100 % CEE.",
    fiches: [
      { ref: "BAT-TH-109", label: "Optimiseur de relance chauffage collectif" },
      { ref: "BAT-SE-103", label: "Réglage organes équilibrage installation eau chaude" },
      { ref: "BAT-SE-105", label: "Abaissement température retour réseau de chaleur" },
      { ref: "BAT-TH-116", label: "GTB" },
      { ref: "BAT-SE-104", label: "Contrat de Performance Énergétique CPE Services" },
      { ref: "BAT-EN-*", label: "Isolation enveloppe" },
    ],
    specificite: {
      title: "Notre rôle d'AMO copropriété",
      body: "AMO de copropriété avec représentation auprès des partenaires techniques et financiers, préparation des votes en AG.",
    },
    cas: { ref: "CASE-010", label: "Copropriété tertiaire Lyon" },
  },
];

export const SUBS_BY_SLUG = Object.fromEntries(
  SUBS.map((s) => [s.slug, s] as const),
);
