import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {


    radius:number=0;

    PI:number=22/7;


    result : number = 0;

    area(){
      this.result = this.PI*this.radius*this.radius;
    }

    perimeter(){
      this.result = this.PI*this.radius;
    }
  

}
