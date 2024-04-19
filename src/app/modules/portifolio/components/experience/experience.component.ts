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
        strong:"Consultant Data Scientist - Capco",
        p:"2022 July - Current Position"
      },
      text: "Decomposing monolith to microservices."
    },
    {
      summary:{
        strong:"Data Scientist III - GPA",
        p:"2021 May - 2022 July"
      },
      text: "Making machine learning models applied to field of retail."
    },
    {
      summary:{
        strong:"Data Scientist II - Cogna",
        p:"2019 May - 2021 May"
      },
      text: "Making machine learning models applied to field of education."
    },
  ])
}
