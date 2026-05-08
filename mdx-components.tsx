import type { MDXComponents } from "mdx/types";
import Link from "next/link";

/**
 * Global MDX renderers — all `/comprendre/*` and other MDX pages use these
 * defaults so Markdown looks consistent with the design system.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1
        className="display"
        style={{
          fontSize: "clamp(40px, 5vw, 68px)",
          lineHeight: 1.04,
          letterSpacing: "-0.04em",
          margin: "0 0 24px 0",
        }}
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        className="font-bold tracking-[-0.03em] leading-[1.1] mt-16 mb-5 text-[var(--color-primary)]"
        style={{ fontSize: "clamp(28px, 2.6vw, 40px)" }}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-[22px] font-semibold tracking-[-0.02em] mt-10 mb-3 text-[var(--color-primary)]">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-[17px] text-[var(--color-text-2)] leading-[1.7] my-4">
        {children}
      </p>
    ),
    a: ({ href = "#", children }) => {
      const isInternal = href.startsWith("/");
      if (isInternal) {
        return (
          <Link
            href={href}
            className="text-[var(--color-secondary)] underline underline-offset-2 hover:text-[#006e46]"
          >
            {children}
          </Link>
        );
      }
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-secondary)] underline underline-offset-2 hover:text-[#006e46]"
        >
          {children}
        </a>
      );
    },
    ul: ({ children }) => (
      <ul className="my-5 ml-6 list-disc text-[16.5px] text-[var(--color-text-2)] leading-[1.65] space-y-2 marker:text-[var(--color-secondary)]">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="my-5 ml-6 list-decimal text-[16.5px] text-[var(--color-text-2)] leading-[1.65] space-y-2 marker:text-[var(--color-secondary)] marker:font-semibold">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="pl-1">{children}</li>,
    strong: ({ children }) => (
      <strong className="font-semibold text-[var(--color-primary)]">
        {children}
      </strong>
    ),
    em: ({ children }) => <em className="it not-italic">{children}</em>,
    blockquote: ({ children }) => (
      <blockquote className="my-8 pl-7 border-l-4 border-[var(--color-accent)] it text-[20px] text-[var(--color-primary)] leading-[1.5]">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="mono text-[14px] bg-[var(--color-bg)] border border-[var(--color-border)] py-0.5 px-1.5 rounded text-[var(--color-primary)]">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="my-6 p-5 bg-[var(--color-primary)] text-white/85 rounded-xl overflow-x-auto mono text-[13px] leading-[1.6]">
        {children}
      </pre>
    ),
    hr: () => (
      <hr className="my-12 border-0 h-px bg-[var(--color-border)]" />
    ),
    table: ({ children }) => (
      <div className="my-7 overflow-x-auto">
        <table className="w-full border-collapse text-[15px]">{children}</table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="border-b border-[var(--color-border)]">{children}</thead>
    ),
    th: ({ children }) => (
      <th className="text-left mono text-[11px] tracking-[0.08em] uppercase text-[var(--color-text-3)] py-3 px-3">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="py-3 px-3 text-[15px] text-[var(--color-text-2)] border-b border-[var(--color-border-2)] align-top">
        {children}
      </td>
    ),
    ...components,
  };
}
