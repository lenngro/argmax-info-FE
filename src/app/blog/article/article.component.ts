import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  private post: Post;
  @ViewChild('postBody') postBody;

  constructor(private route: ActivatedRoute) {

    let postContent = this.route.snapshot.data.data;
    this.post = {
      title: postContent.title,
      description: postContent.description,
      content: postContent.content,
      url: postContent.url
    }
  }

  ngOnInit() {
    this.postBody.nativeElement.innerHTML = this.post.content;

  }

}
