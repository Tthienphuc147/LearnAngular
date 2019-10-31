import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import * as moment from 'moment';

@Injectable()
export class UploadService {
  constructor(private http: HttpClient) { }
  upload(
    id: number,
    documentName: string,
    documentTypeId: string,
    description: string,
    receivedDate: number,
    file: File,
    link: string,
    version: string
) {
    const formData = new FormData();
    formData.append('BidOpportunityId',`${id}`);
    formData.append('DocumentTypeId', documentTypeId);
    formData.append('DocumentName', documentName);
    formData.append('DocumentDesc', description);
    formData.append('ReceivedDate', `${moment(receivedDate).unix()}`);
    formData.append('DocumentFile', file);
    formData.append('Url', link);
    formData.append('Version', version);
    return this.postFile(formData)
        .map(response => response)
}
postFile(formData: FormData): Observable<any> {

  return this.http
      .post(`http://115.79.35.119:9886/api/hbc/biddocument/upload`,formData, {
        headers: new HttpHeaders({
          // 'Content-Type': 'multipart/form-data',
          // tslint:disable-next-line:max-line-length
          Authorization:`Bearer ${localStorage.getItem('token')}`
        })
      })
      .map((res: Response) => res.json());
}


}
