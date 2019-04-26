import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { Routes, RouterModule } from '@angular/router';
import { QuillModule } from 'ngx-quill'

const postRoutes: Routes = [
  { path: 'post', component: PostComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(postRoutes),
    QuillModule
  ],
  declarations: [PostComponent]
})
export class PostModule { }
