import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { CreateFormComponent } from './create-form.component';

import { ContractConditionComponent } from './contract-condition/contract-condition.component';
import { DirectorProposalComponent } from './director-proposal/director-proposal.component';
import { EstimatedBudgetComponent } from './estimated-budget/estimated-budget.component';

import { UploadHsmtComponent } from './uploadHsmt/uploadHsmt.component';

import { SharedModule } from './../shared/shared.module';
import { CreateFormRoutingModule } from './create-form-routing.module';
import { AlertService } from '../shared/service/alert.service';
import { PackageService } from '../shared/service/package.service';
import { LoginService } from '../shared/service/login.service';
import { FormService } from '../shared/service/form.service';
import { UploadService } from '../shared/service/upload.service';
import { PermissionComponent } from './permission/permission.component';
import { PPermissionService } from './../shared/service/ppermission.service';

@NgModule({
  imports: [


  CommonModule,
    SharedModule,
    CreateFormRoutingModule
  ],
  declarations: [
    CreateFormComponent,
    EstimatedBudgetComponent,
    ContractConditionComponent,
    DirectorProposalComponent,
    UploadHsmtComponent,
    PermissionComponent,



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
export class CreateFormModule { }
