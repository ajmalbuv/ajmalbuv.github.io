import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Projects } from '../../Data/Projects';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  private router = inject(Router);

  projects = Projects;

  navigateToProject(index: number) {
    this.router.navigate(['/project', index]).then(() => {
      window.scrollTo(0, 0);
    });
  }
}
