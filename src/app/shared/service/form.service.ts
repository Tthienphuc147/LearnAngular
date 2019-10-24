import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';

import { Data } from './../model/data.model';

@Injectable()
export class FormService {
  constructor(private http: HttpClient) { }

  Data = new Data();
  submit(estimatedBudgetOfPakage): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this.http.post<any>(`http://115.79.35.119:9886/api/hbc/proposedtenderparticipatinngreport/createorupdate`, { estimatedBudgetOfPakage });
  }


}
