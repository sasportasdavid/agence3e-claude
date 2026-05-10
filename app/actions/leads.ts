"use server";

/**
 * submitLead — Server Action partagée par les 4 formulaires :
 *   - /contact (générique)
 *   - /pole-industrie (pré-qualif industrie + pages /[slug])
 *   - /pole-residentiel (devis résidentiel)
 *   - /simulateur-cee (étape 4)
 *
 * Branchement Resend (v3) :
 *   1. Envoi d'une notification interne à `contact@agence3e.fr` avec
 *      la totalité des champs reçus + référence du lead.
 *   2. Envoi d'un accusé de réception au prospect (si email valide
 *      détecté) avec délai de réponse 24 h ouvrées.
 *
 * Le client Resend est instancié paresseusement pour ne pas crasher
 * le build si la clé n'est pas encore présente (Phase préview, .env
 * en local, etc.) — dans ce cas on retombe sur un log console.warn
 * comme avant et on retourne `ok: true` pour ne pas bloquer l'UX.
 *
 * Variables d'environnement requises (Vercel Settings → Env Vars) :
 *   - RESEND_API_KEY        clé `re_xxxxx` du compte Resend
 *   - RESEND_FROM           expéditeur vérifié (default `Agence 3E
 *                           <noreply@agence3e.fr>`)
 *   - RESEND_TO_INTERNAL    destinataire interne (default
 *                           `contact@agence3e.fr`)
 *
 * @see https://resend.com/docs/send-with-nextjs
 * @see https://nextjs.org/docs/app/getting-started/mutating-data
 */

import { Resend } from "resend";

export type LeadSource =
  | "contact-generic"
  | "pole-industrie"
  | "pole-residentiel"
  | "simulateur-cee";

export interface LeadResult {
  ok: boolean;
  message: string;
  /** Référence interne pour traçabilité (LEAD-...) */
  ref?: string;
}

const SOURCE_LABEL: Record<LeadSource, string> = {
  "contact-generic": "Contact générique",
  "pole-industrie": "Pré-qualification industrie",
  "pole-residentiel": "Devis résidentiel",
  "simulateur-cee": "Simulateur CEE — étape 4",
};

/**
 * Calcule le subject Resend en fonction de la source d'arrivée.
 *
 * Pour `contact-generic`, on regarde le champ hidden `source-detail`
 * (transmis par /contact à partir des queryparams ?source=...) afin
 * de différencier le subject :
 *   - cas-similaire + reference-cas → « Demande cas similaire — case-X — Nom »
 *   - estimation-cee                → « Demande estimation CEE — Nom »
 *   - topbar / rappel / rappel-mobile → « Demande de rappel — Nom »
 *   - persona-mixte                 → « Profil mixte — Nom »
 *   - défaut                        → « Contact générique — Nom »
 *
 * Les autres LeadSource (pole-industrie, pole-residentiel,
 * simulateur-cee) gardent leur format historique avec ref LEAD- en
 * tête, qui sert au tri/recherche par référence.
 */
function computeSubject(
  source: LeadSource,
  ref: string,
  fields: Record<string, string>,
): string {
  const nom = (fields.nom || "").trim();
  const nomSuffix = nom ? ` — ${nom}` : "";

  if (source === "contact-generic") {
    const sourceDetail = fields["source-detail"] || "";
    const referenceCas = fields["reference-cas"] || "";

    if (sourceDetail === "cas-similaire" && referenceCas) {
      return `[Lead Agence 3E] Demande cas similaire — ${referenceCas}${nomSuffix}`;
    }
    if (sourceDetail === "estimation-cee") {
      return `[Lead Agence 3E] Demande estimation CEE${nomSuffix}`;
    }
    if (
      sourceDetail === "topbar" ||
      sourceDetail === "rappel" ||
      sourceDetail === "rappel-mobile"
    ) {
      return `[Lead Agence 3E] Demande de rappel${nomSuffix}`;
    }
    if (sourceDetail === "persona-mixte") {
      return `[Lead Agence 3E] Profil mixte${nomSuffix}`;
    }
    return `[Lead Agence 3E] Contact générique${nomSuffix}`;
  }

  // Autres sources : format historique avec ref LEAD-…
  return `[${ref}] Nouveau lead — ${SOURCE_LABEL[source]}`;
}

const FROM = process.env.RESEND_FROM ?? "Agence 3E <noreply@agence3e.fr>";
const TO_INTERNAL =
  process.env.RESEND_TO_INTERNAL ?? "contact@agence3e.fr";

/* Cache du client Resend pour ne pas le ré-instancier à chaque appel
   server action. Lazy : retourne null si pas de clé en env. */
let resendCache: Resend | null | undefined;
function getResend(): Resend | null {
  if (resendCache !== undefined) return resendCache;
  const key = process.env.RESEND_API_KEY;
  resendCache = key ? new Resend(key) : null;
  return resendCache;
}

export async function submitLead(
  source: LeadSource,
  formData: FormData,
): Promise<LeadResult> {
  const fields: Record<string, string> = {};
  for (const [key, value] of formData.entries()) {
    if (typeof value === "string") fields[key] = value;
  }

  // Validation minimale : email valide ou téléphone obligatoire.
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

  const ref = `LEAD-${source.toUpperCase()}-${Date.now().toString(36).toUpperCase()}`;

  const resend = getResend();
  if (!resend) {
    // Pas de clé Resend → mode dev/preview sans branchement réel.
    // On log et on retourne ok: true pour ne pas casser l'UX.
    console.warn(
      "[submitLead] RESEND_API_KEY absente — lead non envoyé.",
      { source, ref, fields },
    );
    return {
      ok: true,
      message:
        "Merci, votre demande est enregistrée. Notre équipe revient vers vous sous 24 h ouvrées.",
      ref,
    };
  }

  try {
    // 1) Notification interne — toujours envoyée. Subject différencié
    //    selon la source (cf. computeSubject : pour contact-generic, on
    //    lit le champ hidden source-detail issu des queryparams).
    await resend.emails.send({
      from: FROM,
      to: TO_INTERNAL,
      replyTo: fields.email,
      subject: computeSubject(source, ref, fields),
      html: renderInternalEmail(source, ref, fields),
      text: renderInternalText(source, ref, fields),
    });

    // 2) Accusé de réception au prospect — si email valide
    if (fields.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      await resend.emails.send({
        from: FROM,
        to: fields.email,
        replyTo: TO_INTERNAL,
        subject: "Votre demande a bien été reçue — Agence 3E",
        html: renderAckEmail(source, ref, fields),
        text: renderAckText(source, ref, fields),
      });
    }
  } catch (err) {
    console.error("[submitLead] Resend error", { source, ref, err });
    // On retourne quand même ok: true pour ne pas bloquer l'UX :
    // le lead est tracé en logs serveur (visible dans Vercel logs)
    // et on alertera côté Resend dashboard si volume anormal.
    return {
      ok: true,
      message:
        "Merci, votre demande est enregistrée. Notre équipe revient vers vous sous 24 h ouvrées.",
      ref,
    };
  }

  return {
    ok: true,
    message:
      "Merci, votre demande est enregistrée. Notre équipe revient vers vous sous 24 h ouvrées.",
    ref,
  };
}

/* ──────────────────────────────────────────────────────────────
 * Templates email
 * ──────────────────────────────────────────────────────────── */

function renderInternalEmail(
  source: LeadSource,
  ref: string,
  fields: Record<string, string>,
): string {
  const rows = Object.entries(fields)
    .filter(([k]) => k !== "_pending")
    .map(
      ([k, v]) => `
      <tr>
        <td style="padding:8px 14px;border-bottom:1px solid #EFF2F7;font-family:ui-monospace,monospace;font-size:11px;color:#8792A2;text-transform:uppercase;letter-spacing:0.06em;width:170px;vertical-align:top;">${escapeHtml(k)}</td>
        <td style="padding:8px 14px;border-bottom:1px solid #EFF2F7;font-family:Arial,sans-serif;font-size:14px;color:#0A2540;">${escapeHtml(v) || '<span style="color:#8792A2">—</span>'}</td>
      </tr>`,
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="fr">
<body style="margin:0;padding:0;background:#FAFBFC;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#FAFBFC;padding:32px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#FFFFFF;border-radius:16px;overflow:hidden;box-shadow:0 4px 12px rgba(10,37,64,0.06);">
        <tr><td style="padding:28px 32px 20px;background:#0A2540;color:#FFFFFF;">
          <div style="font-family:ui-monospace,monospace;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:rgba(255,255,255,0.65);">Nouveau lead</div>
          <div style="font-family:Arial,sans-serif;font-size:22px;font-weight:700;letter-spacing:-0.02em;margin-top:6px;">${SOURCE_LABEL[source]}</div>
          <div style="font-family:ui-monospace,monospace;font-size:11px;color:rgba(255,255,255,0.55);margin-top:6px;">${ref}</div>
        </td></tr>
        <tr><td style="padding:24px 32px;">
          <table width="100%" cellpadding="0" cellspacing="0">${rows}</table>
        </td></tr>
        <tr><td style="padding:18px 32px 26px;border-top:1px solid #EFF2F7;font-family:ui-monospace,monospace;font-size:11px;color:#8792A2;letter-spacing:0.04em;">
          Reçu le ${new Date().toLocaleString("fr-FR", { dateStyle: "long", timeStyle: "short" })}
          ${fields.email ? `· Réponse possible directement à <a href="mailto:${escapeHtml(fields.email)}" style="color:#00A86B;text-decoration:none;">${escapeHtml(fields.email)}</a>` : ""}
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function renderInternalText(
  source: LeadSource,
  ref: string,
  fields: Record<string, string>,
): string {
  const lines = Object.entries(fields)
    .filter(([k]) => k !== "_pending")
    .map(([k, v]) => `${k}: ${v || "—"}`)
    .join("\n");
  return `[${ref}] Nouveau lead — ${SOURCE_LABEL[source]}

${lines}

Reçu le ${new Date().toLocaleString("fr-FR")}.
${fields.email ? `Répondre à : ${fields.email}` : ""}`;
}

function renderAckEmail(
  source: LeadSource,
  ref: string,
  fields: Record<string, string>,
): string {
  const firstName = (fields.nom || fields["raison-sociale"] || "").split(" ")[0] || "Bonjour";
  return `<!DOCTYPE html>
<html lang="fr">
<body style="margin:0;padding:0;background:#FAFBFC;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#FAFBFC;padding:32px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#FFFFFF;border-radius:16px;overflow:hidden;box-shadow:0 4px 12px rgba(10,37,64,0.06);">
        <tr><td style="padding:36px 36px 24px;">
          <div style="font-family:ui-monospace,monospace;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:#8792A2;">Demande reçue · ${ref}</div>
          <h1 style="font-family:Arial,sans-serif;font-size:26px;font-weight:700;letter-spacing:-0.02em;color:#0A2540;margin:14px 0 18px;line-height:1.2;">
            ${escapeHtml(firstName)},<br>votre demande est enregistrée.
          </h1>
          <p style="font-family:Arial,sans-serif;font-size:15px;line-height:1.65;color:#425466;margin:0 0 16px;">
            Merci de votre prise de contact. Notre équipe la traite et revient vers vous <strong style="color:#0A2540;">sous 24 heures ouvrées</strong> avec :
          </p>
          <ul style="font-family:Arial,sans-serif;font-size:14.5px;line-height:1.7;color:#425466;margin:0 0 20px;padding-left:22px;">
            <li>une première lecture chiffrée de votre dossier (estimation primes CEE, gisements identifiables) ;</li>
            <li>une proposition de créneau pour échanger 20 minutes en visio ou téléphone ;</li>
            <li>les pièces jointes utiles (catalogue 130 fiches CEE industrie, exemple de rapport NF EN 16247).</li>
          </ul>
          <p style="font-family:Arial,sans-serif;font-size:14px;line-height:1.6;color:#425466;margin:0 0 8px;">
            En attendant, voici notre fiche cabinet :
          </p>
          <table cellpadding="0" cellspacing="0" style="margin-top:8px;">
            <tr>
              <td style="padding:14px 18px;background:#FAFBFC;border:1px solid #EFF2F7;border-radius:10px;font-family:ui-monospace,monospace;font-size:12px;color:#0A2540;letter-spacing:0.04em;line-height:1.7;">
                Agence 3E Audit · OPQIBI 1905<br>
                NF EN 16247-3 · France métropolitaine &amp; outre-mer<br>
                <a href="https://agence3e.fr" style="color:#00A86B;text-decoration:none;">agence3e.fr</a>
              </td>
            </tr>
          </table>
        </td></tr>
        <tr><td style="padding:18px 36px 28px;border-top:1px solid #EFF2F7;font-family:ui-monospace,monospace;font-size:11px;color:#8792A2;letter-spacing:0.04em;line-height:1.6;">
          Une question urgente ?<br>
          Répondez directement à ce mail — nous traitons en priorité (lun-ven 9 h–18 h).
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function renderAckText(
  source: LeadSource,
  ref: string,
  fields: Record<string, string>,
): string {
  const firstName = (fields.nom || fields["raison-sociale"] || "").split(" ")[0] || "Bonjour";
  return `${firstName},

Votre demande est enregistrée (réf. ${ref}).

Notre équipe revient vers vous sous 24 heures ouvrées avec :
- une première lecture chiffrée de votre dossier ;
- une proposition de créneau visio/téléphone ;
- les pièces jointes utiles (catalogue fiches CEE, exemple de rapport).

Une question urgente ? Répondez directement à ce mail —
nous traitons en priorité (lun-ven 9 h–18 h).

Agence 3E Audit · OPQIBI 1905 · NF EN 16247-3
agence3e.fr`;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
