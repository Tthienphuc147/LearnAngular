import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import DateTimeConvertHelper from '../shared/datetime-convert-helper';
import { UploadService } from './../shared/service/upload.service';

@Component({
  selector: 'app-uploadHsmt',
  templateUrl: './uploadHsmt.component.html',
  styleUrls: ['./uploadHsmt.component.css']
})
export class UploadHsmtComponent implements OnInit {
  uploadForm: FormGroup;
  listTypeFile=[{
    id: 1,
    name: 'Bản vẽ thuyết trình'
  },
  {
    id: 2,
    name: 'BOQ'
  },
  {
    id: 3,
    name: 'Tiêu chí kỹ thuật(Specs)'
  }]
  keyword = 'name';
  constructor(
    private fb: FormBuilder,
    private us: UploadService
  ) { }

  ngOnInit() {
    this.createForm();
  }
  selectEvent(item) {
    // do something with selected item
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something when input is focused
  }
  createForm() {
    this.uploadForm = this.fb.group({
      link: new FormControl(),
      nameFile: new FormControl(),
      version: new FormControl(),
      type: new FormControl(),
      editName: new FormControl(),
      date:new FormControl(),
      description: new FormControl(),
    });
   
  }
  submitForm() {
      const packageId=1942;
      const documentName = this.uploadForm.get('editName').value;
      const version = this.uploadForm.get('version').value;
      const documentType ="7"
      const description = this.uploadForm.get('description').value;
      const date = this.uploadForm.get('date').value;
      const link = this.uploadForm.get('link').value;
      
          this.us.upload(
            packageId,
            documentName,
            documentType,
            description, 
            date,     
            link,
            version).subscribe(data => {
              console.log(data);
            }, err => {
             
            });
        }
      
    
  


}
