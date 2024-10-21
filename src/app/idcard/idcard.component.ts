import { Component } from '@angular/core';
import { IdcardService } from '../idcard.service';

@Component({
  selector: 'app-idcard',
  templateUrl: './idcard.component.html',
  styleUrls: ['./idcard.component.css']
})
export class IdcardComponent {
  
//   term:string ="";
 idcards:any =[];
//  name:string="";
//  phone:string="";
//  schoolcity:string="";
//  dob:number=123;
//  Email:string="";
//  pin:string="";



  constructor(private idcardService:IdcardService ){
    idcardService.getidcard().subscribe(
      (data:any)=>{
        this.idcards=data;
      },
      (err:any)=>{
        alert('internal error');
      }
    )
  }

  // create(){
  //   let idcard={
  //     Name:this.name,
  //     phone:this.phone,
  //     DoB:this.dob,
  //     Email:this.Email,
  //     schoolcity:this.schoolcity,
  //     pin:this.pin,
      

  //   }
   
  }
  // delete(i:number){
  //   {
  //      this.idcards.splice(i,1);
  //    }
  //   }
  


  


