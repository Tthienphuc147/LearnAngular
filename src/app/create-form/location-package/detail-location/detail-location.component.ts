import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/shared/service/location.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LocationPackage } from 'src/app/shared/model/locationpackage.model';

@Component({
  selector: 'app-detail-location',
  templateUrl: './detail-location.component.html',
  styleUrls: ['./detail-location.component.css']
})
export class DetailLocationComponent implements OnInit {

  location: LocationPackage = { id: null, tenkhuvuc: '', mota: '', tinhthanh:''};
isLoadingResults = true;
dataLocation={};
  constructor(
    private ls: LocationService,
              private router: Router,
              private route: ActivatedRoute
  ) { }


  ngOnInit() {
    this.getLocationDetails(this.route.snapshot.params['id']);
  }
  getLocationDetails(id) {
    this.ls.getDetailData(id)
      .subscribe(data => {
        this.location = data;
        this.dataLocation =this.location;
        console.log(this.location);
        this.isLoadingResults = false;
      });
  }

}
