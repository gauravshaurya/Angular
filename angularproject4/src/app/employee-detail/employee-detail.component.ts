import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public empList=[];
  constructor(private empService:EmployeeService) { }

  ngOnInit() {
    this.empService.getEmpData().subscribe(
      data=>this.empList=data
    );
  }
}
