import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddProductComponent } from './add-product/add-product.component';
import { SellerRoutingModule } from './seller-routing.module';
import { SellerPageComponent } from './seller-page/seller-page.component';


@NgModule({
  declarations: [SellerPageComponent, AddProductComponent],
  imports: [
    CommonModule,
    SellerRoutingModule
  ],
  exports:[SellerPageComponent]
})
export class SellerModule { }
