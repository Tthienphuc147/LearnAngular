import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Login2RoutingModule } from './login2-routing.module';

import { Login2Component } from './login2.component';
import { Login2FormComponent } from './login2-form/login2-form.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
  CommonModule,
  SharedModule,
  Login2RoutingModule,


  ],
  declarations: [
    Login2Component,
    Login2FormComponent
  ],
  providers: [

]
})
export class Login2Module { }
