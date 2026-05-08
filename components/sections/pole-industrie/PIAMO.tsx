import { amo } from "@/content/poleIndustrie";

export function PIAMO() {
  return (
    <section className="py-[var(--spacing-block-sm)]">
      <div className="container-x">
        <div className="bg-[var(--color-primary)] text-white rounded-[32px] p-20 relative overflow-hidden grid grid-cols-[1.1fr_1fr] gap-16 items-center reveal max-[1100px]:grid-cols-1 max-[1100px]:p-12">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(55% 70% at 92% 8%, rgba(245,197,24,0.22), transparent 65%), radial-gradient(50% 70% at 5% 100%, rgba(0,168,107,0.20), transparent 65%)",
            }}
          />
          <div className="relative z-[1]">
            <span className="eyebrow text-white/60 before:bg-white/30">
              {amo.eyebrow}
            </span>
            <h2
              className="font-bold tracking-[-0.035em] leading-[1.04] mt-5"
              style={{ fontSize: "clamp(36px, 3.2vw, 52px)" }}
            >
              {amo.title.lead}
              <br />
              <span
                className="it text-[var(--color-accent)]"
                style={{ fontSize: "inherit" }}
              >
                {amo.title.it}
              </span>
            </h2>
            <p className="text-[18px] text-white/[0.78] mt-6 max-w-[480px] leading-[1.55]">
              {amo.body}
            </p>
          </div>
          <div className="relative z-[1] flex flex-col gap-3.5">
            {amo.engagements.map((e) => (
              <div
                key={e.title}
                className="flex gap-3.5 items-start py-4 px-5 bg-white/[0.06] rounded-xl border-l-[3px] border-[var(--color-secondary)]"
              >
                <div className="w-7 h-7 rounded-full bg-[var(--color-secondary)] text-white flex items-center justify-center text-sm font-bold shrink-0">
                  ✓
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-white m-0">
                    {e.title}
                  </h5>
                  <p className="text-[12.5px] text-white/70 mt-1 leading-[1.5]">
                    {e.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
