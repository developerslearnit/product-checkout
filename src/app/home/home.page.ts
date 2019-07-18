import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  
  productPrice = 5000;
  constructor(private router:Router) {}

  payNow(){
this.router.navigateByUrl("/cardinfo");
  }

}
