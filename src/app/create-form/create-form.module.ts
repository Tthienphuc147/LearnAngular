import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateFormComponent } from './create-form.component';

import { ContractConditionComponent } from './contract-condition/contract-condition.component';
import { DirectorProposalComponent } from './director-proposal/director-proposal.component';
import { EstimatedBudgetComponent } from './estimated-budget/estimated-budget.component';
import { FormloginComponent } from '../formlogin/formlogin.component';
import { UploadHsmtComponent } from '../uploadHsmt/uploadHsmt.component';

import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
 
    SharedModule

   
  ],
  declarations: [
    CreateFormComponent,
    EstimatedBudgetComponent,
    ContractConditionComponent,
    DirectorProposalComponent,
    FormloginComponent,
    UploadHsmtComponent,
  ]
})
export class CreateFormModule { }
