import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  private departmentId:number;
  private departmentName:string;

  constructor(private activatedRouterObj:ActivatedRoute) { }

  ngOnInit() {
    let id=parseInt(this.activatedRouterObj.snapshot.paramMap.get('deptId'));
    let name=this.activatedRouterObj.snapshot.paramMap.get('deptName');
    this.departmentId=id;
    this.departmentName=name;
  }

}
