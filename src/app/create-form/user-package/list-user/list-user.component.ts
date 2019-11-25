import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  constructor(private us: UserService,
    private router: Router, ) { }
data = [];
ngOnInit() {
this.getApi();
}
getApi() {
this.us.getData().subscribe(res => {
console.log(res);
this.data = res;
});
}
deleteUser(id){
this.us.deleteData(id)
.subscribe(res => {

}, (err) => {
console.log(err);

}
);
}


}
