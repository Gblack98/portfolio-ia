import type { APIRoute } from 'astro';

// Sert /robots.txt avec le lien vers le sitemap, construit depuis `site` (astro.config.mjs).
export const GET: APIRoute = ({ site }) =>
  new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml', site).href}\n`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
  );
