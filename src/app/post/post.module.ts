import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { Routes, RouterModule } from '@angular/router';
import { QuillModule } from 'ngx-quill'
import { FormsModule } from '@angular/forms';

const postRoutes: Routes = [
  { path: 'publish', component: PostComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(postRoutes),
    QuillModule,
    FormsModule
  ],
  declarations: [PostComponent]
})
export class PostModule { }
