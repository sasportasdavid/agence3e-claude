# BRIEF REFONTE HOME v3 — Agence 3E

**Version** : 3.0 — Niveau pixel-perfect
**Audience** : Claude Code en local (mode orchestré, validations entre phases)
**Durée estimée d'exécution** : 5-7h Claude Code + 1-2h validation
**Pré-requis** : Site agence3e-claude (Next.js 16.2.5, App Router, Tailwind v4) à jour avec les commits Phase 1, 2, 3 du sprint précédent.

---

## 1. CONTEXTE STRATÉGIQUE

### 1.1 Diagnostic de la Home v2 actuelle

La Home actuelle, livrée par Claude Design puis ajustée Phases 1-3, présente plusieurs forces et faiblesses identifiées par un retour UX externe.

**Forces** :
- Identité visuelle forte (palette bleu marine + pastels, tri-typographie)
- Hiérarchie de l'information lisible
- Sticky CTA mobile efficace
- Cas clients chiffrés crédibles
- Mention juridique factuelle bien dosée

**Faiblesses identifiées** :
- Container forcé à ~700px sur desktop 1440px → effet "site mobile"
- Burger menu utilisé même en desktop → navigation cachée
- Triple promesse trop technique ("Conforme / Bancable / Suivi pluriannuel")
- Mosaïque pôles 50/25/25 ne parle pas aux dirigeants
- Estimateur CEE trop bas dans le scroll → perte de conversion
- CTA secondaires se ressemblent tous → pas de hiérarchie visuelle
- Cas clients en colonne unique → faible impact, manque de comparaison
- Aucun élément humain (pas de visage, pas de référent nommé)

### 1.2 Cibles à reposionner

**Cible 1 — Dirigeant industriel** (DG, DAF, Directeur de site, Directeur industriel)
- 50-60 ans, exigeant, méfiant vis-à-vis du marketing
- Cherche : conformité réglementaire, ROI, économies opérationnelles
- Mots qui parlent : "obligation DDADUE", "sanction 2 % CA", "ROI 3 ans", "économies 15 à 35 %"
- Mots qui rebutent : "transition énergétique", "sobriété", "engagement"

**Cible 2 — Gestionnaire tertiaire** (Directeur immobilier, Property Manager, DSI Datacenter)
- 35-50 ans, technique, souvent prescripteur sans être signataire
- Cherche : conformité décret tertiaire, GTB, baisse de charges
- Mots qui parlent : "DEET", "OPERAT", "BACS", "trajectoire 2030"

**Cible 3 — Propriétaire particulier** (Maison individuelle, copropriété)
- 35-65 ans, prudent face aux arnaques rénovation
- Cherche : aides finançables, artisans de confiance, confort thermique
- Mots qui parlent : "MaPrimeRénov'", "RGE", "100 €/m²", "confort"
- Mots qui rebutent : "valorisation CEE", "fiche IND-UT-117", jargon technique

### 1.3 Inspirations de référence

| Source | Ce qu'on prend | Ce qu'on ne prend pas |
|---|---|---|
| **Linear** | Monumentalité des sections, espaces blancs maîtrisés, hiérarchie typo | Ton "indie tech", couleurs sombres, animations 3D |
| **Qonto** | Chaleur des chiffres, témoignages humains, CTA simulation | Ton "fintech ludique", illustrations vectorielles |
| **Stripe** | Hiérarchie des CTAs, micro-animations subtiles, premium feel | Densité info trop technique |
| **Pennylane** | Sérieux B2B, blocs de témoignages logos | Trop comptable, pas assez énergétique |

**Principe directeur** : *Premium, factuel, structuré. Pas marketing, pas anxiogène, pas familier.*

---

## 2. PRINCIPES DE DESIGN v3

### 2.1 Container responsive — breakpoints fins (option 5B)

**Règle** : la largeur du container varie selon la nature de la section. Plus la section est dense en contenu textuel, plus elle se rétrécit (lecture confort). Plus elle est visuelle/structurée, plus elle s'étend.

```
┌────────────────────────────────────────────────────────┐
│ HERO (full-bleed avec aurore)                          │
│ Background : 100vw                                     │
│ Container interne : max 1440px, padding 24-48px        │
└────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────┐
│ SECTIONS MONUMENTALES                                  │
│ (Pilier 3 chiffres, Sélecteur personas, Mosaïque)     │
│ Container : max 1440px                                 │
└────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────┐
│ SECTIONS GRILLES                                       │
│ (Études de cas, Triple promesse, Ressources)          │
│ Container : max 1280px                                 │
└────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────┐
│ SECTIONS TEXTE ÉDITORIAL                               │
│ (Encart DDADUE, Timeline)                              │
│ Container : max 880px                                  │
└────────────────────────────────────────────────────────┘
```

Ces 4 largeurs cohabitent dans la Home. Le passage entre 2 largeurs crée un rythme visuel volontaire.

**Implémentation Tailwind** :
- `max-w-[1440px]` pour les sections monumentales
- `max-w-[1280px]` pour les sections grilles
- `max-w-[880px]` pour les sections texte
- `mx-auto` toujours
- Padding latéral : `px-6` mobile / `px-8` tablette / `px-12` desktop

### 2.2 Spacing monumental

```css
:root {
  --space-block-xl: 240px;   /* Espace entre sections majeures, desktop */
  --space-block-lg: 160px;   /* Espace standard, desktop */
  --space-block-md: 120px;   /* Espace moyen, desktop */
  --space-block-sm: 80px;    /* Espace court, desktop */

  /* Mobile : valeurs divisées par ~1.6 */
  --space-block-xl-mobile: 160px;
  --space-block-lg-mobile: 100px;
  --space-block-md-mobile: 72px;
  --space-block-sm-mobile: 48px;
}
```

**Règle** : on utilise `--space-block-xl` (240px) entre les 4 sections majeures (Hero, Sélecteur personas, Études de cas, Footer) et `--space-block-lg` (160px) pour les autres transitions.

### 2.3 Hiérarchie typographique

La tri-typographie existante est préservée :
- **Inter** : tout le UI, body, navigation, CTAs
- **Source Serif Pro italique** : chiffres-clés, accents éditoriaux, "comme un sujet stratégique"
- **JetBrains Mono** : codes techniques (NF EN 16247-3, IND-UT-117, J-522, OPQIBI 1905, CASE-001)

**Échelle typo v3** :
```
H1 hero        : clamp(56px, 6.6vw, 92px)  Inter Tight 600 + Source Serif italique pour mots-clés
H1 sections    : clamp(40px, 4.4vw, 64px)  Inter Tight 600
H2             : clamp(28px, 3.2vw, 44px)  Inter 600
H3             : clamp(22px, 2.4vw, 32px)  Inter 600
Eyebrow        : 12px Inter 600 uppercase letter-spacing 0.08em
Body large     : 18-20px Inter 400 line-height 1.65
Body           : 16px Inter 400 line-height 1.65
Body small     : 14px Inter 400 line-height 1.55
Mono code      : 13-14px JetBrains Mono 500
Stat number    : clamp(40px, 4.8vw, 72px)  Source Serif italique 400
```

### 2.4 Hiérarchie CTA — règle d'or

**Règle** : maximum 1 CTA primaire + 1 CTA secondaire visible par section. Tout le reste est des liens textuels.

```
CTA Primaire    : btn-primary (fond --primary, texte blanc, padding 16x32, radius 8)
CTA Secondaire  : btn-secondary (fond transparent, bordure --border, texte --text)
CTA Vert action : btn-green (fond --secondary #00A86B, pour CTAs simulateur uniquement)
Lien textuel    : text-primary hover:underline avec → arrow CSS pseudo-element
```

**À supprimer absolument** : tous les `btn-arrow` répétitifs ("Lire →", "Découvrir →") qui se ressemblent visuellement. Soit on transforme en lien textuel sobre, soit on garde un seul CTA secondaire par section.

### 2.5 Aurore signature — préservation

L'aurore SVG existante (8 variantes : industrie, tertiaire, residentiel, outre-mer, reglementation, ressources, compact, alert) est **conservée intégralement**. Elle apparaît sur :
- Hero (variante "industrie" actuellement, on garde)
- Sélecteur personas (3 mini-aurores, une par persona)
- Encart simulateur (variante "compact")

### 2.6 Animations — règle des 4

On garde les 4 animations actuelles, on n'en ajoute pas :
1. Reveal au scroll (IntersectionObserver, fade-up 24px)
2. Hover card lift (translateY -4px, shadow renforcée)
3. Tooltip apparition (fade + slide 8px)
4. Live-dot pulse (red 1.6s infinite)

**Toutes respectent `prefers-reduced-motion: reduce`.**

---

## 3. SPEC PAR SECTION

### 3.1 Hero v3 — option 1C "Compétences"

#### Layout

```
┌─────────────────────────────────────────────────────────┐
│ [TopBar bleu nuit fin — inchangé]                       │
├─────────────────────────────────────────────────────────┤
│ [Header v2 — préservé, déjà fait Phase 1]               │
├═════════════════════════════════════════════════════════┤
│                                                         │
│   AURORE INDUSTRIE (background, opacité 0.95)           │
│                                                         │
│   ┌──────────────────────────┐  ┌────────────────────┐  │
│   │                          │  │                    │  │
│   │  EYEBROW                 │  │   MOCKUP TRIPLE    │  │
│   │  Cabinet conseil énergie │  │                    │  │
│   │                          │  │   [PDF rapport]    │  │
│   │  H1 (mix Inter + Serif)  │  │   [Dashboard CEE]  │  │
│   │                          │  │   [Planning AMO]   │  │
│   │  Sub-headline 22px       │  │                    │  │
│   │                          │  │   (overlap subtil) │  │
│   │  [CTA primaire]          │  │                    │  │
│   │  [CTA secondaire]        │  │                    │  │
│   │                          │  │                    │  │
│   │  TRUST ROW               │  │                    │  │
│   │  Logos partenaires       │  │                    │  │
│   │                          │  │                    │  │
│   └──────────────────────────┘  └────────────────────┘  │
│                                                         │
│           col 1 : 50%              col 2 : 50%          │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

#### Spécifications précises

- **Background** : 100vw, gradient subtil `linear-gradient(180deg, #F8F9FB 0%, #FFFFFF 100%)`, l'aurore industrie SVG en absolute, blend-mode `normal` opacity 0.95
- **Container** : max-w-1440 mx-auto, padding `pt-32 pb-40 lg:pt-40 lg:pb-56` (énorme respiration desktop)
- **Grille** : `grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24`
- **Colonne 1** (texte) :
  - Eyebrow : "Cabinet de conseil en performance énergétique"
  - H1 sur 3-4 lignes selon viewport
  - Sub-headline : 4-5 lignes
  - 2 CTAs : primary + secondary (gap 12px)
  - Trust row : "Auditeur certifié OPQIBI 1905 · NF EN 16247-3 · France métropolitaine & outre-mer" en mono 13px
- **Colonne 2** (mockup triple) : 3 mockups SaaS empilés avec overlap (z-index décroissant), rotation subtile (-2deg, +1deg, +3deg), shadow forte sur le premier plan

#### Texte exact à reprendre

**Eyebrow** :
```
Cabinet de conseil en performance énergétique
```

**H1** (avec mix Inter + Source Serif italique pour les mots-clés) :
```
L'énergie comme
un *sujet stratégique*.
```

(Le mot "sujet stratégique" en Source Serif Pro italique, le reste en Inter Tight 600. Saut de ligne intentionnel après "comme".)

**Sub-headline** :
```
Pour vos sites industriels, votre parc tertiaire ou votre logement —
audit conforme, primes CEE optimisées, travaux pilotés. Trois segments,
une méthode, un interlocuteur.
```

**CTA primaire** (--primary fond, blanc texte) :
```
Vérifier mon obligation
```
→ scrolle vers section "Encart DDADUE" ou ouvre simulateur

**CTA secondaire** (transparent, bordure) :
```
Calculer mes économies
```
→ scrolle vers "Encart simulateur" ou ouvre `/simulateur-cee`

**Trust row** (mono 13px, opacity 0.7) :
```
OPQIBI 1905  ·  NF EN 16247-3  ·  France métropolitaine & outre-mer
```

#### Mockup triple — détails

3 mockups SaaS empilés visuellement avec overlap. Chacun mesure ~480x320px, ils sont décalés de ~40px en X et ~40px en Y.

**Mockup 1** (premier plan, le plus visible) — Rapport audit
- Document PDF mockup : "RAPPORT_AUDIT_DDADUE_v3.pdf — chap. 7 / page 24"
- Reprend MOCKUP_PLAN_ACTION.html existant
- Filename mono en haut, contenu structuré (6 gisements priorisés ROI)

**Mockup 2** (plan intermédiaire) — Dashboard CEE
- Interface SaaS : "app.agence3e.fr/dossiers/CEE-2026-0142"
- Reprend MOCKUP_DASHBOARD_SUIVI.html existant
- Statut + jalons + montants + délégataire

**Mockup 3** (arrière-plan) — Planning AMO
- Spreadsheet ou Gantt simplifié : "PLANNING_TRAVAUX_2026.xlsx"
- À créer si n'existe pas (sinon réutiliser MOCKUP_TABLEAU_CUMAC.html)

**Animation** : reveal au scroll synchronisé, mockup 1 entre en premier (delay 0), mockup 2 (delay 80ms), mockup 3 (delay 160ms).

#### Mobile

- Empilement vertical
- 1 seul mockup affiché (Mockup 1), les 2 autres masqués
- H1 plus petit (clamp(40px, 8vw, 56px))
- CTAs full-width
- Trust row sur 2 lignes
- Aurore visible mais réduite

#### Position dans la page

Après le TopBar et le Header. Espace après hero : `--space-block-xl` (240px desktop, 160px mobile).

---

### 3.2 Pilier 3 chiffres (renforcé)

#### Layout

```
┌─────────────────────────────────────────────────────────┐
│  CONTAINER 1440px                                       │
│  ┌───────────────────────────────────────────────────┐  │
│  │ EYEBROW : DDADUE 11 octobre 2026                  │  │
│  │ H2 : Trois chiffres pour comprendre l'urgence.    │  │
│  │                                                   │  │
│  │ ┌─────────┐  ┌─────────┐  ┌─────────┐             │  │
│  │ │ 522     │  │ 2,75    │  │ 2 / 4 % │             │  │
│  │ │ jours   │  │ GWh     │  │ CA HT   │             │  │
│  │ │         │  │         │  │         │             │  │
│  │ │ avant   │  │ seuil   │  │ sanction│             │  │
│  │ │ obli-   │  │ obli-   │  │ /       │             │  │
│  │ │ gation  │  │ gation  │  │ récidive│             │  │
│  │ └─────────┘  └─────────┘  └─────────┘             │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

#### Spécifications

- **Container** : max-w-1440 mx-auto, padding `py-32 lg:py-40 px-6 lg:px-12`
- **Background** : `bg-bg-alt` (gris très clair) ou gradient pastel doux
- **Grille des 3 chiffres** : `grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16`
- **Chaque card** : padding `p-8 lg:p-10`, fond `bg-white`, `border border-border-2`, `rounded-3xl`, ombre subtile

#### Texte exact

**Eyebrow** : `DDADUE · 11 octobre 2026`

**H2** :
```
Trois chiffres pour comprendre l'urgence.
```

**Card 1** :
```
522
jours

avant l'obligation d'audit énergétique pour
les industriels et tertiaires consommant
plus de 2,75 GWh annuels.
```

**Card 2** :
```
2,75
GWh/an

seuil d'obligation DDADUE. Au-dessus,
audit NF EN 16247 obligatoire avant le
11 octobre 2026.
```

**Card 3** :
```
2 % / 4 %
du CA HT

sanctions pour défaut d'audit (2 %)
ou récidive (4 %). Sanctions cumulables
avec d'autres obligations.
```

#### Animations

- Reveal au scroll : les 3 cards apparaissent en cascade (delay 0, 100ms, 200ms)
- Compteur "522" peut animer du chiffre cible vers 0 sur 1.5s lors du reveal (effet "compte à rebours visible") — option, à tester

#### Position dans la page

Juste après le hero. Espace avant : `--space-block-xl`. Espace après : `--space-block-lg`.

---

### 3.3 Encart simulateur (REMONTÉ — résout critique UX)

**Décision stratégique** : on remonte le simulateur juste après le pilier 3 chiffres pour augmenter la conversion. C'est exactement ce qu'a recommandé le retour UX externe.

#### Layout

```
┌─────────────────────────────────────────────────────────┐
│  CONTAINER 1280px                                       │
│  ┌───────────────────────────────────────────────────┐  │
│  │ ENCART vert pastel (--secondary-10)               │  │
│  │ ┌─────────────────────────────────────────────┐   │  │
│  │ │  AURORE COMPACT (background subtil)         │   │  │
│  │ │                                             │   │  │
│  │ │  ┌──────────────────┐  ┌────────────────┐   │   │  │
│  │ │  │ Eyebrow          │  │ Mockup table   │   │   │  │
│  │ │  │ Estimation       │  │ cumac          │   │   │  │
│  │ │  │                  │  │ (extrait)      │   │   │  │
│  │ │  │ H2               │  │                │   │   │  │
│  │ │  │ Calculez votre   │  │                │   │   │  │
│  │ │  │ prime CEE en     │  │                │   │   │  │
│  │ │  │ 4 questions.     │  │                │   │   │  │
│  │ │  │                  │  │                │   │   │  │
│  │ │  │ Sub              │  │                │   │   │  │
│  │ │  │ [CTA vert]       │  │                │   │   │  │
│  │ │  └──────────────────┘  └────────────────┘   │   │  │
│  │ └─────────────────────────────────────────────┘   │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

#### Spécifications

- **Container** : max-w-1280 mx-auto, padding `py-32 lg:py-40 px-6 lg:px-12`
- **Encart** : padding interne `p-12 lg:p-20`, `bg-secondary-10` (vert pastel doux), `rounded-3xl`, `border border-secondary-20`
- **Grille interne** : `grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`
- **Aurore variante "compact"** en background avec opacity 0.4

#### Texte exact

**Eyebrow** : `Estimation gratuite · 30 secondes`

**H2** :
```
Calculez votre prime CEE
en 4 questions.
```

**Sub** :
```
Indiquez votre segment, votre site et l'opération envisagée.
Notre simulateur vous donne une estimation chiffrée immédiate
basée sur les fiches CEE officielles et les prix du marché.
```

**CTA primaire vert** (`btn-green`) :
```
Lancer le simulateur
```
→ pointe vers `/simulateur-cee`

**Mockup col 2** : Reprendre MOCKUP_TABLEAU_CUMAC.html mais en version "extrait" (les 6 premières lignes seulement, pour donner envie sans tout montrer).

#### Position dans la page

Juste après le pilier 3 chiffres. Espace avant : `--space-block-lg`. Espace après : `--space-block-xl`.

---

### 3.4 Triple promesse v3 — option 2C "Verbe + preuve"

#### Layout

```
┌─────────────────────────────────────────────────────────┐
│  CONTAINER 1280px                                       │
│  ┌───────────────────────────────────────────────────┐  │
│  │  EYEBROW : Notre engagement                       │  │
│  │  H2 : Trois bénéfices, mesurables.                │  │
│  │                                                   │  │
│  │  ┌─────────┐  ┌─────────┐  ┌─────────┐            │  │
│  │  │  ROSE   │  │  VERT   │  │  BLEU   │            │  │
│  │  │ Card 1  │  │ Card 2  │  │ Card 3  │            │  │
│  │  │         │  │         │  │         │            │  │
│  │  │ Mockup  │  │ Mockup  │  │ Mockup  │            │  │
│  │  │ PDF     │  │ Dashb.  │  │ Table   │            │  │
│  │  └─────────┘  └─────────┘  └─────────┘            │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

#### Spécifications

- **Container** : max-w-1280 mx-auto
- **Grille** : `grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10`
- **Chaque card** : padding `p-10 lg:p-12`, `rounded-3xl`, ombre subtile, hover lift translateY -4px
- **Variantes pastel** :
  - Card 1 : `bg-pastel-rose` (rose pâle), accents `--accent-rose-deep`
  - Card 2 : `bg-pastel-mint` (vert/menthe pâle), accents `--secondary-deep`
  - Card 3 : `bg-pastel-blue` (bleu pâle), accents `--primary`

#### Texte exact

**Eyebrow** : `Notre engagement`

**H2** :
```
Trois bénéfices, mesurables.
```

**Card 1** (rose) :
```
[Badge] Conformité
H3 Anticipez l'audit obligatoire.
Description :
Audit énergétique conforme NF EN 16247-3, livrable
sous 6 semaines. Conduit par Agence 3E Audit, certifiée
OPQIBI 1905. Périmètre complet : sites industriels,
bâtiments tertiaires, points de consommation > 2,75 GWh.
[Stats]
Délai · 6 semaines
Norme · NF EN 16247-3
[Mockup PDF rapport]
[Lien] Voir un exemple de rapport →
```

**Card 2** (vert) :
```
[Badge] Économies
H3 Allégez votre facture énergie.
Description :
15 à 35 % d'économies validées par audit, dès l'année 1.
Identification des gisements rentables, hiérarchisation
par ROI, plan d'action chiffré sur 4 ans. Vous voyez
exactement quoi faire, dans quel ordre, pour quel gain.
[Stats]
Économies · 15 à 35 %
ROI moyen · 2,8 ans
[Mockup Dashboard]
[Lien] Voir notre méthode →
```

**Card 3** (bleu) :
```
[Badge] Prime CEE
H3 Capturez la valeur CEE.
Description :
Courtage transparent de votre prime CEE auprès de
délégataires obligés. +12 à +25 % de prix négocié vs
marché spot. Mandat écrit, commission affichée en
€/MWh cumac, prime versée sous 60 jours.
[Stats]
Surplus · +12 à +25 %
Versement · 60 jours
[Mockup Table cumac]
[Lien] Comprendre la valorisation →
```

#### Position dans la page

Après l'encart simulateur. Espace avant : `--space-block-xl`. Espace après : `--space-block-xl`.

---

### 3.5 Sélecteur "Vous êtes..." — option 3C (REMPLACE mosaïque pôles)

C'est la **section pivot de la conversion**. Elle remplace la mosaïque 50/25/25 actuelle qui ne ciblait pas assez les personas.

#### Layout

```
┌─────────────────────────────────────────────────────────┐
│  CONTAINER 1440px                                       │
│  ┌───────────────────────────────────────────────────┐  │
│  │  EYEBROW : Trois segments, une méthode            │  │
│  │  H2 : Vous êtes...                                │  │
│  │  Sub : Choisissez votre profil pour voir          │  │
│  │        les solutions qui vous correspondent.      │  │
│  │                                                   │  │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐         │  │
│  │  │ AURORE   │  │ AURORE   │  │ AURORE   │         │  │
│  │  │ industr  │  │ tertiair │  │ residen  │         │  │
│  │  │ chaude   │  │ froide   │  │ verte    │         │  │
│  │  │          │  │          │  │          │         │  │
│  │  │ ICON     │  │ ICON     │  │ ICON     │         │  │
│  │  │          │  │          │  │          │         │  │
│  │  │ H3       │  │ H3       │  │ H3       │         │  │
│  │  │ Dirigeant│  │Gestionnai│  │Particulie│         │  │
│  │  │industriel│  │ tertiaire│  │          │         │  │
│  │  │          │  │          │  │          │         │  │
│  │  │ Sub      │  │ Sub      │  │ Sub      │         │  │
│  │  │ Pour vos │  │ Pour vos │  │ Pour vos │         │  │
│  │  │ sites... │  │ bât...   │  │ logement │         │  │
│  │  │          │  │          │  │          │         │  │
│  │  │ Stat     │  │ Stat     │  │ Stat     │         │  │
│  │  │ 12 secte │  │ 8 segm   │  │ Maisons  │         │  │
│  │  │ urs cou  │  │ ents     │  │ + copro  │         │  │
│  │  │ verts    │  │          │  │          │         │  │
│  │  │          │  │          │  │          │         │  │
│  │  │ [CTA]    │  │ [CTA]    │  │ [CTA]    │         │  │
│  │  │ Voir mes │  │ Voir mes │  │ Voir mes │         │  │
│  │  │solutions→│  │solutions→│  │solutions→│         │  │
│  │  └──────────┘  └──────────┘  └──────────┘         │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

#### Spécifications

- **Container** : max-w-1440 mx-auto, padding `py-40 lg:py-56`
- **Grille** : `grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8`
- **Chaque tuile** : ratio carré ou 4/5, hauteur fixe ~520px desktop, padding `p-10 lg:p-12`
- **Background tuile** : aurore variant correspondante en absolute, opacity 0.85, blend-mode normal
- **Hover** : aurore intensifie opacity → 1.0, scale 1.02, shadow renforcée
- **Click** : navigation vers la page pôle correspondante
- **Cursor** : pointer sur toute la tuile

#### Texte exact

**Eyebrow** : `Trois segments, une méthode`

**H2** :
```
Vous êtes...
```

**Sub** :
```
Choisissez votre profil pour voir les solutions adaptées.
Méthode commune, exigences spécifiques par segment.
```

**Tuile 1 — Industrie** (aurore industrie chaude) :
```
Icon : 🏭 (ou SVG factory minimal)

H3 (Inter 600) :
Dirigeant industriel.

Sub :
Pour vos sites de production : audit DDADUE conforme,
gisements CEE hiérarchisés, ROI sous 3 ans. 8 secteurs
couverts, de l'agroalimentaire au verre.

Stat (mono) :
8 secteurs · 130 fiches CEE

CTA :
Voir mes solutions →

[Lien vers /pole-industrie]
```

**Tuile 2 — Tertiaire** (aurore tertiaire froide) :
```
Icon : 🏢 (ou SVG building)

H3 :
Gestionnaire tertiaire.

Sub :
Pour votre parc immobilier : conformité décret tertiaire,
déclaration OPERAT, GTB performante, trajectoire 2030.
Bureaux, retail, hôtellerie, datacenters et plus.

Stat (mono) :
8 sous-segments · 87 M€ primes 2024

CTA :
Voir mes solutions →

[Lien vers /pole-tertiaire]
```

**Tuile 3 — Particuliers** (aurore residentiel verte) :
```
Icon : 🏡 (ou SVG home)

H3 :
Propriétaire.

Sub :
Pour votre maison ou copropriété : MaPrimeRénov',
prime CEE, éco-PTZ, TVA 5,5 %. Artisans RGE qualifiés,
travaux pilotés, devis gratuit.

Stat (mono) :
Maisons · Copropriétés · 100 €/m² isolation

CTA :
Voir mes solutions →

[Lien vers /pole-residentiel]
```

#### Animations

- Reveal au scroll : 3 tuiles en cascade (delay 0, 120ms, 240ms)
- Hover : aurore intensifie + scale 1.02 + shadow XL
- Mobile : empilement vertical, hauteur réduite à ~420px

#### Position dans la page

Après la triple promesse. Espace avant : `--space-block-xl`. Espace après : `--space-block-xl`.

**C'est la section pivot. Elle est conçue pour convertir.**

---

### 3.6 Encart DDADUE (gardé, ajusté)

Section conservée mais retravaillée pour respecter le container 880px (lecture confort).

#### Layout

```
┌─────────────────────────────────────────────────────────┐
│  CONTAINER 880px                                        │
│  ┌───────────────────────────────────────────────────┐  │
│  │ ENCART pastel orange/rose (alerte douce)          │  │
│  │  ┌─────────────────────────────────────────────┐  │  │
│  │  │ ⚠ EYEBROW Échéance imminente               │  │  │
│  │  │                                             │  │  │
│  │  │ H2 11 octobre 2026.                         │  │  │
│  │  │ Trois lignes maximum pour faire mal.        │  │  │
│  │  │                                             │  │  │
│  │  │ Sub paragraphe descriptif                   │  │  │
│  │  │                                             │  │  │
│  │  │ ┌──────┐ ┌──────┐ ┌──────┐                  │  │  │
│  │  │ │ J-522│ │ Seuil│ │ Sanc.│                  │  │  │
│  │  │ └──────┘ └──────┘ └──────┘                  │  │  │
│  │  │                                             │  │  │
│  │  │ [CTA primaire] Vérifier mon obligation      │  │  │
│  │  │                                             │  │  │
│  │  └─────────────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

#### Spécifications

- **Container** : max-w-880 mx-auto, padding `py-32 lg:py-40`
- **Encart** : padding interne `p-12 lg:p-16`, `bg-pastel-orange-light`, `border-l-4 border-orange-500`, `rounded-2xl`
- **Live-dot** rouge pulsante près du eyebrow

#### Texte exact

**Eyebrow** (avec live-dot rouge pulsante) :
```
⚠  Échéance imminente
```

**H2** :
```
11 octobre 2026.
La conformité DDADUE n'est plus une option.
```

**Sub** :
```
La directive européenne sur l'efficacité énergétique impose un audit
NF EN 16247-3 à toutes les entreprises consommant plus de 2,75 GWh
annuels. Au-delà du 11 octobre 2026, l'absence d'audit conforme
expose l'entreprise à des sanctions de 2 % du chiffre d'affaires
hors taxes (4 % en cas de récidive). L'audit doit être renouvelé
tous les 4 ans.
```

**3 mini-cards** :
```
┌──────────────┐
│ Délai        │
│ J-522        │ (mono)
│ avant le     │
│ 11 oct 2026  │
└──────────────┘

┌──────────────┐
│ Seuil        │
│ 2,75 GWh/an  │ (mono)
│ ou ~ 200 k€  │
│ de facture   │
└──────────────┘

┌──────────────┐
│ Sanction     │
│ 2 / 4 %      │ (mono)
│ du CA HT     │
│ + récidive   │
└──────────────┘
```

**CTA primaire** :
```
Vérifier mon obligation
```
→ ouvre simulateur ou redirige vers `/comprendre/loi-ddadue`

**Note de bas d'encart** (mono 12px, opacity 0.6) :
```
Sources : Code de l'énergie L. 233-1 · Décret 2014-1393 · Audit NF EN 16247
```

#### Position dans la page

Après le sélecteur personas. Espace avant : `--space-block-xl`. Espace après : `--space-block-lg`.

---

### 3.7 Études de cas EN GRILLE (refondu — résout critique UX)

**Critique UX externe** : *« Les cas clients en colonne unique manquent d'impact. Ils gagneraient à être présentés en grille. »*

#### Layout

```
┌─────────────────────────────────────────────────────────┐
│  CONTAINER 1280px                                       │
│  ┌───────────────────────────────────────────────────┐  │
│  │  EYEBROW Études de cas                            │  │
│  │  H2 Des résultats chiffrés, vérifiables.          │  │
│  │  Sub Six exemples sur 80+ missions menées.        │  │
│  │                                                   │  │
│  │  [Filtres : Tous / Industrie / Tertiaire / Part]  │  │
│  │                                                   │  │
│  │  ┌──────┐ ┌──────┐ ┌──────┐                       │  │
│  │  │ Card │ │ Card │ │ Card │                       │  │
│  │  │ 1    │ │ 2    │ │ 3    │                       │  │
│  │  └──────┘ └──────┘ └──────┘                       │  │
│  │  ┌──────┐ ┌──────┐ ┌──────┐                       │  │
│  │  │ Card │ │ Card │ │ Card │                       │  │
│  │  │ 4    │ │ 5    │ │ 6    │                       │  │
│  │  └──────┘ └──────┘ └──────┘                       │  │
│  │                                                   │  │
│  │  [CTA secondaire] Voir les 80 études de cas →     │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

#### Spécifications

- **Container** : max-w-1280 mx-auto, padding `py-32 lg:py-40`
- **Grille** : `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8`
- **6 cards affichées** (vs 12 actuellement). Les 6 autres sont sur `/etudes-de-cas`
- **Mix recommandé** : 3 industrie + 2 tertiaire + 1 particulier (refléter la priorité business)
- **Filtres** : 4 boutons "pill" en haut (Tous, Industrie, Tertiaire, Particuliers). Filtre actif : fond --primary, texte blanc. Inactif : transparent + bordure.

#### Card étude de cas — structure

```
┌───────────────────────────────┐
│  PHOTO HEADER (ratio 16/10)   │
│  (placeholder Unsplash)       │
├───────────────────────────────┤
│                               │
│  [Tag secteur] · CASE-001     │ <- mono small
│                               │
│  H4 Laiterie de Bretagne      │ <- Inter 600
│                               │
│  Sub courte (1 ligne)         │
│  220 GWh annuels · IAA        │
│                               │
│  ─────────────                │
│                               │
│  ┌──────┐ ┌──────┐ ┌──────┐   │
│  │184k€ │ │98,5k€│ │2,1ans│   │ <- 3 KPI
│  │Inves.│ │Prime │ │ ROI  │   │
│  └──────┘ └──────┘ └──────┘   │
│                               │
│  → Lire le cas complet        │
└───────────────────────────────┘
```

- Hover : translateY -4px, shadow renforcée, photo scale 1.03 (interne au container card)
- Click : ouvre la page détail `/etudes-de-cas/[slug]`

#### Texte exact

**Eyebrow** : `Études de cas`

**H2** :
```
Des résultats chiffrés, vérifiables.
```

**Sub** :
```
Six exemples sur les 80+ missions menées par Agence 3E Audit
et Agence 3E Solutions depuis 2023. Chiffres clients réels
ou cas types sectoriels indicatifs (mention explicite).
```

**Filtres** : `Tous` (actif par défaut), `Industrie`, `Tertiaire`, `Particuliers`

**6 cas à afficher** :

1. **CASE-001** Laiterie de Bretagne — IAA, 184 k€ / 98,5 k€ / 2,1 ans (réel)
2. **CASE-002** Plasturgie Auvergne — Plasturgie, 312 k€ / 167 k€ / 3,2 ans (cas type)
3. **CASE-003** Blanchisserie hospitalière IDF — Blanchisserie, 247 k€ / 138 k€ / 3,8 ans (cas type)
4. **CASE-009** Bureaux La Défense — Tertiaire, X k€ / X k€ / X ans (existant ?)
5. **CASE-007** Datacenter IDF — Tertiaire, X k€ / X k€ / X ans (existant ?)
6. **CASE-013** Maison individuelle — Particuliers, 35 k€ / 14 k€ / 2,5 ans (réel ou cas type)

**CTA secondaire** :
```
Voir les 80 études de cas →
```
→ pointe vers `/etudes-de-cas`

#### Position dans la page

Après l'encart DDADUE. Espace avant : `--space-block-lg`. Espace après : `--space-block-xl`.

---

### 3.8 Timeline 4 étapes (gardé, ajusté typo)

Section conservée. Container 880px (texte éditorial).

#### Spécifications

- **Container** : max-w-880 mx-auto
- **Layout horizontal desktop** : 4 étapes en ligne avec connecteurs
- **Layout vertical mobile** : étapes empilées avec ligne verticale connectrice

#### Texte exact (à reprendre identique à l'existant)

**Eyebrow** : `Méthode`

**H2** :
```
Quatre étapes, un seul interlocuteur.
```

**Étape 1** :
```
[01]
Cadrage NDA
Semaine 0
Comprendre vos enjeux. Signature NDA, recueil
documentaire, périmètre d'audit défini.
```

**Étape 2** :
```
[02]
Audit énergétique DDADUE
Semaines 1-6
Visite de site, campagne de mesures, modélisation
des gisements. Livrable : rapport NF EN 16247-3.
```

**Étape 3** :
```
[03]
Montage CEE
Semaines 7-10
Constitution des dossiers de prime CEE, négociation
auprès des délégataires, mandat de courtage signé.
```

**Étape 4** :
```
[04]
Pilotage AMO travaux
Semaines 11-30+
Qualification installateurs RGE, suivi chantier,
réception. Versement prime CEE sous 60 jours
après mise en service.
```

#### Position dans la page

Après les études de cas. Espace avant : `--space-block-xl`. Espace après : `--space-block-lg`.

---

### 3.9 Ressources (gardé, ajusté layout)

Section conservée. Container 1280px (grille).

#### Spécifications

- **Container** : max-w-1280 mx-auto
- **Grille** : `grid grid-cols-1 md:grid-cols-3 gap-8`
- **3 cards** : 2 articles blog + 1 guide PDF téléchargeable

#### Texte (à reprendre de l'existant ou adapter)

**Eyebrow** : `Ressources`

**H2** :
```
Aller plus loin.
```

**Sub** :
```
Articles, guides et fiches pratiques pour comprendre
le dispositif CEE et l'audit DDADUE.
```

**Card 1** : Article récent du blog
**Card 2** : Article récent du blog
**Card 3** : Guide PDF téléchargeable (DDADUE 2026 ou Top 10 fiches CEE industrie)

**CTA secondaire** :
```
Voir toutes les ressources →
```

#### Position dans la page

Avant le footer. Espace avant : `--space-block-lg`. Espace après : `--space-block-md`.

---

## 4. SPEC HEADER v3

Le header v2 a été refait Phase 1. Il faut juste **2 ajustements** pour résoudre la critique UX "burger desktop".

### 4.1 Breakpoint burger

**Actuel** : burger visible jusqu'à ~1280px
**v3** : burger visible **uniquement** jusqu'à 1024px

```css
/* À modifier */
@media (max-width: 1023px) {
  /* afficher burger */
}
@media (min-width: 1024px) {
  /* afficher nav horizontale 6 entrées */
}
```

### 4.2 Container header

**Actuel** : container probablement 880-1024px
**v3** : container max 1440px aligné avec le hero

### 4.3 Tout le reste du header est préservé

- Mega-menus 4 entrées (déjà fait Phase 1)
- TopBar bleu nuit fin (préservé)
- Sticky avec backdrop-blur (préservé)
- Logo "Agence 3E" (préservé)
- CTA téléphone droite (préservé)
- CTA vert "Demander un rappel" (préservé)
- Sticky CTA mobile "J-522" (préservé, breakpoint 768px)

---

## 5. SPEC FOOTER v3

Footer préservé tel qu'il a été refait Phase 1. **Un seul ajustement** :

### 5.1 Container

**v3** : container max 1440px (cohérent avec header et hero)

Le reste (5 colonnes, mention juridique des deux entités, copyright) est conservé.

---

## 6. COMPOSANTS À CRÉER / REFACTORER

### 6.1 Composants à CRÉER (nouveaux)

| Composant | Fichier | Usage |
|---|---|---|
| `HeroV3` | `components/sections/home/HeroV3.tsx` | Hero refondu avec triple mockup |
| `PilierV3` | `components/sections/home/PilierV3.tsx` | Pilier 3 chiffres renforcé |
| `SimulateurEncart` | `components/sections/home/SimulateurEncart.tsx` | Encart simulateur remonté |
| `TriplePromesseV3` | `components/sections/home/TriplePromesseV3.tsx` | Triple promesse v3 |
| `SelecteurPersonas` | `components/sections/home/SelecteurPersonas.tsx` | Sélecteur 3 personas (REMPLACE PolesSection) |
| `EncartDDADUE` | `components/sections/home/EncartDDADUE.tsx` | Encart DDADUE container 880 |
| `CasesGrille` | `components/sections/home/CasesGrille.tsx` | Études de cas en grille 3 colonnes |
| `MockupTriple` | `components/mockups/MockupTriple.tsx` | Triple mockup hero (PDF + Dashboard + Planning) |
| `MockupPlanning` | `components/mockups/MockupPlanning.tsx` | Mockup planning AMO (à créer si absent) |

### 6.2 Composants à REFACTORER

| Composant | Action |
|---|---|
| `SiteHeader` | Modifier breakpoint burger : `< 1024px` au lieu de `< 1280px`. Container max 1440. |
| `SiteFooter` | Container max 1440 (pas de changement de contenu) |
| `HowSection` (Timeline) | Container max 880, ajustement typo |
| `ResourcesSection` | Container max 1280, grille 3 colonnes |
| `app/page.tsx` | Recomposition complète : importer les v3 components, retirer les v2 |

### 6.3 Composants à SUPPRIMER

| Composant | Raison |
|---|---|
| `PolesSection` (mosaïque 50/25/25) | Remplacé par `SelecteurPersonas` |
| `HeroSection` v2 | Remplacé par `HeroV3` |
| `PilierSection` v2 | Remplacé par `PilierV3` |
| `PromiseSection` v2 | Remplacé par `TriplePromesseV3` |
| `DDADUESection` v2 | Remplacé par `EncartDDADUE` |
| `CasesSection` v2 | Remplacé par `CasesGrille` |
| `SimSection` v2 | Remplacé par `SimulateurEncart` |
| `IndepSection` | Déjà supprimé Phase 2 |

### 6.4 Composants à PRÉSERVER (aucun changement)

- `Aurore` + tous les SVG variants
- `AuroreDefs`
- `Reveal`
- `Topbar`
- `StickyMobileCTA`
- Mockups individuels existants : `HeroMockup`, `PromiseMockups` (réutilisés dans `MockupTriple`)
- `CaseMini` (réutilisé dans `CasesGrille`)

---

## 7. MÉTA-PROMPT ORCHESTRÉ POUR CLAUDE CODE

### 7.1 Pré-flight (à faire toi-même AVANT de lancer Claude Code)

```bash
cd ~/agence3e-claude
git status                    # doit être clean
npm run build                 # doit passer
npm run typecheck             # doit passer
git checkout -b refonte-home-v3   # branche dédiée pour la refonte
```

Crée le brief en local pour que Claude Code puisse le lire :

```bash
cp ~/Downloads/BRIEF_REFONTE_HOME_V3.md contenus/
ls -la contenus/             # vérifier présence
```

Lance Claude Code :

```bash
claude
```

### 7.2 Méta-prompt à coller

```
MISSION

Refondre intégralement la Home du site agence3e-claude
selon le brief pixel-perfect v3 que je te fournis dans
/contenus/BRIEF_REFONTE_HOME_V3.md.

Le brief contient :
- Diagnostic v2 et cibles repositionnées
- Principes de design v3 (containers, spacing, typo, animations)
- Spec précise par section (9 sections)
- Spec header v3 et footer v3
- Liste exhaustive des composants à créer / refactorer / supprimer

OBJECTIF GLOBAL

Une Home v3 qui :
- Élargit le container à 1440px (résout viewport étroit)
- Désactive le burger desktop (résout navigation cachée)
- Repositionne en bénéfices clients (pas en techniques)
- Cible 3 personas claires (DG industriel / gestionnaire tertiaire /
  particulier) via un sélecteur explicite
- Remonte le simulateur près du hero (résout conversion)
- Affiche les études de cas en grille 3 colonnes
- Préserve la DA Aurore Stripe (aurores, tri-typographie,
  variables CSS, mockups SaaS, animations)

ORDRE D'EXÉCUTION — 4 PHASES

Tu vas exécuter 4 phases dans cet ordre strict, avec
validation entre chaque :

  Phase A — Foundation
            (Hero v3 + Pilier v3 + Triple promesse v3)
  
  Phase B — Personas & conversion
            (Sélecteur personas + Études de cas grille)
  
  Phase C — Encarts & rythme
            (Encart simulateur remonté + Encart DDADUE +
             Timeline ajustée + Ressources ajustée)
  
  Phase D — Layout global & finitions
            (Header breakpoints + Footer container +
             Container responsive global + recomposition
             app/page.tsx + tests mobile)

RÈGLES NON NÉGOCIABLES

1. Lis le brief EN ENTIER avant de commencer la Phase A.
   Sections concernées par phase :
   - Phase A : §3.1, §3.2, §3.4
   - Phase B : §3.5, §3.7
   - Phase C : §3.3, §3.6, §3.8, §3.9
   - Phase D : §4, §5, §6, recomposition app/page.tsx

2. À chaque fin de phase, ARRÊTE-TOI, fais un récapitulatif
   précis, fais un git commit explicite, et ATTENDS ma
   validation explicite avant de passer à la suivante.

3. Préserve la DA Aurore Stripe : aurores SVG, tri-typographie,
   variables CSS du design system, mockups SaaS existants,
   4 animations existantes. Ne remets pas en cause ces choix.

4. Reprends EXACTEMENT les textes du brief. Pas de paraphrase,
   pas d'invention. Si un texte t'apparaît imparfait, signale-le
   mais utilise-le tel quel ; je le corrigerai après.

5. À chaque modification, vérifie que `npm run typecheck` et
   `npm run build` continuent de passer. Si une erreur apparaît,
   corrige-la AVANT de continuer.

6. Tu travailles sur la branche refonte-home-v3 (déjà créée).
   Tu fais des commits intermédiaires entre chaque phase mais
   tu ne push PAS avant validation finale.

7. Si tu hésites sur un détail visuel non spécifié dans le
   brief, choisis l'option qui ressemble le plus à Linear /
   Qonto / Stripe (premium B2B sobre).

================================================================
PHASE A — Foundation : Hero + Pilier + Triple promesse
================================================================

Lis §3.1, §3.2, §3.4 du brief.

ÉTAPE A.1 — Créer composants v3
- components/sections/home/HeroV3.tsx selon §3.1
- components/sections/home/PilierV3.tsx selon §3.2
- components/sections/home/TriplePromesseV3.tsx selon §3.4
- components/mockups/MockupTriple.tsx selon §3.1 (utiliser
  les mockups existants HeroMockup, PromiseMockups en compositions)
- components/mockups/MockupPlanning.tsx si pas existant
  (sinon réutiliser MOCKUP_TABLEAU_CUMAC)

Pour chaque composant : reprendre EXACTEMENT les textes du brief,
les classes Tailwind suggérées, les containers max-width, les
animations reveal.

ÉTAPE A.2 — Tests visuels en local
- Créer une page test temporaire app/test-home-v3/page.tsx qui
  importe les 3 nouveaux composants et les affiche côte à côte.
- npm run dev
- Vérifier visuellement chaque composant

ÉTAPE A.3 — Vérifications techniques
- npm run typecheck → clean
- npm run build → clean
- Lighthouse mobile : note > 90

ÉTAPE A.4 — Commit
git add .
git commit -m "feat(home v3): hero + pilier + triple promesse
foundation"

ÉTAPE A.5 — STOP & VALIDATION

Affiche-moi :
- Liste des fichiers créés
- Diff de chaque composant (sections clés)
- URL locale http://localhost:XXXX/test-home-v3
- Statut typecheck + build
- Toute question ouverte

ATTENDS "OK phase A, continue phase B" avant d'enchaîner.

================================================================
PHASE B — Personas & conversion
================================================================

Lis §3.5 et §3.7 du brief.

ÉTAPE B.1 — Créer composants v3
- components/sections/home/SelecteurPersonas.tsx selon §3.5
  (REMPLACE PolesSection à terme)
- components/sections/home/CasesGrille.tsx selon §3.7
  (REMPLACE CasesSection à terme)

Pour SelecteurPersonas :
- 3 tuiles avec aurores variantes (industrie chaude, tertiaire
  froide, residentiel verte)
- Click → navigation immédiate vers /pole-industrie,
  /pole-tertiaire, /pole-residentiel
- Texte exact du brief
- Animations reveal cascadées

Pour CasesGrille :
- 6 cards en grille 3 colonnes desktop, 1 colonne mobile
- 4 filtres pill : Tous / Industrie / Tertiaire / Particuliers
- Données : reprendre cases existants (content/cases.ts) +
  filtrer / sélectionner les 6 cas mentionnés au brief §3.7
- CTA secondaire bottom : "Voir les 80 études de cas →"

ÉTAPE B.2 — Tests visuels
- Ajouter à app/test-home-v3/page.tsx les 2 nouveaux composants
- Vérifier en desktop ET mobile (DevTools 375px, 768px, 1280px,
  1440px)

ÉTAPE B.3 — Vérifications techniques
- typecheck + build clean

ÉTAPE B.4 — Commit
git commit -m "feat(home v3): sélecteur personas + études de cas
en grille"

ÉTAPE B.5 — STOP & VALIDATION

Affiche-moi :
- Diff des 2 nouveaux composants
- Test des 4 filtres études de cas (montrer captures)
- Test du sélecteur personas (clic sur chaque tuile = navigation)
- URL locale

ATTENDS "OK phase B, continue phase C" avant d'enchaîner.

================================================================
PHASE C — Encarts & rythme
================================================================

Lis §3.3, §3.6, §3.8, §3.9 du brief.

ÉTAPE C.1 — Créer / refactorer composants
- components/sections/home/SimulateurEncart.tsx (NEW) selon §3.3
- components/sections/home/EncartDDADUE.tsx (NEW) selon §3.6
- Refactoriser HowSection vers container 880 max et typo ajustée
  selon §3.8
- Refactoriser ResourcesSection vers container 1280 max grille
  3 colonnes selon §3.9

ÉTAPE C.2 — Tests visuels
- Compléter app/test-home-v3/page.tsx avec ces 4 sections
- Vérifier la cohérence des paddings entre sections (les
  --space-block-* doivent créer un rythme visuel)

ÉTAPE C.3 — Vérifications techniques
- typecheck + build clean

ÉTAPE C.4 — Commit
git commit -m "feat(home v3): encart simulateur remonté + DDADUE
container 880 + timeline + ressources ajustés"

ÉTAPE C.5 — STOP & VALIDATION

Affiche-moi :
- Diff des composants
- Capture de chaque section sur la page de test
- Vérification des containers max-width respectés (1440 / 1280
  / 880 selon section)
- URL locale

ATTENDS "OK phase C, continue phase D" avant d'enchaîner.

================================================================
PHASE D — Layout global & finitions
================================================================

Lis §4, §5, §6 du brief.

ÉTAPE D.1 — Header v3
- Modifier components/SiteHeader.tsx :
  - Breakpoint burger : passer de < 1280 à < 1024
  - Container max 1440 (pas 880 ou 1280)
- Vérifier que les mega-menus desktop s'affichent à partir de
  1024px et que le burger reste fonctionnel < 1024px

ÉTAPE D.2 — Footer v3
- Modifier components/SiteFooter.tsx :
  - Container max 1440 (pas autre)
- Pas de changement de contenu

ÉTAPE D.3 — Recomposition app/page.tsx
RECOMPOSER ENTIÈREMENT app/page.tsx pour qu'elle utilise les
composants v3 dans cet ordre exact :

  1. <HeroV3 />
  2. <PilierV3 />
  3. <SimulateurEncart />
  4. <TriplePromesseV3 />
  5. <SelecteurPersonas />
  6. <EncartDDADUE />
  7. <CasesGrille />
  8. <HowSection />            (existant, refactorisé Phase C)
  9. <ResourcesSection />      (existant, refactorisé Phase C)

Retirer tous les imports v2 obsolètes :
- HeroSection (v2)
- PilierSection (v2)
- PromiseSection (v2)
- PolesSection (mosaïque obsolète)
- DDADUESection (v2)
- CasesSection (v2)
- SimSection (v2)
- IndepSection (déjà supprimé Phase 2)

ÉTAPE D.4 — Suppression des composants obsolètes
SUPPRIMER les fichiers suivants (devenus orphelins) :
- components/sections/home/HeroSection.tsx (v2)
- components/sections/home/PilierSection.tsx (v2)
- components/sections/home/PromiseSection.tsx (v2)
- components/sections/home/PolesSection.tsx (mosaïque)
- components/sections/home/DDADUESection.tsx (v2)
- components/sections/home/CasesSection.tsx (v2)
- components/sections/home/SimSection.tsx (v2)

ÉTAPE D.5 — Suppression de la page de test
Supprimer app/test-home-v3/page.tsx (page temporaire de test).

ÉTAPE D.6 — Tests responsives finaux
Tester avec DevTools mobile :
- 375px (iPhone SE) : tout fonctionne, pas de débordement
- 768px (iPad portrait) : transitions de layout correctes
- 1024px (iPad landscape) : burger devient nav horizontale
- 1280px (desktop standard) : layout 3 colonnes lisible
- 1440px (desktop large) : containers respectés, espace blanc
  côté élégant
- 1920px (desktop XL) : toujours centré sur 1440 max, pas de
  étirement

ÉTAPE D.7 — Vérifications finales
- npm run typecheck → clean
- npm run build → clean (lister les 95+ pages prerendered)
- npm run lint → clean
- Lighthouse mobile + desktop : notes > 90

ÉTAPE D.8 — Commit final
git add .
git commit -m "feat(home v3): refonte complète - layout 1440 max,
burger desktop supprimé, recomposition app/page.tsx, suppression
composants v2 obsolètes"

ÉTAPE D.9 — STOP & VALIDATION FINALE

Affiche-moi :
- Liste totale des fichiers créés (Phase A+B+C+D)
- Liste totale des fichiers modifiés
- Liste totale des fichiers supprimés (Phase D)
- Statut technique : typecheck / build / lint / lighthouse
- URL locale finale (http://localhost:XXXX/)
- Captures d'écran : Home v3 desktop 1440 + mobile 375
- Toute question ouverte ou point de vigilance

ATTENDS "OK refonte v3 validée, push" pour pousser sur GitHub.

================================================================
APRÈS VALIDATION FINALE
================================================================

a) Push de la branche refonte-home-v3 :
   git push -u origin refonte-home-v3

b) Donne-moi :
   - URL du repo GitHub avec lien vers la PR (Pull Request)
     suggérée
   - Nombre total de commits sur la branche
   - Diff stat global (lignes ajoutées / supprimées / fichiers
     modifiés)
   - URL Vercel preview à jour si déploiement automatique

c) Je validerai la PR moi-même côté GitHub. Ne fais PAS le merge
   automatiquement.

================================================================
SI TU RENCONTRES UN PROBLÈME
================================================================

- Ambiguïté sur un texte ou un détail technique : DEMANDE-MOI
  avant d'inventer.
- Build casse : NE PASSE PAS À L'ÉTAPE SUIVANTE. Corrige d'abord.
- Composant v2 difficile à supprimer (dépendances ailleurs) :
  signale-le, je décide.
- Animation qui plante au reveal : désactive temporairement,
  signale, on debug ensemble.
- Si une phase prend > 90 minutes : marque un point d'arrêt,
  fais un commit intermédiaire WIP, demande-moi confirmation.

ON COMMENCE PAR LA PHASE A.
```

---

## 8. NOTES DE VIGILANCE POUR TOI

### 8.1 Photos placeholder

Tu n'as **toujours pas lancé la collecte photos** de Claude Design (prompt déjà préparé il y a quelques jours). Pour la refonte v3 :
- Les **6 cards d'études de cas** ont besoin de 6 photos header (industrie, tertiaire, particuliers)
- Les **3 tuiles personas** peuvent fonctionner sans photo (juste aurore + icon SVG)
- Le **mockup triple du hero** utilise des mockups SaaS, pas des photos

**Tu peux donc lancer la refonte avant la collecte photos**, et remplacer les photos plus tard par simple substitution d'URL. Je le précise dans le brief.

### 8.2 Chiffres à valider avant publication finale

- **+12 à +25 % prime CEE négociée vs marché spot** — chiffre que tu m'avais donné dans la note de cadrage. À garder ou ajuster ?
- **15 à 35 % d'économies validées par audit** — fourchette large mais réaliste pour les secteurs ciblés. OK selon ton expérience ?
- **ROI moyen 2,8 ans** — à confirmer (sur la moyenne de tes cas, avec ou sans prime CEE déduite ?)
- **Prime versée sous 60 jours** — à confirmer selon ton organisation interne (vs Hellio qui dit "garantie après validation dossier")
- **80+ missions menées** — chiffre crédible si réel, sinon adapter

### 8.3 Risques de régression visuelle à surveiller

1. **Aurore qui disparaît** sur le sélecteur personas : importer correctement
2. **Mockups qui débordent** sur mobile dans le hero v3 : prévoir crop ou affichage 1 seul mockup
3. **Burger qui ne se ferme pas** quand on clique sur un lien (problème UX classique)
4. **Filtres études de cas** : ne pas oublier la transition d'animation entre filtres
5. **Sticky CTA mobile** : doit rester en bas et ne PAS chevaucher le footer

### 8.4 Décisions reportées (sprint suivant)

- Le **mode "vulgarisation"** (tooltips sur acronymes DDADUE, OPERAT, etc.) demandé par le retour UX externe → reporté à un sprint dédié glossaire
- Les **photos pro de l'équipe** → après shoot photo professionnel
- L'**estimateur 30 secondes** dans le hero (vs 4 questions) → demandera un mini-simulateur à créer, reporté

### 8.5 Critères de validation finale (à vérifier toi-même)

```
□ La Home s'affiche correctement en 1440px desktop (pas étroit)
□ Le burger n'apparaît qu'en dessous de 1024px
□ Le hero v3 montre 3 mockups empilés avec aurore
□ Les 3 chiffres clés (522 / 2,75 / 2-4 %) sont en cards séparées
□ L'encart simulateur est en haut (avant la triple promesse)
□ La triple promesse a 3 verbes d'action (Anticipez / Allégez /
  Capturez)
□ Le sélecteur personas a 3 tuiles (Dirigeant industriel /
  Gestionnaire tertiaire / Propriétaire) avec aurores et CTAs
□ Les études de cas sont en grille 3 colonnes desktop
□ Les 4 filtres pills fonctionnent (Tous / Industrie /
  Tertiaire / Particuliers)
□ La timeline 4 étapes est en container 880 (lecture confort)
□ Les ressources sont en grille 3 colonnes
□ Le footer affiche la mention juridique des deux entités
□ Sticky CTA mobile fonctionne et ne chevauche rien
□ Lighthouse mobile > 90
□ Lighthouse desktop > 95
```

---

## FIN DU BRIEF v3
