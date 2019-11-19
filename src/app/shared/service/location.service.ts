import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocationPackage } from '../model/locationpackage.model';


@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) {}

   getData(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

      })
    };

    // tslint:disable-next-line:max-line-length
    return this.http.get<any>(` http://localhost:3000/location`, httpOptions)
      .pipe(
        // catchError(this.handleError('addHero', hero))
      );

  };
  getDetailData(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

      })
    };

    // tslint:disable-next-line:max-line-length
    return this.http.get<any>(` http://localhost:3000/location/${id}`, httpOptions)
      .pipe(
        // catchError(this.handleError('addHero', hero))
      );

  };
  addData (location): Observable<LocationPackage> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

      })
    };
    const apiUrl='http://localhost:3000/location';
    return this.http.post<LocationPackage>(apiUrl, location, httpOptions).pipe(

    );
  }

  // updateProduct (id, product): Observable<any> {
  //   const url = `${apiUrl}/${id}`;
  //   return this.http.put(url, product, httpOptions).pipe(
  //     tap(_ => console.log(`updated product id=${id}`)),
  //     catchError(this.handleError<any>('updateProduct'))
  //   );
  // }

  deleteData (id): Observable<LocationPackage> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

      })
    };
    const apiUrl='http://localhost:3000/location';
    const url = `${apiUrl}/${id}`;

    return this.http.delete<LocationPackage>(url, httpOptions).pipe(
    
    );
  }

}
