import { Projects } from './../../models/projects.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public projects:Projects[];
  public otherProjects:Projects[]; 

  constructor() { }

  public ngOnInit():void {
    this.projects=[{
      projectTitle:'Dynamic TwitchTV Search Result Component',
      description:`This project covered the generation of an interactive search result component utilizing Angular's HTTP Service
      + RxJS observables with TwitchTV API service endpoints. In this application making a synchronous API call would impede any further
       code from executing. The blocking of code execution means that the application does not continue any further until a response is returned.
       With asynchronous API calls we can leverage the fact that we able to continue the execution of code without having to wait for a response.`,
      year:2016,
      link:'https://github.com/Reza88/TwitchDynamicSearch',
      languages:['Angular2'],
      color:'#1178B3'
    },
    {
      projectTitle:'Slack Crypto Bot',
      description:`Simple Interactive Node Crypto Slack BOT utilizing CryptoCompare's API services.`,
      year:2017,
      link:'https://github.com/Reza88/CryptoSlackBot',
      languages:['NodeJS'],
      color:'#1178B3'
    },{
      projectTitle:'WoW Guild Website',
      description:`This is an on-going light World of Warcraft guild website. Members are stored in a MongoDB instance and are
      used in conjunction with WoW API calls to retrieve user information and other meaningful data. Project includes both 
      a server-side and client component.`,
      year:2018,
      link:'https://github.com/Reza88/RezaWoWTracker',
      languages:['Angular2','NodeJS','ExpressJS','MongoDB'],
      color:'#1178B3'
    }]; 

    this.otherProjects=[{
      projectTitle:'FreeCodeCamp - Javascript Algorithms And Data Structures Certification',
      description:`The JavaScript Algorithms and Data Structures Developer Certification 
      covers an estimated 300 hours of course work with its primary focus being JavaScript 
      and Data Structures. Additional topics covered were ES6+, Regular Expressions, 
      Debugging, Data Structures, Object Oriented Programming, & Functional Programming`,
      year:2018,
      link:'https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=V2RXajgUYZc%2BAbODjNJhfHAOGnM%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWi7K87XerCirUBEeC5QjQA0Ku61STezRI6-I4y7K4h0jpW0JMP5agYUbhl4lWdI',
      languages:['JavaScript'],
      color:'#1178B3'
      },
      {
      projectTitle:'FreeCodeCamp - Responsive Web Design', 
      description:`FreeCodeCamp's Responsive Web Design Certification covers an 
      estimated 300 hours of course work that includes HTML5, CSS3, FlexBox, and CSS Grid. 
      There are 5 responsive projects required to build utilizing these technologies and hundreds 
      of challenges along the way.
      `,
      year:2018, 
      link:'https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=LooFisvbV7Hl8qIMr91T9EfvFjg%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWi8fsWMKOSprUAVKX4IjQBmeO21SWazQY7qKYvtdYhw2pG2Jpn5agYUbhl4lWdI',
      languages:['Javascript'],
      color:'#1178B3'
      },
      {
      projectTitle:'Reactive/rx-docs', 
      description:`Active contributor for work on the new rxjs-docs website a reactive programming library for javascript.`,
      year:2017, 
      link:'https://github.com/ReactiveX/rxjs-docs',
      languages:['Typescript'],
      color:'#1178B3'
      }
    ];
  }
















}


