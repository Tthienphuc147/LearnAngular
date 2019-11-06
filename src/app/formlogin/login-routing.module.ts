import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormloginComponent } from './formlogin.component';


const routes: Routes = [
    {
        path: '',
        component: FormloginComponent,
        // children: [
        //     { path: '', component: FormloginComponent },
          
        // ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule { }
