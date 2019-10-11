import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContractConditionComponent } from './create-form/contract-condition/contract-condition.component';
import { DirectorProposalComponent } from './create-form/director-proposal/director-proposal.component';
import { EstimatedBudgetComponent } from './create-form/estimated-budget/estimated-budget.component';


const routes: Routes = [
  {
    path: '',
    component: EstimatedBudgetComponent
  },
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



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
