import { Component, OnInit } from '@angular/core';
import { PPermissionService } from 'src/app/shared/service/ppermission.service';
import { StakeHolder, CustomerStakeHolder } from 'src/app/shared/model/stack-holder.model';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { PackageService } from 'src/app/shared/service/package.service';
import { Data } from './../../shared/model/data.model';


@Component({
  selector: 'app-Form',
  templateUrl: './Form.component.html',
  styleUrls: ['./Form.component.css']
})
export class FormComponent implements OnInit {

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
    console.log(this.permissionForm.controls['items'].controls);


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
    alert(JSON.stringify(this.permissionForm.value))
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
        const stakeHolderFormArray = this.permissionForm.get('items') as FormArray;
        stakeHolderFormArray.push(this.stakeHolder(item));
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
    const stakeHolderFormArray = this.permissionForm.get('items') as FormArray;
    const searchFormArray = stakeHolderFormArray.at(index).get('customers') as FormArray;
    searchFormArray.push(this.customer);
  }







}
