import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { PostResolver } from './article/post.resolver';

const blogRoutes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: 'article', component: ArticleComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(blogRoutes)
  ],
  declarations: [BlogComponent, ArticleComponent],
  exports: [ArticleComponent],
  providers: [PostResolver]
})
export class BlogModule { }
