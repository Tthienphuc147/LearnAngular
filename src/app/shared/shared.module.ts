import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackagePermissionComponent } from 'src/app/package-permission/package-permission.component';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AmountConverterPipe } from './pipes/amountConverter.module';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { NumberOnlyDirective } from './directive/number.directive';
import { ThousandSeparate } from './pipes/thoudand-separate.module';
import { EnterPreventDefaultDirective } from './directive/enter-prevent-default.directive';
import { InputNumberNegativeDecimalDirective } from './directive/input-number-negative-decimal.directive';
import { VnCurrencyPipe } from './pipes/vn-currency-pipe.module';
import { MinMaxDirective } from './directive/input-minmax.directive';
import { RouterModule } from '@angular/router';

@NgModule( {
  imports: [
    DropDownsModule,
    FormsModule,
    ReactiveFormsModule,
    AutocompleteLibModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    RouterModule,
  ],
  declarations: [
    NumberOnlyDirective,
    ThousandSeparate,
    EnterPreventDefaultDirective,
    InputNumberNegativeDecimalDirective,
    VnCurrencyPipe,
    MinMaxDirective,
    AmountConverterPipe,
  ],
  exports: [

    DropDownsModule,
    FormsModule,
    ReactiveFormsModule,
    AutocompleteLibModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    NumberOnlyDirective,
    ThousandSeparate,
    EnterPreventDefaultDirective,
    InputNumberNegativeDecimalDirective,
    VnCurrencyPipe,
    MinMaxDirective,
    AmountConverterPipe,
    RouterModule,
  ]
} )
export class SharedModule { }
