import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyerPageComponent } from './buyer-page/buyer-page.component';
import { CreatePoComponent } from './create-po/create-po.component';
import { ViewPurchaseOrdersComponent } from './view-purchase-orders/view-purchase-orders.component';


const routes: Routes = [
  {path:'',component:BuyerPageComponent},
  {path:'createPurchaseOrder',component:CreatePoComponent},
  {path:'viewPurchaseOrders',component:ViewPurchaseOrdersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyerRoutingModule { }
