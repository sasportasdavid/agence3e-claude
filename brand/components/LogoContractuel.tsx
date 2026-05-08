/**
 * LogoContractuel — version sobre / B2B.
 *
 * Source SVG : Section 7 de A3E_Logo_Guidelines__standalone_.html.
 * Reproduction stricte. Aucun effet ajouté (cf. Don't 03).
 *
 * Usages : présentation commerciale, proposition, pitch, contrat,
 * mandat, facture, en-tête de rapport d'audit, attestation, footer
 * site, signature mail, e-mails transactionnels, PDF imprimables.
 * Cf. matrice Section 2 du Logo Guidelines.
 *
 * Taille minimale : 80 px de large. En dessous, le sous-titre mono
 * devient illisible (Section 3.1). Un avertissement console est
 * émis en développement.
 */
export interface LogoContractuelProps {
  /** Largeur en pixels. Défaut 80 (taille minimale). */
  size?: number;
  /** Version sur fond sombre #0A2540 : wordmark blanc + sous-titre rgba(255,255,255,0.6). */
  negative?: boolean;
  /** Classes additionnelles (ex. utilitaires Tailwind de positionnement). */
  className?: string;
  /** Si fourni, sert d'alt et de titre. Défaut accessible déjà fourni. */
  ariaLabel?: string;
}

export function LogoContractuel({
  size = 80,
  negative = false,
  className,
  ariaLabel,
}: LogoContractuelProps) {
  if (process.env.NODE_ENV !== "production" && size < 80) {
    // eslint-disable-next-line no-console
    console.warn(
      `[LogoContractuel] size=${size}px sous le seuil minimal de 80 px (Section 3.1 — Logo Guidelines). Le sous-titre mono deviendra illisible.`,
    );
  }

  const wordmarkFill = negative ? "#FFFFFF" : "#0A2540";
  const subtitleFill = negative ? "rgba(255,255,255,0.6)" : "#8792A2";
  const height = (size * 200) / 400;

  return (
    <svg
      viewBox="0 0 400 200"
      width={size}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={
        ariaLabel ?? "Agence 3E — Agence · Expertise · Économie · Énergie"
      }
      className={className}
    >
      <text
        x="200"
        y="108"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontWeight="700"
        fontSize="86"
        letterSpacing="-3"
        fill={wordmarkFill}
      >
        A3E
      </text>
      <text
        x="200"
        y="142"
        textAnchor="middle"
        fontFamily="'JetBrains Mono', monospace"
        fontWeight="500"
        fontSize="11"
        letterSpacing="2.2"
        fill={subtitleFill}
      >
        AGENCE · EXPERTISE · ÉCONOMIE · ÉNERGIE
      </text>
    </svg>
  );
}
