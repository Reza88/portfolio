import { ChangeLog } from '../../models/changelog.interface';
import { Component, OnInit, ElementRef, ViewChild, Directive } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  public changeLog: ChangeLog[];

  constructor() {
  }

  public ngOnInit(): void {
    this.changeLog = [{
      color: '#ffffff',
      month: 'Dec',
      day: 1,
      year: 2018,
      title: 'Angular Server Side Events + Change Detection + NgZone',
      detail: `<p>Some time ago I was working on a crypto app in which I needed to display
      the most up-to-date bitcoin prices. I unsuccesfully tried a few different ways to correclty propogate 
      these changes in my component. It was until I utilized Server-Side Events (SSE) in conjunction with RxJS observables 
      that I was succesfully able to do this. Just a disclaimer..there is definitely other ways of implementing a solution 
      to display information for a real-time web application however I thoroughly appreciated the way observables allowed us to 
      convert our server-side streams into an event one with RxJS.</p>

      <p>
      When we talk about building real-time web applications we need to consider how we're going to send our data from the 
      server to the client. Both WebSockets and Server-Side Events are few options to consider. It must be said that these implementations are not 
      competing technologies. WebSockets connections send data to the browser and recieve data from the browser (think of a chat application).
      Server-Side Events on the other hand asynchronously push the data from the server to the client (online stock quotes, etc.). It also offers the 
      standard JavaScript client API <i>EventSource</i> which is implemented in most browsers as part of the HTML5 standard set by W3C.
      If you are contemplating which technology to use keep in mind the requirements needed for your application. 
      It may deem to be unnecessary for some types of applications to utilize WebSockets when it could be far easier to implement with a protocol such as SSE.</p>
      
      <p>
      In the sample demo, the server is written in NodeJS and the client is done in Angular 2. We'll begin discussing 
      how the server is set up in order to push data out in the form of SSE events.
      </p>

      <pre><code class="javascript"><b><i>server/index.js</b></i>
      const app = require('express')(); 
      const routes = require('./routes');
      const cors = require('cors'); 

      app.use(cors()); 
      app.use('/',routes); 

      app.listen(8000,()=>{
        console.log('Server Listening on port 8000'); 
      }); 
      </code></pre>
      <p>Above is a typical server entry point file utilizing ExpressJS with CORS enabled and running on port 8000. </p> 

      <pre><code class="javascript"><b><i>server/routes/index.js</b></i>
      const routes = require('express').Router();
      const fetch = require('node-fetch'); 

      routes.get('/streamdata',(req,res)=>{
        res.status(200).set({
          "connection":"keep-alive", 
          "cache-control" :"no-cache", 
          "content-Type":"text/event-stream"
     }); 
    
       setInterval(()=>{
        fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR')
        .then(res=>res.json())
        .then(json=>res.write('data:' + JSON.stringify(json) + "\\n\\n"));   
      },5000); 
  }); 
  module.exports = routes;
  </code></pre>
  <p>
    A few things to note in the above code. In the response header of our applications endpoint /streamdata we have set the content-type to be 
    <b>text/event-stream</b>. Events need to respond using this specific MIME type otherwise we will receieve the following error: 
    <p style="color:red"><i>EventSource's response has a MIME type ("text/html") that is not "text/event-stream". Aborting the connection.</p>
  </i></p>

  <p>Our API call is being fetched every 5 seconds. The data includes bitcoin prices in the following currencies USD, JPY, and EUR. Notice that 
  each notification is sent as a block of text terminated by a pair of newlines.</p> 

  <p>Moving on to the client side code...</p>

  <pre>
  <code class="javascript"><b><i>client/stream-data-client/src/app/app.component.ts</b></i>
  import { Component, NgZone } from '@angular/core';
  import { Sse} from './sse';
  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers:[Sse]
  })
  export class AppComponent {
    btcdata:string = '';
  
    constructor(sse:Sse){
      sse.observe('//localhost:8000/streamdata').subscribe(data=>this.btcdata=data);
      }; 
    }  
    </code></pre>
      
  <pre>
  <code class="javascript"><b><i>client/stream-data-client/src/app/sse.ts</b></i>
    import { NgZone, Injectable } from '@angular/core';
    import { Observable } from 'rxjs/Observable';
    const EventSource: any = window['EventSource'];
    @Injectable()
    export class Sse {

      constructor(private zone: NgZone) { }

      observe(sseUrl: string): Observable<any> {
          return new Observable<any>(obs => {
              const url = '//localhost:8000/streamdata';
              const es = new EventSource(sseUrl);
              es.onmessage = evt => {
              const data = evt.data;
              console.log(data);
              this.zone.run(() => obs.next(data));
            };
            return () => es.close();
        });
    }
}
</code></pre>
<p>inside <b>sse.ts</b> is where most of our logic occurs for converting our event stream into an observable. TypeScript 
does not know about EventSource which is part of window. So we have to extract first. We have a single method observe
which takes a single parameter. Inside this method we create an EventSource object and pass it the URL of our stream.
When updates are pushed from the server, the onmessage handler fires and new data is available. 
</p>

<p>It is at this point where we need to have a solid understanding of angular's change detection mechanism and zones. 
Recall from my previous blog post that angular change detection mechanism occurs whenever the DOM is updated. Angular uses 
ZoneJS in order to hook into every browser event so that it knows when to re-render the component when an event occurs. Unfortunately 
Angular is not familiar with APIs such as <b>EventSource</b> and thus it's not able to detect change. In order to circumvent the issue 
we have instantiated an instance of NgZone and called <b>zone.run(callback)</b>. Having this code in place now allows Angular 
to be able to detect changes and allow the DOM to be re-rendered whenever we emit a new event in our Observable. 
</p>

<p>Edge cases don't occur very often however if your ever in a situation where your Angular application is using third party libraries 
and automatic change detection is not working as expected ... hopefully this post can help you find the light!</p>

<p>Demo: <a href="https://github.com/Reza88/stream-data-sse-sample-app">Angular Server-Side Event Demo</a></p>



      `
    }, {
      color: '#ffffff',
      month: 'Oct',
      day: 2,
      year: 2018,
      title: 'Angular Change Detection Strategies',
      detail: `
      <p> In my opinion one of the fascinating caveats of building angular applications
      is the concept of change detection. Having a comprehensive understanding 
      of the change detection mechanism in angular is difficult to grasp because of it's lack of discussion 
      and anonymity.
      </p>

      <p>
      Change detection occurs whenever the DOM is updated with data. There are two different 
      types of strategies angular provides us. The first of which is the <b><i>default strategy</i></b>;. In short, 
      the default strategy is propogated by ANY change or mutation of data. At this point Angular
      will run the change detector and update the DOM accordingly. The <b><i>onPush strategy</i></b> in comparison
      runs the change detector whenever a new <i>reference (Object, Array...)</i> is passed to @Input() data. 
      Below is a very simple example illustrating how change detection works under the hood. 
      </p>

      <p>Below we have two components ChildArrayComponent and ChildObjectComponent.
      Both components have properties annotated with the input() tag. </p>


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
      <p>Above we have four different buttons and their attributed event function handlers. These are responsible for manipulating 
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
    }, {
      color: '#ffffff',
      month: 'May',
      day: 1,
      year: 2018,
      title: 'The Beginning',
      detail: "After years of procastinating a personal portfolio, I finally have my web site! alifarmani.com will be a personal playground for all webthings related. I hope to keep adding on it."
    },
    ]
  }
}
