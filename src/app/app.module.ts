import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {SafeHtmlPipe} from "./pipes/safe.html.pipe";



import { AppComponent } from './app.component';
import { BlogComponent } from './home/blog.component';
import { ProjectsComponent } from './projects/projects.component';
import { ArticleComponent } from './article/article.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    BlogComponent,
    ArticleComponent,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[ BlogComponent]
})
export class AppModule { }
