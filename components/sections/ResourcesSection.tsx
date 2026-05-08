import Link from "next/link";
import { resources } from "@/content/home";

export function ResourcesSection() {
  return (
    <section className="py-[var(--spacing-block-sm)]">
      <div className="container-x">
        <span className="eyebrow reveal">{resources.eyebrow}</span>
        <h2 className="section-title reveal">
          {resources.title.lead} <span className="it">{resources.title.it}</span>
        </h2>

        <div className="grid grid-cols-3 gap-7 mt-20 max-[1100px]:grid-cols-1">
          {resources.items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="bg-white border border-[var(--color-border)] rounded-[20px] p-8 transition-all duration-200 hover:border-[var(--color-primary)] hover:-translate-y-1 reveal block"
            >
              <span className="mono text-[11px] tracking-[0.1em] uppercase text-[var(--color-secondary)]">
                {item.tag}
              </span>
              <h4 className="font-bold text-[22px] tracking-[-0.025em] leading-[1.2] mt-4 text-[var(--color-primary)]">
                {item.title}
              </h4>
              <span className="mt-6 text-sm font-medium text-[var(--color-primary)] inline-flex items-center gap-2">
                {item.cta}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
