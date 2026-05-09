/**
 * Three small "document" mockups slotted into the bottom of each pastel
 * promise card on the home page:
 *  - MockupPDF      : audit PDF page (rose card)
 *  - MockupTable    : tableau cumac (blue card)
 *  - MockupDash     : dashboard CEE (green card)
 *
 * They are visual props — no real data. Layout is identical to the
 * Maquette 2 v4 source.
 */

const SHARED =
  "bg-white rounded-t-xl shadow-[0_-8px_24px_-8px_rgba(10,37,64,0.10)] mx-4 overflow-hidden h-[220px] relative";

export function MockupPDF() {
  return (
    <div className={`${SHARED} px-[22px] pt-6 pb-[22px]`}>
      <span className="mono absolute top-2 right-3 text-[9px] text-[var(--color-text-3)] tracking-[0.06em]">
        AUDIT_DDADUE_v3.pdf
      </span>
      <div className="mono text-[9px] text-[#FF8FA3] tracking-[0.12em] uppercase">
        Section 4.2 — Synthèse
      </div>
      <div className="text-sm font-semibold text-[var(--color-primary)] mt-1.5 tracking-[-0.01em] leading-tight">
        Site IAA Bretagne · 4,2 GWh/an
      </div>
      <div className="h-px bg-[var(--color-border-2)] my-3.5 mb-3" />
      <Row label="Conso totale auditée" value="4 218 MWh" />
      <Row label="Gisement identifié" value="1 248 MWh" />
      <Row label="Préconisations" value="7 actions" />
      <div className="mt-3.5 h-8 rounded relative flex items-center px-2.5 bg-[linear-gradient(90deg,#FCE4E4_0%,#FCE4E4_38%,#f3f4f6_38%,#f3f4f6_100%)]">
        <span className="mono text-[9px] text-[var(--color-primary)] font-medium">
          Couverture CEE 38%
        </span>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-baseline mb-2">
      <span className="text-[10px] text-[var(--color-text-2)]">{label}</span>
      <span className="it text-[14px] text-[var(--color-primary)]">{value}</span>
    </div>
  );
}

export function MockupTable() {
  return (
    <div className={`${SHARED} pt-4`}>
      <div className="grid grid-cols-[1.4fr_0.7fr_0.8fr_0.7fr] px-[18px] pb-2.5 border-b border-[var(--color-border-2)] mono text-[9px] text-[var(--color-text-3)] tracking-[0.08em] uppercase">
        <span>Fiche · Opération</span>
        <span>kWh cumac</span>
        <span>Type</span>
        <span>ROI</span>
      </div>
      <TableRow
        refId="IND-UT-117"
        op="Récup. chaleur GF"
        cumac="2 480 000"
        type="Process froid"
        roi="2,1 ans"
      />
      <TableRow
        refId="IND-UT-134"
        op="Calorifugeage"
        cumac="620 000"
        type="Réseau"
        roi="1,4 ans"
      />
      <TableRow
        refId="IND-UT-103"
        op="Variation vitesse"
        cumac="1 480 000"
        type="Motorisation"
        roi="2,9 ans"
      />
      <div className="grid grid-cols-[1.4fr_0.7fr_0.8fr_0.7fr] py-2.5 px-[18px] border-b border-[var(--color-border-2)] text-[11px] font-semibold bg-[var(--color-pastel-blue)]">
        <div>Total programme</div>
        <div>4 580 000</div>
        <div className="text-[var(--color-text-2)] font-normal">3 opérations</div>
        <div>2,4 ans moy.</div>
      </div>
    </div>
  );
}

function TableRow({
  refId,
  op,
  cumac,
  type,
  roi,
}: {
  refId: string;
  op: string;
  cumac: string;
  type: string;
  roi: string;
}) {
  return (
    <div className="grid grid-cols-[1.4fr_0.7fr_0.8fr_0.7fr] py-2.5 px-[18px] border-b border-[var(--color-border-2)] text-[11px] text-[var(--color-text)]">
      <div>
        <span className="mono text-[var(--color-primary)] text-[10px] font-medium">
          {refId}
        </span>
        <div className="text-[10.5px] text-[var(--color-text-2)] mt-0.5">{op}</div>
      </div>
      <div>{cumac}</div>
      <div className="text-[var(--color-text-2)]">{type}</div>
      <div>{roi}</div>
    </div>
  );
}

export function MockupDash() {
  return (
    <div className={`${SHARED} pt-[18px]`}>
      <div className="flex gap-3.5 px-[18px] pb-3 border-b border-[var(--color-border-2)] mono text-[10px] text-[var(--color-text-3)]">
        <span className="text-[var(--color-primary)] relative">
          Dossiers actifs
          <span className="absolute -bottom-[13px] left-0 right-0 h-0.5 bg-[var(--color-secondary)]" />
        </span>
        <span>Archivés</span>
      </div>
      <div className="py-1.5">
        <DashRow status="live" refId="CASE-001" name="Laiterie Bretagne" stat="Prime versée" />
        <DashRow status="wait" refId="CASE-007" name="Plasturgie Lyon" stat="Délégataire 3/5" />
        <DashRow status="done" refId="CASE-012" name="Datacenter IDF" stat="Dossier clos" />
        <DashRow status="live" refId="CASE-018" name="Blanchisserie 13" stat="Audit en cours" />
      </div>
    </div>
  );
}

function DashRow({
  status,
  refId,
  name,
  stat,
}: {
  status: "live" | "wait" | "done";
  refId: string;
  name: string;
  stat: string;
}) {
  const pillClass =
    status === "live"
      ? "bg-[var(--color-secondary)] shadow-[0_0_0_3px_var(--color-secondary-10)]"
      : status === "wait"
        ? "bg-[var(--color-accent)] shadow-[0_0_0_3px_#fef7d9]"
        : "bg-[var(--color-text-3)]";
  return (
    <div className="grid grid-cols-[auto_1fr_auto] py-2.5 px-[18px] gap-3 items-center border-b border-[var(--color-border-2)] text-[11px]">
      <span className={`w-2 h-2 rounded-full ${pillClass}`} />
      <div>
        <span className="mono text-[10px] text-[var(--color-primary)]">{refId}</span>
        <div className="text-[var(--color-text)] font-medium">{name}</div>
      </div>
      <span className="mono text-[10px] text-[var(--color-text-2)] tracking-[0.04em]">
        {stat}
      </span>
    </div>
  );
}
