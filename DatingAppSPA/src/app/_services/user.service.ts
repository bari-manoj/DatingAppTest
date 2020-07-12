import { User } from './../_models/user';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'users');
  }

  getUser(id): Observable<User> {
    return this.http.get<User>(this.baseUrl + 'users/' + id);
  }

  updateUser(id: number, user: User): Observable<any> {
    return this.http.put<User>(this.baseUrl + 'users/' + id, user);
  }

  setMainPhoto(userId: number, photoId: number): Observable<any> {
    return this.http.post(this.baseUrl + 'users/' + userId + '/photos/' + photoId + '/setMain', {});
  }

  deletePhoto(userId: number, id: number): Observable<any> {
    return this.http.delete(this.baseUrl + 'users/' + userId + '/photos/' + id);
  }

}
