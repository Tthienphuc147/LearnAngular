import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Form, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { PackageService } from '../../shared/service/package.service'
import { FormService } from 'src/app/shared/service/form.service';
import DateTimeConvertHelper from 'src/app/shared/datetime-convert-helper';
@Component({
  selector: 'app-contract-condition',
  templateUrl: './contract-condition.component.html',
  styleUrls: ['./contract-condition.component.css']
})
export class ContractConditionComponent implements OnInit, OnDestroy {

  contractConditionForm: FormGroup;



  keyword = 'name';
  listTime = ['Ngày', 'Tháng', 'Năm'];
  listCurrency = ['VND', 'USA'];
  data = [
    {
      id: 1,
      name: 'Thầu chính'
    },
    {
      id: 2,
      name: 'Thầu phụ'
    },
    {
      id: 3,
      name: 'Thi công & thiết kế'
    }
  ];
  dataThanhToan = [
    {
      id: 1,
      name: 'Theo tháng (Monthly Payment)'
    },
    {
      id: 2,
      name: 'Theo giai đoạn (Milestone)'
    }
  ];

  constructor(
    private fb: FormBuilder,
    private fs: PackageService,
    private forms: FormService,
private datePipe : DatePipe
  ) { }
  ngOnInit() {
    this.createForm();
    this.getApi();
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
    this.fs.Data.contractCondition = this.contractConditionForm.value;

  }
  selectEvent(item) {
    // do something with selected item
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something when input is focused
  }
  get f() { return this.contractConditionForm.controls; }
  createForm() {

    this.contractConditionForm = this.fb.group({
      timeForCompletionCheckbox: new FormControl(this.fs.Data.contractCondition.timeForCompletionCheckbox),
      commencementDateCheckbox: new FormControl(this.fs.Data.contractCondition.commencementDateCheckbox),
      warrantyPeriodCheckbox: new FormControl(this.fs.Data.contractCondition.warrantyPeriodCheckbox),
      tenderSecurityCheckbox: new FormControl(this.fs.Data.contractCondition.tenderSecurityCheckbox),
      performanceSecurityCheckbox: new FormControl(this.fs.Data.contractCondition.performanceSecurityCheckbox),
      delayDamagesForTheWorksCheckbox: new FormControl(this.fs.Data.contractCondition.delayDamagesForTheWorksCheckbox),
      advancePaymentCheckbox: new FormControl(this.fs.Data.contractCondition.advancePaymentCheckbox),
      retentionMoneyCheckbox: new FormControl(this.fs.Data.contractCondition.retentionMoneyCheckbox),
      timeForCompletion: new FormControl(this.fs.Data.contractCondition.timeForCompletion),
      commencementDate: new FormControl(DateTimeConvertHelper.fromTimestampToDtObject(this.fs.Data.contractCondition.commencementDate)),
      warrantyPeriod: new FormControl(this.fs.Data.contractCondition.warrantyPeriod),
      tenderSecurity: new FormControl(this.fs.Data.contractCondition.tenderSecurity),
      delayDamagesForTheWorks: new FormControl(this.fs.Data.contractCondition.delayDamagesForTheWorks),
      advancePayment: new FormControl(this.fs.Data.contractCondition.advancePayment),
      retentionMoney: new FormControl(this.fs.Data.contractCondition.retentionMoney),
      performanceSecurity: new FormControl(this.fs.Data.contractCondition.performanceSecurity),
      timeForCompletionDesc: new FormControl(this.fs.Data.contractCondition.timeForCompletionDesc),
      commencementDateDesc: new FormControl(this.fs.Data.contractCondition.commencementDateDesc),
      warrantyPeriodDesc: new FormControl(this.fs.Data.contractCondition.warrantyPeriodDesc),
      tenderSecurityDesc: new FormControl(this.fs.Data.contractCondition.tenderSecurityDesc),
      performanceSecurityDesc: new FormControl(this.fs.Data.contractCondition.performanceSecurityDesc),
      delayDamagesForTheWorksDesc: new FormControl(this.fs.Data.contractCondition.delayDamagesForTheWorksDesc),
      insurance: new FormControl(this.fs.Data.contractCondition.insurance),
      advancePaymentDesc: new FormControl(this.fs.Data.contractCondition.advancePaymentDesc),
      retentionMoneyDesc: new FormControl(this.fs.Data.contractCondition.retentionMoneyDesc),
      specialCondition: new FormControl(this.fs.Data.contractCondition.specialCondition)

    });
    
  }
  saveAndNext() {
   
    this.fs.Data.contractCondition = this.contractConditionForm.value;
    // tslint:disable-next-line:max-line-length
    this.fs.Data.contractCondition.commencementDate=DateTimeConvertHelper.fromDtObjectToSecon(this.contractConditionForm.get('commencementDate').value);
    this.forms.submit().subscribe((data) => {

      console.log(data);
    });

    console.log(this.datePipe.transform(this.contractConditionForm.get('commencementDate').value,'dd/MM/yyyy'));
  }
  getApi() {
    this.fs.Data.contractCondition = this.contractConditionForm.value;
    this.forms.get().subscribe(res => {
      console.log(res.result.contractCondition.commencementDate);
      console.log(DateTimeConvertHelper.fromTimestampToDtObject(res.result.contractCondition.commencementDate));
      this.contractConditionForm.get('commencementDate').patchValue(DateTimeConvertHelper.fromTimestampToDtObject(res.result.contractCondition.commencementDate));
    });
  }


}
