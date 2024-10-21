import { Component } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent {
  term:string="";
  banks:any = [];
  order:string ="";
  column:string ="";
  page:number =1;
  constructor(private bankService:BankService){

    bankService.getbanks().subscribe(
      (data:any)=>{
        this.banks = data;
      },
      (err:any)=>{
        alert("internal error");
      }
    )
  }
  search(){
    this.bankService.getFilterbanks(this.term).subscribe(

      (data: any) => {
        this.banks = data;
      },
      (err: any) => {
        alert(err.error);
      }
    )
  }
  sort(){
    this.bankService.getSortedbanks(this.column,this.order).subscribe(
      (data: any) => {
        this.banks = data;
      },
      (err: any) => {
        alert(err.error);
      }
    )

  }
  pagination(){
    this.bankService.getpagedbanks(this.page).subscribe(
      (data: any) => {
        this.banks = data;
      },
      (err: any) => {
        alert(err.error);
      }
    )
  }
  delete(id:string){
    this.bankService.deleteVehicle(id).subscribe(
      (data:any)=>{
        alert("deleted succesfully");
        location.reload();
      },
      (err:any)=>{
        alert(err.error);
      }
    )
  }

}

