import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './Form/Form.component';
import { PackagePermissionComponent } from './PackagePermission.component';


const routes: Routes = [
    {
        path: '',
        component: PackagePermissionComponent,
        children: [
            { path: '', component: FormComponent },
          
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],

exports: [RouterModule]
})
export class LoginRoutingModule { }
