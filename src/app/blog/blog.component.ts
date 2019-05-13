import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Router } from '@angular/router';
import { ArticleComponent } from './article/article.component';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  posts: Array<any>;
  url: string;
  blogService: BlogService;
  router: Router;
  article: any;

  constructor(blogService: BlogService, router: Router) { 
    this.blogService = blogService;
    this.router = router;
  }

  ngOnInit() {
    this.blogService.getPosts().subscribe((response)=> {
      console.log(response)
      this.posts = response;
      });
  }
  
  openArticlePage() {
    this.router.navigate(['/article', this.posts]);
  }


}