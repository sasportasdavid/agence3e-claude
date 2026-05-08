import type { Metadata } from "next";
import { Aurore } from "@/components/Aurore";
import { Breadcrumb } from "@/components/Breadcrumb";
import { BlogList } from "./BlogList";

export const metadata: Metadata = {
  title: "Blog — Audit énergétique, CEE, DDADUE | Agence 3E",
  description:
    "Articles techniques et pédagogiques sur l'audit énergétique DDADUE, les CEE, les gisements industriels et tertiaires.",
  alternates: { canonical: "/ressources/blog" },
};

export default function BlogIndexPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { href: "/", label: "Accueil" },
          { href: "/", label: "Ressources" },
          { label: "Blog" },
        ]}
      />

      <main>
        <section className="relative pt-[60px] pb-[var(--spacing-block-sm)] overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-[600px] opacity-45 pointer-events-none -z-[1]">
            <Aurore variant="ressources" className="w-full h-full" />
          </div>
          <div className="container-x">
            <span className="eyebrow reveal">Ressources · Blog</span>
            <h1
              className="display reveal mt-6"
              style={{
                fontSize: "clamp(48px, 5.4vw, 72px)",
                lineHeight: 1.04,
                letterSpacing: "-0.04em",
              }}
            >
              Notre blog,
              <br />
              <span className="it">technique et pédagogique.</span>
            </h1>
            <p className="text-[19px] text-[var(--color-text-2)] mt-7 max-w-[680px] leading-[1.55] reveal">
              Articles de fond sur la réglementation DDADUE, le mécanisme CEE,
              les gisements sectoriels et les retours d&apos;expérience de nos
              missions. 6 catégories, filtre ci-dessous.
            </p>
          </div>
        </section>

        <section className="pb-[var(--spacing-block)]">
          <BlogList />
        </section>
      </main>
    </>
  );
}
