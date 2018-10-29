import { ArticleComponent } from './article/article.component';
import { BlogComponent } from './home/blog.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectsComponent} from './projects/projects.component'; 
 
const routes: Routes =[
{
    path:'',
    component: BlogComponent
},
{
    path:'projects',
    component: ProjectsComponent
},
{
    path:'articles',
    component:ArticleComponent
}
]; 

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}