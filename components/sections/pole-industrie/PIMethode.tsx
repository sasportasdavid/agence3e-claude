import { methode } from "@/content/poleIndustrie";

export function PIMethode() {
  return (
    <section className="py-[var(--spacing-block-sm)]">
      <div className="container-x">
        <span className="eyebrow reveal">{methode.eyebrow}</span>
        <h2 className="section-title reveal">
          {methode.title.lead}
          <br />
          <span className="it">{methode.title.it}</span>
        </h2>

        <div className="relative grid grid-cols-7 gap-4 mt-20 max-[1100px]:grid-cols-2 max-sm:grid-cols-1">
          <div
            className="absolute top-8 left-[4%] right-[4%] h-px opacity-40 max-[1100px]:hidden"
            style={{
              background:
                "linear-gradient(90deg, var(--color-secondary), var(--color-accent), var(--color-primary))",
            }}
          />
          {methode.steps.map((s) => (
            <div key={s.n} className="px-1 reveal">
              <div className="w-16 h-16 rounded-full bg-white border border-[var(--color-border)] flex items-center justify-center it text-[24px] text-[var(--color-primary)] relative z-[1] shadow-[0_4px_12px_rgba(10,37,64,0.06)]">
                {s.n}
              </div>
              <h4 className="font-semibold text-[15.5px] tracking-[-0.015em] mt-5 text-[var(--color-primary)]">
                {s.title}
              </h4>
              <div className="mono text-[10.5px] text-[var(--color-text-3)] mt-1">
                {s.duration}
              </div>
              <p className="text-[12.5px] text-[var(--color-text-2)] mt-2.5 leading-[1.5]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
