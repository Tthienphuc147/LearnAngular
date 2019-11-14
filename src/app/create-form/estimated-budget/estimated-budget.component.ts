
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, AbstractControl, Validators, FormControl } from '@angular/forms';
// tslint:disable-next-line:import-blacklist
import * as FileSaver from 'file-saver';
import { FormService } from './../../shared/service/form.service';
import { PackageService } from '../../shared/service/package.service';
import { Currency } from 'src/app/shared/model/currency.model';
import { LoginService } from 'src/app/shared/service/login.service';
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
  dataUser;
  data: any = {};
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private fs: PackageService,
    private forms: FormService,
    private ls: LoginService
  ) {

  }


  ngOnInit() {
    this.createForm();
    this.getApi();
    console.log(this.estimatedBudgetForm.get('currencyBudgetOfPackage').value);
    this.getUserInfor();

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

      currencyBudgetOfPackage: new FormControl(this.fs.Data.estimatedBuget.draftBudgetOfPackageCurrency &&
        this.fs.Data.estimatedBuget.draftBudgetOfPackageCurrency)
    });
  }
  getUserInfor() {
    this.ls.getInfor(localStorage.getItem('userId')).subscribe(res => {

      // tslint:disable-next-line:no-string-literal
      this.dataUser = res.result;
    });
  }
  saveAndNext() {
    this.fs.Data.estimatedBuget = this.estimatedBudgetForm.value;
    this.forms.submit().subscribe((data) => {
      console.log(data);

    });
  }
  exportFile() {
    this.forms.getExcel().subscribe(response => {
      console.log(response);
      const downloadUrl = URL.createObjectURL(response);
      window.open(downloadUrl);
    });
  }

  getApi() {

    this.forms.get().subscribe(res => {
      console.log(res.result);
      console.log(res.result.estimatedBudgetOfPakage.draftBudgetOfPackageCurrency);
      // tslint:disable-next-line:no-string-literal
      this.estimatedBudgetForm.get('draftBudgetOfPackage').setValue(res.result.estimatedBudgetOfPakage.draftBudgetOfPackage);
      this.estimatedBudgetForm.get('additionalNote').setValue(res.result.estimatedBudgetOfPakage.additionalNote);
      this.estimatedBudgetForm.get('currencyBudgetOfPackage').setValue(res.result.estimatedBudgetOfPakage.draftBudgetOfPackageCurrency);
    });
  }

}
