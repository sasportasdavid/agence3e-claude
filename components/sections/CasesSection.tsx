import { cases } from "@/content/home";
import { CaseMini } from "../CaseMini";

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

export function CasesSection() {
  return (
    <section className="py-[var(--spacing-block-sm)]">
      <div className="container-x">
        <span className="eyebrow reveal">{cases.eyebrow}</span>
        <h2 className="section-title reveal">
          {cases.title.lead}
          <br />
          <span className="it">{cases.title.it}</span>
        </h2>

        <div className="grid grid-cols-6 gap-6 mt-20 max-[1100px]:grid-cols-1">
          {cases.items.map((c) => (
            <article
              key={c.ref}
              className={`rounded-3xl p-8 overflow-hidden relative flex flex-col min-h-[460px] transition-transform duration-300 hover:-translate-y-1 reveal ${TONE_BG[c.tone]} ${
                c.span === 3
                  ? "col-span-3 max-[1100px]:col-span-1"
                  : "col-span-2 max-[1100px]:col-span-1"
              }`}
            >
              <div
                className="absolute w-[320px] h-[320px] rounded-full pointer-events-none z-0"
                style={{
                  filter: "blur(70px)",
                  opacity: 0.6,
                  ...TONE_BLOB[c.tone],
                }}
              />
              <div className="relative z-[1] flex items-center">
                <span className="mono text-[11px] tracking-[0.1em] uppercase text-[var(--color-text-2)] inline-flex items-center gap-2">
                  {c.tag}
                </span>
                <span className="mono text-[10.5px] text-[var(--color-text-3)] tracking-[0.06em] ml-auto">
                  {c.ref}
                </span>
              </div>
              <h4
                className="relative z-[1] font-bold text-[var(--color-primary)] mt-4"
                style={{
                  fontSize: c.span === 3 ? 32 : 24,
                  letterSpacing: c.span === 3 ? "-0.03em" : "-0.025em",
                  lineHeight: 1.15,
                }}
              >
                {c.title}
              </h4>
              <div className="relative z-[1] mono text-[11px] text-[var(--color-text-3)] mt-2 flex gap-3 items-center">
                <span className="bg-white/70 py-[3px] px-2 rounded text-[var(--color-primary)] font-medium">
                  {c.meta.ref}
                </span>
                <span>·</span>
                <span>{c.meta.date}</span>
              </div>
              <div className="relative z-[1] grid grid-cols-3 gap-4 mt-6 pt-5 border-t border-[#0a25401a]">
                {c.stats.map((s) => (
                  <div key={s.l}>
                    <div className="mono text-[9.5px] tracking-[0.08em] text-[var(--color-text-3)] uppercase">
                      {s.l}
                    </div>
                    <div
                      className="it text-[22px] text-[var(--color-primary)] mt-1 leading-none tracking-[-0.01em]"
                      style={{ fontFeatureSettings: '"tnum" 1' }}
                    >
                      {s.v}
                    </div>
                  </div>
                ))}
              </div>
              {c.mini && (
                <div className="relative z-[1] mt-auto pt-6">
                  <CaseMini rows={c.mini.rows} bar={c.mini.bar} />
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
