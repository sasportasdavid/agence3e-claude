export function Topbar() {
  return (
    <div className="bg-[var(--color-primary)] text-white/[0.78] text-[12.5px] tracking-[0.01em]">
      <div className="flex justify-between items-center py-[9px] px-8 max-w-[1440px] mx-auto">
        <div className="flex gap-5 items-center">
          <span>Cabinet de conseil énergétique</span>
          <span className="w-1 h-1 bg-[var(--color-accent)] rounded-full inline-block" />
          <span>France métropolitaine &amp; outre-mer</span>
        </div>
        <a href="tel:0123456789" className="text-white font-medium">
          01 23 45 67 89 — Lun-Ven 9h-18h
        </a>
      </div>
    </div>
  );
}
