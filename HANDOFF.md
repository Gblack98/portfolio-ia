# Guide de prise en main

Ce portfolio est le tien. Ce guide explique comment le récupérer, le mettre en ligne, et
surtout comment écrire dessus tous les jours sans toucher au code.

## Étape 1. Accepter le transfert du dépôt

Le projet est transféré sur ton compte GitHub `houleyma-arch`. Ouvre l'e-mail de GitHub
« Gblack98 wants to transfer portfolio-ia to you », ou va sur
https://github.com/notifications, et clique sur **Accept transfer**. L'invitation expire,
donc fais-le rapidement.

Le projet vit ensuite ici : https://github.com/houleyma-arch/portfolio-ia

## Étape 2. Mettre le site en ligne

1. Va sur https://vercel.com et connecte-toi avec **Continue with GitHub**.
2. **Add New**, puis **Project**.
3. Choisis le dépôt `portfolio-ia`, puis **Import**.
4. Ne touche à aucun réglage, Vercel reconnaît le site tout seul. Clique **Deploy**.

Une minute plus tard le site est en ligne. À partir de là, toute modification enregistrée
met le site à jour automatiquement.

## Étape 3. Récupérer l'adresse à ton nom

L'adresse `houleymatou-diallo.vercel.app` est réservée pour toi. Demande à Ibrahima de la
libérer de son compte, puis dans ton projet Vercel : **Settings**, **Domains**, **Add**,
et saisis `houleymatou-diallo.vercel.app`.

## Étape 4. Activer ton espace d'écriture

C'est l'étape qui te rend autonome. Elle se fait une seule fois.

Sur https://github.com/settings/developers, clique **New OAuth App** et remplis :

| Champ | Valeur |
|---|---|
| Application name | Portfolio Houleymatou |
| Homepage URL | https://houleymatou-diallo.vercel.app |
| Redirect URI | https://houleymatou-diallo.vercel.app/api/callback |

Laisse les cases décochées, en particulier **Expire user access tokens**, sinon tu seras
déconnectée toutes les huit heures.

GitHub affiche alors un **Client ID**, et un bouton **Generate a new client secret** qui
donne un **Client secret** (visible une seule fois, copie-le tout de suite).

Dans ton projet Vercel : **Settings**, **Environment Variables**, et ajoute les deux, pour
l'environnement Production :

- `GITHUB_CLIENT_ID` : le Client ID
- `GITHUB_CLIENT_SECRET` : le Client secret

Puis **Deployments**, sur le dernier déploiement, **Redeploy**, pour que les deux variables
soient prises en compte.

## Étape 5. Écrire sur ton site

Va sur **https://houleymatou-diallo.vercel.app/admin/** et clique sur **Se connecter avec
GitHub**. Tu arrives dans un espace d'écriture avec quatre sections :

- **Articles** : le blog. Tant que la case Brouillon est activée, l'article reste invisible.
- **Projets** : tes réalisations. « Mis en avant » les fait apparaître sur l'accueil.
- **Certifications** : elles s'affichent sur l'accueil, de la plus récente à la plus ancienne.
- **Textes du site** : ta présentation, tes chiffres, tes services, ton parcours, tes
  coordonnées.

Chaque fois que tu enregistres, le site se met à jour tout seul en moins d'une minute.
Rien à installer, tout se fait depuis le navigateur, y compris depuis un téléphone.

Une fiche de certification d'exemple est présente, en brouillon donc invisible. Remplace-la
par une vraie ou supprime-la.

## Si tu préfères modifier les fichiers directement

Tout le contenu est en fichiers simples :

| Pour changer | Fichier |
|---|---|
| Présentation, chiffres, services, parcours, contact | `src/data/site.json` |
| Un projet | un fichier dans `src/content/projects/` |
| Un article | un fichier dans `src/content/blog/` |
| Une certification | un fichier dans `src/content/certifications/` |
| Les couleurs | `src/styles/global.css` |

## Travailler sur ton ordinateur

```bash
git clone git@github.com:houleyma-arch/portfolio-ia.git
cd portfolio-ia
pnpm install
pnpm dev          # le site tourne sur http://localhost:4321
```

Après une modification :

```bash
git add .
git commit -m "Mise à jour du contenu"
git push          # le site en ligne se met à jour tout seul
```

Ce projet utilise **pnpm**, pas npm. Si pnpm manque : https://pnpm.io/installation

## Pour aller plus loin

**Un nom de domaine à toi**, du type `houleymatoudiallo.com` : dans Vercel, Settings,
Domains. Pense ensuite à reporter l'adresse dans `astro.config.mjs`, ligne `const SITE`,
et dans le Redirect URI de ton application GitHub.

**Recevoir les messages du formulaire de contact par e-mail** : crée un compte gratuit sur
https://formspree.io et colle ton identifiant dans `src/pages/contact.astro`, variable
`FORMSPREE_ID`. Sans lui, le formulaire ouvre le logiciel de messagerie du visiteur.

**Ton profil LinkedIn** : le champ est vide, donc l'icône est masquée. Renseigne-le dans
Textes du site, section Réseaux, et elle apparaîtra.
