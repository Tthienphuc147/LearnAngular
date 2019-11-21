import { Component, OnInit, Input } from '@angular/core';
import { DocumentService } from 'src/app/shared/service/document.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DocumentPackage } from 'src/app/shared/model/documentpackage.model';

@Component({
  selector: 'app-form-document',
  templateUrl: './form-document.component.html',
  styleUrls: ['./form-document.component.css']
})
export class FormDocumentComponent implements OnInit {




  @Input() formReady: DocumentPackage;
  data =DocumentPackage;
  constructor(
    private ds: DocumentService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }
  onSubmit(form: DocumentPackage) {
    if (this.formReady.id === null) {
      this.ds.addData(form).subscribe(
        res => {
          this.router.navigate(['/create-form/document']);
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );
    }
  }

}
