import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder, private authService:AuthService, private router:Router) { }

  registrationForm=this.fb.group({
    userName:[''],
    phone:[''],
    email:[''],
    address:this.fb.group({
      houseNumber:[''],
      address1:[''],
      address2:[''],
      city:[''],
      state:[''],
      pincode:['']
    }),
    password:['']
  });

  ngOnInit() { }

  registrationFormSubmit(){
    console.log(this.registrationForm.value);
    this.authService.registerUser(this.registrationForm.value).subscribe(
      data => {
      console.log("Post Request Successful", data);
    },
    error => {
      console.log("error", error);
    }
    );
    this.router.navigate(["./login"]);
  }

}
