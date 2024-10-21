import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BankService } from '../bank.service';
import { debounce } from 'rxjs';

@Component({
  selector: 'app-bank-detailes',
  templateUrl: './bank-detailes.component.html',
  styleUrls: ['./bank-detailes.component.css']
})
export class BankDetailesComponent {
   public bank:any = {}
  constructor(private activatedroute:ActivatedRoute,private bankservice:BankService){
  activatedroute.params.subscribe(
    (data:any)=>{
      console.log(data.id);
      // api call
      bankservice.getbank(data.id).subscribe(
        (data:any)=>{
          this.bank=data;
        }
  )
    }
  )
 }


}
