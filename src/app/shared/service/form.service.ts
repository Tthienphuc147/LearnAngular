import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';

import { Data } from './../model/data.model';

@Injectable()
export class FormService {
  constructor ( private http: HttpClient ) { }

  Data = new Data();
  submit( estimatedBudgetOfPakage ): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        // tslint:disable-next-line:max-line-length
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiUXV5ZW5EYW5nIiwidXNlcl9pZCI6IjE2NCIsInVzZXJfbmFtZSI6IlF1eWVuRGFuZyIsImVtcGxveWVlX2lkIjoiMjM5IiwicGVybWlzc2lvbiI6WyJWaWV3QmlkT3Bwb3J0dW5pdHlzIiwiVmlld0JpZE9wcG9ydHVuaXR5RGV0YWlsIiwiRWRpdEJpZE9wcG9ydHVuaXR5IiwiQ3JlYXRlQmlkT3Bwb3J0dW5pdHkiLCJEZWxldGVCaWRPcHBvcnR1bml0eSIsIk1hbmFnZXJVc2VycyIsIk1hbmFnZVVzZXJHcm91cHMiLCJNYW5hZ2VUcmFja2luZ1JlcG9ydHMiLCJNYW5hZ2VJbmZvcm1hdGlvblNldHRpbmdzIiwiTWFuYWdlS1BJU2V0dGluZ3MiLCJWaWV3U3VtQmlkT3Bwb3J0dW5pdHlBbW91bnQiXSwic3ViIjoiUXV5ZW5EYW5nIiwianRpIjoiMjdhMTEwZGQtMjdkZi00MjZhLTllZTktOTk5ZjUzNDIzNWQzIiwiaWF0IjoxNTcxOTAwODE0LCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zeXN0ZW0iOiJXZWIiLCJuYmYiOjE1NzE5MDA4MTQsImV4cCI6MTU3MjE2MDAxNCwiaXNzIjoid2ViQXBpIiwiYXVkIjoiaHR0cDovLzExNS43OS4zNS4xMTk6OTg4Ni8ifQ.rGg4Rtx9o7ZC7NPf2Y_l7d3XckchfAJ77IgU9SsYdrE'
      })
    };
    // tslint:disable-next-line:max-line-length
    estimatedBudgetOfPakage = {"id":1628,"bidOpportunityId":1942,"bidOpportunityStage":"HSDT","bidOpportunityStageStatus":"CanLapDeNghiDuThau","createdDate":1571822687,"createdEmployee":{"employeeId":239,"employeeNo":"","employeeName":"Đặng Quyền","employeeAvatar":{"guid":"a7d41275-ec96-48bb-98d8-9b8d0b1f5b16","thumbSizeUrl":"http://115.79.35.119:9886/hbc/storage/files/images/thumb/a7d41275-ec96-48bb-98d8-9b8d0b1f5b16.png","largeSizeUrl":"http://115.79.35.119:9886/hbc/storage/files/images/large/a7d41275-ec96-48bb-98d8-9b8d0b1f5b16.png"},"employeeEmail":"quyendang13dt1@gmail.com"},"updatedEmployee":null,"documentName":"","isDraftVersion":false,"employerAnalysis":{"reputation":"","financeCapacity":"","projectRealizable":""},"consultantAnalysis":{"reputation":null,"pastWorkingExperience":null},"internalResourcesEvaluation":{"currentSituation":null,"humanResorcesAndEquipments":null,"financeCapacity":null,"competitor":null},"estimatedBudgetOfPakage":{"draftBudgetOfPackage":120000,"draftBudgetOfPackageCurrency":{"key":"VNĐ","value":"VNĐ","displayText":"VNĐ","code":null},"additionalNote":"IV. 2 Ghi chú thêm (Additional notes)","draftBudgetOfPackageDesc":null},"feeOfTenderInvitationDocument":{"feeOfTenderInvitationDocument":0,"feeOfTenderInvitationDocumentCurrency":{"key":"VNĐ","value":"VNĐ","displayText":"VNĐ","code":null},"tenderDocumentDeposit":0,"tenderDocumentDepositCurrency":{"key":"VNĐ","value":"VNĐ","displayText":"VNĐ","code":null},"feeOfTenderInvitationDocumentDesc":null,"tenderDocumentDepositDesc":null},"contractCondition":{"typeOfContract":"Thầu Chính","timeForCompletion":10,"timeForCompletionUnit":{"key":"Ngày","value":"Ngày","displayText":"Ngày","code":null},"commencementDate":1570233600,"warrantyPeriod":4,"warrantyPeriodUnit":{"key":"Tháng","value":"Tháng","displayText":"Tháng","code":null},"tenderSecurity":5,"tenderSecurityCurrency":{"key":"VNĐ","value":"VNĐ","displayText":"VNĐ","code":null},"performanceSecurity":6,"delayDamagesForTheWorks":7,"insurance":"8","advancePayment":9,"monthlyPaymentOrMilestone":{"key":null,"value":null,"displayText":null,"code":null},"retentionMoney":0,"specialCondition":"10","timeForCompletionDesc":null,"commencementDateDesc":null,"warrantyPeriodDesc":null,"tenderSecurityDesc":null,"performanceSecurityDesc":null,"delayDamagesForTheWorksDesc":null,"advancePaymentDesc":null,"retentionMoneyDesc":null},"tenderDirectorProposal":{"isAgreed":true,"reason":"","date":1571822642,"expectedDate":1571822642,"isSigned":false},"decisionOfBoardOfGeneralDirector":{"isAgreed":true,"reason":"","expectedDate":1571822642,"isSigned":false},"projectImage":{"projectImages":[]},"isAgreedParticipating":true,"tenderDirectorProposalEmployee":null,"isSendTPDTApproval":false,"tpdtApproval":[],"gdApproval":[],"updatedDesc":"","createdEmployeeId":239};
    // tslint:disable-next-line:max-line-length
    return this.http.post<any>(`http://115.79.35.119:9886/api/hbc/proposedtenderparticipatinngreport/createorupdate`, estimatedBudgetOfPakage, httpOptions)
    .pipe(
      // catchError(this.handleError('addHero', hero))
    );
  }


}
