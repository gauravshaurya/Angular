import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyerRoutingModule } from './buyer-routing.module';
import { BuyerPageComponent } from './buyer-page/buyer-page.component';
import { CreatePoComponent } from './create-po/create-po.component';
import { FormsModule } from '@angular/forms';
import { ViewPurchaseOrdersComponent } from './view-purchase-orders/view-purchase-orders.component';


@NgModule({
  declarations: [BuyerPageComponent, CreatePoComponent, ViewPurchaseOrdersComponent],
  imports: [
    CommonModule,
    BuyerRoutingModule,
    FormsModule
  ],
  exports:[
    BuyerPageComponent,
    CreatePoComponent,
    ViewPurchaseOrdersComponent
  ]
})
export class BuyerModule { }