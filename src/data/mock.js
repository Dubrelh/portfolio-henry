export const portfolio = {
  identity: {
    full_name: 'Fotso Kemeni Dubrel Henry',
    display_name: 'Henry',
    role: 'Développeur logiciel',
    location: 'Shell village, Douala, Cameroun',
    languages: ['français', 'anglais (intermédiaire)'],
    tagline: 'Je construis des produits, du prototype au déploiement.',
    photo_url: '/ppprofile.jpg',
    cv_url: '/cv henry kemeni.pdf'
  },
  about:
    "Étudiant passionné par l'ingénierie logicielle et le développement d'applications web et mobiles modernisées. Bonne maîtrise des architectures full-stack, de la modélisation des systèmes d'information et de la gestion de projets informatiques. Souhaite approfondir ses compétences en conception d'applications complexes et intégration logicielle.",
  experiences: [
    {
      role: 'Développeur frontend et backend',
      company: 'Fotetsa',
      location: 'Douala Bali',
      period: '2026 - présent',
      highlights: [
        "Mise en place du nouveau parcours de première connexion utilisateur : activation de la MFA, interface UI de configuration du domaine du système hullbay",
        "Mise en place de l'auto-complétion pour les secrets configurés et les registres du système hullbay",
        'Implémentation de Railpack au sein du système hullbay',
        "Intervention générale sur l'UI du système hullbay"
      ],
      link: 'https://github.com/Fotetsa/hullbay'
    }
  ],
  projects: [
    {
      name: 'Planoka',
      tagline: 'Vis ta ville autrement',
      role: 'Fondateur & CEO',
      description:
        'Plateforme communautaire pour découvrir les bons plans locaux : restaurants, sorties, loisirs, services.',
      stack: ['NestJS', 'Next.js', 'React Native'],
      status: 'Lancement public',
      link: null,
      image_url: ''
    },
    {
      name: 'hullbay',
      tagline: 'Panneau d\'administration Docker open source',
      role: 'Contributeur / mainteneur',
      description:
        'Outil open source proche de GNS3 pour piloter des conteneurs Docker via une interface web.',
      stack: ['Fastify', 'dockerode', 'React', 'Vite'],
      status: 'Open source, actif',
      link: 'https://github.com/Fotetsa/hullbay',
      image_url: '/hullbayimg.png'
    },
    {
      name: 'SchoolAt Mobile',
      tagline: 'Découvrir les écoles autour de soi',
      role: 'Développeur',
      description:
        'Application mobile de soutenance de BTS permettant de localiser des écoles sur une carte, consulter leurs profils et échanger via un fil de publications.',
      stack: ['Expo', 'React Native', 'TypeScript', 'Clerk'],
      status: 'Projet de soutenance BTS',
      link: 'https://github.com/Dubrelh/SchoolAt-mobile',
      image_url: '/schoolatimg.jpg'
    }
  ],
  skills: {
    domaines: ['Développement web', 'Développement mobile', 'Gestion de projet', 'Modélisation SI'],
    frameworks: ['React.js (Next.js)', 'Node.js (Express.js)', 'NestJS', 'React Native + Expo'],
    outils: ['Railways', 'Git / GitHub', 'Notion', 'Zoho Project', 'Supabase (PostgreSQL)']
  },
  education: [
    {
      degree: 'BTS en génie logiciel',
      school: 'Institut Universitaire de la Côte',
      period: '2024 - 2026'
    },
    {
      degree: 'Baccalauréat série C',
      school: 'Lycée Bilingue Bobongo Petit Paris',
      period: '2023 - 2024'
    }
  ],
  contact: {
    phone: '+237 675046420',
    email: 'henrykemeni2@gmail.com',
    location: 'Shell village, Douala',
    github: 'https://github.com/Dubrelh',
    linkedin: 'https://www.linkedin.com/in/henry-kemeni-339029280/'
  }
};
