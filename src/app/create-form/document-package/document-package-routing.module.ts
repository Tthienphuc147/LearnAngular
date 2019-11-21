import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentPackageComponent } from './document-package.component';
import { ListDocumentComponent } from './list-document/list-document.component';
import { EditDocumentComponent } from './edit-document/edit-document.component';
import { AddDocumentComponent } from './add-document/add-document.component';

const routes: Routes = [
  {
    path: '',
    component: DocumentPackageComponent,
    children: [
      {
        path: '',
        component: ListDocumentComponent
      },
      {
        path: 'edit/:id',
        component: EditDocumentComponent
      },
      {
        path: 'add',
        component: AddDocumentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentPackageRoutingModule {}
