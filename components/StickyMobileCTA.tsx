import Link from "next/link";
import { DDADUECountdown } from "./DDADUECountdown";

/**
 * Sticky mobile CTA — visible en bas d'écran sur mobile.
 *
 * v3.3 :
 * - J-XXX dynamique via DDADUECountdown (variant inline) au lieu du
 *   J-522 statique précédent.
 * - Le bouton « Rappel 24h » pointe vers /contact (et non plus tel:),
 *   conformément au retrait du téléphone placeholder.
 */
export function StickyMobileCTA() {
  return (
    <div className="hidden max-[1100px]:flex fixed bottom-0 left-0 right-0 bg-white border-t border-[var(--color-border)] py-3 px-4 z-[100] shadow-[0_-8px_24px_rgba(10,37,64,0.08)] items-center justify-between gap-3">
      <div className="flex flex-col">
        <span className="mono text-[10px] text-[var(--color-error)] tracking-[0.06em]">
          <DDADUECountdown className="text-[10px] tracking-[0.06em]" />
          {" · Échéance DDADUE"}
        </span>
        <span className="text-[13px] font-semibold text-[var(--color-primary)]">
          Vérifier ma conformité
        </span>
      </div>
      <Link
        href="/contact?source=sticky-mobile"
        className="btn btn-primary"
        style={{ padding: "10px 16px", fontSize: 13 }}
      >
        Rappel 24 h
      </Link>
    </div>
  );
}
