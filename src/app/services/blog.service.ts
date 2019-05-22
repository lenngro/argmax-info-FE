import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginData } from '../models/loginData.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  postUrl: string;
  userUrl: string;
  utilsUrl: string;

constructor(private http: HttpClient) { 
  this.postUrl = environment.backend + environment.postsUrl;
  this.userUrl = environment.backend + environment.usersUrl;
  this.utilsUrl = environment.backend + environment.utilsUrl;
}

getPost(singlePostUrl: string): Observable<any> {
  let url = this.postUrl + singlePostUrl;
  return this.http.get<any>(url);
}

getPosts(): Observable<any> {
  return this.http.get<any>(this.postUrl);
}

getPostsMetadata(): Observable<any> {
  return this.http.get<any>(this.utilsUrl + 'list/');
}

login(loginData: LoginData){
  let url = this.userUrl + loginData.username;
  return this.http.post<any>(url, {...loginData});
}

submitPost(article: any, blogChange: boolean) {
  if (blogChange) {
    return this.http.post<any>(this.postUrl, )
  }
  return this.http.post<any>(this.postUrl, {content: article})
}

}
