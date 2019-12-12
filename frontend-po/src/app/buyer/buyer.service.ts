import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {

  constructor(private http:HttpClient) { }

  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:1536/Frontend_PO/viewAllProducts");
  }

  getProductNameById(id:number):Observable<Product> {
    return this.http.get<Product>("http://localhost:1536/Frontend_PO/getProductById?productId="+id);
  }

  raisePoForm(poArr:any,uId:number)
  {
    return this.http.post<any>("http://localhost:1536/Frontend_PO/createPurchaseOrder/"+uId,poArr);
  }

  viewPurchaseOrders():Observable<any>{
    return this.http.get<any>("http://localhost:1536/Frontend_PO/viewPurchaseOrders/");
  }

  viewPoItems(poId:number):Observable<any> {
    return this.http.get<any>("http://localhost:1536/Frontend_PO/viewPoItems?poId="+poId);
  }
}