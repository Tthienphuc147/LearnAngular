import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Form, FormBuilder, Validators } from '@angular/forms';

import { AutocompleteLibModule } from 'angular-ng-autocomplete';

@Component({
  selector: 'app-contract-condition',
  templateUrl: './contract-condition.component.html',
  styleUrls: ['./contract-condition.component.css']
})
export class ContractConditionComponent implements OnInit {

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
  ]
  constructor(
    private fb: FormBuilder
  ) { }
  ngOnInit() {
    this.createForm();
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
  createForm() {

    this.contractConditionForm = this.fb.group({
      timeForCompletionCheckbox: new FormControl(),
      commencementDateCheckbox: new FormControl(),
      warrantyPeriodCheckbox: new FormControl(),
      tenderSecurityCheckbox: new FormControl(),
      performanceSecurityCheckbox: new FormControl(),
      delayDamagesForTheWorksCheckbox: new FormControl(),
      advancePaymentCheckbox: new FormControl(),
      retentionMoneyCheckbox: new FormControl(),
      timeForCompletion: new FormControl(),
      commencementDate: new FormControl(),
      warrantyPeriod: new FormControl(),
      tenderSecurity: new FormControl(),
      delayDamagesForTheWorks: new FormControl(),
      advancePayment: new FormControl(),
      retentionMoney: new FormControl(),
      performanceSecurity :new FormControl()
    });
  }

}
