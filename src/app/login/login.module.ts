import { NgModule } from '@angular/core';


import { SharedModule } from './../shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { CommonModule, DatePipe } from '@angular/common';
import { AlertService } from '../shared/service/alert.service';
import { PackageService } from '../shared/service/package.service';
import { LoginService } from '../shared/service/login.service';
import { FormService } from '../shared/service/form.service';
import { UploadService } from '../shared/service/upload.service';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
  SharedModule,
  LoginRoutingModule,
 
 
  ],
  declarations: [
    LoginComponent,
    LoginFormComponent
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
export class LoginModule { }
