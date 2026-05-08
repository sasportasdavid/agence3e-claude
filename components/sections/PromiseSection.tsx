import { promise } from "@/content/home";
import { MockupPDF, MockupTable, MockupDash } from "../mockups/PromiseMockups";

const TONE_BG: Record<string, string> = {
  rose: "bg-[var(--color-pastel-rose)]",
  blue: "bg-[var(--color-pastel-blue)]",
  green: "bg-[var(--color-pastel-green)]",
};

const TONE_BLOB: Record<string, string> = {
  rose: "bg-[radial-gradient(circle,#FF8FA3_0%,#FFB199_60%,transparent_100%)] -top-[120px] -right-[120px]",
  blue: "bg-[radial-gradient(circle,#6F9CFE_0%,#B5C6FB_60%,transparent_100%)] -top-[120px] -right-[120px]",
  green:
    "bg-[radial-gradient(circle,#6BCFA0_0%,#A8E0BC_60%,transparent_100%)] -top-[120px] -right-[120px]",
};

const MOCKUPS = {
  pdf: <MockupPDF />,
  table: <MockupTable />,
  dash: <MockupDash />,
};

export function PromiseSection() {
  return (
    <section className="py-[var(--spacing-block-sm)]">
      <div className="container-x">
        <span className="eyebrow reveal">{promise.eyebrow}</span>
        <h2 className="section-title reveal">
          {promise.title.map((t, i) =>
            typeof t === "string" ? (
              <span key={i}>
                {t}
                <br />
              </span>
            ) : (
              <span className="it" key={i}>
                {t.it}
              </span>
            ),
          )}
        </h2>

        <div className="grid grid-cols-3 gap-7 mt-20 max-[1100px]:grid-cols-1">
          {promise.cards.map((card) => (
            <div
              key={card.badge}
              className={`relative rounded-3xl pt-10 px-9 pb-0 overflow-hidden min-h-[540px] flex flex-col reveal ${TONE_BG[card.tone]}`}
            >
              <div
                className={`absolute w-[380px] h-[380px] rounded-full blur-[60px] opacity-65 pointer-events-none ${TONE_BLOB[card.tone]}`}
              />
              <span
                className={`relative z-[1] inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full mono text-[11px] font-medium tracking-[0.04em] w-fit ${
                  card.badgeAccent
                    ? "bg-[var(--color-secondary)] text-white"
                    : "bg-white/75 text-[var(--color-primary)]"
                }`}
              >
                {card.badge}
              </span>
              <h3 className="relative z-[1] font-bold text-[32px] tracking-[-0.03em] leading-[1.05] mt-5 text-[var(--color-primary)]">
                {card.title.lead}{" "}
                <span className="it text-[32px]">{card.title.it}</span>
              </h3>
              <p className="relative z-[1] text-[15px] text-[var(--color-text-2)] mt-4 leading-[1.55]">
                {card.desc}
              </p>
              <ul className="relative z-[1] mt-6 flex flex-col gap-2.5 list-none p-0">
                {card.checks.map((c) => (
                  <li
                    key={c}
                    className="flex gap-2.5 text-sm text-[var(--color-primary)] items-start"
                  >
                    <span className="text-[var(--color-secondary)] font-bold shrink-0 mt-px">
                      ✓
                    </span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
              <div className="relative z-[1] mt-auto -mb-px -mx-9">
                {MOCKUPS[card.mockup]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
