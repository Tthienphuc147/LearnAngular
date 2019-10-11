import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, AbstractControl, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-estimated-budget',
  templateUrl: './estimated-budget.component.html',
  styleUrls: ['./estimated-budget.component.css']
})
export class EstimatedBudgetComponent implements OnInit {

  listCurrency: Array<string> = ['VNĐ', 'USD'];
  currency = 'VNĐ';
  estimatedBudgetForm: FormGroup;
  draftBudgetOfPackageCheckbox: FormControl;
  draftBudgetOfPackage: FormControl;

  constructor(
    private router: Router,
    private fb: FormBuilder

  ) {

  }

  ngOnInit() {
    this.createForm();

  }
  routerLink(event, link) {
    if (event.key === 'Enter') {

      this.router.navigate([`/create-form/${link}`]);

    }
  }
  createForm() {

    this.estimatedBudgetForm = this.fb.group({
      draftBudgetOfPackageCheckbox: new FormControl(),
      draftBudgetOfPackage: new FormControl()
    });
  }


}
