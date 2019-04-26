import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginData } from '../models/loginData.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  postUrl: string;
  userUrl: string;

constructor(private http: HttpClient) { 
  this.postUrl = "http://localhost:3000/posts";
  this.userUrl = "http://localhost:3000/users/";
}

getPosts(): Observable<any> {
  return this.http.get<any>(this.postUrl);
}

login(loginData: LoginData){
  let url = this.userUrl + loginData.username;
  return this.http.post<any>(url, {...loginData});
}

submitPost(article: any) {
  return this.http.post<any>(this.postUrl, {content: article})
}

}
