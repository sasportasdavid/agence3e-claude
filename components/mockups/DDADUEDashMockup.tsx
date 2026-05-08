/**
 * DDADUEDashMockup — the J–522 dashboard floater used in the Pôle Industrie
 * hero (Maquette 3 v2). Live red dot, big serif J–522, breakdown grid.
 */
export function DDADUEDashMockup() {
  return (
    <div className="absolute bottom-[60px] right-[8%] w-[380px] bg-white rounded-2xl overflow-hidden z-[3] shadow-[0_24px_48px_-12px_rgba(10,37,64,0.18),0_4px_8px_rgba(10,37,64,0.04)] max-[1100px]:right-0 max-[1100px]:w-[320px]">
      <div className="py-3.5 px-[18px] border-b border-[var(--color-border-2)] flex justify-between items-center bg-[#fafbfc]">
        <div className="flex gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#d8dde5]" />
          <span className="w-2 h-2 rounded-full bg-[#d8dde5]" />
          <span className="w-2 h-2 rounded-full bg-[#d8dde5]" />
        </div>
        <span className="mono text-[10.5px] text-[var(--color-text-3)]">
          DDADUE_J-522.dash
        </span>
      </div>
      <div className="px-6 py-[22px]">
        <div className="flex gap-2 items-center">
          <span className="ddadue-live-dot w-2 h-2 rounded-full bg-[var(--color-error)]" />
          <span className="mono text-[10.5px] tracking-[0.08em] text-[var(--color-text-3)] uppercase">
            Échéance DDADUE — live
          </span>
        </div>
        <div className="it text-[56px] text-[var(--color-primary)] leading-none tracking-[-0.03em] mt-1.5">
          J–522
        </div>
        <div className="inline-flex gap-1.5 items-center bg-[rgba(214,69,69,0.10)] text-[var(--color-error)] py-1 px-2.5 rounded-full text-[11px] mono mt-2.5">
          11 oct. 2026 · sanction 2 % CA
        </div>
        <div className="mt-[22px] pt-[18px] border-t border-[var(--color-border-2)] grid grid-cols-2 gap-x-6 gap-y-4">
          <Item label="Sites > 2,75 GWh" value="~5 000" italic />
          <Item label="Audités à ce jour" value="~38 %" italic />
          <Item label="NF EN 16247-3" value="Industrie" mono />
          <Item label="Renouv." value="tous 4 ans" />
        </div>
      </div>
    </div>
  );
}

function Item({
  label,
  value,
  italic,
  mono,
}: {
  label: string;
  value: string;
  italic?: boolean;
  mono?: boolean;
}) {
  return (
    <div>
      <div className="mono text-[10px] tracking-[0.08em] text-[var(--color-text-3)] uppercase">
        {label}
      </div>
      <div
        className={
          italic
            ? "it text-[18px] text-[var(--color-primary)] mt-1"
            : mono
              ? "mono text-[13px] font-semibold text-[var(--color-text)] mt-1"
              : "text-[14px] font-semibold text-[var(--color-text)] mt-1"
        }
      >
        {value}
      </div>
    </div>
  );
}
