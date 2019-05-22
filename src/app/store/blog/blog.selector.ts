import { MemoizedSelector, createFeatureSelector, createSelector } from '@ngrx/store';
import { BlogState } from './blog.reducer';


export const blog = createFeatureSelector<BlogState>(
    'blog'
);


export const PostsMetadata = createSelector(
    blog,
    blog => blog.postsMetadata 
);

export const SelectLogIn = createSelector(
    blog,
    blog => blog.loggedIn
);

export const SelectPageIndex = createSelector(
    blog,
    blog => blog.pageIndex
);

export const SelectVisiblePostsMetadata = createSelector(
    blog,
    blog => blog.visiblePostsMetadata
)