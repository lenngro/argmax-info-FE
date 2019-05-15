import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Router } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { PostComponent } from '../post/post.component';
import { PostResolver } from './article/post.resolver';
import { Store, select } from '@ngrx/store';
import { PostsMetadata } from '../store/blog/blog.selector';
import { BlogState } from '../store/blog/blog.reducer';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  postsMetadata: Array<any>;
  url: string;
  article: any;

  constructor(private blogService: BlogService, private router: Router, private store: Store<BlogState>) {

    this.store.pipe(select(PostsMetadata)).subscribe(postsMetadata => {
      this.postsMetadata = postsMetadata;
    });
  }

  ngOnInit() {


  }
  
  navigateToPost(postMetadata) {

    this.router.navigateByUrl('blog/' + postMetadata.url);

  }


}