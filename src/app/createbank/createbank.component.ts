import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-createbank',
  templateUrl: './createbank.component.html',
  styleUrls: ['./createbank.component.css']
})
export class CreatebankComponent {

  public bankForm:FormGroup =new FormGroup({
    bank : new FormControl(), 
    account_name: new FormControl(),
    
    available_balance:new FormControl(),
    account_number:new FormControl(),
    city:new FormControl(),
    profie_picture:new FormControl()



  });

  constructor(private bankService:BankService){}
  submit(){
    console.log(this.bankForm.value);
    this.bankService.createbank(this.bankForm.value).subscribe(
      (data:any)=>{
        alert("created successfully");
      },
      (err:any)=>{
        alert(err.error);
      }
    )
  }
 
   }

 


