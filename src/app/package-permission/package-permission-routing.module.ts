import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PackagePermissionComponent } from './package-permission.component';
import { PackagePermissionFormComponent } from './package-permission-form/package-permission-form.component';


const routes: Routes = [
    {
        path: '',
        component: PackagePermissionComponent,
        children: [
            { path: '', component: PackagePermissionFormComponent  },
          
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],

exports: [RouterModule]
})
export class PackagePermisssionRouting { }
