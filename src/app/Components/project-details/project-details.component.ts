import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Projects } from '../../Data/Projects';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css'
})
export class ProjectDetailsComponent implements OnInit {
  project: any;
  screenshotsArray: string[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const projectId = this.route.snapshot.paramMap.get('id');
    if (projectId !== null) {
      this.project = Projects[+projectId];
    }

    if (this.project && this.project.screenshots) {
      this.screenshotsArray = Object.values(this.project.screenshots);
    }
  }

}
