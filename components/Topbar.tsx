export function Topbar() {
  return (
    <div className="bg-[var(--color-primary)] text-white/[0.78] text-[12.5px] tracking-[0.01em]">
      <div className="flex justify-between items-center py-[9px] px-8 max-w-[1440px] mx-auto">
        <div className="flex gap-5 items-center">
          <span>Cabinet de conseil énergétique</span>
          <span className="w-1 h-1 bg-[var(--color-accent)] rounded-full inline-block" />
          <span>France métropolitaine &amp; outre-mer</span>
        </div>
        <a
          href="/contact?source=topbar"
          className="text-white font-medium hover:text-[var(--color-accent)] transition-colors"
        >
          Demander un rappel sous 24 h →
        </a>
      </div>
    </div>
  );
}
