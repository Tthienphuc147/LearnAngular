import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  constructor(
    private ls:LoginService,
    private router: Router,
  ) { }
  dataUser;
  userName;
  avatar;
  ngOnInit() {
    this.getUserInfor();
    this.userName=localStorage.getItem("userName");
    this.avatar=localStorage.getItem("avatar");
  }
  getUserInfor() {
    this.ls.getInfor(localStorage.getItem("userId")).subscribe(res => {
    

     localStorage.setItem('userName',res.result.userName);
     localStorage.setItem('avatar',res.result.avatar);
   
    });
  }
  logout(){
    localStorage.clear();
    this.router.navigate([``]);
  }



}
