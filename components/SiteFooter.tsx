import Link from "next/link";
import { LogoContractuel } from "@/brand/components/LogoContractuel";

const COLUMNS = [
  {
    title: "Pôles",
    links: [
      { href: "/pole-industrie", label: "Industrie" },
      { href: "/pole-tertiaire", label: "Tertiaire" },
      { href: "/pole-residentiel", label: "Résidentiel" },
      { href: "/france-outre-mer", label: "Outre-mer" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/services/audit-energetique-ddadue", label: "Audit DDADUE" },
      { href: "/services/montage-dossiers-cee", label: "Montage CEE" },
      { href: "/services/courtage-prime-cee", label: "Courtage prime CEE" },
      { href: "/services/amo-travaux-efficacite-energetique", label: "AMO travaux" },
      { href: "/services/iso-50001-systeme-management-energie", label: "ISO 50001" },
      { href: "/services/decret-tertiaire-operat", label: "Décret tertiaire / BACS" },
    ],
  },
  {
    title: "Comprendre",
    links: [
      { href: "/comprendre/loi-ddadue-2025-expliquee", label: "Loi DDADUE 2025" },
      { href: "/comprendre/calendrier-11-octobre-2026", label: "Calendrier 11 oct. 2026" },
      { href: "/comprendre/6e-periode-cee-2026-2030", label: "6ᵉ période CEE" },
      { href: "/comprendre/iso-50001-vs-audit-ddadue", label: "ISO 50001 vs DDADUE" },
      {
        href: "/comprendre/independance-auditeur-nf-en-16247",
        label: "Indépendance NF EN 16247",
      },
      { href: "/ressources/glossaire", label: "Glossaire" },
    ],
  },
  {
    title: "Cabinet",
    links: [
      { href: "/notre-bureau-d-etudes", label: "Notre bureau d'études" },
      { href: "/a-propos/notre-independance", label: "Gouvernance & indépendance" },
      { href: "/partenaires-delegataires-cee", label: "Délégataires partenaires" },
      { href: "/reseau-installateurs-rge", label: "Réseau RGE" },
      { href: "/contact", label: "Contact" },
      { href: "/a-propos/recrutement", label: "Recrutement" },
    ],
  },
];

const LEGAL = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/politique-confidentialite-rgpd", label: "RGPD" },
  { href: "/cgu", label: "CGU" },
  { href: "/cgv-prestation-audit", label: "CGV Audit" },
  { href: "/cgv-mission-amo-cee", label: "CGV AMO CEE" },
  { href: "/cookies", label: "Cookies" },
];

export function SiteFooter() {
  return (
    <footer className="bg-[var(--color-primary)] text-white/70 pt-20 pb-8 mt-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-[linear-gradient(90deg,transparent,var(--color-secondary)_30%,var(--color-accent)_70%,transparent)]" />
      {/* v3 — container max 1440 (cohérent avec header et hero), brief §5.1 */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-12 mb-16 max-[1100px]:grid-cols-2 max-md:grid-cols-1">
          <div>
            {/* v3 (brand v1.0) — LOGO_CONTRACTUEL négatif en footer
                (matrice Section 2 : densité d'info, neutralité visuelle). */}
            <LogoContractuel size={120} negative ariaLabel="Agence 3E" />
            <p className="text-[13px] text-white/60 leading-[1.6] mt-4 max-w-[280px]">
              Cabinet de conseil en performance énergétique. Audit DDADUE
              conforme NF EN 16247, valorisation CEE compétitive, AMO travaux.
              France métropolitaine et outre-mer.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h5 className="text-xs font-semibold text-white uppercase tracking-[0.08em] mb-3.5">
                {col.title}
              </h5>
              <ul className="list-none p-0 m-0">
                {col.links.map((link) => (
                  <li key={link.href} className="mb-2">
                    <Link
                      href={link.href}
                      className="text-[13px] text-white/70 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* v2 — mention juridique reformulée (cf. MENU_ET_HOME_V2.md mod 7) :
            ton factuel, transparence juridique conservée, sans tonalité
            défensive. Texte verbatim du livrable. */}
        <div className="bg-white/[0.04] py-5 px-6 rounded-lg text-xs leading-[1.7] mb-8 text-white/60 italic">
          <strong className="text-white/[0.85] not-italic">
            Agence 3E — Agence Européenne pour l&apos;Économie d&apos;Énergie.
          </strong>{" "}
          Société privée. Aucun lien institutionnel avec une agence publique,
          l&apos;ADEME, l&apos;AEE (Agence Européenne pour l&apos;Environnement)
          ou tout organisme communautaire. Notre activité d&apos;audit
          énergétique et notre activité de courtage CEE sont conduites par
          deux entités juridiquement distinctes : Agence 3E Audit (audits
          NF EN 16247) et Agence 3E Solutions (montage et courtage CEE, mise
          en relation installateurs). Cette séparation respecte
          l&apos;indépendance professionnelle requise par la norme.
        </div>

        <div className="border-t border-white/10 pt-6 flex justify-between flex-wrap gap-4 text-xs text-white/50">
          <div>© 2026 Agence 3E. Tous droits réservés.</div>
          <div className="flex gap-6 flex-wrap">
            {LEGAL.map((l) => (
              <Link key={l.href} href={l.href} className="text-white/60 hover:text-white">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
