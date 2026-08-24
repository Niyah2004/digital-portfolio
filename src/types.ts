export interface Profile {
  name: string;
  pronouns?: string;
  role: string;
  tagline: string;
  bio: string;
  location: string;
  availability: {
    status: 'available' | 'contract_only' | 'busy';
    text: string;
  };
  phone?: string;
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

export type SkillCategory = 'all' | 'frontend' | 'backend' | 'cloud_devops' | 'design_ui' | 'ai_tools' | 'risk_compliance' | 'programming' | 'cloud_testing' | 'genai_agentic' | 'tools_platforms';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  highlight: string;
  tags: string[];
}

export interface EducationCertificate {
  id: string;
  name: string;
  focus: string;
  //description: string;
  badge: string;
  skills: string[];
}

export interface Education {
  id: string;
  degree: string;
  major: string;
  institution: string;
  location: string;
  graduationDate: string;
  gpa: string;
  accreditation: string;
  certificates: EducationCertificate[];
  coursework: string[];
  honors: string[];
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
  location: string;
  period: string;
  isCurrent?: boolean;
  type: string;
  description: string;
  responsibilities: string[];
  impactMetrics: string[];
  technologies: string[];
}
