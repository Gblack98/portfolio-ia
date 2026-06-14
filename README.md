# 🌸 Portfolio — Data Scientist & Experte IA

Portfolio personnel construit avec **Astro 5** + **Tailwind CSS 4**.
Rapide (100 % statique), élégant, avec mode clair/sombre, animations au défilement
et un blog + une galerie de projets **alimentés par de simples fichiers Markdown**.

> ✨ **L'idée clé** : pour ajouter un projet ou un article, tu n'écris **aucune ligne
> de code**. Tu déposes un fichier `.md`. C'est tout.

---

## 🚀 Démarrage rapide

> Ce projet utilise **pnpm** (et non npm).

```bash
# 1. Installer les dépendances
pnpm install

# 2. Lancer le serveur de développement (http://localhost:4321)
pnpm dev

# 3. Construire le site pour la production
pnpm build

# 4. Prévisualiser le build de production
pnpm preview
```

---

## 📁 Structure du projet

```
portfolio-ia/
├── public/                  # Fichiers servis tels quels (favicon, images, og-image.png)
│   └── favicon.svg
├── src/
│   ├── site.ts              # ⚙️  CONFIG CENTRALE (nom, slogan, réseaux, menu, compétences)
│   ├── content.config.ts    # Schéma des collections (projets + blog)
│   ├── content/
│   │   ├── projects/        # 👉 Un fichier .md = un projet
│   │   │   ├── segmentation-clients-ml.md
│   │   │   └── chatbot-rag-llm.md
│   │   └── blog/            # 👉 Un fichier .md = un article
│   │       └── bien-demarrer-projet-ia.md
│   ├── components/          # Header, Footer, Hero, ProjectCard, ThemeToggle
│   ├── layouts/
│   │   └── BaseLayout.astro # Gabarit commun (SEO, thème, animations)
│   ├── pages/               # Les routes du site
│   │   ├── index.astro          → /
│   │   ├── projets/index.astro  → /projets
│   │   ├── projets/[...id].astro → /projets/mon-projet
│   │   ├── blog/index.astro     → /blog
│   │   ├── blog/[...id].astro    → /blog/mon-article
│   │   ├── contact.astro        → /contact
│   │   └── rss.xml.ts           → /rss.xml (flux RSS du blog)
│   └── styles/global.css    # Palette de couleurs & styles globaux
├── astro.config.mjs
├── pnpm-workspace.yaml      # Autorise les builds natifs (sharp, esbuild)
└── package.json
```

---

## ✍️ Guide : ajouter du contenu (le plus important !)

### ➕ Ajouter un nouveau projet

1. Crée un fichier dans `src/content/projects/`, par ex. `mon-super-projet.md`.
   👉 Le nom du fichier devient l'URL : `/projets/mon-super-projet`.
2. Copie-colle cet en-tête (le bloc entre `---`) et adapte-le :

```markdown
---
title: "Titre de mon projet"
description: "Une phrase d'accroche qui résume le projet et son résultat."
date: 2026-06-13
tags: ["Machine Learning", "Python", "NLP"]
featured: true          # true = mis en avant sur la page d'accueil
demo: "https://..."     # (optionnel) lien démo en ligne
repo: "https://..."     # (optionnel) lien GitHub
cover: "./image.png"    # (optionnel) image dans le même dossier
---

## Le contexte
Décris le problème ici...

## Mon approche
- Étape 1
- Étape 2

## Résultats
Les chiffres et l'impact.
```

3. Sauvegarde. Le projet apparaît **automatiquement** sur `/projets` et l'accueil. ✅

### 📝 Publier un nouvel article de blog

1. Crée un fichier dans `src/content/blog/`, par ex. `mon-article.md`.
2. En-tête à copier :

```markdown
---
title: "Le titre de mon article"
description: "Le résumé qui s'affiche dans la liste et sur Google."
date: 2026-06-13
tags: ["IA", "Tutoriel"]
draft: false            # mets true pour cacher l'article (brouillon)
---

Écris ton article ici, en **Markdown** classique.

## Un sous-titre
Du texte, des `bouts de code`, des [liens](https://...), des listes...
```

3. Sauvegarde. L'article apparaît **automatiquement** sur `/blog`. ✅

> 💡 **Brouillon** : ajoute `draft: true` dans l'en-tête pour préparer un contenu
> sans le publier. Il restera invisible jusqu'à ce que tu remettes `false`.

### 🖼️ Ajouter une image de couverture

Place l'image **dans le même dossier** que le `.md`, puis référence-la :
`cover: "./ma-photo.jpg"`. Astro l'optimise automatiquement.

---

## 🎨 Personnaliser le site

| Pour changer… | Édite ce fichier |
|---|---|
| Nom, slogan, bio, e-mail, réseaux, menu, compétences | `src/site.ts` |
| Couleurs / palette | `src/styles/global.css` (section `@theme`) |
| Logo / favicon | `public/favicon.svg` |
| Formulaire de contact (recevoir les e-mails) | `src/pages/contact.astro` → voir ci-dessous |

### 📧 Activer le formulaire de contact

Par défaut, le formulaire ouvre le logiciel mail du visiteur. Pour **recevoir les
messages par e-mail** sans serveur :

1. Crée un compte gratuit sur [Formspree](https://formspree.io).
2. Récupère ton ID de formulaire.
3. Colle-le dans `src/pages/contact.astro` : `const FORMSPREE_ID = 'ton-id';`

---

## 🤖 Faire évoluer le site avec un assistant IA

Le projet est documenté pour qu'un assistant IA (Claude Code, Cursor…) puisse le modifier
en toute sécurité. Le contexte complet est dans **[`CLAUDE.md`](./CLAUDE.md)**.

Il suffit de lui parler en langage naturel, par exemple :
- « Ajoute un projet intitulé *Prédiction du diabète* avec les tags Python et Santé. »
- « Change mon slogan en… »
- « Mets les couleurs principales en bleu nuit. »
- « Publie un article de blog sur l'IA éthique. »

L'IA saura quels fichiers toucher grâce à `CLAUDE.md`.

---

## 🌍 Mettre en ligne sur Vercel (déploiement automatique)

1. Crée un dépôt sur GitHub puis lie le projet :

```bash
git init
git add .
git commit -m "Initial commit : portfolio Astro"
git branch -M main
git remote add origin https://github.com/<ton-compte>/<ton-repo>.git
git push -u origin main
```

2. Va sur [vercel.com](https://vercel.com) → **Add New Project** → importe ton dépôt GitHub.
3. Vercel détecte **Astro** automatiquement (aucune config à toucher). Clique **Deploy**.
4. ✅ À chaque `git push`, le site se redéploie tout seul. Chaque *Pull Request* obtient
   une URL de prévisualisation.

> 🔧 Après le 1er déploiement, mets ton vrai domaine dans `astro.config.mjs`
> (constante `SITE`) pour un sitemap et un SEO corrects.

---

## 🧰 Stack technique

- **[Astro 5](https://astro.build)** — framework web ultra-rapide (zéro JS par défaut)
- **[Tailwind CSS 4](https://tailwindcss.com)** — design system utilitaire
- **Content Collections** — contenu typé en Markdown
- **View Transitions** — navigation animée fluide
- **MDX, Sitemap, RSS** — intégrations Astro officielles
```
