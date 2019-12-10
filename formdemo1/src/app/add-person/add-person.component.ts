import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../services/person.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent {
  constructor(private fb:FormBuilder){}

  get personName(){
    return this.registrationForm.get('personName');
  }

    registrationForm=this.fb.group({
      personId:[''],
      personName:['',[Validators.required,Validators.minLength(4)]],
      personAge:['']
    })

}















// export class AddPersonComponent implements OnInit {
//   constructor(private personService:PersonService,private router:Router) { }
//   personObj=new Person();
//   onSubmit(){
//     this.personService.addPerson(this.personObj).subscribe(
//       data=>console.log("Added"+data)
//     );
//     location.reload();
//   } 
//   ngOnInit() {
//   }

// }
