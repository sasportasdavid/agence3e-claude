# A3E — Brand kit (v1.0)

Identité visuelle Agence 3E opérationnalisée à partir des deux livrables Claude Design :

- **`A3E_Logo_Guidelines__standalone_.html`** — matrice d'usage, tailles minimales, zone de protection, don'ts, SVG sources canoniques (Section 7).
- **`Agence 3E - Design System _standalone_.html`** — tokens couleurs, typographie, composants, patterns DS Aurore.

> Toute valeur de design (couleur, font, spacing, taille de logo) **doit venir de ces deux documents**. Ne jamais inventer une valeur. Ne jamais créer un 3ᵉ logo.

---

## Structure

```
brand/
├── logos/
│   ├── logo-hero.svg              # version publique / marketing
│   ├── logo-hero-neg.svg          # idem, sur fond #0A2540
│   ├── logo-contractuel.svg       # version sobre / B2B
│   ├── logo-contractuel-neg.svg   # idem, sur fond #0A2540
│   └── favicon.svg                # A3E seul, 100×100
├── tokens/
│   ├── tokens.css                 # variables CSS DS Aurore
│   ├── tokens.json                # mêmes valeurs en JSON
│   └── fonts.css                  # @import Google Fonts
├── components/
│   ├── LogoHero.tsx               # React, props : size, negative
│   ├── LogoContractuel.tsx        # idem
│   └── Logo.tsx                   # wrapper context-aware
└── README.md                      # ce fichier
```

---

## Matrice d'usage (Section 2 — Logo Guidelines)

Six contextes, deux logos. Si le contexte n'est pas listé, choisir `LOGO_CONTRACTUEL` par défaut.

| Contexte                                                    | Logo               | Raison                                                |
| ----------------------------------------------------------- | ------------------ | ----------------------------------------------------- |
| Site web header / cover LinkedIn / kakémono                 | **LOGO_HERO**      | Maximum d'impact visuel, signature de marque           |
| Bannière email marketing / hero supports                    | **LOGO_HERO**      | Captation attention, registre marketing                |
| Présentation commerciale / proposition / pitch              | LOGO_CONTRACTUEL   | Registre B2B sobre, lecture rapide du nom              |
| Document contractuel / mandat / facture / KBIS              | LOGO_CONTRACTUEL   | Sobriété administrative, monochrome possible            |
| En-tête de rapport d'audit / attestation                    | LOGO_CONTRACTUEL   | Crédibilité institutionnelle, lisibilité monochrome    |
| Footer site / mention légale / signature mail               | LOGO_CONTRACTUEL   | Densité d'info, neutralité visuelle                    |

---

## Tailles minimales (Section 3.1)

| Logo               | Min. | Pourquoi                                                  |
| ------------------ | ---- | --------------------------------------------------------- |
| `LOGO_HERO`        | **200 px** | Sous 200 px, la ligne aurore devient illisible.        |
| `LOGO_CONTRACTUEL` | **80 px**  | Sous 80 px, le sous-titre mono devient illisible.       |

`LogoHero` et `LogoContractuel` émettent un `console.warn` en développement si la taille passée est en dessous du seuil.

## Zone de protection (Section 3.2)

Marge de respiration sur les 4 côtés équivalente à `x = h(A)` (hauteur du caractère « A » du wordmark). Aucun élément graphique ou texte ne doit entrer dans cette zone.

---

## Don'ts (Section 4)

1. **Ne pas étirer ni déformer.** Conserver les proportions natives (viewBox 400×200).
2. **Ne pas changer les couleurs hors tokens DS Aurore.** Pas de re-coloration ad hoc.
3. **Pas d'ombre portée, pas de contour, pas de glow.**
4. **Fond contraste insuffisant interdit.** `LOGO_HERO` ne va pas sur fond pastel — réserver fond blanc, `--bg-alt` (#FAFBFC), ou `#0A2540` (avec wordmark blanc).

> ⚠️ Don't 04 a une conséquence directe pour Make.com : **`LOGO_HERO` ne doit jamais être utilisé dans un e-mail transactionnel ni un PDF imprimable monochrome** — la ligne aurore disparaît à l'impression. Utiliser `LOGO_CONTRACTUEL` pour ces usages.

---

## Importer dans un composant React

```tsx
// Logo intelligent — choisit le bon variant selon le contexte
import { Logo } from "@/brand/components/Logo";

<Logo context="hero" size={280} />
<Logo context="footer" negative size={60} />

// Variants explicites
import { LogoHero } from "@/brand/components/LogoHero";
import { LogoContractuel } from "@/brand/components/LogoContractuel";

<LogoHero size={280} />
<LogoContractuel size={80} />
<LogoContractuel size={60} negative />
```

### Props communes

| Prop          | Type      | Défaut                | Notes                                                  |
| ------------- | --------- | --------------------- | ------------------------------------------------------ |
| `size`        | `number`  | 200 (Hero) / 80 (Ctr) | En pixels (largeur). Hauteur calculée auto (ratio 2:1). |
| `negative`    | `boolean` | `false`               | Pour fond sombre `#0A2540`.                            |
| `className`   | `string`  | —                     | Classes additionnelles (positionnement Tailwind, etc.). |
| `ariaLabel`   | `string`  | accessible par défaut | Override de l'`aria-label`.                            |

### Wrapper `<Logo context="…" />` — décision

| `context`                                  | Variant rendu        |
| ------------------------------------------ | -------------------- |
| `"hero"`, `"marketing"`, `"header"`        | `LogoHero`           |
| `"b2b"`, `"contract"`, `"report"`,         | `LogoContractuel`    |
| `"footer"`, `"default"`                    |                      |

---

## Tokens CSS (DS Aurore)

```css
/* dans un fichier global ou un layout */
@import "@/brand/tokens/tokens.css";

.eyebrow { color: var(--text-3); }
.heading { color: var(--primary); }
.cta     { background: var(--secondary); }
```

Liste complète : voir [`tokens/tokens.css`](./tokens/tokens.css) et [`tokens/tokens.json`](./tokens/tokens.json).

> **Note Next.js / Tailwind v4** : cette app utilise `@theme` avec un préfixe `--color-*` dans `app/globals.css` (cohérence Tailwind v4). Les deux jeux de tokens co-existent — le brand kit `/brand/tokens/` est destiné aux usages portables (Make.com, e-mails HTML, plaquettes PDF, autre app Lovable, etc.).

## Polices

```css
@import "@/brand/tokens/fonts.css";
```

Tri-typographie chargée via Google Fonts :

- **Inter** 400/500/600/700 — texte courant + wordmark
- **Source Serif Pro Italic** 400/600 — baseline `LOGO_HERO`, accents `.it`
- **JetBrains Mono** 400/500 — sous-titre `LOGO_CONTRACTUEL`, eyebrows et numéraires

> Dans cette app Next.js, les polices sont déjà chargées via `next/font/google` dans [`app/layout.tsx`](../app/layout.tsx) (zéro CLS, hébergement local). `fonts.css` n'est utile qu'aux contextes externes.

---

## Application dans cette app Next.js

| Emplacement                                       | Logo utilisé                                                         |
| ------------------------------------------------- | -------------------------------------------------------------------- |
| Header desktop (`components/SiteHeader.tsx`)      | `<LogoHero size={240} />` (matrice Section 2 — site web header)       |
| Header mobile (`components/SiteHeader.tsx`)       | `<LogoHero size={200} />` (taille minimale stricte Section 3.1)       |
| Footer (`components/SiteFooter.tsx`)              | `<LogoContractuel size={120} negative />` (Section 2 — footer)        |
| OG / Twitter image (`app/opengraph-image.tsx`)    | LOGO_HERO recomposé pour Satori (1200×630 sur fond `#0A2540`)         |
| Favicon (`app/icon.svg`)                          | `brand/logos/favicon.svg`                                              |

## Application Make.com / e-mails / PDF

- `LOGO_CONTRACTUEL` **uniquement** (lisibilité monochrome impression — Don't 04).
- Source recommandée : URL publique du SVG via Supabase Storage si configuré (bucket `brand-assets`), sinon base64 inline du SVG dans les templates HTML email.
- Ne jamais embarquer `LOGO_HERO` dans un livrable imprimable.

## Application Supabase Storage

Bucket public `brand-assets` à créer si non existant, avec les 5 SVG du dossier `brand/logos/` à la racine (chemin attendu par les scripts Make.com et autres consommateurs externes).

---

## Références

- [`A3E_Logo_Guidelines__standalone_.html`](../A3E_Logo_Guidelines__standalone_.html) — sources canoniques.
- [`Agence 3E - Design System _standalone_.html`](../Agence%203E%20-%20Design%20System%20_standalone_.html) — tokens & composants.
- Versionning : v1.0 · Mai 2026.
