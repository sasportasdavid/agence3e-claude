# MENU & HOME v2 — Agence 3E

Ce document contient les instructions précises à donner à Claude Code pour ajuster la structure du site selon les 4 critiques formulées :

1. La présence trop visible de l'indépendance qui crée un effet défensif
2. Les 3 segments mal identifiés dans le menu actuel
3. Les 3 verticaux forts trop centraux
4. Le sentiment "comme si on ne savait faire que ça"

L'objectif n'est pas de tout réécrire mais d'**ajuster la structure et la hiérarchie visuelle** pour obtenir un site plus large, plus accueillant et plus lisible, sans casser ce qui a été construit.

---

## 1. NOUVELLE STRUCTURE DU HEADER

### Header actuel

```
[ Pôles d'expertise ▼ ] [ Services ] [ Comprendre ] [ Études de cas ] [ Cabinet ] [ Contact ]
                                       └─ mega-menu cachant Industrie / Tertiaire / Résidentiel
```

**Problème** : un visiteur résidentiel ne clique jamais sur "Pôles d'expertise" — c'est trop B2B abstrait. Hellio et Effy mettent les segments en premier niveau (Hellio : 9 secteurs en accès direct ; Effy : focus exclusif particulier).

### Header v2 cible

```
[ Industrie ▼ ] [ Tertiaire ▼ ] [ Particuliers ▼ ] [ Services ] [ Ressources ▼ ] [ Contact ]
```

Six entrées de premier niveau, dont 4 avec mega-menu (Industrie, Tertiaire, Particuliers, Ressources) et 2 sans (Services, Contact). Plus aucune entrée "Pôles d'expertise" qui regroupait artificiellement les 3 segments.

### Détail mega-menu **Industrie**

3 colonnes :

**Colonne 1 — Vos secteurs**
- Agroalimentaire & process froid
- Plasturgie
- Blanchisseries industrielles
- Métallurgie & fonderie
- Chimie, pharmacie & cosmétique
- Imprimerie & industries graphiques
- Bois, papier & carton
- Verre & céramique
- → **Mon secteur n'y est pas** (lien vers formulaire de contact)

**Colonne 2 — Conformité réglementaire**
- Audit énergétique DDADUE
- Décret BACS industriel
- Certification ISO 50001
- Audit volontaire / pré-audit

**Colonne 3 — Financement & accompagnement**
- Montage dossiers CEE
- Courtage de la prime CEE
- Catalogue 130 fiches CEE industrie
- Pacte Industrie & subventions
- AMO travaux

CTA bas de mega-menu : *« Pré-qualifier mon site industriel »* (lien vers formulaire industrie).

### Détail mega-menu **Tertiaire**

3 colonnes :

**Colonne 1 — Vos types de bâtiment**
- Bureaux & sièges sociaux
- Commerces & retail
- Hôtellerie & restauration
- Établissements de santé
- Établissements d'enseignement
- Établissements sportifs & loisirs
- Datacenters
- Logement social

**Colonne 2 — Conformité réglementaire**
- Décret tertiaire (DEET)
- Décret BACS
- Audit énergétique réglementaire
- Plateforme OPERAT

**Colonne 3 — Financement & accompagnement**
- Montage dossiers CEE
- Catalogue fiches CEE tertiaire
- AMO travaux
- Schéma Directeur Immobilier Énergétique (SDIE)

CTA bas : *« Évaluer ma trajectoire DEET »*.

### Détail mega-menu **Particuliers**

3 colonnes :

**Colonne 1 — Maisons & appartements**
- Isolation des combles
- Isolation des murs
- Isolation des planchers bas
- Pompe à chaleur
- Chaudière biomasse
- Système solaire combiné
- Borne de recharge

**Colonne 2 — Copropriétés**
- Diagnostic Performance Énergétique (DPE)
- Plan Pluriannuel de Travaux (PPT)
- Audit énergétique en copropriété
- Rénovation globale
- Sortie de passoire thermique

**Colonne 3 — Aides & financement**
- MaPrimeRénov'
- Prime CEE
- Éco-PTZ
- TVA réduite à 5,5 %
- Aides locales
- Cumul des aides

CTA bas : *« Calculer mes aides »* (lien vers le simulateur, pré-rempli "résidentiel").

### Détail mega-menu **Ressources**

2 colonnes + une zone dédiée :

**Colonne 1 — Comprendre**
- Le dispositif des CEE expliqué
- La loi DDADUE et l'audit obligatoire
- Le décret tertiaire en pratique
- Le décret BACS
- ISO 50001 vs audit DDADUE
- L'indépendance auditeur (NF EN 16247)
- Calendrier réglementaire 2026

**Colonne 2 — Études de cas**
- Toutes les études de cas
- Cas Industrie
- Cas Tertiaire
- Cas Résidentiel

**Zone de droite** : 3 cards visuelles
- Article récent du blog
- Guide PDF téléchargeable
- Glossaire CEE / DDADUE

### Comportement responsive du header

- ≤ 1024px : transformer le header en burger menu
- Le burger menu reprend la même structure que les mega-menus, accordéon par section
- Sur mobile, sticky CTA "J–522" inchangé en bas d'écran

### Page **Services** (entrée header de premier niveau, sans mega-menu)

Cette page liste l'ensemble des services transversaux qui ne sont pas spécifiques à un segment :

- Audit énergétique (DDADUE / volontaire / ISO 50001)
- Montage de dossiers CEE
- Courtage de la prime CEE
- AMO travaux d'efficacité énergétique
- Mise en relation installateurs RGE
- Études thermiques RT/RE
- Bilan carbone & GES
- Suivi quadriennal & veille réglementaire

---

## 2. AJUSTEMENTS DE LA HOME

### Diagnostic des sections actuelles

D'après ce que Claude Design a généré, la Home a 10 sections :
1. Hero
2. Pilier (3 chiffres DDADUE)
3. Triple promesse (3 cards pastel)
4. Pôles (mosaïque 50/25/25)
5. Indépendance (encart sombre full-width)
6. DDADUE (encart pastel)
7. Cas (12 études)
8. How (timeline 4 étapes)
9. Simulateur (encart vert)
10. Ressources (3 cards articles)

**Problème principal** : l'indépendance apparaît 5 fois au total sur la page (hero, encart sombre, footer, ddadue-section, mention dans triple promesse). Effet "trop défensif".

### Modifications à apporter

#### Modification 1 — Hero

**État actuel** : H1 + sub-headline + 2 CTAs + trust row + mockup floater + aurore.

Le hero contient déjà la mention "indépendance" dans la sub-headline.

**Modification** :
- **Garder** le H1 italique sur "un seul interlocuteur" (c'est élégant et factuel, ce n'est pas lourd)
- **Réécrire** la sub-headline pour retirer la mention "indépendance" et la remplacer par un message orienté valeur

Sub-headline actuelle (probablement) : « Cabinet de conseil indépendant en performance énergétique. Audit DDADUE, montage CEE, AMO travaux. France métropolitaine et outre-mer. »

**Sub-headline v2** :

> *« Audit DDADUE conforme NF EN 16247, montage CEE compétitif, suivi du gisement à la mise en service. Industrie, tertiaire, résidentiel — France métropolitaine et outre-mer. »*

**Justification** : on remplace "indépendant" (posture) par "conforme NF EN 16247" (preuve technique factuelle) + on liste les 3 prestations + on rappelle la couverture territoriale. Plus sobre, plus opérationnel.

#### Modification 2 — Triple promesse

**État actuel** : 3 cards = Réglementaire (DDADUE) / Bancable / +12 à +25 % (négocié).

La 3e promesse "+12 à +25 % négocié" mentionne probablement l'indépendance dans son texte.

**Modification** : remplacer la 3e promesse par **« Suivi pluriannuel inclus »** ou **« Engagement contractuel »**, plus orientée valeur client que posture.

**Texte cible 3e promesse v2** :

```
Badge : Suivi inclus
Titre : Suivi pluriannuel garanti.
Description : Veille réglementaire, points trimestriels, déclaration OPERAT, remontée du terrain. Pendant 4 ans, on reste à vos côtés.
Stat 1 : Durée — 4 ans
Stat 2 : Points — trimestriels
```

**Justification** : un industriel achète aussi du long terme. La promesse de suivi est ce qui différencie une mission d'audit "one-shot" d'un partenariat. Effy et Hellio insistent tous les deux sur le suivi.

#### Modification 3 — Section Pôles (mosaïque 50/25/25)

**État actuel** : Pôle Industrie large (50 %) + Pôle Tertiaire (25 %) + Pôle Résidentiel (25 %).

**Le 50/25/25 est le bon choix** parce qu'il reflète le poids commercial réel des 3 segments. À garder.

**Mais** : changer le libellé "Pôle Résidentiel" en **"Pôle Particuliers"** dans le header ET dans la mosaïque. Plus parlant pour le visiteur grand public. URL technique conservée à `/pole-residentiel/`.

#### Modification 4 — Section Indépendance (encart full-width sombre)

**État actuel** : encart pleine largeur fond bleu nuit avec gros titre sur l'indépendance.

**C'est le problème principal** : c'est ce bloc qui rend le site "défensif". Il occupe une section entière et raconte une posture morale.

**Modification : SUPPRIMER cette section de la Home.**

**Mais** : créer/garder une **page dédiée `/cabinet/notre-independance`** accessible depuis le mega-menu Ressources et depuis le footer. Les prospects qui ont la question viendront chercher la réponse, mais les autres ne se la poseront plus.

**Avantage** : la Home gagne en respiration. Le sujet n'est pas escamoté, il est traité au bon endroit.

#### Modification 5 — Section DDADUE (encart pastel)

**État actuel** : encart pastel orange/rose avec rappel calendrier 11 oct 2026, J-522, sanctions 2 % et 4 %.

**Modification** : garder cette section, c'est la **vraie** preuve d'expertise. Mais **enlever toute mention secondaire de l'indépendance** si elle apparaît dans le sous-texte. Ne parler que de la conformité NF EN 16247 (factuel, technique) et du calendrier (urgence opérationnelle).

#### Modification 6 — Études de cas (12 cards)

**État actuel** : 12 cards d'études de cas, probablement filtrables par segment.

**Modification** : aucune sur le contenu. **Mais** : s'assurer que les 12 cas sont équilibrés entre les 3 segments :
- 6 cas industrie (dont 2 IAA, 2 plasturgie, 1 blanchisserie, 1 autre secteur — métallurgie ou imprimerie)
- 4 cas tertiaire (1 hôtellerie, 1 datacenter, 1 bureau, 1 commerce/retail)
- 2 cas résidentiel (1 maison individuelle, 1 copropriété)

Avec ces 12 cas, le visiteur comprend immédiatement que l'agence couvre les 3 segments avec des références concrètes dans chacun.

#### Modification 7 — Footer

**État actuel** : footer 4-5 colonnes avec mention juridique des deux entités juridiquement distinctes.

**Modification** :
- **Garder** la mention juridique des deux entités (c'est une obligation de transparence, c'est sa place)
- **Reformuler** plus sobrement, sans tonalité "manifeste" :

**Texte actuel (estimé)** :
> *« Agence 3E – Agence Européenne pour l'Économie d'Énergie est une société privée indépendante. Aucun lien institutionnel avec une agence publique, l'ADEME, l'AEE (Agence Européenne pour l'Environnement) ou tout organisme communautaire. L'entité d'audit (Agence 3E Audit) et l'entité de hub commercial (Agence 3E Solutions) sont juridiquement distinctes — voir la page « Notre indépendance ». »*

**Texte v2** :
> *« Agence 3E — Agence Européenne pour l'Économie d'Énergie. Société privée. Aucun lien institutionnel avec une agence publique, l'ADEME, l'AEE (Agence Européenne pour l'Environnement) ou tout organisme communautaire. Notre activité d'audit énergétique et notre activité de courtage CEE sont conduites par deux entités juridiquement distinctes : Agence 3E Audit (audits NF EN 16247) et Agence 3E Solutions (montage et courtage CEE, mise en relation installateurs). Cette séparation respecte l'indépendance professionnelle requise par la norme. »*

**Justification** : on garde la transparence juridique (obligatoire pour un cabinet sérieux), mais on enlève le ton défensif ("aucun lien", "voir la page"). C'est factuel et calme.

### Récap modifications Home

| Section | Action | Effort |
|---|---|---|
| 1. Hero | Réécrire sub-headline | 5 min |
| 2. Pilier | Inchangé | — |
| 3. Triple promesse | Remplacer 3e promesse | 15 min |
| 4. Pôles | Renommer "Résidentiel" → "Particuliers" | 5 min |
| 5. Indépendance (encart sombre) | **SUPPRIMER de la Home** | 10 min |
| 6. DDADUE | Inchangé | — |
| 7. Études de cas | Vérifier équilibrage 6/4/2 | 30 min |
| 8. How (timeline) | Inchangé | — |
| 9. Simulateur teaser | Inchangé | — |
| 10. Ressources | Inchangé | — |
| Footer | Reformuler mention juridique | 10 min |

**Total : ~1h15 de travail Claude Code.**

---

## 3. PROMPT POUR CLAUDE CODE

Voici le prompt à coller dans Claude Code après le brief Sprint 1 (ou pendant le Sprint 2). Il est structuré pour qu'il puisse l'exécuter d'un seul jet.

```
Mise à jour structurelle de la Home et du Header.

OBJECTIF
Refondre la navigation principale et alléger les mentions
"indépendance auditeur" sur la Home, en gardant le sujet
traité au bon endroit (page dédiée + footer), pour que le
site paraisse moins défensif et que les 3 segments soient
mieux identifiés dès le premier scan visuel.

ÉTAPE 1 — REFONTE DU HEADER

Remplacer le header actuel par cette structure :

  [ Industrie ▼ ] [ Tertiaire ▼ ] [ Particuliers ▼ ]
  [ Services ] [ Ressources ▼ ] [ Contact ]

4 entrées avec mega-menu (Industrie, Tertiaire, Particuliers,
Ressources), 2 sans mega-menu (Services, Contact).

Mega-menu Industrie : 3 colonnes
- Colonne "Vos secteurs" : 8 secteurs (Agroalimentaire,
  Plasturgie, Blanchisseries, Métallurgie & fonderie, Chimie
  pharmacie & cosmétique, Imprimerie, Bois & papier, Verre
  & céramique) + lien "Mon secteur n'y est pas"
- Colonne "Conformité réglementaire" : Audit DDADUE,
  Décret BACS industriel, ISO 50001, Audit volontaire
- Colonne "Financement & accompagnement" : Montage CEE,
  Courtage prime CEE, Catalogue fiches CEE industrie,
  Pacte Industrie, AMO travaux

Mega-menu Tertiaire : 3 colonnes
- Colonne "Vos types de bâtiment" : Bureaux, Commerces,
  Hôtellerie, Santé, Enseignement, Sport & loisirs,
  Datacenters, Logement social
- Colonne "Conformité réglementaire" : Décret tertiaire,
  Décret BACS, Audit énergétique, OPERAT
- Colonne "Financement & accompagnement" : Montage CEE,
  Catalogue fiches CEE tertiaire, AMO travaux, SDIE

Mega-menu Particuliers : 3 colonnes
- Colonne "Maisons & appartements" : Isolation combles,
  Isolation murs, Isolation planchers, PAC, Chaudière
  biomasse, Solaire combiné, Borne de recharge
- Colonne "Copropriétés" : DPE, PPT, Audit énergétique
  copropriété, Rénovation globale, Sortie passoire
- Colonne "Aides & financement" : MaPrimeRénov', Prime
  CEE, Éco-PTZ, TVA 5,5 %, Aides locales, Cumul des aides

Mega-menu Ressources : 2 colonnes + zone droite
- Colonne "Comprendre" : Le dispositif des CEE, La loi
  DDADUE, Le décret tertiaire, Le décret BACS, ISO 50001
  vs audit DDADUE, L'indépendance auditeur, Calendrier
  réglementaire 2026
- Colonne "Études de cas" : Toutes / Industrie /
  Tertiaire / Résidentiel
- Zone droite : 3 cards visuelles (Article récent / Guide
  PDF / Glossaire)

Pour chaque mega-menu, ajouter en bas un CTA contextualisé :
- Industrie : "Pré-qualifier mon site industriel →"
- Tertiaire : "Évaluer ma trajectoire DEET →"
- Particuliers : "Calculer mes aides →" (vers simulateur)

Comportement responsive : ≤ 1024px, transformer en burger
menu accordéon par section principale.

Le sticky CTA mobile "J–522" reste inchangé.

ÉTAPE 2 — MODIFICATIONS HOME

a. Hero — réécrire la sub-headline.
   Texte actuel : à conserver le H1 italique "un seul
   interlocuteur" mais remplacer la sub-headline.
   Nouveau texte sub-headline :
   "Audit DDADUE conforme NF EN 16247, montage CEE
   compétitif, suivi du gisement à la mise en service.
   Industrie, tertiaire, résidentiel — France métropolitaine
   et outre-mer."

b. Triple promesse — remplacer la 3e card.
   Garder card 1 (Conformité DDADUE) et card 2 (Lisibilité
   financière / Bancable).
   Remplacer card 3 par :
   - Badge : Suivi inclus
   - Titre : Suivi pluriannuel garanti.
   - Description : Veille réglementaire, points trimestriels,
     déclaration OPERAT, remontée du terrain. Pendant 4 ans,
     on reste à vos côtés.
   - Stat 1 : Durée → 4 ans
   - Stat 2 : Points → trimestriels
   - Variante de couleur : pastel-blue (différencier visuellement
     des deux autres pastels).

c. Section Pôles — renommer la 3e tuile "Pôle Résidentiel"
   en "Pôle Particuliers". URL technique inchangée
   /pole-residentiel/.

d. Section Indépendance (encart sombre full-width) —
   SUPPRIMER ENTIÈREMENT cette section de la Home.
   Ne pas la déplacer ailleurs sur la Home.
   Cependant, conserver / créer la page dédiée
   /cabinet/notre-independance qui contient ce contenu.
   Cette page sera accessible depuis le mega-menu
   Ressources et depuis le footer.

e. Section DDADUE (encart pastel) — vérifier que les
   sous-textes ne mentionnent plus l'indépendance.
   Ne parler que de :
   - Calendrier (11 oct 2026, J–522)
   - Sanctions (2 % du CA HT, 4 % en récidive)
   - Conformité NF EN 16247-3
   - Périmètre (industriels > 2,75 GWh)

f. Études de cas — vérifier l'équilibrage à 6 cas Industrie /
   4 cas Tertiaire / 2 cas Particuliers. Si le mix actuel
   est différent, réorganiser pour atteindre cet équilibre.
   Cas Industrie attendus : 2 IAA, 2 plasturgie, 1 blanchisserie,
   1 autre secteur (métallurgie OU imprimerie).
   Cas Tertiaire attendus : 1 hôtellerie, 1 datacenter,
   1 bureaux/sièges, 1 commerce/retail.
   Cas Particuliers attendus : 1 maison individuelle,
   1 copropriété.

ÉTAPE 3 — FOOTER

Remplacer la mention juridique actuelle par cette nouvelle
version, plus sobre :

"Agence 3E — Agence Européenne pour l'Économie d'Énergie.
Société privée. Aucun lien institutionnel avec une agence
publique, l'ADEME, l'AEE (Agence Européenne pour
l'Environnement) ou tout organisme communautaire. Notre
activité d'audit énergétique et notre activité de courtage
CEE sont conduites par deux entités juridiquement distinctes :
Agence 3E Audit (audits NF EN 16247) et Agence 3E Solutions
(montage et courtage CEE, mise en relation installateurs).
Cette séparation respecte l'indépendance professionnelle
requise par la norme."

Ce texte reste dans le footer de TOUTES les pages du site.
Il est légalement structurant.

VALIDATION

Une fois les modifications faites :
- Vérifier que pnpm build passe sans erreur
- Vérifier visuellement la Home en local
- Faire un git commit avec le message
  "feat: refonte header 6 entrées + allégement mentions
   indépendance Home"
- Push sur GitHub

Donne-moi à la fin :
- La liste des fichiers modifiés
- Une capture du nouveau header
- Une capture de la nouvelle Home (sans la section indépendance)
- L'URL Vercel preview à jour
```

---

## 4. NOTES IMPORTANTES POUR TOI

### Sur la mosaïque 50/25/25

Hellio a 9 secteurs équilibrés en grille de tuiles. Effy n'a qu'un seul segment (B2C). Aucun des deux ne fait du 50/25/25.

**Notre 50/25/25 reste la bonne décision** parce qu'il reflète honnêtement notre poids commercial : l'industrie est notre cœur business, le tertiaire un relais sérieux, le résidentiel un complément. Présenter 3 tuiles parfaitement égales mentirait sur la réalité opérationnelle.

### Sur le mot "Particuliers" vs "Résidentiel"

Hellio utilise "Particuliers" pour son subdomain B2C (particulier.hellio.com) et "Logement social" pour son B2B social. Effy utilise uniquement "rénovation énergétique" / "votre maison".

**"Particuliers" est plus universellement compris que "Résidentiel"** dans le grand public. Dans la sphère technique B2B, on parle de "résidentiel" mais le visiteur qui cherche à isoler ses combles ne se reconnaît pas dans ce terme.

D'où le double choix : libellé visible "Particuliers", URL technique `/pole-residentiel/` (préservée pour ne pas casser le SEO existant si tu as déjà fait des liens).

### Sur la 3e promesse "Suivi pluriannuel"

C'est exactement la promesse forte de Hellio sur tous ses segments ("4 ans de suivi", "monitoring de l'énergie", "veille réglementaire") qui transforme une mission ponctuelle en partenariat durable.

C'est aussi un argument bancaire : un DAF préfère acheter un partenariat de 4 ans plutôt qu'un audit one-shot, parce qu'il y a moins de risque d'erreur dans l'exécution et la déclaration.

### Sur le "Mon secteur n'y est pas"

C'est un capteur de leads important. Hellio fait pareil avec sa page "secteurs" qui affiche les 9 secteurs principaux mais dispose d'un formulaire de contact générique pour les cas hors segment. Ne pas l'oublier.
