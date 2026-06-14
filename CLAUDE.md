# CLAUDE.md — Contexte projet pour assistant IA

> Ce fichier est lu automatiquement par **Claude Code** (et sert de référence à tout
> assistant IA). Il donne le contexte nécessaire pour modifier le site **sans rien casser**.
> Écris à l'IA en langage naturel (« Ajoute un projet sur… », « Change le slogan… ») et
> elle saura quoi faire grâce à ces instructions.

## 🎯 Le projet en une phrase

Portfolio personnel de **Houleymatou Diallo** (Data Scientist & Mathématicienne) :
site **statique**, rapide, au contenu piloté par des fichiers **Markdown**, déployé sur **Vercel**.

## 🧰 Stack technique

- **Astro 5** (sortie statique) · **Tailwind CSS 4** (via `@tailwindcss/vite`) · **TypeScript** (strict)
- **Content Collections** Astro pour les projets et le blog (contenu en Markdown)
- Intégrations : **MDX**, **sitemap**, **RSS**
- Gestionnaire de paquets : **pnpm** (⚠️ **ne pas utiliser npm**)

## ⌨️ Commandes

```bash
pnpm install      # installer les dépendances
pnpm dev          # serveur local → http://localhost:4321
pnpm build        # build de production (à lancer pour vérifier avant de pousser)
pnpm preview      # prévisualiser le build
```

> Après **toute** modification de code, lance `pnpm build` pour vérifier que le site compile.

## 🗂️ Où se trouve quoi (à connaître absolument)

| Je veux changer… | Fichier à éditer |
|---|---|
| Nom, titre, slogan, bio, e-mail, téléphone, réseaux, menu, **chiffres clés**, **services**, **parcours** | `src/site.ts` |
| **Ajouter un projet** | nouveau fichier `src/content/projects/<slug>.md` |
| **Ajouter un article de blog** | nouveau fichier `src/content/blog/<slug>.md` |
| Champs autorisés dans les `.md` (le « schéma ») | `src/content.config.ts` |
| Couleurs / palette / animations | `src/styles/global.css` (section `@theme`) |
| Mise en page d'une page | `src/pages/*.astro` |
| Composants réutilisables (header, footer, hero, carte projet…) | `src/components/*.astro` |
| Gabarit commun (SEO, thème, scripts globaux) | `src/layouts/BaseLayout.astro` |
| Domaine du site (SEO/sitemap) | `astro.config.mjs` → constante `SITE` |

## ✍️ Ajouter un projet (frontmatter attendu)

```markdown
---
title: "Titre du projet"
description: "Phrase d'accroche."
date: 2026-06-14
tags: ["NLP", "Python"]
featured: true        # true = mis en avant sur l'accueil
demo: "https://..."   # optionnel
repo: "https://..."   # optionnel
cover: "./image.png"  # optionnel (image dans le même dossier)
draft: false          # true = caché (brouillon)
---

Contenu en Markdown…
```

## ✍️ Ajouter un article (frontmatter attendu)

```markdown
---
title: "Titre de l'article"
description: "Résumé."
date: 2026-06-14
tags: ["IA"]
draft: false
---

Contenu en Markdown…
```

## ✅ Conventions & règles à respecter

- **Langue du site : français.**
- Le **contenu éditorial** vit dans `src/site.ts` et `src/content/` — **ne pas coder en dur**
  des textes dans les composants.
- Respecter les **champs du schéma** (`src/content.config.ts`) : un champ absent ou mal typé
  fait échouer le build.
- **Mode sombre** : piloté par la classe `.dark` sur `<html>`. Il est ré-appliqué sur
  l'événement `astro:after-swap` dans `BaseLayout.astro` — **ne pas retirer ce script**,
  sinon le thème saute lors de la navigation.
- Les **animations au scroll** utilisent l'attribut `data-reveal` (+ `--reveal-delay` pour
  décaler). Réutiliser ce système plutôt que d'en réinventer un.
- Tester avec `pnpm build` avant de committer.

## 🚫 À ne pas faire

- Ne pas utiliser **npm** (utiliser **pnpm**).
- Ne pas committer `node_modules/` ni `dist/` (déjà ignorés par `.gitignore`).
- Ne pas mettre d'informations sensibles (clés, mots de passe) dans le code — utiliser les
  variables d'environnement Vercel si besoin.

## 🚀 Déploiement

Hébergé sur **Vercel** : chaque `git push` sur la branche `main` redéploie automatiquement
le site. Astro est détecté automatiquement (aucune configuration de build à fournir).
Voir le `README.md` pour la procédure complète de première mise en ligne.
