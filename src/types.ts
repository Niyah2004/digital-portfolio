export interface Profile {
  name: string;
  pronouns?: string;
  role: string;
  tagline: string;
  bio: string;
  shortBio: string;
  location: string;
  availability: {
    status: 'available' | 'contract_only' | 'busy';
    text: string;
  };
  email: string;
  github: string;
  linkedin: string;
  twitter?: string;
  resumeDownloadName: string;
  avatarUrl: string;
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
}

export type SkillCategory = 'frontend' | 'backend' | 'cloud_devops' | 'design_ui' | 'ai_tools';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  level: number; // 0 - 100
  levelLabel: 'Expert' | 'Advanced' | 'Proficient';
  icon: string;
  experienceYears: number;
  highlight: string;
  tags: string[];
}

export type ProjectCategory = 'all' | 'web_apps' | 'ai_systems' | 'design_engineering' | 'mobile_fullstack';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  categoryLabel: string;
  featured: boolean;
  videoUrl?: string;
  fallbackPoster: string;
  videoCaption?: string;
  liveUrl?: string;
  githubUrl?: string;
  description: string;
  techStack: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  keyFeatures: string[];
  architectureNotes: string;
}

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  companyBadge: string;
  companyUrl?: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  type: string;
  description: string;
  responsibilities: string[];
  impactMetrics: string[];
  technologies: string[];
}

export interface DeploymentGuide {
  id: string;
  title: string;
  icon: string;
  difficulty: 'Beginner' | 'Intermediate';
  estimatedTime: string;
  steps: {
    step: number;
    title: string;
    command?: string;
    explanation: string;
  }[];
  freeTierNote: string;
}
