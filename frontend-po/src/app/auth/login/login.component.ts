import { Component} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private fb:FormBuilder,private authService:AuthService, private router:Router) { }
 
  ngOnInit() {
  }
 
  loginForm=this.fb.group({
    email:[''],
    password:['']
  });
 
  get email(){
  return this.loginForm.get('email');
  }
 
  get password(){
  return this.loginForm.get('password');
  }
 
  loginFormSubmit(){
  console.log(this.loginForm.value);
  this.authService.login(this.loginForm.value.email,this.loginForm.value.password).subscribe(
    data=>{
      let uObj=data;
      sessionStorage.setItem("setSessionObj", JSON.stringify(uObj));
      console.log(data.role);
      alert("Welcome"+" "+uObj.role+" "+uObj.userName);
      if(uObj.role == 'Buyer'){
        this.router.navigate(['./buyerPage'])
      }
      else if(uObj.role == 'Seller'){
        this.router.navigate(['./sellerPage'])
      }
      else if(uObj.role == 'Vendor'){
        this.router.navigate(['./vendorPage'])
      }
    },
    error=>{
      alert("Email or Password is incorrect");
    }
  );
  }
}
