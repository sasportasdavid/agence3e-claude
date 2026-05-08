"use client";

import { useState } from "react";
import { catalogue, type CatalogCategory } from "@/content/poleIndustrie";

export function PICatalogue() {
  const [active, setActive] = useState<CatalogCategory>("all");

  const visible = catalogue.rows.filter((row) => {
    if (active === "all") return true;
    if (active === "phare") return row.status === "phare";
    return row.cat === active;
  });

  return (
    <section className="py-[var(--spacing-block-sm)]" id="catalogue">
      <div className="container-x">
        <span className="eyebrow reveal">{catalogue.eyebrow}</span>
        <h2 className="section-title reveal">
          {catalogue.title.lead}
          <br />
          <span className="it">{catalogue.title.it}</span>
        </h2>

        <div className="flex gap-2 mt-10 flex-wrap reveal">
          {catalogue.filters.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setActive(f.key)}
              className={`py-2 px-4 rounded-full border text-[13px] mono cursor-pointer transition-colors ${
                active === f.key
                  ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]"
                  : "bg-white text-[var(--color-text-2)] border-[var(--color-border)] hover:border-[var(--color-primary)]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-10 bg-white border border-[var(--color-border)] rounded-2xl overflow-hidden reveal">
          <div className="grid grid-cols-[120px_1fr_140px_100px_100px] py-4 px-6 bg-[#fafbfc] border-b border-[var(--color-border)] mono text-[10.5px] tracking-[0.08em] text-[var(--color-text-3)] uppercase max-[1100px]:grid-cols-[90px_1fr_80px]">
            <span>Référence</span>
            <span>Opération</span>
            <span className="max-[1100px]:hidden">Secteur</span>
            <span className="max-[1100px]:hidden">Prime moy.</span>
            <span>Statut</span>
          </div>
          {visible.map((row) => (
            <div
              key={row.ref}
              className={`grid grid-cols-[120px_1fr_140px_100px_100px] py-4 px-6 border-b border-[var(--color-border-2)] last:border-b-0 items-center text-sm transition-colors hover:bg-[#fafbfc] max-[1100px]:grid-cols-[90px_1fr_80px] ${
                row.status === "phare"
                  ? "bg-[linear-gradient(90deg,var(--color-secondary-10)_0%,transparent_100%)]"
                  : ""
              }`}
            >
              <span className="mono text-xs text-[var(--color-primary)] font-medium">
                {row.ref}
              </span>
              <span className="text-[var(--color-primary)] font-medium">
                {row.title}
              </span>
              <span className="text-[13px] text-[var(--color-text-2)] max-[1100px]:hidden">
                {row.sector}
              </span>
              <span
                className="it text-[var(--color-primary)] text-base max-[1100px]:hidden"
                style={{ fontFeatureSettings: '"tnum" 1' }}
              >
                {row.prime}
              </span>
              <span
                className={`inline-flex py-[3px] px-2.5 rounded mono text-[10px] tracking-[0.06em] font-medium w-fit ${
                  row.status === "phare"
                    ? "bg-[var(--color-secondary)] text-white"
                    : "bg-transparent text-[var(--color-text-3)] border border-[var(--color-border)]"
                }`}
              >
                {row.status === "phare" ? "Phare" : "Std"}
              </span>
            </div>
          ))}
          {visible.length === 0 && (
            <div className="py-10 px-6 text-center text-[var(--color-text-3)] text-sm">
              Aucune fiche dans cette catégorie.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
