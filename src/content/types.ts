import type { LucideIcon } from "lucide-react";

export type Lang = "en" | "ar";

export const projectTags = ["web", "mobile", "ai", "performance", "cms"] as const;
export type ProjectTag = (typeof projectTags)[number];

export interface SectionText {
  eyebrow: string;
  title: string;
  highlight: string;
  description?: string;
}

export interface CaseStudy {
  title: string;
  client: string;
  role: string;
  summary: string;
  highlights: string[];
  metric: { value: string; label: string };
  stack: string[];
  tags: ProjectTag[];
}

export interface ArchiveItem {
  title: string;
  what: string;
  stack: string;
  tags: ProjectTag[];
}

export interface Role {
  title: string;
  company: string;
  period: string;
  points: string[];
}

export interface IconItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface Content {
  meta: { title: string; description: string };
  profile: { name: string; location: string };
  nav: {
    about: string;
    services: string;
    projects: string;
    experience: string;
    skills: string;
    contact: string;
    cta: string;
    toggleMenu: string;
    toLight: string;
    toDark: string;
    otherLang: string;
    otherLangAria: string;
  };
  hero: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    intro: string;
    ctaWork: string;
    ctaContact: string;
    email: string;
  };
  resume: {
    cta: string;
    ctaShort: string;
    eyebrow: string;
    title: string;
    desc: string;
    meta: string;
    orEmail: string;
  };
  stats: { value: string; label: string }[];
  about: SectionText & {
    paragraphs: string[];
    facts: { icon: LucideIcon; label: string; value: string }[];
    speaksLabel: string;
    languages: string[];
  };
  services: SectionText & { items: IconItem[] };
  work: SectionText & {
    caseStudies: CaseStudy[];
    archive: ArchiveItem[];
    viewAllTitle: string;
    viewAllDesc: (total: number) => string;
    viewAllCta: string;
  };
  projectsPage: {
    metaTitle: string;
    back: string;
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    filtersLabel: string;
    all: string;
    tags: Record<ProjectTag, string>;
    featuredTitle: string;
    featuredDesc: string;
    archiveTitle: string;
    archiveDesc: string;
    empty: string;
    count: (n: number) => string;
    ctaTitle: string;
    ctaDesc: string;
    ctaContact: string;
  };
  experience: SectionText & { roles: Role[] };
  skills: SectionText & { groups: { icon: LucideIcon; label: string; items: string[] }[] };
  process: SectionText & { stepLabel: string; steps: { title: string; desc: string }[] };
  highlights: SectionText & {
    achievements: IconItem[];
    certsTitle: string;
    certs: { name: string; issuer: string; year: string }[];
    educationTitle: string;
    education: { degree: string; school: string; period: string };
  };
  contact: {
    eyebrow: string;
    titleStart: string;
    titleHighlight: string;
    body: string;
    copy: string;
    copied: string;
    copiedToast: string;
    copyFailed: (email: string) => string;
    mailSubject: string;
  };
  footer: { rights: (year: number, name: string) => string; backToTop: string };
}
