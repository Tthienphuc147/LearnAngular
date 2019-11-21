
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
// tslint:disable-next-line:import-blacklist
import { FormService } from './../../shared/service/form.service';
import { PackageService } from '../../shared/service/package.service';
import { LoginService } from 'src/app/shared/service/login.service';
@Component({
  selector: 'app-estimated-budget',
  templateUrl: './estimated-budget.component.html',
  styleUrls: ['./estimated-budget.component.css']
})
@Injectable()
export class EstimatedBudgetComponent implements OnInit, OnDestroy {

  // listCurrency: Array<Currency> = [{ key: 'VND', value: 'VND', displayText: 'VND' },
  // { key: 'USD', value: 'USD', displayText: 'USD' }];
  // currency = 'VNĐ';
  listCurrency: Array<string> = ['VNĐ', 'USD'];
  public title = '';
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

      // currencyBudgetOfPackage: new FormControl(this.fs.Data.estimatedBuget.draftBudgetOfPackageCurrency &&
      //   this.fs.Data.estimatedBuget.draftBudgetOfPackageCurrency),
        draftBudgetOfPackageCurrency: this.fb.group({
          key:  this.listCurrency[0],
          value:   this.listCurrency[0],
          displayText: this.listCurrency[0]
      }),
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
      console.log(res.result.estimatedBudgetOfPakage.draftBudgetOfPackageCurrency.value);
      // tslint:disable-next-line:no-string-literal
      this.estimatedBudgetForm.get('draftBudgetOfPackage').setValue(res.result.estimatedBudgetOfPakage.draftBudgetOfPackage);
      this.estimatedBudgetForm.get('additionalNote').setValue(res.result.estimatedBudgetOfPakage.additionalNote);
      // tslint:disable-next-line:max-line-length
      this.estimatedBudgetForm.get('draftBudgetOfPackageCurrency').get('value').patchValue(res.result.estimatedBudgetOfPakage.draftBudgetOfPackageCurrency.value);
    });
  }

}
