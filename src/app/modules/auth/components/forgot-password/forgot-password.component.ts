import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent{

  sendData(data:any){
      console.log(data);
      console.warn("OTP "+Math.floor(Math.random()*9999999)); 
      }
  }

