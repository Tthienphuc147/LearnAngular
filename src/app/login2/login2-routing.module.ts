import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Login2FormComponent } from './login2-form/login2-form.component';

const routes: Routes = [
  {
      path: '',
      component: Login2FormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Login2RoutingModule { }
