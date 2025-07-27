import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Skill } from '../../Data/Skill';

@Component({
  selector: 'app-skill',
  imports: [CommonModule],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css',
})
export class SkillComponent {
  skills = Skill;
}
