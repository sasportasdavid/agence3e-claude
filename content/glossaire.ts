/**
 * Glossaire — verbatim CONTENUS §14 (50 entrées prioritaires).
 */

export interface GlossaryEntry {
  term: string;
  def: string;
}

export const GLOSSARY: Record<string, GlossaryEntry[]> = {
  A: [
    {
      term: "ADEME",
      def: "Agence de la transition écologique. Établissement public, opérateur de l'État sur les politiques de transition énergétique. Gère notamment la plateforme AIDER.",
    },
    {
      term: "AFNOR",
      def: "Association française de normalisation. Organisme certificateur français accrédité COFRAC.",
    },
    {
      term: "AIDER",
      def: "Plateforme de l'ADEME pour le dépôt des audits énergétiques DDADUE.",
    },
    {
      term: "AMO",
      def: "Assistant à Maîtrise d'Ouvrage. Mission d'accompagnement du maître d'ouvrage dans la conception et le pilotage d'un projet.",
    },
    {
      term: "Anah",
      def: "Agence nationale de l'habitat. Opérateur public en charge de l'amélioration de l'habitat privé, gère MaPrimeRénov'.",
    },
    {
      term: "ATEE",
      def: "Association Technique Énergie Environnement. Association professionnelle de référence sur les CEE.",
    },
  ],
  B: [
    {
      term: "BACS",
      def: "Building Automation and Control Systems. Décret imposant l'installation de GTB dans les bâtiments tertiaires.",
    },
    {
      term: "BAR",
      def: "Préfixe des fiches CEE Bâtiment Résidentiel.",
    },
    {
      term: "BAT",
      def: "Préfixe des fiches CEE Bâtiment Tertiaire.",
    },
    {
      term: "BEGES",
      def: "Bilan d'Émissions de Gaz à Effet de Serre. Obligatoire pour entreprises de plus de 500 salariés.",
    },
    {
      term: "BEPOS",
      def: "Bâtiment à Énergie Positive. Bâtiment qui produit plus d'énergie qu'il n'en consomme.",
    },
  ],
  C: [
    {
      term: "CEE",
      def: "Certificats d'Économies d'Énergie. Dispositif d'État qui matérialise et monétise les économies d'énergie.",
    },
    {
      term: "Chaudière biomasse",
      def: "Chaudière utilisant un combustible bois (granulés, plaquettes, bûches).",
    },
    {
      term: "COFRAC",
      def: "Comité français d'accréditation. Accrédite les organismes certificateurs.",
    },
    {
      term: "COP",
      def: "Coefficient de Performance d'une PAC. Rapport entre énergie thermique produite et énergie électrique consommée.",
    },
    {
      term: "CPE",
      def: "Contrat de Performance Énergétique. Engagement contractuel sur un niveau de performance.",
    },
    {
      term: "Cumac",
      def: "Contraction de cumulé et actualisé. Unité de mesure des CEE (kWh cumac).",
    },
  ],
  D: [
    {
      term: "DDADUE",
      def: "Diverses Dispositions d'Adaptation au Droit de l'Union Européenne. Loi du 30 avril 2025 transposant la directive EED.",
    },
    {
      term: "DPE",
      def: "Diagnostic de Performance Énergétique. Document obligatoire vente/location.",
    },
  ],
  E: [
    {
      term: "EED",
      def: "Energy Efficiency Directive. Directive européenne 2023/1791.",
    },
    { term: "ENR", def: "Énergies renouvelables." },
    {
      term: "ESCO",
      def: "Energy Service Company. Société de services énergétiques.",
    },
  ],
  F: [
    {
      term: "Fatale (chaleur)",
      def: "Chaleur produite par un process et non valorisée. Gisement majeur d'économies via récupération.",
    },
  ],
  G: [
    {
      term: "GTB",
      def: "Gestion Technique du Bâtiment. Système d'automatisation des installations techniques.",
    },
    { term: "GES", def: "Gaz à Effet de Serre." },
  ],
  H: [
    {
      term: "HACCP",
      def: "Hazard Analysis Critical Control Point. Méthode de gestion sanitaire en agroalimentaire.",
    },
  ],
  I: [
    { term: "IAA", def: "Industries Agroalimentaires." },
    { term: "IND", def: "Préfixe des fiches CEE Industrie." },
    {
      term: "ISO 50001",
      def: "Norme internationale de système de management de l'énergie.",
    },
  ],
  K: [{ term: "kWh cumac", def: "Cf. Cumac." }],
  L: [
    {
      term: "LNE",
      def: "Laboratoire National de Métrologie et d'Essais. Organisme certificateur français.",
    },
  ],
  M: [
    {
      term: "MaPrimeRénov'",
      def: "Aide publique à la rénovation énergétique des logements. Gérée par l'Anah.",
    },
  ],
  N: [
    {
      term: "NF EN 16247",
      def: "Norme européenne sur l'audit énergétique. 4 parties : générale (1), bâtiment (2), procédés industriels (3), transports (4).",
    },
    {
      term: "NF EN 17463",
      def: "Norme sur l'évaluation des décisions d'investissement liées à l'énergie.",
    },
  ],
  O: [
    {
      term: "OPERAT",
      def: "Plateforme de l'ADEME pour la déclaration annuelle Décret tertiaire.",
    },
    {
      term: "OPQIBI",
      def: "Organisme professionnel de qualification de l'ingénierie. Délivre les qualifications 1905, 1907, 1911 entre autres.",
    },
  ],
  P: [
    { term: "PAC", def: "Pompe à Chaleur." },
    {
      term: "PNCEE",
      def: "Pôle National des Certificats d'Économies d'Énergie. Service de l'État qui gère le dispositif CEE.",
    },
    {
      term: "POPE (loi)",
      def: "Loi de programme fixant les orientations de la politique énergétique. Origine des CEE en 2005.",
    },
    {
      term: "PUE",
      def: "Power Usage Effectiveness. Indicateur de performance énergétique des datacenters.",
    },
  ],
  R: [
    {
      term: "RGE",
      def: "Reconnu Garant de l'Environnement. Label installateurs/auditeurs.",
    },
    {
      term: "RT / RE",
      def: "Réglementation Thermique / Réglementation Environnementale (RT2012, RE2020).",
    },
  ],
  S: [
    {
      term: "SARE",
      def: "Service d'Accompagnement à la Rénovation Énergétique.",
    },
    {
      term: "SMÉ",
      def: "Système de Management de l'Énergie. Cadre ISO 50001.",
    },
  ],
  T: [
    { term: "TRA", def: "Préfixe des fiches CEE Transports." },
    {
      term: "TURPE",
      def: "Tarif d'Utilisation des Réseaux Publics d'Électricité.",
    },
  ],
  V: [
    {
      term: "Variateur",
      def: "Système de variation électronique de vitesse pour moteur électrique. Gisement CEE majeur.",
    },
  ],
  W: [
    {
      term: "WUE",
      def: "Water Usage Effectiveness. Indicateur de consommation d'eau des datacenters.",
    },
  ],
};

export const ALPHABET = Object.keys(GLOSSARY);
