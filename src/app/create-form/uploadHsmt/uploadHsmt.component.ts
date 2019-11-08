import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import DateTimeConvertHelper from '../../shared/datetime-convert-helper';
import { UploadService } from '../../shared/service/upload.service';

@Component({
  selector: 'app-uploadHsmt',
  templateUrl: './uploadHsmt.component.html',
  styleUrls: ['./uploadHsmt.component.css']
})
export class UploadHsmtComponent implements OnInit {
  uploadForm: FormGroup;
  filedata:any;
  filename:any;
  errorMess;
  isSubmitted:boolean;
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
      fileUpload: new FormControl()
    });
   
  }
  fileEvent(e){
      this.filedata=e.target.files[0];
      this.filename=this.filedata.name;
  }
  inputChange() {
    this.errorMess=false;
  }

  submitForm() {
    const isFile = (this.uploadForm.get('fileUpload').value) ? true : false;
    const isLinkFile = (this.uploadForm.get('link').value && this.uploadForm.get('link').value.trim()) ? true : false;
    if (!isFile &&  !isLinkFile) {
      this.errorMess = 'Vui lòng chọn file hoặc đường dẫn link đến file!';
      this.uploadForm.disable;
    }
    else{
      const packageId=1942;
      const documentName = this.uploadForm.get('editName').value;
      const version = this.uploadForm.get('version').value;
      const documentType ="7";
      const description = this.uploadForm.get('description').value;
      const date = this.uploadForm.get('date').value;
      const link = this.uploadForm.get('link').value;
      const file= this.filedata;
          this.us.upload(
            packageId,
            documentName,
            documentType,
            description, 
            date,   
            file,  
            link,
            version).subscribe(data => {
              console.log(data);
              
            });
            alert("Upload thành công");
            this.clearForm();
            
    }
      
  
   }
   deleteFileUpload() {
    this.uploadForm.get('link').enable();
  
      this.filename = null;
  }
  clearForm(){
    this.uploadForm.get('editName').setValue('');
    this.uploadForm.get('version').setValue('');
    this.uploadForm.get('description').setValue('');
    this.uploadForm.get('date').setValue('');
    this.uploadForm.get('link').setValue('');
    this.deleteFileUpload();

  }
      
    
  


}
