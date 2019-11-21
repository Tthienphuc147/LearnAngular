import { Component, OnInit, Input } from '@angular/core';
import { DocumentService } from 'src/app/shared/service/document.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DocumentPackage } from 'src/app/shared/model/documentpackage.model';
import DateTimeConvertHelper from 'src/app/shared/datetime-convert-helper';

@Component( {
  selector: 'app-form-document',
  templateUrl: './form-document.component.html',
  styleUrls: ['./form-document.component.css']
} )
export class FormDocumentComponent implements OnInit {
  @Input() formReady: DocumentPackage;
  data = DocumentPackage;
  constructor (
    private ds: DocumentService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    console.log( 'this.input', this.formReady );
  }
  fileEvent( e ) {
    this.formReady.file = e.target.files[0];
  }
  saveFile() {
    const downloadUrl = URL.createObjectURL( this.formReady.file );
    window.open( downloadUrl );
  }

  onSubmit( form: DocumentPackage ) {
    this.saveFile();
    // if ( this.formReady.id === null ) {
    //   form.dateupload = this.convertTime( form.dateupload );
    //   this.ds.addData( form ).subscribe(
    //     res => {
    //       this.router.navigate( ['/create-form/document-package'] );
    //       console.log( res );
    //     },
    //     err => {
    //       console.log( err );
    //     }
    //   );
    // } else {
    //   form.dateupload = this.convertTime( form.dateupload );
    //   this.ds.updateData( this.formReady.id, form ).subscribe(
    //     res => {

    //       this.router.navigate( ['/create-form/document-package'] );
    //       console.log( res );

    //     },
    //     err => {
    //       console.log( err );
    //     }
    //   );
    // }
  }
  convertTime( date ) {
    return DateTimeConvertHelper.fromDtObjectToSecon( date );
  }


}
