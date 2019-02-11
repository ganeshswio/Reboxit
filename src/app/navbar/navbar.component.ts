import { Component, OnInit } from '@angular/core';
import { app } from 'firebase';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from "rxjs";



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public user: Observable<firebase.User>;
  

  public userDetails: Boolean;
  constructor(private authService:AuthService,) {
  
  }
    
   ngOnInit() {
    var vm = this;
    setTimeout(function(){
      if(vm.authService.isLoggedIn()){
        vm.userDetails = true;
      }else{
        vm.userDetails = false;
      }
    }, 1000);
  }
  logout()
  {
    this.authService.logout();
  }


}
