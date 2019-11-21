import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentPackageRoutingModule } from './document-package-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddDocumentComponent } from './add-document/add-document.component';
import { EditDocumentComponent } from './edit-document/edit-document.component';
import { ListDocumentComponent } from './list-document/list-document.component';
import { FormDocumentComponent } from './form-document/form-document.component';
import { DocumentPackageComponent } from './document-package.component';
import { DocumentService } from 'src/app/shared/service/document.service';


@NgModule({
  declarations: [

  AddDocumentComponent,

  EditDocumentComponent,

  ListDocumentComponent,

  FormDocumentComponent,

  DocumentPackageComponent],
  imports: [
    CommonModule,
    SharedModule,
    DocumentPackageRoutingModule
  ],
  providers: [
    DocumentService
]
})
export class DocumentPackageModule { }
