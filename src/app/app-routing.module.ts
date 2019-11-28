import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';
import { Login2Component } from './login2/login2.component';

const routes: Routes = [

  // { path: 'package', loadChildren:()=> import('./package-permission/package-permission.module').then(m=>m.PackagePermisionModule) },
  // tslint:disable-next-line: max-line-length
  { path: 'create-form', loadChildren: () => import('./create-form/create-form.module').then(m => m.CreateFormModule),canActivate: [AuthGuard],data: { preload: true }},
  { path: 'login',  loadChildren: () => import('./login/login.module').then(m => m.LoginModule),data: { preload: true }  },
  {path:'',component:Login2Component}


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
