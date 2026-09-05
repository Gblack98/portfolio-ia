// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// Domaine du site, utilisé pour le sitemap, les URLs canoniques et l'image de partage.
const SITE = 'https://houleymatou-diallo.vercel.app';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  // Le site reste statique ; seules les deux routes /api d'authentification
  // du CMS tournent à la demande (elles déclarent prerender = false).
  adapter: vercel(),
  integrations: [mdx(), sitemap()],
  // Masque la barre d'outils Astro (visible uniquement en mode développement)
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
});
