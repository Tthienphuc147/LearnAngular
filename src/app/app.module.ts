import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { DatePipe, registerLocaleData } from '@angular/common';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertService } from './shared/service/alert.service';
import { FormService } from './shared/service/form.service';

import { PackageService } from './shared/service/package.service';
import { LoginService } from './shared/service/login.service';

import { UploadService } from './shared/service/upload.service';
import { RouterModule } from '@angular/router';
import { UserPackageModule } from './create-form/user-package/user-package.module';
import { AuthGuard } from './shared/auth.guard';
import { CustomPreloadingStrategy } from './shared/service/custom-preloading.service';
import { NgZorroAntdModule, NZ_I18N, en_US, NZ_ICONS } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { Login2Component } from './login2/login2.component';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';
const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

registerLocaleData(en);

@NgModule({
   declarations: [
      AppComponent,
      Login2Component,

   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      RouterModule,
      AppRoutingModule,
      NgZorroAntdModule,
      FormsModule,
      HttpClientModule,
      NgZorroAntdModule
   ],
   providers: [
      AlertService,
      PackageService,
      LoginService,
      FormService,
      DatePipe,
      UploadService,
      AuthGuard,
      CustomPreloadingStrategy,
      { provide: NZ_I18N, useValue: en_US },
      , { provide: NZ_ICONS, useValue: icons }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
