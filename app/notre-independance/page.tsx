/* v2 — URL legacy /notre-independance → redirige (308) vers
   /cabinet/notre-independance (page restructurée Phase 2). */
import { permanentRedirect } from "next/navigation";

export default function LegacyIndependancePage(): never {
  permanentRedirect("/cabinet/notre-independance");
}
