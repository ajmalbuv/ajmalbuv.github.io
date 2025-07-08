import { Injectable } from '@angular/core';
import { Experience } from '../Data/Experience';
import { Education } from '../Data/Education';
import { Certification } from '../Data/Certification';
import { PersonalDetails } from '../Data/PersonalDetails.';
import { Skill } from '../Data/Skill';
import { Projects } from '../Data/Projects';

import { Experience as ExperienceType } from '../types/experience';
import { Education as EducationType } from '../types/education';
import { Certification as CertificationType } from '../types/certification';
import {
  PersonalDetails as PersonalDetailsType,
  Contact,
} from '../types/personalDetails.';
import { Skill as SkillType } from '../types/skill';
import { Project as ProjectType } from '../types/projects';

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
