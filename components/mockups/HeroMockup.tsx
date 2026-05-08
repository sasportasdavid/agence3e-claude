/**
 * HeroMockup — the SYNTHESE_CEE.pdf card floating in front of the hero
 * aurore. One single mockup (the v4 design retired the 3-floater stack).
 */
export function HeroMockup() {
  return (
    <div className="absolute bottom-[60px] right-[8%] w-[380px] bg-white rounded-2xl overflow-hidden z-[3] shadow-[0_24px_48px_-12px_rgba(10,37,64,0.18),0_4px_8px_rgba(10,37,64,0.04)] max-[1100px]:right-0 max-[1100px]:w-[320px]">
      <div className="py-3.5 px-[18px] border-b border-[var(--color-border-2)] flex justify-between items-center bg-[#fafbfc]">
        <div className="flex gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#d8dde5]" />
          <span className="w-2 h-2 rounded-full bg-[#d8dde5]" />
          <span className="w-2 h-2 rounded-full bg-[#d8dde5]" />
        </div>
        <span className="mono text-[10.5px] text-[var(--color-text-3)]">
          SYNTHESE_CEE.pdf
        </span>
      </div>
      <div className="px-6 pt-[22px] pb-6">
        <div className="mono text-[10.5px] tracking-[0.08em] text-[var(--color-text-3)] uppercase">
          Prime CEE estimée
        </div>
        <div className="it text-[56px] text-[var(--color-primary)] leading-none tracking-[-0.03em] mt-1.5">
          182 400 €
        </div>
        <div className="mt-2.5 inline-flex gap-1.5 items-center bg-[var(--color-secondary-10)] text-[#006e46] py-1 px-2.5 rounded-full text-xs font-medium mono">
          ↑ +12 à +25 % négocié
        </div>
        <div className="mt-[22px] pt-[18px] border-t border-[var(--color-border-2)] grid grid-cols-2 gap-x-6 gap-y-4">
          <Item label="Investissement" value="486 k€" />
          <Item label="Reste à charge" value="303,6 k€" />
          <Item label="ROI net" value="2,8 ans" italic />
          <Item label="Fiche CEE" value="IND-UT-117" mono />
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
            ? "it text-[19px] text-[var(--color-text)] mt-1"
            : mono
              ? "mono text-[13px] font-medium text-[var(--color-text)] mt-1"
              : "text-base font-semibold text-[var(--color-text)] mt-1"
        }
      >
        {value}
      </div>
    </div>
  );
}
