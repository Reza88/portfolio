import { Portfolio } from './../models/portfolio.interface';
import { Component,OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/distinctUntilChanged'; 


declare var gtag:Function; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public portfolio:Portfolio;
  public logOpen: boolean;

  constructor(private router:Router){}

  public ngOnInit():void{
      this.router.events.distinctUntilChanged((previous:any,current: any)=>{
        //subscribe to any `Navigation` events where the url has changed. 
        if(current instanceof NavigationEnd){
          return previous.url ===current.url; 
        }
        return true; 
      }).subscribe((x:any)=>{
          gtag('config', 'UA-129511618-1');
      }); 

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
