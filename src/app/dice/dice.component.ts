import { Component } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent {
    
   result : number = 1; 

  
  rollDice() {
    this.result= Math.floor(Math.random() * 6) + 1; 
}
}