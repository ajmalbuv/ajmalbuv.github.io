import { Component, OnInit } from '@angular/core';
import { Experience } from '../../Data/Experience';
import { Education } from '../../Data/Education';
import { Certification } from '../../Data/Certification';
import { CommonModule } from '@angular/common';
import { DataService } from '../../Services/data.service';

@Component({
    selector: 'app-about',
    imports: [CommonModule],
    templateUrl: './about.component.html',
    styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  experiences: any[] = [];
  educations: any[] = [];
  certifications: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.experiences = this.dataService.getExperiences();
    this.educations = this.dataService.getEducations();
    this.certifications = this.dataService.getCertifications();
  }
}
