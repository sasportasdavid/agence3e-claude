import Link from "next/link";
import { Aurore } from "@/components/Aurore";
import { DDADUEDashMockup } from "@/components/mockups/DDADUEDashMockup";
import { hero } from "@/content/poleIndustrie";

export function PIHero() {
  return (
    <section className="relative pt-[60px] pb-[var(--spacing-block)] overflow-hidden max-[1100px]:pb-[120px]">
      <div className="container-wide">
        <div className="grid grid-cols-[1.05fr_1fr] gap-12 items-center relative z-[2] max-[1100px]:grid-cols-1">
          <div>
            <span className="eyebrow reveal">{hero.eyebrow}</span>
            <h1
              className="display reveal"
              style={{
                fontSize: "clamp(56px, 6.6vw, 92px)",
                fontWeight: 700,
                letterSpacing: "-0.045em",
                lineHeight: 0.98,
                margin: "24px 0 0 0",
              }}
            >
              {hero.h1Lead.map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
              <span
                className="it block mt-2 text-[var(--color-primary)] font-normal"
                style={{ letterSpacing: "-0.025em" }}
              >
                {hero.h1It}
              </span>
            </h1>
            <p className="text-[20px] text-[var(--color-text-2)] leading-[1.5] mt-8 max-w-[540px] reveal">
              {hero.sub}
            </p>
            <div className="flex gap-3 mt-10 reveal max-sm:flex-col">
              <Link href="/contact" className="btn btn-primary btn-arrow">
                {hero.ctaPrimary}
              </Link>
              <Link href="#catalogue" className="btn btn-secondary">
                {hero.ctaSecondary}
              </Link>
            </div>
            <div className="mt-14 flex items-center gap-3.5 text-sm text-[var(--color-text-2)] reveal max-sm:flex-wrap">
              <span className="w-[22px] h-[22px] rounded-full bg-[var(--color-secondary-10)] text-[var(--color-secondary)] flex items-center justify-center text-xs font-bold shrink-0">
                ✓
              </span>
              <span>
                {hero.trustText} ·{" "}
                <span
                  className="mono tooltip"
                  data-tip="Norme française des audits énergétiques"
                >
                  NF EN 16247-3
                </span>{" "}
                ·{" "}
                <span
                  className="mono tooltip"
                  data-tip="Qualification ingénierie performance énergétique"
                >
                  OPQIBI 1905
                </span>
              </span>
            </div>
          </div>

          <div className="relative h-[620px] w-full reveal max-[1100px]:h-[420px] max-[1100px]:mt-8">
            <Aurore
              variant="heroIndustrie"
              className="absolute -top-[80px] -right-[10%] w-[130%] h-[800px] pointer-events-none z-[1]"
            />
            <DDADUEDashMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
