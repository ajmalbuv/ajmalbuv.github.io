import { Injectable } from '@angular/core';
import { Certification } from '../Data/Certification';
import { Education } from '../Data/Education';
import { Experience } from '../Data/Experience';
import { PersonalDetails } from '../Data/PersonalDetails';
import { Projects } from '../Data/Projects';
import { Skill } from '../Data/Skill';
import { Certification as CertificationType } from '../types/certification';
import { Education as EducationType } from '../types/education';
import { Experience as ExperienceType } from '../types/experience';
import {
  Contact,
  PersonalDetails as PersonalDetailsType,
} from '../types/personalDetails.';
import { Project as ProjectType } from '../types/projects';
import { Skill as SkillType } from '../types/skill';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}
  getExperiences(): ExperienceType[] {
    return Experience;
  }
  getEducations(): EducationType[] {
    return Education;
  }
  getCertifications(): CertificationType[] {
    return Certification;
  }
  getPersonalDetails(): PersonalDetailsType {
    return PersonalDetails;
  }
  getSkills(): SkillType[] {
    return Skill;
  }
  getProjects(): ProjectType[] {
    return Projects;
  }
  getContacts(): Contact {
    return PersonalDetails.contact;
  }
}
