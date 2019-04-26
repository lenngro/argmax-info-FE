import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { QuillEditorComponent } from 'ngx-quill';
import { BlogService } from '../services/blog.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  

  public editor;
  article: any;
  blogService: BlogService;
  

  constructor(blogService: BlogService) {
    this.blogService = blogService;
  }

  ngOnInit() {
  }

  updateArticle(e: any) {
   this.article = e.html;
  }

  submitArticle() {
    this.blogService.submitPost(this.article).subscribe(response => {
      console.log(response)
    });
  }

}
