# 🤝 Guide de prise en main — Houleymatou Diallo

Bienvenue sur ton portfolio ! Ce guide t'explique, pas à pas, comment **récupérer le site,
le mettre en ligne et le faire évoluer toi-même** (même sans coder, avec l'aide d'une IA).

---

## ✅ Étape 1 — Accepter le transfert du projet sur ton GitHub

Le projet t'a été transféré sur ton compte GitHub **`houleyma-arch`**.

1. Ouvre l'e-mail de **GitHub** : « *Gblack98 wants to transfer portfolio-ia to you* »
   👉 ou va sur **https://github.com/notifications**
2. Clique sur **« Accept transfer »**.
3. C'est bon ✅ Ton projet est maintenant ici :
   **https://github.com/houleyma-arch/portfolio-ia**

> ⏳ À faire dans les 24h (la demande expire ensuite).

---

## 🚀 Étape 2 — Mettre le site en ligne (gratuit, ~2 min)

1. Va sur **https://vercel.com** → clique **« Continue with GitHub »** (avec ton compte).
2. **« Add New… »** → **« Project »**.
3. Choisis le repo **`portfolio-ia`** → **« Import »**.
4. Ne touche à rien (Vercel reconnaît le site tout seul) → clique **« Deploy »**.
5. 🎉 Au bout d'une minute, ton site est en ligne sur une adresse en `…vercel.app`.

> À partir de là, **chaque modification que tu enregistres met le site à jour automatiquement.**

---

## ✍️ Étape 3 — Modifier ton site toi-même

Tu n'as **pas besoin de savoir coder**. Deux options :

### Option A — Avec une IA (le plus simple)
Ouvre le projet avec un assistant IA (Claude Code, Cursor…) et parle-lui normalement :

- « *Ajoute un projet intitulé Prédiction du diabète, avec les tags Python et Santé.* »
- « *Change mon slogan en : …* »
- « *Publie un article de blog sur l'IA éthique.* »
- « *Mets ma photo dans la page d'accueil.* »

L'IA sait quoi faire grâce au fichier **`CLAUDE.md`** déjà présent dans le projet.

### Option B — À la main
Tout ton contenu est dans des fichiers simples :

| Pour changer… | Fichier |
|---|---|
| Nom, titre, slogan, bio, e-mail, téléphone, réseaux, chiffres, services, parcours | `src/site.ts` |
| Ajouter un **projet** | un nouveau fichier dans `src/content/projects/` |
| Ajouter un **article** | un nouveau fichier dans `src/content/blog/` |
| Les couleurs | `src/styles/global.css` |

Le `README.md` contient des modèles prêts à copier pour les projets et articles.

---

## 💻 (Avancé) Travailler sur ton ordinateur

```bash
# Récupérer le projet
git clone git@github.com:houleyma-arch/portfolio-ia.git
cd portfolio-ia

# Installer puis lancer en local (voir le site sur http://localhost:4321)
pnpm install
pnpm dev
```

Après une modification :
```bash
git add .
git commit -m "Mise à jour du contenu"
git push        # → le site en ligne se met à jour tout seul
```

> ⚠️ Ce projet utilise **pnpm** (et non npm). Si pnpm n'est pas installé :
> `npm install -g pnpm` ou voir https://pnpm.io/installation

---

## 🎁 Pour aller plus loin (optionnel)

- **Nom de domaine perso** (ex. `houleymatoudiallo.com`) : dans Vercel → *Settings → Domains*.
  Pense ensuite à mettre cette adresse dans `astro.config.mjs` (ligne `const SITE = …`).
- **Recevoir les messages du formulaire de contact par e-mail** : crée un compte gratuit
  sur **https://formspree.io**, récupère ton identifiant et colle-le dans
  `src/pages/contact.astro` (variable `FORMSPREE_ID`).
- **Ajouter ta photo** : place l'image dans le dossier `public/` et demande à l'IA de
  l'intégrer dans la page d'accueil.

---

Bon lancement ! 🚀 Ton portfolio est moderne, rapide, et 100 % à toi.
