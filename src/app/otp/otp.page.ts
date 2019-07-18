import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {
  pin: string = '';
  starredPin: string = '';



  constructor() { }

  ngOnInit() {
  }

  input(val) {
    if (this.starredPin.length < 4) {
      this.pin += val;
      this.starredPin += this.get_starred(val.toString());
    }


  }

  backspace() {
    // If at least one number exists
    if (this.starredPin.length > 0) {
      this.starredPin = this.starredPin.substring(0, this.starredPin.length - 1);
      this.pin = this.pin.substring(0, this.pin.length - 1);
      
    }
  }

  get_starred(str) {
    return str.replace(str, "*");
  }

  confirmPin() {
    console.log(this.pin);
  }

}
