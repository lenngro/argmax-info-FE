import { Action } from '@ngrx/store';
     
export enum BlogActionTypes {
  RequestPostsMetadata = '[Effect] Request Posts Metadata',
  LoadedPostsMetadata = '[View] Loaded Posts Metadta'
}
 
export class RequestPostsMetadata implements Action {
  readonly type = BlogActionTypes.RequestPostsMetadata;
}

export class LoadedPostsMetadata implements Action {
    readonly type = BlogActionTypes.LoadedPostsMetadata;
    constructor(public payload: { postsMetadata: Array<any> }) {}
}

export type BlogActions =
    RequestPostsMetadata
    | LoadedPostsMetadata;