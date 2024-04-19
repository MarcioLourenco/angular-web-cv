import { Component, signal } from '@angular/core';
import { sign } from 'crypto';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal([
    {
      src:"./assets/img/projects/gamejpg.jpg",
      alt:"Project",
      title:"FullStack",
      width:"200px",
      height: "100px",
      description: "-----------------------------------",
      links:[
        {name:"---------",
        href:"----------"
        }
      ]
    },

  ])
}
