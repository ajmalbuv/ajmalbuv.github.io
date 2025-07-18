import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'project/:id',
    loadComponent: () =>
      import('./Components/project-details/project-details.component').then(
        (m) => m.ProjectDetailsComponent,
      ),
  },
];
