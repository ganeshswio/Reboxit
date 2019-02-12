import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router' 

@Component({
  selector: 'app-satlogin',
  templateUrl: './satlogin.component.html',
  styleUrls: ['./satlogin.component.css']
})
export class SatloginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

onSubmit(){
  this.router.navigate(['/sat']);
}
}
