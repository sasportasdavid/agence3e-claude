/**
 * MockupPlanning — mockup SaaS « Planning travaux 2026 ».
 * Spreadsheet / Gantt simplifié, utilisé en arrière-plan du
 * MockupTriple du HeroV3 (cf. brief §3.1, mockup 3).
 *
 * Pas de données réelles. Visuel uniquement.
 */

interface Row {
  ref: string;
  label: string;
  /** Position sur l'échelle 0–24 (semaines). */
  start: number;
  /** Durée en semaines. */
  span: number;
  tone: "primary" | "secondary" | "accent";
}

const ROWS: Row[] = [
  { ref: "01", label: "Cadrage NDA", start: 0, span: 1, tone: "primary" },
  { ref: "02", label: "Audit DDADUE", start: 1, span: 5, tone: "secondary" },
  { ref: "03", label: "Montage CEE", start: 6, span: 4, tone: "accent" },
  { ref: "04", label: "AMO travaux", start: 10, span: 14, tone: "secondary" },
];

const TONE_BAR: Record<Row["tone"], string> = {
  primary: "bg-[var(--color-primary)]",
  secondary: "bg-[var(--color-secondary)]",
  accent: "bg-[var(--color-accent)]",
};

export function MockupPlanning({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bg-white rounded-2xl overflow-hidden shadow-[0_24px_48px_-12px_rgba(10,37,64,0.18),0_4px_8px_rgba(10,37,64,0.04)] w-[460px] ${className}`}
    >
      {/* Title bar */}
      <div className="py-3.5 px-[18px] border-b border-[var(--color-border-2)] flex justify-between items-center bg-[#fafbfc]">
        <div className="flex gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#d8dde5]" />
          <span className="w-2 h-2 rounded-full bg-[#d8dde5]" />
          <span className="w-2 h-2 rounded-full bg-[#d8dde5]" />
        </div>
        <span className="mono text-[10.5px] text-[var(--color-text-3)]">
          PLANNING_TRAVAUX_2026.xlsx
        </span>
      </div>

      {/* Header row */}
      <div className="px-5 pt-4 pb-2.5 grid grid-cols-[40px_1fr_1.6fr] gap-3 text-[10px] mono uppercase tracking-[0.08em] text-[var(--color-text-3)]">
        <span>#</span>
        <span>Étape</span>
        <span>Sem. 0 — 24</span>
      </div>

      {/* Rows */}
      <div className="px-5 pb-5">
        {ROWS.map((r) => (
          <div
            key={r.ref}
            className="grid grid-cols-[40px_1fr_1.6fr] gap-3 items-center py-2.5 border-t border-[var(--color-border-2)]"
          >
            <span className="mono text-[11.5px] text-[var(--color-text-3)] tracking-[0.04em]">
              {r.ref}
            </span>
            <span className="text-[12.5px] font-medium text-[var(--color-primary)]">
              {r.label}
            </span>
            <div className="relative h-2.5 rounded-full bg-[var(--color-border-2)]">
              <div
                className={`absolute top-0 h-2.5 rounded-full ${TONE_BAR[r.tone]}`}
                style={{
                  left: `${(r.start / 24) * 100}%`,
                  width: `${(r.span / 24) * 100}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-5 py-3 bg-[#fafbfc] border-t border-[var(--color-border-2)] flex justify-between items-center">
        <span className="mono text-[10px] text-[var(--color-text-3)] tracking-[0.06em]">
          Mise en service · sem. 24
        </span>
        <span className="text-[11px] text-[var(--color-secondary)] font-medium">
          ✓ Prime versée à J+60
        </span>
      </div>
    </div>
  );
}
