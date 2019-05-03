import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BlogService } from '../services/blog.service';
import * as QuillNamespace from 'quill';
let Quill: any = QuillNamespace;
import ImageResize from 'quill-image-resize-module';
import { debug } from 'util';
Quill.register('modules/imageResize', ImageResize);
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  
  private content: any;
  private title: any;
  private description: any;
  private blogService: BlogService;
  editor_modules: any;

  constructor(blogService: BlogService) {

    this.blogService = blogService;
    this.editor_modules = {
      toolbar: {
        container: [
          [{ 'font': [] }],
          [{ 'size': ['small', false, 'large', 'huge'] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ 'header': 1 }, { 'header': 2 }],
          [{ 'color': [] }, { 'background': [] }],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }],
          [{ 'align': [] }],
          ['link', 'image']
        ]
      },
      imageResize: true
    };
  }

  ngOnInit() {
  }

  createPost() {
    let post: Post = {
      title: String(this.title),
      description: String(this.description),
      content: String(this.content)
    }
    return post;
  }

  submitArticle() {

    this.blogService.submitPost(this.createPost()).subscribe(response => {
      console.log(response)
    });
  }

}
