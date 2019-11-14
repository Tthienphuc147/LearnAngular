import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [

  // { path: 'package', loadChildren:()=> import('./package-permission/package-permission.module').then(m=>m.PackagePermisionModule) },
  { path: 'create-form', loadChildren: () => import('./create-form/create-form.module').then(m => m.CreateFormModule) },
  { path: '',  loadChildren: () => import('./login/login.module').then(m => m.LoginModule)  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
