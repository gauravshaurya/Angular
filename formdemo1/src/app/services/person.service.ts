import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../person';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  
  constructor(private http:HttpClient) { }

  getPersonList():Observable<Person[]>{
  return this.http.get<Person[]>("http://localhost:1536/angular_frontend/");
  }

  addPerson(pobj:any):Observable<any>{
    return this.http.post<any>("http://localhost:1536/angular_frontend/addPerson/",pobj,{responseType: 'text' as 'json'});
  }
  deletePerson(pId:number):Observable<boolean>{
    return this.http.get<boolean>("http://localhost:1536/angular_frontend/deletePerson/"+pId);
  }
}
