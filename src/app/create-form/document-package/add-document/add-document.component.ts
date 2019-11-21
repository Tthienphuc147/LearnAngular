import { Component, OnInit } from '@angular/core';
import { DocumentPackage } from 'src/app/shared/model/documentpackage.model';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.css']
})
export class AddDocumentComponent implements OnInit {
  data: DocumentPackage;
  constructor() {}

  ngOnInit() {
    this.data = new DocumentPackage(null,'',null,'',null,'','');
  }
}
