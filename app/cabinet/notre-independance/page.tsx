/* URL transitionnelle /cabinet/notre-independance → redirige (308) vers
   /a-propos/notre-independance.

   La page Gouvernance a été migrée sous /a-propos/ pour cohérence avec
   /a-propos/notre-mission, /a-propos/notre-equipe, /a-propos/nos-engagements
   et /a-propos/recrutement déjà existants. */
import { permanentRedirect } from "next/navigation";

export default function CabinetIndependanceLegacy(): never {
  permanentRedirect("/a-propos/notre-independance");
}
