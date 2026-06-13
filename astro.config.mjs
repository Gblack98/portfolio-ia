// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// 👉 Remplace par ton vrai domaine une fois en ligne (utile pour le sitemap + SEO)
const SITE = 'https://portfolio-ia.vercel.app';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  integrations: [mdx(), sitemap()],
  // Masque la barre d'outils Astro (visible uniquement en mode développement)
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
});
