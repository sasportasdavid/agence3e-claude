/**
 * ArticleShell — wrapper visuel pour les articles MDX (page longue type
 * éditoriale). Importé par chaque page.mdx du blog.
 */
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";

interface ArticleShellProps {
  title: string;
  category: string;
  readTime: string;
  date: string;
  children: React.ReactNode;
}

export function ArticleShell({
  title,
  category,
  readTime,
  date,
  children,
}: ArticleShellProps) {
  return (
    <>
      <Breadcrumb
        items={[
          { href: "/", label: "Accueil" },
          { href: "/ressources/blog", label: "Blog" },
          { label: title.length > 50 ? title.slice(0, 50) + "…" : title },
        ]}
      />

      <main>
        <article className="container-x py-12 max-w-[820px] !mx-auto">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="mono text-[10.5px] tracking-[0.1em] uppercase text-[var(--color-text-2)] py-1 px-2 bg-[var(--color-secondary-10)] text-[#006e46] rounded">
              {category}
            </span>
            <span className="mono text-[10.5px] text-[var(--color-text-3)]">
              {readTime} · {date}
            </span>
          </div>

          {children}

          <div className="mt-16 pt-10 border-t border-[var(--color-border)]">
            <Link
              href="/ressources/blog"
              className="btn-ghost btn-arrow inline-flex items-center gap-2 font-medium"
            >
              ← Tous les articles
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
