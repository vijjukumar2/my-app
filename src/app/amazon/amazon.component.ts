import { Component } from '@angular/core';
import { AmazonService } from '../amazon.service';

@Component({
  selector: 'app-amazon',
  templateUrl: './amazon.component.html',
  styleUrls: ['./amazon.component.css']
})
export class AmazonComponent {
  Aamazons:any =[];
   constructor(private _amazonService:AmazonService){
      
     _amazonService.getAmazon().subscribe(
      (data:any)=>{
        this.Aamazons=data;
      },
      (error:any)=>{
        alert("error");
      }
     );

    
   }
  }
 


