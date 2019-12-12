import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';

import { VendorModule } from './vendor/vendor.module';
import { BuyerModule } from './buyer/buyer.module';
import { SellerModule } from './seller/seller.module';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AuthModule,
    BuyerModule,
    SellerModule,
    VendorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
