import Link from "next/link";
import { poles } from "@/content/home";

export function PolesSection() {
  return (
    <section className="py-[var(--spacing-block-sm)]">
      <div className="container-x">
        <span className="eyebrow reveal">{poles.eyebrow}</span>
        <h2 className="section-title reveal">
          {poles.title.lead}
          <br />
          <span className="it">{poles.title.it}</span>
        </h2>

        <div className="grid grid-cols-[1.5fr_1fr_1fr] gap-6 mt-20 min-h-[520px] max-[1100px]:grid-cols-1">
          {poles.tiles.map((tile, i) => (
            <Link
              key={tile.href}
              href={tile.href}
              className={`rounded-3xl p-10 flex flex-col justify-between relative overflow-hidden transition-transform duration-300 hover:-translate-y-1 reveal ${
                tile.size === "lg"
                  ? "row-span-2 bg-[var(--color-primary)] text-white max-[1100px]:row-span-1"
                  : tile.size === "md"
                    ? "bg-[var(--color-pastel-violet)] text-[var(--color-primary)] min-h-[250px]"
                    : "bg-[var(--color-pastel-orange)] text-[var(--color-primary)] min-h-[250px]"
              }`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {tile.size === "lg" && (
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(60% 50% at 100% 0%, rgba(245,197,24,0.18), transparent 60%), radial-gradient(50% 50% at 0% 100%, rgba(0,168,107,0.20), transparent 60%)",
                  }}
                />
              )}
              <div className="relative z-[1]">
                <span
                  className={`mono text-[11px] tracking-[0.1em] uppercase ${
                    tile.size === "lg" ? "text-white/60" : "text-[var(--color-text-2)]"
                  }`}
                >
                  {tile.eyebrow}
                </span>
                <h3
                  className="font-bold tracking-[-0.03em] leading-[1.05] mt-3.5"
                  style={{
                    fontSize:
                      tile.size === "lg"
                        ? "clamp(40px, 3.2vw, 56px)"
                        : "clamp(28px, 2.4vw, 40px)",
                  }}
                >
                  {tile.title.lead}
                  {tile.title.it && (
                    <>
                      {" "}
                      <span className="it">{tile.title.it}</span>
                    </>
                  )}
                </h3>
                <p className="text-[15px] leading-[1.5] mt-4 max-w-[480px] opacity-85">
                  {tile.desc}
                </p>
              </div>
              <span className="relative z-[1] text-sm font-medium mt-7 inline-flex gap-2 items-center">
                {tile.cta}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
