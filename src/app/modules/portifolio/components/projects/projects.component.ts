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
      src:"../assets/img/projects/vfull.png",
      alt:"Project",
      title:"FullStack",
      width:"100px",
      height: "51px",
      description: "-----------------------------------",
      links:[
        {name:"---------",
        href:"----------"
        }
      ]
    },

  ])
}
