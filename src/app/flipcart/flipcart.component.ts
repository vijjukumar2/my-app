import { Component } from '@angular/core';

@Component({
  selector: 'app-flipcart',
  templateUrl: './flipcart.component.html',
  styleUrls: ['./flipcart.component.css']
})
export class FlipcartComponent {
    name:string = "";
    price:number = 0;
    rating:number =0;
    delivery:boolean = true;
    deliverydate:any ;

    products:any = [];
    submit(){
      let product = {
        name:this.name,
        price:this.price,
        rating:this.rating,
        delivery:this.delivery,
        deliverydate:this.deliverydate
      
      }

      this.products.push(product);
    }

    delete(i:number){
      this.products.splice(i,1);
    }

}
