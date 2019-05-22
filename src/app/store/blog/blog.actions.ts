import { Action } from '@ngrx/store';
     
export enum BlogActionTypes {
  RequestPostsMetadata = '[Effect] Request Posts Metadata',
  LoadedPostsMetadata = '[View] Loaded Posts Metadta',
  LogIn = '[View] Log In',
  LogOut = '[View] Log Out',
  UpdatePageIndex = '[View] Update Page Index',
  UpdateVisiblePostsMetadata = '[View] Get Posts Metadata'
}
 
export class RequestPostsMetadata implements Action {
  readonly type = BlogActionTypes.RequestPostsMetadata;
}

export class LoadedPostsMetadata implements Action {
    readonly type = BlogActionTypes.LoadedPostsMetadata;
    constructor(public payload: { postsMetadata: Array<any> }) {}
}

export class LogIn implements Action {
  readonly type = BlogActionTypes.LogIn;
}

export class LogOut implements Action {
  readonly type = BlogActionTypes.LogOut;
}

export class UpdatePageIndex implements Action {
  readonly type = BlogActionTypes.UpdatePageIndex;
  constructor(public payload: { pageIndex: number}) {}
}

export class UpdateVisiblePostsMetadata implements Action {
  readonly type = BlogActionTypes.UpdateVisiblePostsMetadata;
  constructor(public payload: { pageIndex: number}) {}
}

export type BlogActions =
    RequestPostsMetadata
    | LoadedPostsMetadata
    | LogIn
    | LogOut
    | UpdatePageIndex
    | UpdateVisiblePostsMetadata;