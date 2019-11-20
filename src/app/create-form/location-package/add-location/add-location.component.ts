import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { LocationService } from 'src/app/shared/service/location.service';
import { Router } from '@angular/router';
import { LocationPackage } from 'src/app/shared/model/locationpackage.model';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {

  id: number = null;
  tenkhuvuc = '';
  mota = '';
  tinhthanh = '';
  data: LocationPackage;
  constructor(


  ) {}

  ngOnInit() {
    this.data = new LocationPackage();
    this.data.id=this.id;
    this.data.tenkhuvuc=this.tenkhuvuc;
    this.data.mota=this.mota;
    this.data.tinhthanh=this.tinhthanh;
  }


}
