"use client";

import { useState } from "react";
import Link from "next/link";
import { CASES, FILTERS, type CaseSegment } from "@/content/cases";

const TONE_BG: Record<string, string> = {
  rose: "bg-[var(--color-pastel-rose)]",
  blue: "bg-[var(--color-pastel-blue)]",
  green: "bg-[var(--color-pastel-green)]",
  violet: "bg-[var(--color-pastel-violet)]",
  orange: "bg-[var(--color-pastel-orange)]",
  yellow: "bg-[var(--color-pastel-yellow)]",
};

const TONE_BLOB: Record<string, React.CSSProperties> = {
  rose: {
    background:
      "radial-gradient(circle, #FF8FA3 0%, #FFC0A0 60%, transparent 100%)",
    top: -100,
    left: -100,
  },
  blue: {
    background:
      "radial-gradient(circle, #6F9CFE 0%, #B5C6FB 60%, transparent 100%)",
    top: -100,
    right: -100,
  },
  green: {
    background:
      "radial-gradient(circle, #6BCFA0 0%, #A8E0BC 60%, transparent 100%)",
    top: -100,
    right: -100,
  },
  violet: {
    background:
      "radial-gradient(circle, #9D7EDC 0%, #C9B5EE 60%, transparent 100%)",
    bottom: -100,
    right: -100,
  },
  orange: {
    background:
      "radial-gradient(circle, #FF8B6B 0%, #F7C8A8 60%, transparent 100%)",
    bottom: -100,
    left: -100,
  },
  yellow: {
    background:
      "radial-gradient(circle, #F5C518 0%, #F7DD8A 60%, transparent 100%)",
    top: -100,
    right: -100,
    opacity: 0.4,
  },
};

export function CasesList() {
  const [active, setActive] = useState<CaseSegment | "all">("all");

  const visible = CASES.filter(
    (c) => active === "all" || c.segments.includes(active),
  );

  return (
    <div className="container-x">
      {/* Filters */}
      <div className="flex gap-2 flex-wrap reveal">
        {FILTERS.map((f) => (
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

      <div className="grid grid-cols-3 gap-7 mt-12 max-[1100px]:grid-cols-2 max-sm:grid-cols-1">
        {visible.map((c) => (
          <Link
            key={c.slug}
            href={`/ressources/etudes-de-cas/${c.slug}`}
            className={`relative rounded-3xl p-8 overflow-hidden flex flex-col min-h-[420px] transition-transform duration-300 hover:-translate-y-1 reveal ${TONE_BG[c.tone]}`}
          >
            <div
              className="absolute w-[280px] h-[280px] rounded-full pointer-events-none z-0"
              style={{
                filter: "blur(70px)",
                opacity: 0.55,
                ...TONE_BLOB[c.tone],
              }}
            />
            <div className="relative z-[1] flex items-center justify-between">
              <span className="mono text-[11px] tracking-[0.1em] uppercase text-[var(--color-text-2)]">
                {c.tag}
              </span>
              <span className="mono text-[10.5px] text-[var(--color-text-3)] tracking-[0.06em]">
                {c.ref}
              </span>
            </div>
            <h3 className="relative z-[1] font-bold text-[20px] tracking-[-0.025em] leading-[1.25] mt-4 text-[var(--color-primary)]">
              {c.title}
            </h3>
            <div className="relative z-[1] mono text-[11px] text-[var(--color-text-3)] mt-2.5 flex gap-3 items-center flex-wrap">
              {c.fiches.slice(0, 2).map((f) => (
                <span
                  key={f}
                  className="bg-white/70 py-[3px] px-2 rounded text-[var(--color-primary)] font-medium"
                >
                  {f}
                </span>
              ))}
              <span className="text-[var(--color-text-3)]">{c.date}</span>
            </div>
            <div className="relative z-[1] grid grid-cols-3 gap-3 mt-auto pt-7 border-t border-[#0a25401a]">
              <Stat label="Investis." value={c.stats.invest} />
              <Stat label="Prime CEE" value={c.stats.prime} />
              <Stat label="ROI" value={c.stats.roi ?? c.stats.gain ?? "—"} />
            </div>
          </Link>
        ))}
      </div>
      {visible.length === 0 && (
        <div className="mt-12 py-16 text-center text-[var(--color-text-3)] text-[15px]">
          Aucun cas dans cette catégorie pour le moment.
        </div>
      )}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="mono text-[9.5px] tracking-[0.08em] text-[var(--color-text-3)] uppercase">
        {label}
      </div>
      <div
        className="it text-[18px] text-[var(--color-primary)] mt-1 leading-none"
        style={{ fontFeatureSettings: '"tnum" 1' }}
      >
        {value}
      </div>
    </div>
  );
}
