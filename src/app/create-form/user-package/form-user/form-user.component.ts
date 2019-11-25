import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserPackage } from 'src/app/shared/model/userpackage.model';
import { LocationService } from 'src/app/shared/service/location.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LocationPackage } from 'src/app/shared/model/locationpackage.model';
import { UserService } from 'src/app/shared/service/user.service';
import { comparePassword } from 'src/app/shared/validator-helper';
import { MustMatch } from 'src/app/shared/must-match.validator';

import { isValidMailFormat } from 'src/app/shared/email.validator';
@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {

  formUser: FormGroup;
  submitted = false;


  @Input() formReady: UserPackage;
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
    this.formUser = this.formBuilder.group({
      id: new FormControl(this.formReady.id),
      tennguoidung: new FormControl(this.formReady.tennguoidung,[Validators.required]),
      email: new FormControl(this.formReady.email,[Validators.email]),
      website: new FormControl(this.formReady.website),
      sdt: new FormControl(this.formReady.sdt),
      taikhoan: new FormControl(this.formReady.taikhoan),
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
  }, {
      validator: MustMatch('password', 'confirmPassword')
  });
  }
  get f() { return this.formUser.controls; }
  onSubmit(form: UserPackage) {
    if (this.formReady.id === null) {
      this.submitted = true;
      if ( this.formUser.invalid ) {
        return;
      }
   
        this.us.addData(form).subscribe(
          res => {
            this.router.navigate(["/create-form/user-package"]);
            console.log(res);
          },
          err => {
            console.log(err);
          }
        );
    
    } else {
      this.submitted = true;
      if ( this.formUser.invalid ) {
        return;
      }
      this.us.updateData(this.formReady.id, form).subscribe(
        res => {
          this.router.navigate(["/create-form/user-package"]);
        },
        err => {
          console.log(err);
        }
      );
      this.submitted = true;

      // stop here if form is invalid
      if (this.formUser.invalid) {
        return;
      }
    }
    this.submitted = true;

    // stop here if form is invalid
   

  }


}
