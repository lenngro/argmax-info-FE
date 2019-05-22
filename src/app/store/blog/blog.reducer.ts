import { Action } from '@ngrx/store';
import { BlogActionTypes, BlogActions } from './blog.actions';
import { PostsMetadata } from './blog.selector';

export interface BlogState {
    postsMetadata: Array<any>,
    visiblePostsMetadata: Array<any>,
    loggedIn: boolean,
    pageIndex: number
}
 
export const initialBlogState = {
    postsMetadata: new Array<any>(),
    visiblePostsMetadata: new Array<any>(),
    loggedIn: false,
    pageIndex: 0
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
    case BlogActionTypes.LogIn:
        return {
          ...state,
          loggedIn: true
        }
    case BlogActionTypes.LogOut:
      return {
        ...state,
        loggedIn: false        
      }
    case BlogActionTypes.UpdateVisiblePostsMetadata:
    return {
        ...state,
        visiblePostsMetadata: state.postsMetadata.slice(action.payload.pageIndex*5, (action.payload.pageIndex+1)*5),
        pageIndex: action.payload.pageIndex
      }
    default:
      return state;
  }
}