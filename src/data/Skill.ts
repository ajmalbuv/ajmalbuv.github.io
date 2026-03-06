import type { Skill as SkillType } from "../types/skill";

export const Skill: SkillType[] = [
  {
    type: "Programming Languages",
    skills: [
      { name: "Python", icon: "devicon:python" },
      { name: "JavaScript", icon: "devicon:javascript" },
      { name: "TypeScript", icon: "devicon:typescript" },
      { name: "Java", icon: "devicon:java" },
    ],
  },
  {
    type: "Web Technologies",
    skills: [
      { name: "HTML5", icon: "devicon:html5" },
      { name: "CSS3", icon: "devicon:css3" },
      { name: "Tailwind CSS", icon: "devicon:tailwindcss" },
    ],
  },
  {
    type: "Database Management Systems",
    skills: [
      { name: "PostgreSQL", icon: "devicon:postgresql" },
      { name: "MySQL", icon: "devicon:mysql" },
      { name: "MongoDB", icon: "devicon:mongodb" },
    ],
  },
  {
    type: "Frameworks and Libraries",
    skills: [
      { name: "FastAPI", icon: "simple-icons:fastapi" },
      { name: "Express.js", icon: "devicon:express" },
      { name: "Redux", icon: "devicon:redux" },
      { name: "JWT", icon: "simple-icons:jsonwebtokens" },
      { name: "Redis", icon: "devicon:redis" },
      { name: "RESTful APIs", icon: "mdi:api" },
      { name: "Angular", icon: "devicon:angular" },
      { name: "Django", icon: "simple-icons:django" },
      { name: "Flutter", icon: "devicon:flutter" },
      { name: "Bootstrap", icon: "devicon:bootstrap" },
      { name: "Vue.js", icon: "devicon:vuejs" },
    ],
  },
  {
    type: "DevOps & Cloud Platforms",
    skills: [
      { name: "Docker", icon: "devicon:docker" },
      { name: "Git", icon: "devicon:git" },
      { name: "AWS", icon: "devicon:amazonwebservices" },
      { name: "Vercel", icon: "simple-icons:vercel" },
      { name: "Oracle Cloud", icon: "simple-icons:oracle" },
      { name: "Firebase", icon: "devicon:firebase" },
      { name: "Nginx", icon: "devicon:nginx" },
      { name: "GitLab", icon: "devicon:gitlab" },
      { name: "Kubernetes", icon: "devicon:kubernetes" },
    ],
  },
];
