import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http:HttpClient) { }

  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:1536/Frontend_PO/viewAllProducts");
  }
  addQuantity(productId:number,quantity:number,vendorId:number):Observable<any>{
    return this.http.post<any>("http://localhost:1536/Frontend_PO/"+'addQuantity?productId='+productId
    +"&&quantity="+quantity+"&&vendorId="+vendorId,{responseType:'text' as 'json'});
  }
  viewAvailableProducts(vendorId:number):Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:1536/Frontend_PO/viewAvailableProducts?vendorId="+vendorId);
  }
}