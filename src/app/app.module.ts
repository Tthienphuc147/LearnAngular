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

import { CreateFormComponent } from './create-form/create-form.component';
import { FormloginComponent } from './formlogin/formlogin.component';
import { ContractConditionComponent } from './create-form/contract-condition/contract-condition.component';
import { DirectorProposalComponent } from './create-form/director-proposal/director-proposal.component';
import { EstimatedBudgetComponent } from './create-form/estimated-budget/estimated-budget.component';
import { EnterPreventDefaultDirective } from './shared/directive/enter-prevent-default.directive';
import { MinMaxDirective } from './shared/directive/input-minmax.directive';
import { InputNumberNegativeDecimalDirective } from './shared/directive/input-number-negative-decimal.directive';
import { NumberOnlyDirective } from './shared/directive/number.directive';
import { AmountConverterPipe } from './shared/pipes/amountConverter.module';
import { ThousandSeparate } from './shared/pipes/thoudand-separate.module';
import { VnCurrencyPipe } from './shared/pipes/vn-currency-pipe.module';
import { AlertService } from './shared/service/alert.service';
import { FormService } from './shared/service/form.service';

import { PackageService } from './shared/service/package.service';
import { LoginService } from './shared/service/login.service';
import { UploadHsmtComponent } from './uploadHsmt/uploadHsmt.component';
import { UploadService } from './shared/service/upload.service'

@NgModule({
   declarations: [
      AppComponent,
      CreateFormComponent,
      EstimatedBudgetComponent,
      ContractConditionComponent,
      DirectorProposalComponent,
      NumberOnlyDirective,
      ThousandSeparate,
      EnterPreventDefaultDirective,
      InputNumberNegativeDecimalDirective,
      VnCurrencyPipe,
      MinMaxDirective,
      AmountConverterPipe,
      FormloginComponent,
      UploadHsmtComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      DropDownsModule,
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      AutocompleteLibModule,
      MatDatepickerModule,
      MatNativeDateModule,
      CommonModule,
      HttpClientModule
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
