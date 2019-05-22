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
import { StoreModule } from '@ngrx/store';
import { blogReducer } from './store/blog/blog.reducer';
import { BlogEffects } from './store/blog/blog.effects';
import { EffectsModule } from '@ngrx/effects';
import { ArticleComponent } from './blog/article/article.component';
import { PostResolver } from './blog/article/post.resolver';
import { BlogComponent } from './blog/blog.component';


const appRoutes: Routes = [
  {path: 'home', redirectTo: '/home', pathMatch: 'full'},
  {path: 'about', redirectTo: '/about', pathMatch: 'full'},
  {path: 'blog', component: BlogComponent, pathMatch: 'full'},
  {
    path: 'blog/:url',
    component: ArticleComponent,
    resolve: {
      data: PostResolver
    }
  },
  {path: 'publish', redirectTo: '/publish', pathMatch: 'full'},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
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
    QuillModule,
    BlogModule,
    StoreModule.forRoot({blog: blogReducer}),
    EffectsModule.forRoot([BlogEffects])
  ],
  providers: [PostResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
