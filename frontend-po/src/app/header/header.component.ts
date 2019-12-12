import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  flag: boolean;
  logged: string;
  user: any;

  constructor(private router:Router) { }

  ngOnInit() {
    var getSessionObj = JSON.parse(sessionStorage.getItem("setSessionObj"));
    this.user = getSessionObj;
    console.log(getSessionObj);
    
    if (getSessionObj === null) {
      this.flag = false;
    }
    else {
      this.flag = true;
      if (getSessionObj.role == 'Buyer') {
        this.logged = 'Buyer';
      }
      else if (getSessionObj.role == 'Seller') {
        this.logged = 'Seller';
      }
      else if (getSessionObj.role == 'Vendor') {
        this.logged = 'Vendor';
      }
    }
  }
  logout(){
    this.flag=false;
    this.logged=undefined;
    sessionStorage.clear();
    this.router.navigate(['./login']);
  }
}
