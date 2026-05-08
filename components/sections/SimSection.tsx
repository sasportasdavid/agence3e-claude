import Link from "next/link";
import { sim } from "@/content/home";

export function SimSection() {
  return (
    <section className="py-[var(--spacing-block-sm)]">
      <div className="container-x">
        <div className="rounded-[32px] py-20 px-20 bg-[var(--color-pastel-green)] relative overflow-hidden grid grid-cols-[1.2fr_1fr] gap-16 items-center reveal max-[1100px]:grid-cols-1 max-[1100px]:py-12 max-[1100px]:px-8">
          <div
            className="absolute w-[600px] h-[600px] rounded-full pointer-events-none -bottom-[250px] -right-[150px]"
            style={{
              background:
                "radial-gradient(circle, #6BCFA0 0%, #A8E0BC 50%, transparent 100%)",
              filter: "blur(100px)",
              opacity: 0.7,
            }}
          />
          <div className="relative z-[1]">
            <span className="eyebrow">{sim.eyebrow}</span>
            <h2
              className="font-bold tracking-[-0.035em] leading-[1.04] mt-5 text-[var(--color-primary)]"
              style={{ fontSize: "clamp(36px, 3.4vw, 52px)" }}
            >
              {sim.title.lead}
              <br />
              {sim.title.sub}{" "}
              <span className="it" style={{ fontSize: "inherit" }}>
                {sim.title.it}
              </span>
            </h2>
            <p className="text-[18px] text-[var(--color-text-2)] mt-5 leading-[1.55] max-w-[460px]">
              {sim.lede}
            </p>
            <div className="mt-7 flex gap-6 flex-wrap">
              {sim.meta.map((m) => (
                <div
                  key={m}
                  className="mono text-xs text-[var(--color-text-2)] flex items-center gap-1.5 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--color-secondary)]"
                >
                  {m}
                </div>
              ))}
            </div>
            <Link
              href="/simulateur-cee"
              className="btn btn-primary btn-arrow mt-8 bg-[var(--color-secondary)] hover:bg-[#008a58]"
            >
              {sim.cta}
            </Link>
          </div>
          <SimMockup />
        </div>
      </div>
    </section>
  );
}

function SimMockup() {
  return (
    <div className="relative z-[1] bg-white rounded-2xl shadow-[0_24px_48px_-12px_rgba(10,37,64,0.15)] p-6">
      <div className="flex gap-3 items-center mb-2 mono text-[11px] text-[var(--color-text-3)] tracking-[0.06em]">
        <span className="py-[3px] px-2 bg-[var(--color-secondary-10)] text-[var(--color-secondary)] rounded font-semibold">
          02 / 04
        </span>
        <span>Secteur d&apos;activité</span>
      </div>
      <div className="text-base font-semibold text-[var(--color-primary)] mt-2 tracking-[-0.01em]">
        Quel est le secteur principal de votre site ?
      </div>
      <div className="grid grid-cols-2 gap-2.5 mt-[18px]">
        <SimOpt label="IAA" value="Process froid" active />
        <SimOpt label="IND" value="Plasturgie" />
        <SimOpt label="SVC" value="Blanchisserie" />
        <SimOpt label="BAT" value="Tertiaire" />
      </div>
      <div className="mt-[22px] pt-[18px] border-t border-dashed border-[var(--color-border)] flex justify-between items-baseline">
        <div>
          <div className="mono text-[10.5px] text-[var(--color-text-3)] tracking-[0.08em] uppercase">
            Estimation prime CEE
          </div>
          <div className="mt-1 mono text-[11px] text-[var(--color-text-3)]">
            fourchette indicative
          </div>
        </div>
        <div
          className="it text-[var(--color-primary)] text-[30px] leading-none tracking-[-0.02em]"
          style={{ fontFeatureSettings: '"tnum" 1' }}
        >
          85 → 142 k€
        </div>
      </div>
    </div>
  );
}

function SimOpt({
  label,
  value,
  active,
}: {
  label: string;
  value: string;
  active?: boolean;
}) {
  return (
    <div
      className={`border rounded-[10px] py-3.5 px-4 text-[13px] cursor-pointer ${
        active
          ? "border-[var(--color-secondary)] bg-[var(--color-secondary-10)] shadow-[0_0_0_3px_rgba(0,168,107,0.12)]"
          : "border-[var(--color-border)] bg-white text-[var(--color-text)]"
      }`}
    >
      <div className="mono text-[9.5px] text-[var(--color-text-3)] tracking-[0.08em] uppercase">
        {label}
      </div>
      <div className="mt-1 font-medium text-[var(--color-primary)]">
        {value}
      </div>
    </div>
  );
}
