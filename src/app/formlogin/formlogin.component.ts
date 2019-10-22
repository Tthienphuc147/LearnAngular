import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '../shared/service/login.service';


@Component({
  selector: 'app-formlogin',
  templateUrl: './formlogin.component.html',
  styleUrls: ['./formlogin.component.css']
})
export class FormloginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private loginService: LoginService,
    private fs: PackageService,
    private fb: FormBuilder,
    private router: Router, ) {

  }


  ngOnInit() {

    this.createForm();

  }

  get f() { return this.loginForm.controls; }
  onSubmit() {
    this.loginService.login(this.f.username.value, this.f.password.value).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/estimated-budget']);
    });
  }
  createForm() {
    this.loginForm = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
}
