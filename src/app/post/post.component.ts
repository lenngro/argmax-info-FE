import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Post } from '../models/post.model';
import { container } from '../utils/editorConfig';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  
  private blogService: BlogService;
  private editor_modules: any;
  private postTemplate: Post;

  constructor(blogService: BlogService) {

    this.blogService = blogService;
    this.editor_modules = {
      toolbar: { container: container },
      imageResize: true
    };

    this.postTemplate = {
      title: "",
      description: "",
      content: "",
      url: ""
    }
  }

  ngOnInit() {
  }

  submitArticle() {
    this.blogService.submitPost(this.postTemplate).subscribe(response => {
      console.log(response)
    });
  }

}
