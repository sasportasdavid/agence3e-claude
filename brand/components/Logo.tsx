import { LogoHero, type LogoHeroProps } from "./LogoHero";
import { LogoContractuel, type LogoContractuelProps } from "./LogoContractuel";

/**
 * Logo — wrapper qui choisit automatiquement le bon variant selon le
 * contexte d'usage défini par la matrice Section 2 du Logo Guidelines.
 *
 *   context = "hero"      | "marketing" | "header"
 *     → LogoHero
 *   context = "b2b"       | "contract"  | "report"
 *           | "footer"    | "default"
 *     → LogoContractuel
 *
 * Si le contexte n'est pas listé : on retombe sur LogoContractuel
 * (règle de défaut Section 2 : "Si le contexte n'est pas listé,
 * choisir LOGO_CONTRACTUEL par défaut.").
 */
export type LogoContext =
  | "hero"
  | "marketing"
  | "header"
  | "b2b"
  | "contract"
  | "report"
  | "footer"
  | "default";

export interface LogoProps
  extends Omit<LogoHeroProps & LogoContractuelProps, "size"> {
  context: LogoContext;
  /** Largeur en pixels. Si omis, utilise le défaut du variant choisi
   *  (200 px pour hero, 80 px pour contractuel). */
  size?: number;
}

const HERO_CONTEXTS: ReadonlySet<LogoContext> = new Set([
  "hero",
  "marketing",
  "header",
] as const);

export function Logo({ context, ...rest }: LogoProps) {
  if (HERO_CONTEXTS.has(context)) {
    return <LogoHero {...(rest as LogoHeroProps)} />;
  }
  return <LogoContractuel {...(rest as LogoContractuelProps)} />;
}

export { LogoHero, LogoContractuel };
export type { LogoHeroProps, LogoContractuelProps };
