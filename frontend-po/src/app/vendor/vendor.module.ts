import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { VendorPageComponent } from './vendor-page/vendor-page.component';
import { AddQuantityComponent } from './add-quantity/add-quantity.component';
import { ViewAvailableProductsComponent } from './view-available-products/view-available-products.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [VendorPageComponent, AddQuantityComponent, ViewAvailableProductsComponent],
  imports: [
    CommonModule,
    VendorRoutingModule,
    FormsModule
  ]
})
export class VendorModule { }
