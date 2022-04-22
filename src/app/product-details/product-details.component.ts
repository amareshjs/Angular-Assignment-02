import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDataService } from '../services/product-data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  ProductId:any;
  product:any;

  constructor(
    private route:ActivatedRoute,
    private ProductData:ProductDataService
  ) {
    
    // ProductData.getOne(this.ProductId);
  }

  ngOnInit(): void {
    this.ProductId=this.route.snapshot.params['ProductId'];
    // this.ProductData.getOne(this.ProductId);
    this.ProductData.getOne(this.ProductId).subscribe((data)=>{
      console.log(data);
      this.product=data;
      // console.log(this.product);
    })
  }
  

}
