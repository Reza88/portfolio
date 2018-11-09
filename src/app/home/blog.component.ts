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
      title:'Angular Change Detection Strategies', 
      detail:`
      <p> In my opinion one of the fascinating caveats of building angular applications
      is the concept of change detection. Having a comprehensive understanding 
      of the change detection mechanism in angular is difficult to grasp because of it's lack of discussion 
      and anonymity.
      </p>

      <p>
      Change detection occurs whenever the DOM is updated with data. There are two different 
      types of strategies angular provides us. The first of which is the <i>default strategy</i>. In short, 
      the default strategy is propogated by ANY change or mutation of data. At this point Angular
      will run the change detector and update the DOM accordingly. The <b><i>onPush strategy</i></b> in comparison
      runs the change detector whenever a new <i>reference (Object, Array...)</i> is passed to @Input() data. 
      Below is a very simple example illustrating how change detection works under the hood. 
      
      </p>

      <p>Here we have two components ChildArrayComponent and ChildObjectComponent.
      Both components have properties annotated with the input() tag. 


      <pre><code class="javascript"><b><i>child-array.component.ts</b></i>
      @Component({
        selector: 'app-child-array',
        templateUrl: './child-array.component.html',
        changeDetection:ChangeDetectionStrategy.Default
      })
      export class ChildArrayComponent implements OnInit {
        @Input() personArray:any; 
      
        constructor() { }
      
        ngOnInit() {
        }
      }</code></pre>

      <pre><code class="javascript"><b><i>child-object.component.ts</b></i>
      @Component({
        selector: 'app-child-object',
        templateUrl: './child-object.component.html',
        changeDetection:ChangeDetectionStrategy.OnPush
      })
      export class ChildObjectComponent implements OnInit {
        @Input() personObject:any; 
      
        constructor() { }
      
        ngOnInit() {
        }
      }</code></pre>

      <p>From above ChildObjectComponent is utilizing the onPush strategy. This means that 
      change detection will trigger only if an immutable reference is passed through the 
      Input() property. On the other hand ChildArrayComponent is utilizing the default change detection
      strategy. This means any mutated data will be picked up regardless 
      of the input property being passed a primitive or reference type.</p>

      <pre><code class="html"><b><i>app.component.html</b></i>
      &lt;h1&gt;Object Reference&lt;/h1&gt;
      &lt;button (click)=&quot;changePersonProperty()&quot;&gt;Change Property&lt;/button&gt;
      &lt;button (click)=&quot;changePersonObject()&quot;&gt;Change Object&lt;/button&gt;    
      &lt;app-child-object [personObject]=&quot;personObject&quot;&gt;&lt;/app-child-object&gt;
      
      &lt;h1&gt;Array Reference&lt;/h1&gt;
      &lt;button (click)=&quot;addToPersonArray()&quot;&gt;Add To Person Array&lt;/button&gt;
      &lt;button (click)=&quot;changePersonArrayReference()&quot;&gt;Change Person Array Reference&lt;/button&gt;
      &lt;app-child-array [personArray]=&quot;personArray&quot;&gt;&lt;/app-child-array&gt;
      </code></pre>
      <p>Here we have four different buttons and their attributed event function handlers. These are responsible for manipulating 
      the data passed into the ChildArrayComponent and ObjectChildcomponent.</p>


      <pre><code class="javascript"><b><i>app.component.ts</b></i>
      @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
      })

      export class AppComponent {
        private personObject:{
          name:string
          lastname?:string
        }; 
        private personArray = ['John','Billy','Jane','Bob']; 
      
      private randomListOfNames = ['Matthew','James','Craig','Ali','Amir','Martha',
      'Stewart','Jennifer','Kumar','Jamal','Ling']; 

      constructor(){
        this.personObject={
          name:'user', 
          lastname:'test'
        }
      }
      
      changePersonProperty(){
        this.personObject.name='user2';
        this.personObject.lastname='test2' 
      }

      changePersonObject(){
        this.personObject={
          name:'user2', 
          lastname:'test2' 
        }
      }

      addToPersonArray(){
        this.personArray.push(this.randomListOfNames[Math.floor(Math.random()*this.randomListOfNames.length)]); 
      }

      changePersonArrayReference(){
        this.personArray=['Mark','Markus','Michael']; 
      }  

    }</code></pre>

<p>The above code is the parent component. Inside this component the reference types (<b>personObject</b> and <b>personArray</b>) are both initialized and 
populated with some data. <b>personObject</b> is associated with 
two event function handlers <b>changePersonProperty()</b> and <b>changePersonProperty().</b></p>

<p><b>personObject</b>'s properties will be modified by <b>changePersonProperty()</b> and <b>changePersonObject()</b> 
will modify the object reference itself. Inside <b>ChildObjectComponent</b> what we expect to occur is only the function
<b>changePersonObject()</b> to trigger a response from the DOM since the change detection strategy is set to <b>onPush</b>. 
If we were to set the change detection strategy to <b>default</b> then both functions will cause a response.</p>

<p><b>personArray</b>'s array is populated with data by the <b>addToPersonArray()</b> function. <b>changePersonArrayReference()</b>
is responsible for modifying the array reference itself. Inside the <b>ChildArrayComponent</b> we expect the same type of result 
as with the object reference. Because the component has set the change detection strategy to be <b>default</b> both functions will trigger 
a response within the DOM. If the strategy was set to <b>onPush</b> only the function responsible for modifying the array 
reference will cause a change. </p>

<p>
Now why is all of this important? and what is the purpose of doing this? In our small example above there really isn't a significant impact. 
However  performance is a crucial component for larger and more complex applications. By default Angular change detection will pass through 
every component node in the tree to check if an update is needed. Angular is able to achieve thousands of checks every few milliseconds due to 
the fact that Angular generates VM friendly code. Because of this there really isn't a significant performance bottleneck. However, understanding 
when to leverage the onPush strategy and when not too works in our favor and ultimately can be responsible for boosting app performance by skipping 
change detection and for a specific component tree. </p>

<p>Demo: <a href="https://github.com/Reza88/ChangeDetectionMechanism">Change Detection Demo</a></p>

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
