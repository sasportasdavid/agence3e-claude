/**
 * HowSection — Timeline 4 étapes (brief §3.8).
 *
 * v3 :
 * - Container max 880 (lecture confort, texte éditorial).
 * - Layout horizontal desktop avec connecteurs gradient.
 * - Layout vertical mobile avec ligne verticale connectrice.
 * - Typographie ajustée : H2 clamp(28-44), step title 18px Inter 600,
 *   duration mono 11px, desc body small 14px.
 * - Reveal cascadé sur les 4 étapes.
 */

import { how } from "@/content/home";

export function HowSection() {
  return (
    <section className="py-32 lg:py-40">
      <div className="max-w-[880px] mx-auto px-6 lg:px-12">
        <div>
          <span className="eyebrow reveal">{how.eyebrow}</span>
          <h2
            className="display reveal mt-6"
            style={{
              fontSize: "clamp(28px, 3.2vw, 44px)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            {how.title.lead}{" "}
            <span className="it" style={{ fontWeight: 400 }}>
              {how.title.it}
            </span>
          </h2>
        </div>

        <div className="relative grid grid-cols-4 gap-5 mt-16 lg:mt-20 max-md:grid-cols-1 max-md:gap-8">
          {/* Connecteur horizontal desktop */}
          <div
            className="absolute top-7 left-[6%] right-[6%] h-px opacity-40 max-md:hidden"
            style={{
              background:
                "linear-gradient(90deg, var(--color-secondary), var(--color-accent), var(--color-primary))",
            }}
          />
          {/* Connecteur vertical mobile */}
          <div
            className="absolute top-7 left-7 bottom-7 w-px opacity-40 hidden max-md:block"
            style={{
              background:
                "linear-gradient(180deg, var(--color-secondary), var(--color-accent), var(--color-primary))",
            }}
          />

          {how.steps.map((s, i) => (
            <div
              key={s.n}
              className="px-1 relative reveal max-md:pl-12"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className="w-14 h-14 rounded-full bg-white border border-[var(--color-border)] flex items-center justify-center it text-[22px] text-[var(--color-primary)] relative z-[1] shadow-[0_4px_12px_rgba(10,37,64,0.06)] max-md:absolute max-md:left-0 max-md:top-0"
                style={{ fontFeatureSettings: '"tnum" 1' }}
              >
                {String(s.n).padStart(2, "0")}
              </div>
              <h4 className="font-semibold text-[16px] tracking-[-0.02em] mt-5 text-[var(--color-primary)] max-md:mt-1">
                {s.title}
              </h4>
              <div className="mono text-[10.5px] text-[var(--color-text-3)] tracking-[0.06em] mt-1.5 uppercase">
                {s.duration}
              </div>
              <p className="text-[14px] text-[var(--color-text-2)] mt-3 leading-[1.6]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
