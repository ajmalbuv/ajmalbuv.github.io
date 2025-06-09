import { Injectable } from '@angular/core';
import { Experience } from '../Data/Experience';
import { Education } from '../Data/Education';
import { Certification } from '../Data/Certification';
import { PersonalDetails } from '../Data/PersonalDetails.';
import { Skill } from '../Data/Skill';
import { Projects } from '../Data/Projects';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getExperiences() {
    return Experience;
  }

  getEducations() {
    return Education;
  }

  getCertifications() {
    return Certification;
  }

  getPersonalDetails() {
    return PersonalDetails;
  }

  getSkills() {
    return Skill;
  }

  getProjects() {
    return Projects;
  }

  getContacts() {
    return PersonalDetails.contact;
  }
}
