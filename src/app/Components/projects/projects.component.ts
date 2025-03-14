import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Projects } from '../../Data/Projects';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = Projects;

  constructor(private router: Router) {}

  navigateToProject(index: number) {
    this.router.navigate(['/project', index]).then(() => {
      window.scrollTo(0, 0);
    });
  }
}
