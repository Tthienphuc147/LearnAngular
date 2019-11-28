import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [

  // { path: 'package', loadChildren:()=> import('./package-permission/package-permission.module').then(m=>m.PackagePermisionModule) },
  // tslint:disable-next-line: max-line-length
  { path: 'create-form', loadChildren: () => import('./create-form/create-form.module').then(m => m.CreateFormModule),canActivate: [AuthGuard],data: { preload: true }},
  { path: '',  loadChildren: () => import('./login/login.module').then(m => m.LoginModule),data: { preload: true }  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy: PreloadAllModules
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
