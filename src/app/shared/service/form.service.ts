import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';

import { Data } from './../model/data.model';

@Injectable()
export class FormService {
  constructor(private http: HttpClient) { }

  Data = new Data();
  submit(estimatedBudgetOfPakage): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this.http.post<any>(`http://115.79.35.119:9886/api/hbc/proposedtenderparticipatinngreport/createorupdate`, { estimatedBudgetOfPakage },
      {
        // tslint:disable-next-line:max-line-length
        headers: new HttpHeaders().set(
          // tslint:disable-next-line:max-line-length
          'Authorization',
          // tslint:disable-next-line:max-line-length
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiUXV5ZW5EYW5nIiwidXNlcl9pZCI6IjE2NCIsInVzZXJfbmFtZSI6IlF1eWVuRGFuZyIsImVtcGxveWVlX2lkIjoiMjM5IiwicGVybWlzc2lvbiI6WyJWaWV3QmlkT3Bwb3J0dW5pdHlzIiwiVmlld0JpZE9wcG9ydHVuaXR5RGV0YWlsIiwiRWRpdEJpZE9wcG9ydHVuaXR5IiwiQ3JlYXRlQmlkT3Bwb3J0dW5pdHkiLCJEZWxldGVCaWRPcHBvcnR1bml0eSIsIk1hbmFnZXJVc2VycyIsIk1hbmFnZVVzZXJHcm91cHMiLCJNYW5hZ2VUcmFja2luZ1JlcG9ydHMiLCJNYW5hZ2VJbmZvcm1hdGlvblNldHRpbmdzIiwiTWFuYWdlS1BJU2V0dGluZ3MiLCJWaWV3U3VtQmlkT3Bwb3J0dW5pdHlBbW91bnQiXSwic3ViIjoiUXV5ZW5EYW5nIiwianRpIjoiYTFmZmZjMDEtMzJkOC00MWM5LTllZmQtNTI3ZmU3ZThmMzdmIiwiaWF0IjoxNTcxODkyNjU2LCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zeXN0ZW0iOiJXZWIiLCJuYmYiOjE1NzE4OTI2NTYsImV4cCI6MTU3MjE1MTg1NiwiaXNzIjoid2ViQXBpIiwiYXVkIjoiaHR0cDovLzExNS43OS4zNS4xMTk6OTg4Ni8ifQ.tanDDfeTbNHOG3vLj-TPpTEsqOmxkODkF4sYndNKCBQ'),
      });
  }


}
