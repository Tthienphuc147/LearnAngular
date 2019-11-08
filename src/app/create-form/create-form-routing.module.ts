import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateFormComponent } from './create-form.component';

import { ContractConditionComponent } from './contract-condition/contract-condition.component';
import { DirectorProposalComponent } from './director-proposal/director-proposal.component';
import { EstimatedBudgetComponent } from './estimated-budget/estimated-budget.component';
import { UploadHsmtComponent } from './uploadHsmt/uploadHsmt.component';

const routes: Routes = [
  {
    path: '',
    component: CreateFormComponent,
    children: [
      {
        path: 'estimated-budget',
        component: EstimatedBudgetComponent
      },
      {
        path: 'contract-condition',
        component: ContractConditionComponent
      },
      {
        path: 'director-proposal',
        component: DirectorProposalComponent
      },
      {
        path: 'upload-hsmt',
        component: UploadHsmtComponent
      },
      
    ]
}
 



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateFormRoutingModule { }
