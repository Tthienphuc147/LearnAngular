import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { PackagePermissionComponent } from 'src/app/package-permission/package-permission.component';
import { SharedModule } from './../shared/shared.module';
import { PackagePermisssionRouting } from './package-permission-routing.module';

import { AlertService } from '../shared/service/alert.service';
import { PackageService } from '../shared/service/package.service';
import { LoginService } from '../shared/service/login.service';
import { FormService } from '../shared/service/form.service';
import { UploadService } from '../shared/service/upload.service';
import { PPermissionService } from '../shared/service/ppermission.service';
import { PackagePermissionFormComponent } from './package-permission-form/package-permission-form.component';

@NgModule({
  imports: [

    CommonModule,
    SharedModule,
    PackagePermisssionRouting,
  ],
  declarations: [
    PackagePermissionComponent,
    PackagePermissionFormComponent
  ],
  providers: [
    AlertService,
    PackageService,
    LoginService,
    FormService,
    DatePipe,
    UploadService,
    PPermissionService
  ]
})
export class PackagePermisionModule { }
