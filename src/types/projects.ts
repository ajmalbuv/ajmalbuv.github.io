import type { ImageMetadata } from 'astro';

export interface ProjectFeature {
  heading: string;
  description: string;
}

export interface ProjectScreenshots {
  [key: string]: string | ImageMetadata | undefined;
}

export interface Project {
  id: number;
  img: string | ImageMetadata;
  title: string;
  description: string;
  largeDescription: string;
  techstack: string;
  features: ProjectFeature[];
  screenshots: ProjectScreenshots;
  link?: string;
  githubLink?: string;
}
