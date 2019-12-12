import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';

const routes: Routes = [
  {path:'buyerPage',loadChildren:'./buyer/buyer.module#BuyerModule'},
  {path:'sellerPage',loadChildren:'./seller/seller.module#sellerModule'},
  {path:'vendorPage',loadChildren:'./vendor/vendor.module#VendorModule'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[
  HeaderComponent,
  FooterComponent,
  BannerComponent
];