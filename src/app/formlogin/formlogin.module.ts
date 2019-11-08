import { NgModule } from '@angular/core';


import { FormloginComponent } from 'src/app/formlogin/formlogin.component';
import { SharedModule } from './../shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { FormComponent } from './form/form.component';
import { CommonModule, DatePipe } from '@angular/common';
import { AlertService } from '../shared/service/alert.service';
import { PackageService } from '../shared/service/package.service';
import { LoginService } from '../shared/service/login.service';
import { FormService } from '../shared/service/form.service';
import { UploadService } from '../shared/service/upload.service';

@NgModule({
  imports: [
    CommonModule,
  SharedModule,
  LoginRoutingModule,
 
 
  ],
  declarations: [
    FormloginComponent,
    FormComponent
  ],
  providers: [
    AlertService,
    PackageService,
    LoginService,
    FormService,
    DatePipe,
    UploadService,
]
})
export class FormLoginModule { }
