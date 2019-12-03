import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  departments=[
    {"id":101,"name":"Java"},
    {"id":102,"name":"Big Data"},
    {"id":103,"name":"Angular"},
    {"id":104,"name":"ReactJS"},
    {"id":105,"name":"Python"},
  ]

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onSelect(dept:any){

    this.router.navigate(['/departments',dept.id,dept.name]);
  }
}
