import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationPackageComponent } from './location-package.component';
import { ListLocationComponent } from './list-location/list-location.component';
import { DetailLocationComponent } from './detail-location/detail-location.component';
import { AddLocationComponent } from './add-location/add-location.component';



const routes: Routes = [
  {
    path: '',
    component: LocationPackageComponent ,
    children: [
      {
        path: '',
        component: ListLocationComponent
      },
      {
        path: 'detail/:id',
        component: DetailLocationComponent
      },
      {
        path: 'add',
        component: AddLocationComponent
      }

    ]
}




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationPackageRoutingModule { }
