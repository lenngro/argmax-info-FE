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

constructor(private http: HttpClient) { 
  this.postUrl = environment.backend + environment.postsUrl;
  this.userUrl = environment.backend + environment.usersUrl;
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
