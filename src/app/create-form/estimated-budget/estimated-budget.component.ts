import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, AbstractControl, Validators, FormControl } from '@angular/forms';

import { FormService } from './../../shared/service/form.service';
import { PackageService } from '../../shared/service/package.service';
@Component({
  selector: 'app-estimated-budget',
  templateUrl: './estimated-budget.component.html',
  styleUrls: ['./estimated-budget.component.css']
})
export class EstimatedBudgetComponent implements OnInit, OnDestroy {

  listCurrency: Array<string> = ['VNĐ', 'USD'];
  currency = 'VNĐ';
  estimatedBudgetForm: FormGroup;
  draftBudgetOfPackageCheckbox: FormControl;
  draftBudgetOfPackage: FormControl;


  constructor(
    private router: Router,
    private fb: FormBuilder,
    private fs: PackageService,
    private forms: FormService
  ) {

  }


  ngOnInit() {
    this.createForm();
    // tslint:disable-next-line:max-line-length
    console.log(this.fs.Data.estimatedBuget);

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
      draftBudgetOfPackageDesc: new FormControl(this.fs.Data.estimatedBuget.draftBudgetOfPackageDesc)
    });
  }
  saveAndNext() {
    // tslint:disable-next-line:max-line-length
    this.forms.submit(this.fs.Data.estimatedBuget).subscribe((data) => {
      console.log(data);
    });
  }


}
