import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-add-quantity',
  templateUrl: './add-quantity.component.html',
  styleUrls: ['./add-quantity.component.css']
})
export class AddQuantityComponent implements OnInit {

  constructor(private vendorService:VendorService) { }

  public productArray: Product[];
  public productId:number;
  public quantity:number;

  ngOnInit() {
    this.vendorService.getAllProducts().subscribe(
      data =>this.productArray = data);
  }
  addQuantity(){
    let getSessionObj=JSON.parse(sessionStorage.getItem("setSessionObj"));
    let vendorId=getSessionObj.userId;

    console.log('Vendor Id : '+vendorId);

    console.log(this.productId+" "+this.quantity);
    this.vendorService.addQuantity(this.productId,this.quantity,vendorId).
    subscribe(data => console.log("Quantity Added"));
    alert("Quantity Added");
  }

}
