export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'web' | 'mobile' | 'design' | 'fullstack';
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'design' | 'tools' | 'soft';
  icon?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  current?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  icon: string;
  category: 'award' | 'certification' | 'milestone';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  tags: string[];
  featuredImage: string;
  readTime: number;
}

export interface PersonalInfo {
  name: string;
  tagline: string;
  bio: string;
  email: string;
  location: string;
  avatar: string;
  resumeUrl: string;
  social: SocialLink[];
}

// Animation types
export interface AnimationProps {
  initial?: any;
  animate?: any;
  exit?: any;
  transition?: any;
  delay?: number;
}

// Theme types
export type ThemeMode = 'light' | 'dark' | 'system';

// Page section types
export type SectionId = 'hero' | 'about' | 'experience' | 'projects' | 'skills' | 'testimonials' | 'contact';

export interface SectionProps {
  id: SectionId;
  className?: string;
  children: React.ReactNode;
}