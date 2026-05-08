import type { Metadata } from "next";
import { Simulateur } from "@/components/Simulateur";

export const metadata: Metadata = {
  title: "Simulateur CEE — Estimer ma prime en 4 questions | Agence 3E",
  description:
    "Estimez votre prime CEE en 4 étapes : segment, sous-secteur, opération, paramètres. Restitution chiffrée par notre bureau d'études sous 24 h.",
  alternates: { canonical: "/simulateur-cee" },
};

export default function SimulateurPage() {
  return <Simulateur />;
}
