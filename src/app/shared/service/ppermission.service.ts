import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';




@Injectable()
export class PPermissionService {
  constructor(private http: HttpClient) {
  }
  get(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // tslint:disable-next-line:max-line-length
        Authorization: `Bearer ${localStorage.getItem('token')}`
      })
    };

    // tslint:disable-next-line:max-line-length
    return this.http.get<any>(`http://115.79.35.119:9886/api/hbc/bidopportunity/1952/bidusergroupmembersofstakeholders`, httpOptions)
      .pipe(
        // catchError(this.handleError('addHero', hero))
      );

  }
  getSearch(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // tslint:disable-next-line:max-line-length
        Authorization: `Bearer ${localStorage.getItem('token')}`
      })
    };

    // tslint:disable-next-line:max-line-length
    return this.http.get<any>(`http://115.79.35.119:9886/api/hbc/customer/search/0/1000?searchTerm`, httpOptions)
      .pipe(
        // catchError(this.handleError('addHero', hero))
      );

  }
  updateStakeHolders(data): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // tslint:disable-next-line:max-line-length
        Authorization: `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.post<any>(`http://115.79.35.119:9886/api/hbc/bidopportunity/1952/changebidstakeholdersgroupmembers`,data,httpOptions)
    .map((res: Response) => res.json());

}

  
}




