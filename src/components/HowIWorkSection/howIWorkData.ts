import {
  Lightbulb,
  Bot,
  Users,
  Palette,
  Zap,
  Mic,
  type LucideIcon,
} from 'lucide-react';

// ═══════════════════════════════════════════════════
//  CAPABILITIES
// ═══════════════════════════════════════════════════

export interface Capability {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const capabilities: Capability[] = [
  {
    id: 'product-thinking',
    title: 'Product Thinking',
    description:
      'Transforming observations and frustrations into scalable systems and meaningful user experiences.',
    icon: Lightbulb,
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    description:
      'Exploring AI-assisted workflows, intelligent systems, and rapid problem-solving approaches.',
    icon: Bot,
  },
  {
    id: 'leadership-community',
    title: 'Leadership & Community',
    description:
      'Leading technical communities, mentoring peers, and creating collaborative learning environments.',
    icon: Users,
  },
  {
    id: 'uiux-design',
    title: 'UI/UX & Experience Design',
    description:
      'Designing cinematic, immersive, and human-centered digital experiences.',
    icon: Palette,
  },
  {
    id: 'rapid-prototyping',
    title: 'Rapid Prototyping',
    description:
      'Quickly turning concepts into functional systems through modern AI-assisted development workflows.',
    icon: Zap,
  },
  {
    id: 'communication-workshops',
    title: 'Communication & Workshops',
    description:
      'Conducting workshops and technical sessions that simplify complex ideas through practical learning.',
    icon: Mic,
  },
];

// ═══════════════════════════════════════════════════
//  TECH ECOSYSTEM
// ═══════════════════════════════════════════════════

export interface TechGroup {
  id: string;
  label: string;
  items: string[];
}

export const techEcosystem: TechGroup[] = [
  {
    id: 'development',
    label: 'Development',
    items: [
      'Python',
      'Java',
      'React',
      'FastAPI',
      'ASP.NET Core',
      'TypeScript',
      'JavaScript',
      'PostgreSQL',
      'Tailwind CSS',
    ],
  },
  {
    id: 'ai-automation',
    label: 'AI & Automation',
    items: [
      'Prompt Engineering',
      'AI Workflow Design',
      'Data Annotation',
      'Automation Pipelines',
    ],
  },
  {
    id: 'design-product',
    label: 'Design & Product',
    items: [
      'UI/UX Design',
      'Interaction Design',
      'Wireframing',
      'Product Ideation',
    ],
  },
  {
    id: 'tools-workflow',
    label: 'Tools & Workflow',
    items: [
      'GitHub',
      'Figma',
      'VS Code',
      'Supabase',
      'Agile Workflow',
      'Team Collaboration',
    ],
  },
];

// ═══════════════════════════════════════════════════
//  LANGUAGES
// ═══════════════════════════════════════════════════

export interface Language {
  name: string;
  level: string;
}

export const languages: Language[] = [
  { name: 'English', level: 'Fluent' },
  { name: 'Hindi', level: 'Fluent' },
  { name: 'Malayalam', level: 'Fluent' },
];

// ═══════════════════════════════════════════════════
//  HIGHLIGHTS
// ═══════════════════════════════════════════════════

export interface Highlight {
  label: string;
  detail: string;
}

export const highlights: Highlight[] = [
  { label: 'SIH 2024', detail: 'Finalist' },
  { label: 'init() Association', detail: 'President' },
  { label: 'TEDxAJCE', detail: 'Marketing Lead' },
  { label: 'Internships', detail: '3 Completed' },
  { label: 'YIP 5.0', detail: 'State-Level Winner' },
  { label: 'Workshops', detail: '5+ Sessions' },
];
