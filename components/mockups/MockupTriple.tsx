/**
 * MockupTriple — composition de 3 mockups SaaS empilés avec overlap,
 * utilisé en colonne 2 du HeroV3 (cf. brief §3.1).
 *
 *   Mockup 1 (premier plan, le plus visible)  : Rapport audit PDF
 *   Mockup 2 (plan intermédiaire)             : Dashboard CEE
 *   Mockup 3 (arrière-plan)                   : Planning AMO (Gantt)
 *
 * Chacun ~460×320 px, décalés en X et Y, avec rotations subtiles.
 * Animation : reveal cascadé (delays 0 / 80 / 160 ms) géré par les
 * classes `.reveal` côté CSS global (cf. components/Reveal.tsx).
 *
 * Sur mobile (< lg, 1024 px), seul Mockup 1 est affiché ; les 2 autres
 * sont masqués pour éviter l'encombrement (cf. brief §3.1 « Mobile »).
 */

import { MockupPlanning } from "./MockupPlanning";

export function MockupTriple() {
  return (
    <div className="relative w-full h-[560px] max-lg:h-[420px] flex items-center justify-center">
      {/* Mockup 3 — arrière-plan, Planning AMO (Gantt) */}
      <div
        className="absolute reveal max-lg:hidden"
        style={{
          top: "8%",
          right: "0%",
          transform: "rotate(3deg) translate(40px, 40px)",
          zIndex: 1,
          transitionDelay: "160ms",
        }}
      >
        <MockupPlanning className="w-[440px] opacity-95" />
      </div>

      {/* Mockup 2 — plan intermédiaire, Dashboard CEE */}
      <div
        className="absolute reveal max-lg:hidden"
        style={{
          top: "18%",
          left: "8%",
          transform: "rotate(1deg) translate(0, 0)",
          zIndex: 2,
          transitionDelay: "80ms",
        }}
      >
        <MockupDashboardCEE />
      </div>

      {/* Mockup 1 — premier plan, Rapport audit PDF */}
      <div
        className="absolute reveal"
        style={{
          bottom: "10%",
          right: "12%",
          transform: "rotate(-2deg)",
          zIndex: 3,
        }}
      >
        <MockupRapportAudit />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
 * Mockup 1 — Rapport audit PDF (premier plan)
 * Reprend le visuel d'un PDF technique, chap. 7 / page 24.
 * ───────────────────────────────────────────────────────────── */

function MockupRapportAudit() {
  const gisements = [
    { ref: "IND-UT-117", label: "Récup. chaleur groupes froids", roi: "1,8 ans" },
    { ref: "IND-UT-103", label: "Variateurs moteurs > 11 kW", roi: "2,4 ans" },
    { ref: "IND-UT-134", label: "Calorifugeage points sing.", roi: "0,9 an" },
    { ref: "IND-UT-137", label: "PAC haute température", roi: "3,1 ans" },
  ];

  return (
    <div className="bg-white rounded-2xl overflow-hidden w-[440px] shadow-[0_28px_56px_-14px_rgba(10,37,64,0.22),0_6px_12px_rgba(10,37,64,0.06)]">
      <div className="py-3.5 px-[18px] border-b border-[var(--color-border-2)] flex justify-between items-center bg-[#fafbfc]">
        <div className="flex gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#d8dde5]" />
          <span className="w-2 h-2 rounded-full bg-[#d8dde5]" />
          <span className="w-2 h-2 rounded-full bg-[#d8dde5]" />
        </div>
        <span className="mono text-[10.5px] text-[var(--color-text-3)]">
          RAPPORT_AUDIT_DDADUE_v3.pdf
        </span>
      </div>
      <div className="px-6 pt-5 pb-6">
        <div className="mono text-[10px] tracking-[0.08em] text-[var(--color-text-3)] uppercase">
          Chap. 7 — Gisements priorisés ROI · page 24
        </div>
        <h4 className="text-[16px] font-semibold text-[var(--color-primary)] mt-2 tracking-[-0.015em] leading-tight">
          Site IAA Bretagne · 4,2 GWh/an
        </h4>
        <div className="mt-4 space-y-2">
          {gisements.map((g, i) => (
            <div
              key={g.ref}
              className="flex items-center gap-3 py-2 px-2.5 rounded-lg bg-[#fafbfc] border border-[var(--color-border-2)]"
            >
              <span className="mono text-[8.5px] text-[var(--color-text-3)] font-medium w-5">
                0{i + 1}
              </span>
              <span className="mono text-[9.5px] text-[var(--color-primary)] bg-[var(--color-secondary-10)] py-0.5 px-1.5 rounded font-medium">
                {g.ref}
              </span>
              <span className="text-[11px] text-[var(--color-primary)] flex-1 truncate">
                {g.label}
              </span>
              <span className="it text-[12.5px] text-[var(--color-secondary)] tracking-[-0.01em]">
                {g.roi}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t border-[var(--color-border-2)] flex justify-between items-center">
          <span className="mono text-[10px] text-[var(--color-text-3)] tracking-[0.06em] uppercase">
            Plan d&apos;action 4 ans
          </span>
          <span className="it text-[16px] text-[var(--color-primary)] tracking-[-0.01em]">
            ROI maîtrisé
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
 * Mockup 2 — Dashboard CEE (plan intermédiaire)
 * Reprend l'app SaaS « app.agence3e.fr/dossiers/CEE-2026-0142 ».
 * ───────────────────────────────────────────────────────────── */

function MockupDashboardCEE() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden w-[420px] shadow-[0_24px_48px_-12px_rgba(10,37,64,0.18),0_4px_8px_rgba(10,37,64,0.04)]">
      <div className="py-3.5 px-[18px] border-b border-[var(--color-border-2)] flex justify-between items-center bg-[#fafbfc]">
        <div className="flex gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#d8dde5]" />
          <span className="w-2 h-2 rounded-full bg-[#d8dde5]" />
          <span className="w-2 h-2 rounded-full bg-[#d8dde5]" />
        </div>
        <span className="mono text-[10.5px] text-[var(--color-text-3)]">
          app.agence3e.fr/dossiers/CEE-2026-0142
        </span>
      </div>
      <div className="px-6 py-5">
        <div className="flex items-center gap-2">
          <span className="ddadue-live-dot w-2 h-2 rounded-full bg-[var(--color-secondary)]" />
          <span className="mono text-[10px] tracking-[0.08em] text-[var(--color-text-3)] uppercase">
            Dossier en cours · délégataire #3
          </span>
        </div>
        <h4 className="text-[15px] font-semibold text-[var(--color-primary)] mt-2.5 tracking-[-0.015em]">
          CEE-2026-0142 · Site IAA
        </h4>

        <div className="mt-4 grid grid-cols-3 gap-2.5">
          {[
            { l: "Cumac", v: "12,4 GWh" },
            { l: "Délégataires", v: "5 / 5" },
            { l: "Statut", v: "Validé" },
          ].map((s) => (
            <div
              key={s.l}
              className="bg-[#fafbfc] border border-[var(--color-border-2)] rounded-lg p-2.5"
            >
              <div className="mono text-[8.5px] uppercase tracking-[0.06em] text-[var(--color-text-3)]">
                {s.l}
              </div>
              <div className="it text-[15px] text-[var(--color-primary)] mt-1 tracking-[-0.015em] leading-none">
                {s.v}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 space-y-1.5">
          {[
            { l: "Audit livré", done: true },
            { l: "Dossier déposé PNCEE", done: true },
            { l: "Validation délégataire", done: true },
            { l: "Versement final", done: false },
          ].map((j) => (
            <div key={j.l} className="flex items-center gap-2 text-[11px]">
              <span
                className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[9px] font-bold ${
                  j.done
                    ? "bg-[var(--color-secondary)] text-white"
                    : "bg-[var(--color-border)] text-[var(--color-text-3)]"
                }`}
              >
                {j.done ? "✓" : "·"}
              </span>
              <span
                className={
                  j.done
                    ? "text-[var(--color-primary)]"
                    : "text-[var(--color-text-3)]"
                }
              >
                {j.l}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
