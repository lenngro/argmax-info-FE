import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Post } from '../models/post.model';
import { container } from '../utils/editorConfig';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { query } from '@angular/core/src/render3';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  private routeQueryParamsSub: Subscription;
  editor_modules: any;
  postTemplate: Post;
  blogChange: boolean;

  constructor(private blogService: BlogService, private route: ActivatedRoute) {

    this.blogChange = false;

    // set editor option
    this.editor_modules = {
      toolbar: { container: container },
      imageResize: true
    };

    // clear post template
    this.postTemplate = {
      title: "",
      description: "",
      content: "",
      url: ""
    }
  }

  ngOnInit() {


    this.routeQueryParamsSub = this.route.queryParams.subscribe(params => {
      if (params) {
        this.getPostParams(params);
        this.blogChange = true;
      }
    });
  }

  getPostParams(params) {
    this.postTemplate = {
      title: params['title'],
      description: params['description'],
      url: params['url'],
      content: params['content']
    }
  }

  submitArticle() {
    this.blogService.submitPost(this.postTemplate, this.blogChange).subscribe(response => {
      console.log(response)
    });
  }

}
