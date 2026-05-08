/**
 * CaseMini — small "synthèse" mockup embedded in the wide case-card
 * variants on the home (CASE-001, CASE-002).
 */
export function CaseMini({
  rows,
  bar,
}: {
  rows: { label: string; value: string }[];
  bar: number; // 0–100
}) {
  return (
    <div className="bg-white/[0.85] backdrop-blur-md rounded-xl py-3.5 px-4 border border-white/50">
      <div className="mono text-[9px] tracking-[0.1em] uppercase text-[var(--color-text-3)]">
        Synthèse — couverture CEE
      </div>
      {rows.map((r) => (
        <div
          key={r.label}
          className="flex justify-between py-1.5 border-b border-dashed border-[#0a25401a] last:border-b-0 text-[12px] gap-3"
        >
          <span className="text-[var(--color-text-2)]">{r.label}</span>
          <span
            className="it text-[var(--color-primary)] whitespace-nowrap shrink-0"
            style={{ fontFeatureSettings: '"tnum" 1' }}
          >
            {r.value}
          </span>
        </div>
      ))}
      <div className="h-1.5 bg-[#0a25400f] rounded-full mt-2.5 overflow-hidden">
        <span
          className="block h-full rounded-full bg-[linear-gradient(90deg,var(--color-secondary),var(--color-accent))]"
          style={{ width: `${bar}%` }}
        />
      </div>
    </div>
  );
}
