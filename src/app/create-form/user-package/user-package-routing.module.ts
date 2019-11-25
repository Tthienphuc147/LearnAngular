import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPackageComponent } from './user-package.component';
import { ListUserComponent } from './list-user/list-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AddUserComponent } from './add-user/add-user.component';


const routes: Routes = [
  {
    path: '',
    component: UserPackageComponent ,
    children: [
      {
        path: '',
        component: ListUserComponent
      },
      {
        path: 'edit/:id',
        component: EditUserComponent
      },
      {
        path: 'add',
        component: AddUserComponent
      }


    ]
}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPackageRoutingModule { }
