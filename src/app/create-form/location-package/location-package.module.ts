import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationPackageRoutingModule } from './location-package-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LocationPackageComponent } from './location-package.component';
import { ListLocationComponent } from './list-location/list-location.component';
import { DetailLocationComponent } from './detail-location/detail-location.component';
import { FormLocationComponent } from './form-location/form-location.component';
import { AddLocationComponent } from './add-location/add-location.component';
import { EditLocationComponent } from './edit-location/edit-location.component';
import { LocationService } from 'src/app/shared/service/location.service';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LocationPackageRoutingModule,

  ],
  declarations: [
    LocationPackageComponent,
    ListLocationComponent,
    DetailLocationComponent,
    FormLocationComponent,
    AddLocationComponent,
    EditLocationComponent
  ],
  providers: [
    LocationService
]
})
export class LocationPackageModule { }
