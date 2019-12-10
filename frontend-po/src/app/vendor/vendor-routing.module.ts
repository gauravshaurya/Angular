import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorPageComponent } from './vendor-page/vendor-page.component';


const routes: Routes = [
  {path:'vendorPage',component:VendorPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
