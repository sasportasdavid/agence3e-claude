import { faq } from "@/content/poleIndustrie";

/**
 * Server-component FAQ using <details>/<summary> for native accordion
 * (no client JS needed; the source maquette used a JS toggle but native
 * <details> is keyboard-accessible and progressively enhanced).
 */
export function PIFAQ() {
  return (
    <section className="py-[var(--spacing-block-sm)]">
      <div className="container-x">
        <span className="eyebrow reveal">{faq.eyebrow}</span>
        <h2 className="section-title reveal">
          {faq.title.lead}
          <br />
          <span className="it">{faq.title.it}</span>
        </h2>

        <div className="mt-14 max-w-[880px]">
          {faq.items.map((item, i) => (
            <details
              key={item.q}
              className="border-b border-[var(--color-border)] group"
            >
              <summary className="py-6 cursor-pointer grid grid-cols-[40px_1fr_24px] gap-4 items-center list-none [&::-webkit-details-marker]:hidden">
                <span className="mono text-xs text-[var(--color-text-3)] tracking-[0.08em]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[18px] font-medium tracking-[-0.015em] text-[var(--color-primary)]">
                  {item.q}
                </span>
                <span className="text-[22px] text-[var(--color-text-2)] leading-none transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="pb-7 pl-14 pr-0 text-[15px] text-[var(--color-text-2)] leading-[1.6] max-w-[720px]">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
