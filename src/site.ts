/**
 * Configuration du site.
 *
 * Les textes modifiables depuis l'espace d'administration vivent dans
 * src/data/site.json. Ce fichier ne garde que le menu,
 * qui touche aux routes et reste donc du ressort du code.
 */
import general from './data/site.json';

export const SITE = {
  ...general,

  // Menu de navigation
  nav: [
    { label: 'Accueil', href: '/' },
    { label: 'Projets', href: '/projets' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
} as const;
