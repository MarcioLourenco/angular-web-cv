import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal([
    {
      src:'assets/icons/knowledge/html5.svg',
      alt: 'HTML icon'
    },
    {
      src:'assets/icons/knowledge/css3.svg',
      alt: 'CSS icon'
    },
    {
      src:'assets/icons/knowledge/javascript.svg',
      alt: 'Javascript icon'
    },
    {
      src:'assets/icons/knowledge/angular.svg',
      alt: 'Angular icon'
    },
  ])
}
