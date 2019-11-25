import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { DatePipe } from '@angular/common';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertService } from './shared/service/alert.service';
import { FormService } from './shared/service/form.service';

import { PackageService } from './shared/service/package.service';
import { LoginService } from './shared/service/login.service';

import { UploadService } from './shared/service/upload.service';
import { RouterModule } from '@angular/router';
import { UserPackageModule } from './create-form/user-package/user-package.module';

@NgModule({
   declarations: [
      AppComponent,

   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      RouterModule,
      AppRoutingModule,
   ],
   providers: [
      AlertService,
      PackageService,
      LoginService,
      FormService,
      DatePipe,
      UploadService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
