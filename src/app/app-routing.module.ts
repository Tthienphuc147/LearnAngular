import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContractConditionComponent } from './create-form/contract-condition/contract-condition.component';
import { DirectorProposalComponent } from './create-form/director-proposal/director-proposal.component';
import { EstimatedBudgetComponent } from './create-form/estimated-budget/estimated-budget.component';
import {UploadHsmtComponent} from './uploadHsmt/uploadHsmt.component'
import { FormloginComponent } from './formlogin/formlogin.component'

const routes: Routes = [
 
  // {
  //   path: 'estimated-budget',
  //   component: EstimatedBudgetComponent
  // },
  // {
  //   path: 'contract-condition',
  //   component: ContractConditionComponent
  // },
  // {
  //   path: 'director-proposal',
  //   component: DirectorProposalComponent
  // },
  // {
  //   path:'upload-hsmt',
  //   component: UploadHsmtComponent
  // },
  // {
  //   path:'',
  //   component: FormloginComponent
  // }
  { path: 'package', loadChildren: './PackagePermission/PackagePermission.module#PackagePermisionModule' },
  { path: 'create-form', loadChildren: './create-form/create-form.module#CreateFormModule' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
