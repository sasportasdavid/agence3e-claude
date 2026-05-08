import { specialites } from "@/content/poleIndustrie";

const TONE_BG: Record<string, string> = {
  green: "bg-[var(--color-pastel-green)]",
  yellow: "bg-[var(--color-pastel-yellow)]",
  mint: "bg-[#D9F0E0]",
};

const TONE_BLOB: Record<string, React.CSSProperties> = {
  green: {
    background:
      "radial-gradient(circle, #6BCFA0 0%, #A8E0BC 60%, transparent 100%)",
  },
  yellow: {
    background:
      "radial-gradient(circle, #F5C518 0%, #F7DD8A 60%, transparent 100%)",
  },
  mint: {
    background:
      "radial-gradient(circle, #4CC18E 0%, #97D8B7 60%, transparent 100%)",
  },
};

export function PISpecialites() {
  return (
    <section className="py-[var(--spacing-block-sm)]">
      <div className="container-x">
        <span className="eyebrow reveal">{specialites.eyebrow}</span>
        <h2 className="section-title reveal">
          {specialites.title.lead}
          <br />
          <span className="it">{specialites.title.it}</span>
        </h2>

        <div className="grid grid-cols-3 gap-7 mt-20 max-[1100px]:grid-cols-1">
          {specialites.cards.map((card) => (
            <article
              key={card.badge}
              className={`relative rounded-3xl pt-10 px-9 pb-10 overflow-hidden min-h-[460px] flex flex-col transition-transform duration-300 hover:-translate-y-1 reveal ${TONE_BG[card.tone]}`}
            >
              <div
                className="absolute w-[380px] h-[380px] rounded-full pointer-events-none -top-[120px] -right-[120px]"
                style={{
                  filter: "blur(60px)",
                  opacity: 0.6,
                  ...TONE_BLOB[card.tone],
                }}
              />
              <span className="relative z-[1] inline-flex bg-white/75 py-1.5 px-3 rounded-full mono text-[11px] text-[var(--color-primary)] w-fit tracking-[0.04em]">
                {card.badge}
              </span>
              <h3 className="relative z-[1] font-bold text-[28px] tracking-[-0.025em] leading-[1.1] mt-4 text-[var(--color-primary)]">
                {card.title}
              </h3>
              <p className="relative z-[1] text-[14.5px] text-[var(--color-text-2)] mt-3">
                {card.desc}
              </p>
              <div className="relative z-[1] grid grid-cols-2 gap-3.5 mt-auto pt-6 border-t border-[#0a25401a]">
                {card.stats.map((s) => (
                  <div key={s.l}>
                    <div className="mono text-[9.5px] tracking-[0.08em] text-[var(--color-text-3)] uppercase">
                      {s.l}
                    </div>
                    <div
                      className="it text-[22px] text-[var(--color-primary)] mt-1 leading-none"
                      style={{ fontFeatureSettings: '"tnum" 1' }}
                    >
                      {s.v}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
