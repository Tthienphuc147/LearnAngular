import { Component, OnInit } from '@angular/core';
import { DocumentPackage } from 'src/app/shared/model/documentpackage.model';
import { DocumentService } from 'src/app/shared/service/document.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LocationPackage } from 'src/app/shared/model/locationpackage.model';
import DateTimeConvertHelper from 'src/app/shared/datetime-convert-helper';

@Component( {
  selector: 'app-edit-document',
  templateUrl: './edit-document.component.html',
  styleUrls: ['./edit-document.component.css']
} )
export class EditDocumentComponent implements OnInit {
  data: DocumentPackage;
  constructor (
    private ds: DocumentService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getDetailDocument( this.route.snapshot.params['id'] );
  }
  getDetailDocument( idDoc ) {
    this.ds.getDetailData( idDoc ).subscribe( res => {
      this.data = new DocumentPackage(
        res.id,
        res.name,
        res.file,
        res.link,
        res.version,
        this.convertTime( res.dateupload ),
        res.description
      );
    } );
  }
  convertTime( date ) {
    return DateTimeConvertHelper.fromTimestampToDtObject( date * 1000 );
  }
  
}
