import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BMIComponent {

  Height:number =0;
  Weight:number=0;


  result : number = 0;

  calculate(){
    this.result =( (this.Weight)/(this.Height/100*this.Height/100));
  }

}
