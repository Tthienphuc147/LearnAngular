import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateFormComponent } from './create-form.component';

import { ContractConditionComponent } from './contract-condition/contract-condition.component';
import { DirectorProposalComponent } from './director-proposal/director-proposal.component';
import { EstimatedBudgetComponent } from './estimated-budget/estimated-budget.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CreateFormComponent,
    EstimatedBudgetComponent,
    ContractConditionComponent,
    DirectorProposalComponent
  ]
})
export class CreateFormModule { }
