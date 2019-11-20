import { Component, OnInit } from '@angular/core';
import { LocationPackage } from 'src/app/shared/model/locationpackage.model';
import { LocationService } from 'src/app/shared/service/location.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-location',
  templateUrl: './edit-location.component.html',
  styleUrls: ['./edit-location.component.css']
})
export class EditLocationComponent implements OnInit {

  location: LocationPackage;
  constructor(
    private ls: LocationService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute

  ) {}

  ngOnInit() {
    this.getDetailLocation(this.route.snapshot.params['id']);
  }
  getDetailLocation(id) {
    console.log('id, id', id);
    this.ls.getDetailData(id).subscribe(data => {
      console.log('this.data', data);
      this.location = new LocationPackage();
      this.location.tenkhuvuc=data.tenkhuvuc;
      this.location.mota=data.mota;
      this.location.tinhthanh=data.tinhthanh;
    });
  }



}
