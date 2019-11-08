import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { PackagePermissionComponent } from 'src/app/PackagePermission/PackagePermission.component';
import { SharedModule } from './../shared/shared.module';
import { PackagePermisssionRouting } from './PackagePermission-routing.module';
import { FormComponent } from './Form/Form.component';
import { AlertService } from '../shared/service/alert.service';
import { PackageService } from '../shared/service/package.service';
import { LoginService } from '../shared/service/login.service';
import { FormService } from '../shared/service/form.service';
import { UploadService } from '../shared/service/upload.service';
import { PPermissionService } from '../shared/service/ppermission.service';

@NgModule({
  imports: [
    CommonModule,
 SharedModule,
   PackagePermisssionRouting,
  ],
  declarations: [
   PackagePermissionComponent,
   FormComponent
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
