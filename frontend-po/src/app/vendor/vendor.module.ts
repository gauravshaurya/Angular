import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { VendorPageComponent } from './vendor-page/vendor-page.component';


@NgModule({
  declarations: [VendorPageComponent],
  imports: [
    CommonModule,
    VendorRoutingModule
  ]
})
export class VendorModule { }
