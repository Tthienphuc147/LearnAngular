import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormloginComponent } from 'src/app/formlogin/formlogin.component';
import { SharedModule } from './../shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports: [
  SharedModule,
  LoginRoutingModule 
  ],
  declarations: [
    FormloginComponent,
    
  ]
})
export class FormLoginModule { }
