import type { ImageMetadata } from "astro";

export interface SkillItem {
  name: string;
  icon: string | ImageMetadata;
}

export interface Skill {
  type: string;
  skills: SkillItem[];
}
