import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/shared/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  loginForm: FormGroup;
  public token: string;
  constructor(
    private loginService: LoginService,
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
      this.token=data.result.accessToken;
      localStorage.setItem('token',this.token);
      this.router.navigate(['/create-form/estimated-budget']);
    });
  }
  createForm() {
    this.loginForm = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
}
