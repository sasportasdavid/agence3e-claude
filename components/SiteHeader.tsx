"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/* ============================================================
   SiteHeader v2 — 6 entrées de premier niveau
   - Industrie, Tertiaire, Particuliers, Ressources : mega-menus
   - Services, Contact : liens directs
   - ≤ 1024px : burger menu fullscreen avec accordéons
   ============================================================ */

interface MenuColumn {
  title: string;
  items: { href: string; label: string }[];
}

interface MegaMenu {
  /** displayed header label */
  columns: MenuColumn[];
  /** optional right-zone cards (Ressources only) */
  rightCards?: { href: string; tag: string; title: string }[];
  /** CTA at the bottom */
  cta: { href: string; label: string };
}

const INDUSTRIE: MegaMenu = {
  columns: [
    {
      title: "Vos secteurs",
      items: [
        { href: "/pole-industrie/agroalimentaire-process-froid", label: "Agroalimentaire & process froid" },
        { href: "/pole-industrie/plasturgie", label: "Plasturgie" },
        { href: "/pole-industrie/blanchisseries-industrielles", label: "Blanchisseries industrielles" },
        { href: "/pole-industrie/metallurgie-fonderie", label: "Métallurgie & fonderie" },
        { href: "/pole-industrie/chimie-pharmacie-cosmetique", label: "Chimie, pharmacie & cosmétique" },
        { href: "/pole-industrie/imprimerie", label: "Imprimerie & industries graphiques" },
        { href: "/pole-industrie/bois-papier-carton", label: "Bois, papier & carton" },
        { href: "/pole-industrie/verre-ceramique", label: "Verre & céramique" },
        { href: "/contact?secteur=autre", label: "→ Mon secteur n'y est pas" },
      ],
    },
    {
      title: "Conformité réglementaire",
      items: [
        { href: "/services/audit-energetique-ddadue", label: "Audit énergétique DDADUE" },
        { href: "/services/decret-bacs", label: "Décret BACS industriel" },
        { href: "/services/iso-50001-systeme-management-energie", label: "Certification ISO 50001" },
        { href: "/services/audit-volontaire-pre-audit", label: "Audit volontaire / pré-audit" },
      ],
    },
    {
      title: "Financement & accompagnement",
      items: [
        { href: "/services/montage-dossiers-cee", label: "Montage dossiers CEE" },
        { href: "/services/courtage-prime-cee", label: "Courtage de la prime CEE" },
        { href: "/comprendre/fiches-operations-standardisees", label: "Catalogue 130 fiches CEE industrie" },
        { href: "/services#pacte-industrie", label: "Pacte Industrie & subventions" },
        { href: "/services/amo-travaux-efficacite-energetique", label: "AMO travaux" },
      ],
    },
  ],
  cta: { href: "/contact?profil=industrie", label: "Pré-qualifier mon site industriel" },
};

const TERTIAIRE: MegaMenu = {
  columns: [
    {
      title: "Vos types de bâtiment",
      items: [
        { href: "/pole-tertiaire/bureaux", label: "Bureaux & sièges sociaux" },
        { href: "/pole-tertiaire/commerces-retail", label: "Commerces & retail" },
        { href: "/pole-tertiaire/hotellerie-restauration", label: "Hôtellerie & restauration" },
        { href: "/pole-tertiaire/sante-medico-social", label: "Établissements de santé" },
        { href: "/pole-tertiaire/enseignement", label: "Établissements d'enseignement" },
        { href: "/pole-tertiaire#sport-loisirs", label: "Établissements sportifs & loisirs" },
        { href: "/pole-tertiaire/datacenters", label: "Datacenters" },
        { href: "/pole-tertiaire#logement-social", label: "Logement social" },
      ],
    },
    {
      title: "Conformité réglementaire",
      items: [
        { href: "/services/decret-tertiaire-operat", label: "Décret tertiaire (DEET)" },
        { href: "/services/decret-bacs", label: "Décret BACS" },
        { href: "/services/audit-energetique-ddadue", label: "Audit énergétique réglementaire" },
        { href: "/services/decret-tertiaire-operat#operat", label: "Plateforme OPERAT" },
      ],
    },
    {
      title: "Financement & accompagnement",
      items: [
        { href: "/services/montage-dossiers-cee", label: "Montage dossiers CEE" },
        { href: "/comprendre/fiches-operations-standardisees", label: "Catalogue fiches CEE tertiaire" },
        { href: "/services/amo-travaux-efficacite-energetique", label: "AMO travaux" },
        { href: "/services#sdie", label: "Schéma Directeur Immobilier Énergétique (SDIE)" },
      ],
    },
  ],
  cta: { href: "/contact?profil=tertiaire", label: "Évaluer ma trajectoire DEET" },
};

const PARTICULIERS: MegaMenu = {
  columns: [
    {
      title: "Maisons & appartements",
      items: [
        { href: "/pole-residentiel/maisons-individuelles#combles", label: "Isolation des combles" },
        { href: "/pole-residentiel/maisons-individuelles#murs", label: "Isolation des murs" },
        { href: "/pole-residentiel/maisons-individuelles#planchers", label: "Isolation des planchers bas" },
        { href: "/pole-residentiel/maisons-individuelles#pac", label: "Pompe à chaleur" },
        { href: "/pole-residentiel/maisons-individuelles#biomasse", label: "Chaudière biomasse" },
        { href: "/pole-residentiel/maisons-individuelles#solaire", label: "Système solaire combiné" },
        { href: "/pole-residentiel/maisons-individuelles#borne-recharge", label: "Borne de recharge" },
      ],
    },
    {
      title: "Copropriétés",
      items: [
        { href: "/pole-residentiel/coproprietes#dpe", label: "Diagnostic Performance Énergétique (DPE)" },
        { href: "/pole-residentiel/coproprietes#ppt", label: "Plan Pluriannuel de Travaux (PPT)" },
        { href: "/pole-residentiel/coproprietes#audit", label: "Audit énergétique en copropriété" },
        { href: "/pole-residentiel/coproprietes#renovation-globale", label: "Rénovation globale" },
        { href: "/pole-residentiel/coproprietes#sortie-passoire", label: "Sortie de passoire thermique" },
      ],
    },
    {
      title: "Aides & financement",
      items: [
        { href: "/pole-residentiel#maprimerenov", label: "MaPrimeRénov'" },
        { href: "/pole-residentiel#prime-cee", label: "Prime CEE" },
        { href: "/pole-residentiel#eco-ptz", label: "Éco-PTZ" },
        { href: "/pole-residentiel#tva-reduite", label: "TVA réduite à 5,5 %" },
        { href: "/pole-residentiel#aides-locales", label: "Aides locales" },
        { href: "/pole-residentiel#cumul-aides", label: "Cumul des aides" },
      ],
    },
  ],
  cta: { href: "/simulateur-cee?segment=residentiel", label: "Calculer mes aides" },
};

const RESSOURCES: MegaMenu = {
  columns: [
    {
      title: "Comprendre",
      items: [
        { href: "/comprendre/qu-est-ce-qu-un-cee", label: "Le dispositif des CEE expliqué" },
        { href: "/comprendre/loi-ddadue-2025-expliquee", label: "La loi DDADUE et l'audit obligatoire" },
        { href: "/services/decret-tertiaire-operat", label: "Le décret tertiaire en pratique" },
        { href: "/services/decret-bacs", label: "Le décret BACS" },
        { href: "/comprendre/iso-50001-vs-audit-ddadue", label: "ISO 50001 vs audit DDADUE" },
        { href: "/comprendre/independance-auditeur-nf-en-16247", label: "L'indépendance auditeur (NF EN 16247)" },
        { href: "/comprendre/calendrier-11-octobre-2026", label: "Calendrier réglementaire 2026" },
      ],
    },
    {
      title: "Études de cas",
      items: [
        { href: "/ressources/etudes-de-cas", label: "Toutes les études de cas" },
        { href: "/ressources/etudes-de-cas?segment=industrie", label: "Cas Industrie" },
        { href: "/ressources/etudes-de-cas?segment=tertiaire", label: "Cas Tertiaire" },
        { href: "/ressources/etudes-de-cas?segment=residentiel", label: "Cas Résidentiel" },
      ],
    },
  ],
  rightCards: [
    {
      href: "/ressources/blog",
      tag: "Article",
      title: "DDADUE 2025 : ce qui change pour les industriels.",
    },
    {
      href: "/ressources/guides",
      tag: "Guide PDF · 24 pages",
      title: "DDADUE 2025 — qui, quoi, quand.",
    },
    {
      href: "/ressources/glossaire",
      tag: "Glossaire",
      title: "ADEME, AIDER, cumac, OPQIBI… 50 entrées.",
    },
  ],
  cta: { href: "/ressources/blog", label: "Parcourir toutes les ressources" },
};

interface Entry {
  key: string;
  label: string;
  menu?: MegaMenu;
  href?: string;
}

const ENTRIES: Entry[] = [
  { key: "industrie", label: "Industrie", menu: INDUSTRIE },
  { key: "tertiaire", label: "Tertiaire", menu: TERTIAIRE },
  { key: "particuliers", label: "Particuliers", menu: PARTICULIERS },
  { key: "services", label: "Services", href: "/services" },
  { key: "ressources", label: "Ressources", menu: RESSOURCES },
  { key: "contact", label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  /* lock body scroll when mobile drawer open */
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="bg-white/[0.92] backdrop-blur-md border-b border-[var(--color-border-2)] sticky top-0 z-50">
      <div className="flex justify-between items-center py-[14px] px-8 max-w-[1440px] mx-auto gap-6 max-lg:py-3 max-lg:px-5">
        <Link
          href="/"
          className="flex flex-col leading-none flex-shrink-0"
          onClick={() => setMobileOpen(false)}
        >
          <span className="text-[20px] font-bold text-[var(--color-primary)] tracking-[-0.025em]">
            Agence 3E
          </span>
          <span className="text-[9.5px] font-medium text-[var(--color-text-3)] tracking-[0.07em] uppercase mt-1 max-md:hidden">
            Agence Européenne pour l&apos;Économie d&apos;Énergie
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="flex items-center gap-0.5 max-lg:hidden">
          {ENTRIES.map((entry) => (
            <DesktopEntry key={entry.key} entry={entry} />
          ))}
        </nav>

        {/* Right side */}
        <div className="flex gap-3 items-center">
          <a
            href="tel:0123456789"
            className="flex flex-col leading-tight text-right max-xl:hidden"
          >
            <span className="text-[10.5px] text-[var(--color-text-3)]">
              Demander un rappel
            </span>
            <span className="text-[14.5px] font-semibold text-[var(--color-primary)] mono">
              01 23 45 67 89
            </span>
          </a>
          <Link
            href="/contact"
            className="btn btn-primary max-lg:hidden"
            style={{ padding: "10px 16px", fontSize: 13 }}
          >
            Pré-qualification
          </Link>

          {/* Mobile burger */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
            className="lg:hidden flex flex-col gap-1.5 items-center justify-center w-10 h-10 rounded-lg border border-[var(--color-border)] bg-white"
          >
            <span
              className={`block w-5 h-[2px] bg-[var(--color-primary)] transition-transform duration-200 ${
                mobileOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block w-5 h-[2px] bg-[var(--color-primary)] transition-opacity duration-200 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-[2px] bg-[var(--color-primary)] transition-transform duration-200 ${
                mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[59px] bg-white overflow-y-auto z-40">
          <nav className="flex flex-col px-5 py-6 gap-1">
            {ENTRIES.map((entry) => {
              if (entry.href) {
                return (
                  <Link
                    key={entry.key}
                    href={entry.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-4 px-4 text-[16px] font-semibold text-[var(--color-primary)] border-b border-[var(--color-border-2)]"
                  >
                    {entry.label}
                  </Link>
                );
              }
              const isOpen = openAccordion === entry.key;
              return (
                <div key={entry.key} className="border-b border-[var(--color-border-2)]">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenAccordion(isOpen ? null : entry.key)
                    }
                    aria-expanded={isOpen}
                    className="w-full py-4 px-4 text-left text-[16px] font-semibold text-[var(--color-primary)] flex justify-between items-center"
                  >
                    {entry.label}
                    <span
                      className={`text-[20px] text-[var(--color-text-3)] transition-transform duration-200 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {isOpen && entry.menu && (
                    <MobileMenuPanel
                      menu={entry.menu}
                      onLinkClick={() => setMobileOpen(false)}
                    />
                  )}
                </div>
              );
            })}

            <div className="mt-6 flex flex-col gap-3 px-1">
              <a
                href="tel:0123456789"
                className="text-center py-3 px-5 rounded-full border border-[var(--color-border)] text-[15px] font-medium text-[var(--color-primary)]"
              >
                ☎ 01 23 45 67 89
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn btn-primary text-center justify-center"
              >
                Pré-qualification
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ===================== Desktop entry ===================== */

function DesktopEntry({ entry }: { entry: Entry }) {
  if (entry.href) {
    return (
      <Link
        href={entry.href}
        className="px-3 py-2.5 text-[14px] font-medium text-[var(--color-text)] rounded-md tracking-[-0.005em] hover:text-[var(--color-primary)]"
      >
        {entry.label}
      </Link>
    );
  }

  const menu = entry.menu!;
  const wide = !!menu.rightCards;

  return (
    <div className="relative group">
      <button
        type="button"
        className="px-3 py-2.5 text-[14px] font-medium text-[var(--color-text)] rounded-md inline-flex items-center gap-1 tracking-[-0.005em] group-hover:text-[var(--color-primary)]"
      >
        {entry.label}
        <span className="text-[10px] text-[var(--color-text-3)] transition-transform group-hover:rotate-180">
          ▾
        </span>
      </button>

      {/* invisible bridge to avoid flicker */}
      <div className="absolute left-0 right-0 top-full h-2.5 hidden group-hover:block" />

      <div
        className={`absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 bg-white border border-[var(--color-border)] rounded-2xl shadow-[0_24px_48px_rgba(10,37,64,0.10)] p-7 hidden group-hover:block z-[60] ${
          wide ? "min-w-[920px]" : "min-w-[760px]"
        }`}
      >
        <div
          className={`grid gap-7 ${
            wide
              ? "grid-cols-[1fr_1fr_1.2fr]"
              : "grid-cols-3"
          }`}
        >
          {menu.columns.map((col) => (
            <div key={col.title}>
              <h5 className="mono text-[10.5px] uppercase tracking-[0.08em] text-[var(--color-text-3)] mb-3 font-semibold">
                {col.title}
              </h5>
              <ul className="list-none m-0 p-0 flex flex-col gap-0.5">
                {col.items.map((it) => (
                  <li key={it.href}>
                    <Link
                      href={it.href}
                      className="text-[13.5px] text-[var(--color-text)] py-1.5 px-2 rounded-md block hover:bg-[#f6f8fb] hover:text-[var(--color-primary)] transition-colors"
                    >
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Right zone (Ressources) */}
          {menu.rightCards && (
            <div className="flex flex-col gap-3">
              {menu.rightCards.map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="block bg-[var(--color-pastel-blue)] rounded-xl p-4 hover:-translate-y-0.5 transition-transform"
                >
                  <span className="mono text-[10px] tracking-[0.08em] uppercase text-[var(--color-text-3)]">
                    {card.tag}
                  </span>
                  <p className="text-[13.5px] font-semibold text-[var(--color-primary)] mt-1.5 leading-[1.35] tracking-[-0.01em]">
                    {card.title}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* CTA bottom */}
        <div className="mt-6 pt-5 border-t border-[var(--color-border-2)] flex justify-between items-center">
          <span className="mono text-[10.5px] tracking-[0.08em] uppercase text-[var(--color-text-3)]">
            Démarrer
          </span>
          <Link
            href={menu.cta.href}
            className="text-[13.5px] font-semibold text-[var(--color-secondary)] inline-flex items-center gap-1.5 hover:gap-2 transition-all"
          >
            {menu.cta.label} →
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ===================== Mobile accordion panel ===================== */

function MobileMenuPanel({
  menu,
  onLinkClick,
}: {
  menu: MegaMenu;
  onLinkClick: () => void;
}) {
  return (
    <div className="bg-[#fafbfc] py-4 px-4">
      <div className="flex flex-col gap-5">
        {menu.columns.map((col) => (
          <div key={col.title}>
            <h6 className="mono text-[10px] uppercase tracking-[0.08em] text-[var(--color-text-3)] mb-2 font-semibold">
              {col.title}
            </h6>
            <ul className="list-none m-0 p-0 flex flex-col">
              {col.items.map((it) => (
                <li key={it.href}>
                  <Link
                    href={it.href}
                    onClick={onLinkClick}
                    className="text-[14.5px] text-[var(--color-primary)] py-2 px-1 block"
                  >
                    {it.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Link
        href={menu.cta.href}
        onClick={onLinkClick}
        className="block mt-4 mb-1 mono text-[12px] font-semibold text-[var(--color-secondary)]"
      >
        {menu.cta.label} →
      </Link>
    </div>
  );
}
