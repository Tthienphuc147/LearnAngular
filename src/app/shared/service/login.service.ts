import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';

import { User } from './../model/user.model';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) { }

  user = new User();
  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`http://115.79.35.119:9886/api/hbc/loginweb`, { username, password });
  }


}
