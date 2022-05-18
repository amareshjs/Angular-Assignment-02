import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ListViewComponent } from './list-view/list-view.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { WellScreenComponent } from './well-screen/well-screen.component';
import { RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

const routes: Routes = [
    {
    path:'list',
    component:ListViewComponent
    },
    {
      path:'detail/:id',
      component:ProductDetailsComponent
    },
    {
      path:'',
      component:WellScreenComponent
    },
    {
      path:'addProduct',
      component:AddProductComponent
    }
];

@NgModule({
  declarations: [
    ListViewComponent,
    ProductDetailsComponent,
    WellScreenComponent,
    AddProductComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    
  ],
  exports:[
    ListViewComponent,
    ProductDetailsComponent,
    WellScreenComponent,
    AddProductComponent

  ]
})
export class FeaturesModule { }
