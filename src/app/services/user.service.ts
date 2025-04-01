import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User,Login } from '../interfaces/userDTO';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private apiUrl: string = 'http://localhost:3000/api/users';
  private http = inject(HttpClient);

  constructor() { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  create(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  login(user: Login): Observable<Login>{
    return this.http.post<Login>(this.apiUrl + '/login', user);
  }

}
