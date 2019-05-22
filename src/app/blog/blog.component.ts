import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { PostComponent } from '../post/post.component';
import { PostResolver } from './article/post.resolver';
import { Store, select } from '@ngrx/store';
import { PostsMetadata, SelectPageIndex, SelectVisiblePostsMetadata } from '../store/blog/blog.selector';
import { BlogState } from '../store/blog/blog.reducer';
import { Subscription } from 'rxjs';
import { UpdatePageIndex, UpdateVisiblePostsMetadata } from '../store/blog/blog.actions';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  private postsMetadata: Array<any>;
  private visiblePostsMetadata: Array<any>;
  private selectPostsMetadataSub: Subscription;
  private selectVisiblePostsMetadataSub: Subscription;
  private selectPageIndexSub: Subscription;
  private routeQueryParamsSub: Subscription;
  private pageIndexParam;
  private currentPageIndex;
  private pageLength;
  private pageIndex: number;
  private urlIndex: number;
  private canGoForth: boolean;
  private canGoBack: boolean;
  private postsMetadataFailed: boolean;

  constructor(private blogService: BlogService, private router: Router,

    private store: Store<BlogState>, private route: ActivatedRoute) {

      this.postsMetadataFailed = false;
      this.pageLength = 5;

  }

  ngOnInit() {

    this.selectPostsMetadataSub = this.store.pipe(select(PostsMetadata)).subscribe(postsMetadata => {
      this.postsMetadata = postsMetadata;
      if (this.postsMetadata) {
        this.getPageIndexFromUrl();
        this.updateButtons();
      }
      else {
        this.postsMetadataFailed = true;
      }
    });

    this.subscribePageIndex();
    this.subscribeVisiblePostsMetadata();
  }

  ngOnDestroy() {
    this.selectPostsMetadataSub.unsubscribe();
    this.routeQueryParamsSub.unsubscribe();
    this.selectVisiblePostsMetadataSub.unsubscribe();
  }

  getPageIndexFromUrl() {

    this.routeQueryParamsSub = this.route.queryParams.subscribe(params => {
      this.urlIndex = Number(params['page']);
      this.urlIndex = this.validPageIndex();
      this.store.dispatch(new UpdateVisiblePostsMetadata({ pageIndex: this.urlIndex }));
    });
  }

  validPageIndex() {
    if (!this.urlIndex || this.urlIndex < 0 || (this.urlIndex-1)*this.pageLength > this.postsMetadata.length) {
      //this.router.navigate(['blog/'], { queryParams: { page: 0} });
      return 0;
    }
    return this.urlIndex;
  }

  subscribePageIndex() {
    this.selectPageIndexSub = this.store.pipe(select(SelectPageIndex)).subscribe(index => {
      this.pageIndex = index;
      this.updateButtons();
    });
  }

  subscribeVisiblePostsMetadata() {
    this.selectVisiblePostsMetadataSub = this.store.pipe(select(SelectVisiblePostsMetadata)).subscribe(visiblePostsMetadata => {
      this.visiblePostsMetadata = visiblePostsMetadata.slice(0);
    });
  }

  goForth() {
    this.router.navigate(['blog/'], { queryParams: { page: this.pageIndex + 1 } });
    this.store.dispatch(new UpdateVisiblePostsMetadata({pageIndex: this.pageIndex + 1}));
    this.updateButtons();
  }

  goBack() {
    this.router.navigate(['blog/'], { queryParams: { page: this.pageIndex - 1}});
    this.store.dispatch(new UpdateVisiblePostsMetadata({pageIndex: this.pageIndex - 1}));
    this.updateButtons();
  }

  updateButtons() {
    if ((1 + this.pageIndex)*this.pageLength > this.postsMetadata.length) {
      this.canGoForth = false;
    }
    else {
      this.canGoForth = true;
    }
    if (this.pageIndex > 0) {
      this.canGoBack = true;
    }
    else {
      this.canGoBack = false;
    }
  }

  navigateToPost(postMetadata) {
    this.router.navigateByUrl('blog/' + postMetadata.url);
  }


}