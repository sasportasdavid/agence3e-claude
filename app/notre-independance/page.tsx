/* v2 — URL legacy /notre-independance → redirige (308) vers
   /a-propos/notre-independance (page de gouvernance, migrée sous
   /a-propos/ pour cohérence avec les autres pages cabinet). */
import { permanentRedirect } from "next/navigation";

export default function LegacyIndependancePage(): never {
  permanentRedirect("/a-propos/notre-independance");
}
