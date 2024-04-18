import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  public arrayExperience = signal([
    {
      summary:{
        strong:"Consultant Data Scientist",
        p:"2022 July - Current Position"
      },
      text: "Decomposing monolith to microservices."
    },
    {
      summary:{
        strong:"Consultant Data Scientist",
        p:"2022 July - Current Position"
      },
      text: "Decomposing monolith to microservices."
    },
    {
      summary:{
        strong:"Consultant Data Scientist",
        p:"2022 July - Current Position"
      },
      text: "Decomposing monolith to microservices."
    },
  ])
}
