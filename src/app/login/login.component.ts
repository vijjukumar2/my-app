import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  public loginform:FormGroup =new FormGroup({
    email :new FormControl(),
    password :new FormControl()
  })
  constructor(private loginService:LoginService,private _router:Router){}
  login(){
    console.log(this.loginform);
    this.loginService.dologin(this.loginform.value).subscribe(
      (data:any)=>{
        console.log(data)
        alert("login success");
        // store
        sessionStorage.setItem("token",data.token);
        // go to dashboard
        this._router.navigateByUrl("/dashboard");
      },
      (err:any)=>{
        alert("invalid credentials");
      }
    )
  }
  }

