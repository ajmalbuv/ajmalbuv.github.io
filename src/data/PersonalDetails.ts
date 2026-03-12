import type { PersonalDetails as PersonalDetailsType } from "../types/personalDetails.ts";
import photo from "../assets/images/personal/photo.webp";

export const PersonalDetails: PersonalDetailsType = {
  name: "Ajmal Basheer",
  img: photo,
  resume: "",
  designation: ["Flutter Mobile Developer", "Full Stack Developer"],
  description:
    "A results-driven software developer with expertise in both backend and frontend technologies. I build scalable, high-performance applications using modern frameworks and cloud services. Passionate about crafting seamless user experiences and robust, secure systems, I deliver end-to-end solutions for complex technical challenges.",
  contact: {
    email: {
      id: "ajmalbuv@gmail.com",
      img: "mdi:email",
    },
    phone: {
      number: "+91 9496444520",
      img: "mdi:phone",
    },
    address: "Bengaluru, Karnataka",
    github: {
      url: "https://github.com/ajmalbuv",
      img: "mdi:github",
    },
    linkedin: {
      url: "https://www.linkedin.com/in/ajmalbuv/",
      img: "mdi:linkedin",
    },
    instagram: {
      url: "https://www.instagram.com/_.aju",
      img: "mdi:instagram",
    },
  },
};
