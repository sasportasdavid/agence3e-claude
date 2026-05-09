"use client";

/**
 * CasesGrille — études de cas en grille 3 colonnes, brief §3.7.
 * REMPLACE l'ancienne CasesSection (12 cards en colonne unique).
 *
 * - Container max 1280
 * - 6 cards (3 industrie + 2 tertiaire + 1 particulier — mix recommandé brief)
 * - 4 filtres pill (Tous / Industrie / Tertiaire / Particuliers)
 * - Hover : translateY -4px + photo scale 1.03
 * - CTA secondaire « Voir les 80 études de cas » → /ressources/etudes-de-cas
 *
 * Reprend EXACTEMENT les textes et la sélection du brief §3.7 :
 *   CASE-001 IAA Laiterie · CASE-002 Plasturgie · CASE-003 Blanchisserie
 *   CASE-009 Bureaux La Défense · CASE-007 Datacenter IDF · CASE-010
 *   Boulangerie IDF (remplace CASE-013 maison individuelle car nous
 *   n'avons pas encore de cas particulier réellement chiffré).
 */

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CASES, type CaseSegment, type CaseStudy } from "@/content/cases";

/* ──────────────────────────────────────────────────────────────
 * Filtres pill (4) — Tous / Industrie / Tertiaire / Particuliers
 * ──────────────────────────────────────────────────────────── */

type FilterKey = "tous" | "industrie" | "tertiaire" | "particuliers";

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "tous", label: "Tous" },
  { key: "industrie", label: "Industrie" },
  { key: "tertiaire", label: "Tertiaire" },
  { key: "particuliers", label: "Particuliers" },
];

const SEGMENTS_OF_FILTER: Record<FilterKey, CaseSegment[]> = {
  tous: [],
  industrie: ["iaa", "industrie-autre"],
  tertiaire: [
    "tertiaire",
    "datacenter",
    "hotellerie",
    "bureau",
    "copro-tertiaire",
  ],
  particuliers: ["copro-residentielle"],
};

/* ──────────────────────────────────────────────────────────────
 * Sélection des 6 cas mis en avant en home (mix recommandé brief
 * §3.7 : 3 industrie + 2 tertiaire + 1 particulier).
 * ──────────────────────────────────────────────────────────── */

const HOMEPAGE_REFS = [
  "CASE-001", // Laiterie Bretagne (industrie / IAA)
  "CASE-002", // Plasturgie ARA (industrie)
  "CASE-003", // Blanchisserie hospitalière IDF (industrie)
  "CASE-009", // Bureau La Défense (tertiaire)
  "CASE-007", // Datacenter IDF (tertiaire)
  "CASE-011", // Copro résidentielle Marseille (particuliers)
];

function getHomepageCases(): CaseStudy[] {
  const byRef = new Map(CASES.map((c) => [c.ref, c] as const));
  return HOMEPAGE_REFS.map((r) => byRef.get(r)).filter(
    (c): c is CaseStudy => Boolean(c),
  );
}

function matchesFilter(c: CaseStudy, filter: FilterKey): boolean {
  if (filter === "tous") return true;
  const targetSegments = SEGMENTS_OF_FILTER[filter];
  return c.segments.some((s) => targetSegments.includes(s));
}

/* ──────────────────────────────────────────────────────────── */

export function CasesGrille() {
  const [active, setActive] = useState<FilterKey>("tous");
  const all = getHomepageCases();
  const visible = all.filter((c) => matchesFilter(c, active));

  return (
    <section className="py-32 lg:py-40">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="max-w-[760px]">
          <span className="eyebrow reveal">Études de cas</span>
          <h2
            className="display reveal mt-6"
            style={{
              fontSize: "clamp(28px, 3.2vw, 44px)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Des résultats chiffrés, vérifiables.
          </h2>
          <p className="text-[18px] text-[var(--color-text-2)] leading-[1.65] mt-6 reveal">
            Six exemples sur les 80+ missions menées par Agence 3E Audit
            et Agence 3E Solutions depuis 2023. Chiffres clients réels ou
            cas types sectoriels indicatifs (mention explicite).
          </p>
        </div>

        {/* Filtres pill */}
        <div className="flex flex-wrap gap-2 mt-10 reveal">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setActive(f.key)}
              aria-pressed={active === f.key}
              className={`py-2 px-5 rounded-full border text-[13px] font-medium tracking-[-0.005em] cursor-pointer transition-colors ${
                active === f.key
                  ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]"
                  : "bg-white text-[var(--color-text-2)] border-[var(--color-border)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grille 6 cards (3 cols desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {visible.map((c) => (
            <CaseCard key={c.ref} c={c} />
          ))}
          {visible.length === 0 && (
            <div className="col-span-full py-16 text-center text-[var(--color-text-3)] text-[14px]">
              Aucune étude de cas dans cette catégorie pour l&apos;instant.
            </div>
          )}
        </div>

        {/* CTA secondaire */}
        <div className="mt-16 flex justify-center reveal">
          <Link
            href="/ressources/etudes-de-cas"
            className="text-[15px] font-medium text-[var(--color-primary)] hover:underline underline-offset-2 inline-flex items-center gap-2"
          >
            Voir les 80 études de cas
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────
 * Card individuelle
 * ──────────────────────────────────────────────────────────── */

function CaseCard({ c }: { c: CaseStudy }) {
  const kpis = [
    { label: "Investis.", value: c.stats.invest },
    { label: "Prime", value: c.stats.prime },
    { label: "ROI", value: c.stats.roi ?? c.stats.gain ?? "—" },
  ];

  return (
    <Link
      href={`/ressources/etudes-de-cas/${c.slug}`}
      className="group block bg-white border border-[var(--color-border-2)] rounded-3xl overflow-hidden hover:-translate-y-1 hover:shadow-[0_24px_56px_-16px_rgba(10,37,64,0.16)] transition-all duration-300"
    >
      {/* Photo header — ratio 16/10, hover scale 1.03 interne */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-[var(--color-border-2)]">
        {c.image ? (
          <Image
            src={c.image}
            alt={c.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 420px"
            className="object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center mono text-[10px] uppercase tracking-[0.08em] text-[var(--color-text-3)]">
            Photo à venir
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-7">
        <div className="flex items-center justify-between gap-3">
          <span className="mono text-[10.5px] tracking-[0.06em] uppercase text-[var(--color-text-3)]">
            {c.tag}
          </span>
          <span className="mono text-[10px] text-[var(--color-text-3)] tracking-[0.06em]">
            {c.ref}
          </span>
        </div>
        <h4 className="text-[18px] font-semibold tracking-[-0.02em] leading-[1.25] mt-3 text-[var(--color-primary)]">
          {c.title.split("—")[0].trim()}
        </h4>
        <p className="text-[13px] text-[var(--color-text-2)] mt-2 leading-[1.5]">
          {c.activity}
        </p>

        <div className="grid grid-cols-3 gap-3 mt-5 pt-5 border-t border-[var(--color-border-2)]">
          {kpis.map((k) => (
            <div key={k.label}>
              <div className="mono text-[9.5px] uppercase tracking-[0.06em] text-[var(--color-text-3)]">
                {k.label}
              </div>
              <div
                className="it text-[15.5px] text-[var(--color-primary)] mt-1 leading-none tracking-[-0.01em]"
                style={{ fontFeatureSettings: '"tnum" 1' }}
              >
                {k.value}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-1.5 text-[13px] font-medium text-[var(--color-primary)] group-hover:gap-2.5 transition-all">
          Lire le cas complet
          <span aria-hidden>→</span>
        </div>
      </div>
    </Link>
  );
}
