import Link from "next/link";

export function StickyMobileCTA() {
  return (
    <div className="hidden max-[1100px]:flex fixed bottom-0 left-0 right-0 bg-white border-t border-[var(--color-border)] py-3 px-4 z-[100] shadow-[0_-8px_24px_rgba(10,37,64,0.08)] items-center justify-between gap-3">
      <div className="flex flex-col">
        <span className="mono text-[10px] text-[var(--color-error)] tracking-[0.06em]">
          J–522 · Échéance DDADUE
        </span>
        <span className="text-[13px] font-semibold text-[var(--color-primary)]">
          Vérifier ma conformité
        </span>
      </div>
      <Link
        href="/contact"
        className="btn btn-primary"
        style={{ padding: "10px 16px", fontSize: 13 }}
      >
        Rappel 24h
      </Link>
    </div>
  );
}
