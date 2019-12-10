import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';
import { SellerPageComponent } from './seller-page/seller-page.component';


@NgModule({
  declarations: [SellerPageComponent],
  imports: [
    CommonModule,
    SellerRoutingModule
  ]
})
export class SellerModule { }
