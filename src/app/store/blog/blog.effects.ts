import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { RequestPostsMetadata, BlogActionTypes, LoadedPostsMetadata } from './blog.actions';
import { BlogService } from 'src/app/services/blog.service';
 
@Injectable()
export class BlogEffects {
 
  @Effect()
  requestPostsMetadata$ = this.actions$.pipe(
    ofType<RequestPostsMetadata>(BlogActionTypes.RequestPostsMetadata),
    mergeMap(action => 
        this.blogService.getPostsMetadata().pipe(
            catchError(err => {
                console.log('Error', err);
                return of(undefined);
            })
        )  
    ),
    map(postsMetadata => {
        if (postsMetadata) {
            return new LoadedPostsMetadata({ postsMetadata: postsMetadata });
        }
        else {
            debugger;
        }
    }
  ));
 
  constructor(
    private actions$: Actions,
    private blogService: BlogService
  ) {}
}