import { pilier } from "@/content/home";

export function PilierSection() {
  return (
    <section className="py-[var(--spacing-block-sm)]">
      <div className="container-x">
        <span className="eyebrow reveal">{pilier.eyebrow}</span>
        <h2 className="section-title reveal">
          {pilier.title.lead}
          <br />
          <span className="it">{pilier.title.tail}</span>
        </h2>
        <p className="section-lede reveal">{pilier.lede}</p>

        <div className="grid grid-cols-2 gap-24 items-end mt-20 max-[1100px]:grid-cols-1 max-[1100px]:gap-12">
          <div />
          <div className="flex flex-col gap-14">
            {pilier.stats.map((s) => (
              <div
                key={s.n}
                className="grid grid-cols-[60px_1fr] gap-5 items-start pb-10 border-b border-[var(--color-border)] last:border-b-0 last:pb-0 reveal"
              >
                <span className="mono text-[13px] text-[var(--color-text-3)] tracking-[0.08em] pt-3.5">
                  {s.n}
                </span>
                <div>
                  <div
                    className={
                      s.serif
                        ? "it text-[clamp(48px,4.5vw,72px)] leading-none text-[var(--color-primary)]"
                        : "font-bold text-[clamp(48px,4.5vw,72px)] tracking-[-0.04em] leading-none text-[var(--color-primary)]"
                    }
                    style={{ fontFeatureSettings: '"tnum" 1' }}
                  >
                    {s.value}
                  </div>
                  <div className="text-base text-[var(--color-text-2)] mt-3.5 leading-[1.5]">
                    {s.label.split("J–522").map((part, i, arr) =>
                      i < arr.length - 1 ? (
                        <span key={i}>
                          {part}
                          <span className="mono text-[var(--color-error)]">
                            J–522
                          </span>
                        </span>
                      ) : (
                        <span key={i}>{part}</span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
