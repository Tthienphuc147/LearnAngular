import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';

import { User } from './../model/user.model';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) { }

  user = new User();
  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`http://115.79.35.119:9886/api/hbc/loginweb`, { username, password });
  }
  getInfor(id: string){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // tslint:disable-next-line:max-line-length
        Authorization: `Bearer ${localStorage.getItem('token')}`
      })
    };

    // tslint:disable-next-line:max-line-length
    return this.http.get<any>(`http://115.79.35.119:9886/api/hbc/user/${id}`, httpOptions)
      .pipe(
        // catchError(this.handleError('addHero', hero))
      );
  }


}
