import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPackageRoutingModule } from './user-package-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { FormUserComponent } from './form-user/form-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { UserService } from 'src/app/shared/service/user.service';
import { UserPackageComponent } from './user-package.component';


@NgModule({

  imports: [
    CommonModule,
    SharedModule,
    UserPackageRoutingModule
  ],
  declarations: [AddUserComponent, EditUserComponent, FormUserComponent, ListUserComponent , UserPackageComponent],
  providers: [
    UserService
]
})
export class UserPackageModule { }
