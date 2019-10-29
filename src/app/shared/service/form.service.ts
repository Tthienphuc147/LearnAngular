import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';

import { Data } from './../model/data.model';
import { PackageService } from './package.service';
import { FormloginComponent } from 'src/app/formlogin/formlogin.component';


@Injectable()
export class FormService {
  constructor(private http: HttpClient,
    private fs: PackageService,

   ) { }


  Data = new Data();
  submit(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // tslint:disable-next-line:max-line-length
        Authorization:`Bearer ${localStorage.getItem('token')}`
      })
    };
    // tslint:disable-next-line:max-line-length
    const body = {
      id: 1628, bidOpportunityId: 1942, bidOpportunityStage: 'HSDT', bidOpportunityStageStatus: 'CanLapDeNghiDuThau',
      createdDate: 1571822687, createdEmployee: {
        employeeId: 239, employeeNo: '', employeeName: 'Đặng Quyền',
        employeeAvatar: {
          // tslint:disable-next-line:max-line-length
          guid: 'a7d41275-ec96-48bb-98d8-9b8d0b1f5b16',
          thumbSizeUrl: 'http://115.79.35.119:9886/hbc/storage/files/images/thumb/a7d41275-ec96-48bb-98d8-9b8d0b1f5b16.png',
          largeSizeUrl: 'http://115.79.35.119:9886/hbc/storage/files/images/large/a7d41275-ec96-48bb-98d8-9b8d0b1f5b16.png'
        },
        employeeEmail: 'quyendang13dt1@gmail.com'
      },
      updatedEmployee: null, documentName: '', isDraftVersion: false,
      employerAnalysis: { reputation: '', financeCapacity: '', projectRealizable: '' },
      consultantAnalysis: { reputation: null, pastWorkingExperience: null },
      internalResourcesEvaluation: { currentSituation: null, humanResorcesAndEquipments: null, financeCapacity: null, competitor: null },
      estimatedBudgetOfPakage: {
        // tslint:disable-next-line:max-line-length
        draftBudgetOfPackage: this.fs.Data.estimatedBuget.draftBudgetOfPackage, draftBudgetOfPackageCurrency: { key: 'VNĐ', value: 'VNĐ', displayText: 'VNĐ', code: null },
        // tslint:disable-next-line:max-line-length
        additionalNote: this.fs.Data.estimatedBuget.additionalNote, draftBudgetOfPackageDesc: this.fs.Data.estimatedBuget.draftBudgetOfPackageDesc,
        draftBudgetOfPackageCheckbox: this.fs.Data.estimatedBuget.draftBudgetOfPackageCheckbox
      },
      feeOfTenderInvitationDocument: {
        // tslint:disable-next-line:max-line-length
        feeOfTenderInvitationDocument: 0, feeOfTenderInvitationDocumentCurrency: { key: 'VNĐ', value: 'VNĐ', displayText: 'VNĐ', code: null },
        tenderDocumentDeposit: 0, tenderDocumentDepositCurrency: { key: 'VNĐ', value: 'VNĐ', displayText: 'VNĐ', code: null },
        feeOfTenderInvitationDocumentDesc: null, tenderDocumentDepositDesc: null
      },
      contractCondition: {
        typeOfContract: 'Thầu Chính', timeForCompletion: this.fs.Data.contractCondition.timeForCompletion,
        timeForCompletionUnit: { key: 'Ngày', value: 'Ngày', displayText: 'Ngày', code: null },
        // tslint:disable-next-line:max-line-length
        commencementDate: this.fs.Data.contractCondition.commencementDate, warrantyPeriod: this.fs.Data.contractCondition.warrantyPeriod, warrantyPeriodUnit: { key: 'Tháng', value: 'Tháng', displayText: 'Tháng', code: null },
        // tslint:disable-next-line:max-line-length
        tenderSecurity: this.fs.Data.contractCondition.tenderSecurity, tenderSecurityCurrency: { key: 'VNĐ', value: 'VNĐ', displayText: 'VNĐ', code: null },
        // tslint:disable-next-line:max-line-length
        performanceSecurity: this.fs.Data.contractCondition.performanceSecurity, delayDamagesForTheWorks: this.fs.Data.contractCondition.delayDamagesForTheWorks, insurance: this.fs.Data.contractCondition.insurance, advancePayment: this.fs.Data.contractCondition.advancePayment, monthlyPaymentOrMilestone: { key: null, value: null, displayText: null, code: null },
        // tslint:disable-next-line:max-line-length
        retentionMoney: this.fs.Data.contractCondition.retentionMoney, specialCondition: this.fs.Data.contractCondition.specialCondition, timeForCompletionDesc: this.fs.Data.contractCondition.timeForCompletionDesc, commencementDateDesc: this.fs.Data.contractCondition.commencementDateDesc, warrantyPeriodDesc: this.fs.Data.contractCondition.warrantyPeriodDesc, tenderSecurityDesc: this.fs.Data.contractCondition.tenderSecurityDesc,
        // tslint:disable-next-line:max-line-length
        performanceSecurityDesc: this.fs.Data.contractCondition.performanceSecurityDesc, delayDamagesForTheWorksDesc: this.fs.Data.contractCondition.delayDamagesForTheWorksDesc, advancePaymentDesc: this.fs.Data.contractCondition.advancePaymentDesc, retentionMoneyDesc: this.fs.Data.contractCondition.retentionMoneyDesc
        // tslint:disable-next-line:max-line-length
      }, tenderDirectorProposal: { isAgreed: true, reason: this.fs.Data.directorProposal.reason, date: this.fs.Data.directorProposal.dateS, expectedDate: this.fs.Data.directorProposal.expectedDate, isSigned: this.fs.Data.directorProposal.isSigned }, decisionOfBoardOfGeneralDirector: { isAgreed: true, reason: '', expectedDate: 1571822642, isSigned: false },
      // tslint:disable-next-line:max-line-length
      projectImage: { projectImages: [] }, isAgreedParticipating: true, tenderDirectorProposalEmployee: null, isSendTPDTApproval: false, tpdtApproval: [], gdApproval: [], updatedDesc: '', createdEmployeeId: 239
    };
    // tslint:disable-next-line:max-line-length
    return this.http.post<any>(`http://115.79.35.119:9886/api/hbc/proposedtenderparticipatinngreport/createorupdate`, body, httpOptions)
      .pipe(
        // catchError(this.handleError('addHero', hero))
      );



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
    return this.http.get<any>(`http://115.79.35.119:9886/api/hbc/1942/bidopportunity/proposedtenderparticipatinngreport`, httpOptions)
      .pipe(
        // catchError(this.handleError('addHero', hero))
      );

  }


}
