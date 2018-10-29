import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BlogComponent } from './home/blog.component';
import { ProjectsComponent } from './projects/projects.component';
import { ArticleComponent } from './article/article.component';

import { HighlightJsModule } from 'ngx-highlight-js';
import { NgxMdModule } from 'ngx-md'; 



@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    BlogComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighlightJsModule,
    NgxMdModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
