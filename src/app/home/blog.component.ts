import { ChangeLog } from '../../models/changelog.interface';
import { Component, OnInit, ElementRef, ViewChild, Directive } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  public changeLog:ChangeLog[]; 
  
  constructor() {
  }

  public ngOnInit():void {
    this.changeLog = [ {
      color:'#ffffff',
      month:'Oct',
      day:2,
      year:2018,
      title:'Angular Change Detection and Zones', 
      detail:`
      <p> In my opinion one of the fascinating caveats of building angular applications in
      is the concept of change detection. Having a comprehensive understanding 
      of the change detection mechanism in angular is difficult to grasp because of it's lack of discussion 
      and anonymity. At some point of time my understanding was limited too just acknowledging 
      that each component contained some sort of change detection mechanism. However, It was a 
      while after until I began understanding how it actually worked under the hood. 
      </p>

      <p>
      Change detection occurs whenever the DOM is updated with data. There are two different 
      types of strategies angular provides us. The first of which is the <i>default strategy</i>. In short, 
      the default strategy is propogated by any change or mutation of data. At this point Angular
      will run the change detector and update the DOM accordingly. The <b><i>onPush strategy</i></b> in comparison
      runs the change detector whenever a new <i>reference (Object, Array...)<i> is passed to @Input() data.
      </p>
      
      <pre>
      <code>
      <b><i>app.component.ts</b></i>

      import { ChangeLog } from '../../models/changelog.interface';
      import { Component, OnInit, ElementRef } from '@angular/core';
      import {ViewEncapsulation} from '@angular/core'; 
        @Component({
        selector: 'app-blog',
        templateUrl: './blog.component.html',
        styleUrls: ['./blog.component.css']
      })
      export class BlogComponent implements OnInit {s
        public changeLog:ChangeLog[]; 
        node: string;
      
      </code></pre></div>
      <p>This is ONLY a TEST</p>
      `
   },{
      color:'#ffffff',
      month:'May',
      day:1, 
      year:2018,
      title:'The Beginning',
      detail:"After years of procastinating a personal portfolio, I finally have my web site! alifarmani.com will be a personal playground for all webthings related. I hope to keep adding on it."
    },
   ]
  }
}
