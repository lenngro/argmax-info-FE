import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { BlogModule } from './blog/blog.module';
import { AboutModule } from './about/about.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostModule } from './post/post.module';
import { QuillModule } from 'ngx-quill'


const appRoutes: Routes = [
  {path: 'home', redirectTo: '/home', pathMatch: 'full'},
  {path: 'about', redirectTo: '/about', pathMatch: 'full'},
  {path: 'blog', redirectTo: '/blog', pathMatch: 'full'},
  {path: 'post', redirectTo: '/post', pathMatch: 'full'},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HomeModule,
    BlogModule,
    AboutModule,
    FormsModule,
    HttpClientModule,
    PostModule,
    QuillModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
