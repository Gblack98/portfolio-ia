import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Collection « projets » : portfolio Data/IA.
 * Pour ajouter un projet → déposer un fichier .md dans src/content/projects/
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Date au format AAAA-MM-JJ
      date: z.coerce.date(),
      // Technologies / outils utilisés (tags)
      tags: z.array(z.string()).default([]),
      // Image de couverture (optionnelle) : place-la dans le même dossier ou dans /public
      cover: image().optional(),
      // Image envoyée depuis l'espace d'administration (chemin sous /uploads)
      coverUrl: z.string().optional(),
      // Liens optionnels
      demo: z.string().url().optional(),
      repo: z.string().url().optional(),
      // Mettre en avant sur la page d'accueil
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

/**
 * Collection « blog » : articles & veille IA.
 * Pour publier un article → déposer un fichier .md dans src/content/blog/
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      coverUrl: z.string().optional(),
      author: z.string().default('Houleymatou Diallo'),
      draft: z.boolean().default(false),
    }),
});

/**
 * Collection « certifications » : diplômes et formations certifiantes.
 * Un fichier .md par certification dans src/content/certifications/
 */
const certifications = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/certifications' }),
  schema: () =>
    z.object({
      title: z.string(),
      // Organisme qui délivre la certification
      issuer: z.string(),
      // Date d'obtention, au format AAAA-MM-JJ
      date: z.coerce.date(),
      // Lien de vérification (optionnel)
      url: z.string().url().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects, blog, certifications };
