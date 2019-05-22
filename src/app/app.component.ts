import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginData } from './models/loginData.model';
import { ɵangular_packages_platform_browser_dynamic_platform_browser_dynamic_a } from '@angular/platform-browser-dynamic';
import { BlogService } from './services/blog.service';
import { resolve } from 'q';
import { ArticleComponent } from './blog/article/article.component';
import { BlogState } from './store/blog/blog.reducer';
import { Store, select } from '@ngrx/store';
import { RequestPostsMetadata, LogIn, LogOut } from './store/blog/blog.actions';
import { PostsMetadata, SelectLogIn } from './store/blog/blog.selector';
import { PostResolver } from './blog/article/post.resolver';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  currentPage: string;
  title = 'blog';
  loginData: LoginData;
  username: string;
  password: string;
  private isLoggedIn: boolean;
  status: string;
  private postsMetadata: Array<any>;


  constructor(private router: Router, private blogService: BlogService, private store: Store<BlogState>) {

    this.isLoggedIn = false;

    this.store.dispatch(new RequestPostsMetadata);
    this.store.pipe(select(SelectLogIn)).subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
    });

    this.loginData = {
      username: "lenngro",
      password: ""
    }

    this.router.events.subscribe(() => {
      this.currentPage = router.url;
    });

  }

  onPage(page: string) {
    return (page == this.status);
  }

  keyDownFunction(event) {
    if(event.keyCode == 13) {
      this.login();
    }
  }

  login() {
    this.blogService.login(this.loginData).subscribe(response => {
      if (response === true) {
        this.store.dispatch(new LogIn);
      }
    })
    this.loginData.password = "";
  }

  logout() {
    this.store.dispatch(new LogOut);    
  }

  homeClick() {
    this.router.navigateByUrl('/home');
    this.status = "home";
  }

  blogClick() {
    this.router.navigate(['/blog'], {queryParams: {page: 0}});
    this.status = "blog";
  }

  aboutClick() {
    this.router.navigateByUrl('/about');
    this.status = "about";
  }

  postClick() {
    this.router.navigateByUrl('/publish');
    this.status = "post";
  }



}
