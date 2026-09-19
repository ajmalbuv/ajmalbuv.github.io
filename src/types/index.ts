import type { ImageMetadata } from 'astro';

export interface SocialLink {
  readonly name: string;
  readonly url: string;
  readonly icon: string;
  readonly ariaLabel: string;
}

export interface ContactInfo {
  readonly email: string;
  readonly phone: string;
  readonly location: string;
  readonly socials: readonly SocialLink[];
}

export interface PersonalDetails {
  readonly name: string;
  readonly handle: string;
  readonly avatar: ImageMetadata;
  readonly title: string;
  readonly subtitle: string;
  readonly bio: string;
  readonly resumeUrl: string;
  readonly contact: ContactInfo;
}

export interface ExperienceItem {
  readonly company: string;
  readonly role: string;
  readonly duration: string;
  readonly location: string;
  readonly description: string;
  readonly highlights?: readonly string[] | undefined;
}

export interface EducationItem {
  readonly school: string;
  readonly degree: string;
  readonly duration: string;
  readonly location: string;
}

export interface ProjectFeature {
  readonly heading: string;
  readonly description: string;
}

export interface Project {
  readonly slug: string;
  readonly title: string;
  readonly summary: string;
  readonly fullDescription: string;
  readonly coverImage: ImageMetadata;
  readonly techstack: readonly string[];
  readonly features: readonly ProjectFeature[];
  readonly screenshots: readonly ImageMetadata[];
  readonly liveUrl?: string | undefined;
  readonly githubUrl?: string | undefined;
  readonly featured: boolean;
}

export interface SkillGroup {
  readonly category: string;
  readonly items: readonly string[];
}

export interface SiteData {
  readonly personal: PersonalDetails;
  readonly experiences: readonly ExperienceItem[];
  readonly education: readonly EducationItem[];
  readonly projects: readonly Project[];
  readonly skills: readonly SkillGroup[];
}
