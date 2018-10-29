import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article.interface';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  public articles: Article[]; 

  constructor() {
    
   }

  ngOnInit() {
    this.articles=[{
      title:'Dynamic TwitchTV Search Result Component Using Angular’s HTTP Service + RxJS Observables',
      link:'https://medium.com/@a_reza88/angular-2-twitchtv-dynamic-search-result-using-angulars-http-service-rxjs-observables-42b9c55a17b8'
    },{
      title:'Angular 2 — Guild Roster Component — flatMap and </ng-container> to the rescue!', 
      link:'https://medium.com/@farmani1/angular-2-guild-roster-component-flatmap-and-ng-container-to-the-rescue-6c4584565b48'
    }]; 
  }

}
