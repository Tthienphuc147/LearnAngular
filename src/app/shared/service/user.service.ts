import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserPackage } from '../model/userpackage.model';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

   getData(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

      })
    };

    // tslint:disable-next-line:max-line-length
    return this.http.get<any>(` http://localhost:3000/user`, httpOptions)
      .pipe(
        // catchError(this.handleError('addHero', hero))
      );

  };
  getDetailData(id: number): Observable<UserPackage> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

      })
    };

    // tslint:disable-next-line:max-line-length
    return this.http.get<UserPackage>(` http://localhost:3000/user/${id}`, httpOptions)
      .pipe(

        // catchError(this.handleError('addHero', hero))
      );

  };
  addData (user): Observable<UserPackage> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

      })
    };
    const apiUrl='http://localhost:3000/user';
    return this.http.post<UserPackage>(apiUrl, user, httpOptions).pipe(

    );
  }

  updateData (id, user): Observable<UserPackage> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

      })
    };
    const apiUrl='http://localhost:3000/user';
    const url = `${apiUrl}/${id}`;
    return this.http.put<UserPackage>(url, user, httpOptions).pipe(

    );
  }

  deleteData (id): Observable<UserPackage> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

      })
    };
    const apiUrl='http://localhost:3000/user';
    const url = `${apiUrl}/${id}`;

    return this.http.delete<UserPackage>(url, httpOptions).pipe(

    );
  }

}
