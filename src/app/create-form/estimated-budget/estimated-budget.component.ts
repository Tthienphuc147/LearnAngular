
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, AbstractControl, Validators, FormControl } from '@angular/forms';
// tslint:disable-next-line:import-blacklist

import { FormService } from './../../shared/service/form.service';
import { PackageService } from '../../shared/service/package.service';
import { Currency } from 'src/app/shared/model/currency.model';
@Component({
  selector: 'app-estimated-budget',
  templateUrl: './estimated-budget.component.html',
  styleUrls: ['./estimated-budget.component.css']
})
@Injectable()
export class EstimatedBudgetComponent implements OnInit, OnDestroy {

  listCurrency: Array<Currency> = [{ key: 'VND', value: 'VND', displayText: 'VND' },
  { key: 'USD', value: 'USD', displayText: 'USD' }];
  currency = 'VNĐ';
  estimatedBudgetForm: FormGroup;
  draftBudgetOfPackageCheckbox: FormControl;
  draftBudgetOfPackage: FormControl;

  data: any={};
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private fs: PackageService,
    private forms: FormService
  ) {

  }


  ngOnInit() {
    this.createForm();
    this.getApi();

  }
  get f() { return this.estimatedBudgetForm.controls; }
  ngOnDestroy() {
    this.fs.Data.estimatedBuget = this.estimatedBudgetForm.value;
  }
  routerLink(event, link) {
    if (event.key === 'Enter') {

      this.router.navigate([`/create-form/${link}`]);

    }
  }
  createForm() {
    this.estimatedBudgetForm = this.fb.group({
      draftBudgetOfPackageCheckbox: new FormControl(this.fs.Data.estimatedBuget.draftBudgetOfPackageCheckbox),
      draftBudgetOfPackage: new FormControl(this.fs.Data.estimatedBuget.draftBudgetOfPackage),
      additionalNote: new FormControl(this.fs.Data.estimatedBuget.additionalNote),
      draftBudgetOfPackageDesc: new FormControl(this.fs.Data.estimatedBuget.draftBudgetOfPackageDesc),
      // draftBudgetOfPackageCurrency: this.fb.group({
      //   // tslint:disable-next-line:max-line-length
      //   key: new FormControl(this.listCurrency[0]),
      //   // tslint:disable-next-line:max-line-length
      //   value: new FormControl(this.listCurrency[0]),

      //   // tslint:disable-next-line:max-line-length
      //   displayText: new FormControl(this.listCurrency[0])
      //   // tslint:disable-next-line:max-line-length

      // }),
      currencyBudgetOfPackage: new FormControl(this.fs.Data.estimatedBuget.draftBudgetOfPackageCurrency &&
        this.fs.Data.estimatedBuget.draftBudgetOfPackageCurrency.key)
    });
  }
  saveAndNext() {
    console.log(this.estimatedBudgetForm.value);
    // tslint:disable-next-line:max-line-length
    this.fs.Data.estimatedBuget = this.estimatedBudgetForm.value;
    this.forms.submit().subscribe((data) => {
      console.log(data);

    });
  }

  getApi() {
    this.fs.Data.estimatedBuget = this.estimatedBudgetForm.value;
    this.forms.get().subscribe(res => {
      console.log(res.result.estimatedBudgetOfPakage);
      // tslint:disable-next-line:no-string-literal
      this.estimatedBudgetForm.get('draftBudgetOfPackage').setValue(res.result.estimatedBudgetOfPakage.draftBudgetOfPackage);
      this.estimatedBudgetForm.get('additionalNote').setValue(res.result.estimatedBudgetOfPakage.additionalNote);
      this.estimatedBudgetForm.get('currencyBudgetOfPackage').setValue(res.result.estimatedBudgetOfPakage.draftBudgetOfPackageCurrency.key);
    });
  }


}
