import { Component, OnInit } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-employee',
  template: `
    <div class="container" align="center">
    <h1 align="center">Employees List</h1>
    <br>
    List to be filtered on : 
      <input type="text" [(ngModel)]="test"/>
    <br><br>
    <table class="table-bordered">
      <tr>
      <th>Employee Name</th>
      <th>Reverse Employee Name</th>
      <th>Employee Salary</th>
      <th>Employee Gender</th>
      <th>Employee DOB</th>
      </tr>

      <tr *ngFor="let e of employeeArray|filter:test">
        <td>{{e.employeeName|gender:e.gender}}</td>
        <td>{{e.employeeName|reverse}}</td>
        <td>{{e.employeeSalary}}</td>
        <td>{{e.gender}}</td>
        <td>{{e.employeeDOB | date}}</td>
      </tr>
    </table>
    </div>
    <br>
    <div>
    Enter the number : 
    <input [(ngModel)]="x"/>
    <br>
    Boost Factor : 
    <input [(ngModel)]="y"/>
    <br>
    <br>
    Boosted Number: {{x | booster:y:z}}
    </div>


  `,
  styles: []
})
export class EmployeeComponent implements OnInit {

  x:number;
  y:number;
  
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
