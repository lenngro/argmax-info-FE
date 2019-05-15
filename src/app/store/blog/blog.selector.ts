import { MemoizedSelector, createFeatureSelector, createSelector } from '@ngrx/store';
import { BlogState } from './blog.reducer';


export const blog = createFeatureSelector<BlogState>(
    'blog'
);


export const PostsMetadata = createSelector(
    blog,
    blog => blog.postsMetadata 
);
