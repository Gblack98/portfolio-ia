/**
 * ⚙️  CONFIGURATION CENTRALE DU SITE
 * ------------------------------------------------------------------
 * Modifie ce fichier pour personnaliser le portfolio :
 * nom, slogan, bio, contact, réseaux, menu, chiffres, services, parcours.
 * (Aucun autre fichier de code à toucher pour ces infos.)
 * ------------------------------------------------------------------
 */
export const SITE = {
  name: 'Houleymatou Diallo',
  // Apparaît dans le titre des onglets du navigateur
  shortName: 'Houleymatou Diallo',
  role: 'Data Scientist & Mathématicienne — IA & Éthique',
  tagline: "La rigueur des mathématiques au service d'une IA éthique et centrée sur l'humain.",
  bio: "Enseignante de mathématiques reconvertie en Data Scientist, titulaire de deux Masters en mathématiques (AIMS-Sénégal et UCAD). Forte d'une solide base mathématique et de 4 ans d'expérience terrain, j'allie rigueur scientifique et approche centrée sur l'humain. Je m'intéresse particulièrement aux applications de l'IA et des statistiques en santé : prédiction, modélisation et aide à la décision.",
  email: 'houleymathou0409@gmail.com',
  phone: '+221 77 143 63 00',
  location: 'Dakar, Sénégal · Disponible en remote',

  // Liens réseaux (laisse vide '' pour masquer)
  socials: {
    github: 'https://github.com/houleyma-arch',
    linkedin: '',
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
    { value: 4, suffix: ' ans', label: "D'expérience terrain" },
    { value: 2, suffix: '', label: 'Masters en mathématiques' },
    { value: 5, suffix: '+', label: 'Conférences internationales' },
    { value: 100, suffix: '%', label: 'Rigueur & éthique' },
  ],

  // Services proposés (section « Comment je peux vous aider » de l'accueil)
  services: [
    {
      icon: '📊',
      title: 'Analyse & modélisation',
      description:
        'Statistiques avancées, modélisation mathématique et visualisation de données pour transformer vos chiffres en décisions fiables.',
    },
    {
      icon: '🔮',
      title: 'Modèles prédictifs & IA santé',
      description:
        "Classification, régression et prédiction, avec un intérêt particulier pour l'aide à la décision et la modélisation en santé.",
    },
    {
      icon: '🤖',
      title: 'Chatbots & IA générative',
      description:
        'Assistants conversationnels, architectures RAG et analyse de sentiments pour des interactions intelligentes et adaptatives.',
    },
    {
      icon: '📐',
      title: 'Formation & tutorat',
      description:
        "Transmettre les mathématiques et la data science, du lycée à l'université, avec une pédagogie claire et structurée.",
    },
  ],

  // Parcours académique (section « Parcours » de l'accueil)
  education: [
    { period: '2026 – 2027', title: 'Programme AI & Data Science', org: 'Isherro × DataCamp', note: 'En cours' },
    { period: '2025 – 2026', title: 'Formation intensive Data Science & IA', org: 'DIT × Hub IA, Sénégal', note: '' },
    { period: '2021 – 2022', title: 'M.Sc. en Sciences Mathématiques', org: 'AIMS-Sénégal', note: 'Mention Bien' },
    { period: '2018 – 2021', title: 'Master en Mathématiques — Géométrie & Applications', org: 'UCAD', note: 'Meilleure soutenance de promotion' },
    { period: '2015 – 2018', title: 'Licence en Sciences Mathématiques', org: 'Université Assane Seck (UASZ)', note: '1ère de promotion' },
  ],
} as const;
