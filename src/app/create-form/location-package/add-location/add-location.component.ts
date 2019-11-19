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
  data:LocationPackage
  constructor(
    private ls: LocationService,
    private router: Router,
    private formBuilder: FormBuilder

  ) {}

  ngOnInit() {
    this.data=new LocationPackage();
  }
  addForm(form: LocationPackage) {
    console.log(form);
    this.ls.addData(form).subscribe(
      res => {
        this.router.navigate(["/create-form/location"]);
      },
      err => {
        console.log(err);
      }
    );

  }

}
