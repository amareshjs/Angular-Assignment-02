import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductDataService } from '../../services/product-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  products:any;
  maxDate: any;
  alphNumPattern = "^[a-zA-Z0-9]*";
  floatNumPattern = "[-+]?[0-9]*\.?[0-9]*";
  numPattern = "^[0-9]*$";
  router:any;
  status:any;
  
  
  


  constructor(private productData:ProductDataService,private route:Router) {
    productData.getData().subscribe((data)=>{
      // console.log(data);
      this.products=data;
    })
   }
  //  getId(){
  //   console.log("jaty aat");
  //   console.log();
    
  //  }

  ngOnInit(): void {
    this.disableFutureDate();
    // this.getId();
    
  }




  addProduct=new FormGroup({
    ProductId:new FormControl('',[Validators.required,Validators.pattern(this.alphNumPattern)]),
    ProductName:new FormControl('',[Validators.required,Validators.maxLength(30)]),
    Category:new FormControl('',[Validators.required]),
    Price:new FormControl('',[Validators.required,Validators.pattern(this.floatNumPattern)]),
    SerialNumber:new FormControl('',[Validators.required,Validators.pattern(this.alphNumPattern)]),
    ReleaseDate:new FormControl('',[Validators.required]),
    StockUnit:new FormControl('',[Validators.required,Validators.pattern(this.numPattern)]),
    Discription:new FormControl('',[Validators.required,Validators.maxLength(150)]),

  });

  get ProductId(){
    return this.addProduct.get('ProductId');
  }
  get ProductName(){
    return this.addProduct.get('ProductName');
  }
  get Category(){
    return this.addProduct.get('Category');
  }
  get Price(){
    return this.addProduct.get('Price');
  }
  get SerialNumber(){
    return this.addProduct.get('SerialNumber');
  }
  get StockUnit(){
    return this.addProduct.get('StockUnit');
  }
  get Discription(){
    return this.addProduct.get('Discription');
  }
  get ReleaseDate(){
    return this.addProduct.get('ReleaseDate');
  }
  

  submit(data:any){
    console.log(data);
    this.productData.postData(data).subscribe((result: any)=>{
      alert("Data Added Successfully");
      this.route.navigate(['/feature/list']);
    })
  }
  

  //disable future dates
  disableFutureDate() {
    var date: any = new Date();
    var todayDate: any = date.getDate();
    var month: any = date.getMonth() + 1;
    var year: any = date.getFullYear();
    if (todayDate < 10) {
      todayDate = '0' + todayDate;
    }
    if (month < 10) {
      month = '0' + month;
    }
    this.maxDate = year + '-' + month + '-' + todayDate;
    console.log(this.maxDate);
  }


}
