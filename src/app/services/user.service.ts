import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { Options } from 'selenium-webdriver/chrome';
import { environment } from '../../environments/environment';
import { User } from 'src/app/entities/user';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(environment.apiUrl+"/api/user/GetAllUsers");
  }

  getUser(userId: Number): Observable<User> {
    return this.http.get<User>(environment.apiUrl+"/api/user/GetUser?id=" + userId);
  }

  updateUser(user:User): Observable<boolean> {
    return this.http.post<boolean>(environment.apiUrl+"/api/user/UpdateUser",user);
  }

  addUser(user:User): Observable<boolean> {
    return this.http.post<boolean>(environment.apiUrl+"/api/user/AddUser",user);
  }
}

