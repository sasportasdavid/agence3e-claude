import { indep } from "@/content/home";

export function IndepSection() {
  return (
    <section className="py-[var(--spacing-block-sm)]">
      <div className="container-x">
        <div className="bg-[var(--color-primary)] text-white rounded-[32px] py-24 px-20 relative overflow-hidden reveal max-[1100px]:py-14 max-[1100px]:px-8">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(55% 70% at 92% 8%, rgba(245,197,24,0.22), transparent 65%), radial-gradient(50% 70% at 5% 100%, rgba(0,168,107,0.20), transparent 65%)",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              maskImage:
                "radial-gradient(ellipse 70% 70% at 50% 50%, #000 30%, transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 70% at 50% 50%, #000 30%, transparent 80%)",
            }}
          />
          <div className="relative z-[1]">
            <span className="eyebrow text-white/60 before:bg-white/30">
              {indep.eyebrow}
            </span>
            <h2
              className="font-bold tracking-[-0.04em] leading-[1.04] mt-6 max-w-[880px]"
              style={{ fontSize: "clamp(40px, 4vw, 60px)" }}
            >
              {indep.title.lead}
              <br />
              <span
                className="it text-[var(--color-accent)]"
                style={{ fontSize: "inherit" }}
              >
                {indep.title.it}
              </span>
            </h2>
            <p className="text-[19px] leading-[1.55] text-white/[0.78] mt-7 max-w-[720px]">
              {indep.lede}
            </p>
            <div className="mt-12 flex gap-8 flex-wrap pt-8 border-t border-white/[0.12]">
              {indep.meta.map((m) => (
                <div key={m.label} className="flex flex-col gap-1">
                  <span className="mono text-[11px] tracking-[0.08em] uppercase text-white/50">
                    {m.label}
                  </span>
                  <span className="text-[15px] text-white font-medium">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
