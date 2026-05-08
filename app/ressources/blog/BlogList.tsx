"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BLOG_ARTICLES,
  BLOG_CATEGORIES,
  type BlogCategory,
} from "@/content/blog";

const TONE_BG: Record<string, string> = {
  rose: "bg-[var(--color-pastel-rose)]",
  blue: "bg-[var(--color-pastel-blue)]",
  green: "bg-[var(--color-pastel-green)]",
  violet: "bg-[var(--color-pastel-violet)]",
  orange: "bg-[var(--color-pastel-orange)]",
  yellow: "bg-[var(--color-pastel-yellow)]",
};

export function BlogList() {
  const [active, setActive] = useState<BlogCategory | "all">("all");
  const visible = BLOG_ARTICLES.filter(
    (a) => active === "all" || a.category === active,
  );

  return (
    <div className="container-x">
      <div className="flex gap-2 flex-wrap reveal">
        {BLOG_CATEGORIES.map((c) => (
          <button
            key={c.key}
            type="button"
            onClick={() => setActive(c.key)}
            className={`py-2 px-4 rounded-full border text-[13px] mono cursor-pointer transition-colors ${
              active === c.key
                ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]"
                : "bg-white text-[var(--color-text-2)] border-[var(--color-border)] hover:border-[var(--color-primary)]"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-7 mt-12 max-[1100px]:grid-cols-1">
        {visible.map((a) => (
          <Link
            key={a.slug}
            href={`/ressources/blog/${a.slug}`}
            className={`relative rounded-3xl p-9 overflow-hidden flex flex-col min-h-[280px] transition-transform duration-300 hover:-translate-y-1 reveal ${TONE_BG[a.tone]}`}
          >
            <div className="flex items-center gap-3 flex-wrap">
              <span className="mono text-[10.5px] tracking-[0.1em] uppercase text-[var(--color-text-2)] py-1 px-2 bg-white/70 rounded">
                {a.catLabel}
              </span>
              <span className="mono text-[10.5px] text-[var(--color-text-3)]">
                {a.readTime} · {a.date}
              </span>
            </div>
            <h2 className="text-[24px] font-bold tracking-[-0.025em] leading-[1.25] mt-5 text-[var(--color-primary)]">
              {a.title}
            </h2>
            <p className="text-[14.5px] text-[var(--color-text-2)] mt-4 leading-[1.6]">
              {a.excerpt}
            </p>
            <span className="mono text-[12px] text-[var(--color-secondary)] mt-auto pt-6">
              Lire l&apos;article →
            </span>
          </Link>
        ))}
      </div>

      {visible.length === 0 && (
        <div className="mt-12 py-16 text-center text-[var(--color-text-3)] text-[15px]">
          Aucun article dans cette catégorie pour le moment.
        </div>
      )}
    </div>
  );
}
