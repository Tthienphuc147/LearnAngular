import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateFormComponent } from './create-form.component';

import { ContractConditionComponent } from './contract-condition/contract-condition.component';
import { DirectorProposalComponent } from './director-proposal/director-proposal.component';
import { EstimatedBudgetComponent } from './estimated-budget/estimated-budget.component';
import { UploadHsmtComponent } from './uploadHsmt/uploadHsmt.component';
import { PermissionComponent } from './permission/permission.component';
import { LocationPackageComponent } from './location-package/location-package.component';

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
      {
        path: 'package',
        component: PermissionComponent
      },
      { path: 'location',  loadChildren: () => import('./location-package/location-package.module').then(m => m.LocationPackageModule)  },
      {path:'document-package',loadChildren: ()=> import('./document-package/document-package.module').then(m=>m.DocumentPackageModule)},
      {path:'user-package',loadChildren: ()=> import('./user-package/user-package.module').then(m=>m.UserPackageModule)},

    ]
}




];

@NgModule({
  imports: [RouterModule.forChild(routes)],

exports: [RouterModule]
})
export class CreateFormRoutingModule { }
