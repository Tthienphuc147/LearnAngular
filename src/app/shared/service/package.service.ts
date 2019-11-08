import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import { Observable, Subject } from 'rxjs';

import { ContractCondition } from '../model/contract-condition.model';
import { Data } from './../model/data.model';




@Injectable()
export class PackageService {
  public Data=new Data();
  constructor() {
  }
 
  
}




