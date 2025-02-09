import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalDetails } from '../../Data/PersonalDetails.';
import { AboutComponent } from '../about/about.component';
import { SkillComponent } from '../skill/skill.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    AboutComponent,
    SkillComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  user_details: any;
  currentDesignationIndex = 0;

  constructor(private data: DataService) {}

  downloadCV() {
    const fileUrl =
      'https://raw.githubusercontent.com/ajmalbuv/resume/master/resume.pdf';

    fetch(fileUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const blobUrl = window.URL.createObjectURL(blob);
        const anchor = document.createElement('a');
        anchor.href = blobUrl;
        anchor.download = 'AjmalBasheer-Resume.pdf';

        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
        window.URL.revokeObjectURL(blobUrl);
      })
      .catch((error) => console.error('Download failed:', error));
  }

  ngOnInit(): void {
    this.user_details = this.data.getPersonalDetails();
    setInterval(() => {
      this.currentDesignationIndex =
        (this.currentDesignationIndex + 1) %
        this.user_details.designation.length;
    }, 2000);
  }
}
