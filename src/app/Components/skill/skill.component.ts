import { Component } from '@angular/core';
import { Skill } from '../../Data/Skill';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css'
})
export class SkillComponent {
  skills=Skill;
}
