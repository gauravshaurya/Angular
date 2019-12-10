import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyerPageComponent } from './buyer-page/buyer-page.component';
import { CreatePoComponent } from './create-po/create-po.component';


const routes: Routes = [
  {path:'buyerPage',component:BuyerPageComponent},
  {path:'createPo',component:CreatePoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyerRoutingModule { }
