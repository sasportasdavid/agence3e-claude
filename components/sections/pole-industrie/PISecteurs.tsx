import Link from "next/link";
import { Aurore } from "@/components/Aurore";
import { SECTORS_INDEX, type SectorIndex } from "@/content/poleIndustrieSubs";

const TONE_BG: Record<SectorIndex["tone"], string> = {
  rose: "bg-[var(--color-pastel-rose)]",
  blue: "bg-[var(--color-pastel-blue)]",
  green: "bg-[var(--color-pastel-green)]",
  violet: "bg-[var(--color-pastel-violet)]",
  orange: "bg-[var(--color-pastel-orange)]",
  yellow: "bg-[var(--color-pastel-yellow)]",
  mint: "bg-[#D9F0E0]",
};

const TONE_BLOB: Record<SectorIndex["tone"], React.CSSProperties> = {
  rose: { background: "radial-gradient(circle, #FF8FA3 0%, #FFC0A0 60%, transparent 100%)" },
  blue: { background: "radial-gradient(circle, #6F9CFE 0%, #B5C6FB 60%, transparent 100%)" },
  green: { background: "radial-gradient(circle, #6BCFA0 0%, #A8E0BC 60%, transparent 100%)" },
  violet: { background: "radial-gradient(circle, #9D7EDC 0%, #C9B5EE 60%, transparent 100%)" },
  orange: { background: "radial-gradient(circle, #FF8B6B 0%, #F7C8A8 60%, transparent 100%)" },
  yellow: { background: "radial-gradient(circle, #F5C518 0%, #F7DD8A 60%, transparent 100%)" },
  mint: { background: "radial-gradient(circle, #4CC18E 0%, #97D8B7 60%, transparent 100%)" },
};

export function PISecteurs() {
  return (
    <section className="py-[var(--spacing-block-sm)]">
      <div className="container-x">
        <span className="eyebrow reveal">Vos secteurs</span>
        <h2 className="section-title reveal">
          Huit secteurs industriels
          <br />
          <span className="it">à parité.</span>
        </h2>
        <p className="section-lede reveal max-w-[760px]">
          Notre méthodologie d&apos;audit DDADUE conforme NF EN 16247-3
          s&apos;applique à l&apos;ensemble des secteurs industriels. Chacun
          dispose de sa page dédiée, avec gisements CEE prioritaires, étude
          de cas indicative et formulaire pré-qualifié.
        </p>

        <div className="grid grid-cols-4 gap-5 mt-14 max-[1100px]:grid-cols-2 max-sm:grid-cols-1">
          {SECTORS_INDEX.map((s, i) => (
            <Link
              key={s.slug}
              href={`/pole-industrie/${s.slug}`}
              className={`relative rounded-2xl p-7 overflow-hidden min-h-[220px] flex flex-col transition-transform duration-300 hover:-translate-y-1 reveal ${TONE_BG[s.tone]}`}
            >
              <div
                className="absolute w-[280px] h-[280px] rounded-full pointer-events-none -top-[100px] -right-[100px]"
                style={{
                  filter: "blur(60px)",
                  opacity: 0.55,
                  ...TONE_BLOB[s.tone],
                }}
              />
              <span className="relative z-[1] mono text-[10.5px] tracking-[0.08em] text-[var(--color-text-3)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="relative z-[1] text-[18px] font-bold tracking-[-0.02em] leading-[1.2] mt-3 text-[var(--color-primary)]">
                {s.nav}
              </h3>
              <p className="relative z-[1] text-[12.5px] text-[var(--color-text-2)] mt-2 leading-[1.5] flex-1">
                {s.pitch}
              </p>
              <div className="relative z-[1] mt-5 pt-4 border-t border-[#0a25401a] flex items-baseline justify-between">
                <span
                  className="it text-[20px] text-[var(--color-primary)] leading-none"
                  style={{ fontFeatureSettings: '"tnum" 1' }}
                >
                  {s.parc}
                </span>
                <span className="text-[12px] text-[var(--color-secondary)] font-medium">
                  Voir →
                </span>
              </div>
            </Link>
          ))}

          {/* 9ᵉ tuile : "Mon secteur n'y est pas" — dark, ouvre le contact */}
          <Link
            href="/contact"
            className="relative rounded-2xl p-7 overflow-hidden min-h-[220px] flex flex-col transition-transform duration-300 hover:-translate-y-1 reveal bg-[var(--color-primary)] text-white border-0"
          >
            <div className="absolute inset-0 pointer-events-none opacity-50">
              <Aurore variant="ressources" className="w-full h-full" />
            </div>
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(60% 80% at 100% 0%, rgba(245,197,24,0.18), transparent 60%)",
              }}
            />
            <span className="relative z-[1] mono text-[10.5px] tracking-[0.08em] text-white/50">
              09
            </span>
            <h3 className="relative z-[1] text-[18px] font-bold tracking-[-0.02em] leading-[1.2] mt-3 text-white">
              Mon secteur n&apos;y est pas.
            </h3>
            <p className="relative z-[1] text-[12.5px] text-white/70 mt-2 leading-[1.5] flex-1">
              Industrie de niche, process atypique, périmètre mixte ?
              Décrivez-nous votre activité — on revient vers vous sous 24 h
              ouvrées.
            </p>
            <div className="relative z-[1] mt-5 pt-4 border-t border-white/15 flex items-baseline justify-between">
              <span className="text-[12px] text-white/70">
                Pré-qualif gratuite
              </span>
              <span className="text-[12px] text-[var(--color-accent)] font-medium">
                Nous écrire →
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
