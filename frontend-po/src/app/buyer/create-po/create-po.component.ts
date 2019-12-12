import { Component, OnInit } from '@angular/core';
import { BuyerService } from '../buyer.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-create-po',
  templateUrl: './create-po.component.html',
  styleUrls: ['./create-po.component.css']
})
export class CreatePoComponent implements OnInit {
  public pro:number;
  public quantity:number;
  public productArray:Product[];

  constructor(private buyerService:BuyerService) { }

  ngOnInit() {
    this.buyerService.getAllProducts().subscribe(
      data=>this.productArray=data);
  }
  fetchProductName(pId:number){
    for(let product of this.productArray){
      if(product.productId==pId){
        return product.productName;
      }

    }
   
  }

  
  productArrayToDisplay:Product[]=[];
 
   onAdd(){
    let obj=new Product();
    obj.isSelected=false;
    obj.productId=this.pro;
    obj.productName=this.fetchProductName(this.pro);
    obj.quantity=this.quantity;

    
    this.productArrayToDisplay.push(obj);
  }
  deleteRow(){
    this.productArrayToDisplay = this.productArrayToDisplay.filter(item => item.isSelected! === false);
  }

  createPo(){

    // console.log(sessionStorage.getItem("uObj"));
     let getSessionObj=JSON.parse(sessionStorage.getItem("setSessionObj"));  
     let uId=getSessionObj.userId;
     console.log( this.productArrayToDisplay+" "+uId);
     this.buyerService.raisePoForm(this.productArrayToDisplay,uId).
     subscribe(data => console.log("Value Added" +this.productArrayToDisplay));
     //window.location.reload(true);
   }
}
