import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-studentdata',
  templateUrl: './studentdata.component.html',
  styleUrls: ['./studentdata.component.css']
})
export class StudentdataComponent {

  students:any=[];
 public loginform:FormGroup =new FormGroup({
  email :new FormControl(),
  password:new FormControl()
})

login(){
  console.log(this.loginform);
}
}
