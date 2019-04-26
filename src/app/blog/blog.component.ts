import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: Array<any>;
  url: string;
  blogService: BlogService;

  constructor(blogService: BlogService) { 
    this.blogService = blogService;
  }

  ngOnInit() {
    this.blogService.getPosts().subscribe((response)=> {
      console.log(response)
    })
  }


}