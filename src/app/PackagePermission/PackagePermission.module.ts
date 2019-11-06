import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackagePermissionComponent } from 'src/app/PackagePermission/PackagePermission.component';
import { SharedModule } from './../shared/shared.module';
import { PackagePermisssionRouting } from './PackagePermission-routing.module';


@NgModule({
  imports: [
    CommonModule,
   SharedModule,
   PackagePermisssionRouting
  ],
  declarations: [
   PackagePermissionComponent
  ]
})
export class PackagePermisionModule { }
