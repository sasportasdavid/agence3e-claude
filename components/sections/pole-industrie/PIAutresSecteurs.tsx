import { autresSecteurs } from "@/content/poleIndustrie";

export function PIAutresSecteurs() {
  return (
    <section className="py-[var(--spacing-block-sm)]">
      <div className="container-x">
        <span className="eyebrow reveal">{autresSecteurs.eyebrow}</span>
        <h2 className="section-title reveal">
          {autresSecteurs.title.lead} <span className="it">{autresSecteurs.title.it}</span>
        </h2>

        <div className="grid grid-cols-4 gap-4 mt-16 max-[1100px]:grid-cols-2 max-sm:grid-cols-1">
          {autresSecteurs.tiles.map((tile) => (
            <div
              key={tile.num}
              className={`rounded-2xl p-6 transition-all duration-200 min-h-[140px] flex flex-col justify-between reveal ${
                tile.dark
                  ? "bg-[var(--color-primary)] text-white relative overflow-hidden border-0"
                  : "bg-white border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:-translate-y-0.5"
              }`}
            >
              {tile.dark && (
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(60% 80% at 100% 0%, rgba(245,197,24,0.18), transparent 60%)",
                  }}
                />
              )}
              <span
                className={`relative z-[1] mono text-[11px] tracking-[0.08em] ${
                  tile.dark ? "text-white/50" : "text-[var(--color-text-3)]"
                }`}
              >
                {tile.num}
              </span>
              <div className="relative z-[1]">
                <h4
                  className={`text-[17px] font-semibold tracking-[-0.015em] mt-3 ${
                    tile.dark ? "text-white" : ""
                  }`}
                >
                  {tile.title}
                </h4>
                <p
                  className={`text-[12.5px] mt-1.5 leading-[1.45] ${
                    tile.dark ? "text-white/70" : "text-[var(--color-text-2)]"
                  }`}
                >
                  {tile.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
