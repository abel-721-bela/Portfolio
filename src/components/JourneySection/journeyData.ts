export type MilestoneType = 'professional' | 'personal';

export type RoleTag =
  | 'Leadership'
  | 'Internship'
  | 'Speaker'
  | 'Team Lead'
  | 'Volunteer'
  | 'Content'
  | 'Education'
  | 'Resource Person'
  | 'Personal';

export interface Milestone {
  id: string;
  type: MilestoneType;
  yearNumeric: number;
  month?: string;
  year: string;             // Display label (e.g. "2022", "Birth", "Early Childhood")
  location: string;
  title: string;
  organization?: string;
  roleTag?: RoleTag;
  shortDescription: string;
  expandedDetails?: string;
  fullStory: string[];
  contributions?: string[];
  reflection?: string;
  timeline?: string;        // e.g. "Jul 2024 – Aug 2024"
  lessons: string[];
  coordinates: { x: number; y: number };
  schools?: { name: string; mapUrl: string }[];
  gallery?: string[];
  assetFolder: string;
}

// ═══════════════════════════════════════════════════
//  PROFESSIONAL MILESTONES (default view)
// ═══════════════════════════════════════════════════

export const professionalMilestones: Milestone[] = [
  // ── 2022 ──
  {
    id: 'ajce-join',
    type: 'professional',
    yearNumeric: 2022,
    month: 'October',
    year: '2022',
    location: 'Kanjirapally, Kerala',
    title: 'Joined Amal Jyothi College of Engineering',
    organization: 'Amal Jyothi College of Engineering',
    roleTag: 'Education',
    shortDescription: 'Began the B.Tech journey in Information Technology, stepping into engineering education.',
    fullStory: [
      'Amal Jyothi College of Engineering was where the "builder" in me truly matured. I was surrounded by like-minded innovators and mentors who pushed me.',
      'It wasn\'t just about code; it was about systems, leadership, and the impact of engineering on society.'
    ],
    lessons: ['Theory meets practice in the forge.', 'Community accelerates growth.'],
    coordinates: { x: 39, y: 91 },
    schools: [{ name: 'Amal Jyothi College of Engineering', mapUrl: 'https://goo.gl/maps/...' }],
    assetFolder: 'amal-jyothi'
  },
  {
    id: 'init-foundation',
    type: 'professional',
    yearNumeric: 2022,
    month: 'December',
    year: '2022',
    location: 'AJCE, Kerala',
    title: 'Foundational Team Member, init() Association',
    organization: 'init() Association',
    roleTag: 'Leadership',
    shortDescription: 'Joined the foundation team of init(), helping shape a technical community that later became one of the most recognized student associations.',
    expandedDetails: 'Joined the foundation team of init(), helping shape a technical community that later became one of the most recognized student associations within the college.',
    timeline: '2022 – Sept 2023',
    fullStory: [
      'init() was born out of a desire to create a space where creativity meets technology. We built it from scratch, focusing on culture first.',
      'Leading this initiative taught me more about people, motivation, and collective vision than any textbook.'
    ],
    lessons: ['Culture is the foundation of community.', 'Leadership is about serving others.'],
    coordinates: { x: 39, y: 91 },
    assetFolder: 'init'
  },

  // ── 2023 ──
  {
    id: 'init-joint-secretary',
    type: 'professional',
    yearNumeric: 2023,
    month: 'October',
    year: '2023',
    location: 'AJCE, Kerala',
    title: 'Joint Secretary, init() Association',
    organization: 'init() Association',
    roleTag: 'Leadership',
    shortDescription: 'A stepping stone in leadership — coordinating, collaborating, and contributing to the association\'s growth.',
    expandedDetails: 'Being the Joint Secretary of init() Association was a stepping stone in my leadership journey, allowing me to coordinate, collaborate, and contribute to the association\'s growth.',
    timeline: 'Oct 2023 – Sept 2024',
    contributions: [
      'Assisted in organizing workshops, hackathons, and industry talks',
      'Improved student engagement and event execution',
      'Helped streamline workflows and planning structures'
    ],
    reflection: 'This role strengthened my leadership, teamwork, and organizational skills while laying the foundation for future responsibilities.',
    fullStory: [
      'Being the Joint Secretary of init() Association was a stepping stone in my leadership journey, allowing me to coordinate, collaborate, and contribute to the association\'s growth.',
      'This role strengthened my leadership, teamwork, and organizational skills while laying the foundation for future responsibilities.'
    ],
    lessons: ['Coordination is an art.', 'Every role is a building block.'],
    coordinates: { x: 39, y: 91 },
    assetFolder: 'init'
  },

  // ── 2024 ──
  {
    id: 'fitwell-data-analyst',
    type: 'professional',
    yearNumeric: 2024,
    month: 'July',
    year: '2024',
    location: 'Remote',
    title: 'Data Analyst Intern',
    organization: 'Fitwell Tech Pvt. Ltd.',
    roleTag: 'Internship',
    shortDescription: 'Analyzed IT infrastructure data while building automated workflows and improving operational efficiency.',
    expandedDetails: 'Worked on analyzing IT infrastructure data while building automated workflows and improving operational efficiency.',
    timeline: 'Jul 2024 – Aug 2024',
    contributions: [
      'Built JSON-based data pipelines',
      'Performed data analysis using Python and NumPy',
      'Used regex parsing for extraction and optimization',
      'Worked within agile team environments'
    ],
    reflection: 'This experience introduced me to real-world analytics workflows and strengthened my adaptability under deadlines.',
    fullStory: [
      'Worked on analyzing IT infrastructure data while building automated workflows and improving operational efficiency.',
      'This experience introduced me to real-world analytics workflows and strengthened my adaptability under deadlines.'
    ],
    lessons: ['Real-world data is messy.', 'Adaptability wins under pressure.'],
    coordinates: { x: 50, y: 50 },
    assetFolder: 'fitwell'
  },
  {
    id: 'init-secretary',
    type: 'professional',
    yearNumeric: 2024,
    month: 'July',
    year: '2024',
    location: 'AJCE, Kerala',
    title: 'Secretary, init() Association',
    organization: 'init() Association',
    roleTag: 'Leadership',
    shortDescription: 'Led initiatives to improve technical engagement, collaboration, and community-driven learning.',
    expandedDetails: 'Led initiatives to improve technical engagement, collaboration, and community-driven learning within the department.',
    timeline: 'Jul 2024 – Mar 2025',
    contributions: [
      'Organized workshops and technical events',
      'Improved peer networking and execution workflows',
      'Collaborated with faculty and industry experts'
    ],
    reflection: 'This role shaped my leadership style and deepened my passion for building collaborative technical communities.',
    fullStory: [
      'Led initiatives to improve technical engagement, collaboration, and community-driven learning within the department.',
      'This role shaped my leadership style and deepened my passion for building collaborative technical communities.'
    ],
    lessons: ['Leadership is service.', 'Community amplifies impact.'],
    coordinates: { x: 39, y: 91 },
    assetFolder: 'init'
  },
  {
    id: 'sih-defendher',
    type: 'professional',
    yearNumeric: 2024,
    month: 'August',
    year: '2024',
    location: 'Mumbai, India',
    title: 'Team Lead, DefendHer | Smart India Hackathon 2024',
    organization: 'Smart India Hackathon',
    roleTag: 'Team Lead',
    shortDescription: 'Led Team DefendHer during the SIH National Finals in Mumbai, building an AI-powered women safety analytics ecosystem.',
    expandedDetails: 'Led Team DefendHer during the Smart India Hackathon National Finals in Mumbai, building an AI-powered women safety analytics ecosystem under intense time pressure.',
    timeline: 'Aug 2024 – Dec 2024',
    contributions: [
      'Led cross-department collaboration',
      'Directed project vision and presentation',
      'Coordinated rebuilding efforts during finals'
    ],
    reflection: 'This experience taught me resilience, pressure handling, and the power of collaborative innovation.',
    fullStory: [
      'The Smart India Hackathon was a test of endurance. We faced setbacks, but our comeback moment in the finals was a testament to our team\'s spirit.',
      'It taught me that resilience is just as important as technical skill.'
    ],
    lessons: ['Resilience wins games.', 'Teamwork makes the dream work.'],
    coordinates: { x: 50, y: 40 },
    assetFolder: 'sih-finals'
  },

  // ── 2025 ──
  {
    id: 'prompt-engineering-workshop',
    type: 'professional',
    yearNumeric: 2025,
    month: 'January',
    year: '2025',
    location: 'AJCE, Kerala',
    title: 'Resource Person | Prompt Engineering Workshop',
    organization: 'AJCE IT & AD Department',
    roleTag: 'Resource Person',
    shortDescription: 'Conducted an interactive workshop on Prompt Engineering for 2nd and 3rd year students.',
    expandedDetails: 'Conducted an interactive workshop on Prompt Engineering for 2nd and 3rd year IT & AD students, sharing real-world AI workflow insights and learnings from SIH 2024.',
    fullStory: [
      'Conducting workshops and mentoring others has been one of the most rewarding parts of my journey.',
      'Every time I teach, I learn. Seeing others spark with curiosity is a powerful motivator.'
    ],
    lessons: ['Teaching is the ultimate way to learn.', 'Inspiration is contagious.'],
    coordinates: { x: 39, y: 91 },
    assetFolder: 'workshops'
  },
  {
    id: 'tedx-marketing-2025',
    type: 'professional',
    yearNumeric: 2025,
    month: 'February',
    year: '2025',
    location: 'AJCE, Kerala',
    title: 'Marketing Team Member, TEDxAJCE 2025',
    organization: 'TEDxAJCE',
    roleTag: 'Volunteer',
    shortDescription: 'Contributed to digital campaigns, audience engagement, and event outreach strategies.',
    expandedDetails: 'Worked as part of the TEDxAJCE marketing team, contributing to digital campaigns, audience engagement, and event outreach strategies.',
    timeline: 'Feb 2025 – Mar 2025',
    fullStory: [
      'Worked as part of the TEDxAJCE marketing team, contributing to digital campaigns, audience engagement, and event outreach strategies.'
    ],
    lessons: ['Marketing is storytelling at scale.'],
    coordinates: { x: 39, y: 91 },
    assetFolder: 'tedx'
  },
  {
    id: 'init-president',
    type: 'professional',
    yearNumeric: 2025,
    month: 'March',
    year: '2025',
    location: 'AJCE, Kerala',
    title: 'President, init() Association',
    organization: 'init() Association',
    roleTag: 'Leadership',
    shortDescription: 'Leading init() with a focus on innovation, collaboration, and increasing community impact across campus.',
    expandedDetails: 'Leading init() Association with a focus on innovation, collaboration, and increasing the visibility and impact of the community across campus.',
    timeline: 'Mar 2025 – Apr 2026',
    contributions: [
      'Mentored students and organizers',
      'Led technical initiatives and events',
      'Strengthened association branding and visibility',
      'Encouraged collaborative learning culture'
    ],
    reflection: 'This role became the culmination of a journey that began as a first-year foundational team member.',
    fullStory: [
      'Leading init() Association with a focus on innovation, collaboration, and increasing the visibility and impact of the community across campus.',
      'This role became the culmination of a journey that began as a first-year foundational team member.'
    ],
    lessons: ['Vision requires patience.', 'Leaders create other leaders.'],
    coordinates: { x: 39, y: 91 },
    assetFolder: 'init'
  },
  {
    id: 'ieee-content-lead',
    type: 'professional',
    yearNumeric: 2025,
    month: 'March',
    year: '2025',
    location: 'AJCE, Kerala',
    title: 'Content Lead, IEEE SB AJCE',
    organization: 'IEEE SB AJCE',
    roleTag: 'Content',
    shortDescription: 'Responsible for content strategy, communication, and enhancing visibility for IEEE SB initiatives.',
    expandedDetails: 'Responsible for content strategy, communication, and enhancing visibility for IEEE SB initiatives through impactful storytelling and technical communication.',
    timeline: 'Mar 2025 – Mar 2026',
    fullStory: [
      'Responsible for content strategy, communication, and enhancing visibility for IEEE SB initiatives through impactful storytelling and technical communication.'
    ],
    lessons: ['Words shape perception.', 'Consistent communication builds trust.'],
    coordinates: { x: 39, y: 91 },
    assetFolder: 'ieee'
  },
  {
    id: 'figma-workshop',
    type: 'professional',
    yearNumeric: 2025,
    month: 'March',
    year: '2025',
    location: 'AJCE, Kerala',
    title: 'Speaker | "Pixel Perfect" Figma Workshop',
    organization: 'Women\'s Day Celebration, AJCE',
    roleTag: 'Speaker',
    shortDescription: 'Conducted a hands-on Figma UI/UX workshop exclusively for girl students as part of Women\'s Day celebrations.',
    expandedDetails: 'Conducted a hands-on Figma UI/UX workshop exclusively for girl students as part of Women\'s Day celebrations.',
    contributions: [
      'UI/UX fundamentals',
      'Wireframing',
      'Prototyping',
      'Design thinking'
    ],
    fullStory: [
      'Conducted a hands-on Figma UI/UX workshop exclusively for girl students as part of Women\'s Day celebrations, covering UI/UX fundamentals, wireframing, prototyping, and design thinking.'
    ],
    lessons: ['Design empowers everyone.', 'Inclusivity drives innovation.'],
    coordinates: { x: 39, y: 91 },
    assetFolder: 'pixel-perfect'
  },
  {
    id: 'ubg-intern',
    type: 'professional',
    yearNumeric: 2025,
    month: 'May',
    year: '2025',
    location: 'Remote',
    title: 'Development Intern',
    organization: 'United Business Group',
    roleTag: 'Internship',
    shortDescription: 'Worked on an internal Organization Management System using ASP.NET Core Razor Pages and MS SQL Server.',
    expandedDetails: 'Worked on an internal Organization Management System using ASP.NET Core Razor Pages and MS SQL Server.',
    timeline: 'May 2025 – Jul 2025',
    contributions: [
      'Developed CRUD functionalities',
      'Improved query performance',
      'Enhanced data integrity',
      'Collaborated remotely with development teams'
    ],
    fullStory: [
      'Worked on an internal Organization Management System using ASP.NET Core Razor Pages and MS SQL Server.',
      'This internship deepened my understanding of enterprise-level development practices.'
    ],
    lessons: ['Enterprise systems demand precision.', 'Remote collaboration is a skill.'],
    coordinates: { x: 50, y: 50 },
    assetFolder: 'ubg'
  },
  {
    id: 'skill-sprint',
    type: 'professional',
    yearNumeric: 2025,
    month: 'October',
    year: '2025',
    location: 'AJCE, Kerala',
    title: 'Resource Person | Skill Sprint Prompt Engineering Session',
    organization: 'init() Association & IEEE SB AJCE',
    roleTag: 'Resource Person',
    shortDescription: 'Delivered a Prompt Engineering session as part of the Skill Sprint initiative.',
    expandedDetails: 'Delivered a Prompt Engineering session as part of the Skill Sprint initiative conducted collaboratively by init() Association and IEEE SB AJCE.',
    fullStory: [
      'Delivered a Prompt Engineering session as part of the Skill Sprint initiative conducted collaboratively by init() Association and IEEE SB AJCE.'
    ],
    lessons: ['Collaboration between communities multiplies impact.'],
    coordinates: { x: 39, y: 91 },
    assetFolder: 'workshops'
  },

  // ── 2026 ──
  {
    id: 'fitwell-ai-intern',
    type: 'professional',
    yearNumeric: 2026,
    month: 'January',
    year: '2026',
    location: 'Remote',
    title: 'AI Intern',
    organization: 'Fitwell Tech Pvt. Ltd.',
    roleTag: 'Internship',
    shortDescription: 'Worked on AI-based annotation systems and automation workflows involving MTR files from multiple global mills.',
    expandedDetails: 'Worked on AI-based annotation systems and automation workflows involving MTR files from multiple global mills.',
    timeline: 'Jan 2026 – Apr 2026',
    contributions: [
      'Learned real-world AI annotation workflows',
      'Developed auto-rotation utilities without quality loss',
      'Improved collaborative project execution'
    ],
    fullStory: [
      'Worked on AI-based annotation systems and automation workflows involving MTR files from multiple global mills.',
      'This role deepened my understanding of practical AI applications in industry.'
    ],
    lessons: ['AI is only as good as the data.', 'Automation demands precision.'],
    coordinates: { x: 50, y: 50 },
    assetFolder: 'fitwell'
  },
  {
    id: 'tedx-marketing-lead-2026',
    type: 'professional',
    yearNumeric: 2026,
    month: 'January',
    year: '2026',
    location: 'AJCE, Kerala',
    title: 'Marketing Team Lead, TEDxAJCE 2026',
    organization: 'TEDxAJCE',
    roleTag: 'Leadership',
    shortDescription: 'Led the TEDxAJCE marketing team — ticket campaigns, sponsorship coordination, and hospitality management.',
    expandedDetails: 'Led the TEDxAJCE marketing team while handling ticket campaigns, sponsorship coordination, and hospitality management under high-pressure conditions.',
    timeline: 'Jan 2026 – May 2026',
    contributions: [
      'Successfully handled ticket campaigns',
      'Coordinated sponsorship acquisition',
      'Managed speaker hospitality workflows',
      'Led team operations during semester pressure'
    ],
    fullStory: [
      'Led the TEDxAJCE marketing team while handling ticket campaigns, sponsorship coordination, and hospitality management under high-pressure conditions.',
      'This experience elevated my ability to lead under pressure and manage multiple stakeholders simultaneously.'
    ],
    lessons: ['Pressure reveals character.', 'Stakeholder management is an art.'],
    coordinates: { x: 39, y: 91 },
    assetFolder: 'tedx'
  },
];

// ═══════════════════════════════════════════════════
//  PERSONAL MILESTONES (revealed in Full Journey)
// ═══════════════════════════════════════════════════

export const personalMilestones: Milestone[] = [
  {
    id: 'mumbai',
    type: 'personal',
    yearNumeric: 2004,
    year: 'Birth',
    location: 'Mumbai, Maharashtra',
    title: 'The Beginning',
    roleTag: 'Personal',
    shortDescription: 'Where the journey started, born into a world of endless possibilities.',
    fullStory: [
      'Born in the bustling heart of Mumbai, my first experiences were shaped by the vibrant energy of India\'s financial capital.',
      'Though my time here was early, the spirit of the city—fast-paced, resilient, and diverse—became a foundational part of my identity.'
    ],
    lessons: ['Adaptability starts at birth.', 'Cities have souls that influence us.'],
    coordinates: { x: 25, y: 65 },
    assetFolder: 'mumbai'
  },
  {
    id: 'raipur',
    type: 'personal',
    yearNumeric: 2007,
    year: 'Early Childhood',
    location: 'Raipur, Chhattisgarh',
    title: 'Learning Adaptability',
    roleTag: 'Personal',
    shortDescription: 'Navigating new environments and finding my footing in a growing city.',
    fullStory: [
      'Moving to Raipur introduced me to the concept of change. Every new city was a new chapter, a new school, and a new set of friends.',
      'This period taught me to embrace the unknown and find comfort in the unfamiliar.'
    ],
    lessons: ['Change is the only constant.', 'Friendship is a universal language.'],
    coordinates: { x: 55, y: 55 },
    schools: [{ name: 'MGM Higher Secondary School, Raipur', mapUrl: 'https://goo.gl/maps/...' }],
    assetFolder: 'raipur'
  },
  {
    id: 'bilaspur',
    type: 'personal',
    yearNumeric: 2010,
    year: 'Primary Years',
    location: 'Bilaspur, Chhattisgarh',
    title: 'Discovering Communication',
    roleTag: 'Personal',
    shortDescription: 'Where music, creativity, and the power of expression began to take shape.',
    fullStory: [
      'Bilaspur was where I first picked up a musical instrument and realized that communication isn\'t just about words.',
      'It was a time of exploration, where my curiosity for how things work—and how they sound—started to grow.'
    ],
    lessons: ['Expression has many forms.', 'Curiosity is a superpower.'],
    coordinates: { x: 58, y: 52 },
    schools: [{ name: 'MGM Higher Secondary School, Bilaspur', mapUrl: 'https://goo.gl/maps/...' }],
    assetFolder: 'bilaspur'
  },
  {
    id: 'flexicare',
    type: 'personal',
    yearNumeric: 2015,
    year: 'Turning Point',
    location: 'Kumbazha, Kerala',
    title: 'Innovation: FlexiCare',
    roleTag: 'Personal',
    shortDescription: 'A defining moment of discovering innovation through a real-world problem.',
    fullStory: [
      'While in Kumbazha, I witnessed a challenge that sparked a realization: technology and design can solve human problems.',
      'FlexiCare wasn\'t just a project; it was the moment I realized I wanted to be a builder.'
    ],
    lessons: ['Empathy drives innovation.', 'Problems are opportunities in disguise.'],
    coordinates: { x: 38, y: 92 },
    schools: [{ name: 'Mount Bethany Public School', mapUrl: 'https://goo.gl/maps/...' }],
    assetFolder: 'kumbazha'
  },
  {
    id: 'bhopal',
    type: 'personal',
    yearNumeric: 2017,
    year: 'Teenage Years',
    location: 'Bhopal, Madhya Pradesh',
    title: 'Technology Curiosity',
    roleTag: 'Personal',
    shortDescription: 'Diving deep into the world of computers and digital creativity.',
    fullStory: [
      'Bhopal was the playground for my technical experiments. I spent countless hours understanding systems, building small apps, and exploring the digital frontier.',
      'The city\'s blend of history and modernity mirrored my own growth—rooted in tradition but reaching for the future.'
    ],
    lessons: ['Self-learning is the best teacher.', 'The digital world is infinite.'],
    coordinates: { x: 45, y: 50 },
    schools: [{ name: 'St. Joseph\'s Co-ed School, Bhopal', mapUrl: 'https://goo.gl/maps/...' }],
    assetFolder: 'bhopal'
  },
  {
    id: 'kottayam',
    type: 'personal',
    yearNumeric: 2020,
    year: 'Higher Secondary',
    location: 'Kottayam, Kerala',
    title: 'Independent Growth',
    roleTag: 'Personal',
    shortDescription: 'Forging an independent path and focusing on long-term vision.',
    fullStory: [
      'Returning to Kerala for higher secondary school meant more than just academics; it was about defining who I wanted to be.',
      'I learned the value of discipline, focus, and the importance of a strong foundation.'
    ],
    lessons: ['Independence is earned.', 'Focus is the key to depth.'],
    coordinates: { x: 37, y: 90 },
    schools: [{ name: 'Girideepam Bethany Central School', mapUrl: 'https://goo.gl/maps/...' }],
    assetFolder: 'kottayam'
  },
  {
    id: 'future',
    type: 'personal',
    yearNumeric: 2027,
    year: 'Present & Beyond',
    location: 'Infinite',
    title: 'Continuing the Journey',
    roleTag: 'Personal',
    shortDescription: 'The story is still unfolding, driven by curiosity and a vision for the future.',
    fullStory: [
      'My journey is far from over. I am constantly evolving, learning new technologies, and looking for the next big challenge.',
      'The focus remains the same: building things that matter and growing through every experience.'
    ],
    lessons: ['Stay hungry, stay curious.', 'The best is yet to come.'],
    coordinates: { x: 50, y: 50 },
    assetFolder: 'future'
  }
];

// ═══════════════════════════════════════════════════
//  COMBINED & SORTED
// ═══════════════════════════════════════════════════

const monthOrder: Record<string, number> = {
  January: 1, February: 2, March: 3, April: 4,
  May: 5, June: 6, July: 7, August: 8,
  September: 9, October: 10, November: 11, December: 12
};

function sortMilestones(milestones: Milestone[]): Milestone[] {
  return [...milestones].sort((a, b) => {
    if (a.yearNumeric !== b.yearNumeric) return a.yearNumeric - b.yearNumeric;
    const monthA = a.month ? (monthOrder[a.month] ?? 0) : 0;
    const monthB = b.month ? (monthOrder[b.month] ?? 0) : 0;
    return monthA - monthB;
  });
}

export const allMilestonesSorted: Milestone[] = sortMilestones([
  ...professionalMilestones,
  ...personalMilestones,
]);

/** Get unique years from a milestone set, preserving order */
export function getYearGroups(milestones: Milestone[]): { year: number; milestones: Milestone[] }[] {
  const map = new Map<number, Milestone[]>();
  for (const m of milestones) {
    const arr = map.get(m.yearNumeric) ?? [];
    arr.push(m);
    map.set(m.yearNumeric, arr);
  }
  return Array.from(map.entries())
    .sort(([a], [b]) => a - b)
    .map(([year, milestones]) => ({ year, milestones }));
}
