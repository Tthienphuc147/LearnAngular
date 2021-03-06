import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import ValidatorHelper from 'src/app/shared/validator.helper';
import CustomValidator from 'src/app/shared/customValidator';
import { MustMatch } from 'src/app/shared/must-match.validator';

@Component({
  selector: 'app-login2-form',
  templateUrl: './login2-form.component.html',
  styleUrls: ['./login2-form.component.css']
})
export class Login2FormComponent implements OnInit {

  loginForm2: FormGroup;
  submitted = false;
  invalidMessages: string[];

  formErrors = {
    username: '',
    email: '',
    password: '',
    confirmpassword: '',
    role:''
  };
  constructor(
    private fb: FormBuilder,

  ) { }

  ngOnInit() {
    this.createForm();

  }
  validateForm() {
    this.invalidMessages = ValidatorHelper.getInvalidMessage(this.loginForm2, this.formErrors);
    return this.invalidMessages.length === 0;
  }
  onFormValueChanged(data?: any) {
    if (this.submitted) {
      this.validateForm();
    }
  }

  createForm() {

    this.loginForm2 = this.fb.group({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [Validators.required, CustomValidator.password]),
      confirmpassword: new FormControl('', [Validators.required, CustomValidator.password]),
      role:new FormControl('',[Validators.required])

    }, {
      validator: MustMatch('password', 'confirmpassword')
  });
  this.loginForm2.valueChanges.subscribe(data => {
    this.onFormValueChanged(data);
    console.log(data);
  });
  }
  onSubmit() {
    this.submitted = true;
    if (this.validateForm()) {
      return;
    }
    alert('Đăng ký thành công')

  }


}
