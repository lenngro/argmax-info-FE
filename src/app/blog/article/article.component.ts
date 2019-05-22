import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import { Post } from 'src/app/models/post.model';
import { Store, select } from '@ngrx/store';
import { BlogState } from 'src/app/store/blog/blog.reducer';
import { SelectLogIn } from 'src/app/store/blog/blog.selector';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  isLoggedIn: boolean;
  post: Post;
  @ViewChild('postBody') postBody;

  constructor(private router: Router, private route: ActivatedRoute, private store: Store<BlogState>) {

    this.store.pipe(select(SelectLogIn)).subscribe(isloggedIn => {
      this.isLoggedIn = isloggedIn;
    });
  }

  ngOnInit() {
    let postContent = this.route.snapshot.data.data;
    this.post = {
      title: postContent.title,
      description: postContent.description,
      content: postContent.content,
      url: postContent.url
    }
    this.postBody.nativeElement.innerHTML = this.post.content;

  }

  navigateToPublish() {
    this.router.navigate(['publish'], {queryParams: {
      title: this.post.title,
      description: this.post.description,
      url: this.post.url,
      content: this.post.content
    }});
  }

}
