import { how } from "@/content/home";

export function HowSection() {
  return (
    <section className="py-[var(--spacing-block-sm)]">
      <div className="container-x">
        <span className="eyebrow reveal">{how.eyebrow}</span>
        <h2 className="section-title reveal">
          {how.title.lead}
          <br />
          <span className="it">{how.title.it}</span>
        </h2>

        <div className="relative grid grid-cols-4 gap-6 mt-20 max-[1100px]:grid-cols-2 max-sm:grid-cols-1">
          <div
            className="absolute top-8 left-[5%] right-[5%] h-px opacity-40 max-[1100px]:hidden"
            style={{
              background:
                "linear-gradient(90deg, var(--color-secondary), var(--color-accent), var(--color-primary))",
            }}
          />
          {how.steps.map((s) => (
            <div key={s.n} className="px-1 reveal">
              <div className="w-16 h-16 rounded-full bg-white border border-[var(--color-border)] flex items-center justify-center it text-[26px] text-[var(--color-primary)] relative z-[1] shadow-[0_4px_12px_rgba(10,37,64,0.06)]">
                {s.n}
              </div>
              <h4 className="font-semibold text-[18px] tracking-[-0.02em] mt-6 text-[var(--color-primary)]">
                {s.title}
              </h4>
              <div className="mono text-[11px] text-[var(--color-text-3)] tracking-[0.06em] mt-1.5">
                {s.duration}
              </div>
              <p className="text-[14.5px] text-[var(--color-text-2)] mt-3 leading-[1.55]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
