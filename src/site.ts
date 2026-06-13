/**
 * ⚙️  CONFIGURATION CENTRALE DU SITE
 * ------------------------------------------------------------------
 * Modifie ce fichier pour personnaliser ton portfolio :
 * nom, slogan, bio, e-mail, réseaux sociaux, menu de navigation.
 * (Aucun autre fichier de code à toucher pour ces infos.)
 * ------------------------------------------------------------------
 */
export const SITE = {
  name: 'Aïssatou Ndiaye',
  // Apparaît dans le titre des onglets du navigateur
  shortName: 'Aïssatou Ndiaye',
  role: 'Data Scientist & Experte en Intelligence Artificielle',
  tagline: 'Je transforme vos données en décisions intelligentes.',
  bio: "Freelance passionnée par la donnée et l'IA, j'accompagne les entreprises de l'idée au modèle en production : machine learning, NLP, vision par ordinateur et IA générative.",
  email: 'contact@exemple.com',
  location: 'Dakar, Sénégal · Disponible en remote',

  // Liens réseaux (laisse vide '' pour masquer)
  socials: {
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/',
    twitter: '',
    kaggle: 'https://www.kaggle.com/',
  },

  // Menu de navigation
  nav: [
    { label: 'Accueil', href: '/' },
    { label: 'Projets', href: '/projets' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],

  // Compétences mises en avant sur l'accueil
  skills: [
    'Machine Learning',
    'Deep Learning',
    'NLP',
    'Computer Vision',
    'IA Générative / LLM',
    'Python',
    'TensorFlow / PyTorch',
    'Data Engineering',
    'MLOps',
    'Data Visualization',
  ],
} as const;
