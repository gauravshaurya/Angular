import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';
import { Person } from '../person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  constructor(private personService:PersonService) { }

  public personList:Person[];
  ngOnInit() {
    this.personService.getPersonList().subscribe(
      data=>this.personList=data
    );
  }
  myFlag:any;
    getId(p:any){
      this.personService.deletePerson(p.personId).subscribe(
        data=>{this.myFlag=data;this.ngOnInit();}
      );
    }

}
