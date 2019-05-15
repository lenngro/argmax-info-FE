import { Action } from '@ngrx/store';
import { BlogActionTypes, BlogActions } from './blog.actions';

export interface BlogState {
    postsMetadata: Array<any>
}
 
export const initialBlogState = {
    postsMetadata: new Array<any>()
}
 
export function blogReducer(state = initialBlogState , action: BlogActions) {
  switch (action.type) {
    case BlogActionTypes.RequestPostsMetadata:
      return state;

    case BlogActionTypes.LoadedPostsMetadata:
        return {
            ...state,
            postsMetadata: action.payload.postsMetadata
        }
 
    default:
      return state;
  }
}