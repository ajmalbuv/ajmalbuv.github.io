export interface SkillItem {
  name: string;
  image: string;
}

export interface Skill {
  type: string;
  skills: SkillItem[];
}
