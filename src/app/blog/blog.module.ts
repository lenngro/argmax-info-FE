import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { Routes, RouterModule } from '@angular/router';

const blogRoutes: Routes = [
  { path: 'blog', component: BlogComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(blogRoutes)
  ],
  declarations: [BlogComponent]
})
export class BlogModule { }
