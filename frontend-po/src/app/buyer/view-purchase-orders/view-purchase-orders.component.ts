import { Component, OnInit } from '@angular/core';
import { BuyerService } from '../buyer.service';

@Component({
  selector: 'app-view-purchase-orders',
  templateUrl: './view-purchase-orders.component.html',
  styleUrls: ['./view-purchase-orders.component.css']
})
export class ViewPurchaseOrdersComponent implements OnInit {
  public poArray:any[];
  public poItems:any;
  show:boolean=false;
  constructor(private buyerService: BuyerService) { }
  
  ngOnInit() {
    this.buyerService.viewPurchaseOrders().subscribe(data=>
      this.poArray=data
    );
  }
  viewPoItems(poId:any){
    this.show=true;
    this.buyerService.viewPoItems(poId).subscribe(data=>
      this.poItems=data
    );
  }
}
