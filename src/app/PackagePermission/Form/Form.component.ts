import { Component, OnInit } from '@angular/core';
import {  PPermissionService } from 'src/app/shared/service/ppermission.service';
import { StakeHolder, CustomerStakeHolder } from 'src/app/shared/model/stack-holder.model';


@Component({
  selector: 'app-Form',
  templateUrl: './Form.component.html',
  styleUrls: ['./Form.component.css']
})
export class FormComponent implements OnInit {

  keyword = 'name';
  placeholder='Tìm theo tên';
  
  listStackHolders=new Array<StakeHolder>();
  data = [];
  constructor( 
    private fs: PPermissionService
    ) { }

  ngOnInit() {
    this.getApi();
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
    this.fs.get().subscribe(res => {
      
      for(let i =0; i <res.result.length; i++) {
        
        let item= new StakeHolder(res.result[i].id,res.result[i].groupName,res.result[i].groupDesc,[]);
      
        this.listStackHolders.push(item);
    }
    
    
    });
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
  addFormArrayItemToStackHolders( index: number ) {
    const item = new StakeHolder(null,'','',[]);
    this.listStackHolders.push( item );
  
  }
  removeFormArrayItemToStackHolders( index: number ) {
    this.listStackHolders.splice( index, 1 );
  }
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



}
