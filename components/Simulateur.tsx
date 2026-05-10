"use client";

import { useState } from "react";
import Link from "next/link";
import {
  SEGMENTS,
  SUBSEGMENTS,
  OPERATIONS,
  CLIMATIC_ZONES,
  ENGAGEMENT_YEARS,
  QPV_OPTIONS,
  STEP_LABELS,
  type Segment,
  type SubSegment,
  type Operation,
} from "@/content/simulateur";
import { submitLead } from "@/app/actions/leads";

type Phase = "form" | "calc" | "result";

const SEG_LABELS: Record<Segment, string> = {
  industrie: "l'Industrie",
  tertiaire: "le Tertiaire",
  residentiel: "le Résidentiel",
};

export function Simulateur() {
  const [step, setStep] = useState(1);
  const [segment, setSegment] = useState<Segment | null>(null);
  const [subsegment, setSubsegment] = useState<SubSegment | null>(null);
  const [operation, setOperation] = useState<Operation | null>(null);
  const [phase, setPhase] = useState<Phase>("form");
  const [simRef, setSimRef] = useState("1428");

  function selectSegment(s: Segment) {
    setSegment(s);
    setStep(2);
  }
  function selectSubsegment(idx: number) {
    if (!segment) return;
    setSubsegment(SUBSEGMENTS[segment][idx]);
    setStep(3);
  }
  function selectOperation(idx: number) {
    if (!segment) return;
    setOperation(OPERATIONS[segment][idx]);
    setStep(4);
    setPhase("form");
  }
  function goBack() {
    if (step <= 1) return;
    if (step === 4 && phase !== "form") {
      setPhase("form");
      return;
    }
    setStep(step - 1);
  }
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPhase("calc");
    const ref = String(Math.floor(1000 + Math.random() * 9000));
    setSimRef(ref);

    // Fire the server action with the form data + selection context
    const fd = new FormData(e.currentTarget);
    fd.set("segment", segment ?? "");
    fd.set("subsegment", subsegment?.name ?? "");
    fd.set("operation", operation?.name ?? "");
    fd.set("operation_ref", operation?.ref ?? "");
    fd.set("sim_ref", `SIM-CEE-2026-${ref}`);
    void submitLead("simulateur-cee", fd).catch((err) => {
      console.error("[simulateur] lead submission failed", err);
    });

    window.setTimeout(() => setPhase("result"), 1700);
  }

  const auroreOpacity = step === 1 ? 0.55 : 0.35;

  return (
    <div className="min-h-screen bg-[#F4F0E8] relative overflow-x-hidden">
      <BackgroundAurore opacity={auroreOpacity} />

      <div className="relative z-[1] max-w-[920px] mx-auto py-10 px-6 max-sm:py-6 max-sm:px-4 min-h-screen flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center gap-5 flex-wrap mb-8">
          <div className="flex gap-2.5 items-center">
            <Link
              href="/"
              className="w-8 h-8 rounded-lg bg-[var(--color-primary)] flex items-center justify-center text-white font-bold text-[13px] tracking-[-0.02em]"
            >
              3E
            </Link>
            <div>
              <div className="font-semibold tracking-[-0.02em] text-sm">
                Agence 3E
              </div>
            </div>
            <span className="mono text-[10.5px] text-[var(--color-text-3)] ml-2.5 pl-3 border-l border-[var(--color-border)]">
              Simulateur CEE
            </span>
          </div>
          <button
            type="button"
            onClick={goBack}
            disabled={step === 1}
            className={`mono text-[11.5px] text-[var(--color-text-2)] bg-white border border-[var(--color-border)] py-2 px-3.5 rounded-lg inline-flex items-center gap-2 tracking-[0.04em] transition-all ${
              step === 1
                ? "opacity-35 pointer-events-none"
                : "cursor-pointer hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:-translate-x-0.5"
            }`}
          >
            <span>←</span>
            <span>Retour</span>
          </button>
        </div>

        {/* Progress */}
        <div className="bg-white border border-[var(--color-border)] rounded-xl py-4 px-5 mb-7 grid grid-cols-[auto_1fr_auto] gap-[18px] items-center max-sm:grid-cols-1 max-sm:gap-2.5">
          <div
            className="it text-[24px] text-[var(--color-primary)] leading-none tracking-[-0.02em]"
            style={{ fontFeatureSettings: '"tnum" 1' }}
          >
            {step}
            <span className="text-[var(--color-text-3)] text-base"> / 4</span>
          </div>
          <div className="flex gap-1.5">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`flex-1 h-1.5 rounded-[3px] transition-colors duration-300 ${
                  i < step
                    ? "bg-[var(--color-secondary)]"
                    : i === step
                      ? "bg-[linear-gradient(90deg,var(--color-secondary)_0%,var(--color-accent)_100%)]"
                      : "bg-[var(--color-border-2)]"
                }`}
              />
            ))}
          </div>
          <div className="mono text-[10.5px] text-[var(--color-text-3)] tracking-[0.06em] uppercase whitespace-nowrap max-sm:hidden">
            {STEP_LABELS[step]}
          </div>
        </div>

        {/* Step container */}
        <div className="bg-white rounded-2xl border border-[rgba(10,37,64,0.06)] shadow-[0_1px_0_rgba(10,37,64,0.04),0_12px_32px_-12px_rgba(10,37,64,0.18),0_40px_80px_-30px_rgba(10,37,64,0.18)] py-9 px-9 flex-1 flex flex-col max-sm:py-6 max-sm:px-5">
          {step === 1 && <Step1 onPick={selectSegment} />}
          {step === 2 && segment && (
            <Step2 segment={segment} onPick={selectSubsegment} />
          )}
          {step === 3 && segment && subsegment && (
            <Step3
              segment={segment}
              subsegment={subsegment}
              onPick={selectOperation}
            />
          )}
          {step === 4 && operation && (
            <Step4
              operation={operation}
              phase={phase}
              simRef={simRef}
              onSubmit={submit}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function BackgroundAurore({ opacity }: { opacity: number }) {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-500"
      style={{ opacity }}
      aria-hidden
    >
      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="aurB-1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5BC290" />
            <stop offset="50%" stopColor="#FFD86B" />
            <stop offset="100%" stopColor="#9FD86B" />
          </linearGradient>
          <linearGradient id="aurB-2" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFB668" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#5BC290" stopOpacity="0.5" />
          </linearGradient>
          <filter id="aurB-blur">
            <feGaussianBlur stdDeviation="80" />
          </filter>
        </defs>
        <g filter="url(#aurB-blur)" opacity="0.7">
          <ellipse cx="280" cy="180" rx="500" ry="320" fill="url(#aurB-1)" />
        </g>
        <g
          filter="url(#aurB-blur)"
          opacity="0.5"
          style={{ mixBlendMode: "multiply" }}
        >
          <ellipse cx="1320" cy="700" rx="450" ry="280" fill="url(#aurB-2)" />
        </g>
      </svg>
    </div>
  );
}

function StepHeader({
  step,
  title,
  italic,
  lede,
}: {
  step: number;
  title: string;
  italic: string;
  lede: string;
}) {
  return (
    <>
      <span className="mono text-[10.5px] tracking-[0.12em] uppercase text-[var(--color-text-3)] inline-flex items-center gap-2 mb-2 before:content-[''] before:w-4 before:h-px before:bg-[var(--color-text-3)]">
        Étape {step} sur 4
      </span>
      <h1 className="text-[30px] font-bold tracking-[-0.025em] leading-[1.12] m-0 mb-2.5 max-sm:text-[24px]">
        {title} <span className="it text-[32px] max-sm:text-[26px]">{italic}</span>
      </h1>
      <p className="text-sm text-[var(--color-text-2)] m-0 mb-7 max-w-[580px]">
        {lede}
      </p>
    </>
  );
}

function Step1({ onPick }: { onPick: (s: Segment) => void }) {
  return (
    <>
      <StepHeader
        step={1}
        title="Quel est votre"
        italic="segment ?"
        lede="Trois univers, trois logiques de prime CEE. Chaque segment ouvre un catalogue de fiches éligibles spécifique."
      />
      <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-1">
        {SEGMENTS.map((s) => (
          <button
            type="button"
            key={s.key}
            onClick={() => onPick(s.key)}
            className="relative rounded-[14px] py-[26px] px-[22px] cursor-pointer overflow-hidden border-2 border-transparent bg-white flex flex-col min-h-[280px] text-left transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_36px_-16px_rgba(10,37,64,0.25)] hover:border-[var(--color-primary)] max-sm:min-h-[200px]"
          >
            <SegmentAurore variant={s.aurClass} />
            <span className="relative z-[1] mono text-[10.5px] tracking-[0.1em] text-[var(--color-text-3)] uppercase">
              {s.num}
            </span>
            <div className="relative z-[1] text-[22px] font-semibold tracking-[-0.02em] leading-[1.15] mt-2.5 text-[var(--color-primary)]">
              <span className="it text-[24px]">{s.name}</span>
            </div>
            <div className="relative z-[1] text-[12.5px] text-[var(--color-text-2)] mt-2 leading-[1.5]">
              {s.desc}
            </div>
            <div className="relative z-[1] mt-auto pt-5 flex justify-between items-baseline gap-3.5">
              <div>
                <div className="mono text-[9.5px] tracking-[0.08em] uppercase text-[var(--color-text-3)]">
                  Fiches CEE
                </div>
                <div
                  className="it text-[18px] text-[var(--color-primary)]"
                  style={{ fontFeatureSettings: '"tnum" 1' }}
                >
                  {s.fiches}
                </div>
              </div>
              <span className="mono text-[11px] text-[var(--color-secondary)]">
                Continuer →
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* v3.1 — Porte de sortie étape 1 : profils mixtes / atypiques.
          Diagnostic simulateurs §1.1 P0 cul-de-sac #1. */}
      <EscapeHatch
        title="Aucun de ces 3 segments ne correspond ?"
        body="Profil mixte (industrie + tertiaire), foncière, bailleur social, opérateur public, DOM hors résidentiel — décrivez-nous votre cas, notre BE revient sous 24 h ouvrées."
        href="/contact?source=simulateur&step=1"
      />
    </>
  );
}

function SegmentAurore({
  variant,
}: {
  variant: "industrie" | "tertiaire" | "residentiel";
}) {
  const palettes = {
    industrie: {
      g1: ["#FF8B6B", "#F7A85A", "#FFD86B"],
      blob: "#FF6E8A",
    },
    tertiaire: {
      g1: ["#6E91D8", "#8B7DD8", "#A8C5F0"],
      blob: "#5A6FB8",
    },
    residentiel: {
      g1: ["#5BC290", "#9FD86B", "#F5DD8A"],
      blob: "#4CC18E",
    },
  } as const;
  const p = palettes[variant];
  const id = `aurC-${variant}`;
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <svg
        viewBox="0 0 400 400"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={p.g1[0]} stopOpacity="0.55" />
            <stop offset="50%" stopColor={p.g1[1]} stopOpacity="0.55" />
            <stop offset="100%" stopColor={p.g1[2]} stopOpacity="0.55" />
          </linearGradient>
          <filter id={`${id}-blur`}>
            <feGaussianBlur stdDeviation="35" />
          </filter>
        </defs>
        <g filter={`url(#${id}-blur)`}>
          <ellipse cx="120" cy="120" rx="180" ry="140" fill={`url(#${id})`} />
        </g>
        <g filter={`url(#${id}-blur)`} style={{ mixBlendMode: "multiply" }}>
          <ellipse cx="320" cy="320" rx="160" ry="120" fill={p.blob} fillOpacity="0.3" />
        </g>
      </svg>
    </div>
  );
}

function Step2({
  segment,
  onPick,
}: {
  segment: Segment;
  onPick: (idx: number) => void;
}) {
  const items = SUBSEGMENTS[segment];
  const lede = `Vous avez choisi ${SEG_LABELS[segment]}. Quel sous-secteur correspond le mieux à votre activité ?`;
  return (
    <>
      <StepHeader
        step={2}
        title="Précisez votre"
        italic="activité."
        lede={lede}
      />
      <div className="grid grid-cols-2 gap-2.5 max-sm:grid-cols-1">
        {items.map((s, i) => (
          <button
            key={s.name}
            type="button"
            onClick={() => onPick(i)}
            className="text-left bg-white border border-[var(--color-border)] rounded-[10px] py-4 px-[18px] cursor-pointer grid grid-cols-[1fr_auto] gap-x-3.5 gap-y-2 items-center transition-all duration-200 hover:border-[var(--color-primary)] hover:-translate-y-px hover:shadow-[0_6px_16px_-6px_rgba(10,37,64,0.12)]"
          >
            <div className="text-[14.5px] font-medium text-[var(--color-primary)]">
              {s.name}
            </div>
            {s.tag ? (
              <span className="mono text-[10.5px] text-[var(--color-secondary)] py-[3px] px-2 bg-[var(--color-secondary-10)] rounded-full tracking-[0.04em]">
                {s.tag}
              </span>
            ) : (
              <span />
            )}
            <div className="mono text-[10px] text-[var(--color-text-3)] tracking-[0.04em] col-span-2">
              {s.meta}
            </div>
          </button>
        ))}
      </div>

      {/* v3.1 — Porte de sortie étape 2 : sous-secteur non listé. */}
      <EscapeHatch
        title="Mon secteur n'est pas dans cette liste."
        body={`En ${SEG_LABELS[segment]}, on couvre les principaux sous-segments — mais pas tous. Verre, métallurgie spécifique, niche industrielle, segment hybride : décrivez-nous votre activité, on adapte.`}
        href={`/contact?source=simulateur&step=2&segment=${segment}`}
        compact
      />
    </>
  );
}

function Step3({
  segment,
  subsegment,
  onPick,
}: {
  segment: Segment;
  subsegment: SubSegment;
  onPick: (idx: number) => void;
}) {
  const items = OPERATIONS[segment];
  const lede = `Catalogue filtré pour : ${subsegment.name}. Sélectionnez l'opération principale — vous pourrez en cumuler plusieurs ensuite.`;
  return (
    <>
      <StepHeader
        step={3}
        title="Quelle"
        italic="opération souhaitez-vous valoriser ?"
        lede={lede}
      />
      <div className="flex flex-col gap-2.5">
        {items.map((op, i) => (
          <button
            key={op.name}
            type="button"
            onClick={() => onPick(i)}
            className="text-left bg-white border border-[var(--color-border)] rounded-xl py-4 px-[18px] cursor-pointer grid grid-cols-[48px_1fr_auto] gap-4 items-center transition-all duration-200 hover:border-[var(--color-primary)] hover:-translate-y-px hover:shadow-[0_6px_16px_-6px_rgba(10,37,64,0.12)] group max-sm:grid-cols-[40px_1fr]"
          >
            <div
              className={`w-12 h-12 rounded-[10px] flex items-center justify-center mono text-[9.5px] font-medium text-center leading-[1.1] tracking-[0.04em] px-1 ${
                op.popular
                  ? "bg-[var(--color-pastel-green)] text-[#006e46]"
                  : "bg-[var(--color-pastel-blue)] text-[var(--color-primary)]"
              }`}
            >
              {op.ref.split(" ")[0]}
            </div>
            <div>
              <div className="text-[14.5px] font-semibold text-[var(--color-primary)] tracking-[-0.01em]">
                {op.name}
              </div>
              <div className="mono text-[10.5px] text-[var(--color-text-3)] tracking-[0.04em] mt-1">
                {op.ref}
              </div>
              {op.tags.length > 0 && (
                <div className="flex gap-1.5 flex-wrap mt-2">
                  {op.tags.map((t) => (
                    <span
                      key={t}
                      className={`mono text-[9.5px] py-[2px] px-2 rounded tracking-[0.04em] ${
                        t.includes("ROI") || t.includes("Quick")
                          ? "bg-[var(--color-secondary-10)] text-[#006e46]"
                          : "bg-[#F4F0E8] text-[var(--color-text-3)]"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <span className="mono text-xs text-[var(--color-text-3)] group-hover:text-[var(--color-primary)] max-sm:hidden">
              →
            </span>
          </button>
        ))}
      </div>

      {/* v3.1 — Porte de sortie étape 3 : opération hors catalogue. */}
      <EscapeHatch
        title="Aucune de ces opérations ne me correspond."
        body="Le catalogue CEE compte 218 fiches actives — on n'en affiche que 7-8 par segment ici. Si votre opération n'est pas listée, ou si vous cumulez plusieurs travaux, parlez-nous-en : notre BE ouvre toutes les fiches éligibles."
        href={`/contact?source=simulateur&step=3&segment=${segment}&subsegment=${encodeURIComponent(subsegment.name)}`}
        compact
      />
    </>
  );
}

/* ──────────────────────────────────────────────────────────────
 * EscapeHatch — porte de sortie sobre sous chaque étape.
 * Évite les cul-de-sac UX (cf. diagnostic_simulateurs.md).
 * ──────────────────────────────────────────────────────────── */

function EscapeHatch({
  title,
  body,
  href,
  compact = false,
}: {
  title: string;
  body: string;
  href: string;
  compact?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group mt-${compact ? "5" : "7"} flex items-start gap-3.5 py-4 px-[18px] rounded-xl bg-[var(--color-pastel-blue)]/40 border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:bg-[var(--color-pastel-blue)]/60 transition-colors`}
    >
      <span
        className="text-[20px] leading-none mt-px shrink-0"
        aria-hidden
      >
        💬
      </span>
      <div className="flex-1 min-w-0">
        <div className="text-[13.5px] font-semibold text-[var(--color-primary)] tracking-[-0.005em]">
          {title}
        </div>
        <p className="text-[12px] text-[var(--color-text-2)] mt-1 leading-[1.55]">
          {body}
        </p>
      </div>
      <span className="mono text-[11px] text-[var(--color-primary)] shrink-0 self-center group-hover:translate-x-0.5 transition-transform">
        Parler à un expert →
      </span>
    </Link>
  );
}

function Step4({
  operation,
  phase,
  simRef,
  onSubmit,
}: {
  operation: Operation;
  phase: Phase;
  simRef: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  if (phase === "calc") return <CalcLoader />;
  if (phase === "result") return <ResultBlock simRef={simRef} />;

  return (
    <div>
      <StepHeader
        step={4}
        title="Paramètres techniques"
        italic="& contact."
        lede="Quelques chiffres pour calculer votre prime CEE estimée. Le résultat s'affiche après validation."
      />
      <form onSubmit={onSubmit} className="grid grid-cols-1 gap-6">
        <fieldset className="border border-[var(--color-border)] rounded-xl py-6 px-[26px] bg-[#fafbfc]">
          <legend className="mono text-[10.5px] tracking-[0.1em] uppercase text-[var(--color-text-3)] mb-3.5">
            Paramètres techniques · <span className="text-[var(--color-primary)] normal-case tracking-normal">{operation.name}</span>
          </legend>
          <div className="grid grid-cols-2 gap-3.5 mb-3.5 max-sm:grid-cols-1">
            <FormField label="Puissance / quantité" hint="en kW · m² · m³/h selon fiche">
              <input
                type="number"
                placeholder="ex. 450"
                required
                className={INPUT_CLS}
              />
            </FormField>
            <FormField label="Zone climatique">
              <select required className={INPUT_CLS} defaultValue="">
                <option value="" disabled>Sélectionner</option>
                {CLIMATIC_ZONES.map((z) => (
                  <option key={z}>{z}</option>
                ))}
              </select>
            </FormField>
          </div>
          <div className="grid grid-cols-2 gap-3.5 max-sm:grid-cols-1">
            <FormField label="Année engagement travaux">
              <select required className={INPUT_CLS} defaultValue="">
                <option value="" disabled>Sélectionner</option>
                {ENGAGEMENT_YEARS.map((y) => (
                  <option key={y}>{y}</option>
                ))}
              </select>
            </FormField>
            <FormField label="Site classé QPV / RGE ?">
              <select required className={INPUT_CLS} defaultValue="">
                <option value="" disabled>Sélectionner</option>
                {QPV_OPTIONS.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </FormField>
          </div>
        </fieldset>
        <fieldset className="border border-[var(--color-border)] rounded-xl py-6 px-[26px] bg-[#fafbfc]">
          <legend className="mono text-[10.5px] tracking-[0.1em] uppercase text-[var(--color-text-3)] mb-3.5">
            Vos coordonnées
          </legend>
          <div className="grid grid-cols-2 gap-3.5 mb-3.5 max-sm:grid-cols-1">
            <FormField label="Nom · Prénom">
              <input type="text" placeholder="ex. Julie Morel" required className={INPUT_CLS} />
            </FormField>
            <FormField label="Société">
              <input type="text" placeholder="ex. Laiterie de Bretagne" required className={INPUT_CLS} />
            </FormField>
          </div>
          <div className="grid grid-cols-2 gap-3.5 mb-3.5 max-sm:grid-cols-1">
            <FormField label="Email professionnel">
              <input type="email" placeholder="vous@societe.fr" required className={INPUT_CLS} />
            </FormField>
            <FormField label="Téléphone" hint="pour la restitution chiffrée par notre BE">
              <input type="tel" placeholder="06 12 34 56 78" required className={INPUT_CLS} />
            </FormField>
          </div>
          <label className="flex gap-2.5 items-start text-[12.5px] text-[var(--color-text-2)] py-3.5 px-4 bg-[var(--color-pastel-blue)] rounded-lg leading-[1.5]">
            <input type="checkbox" required className="mt-[3px] shrink-0" />
            <span>
              J&apos;accepte qu&apos;Agence 3E me contacte sous 24 h avec une
              estimation chiffrée et personnalisée. Aucun engagement, aucune
              cession à des tiers. Voir{" "}
              <Link
                href="/politique-confidentialite-rgpd"
                className="text-[var(--color-primary)] underline"
              >
                politique de confidentialité
              </Link>
              .
            </span>
          </label>
        </fieldset>
        <button
          type="submit"
          className="w-full py-3.5 px-6 bg-[var(--color-secondary)] text-white border-0 rounded-[10px] text-[15px] font-semibold cursor-pointer transition-all hover:bg-[#008a58] hover:-translate-y-px hover:shadow-[0_8px_20px_-8px_rgba(0,168,107,0.5)] mt-2 inline-flex items-center justify-center gap-2.5"
        >
          <span>Calculer ma prime CEE</span>
          <span className="mono">→</span>
        </button>
      </form>
    </div>
  );
}

const INPUT_CLS =
  "w-full py-2.5 px-3.5 text-sm bg-white border border-[var(--color-border)] rounded-lg text-[var(--color-text)] outline-none transition-all focus:border-[var(--color-secondary)] focus:shadow-[0_0_0_3px_var(--color-secondary-10)]";

function FormField({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block mono text-[10px] tracking-[0.06em] uppercase text-[var(--color-text-2)] mb-1.5">
        {label}
      </label>
      {children}
      {hint && (
        <div className="mono text-[10px] text-[var(--color-text-3)] mt-[5px] tracking-[0.04em]">
          {hint}
        </div>
      )}
    </div>
  );
}

function CalcLoader() {
  return (
    <div className="flex flex-col items-center justify-center py-[60px] px-5 text-center flex-1">
      <div className="w-12 h-12 border-[3px] border-[var(--color-border)] border-t-[var(--color-secondary)] rounded-full mb-[22px] animate-spin motion-reduce:animate-none" />
      <div className="it text-[22px] text-[var(--color-primary)] tracking-[-0.01em]">
        Calcul de votre prime CEE…
      </div>
      <CalcStep delay={200}>Vérification éligibilité fiche</CalcStep>
      <CalcStep delay={700}>Calcul cumac selon barème T6</CalcStep>
      <CalcStep delay={1200}>Mise en compétition 5 délégataires</CalcStep>
    </div>
  );
}

function CalcStep({
  delay,
  children,
}: {
  delay: number;
  children: React.ReactNode;
}) {
  return (
    <div
      className="flex gap-2 items-center mono text-[11px] text-[var(--color-text-3)] mt-2 opacity-0 animate-[calcStep_0.4s_ease_forwards] before:content-['✓'] before:text-[var(--color-secondary)] before:font-bold motion-reduce:opacity-100 motion-reduce:animate-none"
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function ResultBlock({ simRef }: { simRef: string }) {
  return (
    <div className="flex flex-col flex-1">
      <div className="flex justify-between items-baseline gap-4 flex-wrap mb-2">
        <span className="mono text-[10.5px] py-[5px] px-3 bg-[var(--color-secondary-10)] text-[#006e46] rounded-full tracking-[0.06em] uppercase inline-flex items-center gap-1.5 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--color-secondary)] before:animate-[pulse_1.6s_infinite] motion-reduce:before:animate-none">
          Estimation calculée
        </span>
        <span className="mono text-[10.5px] text-[var(--color-text-3)]">
          SIM-CEE-2026-{simRef}
        </span>
      </div>
      <h2 className="text-[28px] font-bold tracking-[-0.025em] leading-[1.12] my-2 mb-[18px]">
        Votre prime CEE estimée
        <br />
        <span className="it text-[32px] text-[var(--color-secondary)]">
          52 800 €
        </span>
      </h2>

      <div className="bg-white rounded-[14px] overflow-hidden border border-[rgba(10,37,64,0.06)] shadow-[0_10px_30px_-10px_rgba(10,37,64,0.18)] mt-5">
        <div className="py-3 px-4 border-b border-[var(--color-border-2)] flex justify-between items-center bg-[#fafbfc]">
          <div className="flex gap-1.5">
            <span className="w-[9px] h-[9px] rounded-full bg-[#FF6058]" />
            <span className="w-[9px] h-[9px] rounded-full bg-[#FFBD2E]" />
            <span className="w-[9px] h-[9px] rounded-full bg-[#28C941]" />
          </div>
          <span className="mono text-[10.5px] text-[var(--color-text-3)]">
            SYNTHESE_CEE_{simRef}.pdf
          </span>
        </div>
        <div className="py-7 px-[30px]">
          <div className="mono text-[10px] text-[var(--color-text-3)] tracking-[0.1em] uppercase">
            Réf. simulation · estimation barème T6 · 2026
          </div>
          <div className="text-[18px] font-semibold tracking-[-0.02em] my-1.5 mb-[18px]">
            Synthèse opération · prime CEE estimée
          </div>

          <div className="rounded-xl py-6 px-[26px] mb-[22px] relative overflow-hidden bg-[linear-gradient(135deg,var(--color-pastel-green)_0%,var(--color-pastel-yellow)_100%)]">
            <div
              className="absolute -top-[50px] -right-[50px] w-[200px] h-[200px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(0,168,107,0.2), transparent 70%)",
              }}
            />
            <div className="mono text-[10px] tracking-[0.1em] uppercase text-[var(--color-primary)] relative">
              Prime CEE estimée — versée au client
            </div>
            <div
              className="it text-[var(--color-primary)] leading-none tracking-[-0.03em] my-3 mb-1.5 relative"
              style={{
                fontSize: "clamp(48px, 8vw, 72px)",
                fontFeatureSettings: '"tnum" 1',
              }}
            >
              52 800 €
            </div>
            <div className="text-[13px] text-[var(--color-text-2)] relative">
              <strong className="text-[var(--color-primary)]">+18 % à +25 %</strong>{" "}
              potentiellement gagnés via mise en compétition de 5 délégataires.
            </div>
          </div>

          <div className="grid grid-cols-3 gap-px bg-[var(--color-border)] border border-[var(--color-border)] rounded-[10px] overflow-hidden max-sm:grid-cols-2">
            <SynthesisCell label="Cumac" value="6,77 GWh" hint="cumac actualisés" />
            <SynthesisCell label="Coût travaux estimé" value="128 000 €" hint="CAPEX HT" />
            <SynthesisCell label="ROI net post-CEE" value="2,4 ans" hint="post-prime · post-aides" />
          </div>

          <div className="mt-[18px] pt-3.5 border-t border-dashed border-[var(--color-border)] flex justify-between items-center mono text-[10px] text-[var(--color-text-3)] tracking-[0.04em] max-sm:flex-col max-sm:gap-1.5 max-sm:items-start">
            <span>Estimation indicative · barème CEE T6 · 7,80 €/MWh cumac</span>
            <span>Agence 3E · OPQIBI 1905</span>
          </div>
        </div>
      </div>

      <div className="mt-[22px] grid grid-cols-2 gap-3 max-sm:grid-cols-1">
        <Link
          href="/contact"
          className="py-3 px-5 rounded-[10px] text-sm font-medium text-center bg-[var(--color-primary)] text-white inline-flex items-center justify-center gap-2 hover:bg-[#1a3856] hover:-translate-y-px transition-all"
        >
          <span>Demander une étude détaillée</span>
          <span>→</span>
        </Link>
        <button
          type="button"
          className="py-3 px-5 rounded-[10px] text-sm font-medium bg-white text-[var(--color-text)] border border-[var(--color-border)] inline-flex items-center justify-center gap-2 hover:border-[var(--color-primary)] cursor-pointer"
        >
          Télécharger la synthèse PDF
        </button>
      </div>

      <div className="mt-[18px] py-3.5 px-4 bg-[var(--color-pastel-yellow)] rounded-lg text-[12.5px] text-[var(--color-text-2)] leading-[1.55]">
        <strong className="text-[var(--color-primary)]">
          Estimation non contractuelle.
        </strong>{" "}
        Le montant exact dépend du cours négocié, de la qualité technique des
        justificatifs, du choix du délégataire et de l&apos;antériorité de
        l&apos;engagement. Notre BE vous recontacte sous 24 h pour une
        restitution chiffrée et personnalisée.
      </div>
    </div>
  );
}

function SynthesisCell({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint: string;
}) {
  return (
    <div className="py-3.5 px-4 bg-white">
      <div className="mono text-[9.5px] tracking-[0.1em] uppercase text-[var(--color-text-3)]">
        {label}
      </div>
      <div
        className="it text-[22px] text-[var(--color-primary)] mt-1.5 leading-none tracking-[-0.02em]"
        style={{ fontFeatureSettings: '"tnum" 1' }}
      >
        {value}
      </div>
      <div className="mono text-[9.5px] text-[var(--color-text-3)] mt-1">
        {hint}
      </div>
    </div>
  );
}
