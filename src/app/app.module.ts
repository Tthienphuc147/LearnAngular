import { MatFormField } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgModule } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import { AutocompleteLibModule } from 'angular-ng-autocomplete';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertService } from './shared/service/alert.service';
import { FormService } from './shared/service/form.service';

import { PackageService } from './shared/service/package.service';
import { LoginService } from './shared/service/login.service';
import { UploadHsmtComponent } from './create-form/uploadHsmt/uploadHsmt.component';
import { UploadService } from './shared/service/upload.service'
import { PackagePermissionComponent } from './PackagePermission/PackagePermission.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
   declarations: [
      AppComponent,
    
     
   ],
   imports: [

   BrowserModule,
      BrowserAnimationsModule,
      RouterModule,
      AppRoutingModule
   ],
   providers: [
      AlertService,
      PackageService,
      LoginService,
      FormService,
      DatePipe,
      UploadService,
     
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
