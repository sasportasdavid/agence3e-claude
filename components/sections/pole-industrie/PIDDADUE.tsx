import Link from "next/link";
import { ddadue } from "@/content/poleIndustrie";

export function PIDDADUE() {
  return (
    <section className="py-[var(--spacing-block-sm)]">
      <div className="container-x">
        <div className="rounded-3xl py-14 px-16 bg-[var(--color-pastel-orange)] relative overflow-hidden grid grid-cols-[1.4fr_1fr] gap-16 items-center reveal max-[1100px]:grid-cols-1 max-[1100px]:py-12 max-[1100px]:px-8">
          <div
            className="absolute w-[480px] h-[480px] rounded-full pointer-events-none -top-[180px] -right-[180px]"
            style={{
              background:
                "radial-gradient(circle, #FF8B6B 0%, #F7A85A 60%, transparent 100%)",
              filter: "blur(80px)",
              opacity: 0.5,
            }}
          />
          <div className="relative z-[1]">
            <span className="eyebrow">{ddadue.eyebrow}</span>
            <h2
              className="font-bold tracking-[-0.03em] leading-[1.05] mt-5"
              style={{ fontSize: "clamp(32px, 2.8vw, 44px)" }}
            >
              {ddadue.title.lead}{" "}
              <span className="it" style={{ fontSize: "inherit" }}>
                {ddadue.title.it}
              </span>
            </h2>
            <p className="text-base text-[var(--color-text-2)] mt-4 leading-[1.55] max-w-[460px]">
              {ddadue.body}
            </p>
            <div className="mt-7 flex gap-3 max-sm:flex-col">
              <Link href="/contact" className="btn btn-primary btn-arrow">
                {ddadue.cta}
              </Link>
            </div>
          </div>
          <div className="relative z-[1] flex flex-col gap-6">
            {ddadue.meta.map((m) => (
              <div
                key={m.label}
                className="bg-white/70 backdrop-blur-md rounded-2xl py-5 px-6"
              >
                <span className="mono text-[10.5px] tracking-[0.1em] text-[var(--color-text-3)] uppercase">
                  {m.label}
                </span>
                <div
                  className="it text-[32px] text-[var(--color-primary)] mt-1.5 leading-none tracking-[-0.02em]"
                  style={{ fontFeatureSettings: '"tnum" 1' }}
                >
                  {m.value}
                </div>
                <div className="text-[12.5px] text-[var(--color-text-2)] mt-1.5">
                  {m.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
