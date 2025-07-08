import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Projects } from '../../Data/Projects';
import { CommonModule } from '@angular/common';
import { Project } from '../../types/projects';

@Component({
  selector: 'app-project-details',
  imports: [CommonModule],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css',
})
export class ProjectDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);

  project!: Project;
  screenshotsArray: (string | undefined)[] = [];

  ngOnInit(): void {
    const projectId = this.route.snapshot.paramMap.get('id');
    if (projectId !== null) {
      this.project = (Projects as Project[])[+projectId];
    }

    if (this.project && this.project.screenshots) {
      this.screenshotsArray = Object.values(this.project.screenshots);
    }
  }
}
