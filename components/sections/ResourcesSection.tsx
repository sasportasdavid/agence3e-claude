/**
 * ResourcesSection — bloc Aller plus loin (brief §3.9).
 *
 * v3 :
 * - Container max 1280
 * - Grille 3 cols (1 mobile)
 * - 3 cards : 2 articles blog + 1 guide PDF (mix recommandé)
 * - CTA secondaire « Voir toutes les ressources → »
 */

import Link from "next/link";
import { resources } from "@/content/home";

export function ResourcesSection() {
  return (
    <section className="py-32 lg:py-40">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="max-w-[760px]">
          <span className="eyebrow reveal">{resources.eyebrow}</span>
          <h2
            className="display reveal mt-6"
            style={{
              fontSize: "clamp(28px, 3.2vw, 44px)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            {resources.title.lead}{" "}
            <span className="it" style={{ fontWeight: 400 }}>
              {resources.title.it}
            </span>
          </h2>
          {resources.sub && (
            <p className="text-[18px] text-[var(--color-text-2)] leading-[1.65] mt-6 reveal">
              {resources.sub}
            </p>
          )}
        </div>

        <div className="grid grid-cols-3 gap-7 mt-14 lg:mt-16 max-md:grid-cols-1">
          {resources.items.map((item, i) => (
            <Link
              key={item.title}
              href={item.href}
              className="bg-white border border-[var(--color-border)] rounded-2xl p-8 transition-all duration-200 hover:border-[var(--color-primary)] hover:-translate-y-1 reveal block"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="mono text-[11px] tracking-[0.08em] uppercase text-[var(--color-secondary)]">
                {item.tag}
              </span>
              <h4
                className="font-semibold text-[20px] tracking-[-0.02em] leading-[1.25] mt-4 text-[var(--color-primary)]"
              >
                {item.title}
              </h4>
              <span className="mt-6 text-sm font-medium text-[var(--color-primary)] inline-flex items-center gap-1.5">
                {item.cta}
                <span aria-hidden>→</span>
              </span>
            </Link>
          ))}
        </div>

        {/* CTA secondaire bottom */}
        <div className="mt-12 flex justify-center reveal">
          <Link
            href={resources.hrefAll}
            className="text-[15px] font-medium text-[var(--color-primary)] hover:underline underline-offset-2 inline-flex items-center gap-2"
          >
            {resources.ctaAll}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
