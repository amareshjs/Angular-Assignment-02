import { Component, OnInit } from '@angular/core';
import{ProductDataService}from '../services/product-data.service';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  products:any;
  maxDate: any;

  constructor(private productData:ProductDataService) {
    
   }
   deleteData(data:any){
     if(confirm("Are you sure ...? ")) {
    this.productData.delete(data).subscribe(() => alert("Data Deleted Successfully..."));
    this.ngOnInit();
  }
    // window.location.reload();
  }

  ngOnInit(): void {
    this.productData.getData().subscribe((data)=>{
      console.log(data);
      this.products=data;
    })
  }

}
