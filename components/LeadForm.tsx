"use client";

import { useActionState } from "react";
import { submitLead, type LeadResult, type LeadSource } from "@/app/actions/leads";

interface LeadFormProps {
  source: LeadSource;
  children: React.ReactNode;
  className?: string;
  /** rendered when submission succeeds */
  successCard?: (result: LeadResult) => React.ReactNode;
}

const INITIAL: LeadResult = { ok: false, message: "" };

/**
 * LeadForm — wraps any form fields with a Server Action submission +
 * success/error rendering. Replaces a bare <form>.
 */
export function LeadForm({
  source,
  children,
  className,
  successCard,
}: LeadFormProps) {
  const [state, formAction, pending] = useActionState(
    async (_: LeadResult, formData: FormData) => submitLead(source, formData),
    INITIAL,
  );

  if (state.ok) {
    if (successCard) return <>{successCard(state)}</>;
    return <DefaultSuccess result={state} />;
  }

  return (
    <form action={formAction} className={className}>
      {children}
      {/* Inline error if any */}
      {!state.ok && state.message && (
        <div
          role="alert"
          className="col-span-2 max-[1100px]:col-span-1 mt-2 py-3 px-4 bg-[#fbe9e9] text-[var(--color-error)] text-[13px] rounded-lg"
        >
          {state.message}
        </div>
      )}
      <input type="hidden" name="_pending" value={String(pending)} />
    </form>
  );
}

function DefaultSuccess({ result }: { result: LeadResult }) {
  return (
    <div
      role="status"
      className="bg-[var(--color-pastel-green)] rounded-2xl p-9 reveal"
    >
      <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] text-white flex items-center justify-center text-xl font-bold">
        ✓
      </div>
      <h3 className="text-[24px] font-bold tracking-[-0.025em] mt-5 text-[var(--color-primary)]">
        Demande enregistrée.
      </h3>
      <p className="text-[16px] text-[var(--color-text-2)] mt-3 leading-[1.55]">
        {result.message}
      </p>
      {result.ref && (
        <span className="mono text-[10.5px] text-[var(--color-text-3)] mt-4 block tracking-[0.06em]">
          Réf. {result.ref}
        </span>
      )}
    </div>
  );
}

/**
 * SubmitButton — bouton de soumission qui affiche un état "pending"
 * pendant l'exécution de la Server Action.
 */
import { useFormStatus } from "react-dom";

export function SubmitButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={`btn ${className} disabled:opacity-60 disabled:cursor-progress`}
      style={{ background: "var(--color-secondary)", color: "#fff" }}
    >
      {pending ? "Envoi en cours…" : children}
      {!pending && <span className="ml-1.5">→</span>}
    </button>
  );
}
