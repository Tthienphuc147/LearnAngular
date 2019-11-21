import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DocumentPackage } from '../model/documentpackage.model';


@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http: HttpClient) {}

   getData(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

      })
    };

    // tslint:disable-next-line:max-line-length
    return this.http.get<any>(` http://localhost:3000/document`, httpOptions)
      .pipe(
        // catchError(this.handleError('addHero', hero))
      );

  };

  addData (location): Observable<DocumentPackage> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

      })
    };
    const apiUrl='http://localhost:3000/document';
    return this.http.post<DocumentPackage>(apiUrl, location, httpOptions).pipe(

    );
  }

  updateData (id, location): Observable<DocumentPackage> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

      })
    };
    const apiUrl='http://localhost:3000/document';
    const url = `${apiUrl}/${id}`;
    return this.http.put<DocumentPackage>(url, location, httpOptions).pipe(

    );
  }
  getDetailData(id: number): Observable<DocumentPackage> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

      })
    };

    // tslint:disable-next-line:max-line-length
    return this.http.get<DocumentPackage>(` http://localhost:3000/document/${id}`, httpOptions)
      .pipe(

        // catchError(this.handleError('addHero', hero))
      );

  };
  deleteData (id): Observable<DocumentPackage> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

      })
    };
    const apiUrl='http://localhost:3000/document';
    const url = `${apiUrl}/${id}`;

    return this.http.delete<DocumentPackage>(url, httpOptions).pipe(

    );
  }

}
