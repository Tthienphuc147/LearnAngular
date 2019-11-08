import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [

  { path: 'package', loadChildren:()=> import('./PackagePermission/PackagePermission.module').then(m=>m.PackagePermisionModule) },
  { path: 'create-form', loadChildren: () => import('./create-form/create-form.module').then(m => m.CreateFormModule) },
  { path: '',  loadChildren: () => import('./formlogin/formlogin.module').then(m => m.FormLoginModule)  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
