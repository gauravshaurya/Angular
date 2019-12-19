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
    userName:['',[Validators.required]],
    phone:[''],
    email:['',[Validators.required]],
    address:this.fb.group({
      houseNumber:[''],
      address1:[''],
      address2:[''],
      city:[''],
      state:[''],
      pincode:['']
    }),
    password:['',[Validators.required,Validators.maxLength(8)]]
  });

  ngOnInit() { }

  get userName()
  {
    return this.registrationForm.get("userName");
  }
  get email()
  {
    return this.registrationForm.get("email");
  }
  get password()
  {
    return this.registrationForm.get("password");
  }

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
