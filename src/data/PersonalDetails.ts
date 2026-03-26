import photo from '../assets/images/personal/photo.webp';
import type { PersonalDetails as PersonalDetailsType } from '../types/personalDetails.ts';

export const PersonalDetails: PersonalDetailsType = {
  name: 'Ajmal Basheer',
  img: photo,
  resume:
    'https://media.githubusercontent.com/media/ajmalbuv/resume/refs/heads/master/resume-no-image.pdf',
  designation: ['Flutter Mobile Developer', 'Full Stack Developer'],
  description:
    'A results-driven software developer with expertise in both backend and frontend technologies. I build scalable, high-performance applications using modern frameworks and cloud services. Passionate about crafting seamless user experiences and robust, secure systems, I deliver end-to-end solutions for complex technical challenges.',
  contact: {
    email: {
      id: 'ajmalbuv@gmail.com',
      icon: 'mdi:email',
    },
    phone: {
      number: '+91 9496444520',
      icon: 'mdi:phone',
    },
    address: 'Bengaluru, Karnataka',
    github: {
      url: 'https://github.com/ajmalbuv',
      icon: 'mdi:github',
    },
    linkedin: {
      url: 'https://www.linkedin.com/in/ajmalbuv/',
      icon: 'mdi:linkedin',
    },
    instagram: {
      url: 'https://www.instagram.com/_.aju',
      icon: 'mdi:instagram',
    },
  },
};
