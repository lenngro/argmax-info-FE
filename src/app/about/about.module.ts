import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from '../blog/blog.component';

const aboutRoutes: Routes = [
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(aboutRoutes)
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
