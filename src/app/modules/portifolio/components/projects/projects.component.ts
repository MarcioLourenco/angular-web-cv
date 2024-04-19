import { Component, signal } from '@angular/core';
import { Router } from '@angular/router'; // Importe o serviço Router
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
  constructor(private router: Router) {} // Injete o serviço Router

  navigateToGamePage() {
    this.router.navigate(['/jsgamepage']); // Navegue para a rota '/jsgamepage'
  }
  
}
