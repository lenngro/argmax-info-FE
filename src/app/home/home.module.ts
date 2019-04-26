import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { BlogModule } from '../blog/blog.module';
import { AboutModule } from '../about/about.module';

const homeRoutes: Routes = [
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(homeRoutes),
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
