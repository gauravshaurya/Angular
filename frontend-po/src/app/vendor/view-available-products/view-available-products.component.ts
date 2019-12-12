import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-view-available-products',
  templateUrl: './view-available-products.component.html',
  styleUrls: ['./view-available-products.component.css']
})
export class ViewAvailableProductsComponent implements OnInit {

  public vendorProducts:any;

  constructor(private vendorService:VendorService) { }
  ngOnInit(): void {
    let getSessionObj=JSON.parse(sessionStorage.getItem("setSessionObj"));
    let vendorId=getSessionObj.userId;

    this.vendorService.viewAvailableProducts(vendorId).subscribe(
      data =>{
        this.vendorProducts = data;
      console.log(this.vendorProducts);})
  }
}
