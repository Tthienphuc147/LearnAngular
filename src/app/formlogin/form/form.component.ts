import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/shared/service/login.service';
import { Router } from '@angular/router';
import { AlertService } from './../../shared/service/alert.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  token: string;
  userId;
  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private router: Router,
    private alertService: AlertService ) {

  }


  ngOnInit() {

    this.createForm();

  }

  get formControls() { return this.loginForm.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loginService.login(this.formControls.userName.value, this.formControls.password.value)
    .subscribe( data => {
      console.log(data.result);
      this.token=data.result.accessToken;
      localStorage.setItem("token",this.token);
      this.userId=data.result.userId;
      localStorage.setItem("userId",this.userId);
      this.router.navigate(['create-form/estimated-budget']);
  },
  error => {
      this.alertService.error(error);

  });
  }
  createForm() {
    this.loginForm = this.fb.group({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
}
