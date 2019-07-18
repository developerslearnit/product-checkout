import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardinfo',
  templateUrl: './cardinfo.page.html',
  styleUrls: ['./cardinfo.page.scss'],
})
export class CardinfoPage implements OnInit {
  productName = "Three lady bug";
  totalAmount = 5000;
  constructor(private router:Router) { }

  ngOnInit() {
  }

  sendPayment(){
this.router.navigateByUrl('/otp');
  }

}
