import { ChangeLog } from '../../models/changelog.interface';
import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public changeLog:ChangeLog[]; 
  node: string;


  constructor(private elementRef: ElementRef) {

  }
  ngAfterContentInit() {
    const tmp = document.createElement('div');
    const el = this.elementRef.nativeElement.cloneNode(true);

    tmp.appendChild(el);
    this.node = tmp.innerHTML;
  }

  public ngOnInit():void {
    this.changeLog = [ {
      color:'#ffffff',
      month:'Oct',
      day:2,
      year:2018,
      title:'Updated projects/blog section', 
      detail:`
      <code>function greet(){
        console.log('hello'); 
      }</code>
  `
   },{
      color:'#ffffff',
      month:'May',
      day:1, 
      year:2018,
      title:'The Beginning',
      detail:"After years of procastinating a personal portfolio, I finally have my web site! alifarmani.com will always be a personal playground for all webthings related. I hope to keep iterating on it."
    },
   ]
  }
}
