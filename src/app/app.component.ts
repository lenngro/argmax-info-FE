import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginData } from './models/loginData.model';
import { ɵangular_packages_platform_browser_dynamic_platform_browser_dynamic_a } from '@angular/platform-browser-dynamic';
import { BlogService } from './services/blog.service';
import { resolve } from 'q';

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
  isLoggedIn: boolean;
  blogService: BlogService;
  

  constructor(private router: Router, blogService: BlogService) {

    this.blogService = blogService;

    this.router.events.subscribe(() => {
      this.currentPage = router.url;
    });

    this.loginData = {
      username : "",
      password : ""
    }
    this.isLoggedIn = false;

   }

   login() {

    this.blogService.login(this.loginData).subscribe(response => {
      if (response === true) {
        this.isLoggedIn = true;
      }
    })
    this.loginData.username = "";
    this.loginData.password = "";
   }

   homeClick() {
    this.router.navigateByUrl('/home');
   }

   blogClick() {
    this.router.navigateByUrl('/blog');
   }

   aboutClick() {
    this.router.navigateByUrl('/about');
   }

   postClick() {
     this.router.navigateByUrl('/post');
   }
  
  }
