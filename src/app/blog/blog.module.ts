import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { PostResolver } from './article/post.resolver';


import {MatPaginatorModule} from '@angular/material/paginator'; 

/**
 * 
const blogRoutes: Routes = [
  {
    path: '',
    component: BlogComponent
  }
];

 */
//resolve: { data: PostResolver }, data: { postMetadata: postsMetadata }})

@NgModule({
  imports: [
    MatPaginatorModule,
    CommonModule//,
    //RouterModule.forRoot(blogRoutes)
  ],
  declarations: [BlogComponent, ArticleComponent],
  exports: [ArticleComponent],
  providers: [PostResolver]
})
export class BlogModule { }
