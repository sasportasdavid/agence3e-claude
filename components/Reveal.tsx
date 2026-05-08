"use client";

import { useEffect } from "react";

/**
 * Reveal-on-scroll wirer. Mounts once at root and adds `.in` to every
 * `.reveal` element when it enters the viewport — same behaviour as the
 * Maquette 2 v4 inline script (with the 400ms safety fallback).
 */
export function RevealRoot() {
  useEffect(() => {
    const all = document.querySelectorAll<HTMLElement>(".reveal");
    if (all.length === 0) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      all.forEach((el) => el.classList.add("in"));
      return;
    }

    const fallback = window.setTimeout(() => {
      all.forEach((el) => el.classList.add("in"));
    }, 400);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
        window.clearTimeout(fallback);
      },
      { threshold: 0.05 },
    );
    all.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return null;
}
