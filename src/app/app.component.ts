import { Portfolio } from './../models/portfolio.interface';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public portfolio:Portfolio;
  public logOpen: boolean;

  public ngOnInit():void{
      this.portfolio = {
        firstName:'Ali',
        lastName:'Farmani',
        subheading: "Software developer based In Toronto",
        socialMedia:[{
          icon:'fa fa-linkedin fa-2x',
          link:'https://ca.linkedin.com/in/ali-farmani-47414175',
          color:'#0077B5'
        },{
          icon:'fa fa-github fa-2x',
          link:'https://github.com/Reza88',
          color:'#0077B5'
        },{
          icon:'fa fa-twitter fa-2x',
          link:'https://twitter.com/a_reza88',
          color:'#0077B5'
        }],
        introduction:"Ali Farmani - Software Developer - Toronto Area",
        speakerBio:`Ali is a self taught developer with full stack experience and currently working as a Senior Application Developer In the 
        financial industry in Toronto,Ontario.`
      };
  }
}
