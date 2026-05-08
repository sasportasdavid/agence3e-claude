import Link from "next/link";

export interface BreadcrumbItem {
  href?: string;
  label: string;
}

export function Breadcrumb({ items }: { items: readonly BreadcrumbItem[] }) {
  return (
    <div className="container-x">
      <nav
        aria-label="Fil d'Ariane"
        className="pt-6 mono text-xs text-[var(--color-text-3)] tracking-[0.06em]"
      >
        {items.map((item, i) => (
          <span key={i}>
            {i > 0 && <span className="mx-2.5 opacity-50">/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-[var(--color-secondary)]">
                {item.label}
              </Link>
            ) : (
              <span className="text-[var(--color-primary)]">{item.label}</span>
            )}
          </span>
        ))}
      </nav>
    </div>
  );
}
