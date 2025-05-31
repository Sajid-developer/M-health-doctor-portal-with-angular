import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  getUserData(data:any){
    if(!data.mobile){
      console.error("Please enter mobile number?");
    }
    if(!data.password){
      console.error("Please enter any password?");
    }
    if(!data.checked){
      data.checked=false;
    }
    console.log(data);
  }
  
}
