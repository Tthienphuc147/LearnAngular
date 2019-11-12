import { Component, OnInit } from '@angular/core';
import {  PPermissionService } from 'src/app/shared/service/ppermission.service';
import { StakeHolder, CustomerStakeHolder } from 'src/app/shared/model/stack-holder.model';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { PackageService } from 'src/app/shared/service/package.service';


@Component({
  selector: 'app-Form',
  templateUrl: './Form.component.html',
  styleUrls: ['./Form.component.css']
})
export class FormComponent implements OnInit {

  keyword = 'name';
  placeholder='Tìm theo tên';
  permissionForm: FormGroup;
  
  listStackHolders=new Array<StakeHolder>();
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
    this.fs.getSearch().subscribe(res=>{
      for(let i =0; i <res.result.items.length; i++) {
        let item = {
            id : res.result.items[i].id, 
            name: res.result.items[i].customerName,
        }
        this.data.push(item);
        
    }
    })

  }
  // addFormArrayItemToStackHolders( index: number ) {
  //   const item = new StakeHolder(null,'','',[]);
  //   this.listStackHolders.push( item );
  
  // }
  
  // addFormItem( groupId:number ) {
  //   // this.listStackHolders.forEach( item => {
  //   //   if ( item.id === groupId ) {
  //   //     const obj = new CustomerStakeHolder();
  //   //     obj.customerName = '';
  //   //     obj.customerId = null;
  //   //     item.customers.push( obj );
  //   //   }
  //   // } );
  //   const obj = new CustomerStakeHolder();
  //       obj.customerName = '';
  //       obj.customerId = null;
  //       this.data.push(obj);

  // }
  onSubmit() {
    alert(JSON.stringify(this.permissionForm.value))
  }


  createForm(){
    this.fs.get().subscribe(res => {
      
      for(let i =0; i <res.result.length; i++) {
        
        let item= new StakeHolder();
        item.groupDesc=res.result[i].groupDesc;
        item.id=res.result[i].id;
        item.groupName=res.result[i].groupName;
        item.customers=[];
        this.listStackHolders.push(item);
        this.permissionForm=this.fb.group({
          items: this.fb.array(this.listStackHolders.map(data=>this.initItem(data)))
        });
    }
    
    
    
    });
  }
  initItem(data): FormGroup {
  
    return this.fb.group({
      groupDesc:new FormControl(data.groupDesc)
    }

    );
  }
  createItem(): FormGroup {
  
    return this.fb.group({
      groupDesc:new FormControl('')
    }

    );
  }
  addItem(): void {
    this.items = this.permissionForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }
  removeItem( index: number ) {
    this.items = this.permissionForm.get('items') as FormArray;
    this.items.removeAt(index);
  }




}
