import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeArray:any=[
    {
      'employeeName':'Gourav Kumar',
      'employeeSalary':27000,
      'gender':'Male',
      'employeeDOB':new Date(1995,11,8)
      },
    {
      'employeeName':'Himanshu Malik ',
      'employeeSalary':27000,
      'gender':'Male',
      'employeeDOB':new Date(1996,12,8)
      },
    {
      'employeeName':'Samanvay Jain',
      'employeeSalary':27000,
      'gender':'Male',
      'employeeDOB':new Date(1997,12,8)
      },
    {
      'employeeName':'Dhairya gautam ',
      'employeeSalary':27000,
      'gender':'Female',
      'employeeDOB':new Date(1996,12,8)
      },
    {
      'employeeName':'Karnika Agarwal',
      'employeeSalary':27000,
      'gender':'Female',
      'employeeDOB':new Date(1997,12,8)
      }
    ]

  constructor() { }

  ngOnInit() {
  }

}
