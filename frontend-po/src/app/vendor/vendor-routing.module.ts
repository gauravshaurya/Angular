import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorPageComponent } from './vendor-page/vendor-page.component';
import { AddQuantityComponent } from './add-quantity/add-quantity.component';
import { ViewAvailableProductsComponent } from './view-available-products/view-available-products.component';


const routes: Routes = [
  {path:'vendorPage',component:VendorPageComponent},
  {path:'viewAvailableProducts',component:ViewAvailableProductsComponent},
  {path:'addQuantity',component:AddQuantityComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
