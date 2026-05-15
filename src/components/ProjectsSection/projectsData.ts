export type ProjectCategory = 'featured' | 'secondary' | 'technical';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  shortDescription: string;
  description: string;
  tags: string[];
  role: string;
  lessons: string[];
  features: string[];
  techStack: string[];
  githubUrl?: string;
  assetFolder: string;
  mood: string[];
  visualStyle: string;
}

export const projects: Project[] = [
  {
    id: 'solvestack',
    title: 'SolveStack',
    category: 'featured',
    shortDescription: 'AI-powered ecosystem for discovering and collaboratively solving real-world technical problems.',
    description: 'SolveStack evolved into an AI-powered platform that discovers technical problems from platforms like GitHub, StackOverflow, Hacker News, and other developer ecosystems using official APIs. The system organizes problems using AI, categorizes them intelligently, and enables collaborative problem solving, connecting builders with meaningful real-world issues.',
    mood: ['futuristic', 'intelligent', 'product ecosystem', 'AI-powered', 'startup-like'],
    tags: ['AI', 'Ecosystem', 'Innovation'],
    role: 'Main ideator, Product thinker, Builder, UI/UX direction',
    features: [
      'AI-powered problem discovery',
      'Collaborative solving system',
      'API integrations',
      'Intelligent categorization',
      'Real-world issue aggregation',
      'Innovation ecosystem concept'
    ],
    techStack: ['Next.js', 'AI APIs', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/abel-721-bela/SolveStack',
    lessons: [
      'Innovation begins with meaningful problems',
      'Systems thinking matters more than isolated features',
      'Rapid iteration accelerates product validation'
    ],
    assetFolder: 'solvestack',
    visualStyle: 'Futuristic AI operating system feel, floating intelligent interfaces, dynamic data systems, elegant dark UI'
  },
  {
    id: 'defendher',
    title: 'DefendHer',
    category: 'featured',
    shortDescription: 'AI-driven women safety ecosystem built during Smart India Hackathon 2024.',
    description: 'DefendHer is an AI-powered ecosystem capable of proactive monitoring, threat analytics, emergency response, and travel safety assistance. Built during SIH 2024, the project combines surveillance software, AI-powered analytics, and gesture-based SOS systems to create a safer environment for women.',
    mood: ['intense', 'resilient', 'mission-driven', 'AI surveillance aesthetic'],
    tags: ['Safety', 'AI', 'Social Impact'],
    role: 'Team initiator, Ideator, Leadership & pitching, Product vision, Team coordination',
    features: [
      'Person detection',
      'Gender classification',
      'Lone women detection',
      'Gesture-triggered SOS',
      'Hotspot analytics',
      'AI threat analysis',
      'Route tracking',
      'Emergency alerts',
      'Safety dashboards'
    ],
    techStack: ['Python', 'OpenCV', 'TensorFlow', 'React Native', 'Firebase'],
    githubUrl: 'https://github.com/abel-721-bela/Defend_Her_Finals',
    lessons: [
      'Pressure reveals true capability',
      'Resilience matters more than first impressions',
      'Teamwork can transform impossible situations'
    ],
    assetFolder: 'defendher',
    visualStyle: 'Cinematic surveillance overlays, emergency pulse effects, AI dashboard visuals, tactical analytics systems'
  },
  {
    id: 'flexicare',
    title: 'FlexiCare',
    category: 'featured',
    shortDescription: 'Convertible wheelchair-to-bed healthcare innovation inspired by personal experience.',
    description: 'FlexiCare is a scalable healthcare-focused product ecosystem that allows a wheelchair to transform into a bed. Inspired by personal family experience, this project focuses on dignity and ease of movement for patients with limited mobility.',
    mood: ['emotional', 'human-centered', 'healthcare innovation', 'warm minimalism'],
    tags: ['Healthcare', 'Product Design', 'Empathy'],
    role: 'Original ideator, Product concept creator, Business modeling contributor',
    features: [
      'Wheelchair-to-bed conversion',
      'Ergonomic support system',
      'Customizable configurations',
      'Healthcare-focused usability',
      'Affordability and accessibility'
    ],
    techStack: ['Product Design', 'Mechanical Engineering', 'Business Modeling'],
    lessons: [
      'Empathy creates meaningful innovation',
      'Simple observations can become impactful systems',
      'Human-centered design matters deeply'
    ],
    assetFolder: 'flexicare',
    visualStyle: 'Softer cinematic healthcare aesthetics, warm lighting, elegant medical product visuals, calm premium motion'
  },
  {
    id: 'hash',
    title: 'HASH',
    category: 'secondary',
    shortDescription: 'AI-powered academic workflow platform designed to automate quiz generation and learning analysis.',
    description: 'HASH introduces an AI-powered workflow where teachers can upload syllabus PDFs and automatically generate intelligent quizzes. It streamlines quiz generation, syllabus parsing, and performance analytics, enhancing educational quality through automation.',
    mood: ['intelligent SaaS platform', 'educational productivity', 'clean AI workflows'],
    tags: ['EdTech', 'AI', 'Automation'],
    role: 'Team ideation, Product workflow planning, System building',
    features: [
      'AI-powered quiz generation',
      'Syllabus parsing',
      'Teacher dashboard',
      'Student assessment portal',
      'Performance analytics',
      'PDF reporting',
      'Proctoring limitations'
    ],
    techStack: ['React', 'Node.js', 'OpenAI API', 'MongoDB'],
    githubUrl: 'https://github.com/abel-721-bela/Hash',
    lessons: [
      'Automation can enhance education quality',
      'AI should simplify repetitive human workflows',
      'Product usability is as important as functionality'
    ],
    assetFolder: 'hash',
    visualStyle: 'Modern SaaS dashboard aesthetics, AI workflow animations, floating educational analytics'
  },
  {
    id: 'bingo',
    title: 'BinGo',
    category: 'secondary',
    shortDescription: 'Gamified IoT-powered waste management experience encouraging sustainable public behavior.',
    description: 'BinGo reimagines urban waste management through incentives and gamification. By rewarding users for responsible waste disposal through interactive smart-bin experiences, it encourages sustainable behavior in cities.',
    mood: ['playful', 'smart-city innovation', 'gamified sustainability'],
    tags: ['IoT', 'Sustainability', 'Gamification'],
    role: 'Ideation, Product interaction design, System development',
    features: [
      'Smart bin simulation',
      'Scratch-card rewards',
      'Environmental impact dashboard',
      'Real-time telemetry',
      'GPS tracking',
      'Downloadable PDF rewards'
    ],
    techStack: ['IoT', 'Arduino', 'React', 'Firebase'],
    githubUrl: 'https://github.com/abel-721-bela/BinGo',
    lessons: [
      'Engagement drives behavioral change',
      'Sustainability solutions should feel interactive',
      'Gamification can improve public participation'
    ],
    assetFolder: 'bingo',
    visualStyle: 'Clean smart-city aesthetics, reward interactions, telemetry systems, playful futuristic motion'
  },
  {
    id: 'surveillance-system',
    title: 'School Surveillance',
    category: 'technical',
    shortDescription: 'Real-time facial recognition surveillance platform designed for school environments.',
    description: 'A technical exploration project focusing on AI-powered surveillance. The platform identifies students and staff through live camera feeds and displays activity logs inside a modern web-based dashboard.',
    mood: ['sleek', 'security-oriented', 'technical AI system'],
    tags: ['AI', 'Computer Vision', 'Security'],
    role: 'Builder, Technical experimentation',
    features: [
      'Facial recognition',
      'Real-time monitoring',
      'Live activity logs',
      'AI overlays',
      'Automated encodings',
      'Optimized processing'
    ],
    techStack: ['Python', 'Face Recognition', 'Flask', 'Socket.io'],
    githubUrl: 'https://github.com/abel-721-bela/school_surveillance',
    lessons: [
      'Curiosity-driven projects accelerate learning',
      'Performance optimization matters in real-time systems'
    ],
    assetFolder: 'surveillance-system',
    visualStyle: 'Modern surveillance dashboard aesthetics, live AI overlays, sleek monitoring systems'
  },
  {
    id: 'contact-management',
    title: 'Contact Manager',
    category: 'technical',
    shortDescription: 'Lightweight contact management platform built using JavaScript and MongoDB.',
    description: 'A practical CRUD-based system built as part of a database-oriented academic assignment. It focuses on simplicity and efficient data management workflows.',
    mood: ['clean', 'minimal', 'utility-focused'],
    tags: ['Web', 'CRUD', 'Utility'],
    role: 'Builder',
    features: [
      'Contact creation',
      'Editing workflows',
      'Deletion systems',
      'MongoDB integration',
      'Intuitive management interface'
    ],
    techStack: ['Node.js', 'Express', 'MongoDB', 'EJS'],
    githubUrl: 'https://github.com/abel-721-bela/Contact-Management-System',
    lessons: [
      'Simplicity and usability matter',
      'Foundational systems build strong development understanding'
    ],
    assetFolder: 'contact-management',
    visualStyle: 'Minimal utility UI, sleek data management aesthetics'
  }
];
