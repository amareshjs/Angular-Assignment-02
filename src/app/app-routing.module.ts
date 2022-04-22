import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ListViewComponent } from './list-view/list-view.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { WellScreenComponent } from './well-screen/well-screen.component';

const routes: Routes = [
  {path:'',component:WellScreenComponent},
  {path:'list',component:ListViewComponent},
  {path:'detail/:ProductId',component:ProductDetailsComponent},
  {path:'addProduct',component:AddProductComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[WellScreenComponent,ListViewComponent,ProductDetailsComponent,AddProductComponent]
