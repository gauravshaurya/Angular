import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '../IEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private serviceUrl:string="http://localhost:1536/angular_frontend/";
  constructor(private http:HttpClient) { }

  getEmpData(){
  return this.http.get<IEmployee[]>(this.serviceUrl);
}
}
