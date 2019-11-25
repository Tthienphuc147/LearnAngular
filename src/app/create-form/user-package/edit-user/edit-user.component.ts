import { Component, OnInit } from '@angular/core';
import { UserPackage } from 'src/app/shared/model/userpackage.model';
import { UserService } from 'src/app/shared/service/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: UserPackage;
  constructor(
    private us: UserService,

    private route: ActivatedRoute

  ) {}

  ngOnInit() {
    this.getDetailUser(this.route.snapshot.params['id']);
  }
  getDetailUser(id) {
    console.log('id, id', id);
    this.us.getDetailData(id).subscribe(data => {
      console.log('this.data', data);
      this.user = new UserPackage(data.id,data.tennguoidung,data.email,data.website,data.sdt,data.taikhoan,data.password);
    });
  }


}
