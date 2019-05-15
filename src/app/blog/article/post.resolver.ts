import { Injectable } from '@angular/core';

import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { Post } from 'src/app/models/post.model';
import { BlogService } from 'src/app/services/blog.service';

@Injectable()
export class PostResolver implements Resolve<Observable<Post>> { 
  constructor(private blogService: BlogService) {} 


  resolve(route: ActivatedRouteSnapshot): Observable<Post> { 
    let postMetadata = route.data['postMetadata']; 
    return this.blogService.getPost(postMetadata.url);
  } 
}