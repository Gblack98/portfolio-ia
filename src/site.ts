/**
 * ⚙️  CONFIGURATION CENTRALE DU SITE
 * ------------------------------------------------------------------
 * Modifie ce fichier pour personnaliser ton portfolio :
 * nom, slogan, bio, e-mail, réseaux sociaux, menu de navigation.
 * (Aucun autre fichier de code à toucher pour ces infos.)
 * ------------------------------------------------------------------
 */
export const SITE = {
  name: 'Houleymatou Diallo',
  // Apparaît dans le titre des onglets du navigateur
  shortName: 'Houleymatou Diallo',
  role: 'Mathématicienne reconvertie en Data Science & IA',
  tagline: 'Des mathématiques à l\'intelligence artificielle : je transforme vos données en décisions.',
  bio: "Mathématicienne de formation reconvertie en data science, je mets la rigueur et le sens de l'abstraction des mathématiques au service de l'intelligence artificielle — des fondements théoriques (statistiques, probabilités, optimisation) jusqu'aux modèles en production.",
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

  // Chiffres clés animés sur l'accueil (modifie librement)
  stats: [
    { value: 7, suffix: ' ans', label: 'En mathématiques' },
    { value: 15, suffix: '+', label: 'Projets data & IA' },
    { value: 20, suffix: '+', label: 'Modèles entraînés' },
    { value: 100, suffix: '%', label: 'Rigueur & curiosité' },
  ],

  // Compétences regroupées par thème (section « Expertise » de l'accueil)
  skillGroups: [
    {
      icon: '📐',
      title: 'Fondations mathématiques',
      items: ['Mathématiques appliquées', 'Statistiques', 'Probabilités', 'Algèbre linéaire', 'Optimisation'],
    },
    {
      icon: '🤖',
      title: 'Machine Learning & IA',
      items: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'IA Générative / LLM'],
    },
    {
      icon: '🛠️',
      title: 'Outils & Technologies',
      items: ['Python', 'TensorFlow / PyTorch', 'scikit-learn', 'Pandas / NumPy', 'Data Visualization'],
    },
  ],
} as const;
