import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserPackage } from 'src/app/shared/model/userpackage.model';
import { LocationService } from 'src/app/shared/service/location.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LocationPackage } from 'src/app/shared/model/locationpackage.model';
import { UserService } from 'src/app/shared/service/user.service';
import { MustMatch } from 'src/app/shared/must-match.validator';
import ValidatorHelper from 'src/app/shared/validator.helper';
import CustomValidator from 'src/app/shared/customValidator';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {

  formUser: FormGroup;
  submitted = false;
  invalidMessages: string[];


  @Input() formReady: UserPackage;
  formErrors = {
    tennguoidung: '',
    email: '',
    website: '',
    sdt: '',
    taikhoan: '',
    password: '',
    confirmPassword: ''
  };
  // @Output() event = new EventEmitter<LocationPackage>();
  constructor(
    private us: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit() {
    // this.generateId();
    console.log(this.formReady);
    this.createForm();

  }
  get f() { return this.formUser.controls; }
  onSubmit(form: UserPackage) {
    this.submitted=true;
    if(this.validateForm()){
      return;
    }
    if (this.formReady.id === null) {
   

      this.us.addData(form).subscribe(
          res => {
            this.router.navigate(['/create-form/user-package']);
            console.log(res);
          },
          err => {
            console.log(err);
          }
        );

    } else {
    
      this.us.updateData(this.formReady.id, form).subscribe(
        res => {
          this.router.navigate(['/create-form/user-package']);
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );

    }
   


  }
  validateForm() {
    this.invalidMessages = ValidatorHelper.getInvalidMessage(this.formUser, this.formErrors);
    return this.invalidMessages.length === 0;
  }
  onFormValueChanged(data?: any) {
    if (this.submitted) {
      this.validateForm();
    }
  }
  createForm(){
    this.formUser = this.formBuilder.group({
      id: new FormControl(this.formReady.id),
      tennguoidung: new FormControl(this.formReady.tennguoidung, [Validators.required]),
      email: new FormControl(this.formReady.email, [Validators.email, Validators.required]),
      website: new FormControl(this.formReady.website),
      // tslint:disable-next-line: max-line-length
      sdt: new FormControl(this.formReady.sdt, [Validators.required,CustomValidator.sdt]),
      taikhoan: new FormControl(this.formReady.taikhoan, [Validators.required]),
      password: [this.formReady.password, [Validators.required,CustomValidator.password]],
      confirmPassword: [this.formReady.password, [Validators.required,CustomValidator.password]]
  }, {
      validator: MustMatch('password', 'confirmPassword')
  });
    this.formUser.valueChanges.subscribe(data => {
      this.onFormValueChanged(data);
      console.log(data);
    });

  }


}
