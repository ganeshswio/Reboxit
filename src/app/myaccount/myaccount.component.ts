import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {
  public UserDetails: Object;
  cart=[];
  totalamt=0;
  totalkg=0;
  cm;
  TotalQuantity=0;
  TotalPrice=0;
  PreviousOrders=[];
  constructor(private authService:AuthService) {}

  ngOnInit() 
  {
    console.log(" From My Account Page");
    console.log(JSON.parse(localStorage.getItem("user")))
    this.UserDetails = JSON.parse(localStorage.getItem("user"));
    var meh=JSON.parse(localStorage.getItem("cart"));
    // this.cm=0;
    // if(meh)
    //   for(var g in meh)
    //   {
    //     this.cm++;
    //   }
    // for(var i in meh)
    // {

    //   this.cart.push([i,meh[i][0],meh[i][1]]);
    // }
    // console.log(this.cart);

    for(var i in meh){
      this.cart.push({
        Name: i,
        Quantity: meh[i][0],
        Price: meh[i][1]
      })
      this.TotalPrice+= meh[i][1];
      this.TotalQuantity+=meh[i][0];
    }

  }
  logout()
  {
    this.authService.logout();
  }
}
