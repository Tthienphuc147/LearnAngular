import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '../shared/service/login.service';


@Component({
  selector: 'app-formlogin',
  templateUrl: './formlogin.component.html',
  styleUrls: ['./formlogin.component.css']
})
export class FormloginComponent implements OnInit {



  ngOnInit() {


  }

}
