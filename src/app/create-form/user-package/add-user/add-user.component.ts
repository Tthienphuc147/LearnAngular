import { Component, OnInit } from '@angular/core';
import { UserPackage } from 'src/app/shared/model/userpackage.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  data: UserPackage;
  constructor(


  ) {}

  ngOnInit() {
    this.data = new UserPackage(null,"","","","","","");
  }
}
