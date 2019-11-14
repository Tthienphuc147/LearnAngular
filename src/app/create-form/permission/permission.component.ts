import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';
import { StakeHolder } from 'src/app/shared/model/stack-holder.model';
import { PPermissionService } from 'src/app/shared/service/ppermission.service';
import { PackageService } from 'src/app/shared/service/package.service';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.css']
})
export class PermissionComponent implements OnInit {
  keyword = 'name';
  placeholder = 'Tìm theo tên';
  permissionForm: FormGroup;

  listStackHolders = new Array<StakeHolder>();
  data = [];
  items: FormArray;
  constructor(
    private fs: PPermissionService,
    private fb: FormBuilder,
    private ps: PackageService
  ) { }

  ngOnInit() {
    this.getApi();
    this.createForm();
    this.loadForm();



  }
  get formData() { return <FormArray>this.permissionForm.get('items'); }
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
  getApi() {
    this.fs.getSearch().subscribe(res => {
      for (let i = 0; i < res.result.items.length; i++) {
        let item = {
          id: res.result.items[i].id,
          name: res.result.items[i].customerName,
        }
        this.data.push(item);

      }
    })

  }

  onSubmit() {

   
    // this.fs.updateStakeHolders( list ).subscribe( data => {
    //   alert( 'Cập nhật các bên liên quan thành công!' );
    // }, err => {
      
    //   alert( 'Cập nhật các bên liên quan thất bại!' );
    // } );
  }


  createForm() {

    this.permissionForm = this.fb.group({
      items: this.fb.array([])
    });
  }

  createItem(): FormGroup {

    return this.fb.group({
      id: new FormControl(''),
      groupName: new FormControl(''),
      groupDesc: new FormControl(''),
      customers: this.fb.array([
      ]),

    }

    );
  }
  addItem(): void {
    this.items = this.permissionForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }
  removeItem(index: number) {
    this.items = this.permissionForm.get('items') as FormArray;
    this.items.removeAt(index);
  }
  loadForm() {
    //create lines array first
    this.fs.get().subscribe(res => {

      console.log(res.result);
      for (let i = 0; i < res.result.length; i++) {

        const item = new StakeHolder();
        item.groupDesc = res.result[i].groupDesc;
        item.id = res.result[i].id;
        item.groupName = res.result[i].groupName;
        item.customers = [];
        this.listStackHolders.push(item);
        const stakeHolderFormArray = this.permissionForm.get('items') as FormArray;
        stakeHolderFormArray.push(this.stakeHolder(item));
        if (!res.result[i].customers.length) {
          res.result[i].customers.push({
            id: '',
            name: '',
          })
          
        }
        for (let j = 0; j < res.result[i].customers.length; j++) {
          const searchFormArray = stakeHolderFormArray.at(i).get('customers') as FormArray;
          searchFormArray.push(this.customer);
        }

      }

      this.permissionForm.patchValue(res.result);
    });
  }
  stakeHolder(data): FormGroup {
    return this.fb.group({
      id: data.id,
      groupName: data.groupName,
      groupDesc: data.groupDesc,
      customers: this.fb.array([
      ]),
    })


  }
  get customer(): FormGroup {
    return this.fb.group({
      id: '',
      name: '',
    });
  }
  addFormItem(index) {
    
    ((this.permissionForm.get('items') as FormArray).controls[index].get('customers') as FormArray).push(this.customer);
    console.log(this.permissionForm.get('items') );
      
    
  }
  removeFormItem(index,k){
    ((this.permissionForm.get('items') as FormArray).controls[index].get('customers') as FormArray).removeAt(k);
  }


}
