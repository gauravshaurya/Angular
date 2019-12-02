import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  citylist:any[]=[
          {
          "city":"Delhi",
          "student": [
            {
              "studentId":"101",
              "studentName":"Anuj Prasad"
            },
            {
              "studentId":"102",
              "studentName":"Himanshu Malik"
            }
          ]
        },
        {
          "city":"Agra",
          "student": [
            {
              "studentId":"103",
              "studentName":"Gourav Kumar"
            }
          ]
        },
        {
          "city":"Noida",
          "student": [
            {
              "studentId":"104",
              "studentName":"Akash Tyagi"
            },
            {
              "studentId":"105",
              "studentName":"Samanvay Jain"
            }
          ]
        }
      ]
      userName:String='';
      counter:number=0;
      counterArray:any[]=[];
      display:boolean=true;
      toggle(){
        this.counter++;
        this.counterArray.push(this.counter);
        this.display=!this.display;
      }
    }

