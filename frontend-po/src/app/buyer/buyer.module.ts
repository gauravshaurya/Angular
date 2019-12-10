import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyerRoutingModule } from './buyer-routing.module';
import { BuyerPageComponent } from './buyer-page/buyer-page.component';
import { CreatePoComponent } from './create-po/create-po.component';


@NgModule({
  declarations: [BuyerPageComponent, CreatePoComponent],
  imports: [
    CommonModule,
    BuyerRoutingModule
  ]
})
export class BuyerModule { }
