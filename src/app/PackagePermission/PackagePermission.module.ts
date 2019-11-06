import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackagePermissionComponent } from 'src/app/PackagePermission/PackagePermission.component';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [

    AppRoutingModule,
    BrowserModule,

  CommonModule,
  ],
  declarations: [
   PackagePermissionComponent
  ]
})
export class PackagePermisionModule { }
