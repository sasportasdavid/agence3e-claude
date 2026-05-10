"use client";

/**
 * ContactAutoScroll — petit composant client utilitaire qui scroll
 * en douceur vers un élément cible après hydratation.
 *
 * Utilisé sur /contact pour amener l'utilisateur directement à la
 * card de son segment (industrie/tertiaire/résidentiel) ou au
 * formulaire générique selon les queryparams (?source / ?segment /
 * ?profil — cf. app/contact/page.tsx).
 *
 * Pourquoi un composant dédié plutôt qu'un useEffect inline ? La page
 * /contact reste un server component (metadata export, perf SSR), on
 * isole la logique client dans un sous-composant minimal.
 */

import { useEffect } from "react";

interface ContactAutoScrollProps {
  /** ID de l'élément cible. Vide → pas de scroll. */
  target: string;
}

export function ContactAutoScroll({ target }: ContactAutoScrollProps) {
  useEffect(() => {
    if (!target) return;
    // Petit délai pour laisser la page finir de render avant scroll —
    // évite le « scroll arrive avant la layout finale ».
    const timeoutId = window.setTimeout(() => {
      const el = document.getElementById(target);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 250);
    return () => window.clearTimeout(timeoutId);
  }, [target]);

  return null;
}
