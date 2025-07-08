import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../Services/data.service';
import { Experience } from '../../types/experience';
import { Education } from '../../types/education';
import { Certification } from '../../types/certification';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  private dataService = inject(DataService);

  experiences: Experience[] = [];
  educations: Education[] = [];
  certifications: Certification[] = [];

  ngOnInit() {
    this.experiences = this.dataService.getExperiences();
    this.educations = this.dataService.getEducations();
    this.certifications = this.dataService.getCertifications();
  }
}
