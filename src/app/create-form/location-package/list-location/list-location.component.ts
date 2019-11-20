import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/shared/service/location.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-location',
  templateUrl: './list-location.component.html',
  styleUrls: ['./list-location.component.css']
})
export class ListLocationComponent implements OnInit {

  constructor(private ls: LocationService,
              private router: Router, ) { }
  data = [];
  ngOnInit() {
    this.getApi();
  }
  getApi() {
    this.ls.getData().subscribe(res => {
      console.log(res);
      this.data = res;
    });
  }
  deleteLocation(id){
    this.ls.deleteData(id)
      .subscribe(res => {
        
        }, (err) => {
          console.log(err);

        }
      );
  }



}
