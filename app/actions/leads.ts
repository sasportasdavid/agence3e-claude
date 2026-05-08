"use server";

/**
 * submitLead — Server Action partagée pour les 4 formulaires :
 *   - /contact (générique)
 *   - /pole-industrie (pré-qualif industrie)
 *   - /pole-residentiel (devis résidentiel)
 *   - /simulateur-cee (étape 4)
 *
 * Stub : log + simulate latency. Branchez ici votre destination réelle
 * (Resend, Supabase, HubSpot, Brevo, Make.com webhook, etc.).
 *
 * @see https://nextjs.org/docs/app/getting-started/mutating-data
 */

export type LeadSource =
  | "contact-generic"
  | "pole-industrie"
  | "pole-residentiel"
  | "simulateur-cee";

export interface LeadResult {
  ok: boolean;
  message: string;
  /** internal ref for traceability */
  ref?: string;
}

export async function submitLead(
  source: LeadSource,
  formData: FormData,
): Promise<LeadResult> {
  const fields: Record<string, string> = {};
  for (const [key, value] of formData.entries()) {
    if (typeof value === "string") fields[key] = value;
  }

  // Minimal validation — only require an email or phone to identify a lead.
  const hasContact =
    Boolean(fields.email && fields.email.includes("@")) ||
    Boolean(fields.phone || fields.tel);
  if (!hasContact) {
    return {
      ok: false,
      message:
        "Merci d'indiquer au moins un email valide ou un numéro de téléphone.",
    };
  }

  // Generate an internal reference.
  const ref = `LEAD-${source.toUpperCase()}-${Date.now().toString(36).toUpperCase()}`;

  // === BRANCHEMENT À COMPLÉTER PAR L'ÉQUIPE ===========================
  // Exemples de destinations possibles :
  //
  //   1) Resend → email à contact@agence3e.fr
  //      const { Resend } = await import("resend");
  //      await new Resend(process.env.RESEND_API_KEY).emails.send({...});
  //
  //   2) Supabase → table leads
  //      await supabase.from("leads").insert({ source, ref, ...fields });
  //
  //   3) Webhook Make.com / Zapier → routage CRM
  //      await fetch(process.env.MAKE_WEBHOOK_URL, {
  //        method: "POST",
  //        body: JSON.stringify({ source, ref, fields }),
  //      });
  //
  // Pour l'instant : log côté serveur et simulation de latence.
  // ====================================================================
  console.warn("[submitLead]", { source, ref, fields });
  await new Promise((r) => setTimeout(r, 300));

  return {
    ok: true,
    message:
      "Merci, votre demande est enregistrée. Notre équipe revient vers vous sous 24 h ouvrées.",
    ref,
  };
}
