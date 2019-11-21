import { Component, OnInit } from '@angular/core';
import { DocumentService } from 'src/app/shared/service/document.service';
import { DocumentPackage } from 'src/app/shared/model/documentpackage.model';
import DateTimeConvertHelper from 'src/app/shared/datetime-convert-helper';

@Component({
  selector: 'app-list-document',
  templateUrl: './list-document.component.html',
  styleUrls: ['./list-document.component.css']
})
export class ListDocumentComponent implements OnInit {

  constructor(private ds:DocumentService) { }

  data = new Array<DocumentPackage>();
  ngOnInit() {
    this.getApi();
  }
  getApi() {
    this.ds.getData().subscribe(res => {
      console.log(res);
      this.data = res;
    });
  }
  deleteDocument(id){
    this.ds.deleteData(id)
      .subscribe(res => {

        }, (err) => {
          console.log(err);

        }
      );
  }
  convertTime(date){
    return DateTimeConvertHelper.fromTimestampToDtStr(date * 1000);
  }
  saveFile(file) {
      const downloadUrl = URL.createObjectURL(file);
      window.open(downloadUrl);
  }


}
