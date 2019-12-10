import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { IEmployee } from '../IEmployee';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public empList:IEmployee[];
  constructor(private empService:EmployeeService) { }

  ngOnInit() {
    this.empService.getEmpData().subscribe(
      data=>this.empList=data
    );

  }
}
