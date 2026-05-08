/**
 * Page /contact — verbatim de Section 11 du CONTENUS_PAR_PAGE.md.
 */

export const contactPage = {
  meta: {
    title: "Contact Agence 3E — Cabinet d'audit énergétique et CEE",
    description:
      "Contactez Agence 3E pour un audit énergétique DDADUE, un montage CEE, une mission AMO. Demande de rappel sous 24h.",
  },
  hero: {
    h1: "Parlons de votre projet.",
    sub: "Trois portes d'entrée selon votre profil. Réponse sous 24h ouvrées.",
  },
  coords: {
    phone: "01 23 45 67 89",
    email: "contact@agence3e.fr",
    horaires: "Lundi au vendredi, 9h-18h",
  },
  cards: [
    {
      eyebrow: "Profil 01",
      tone: "green" as const,
      title: { lead: "Vous êtes", it: "industriel." },
      desc: "Audit DDADUE, gisements CEE industriels, ISO 50001.",
      cta: "Pré-qualifier mon site industriel",
      href: "/pole-industrie",
    },
    {
      eyebrow: "Profil 02",
      tone: "blue" as const,
      title: { lead: "Vous gérez un", it: "patrimoine tertiaire." },
      desc: "Décret tertiaire, OPERAT, BACS, audit DDADUE tertiaire.",
      cta: "Pré-qualifier mon patrimoine",
      href: "/pole-tertiaire",
    },
    {
      eyebrow: "Profil 03",
      tone: "rose" as const,
      title: { lead: "Vous êtes particulier", it: "ou syndic." },
      desc: "Audit énergétique, MaPrimeRénov', CEE résidentiel.",
      cta: "Demander un devis",
      href: "/pole-residentiel",
    },
  ],
  form: {
    eyebrow: "Formulaire générique",
    title: { lead: "Pas sûr du bon profil ?", it: "Écrivez-nous." },
    body: "Nous redirigeons votre demande vers le bon interlocuteur sous 24 h ouvrées. Aucun engagement.",
  },
};
