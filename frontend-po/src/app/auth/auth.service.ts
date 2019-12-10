import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(email,password):Observable<any>{
    return this.http.post<any>("http://localhost:1536/Frontend_PO/login?email="
     +email+"&&password="+password,null,{responseType:'text' as 'json'});
    }
  
  registerUser(uObj:any):Observable<any>{
   return this.http.post<any>("http://localhost:1536/Frontend_PO/user/",uObj,{responseType: 'text' as 'json'});
  }
}
