import { Component } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-higher-order',
  templateUrl: './higher-order.component.html',
  styleUrls: ['./higher-order.component.css']
})
export class HigherOrderComponent {
    category:string = "";
    term : string = "" ;
    freedelivery:boolean = true;
    price:number = 0;
    rating:number =0;
    name:string = "";
    product:any =[];
    addcart(){
      let product = {
        name:this.name,
        price:this.price,
        rating:this.rating,
        freedelivery:this.freedelivery,
        category:this.category,
        
      }

     this.products.push(product);
}
    
   
   products = [
    { name: 'mobile', category: 'gadgets', price: 10000, rating: 5 ,freedelivery:true},
    { name: 'laptop', category: 'gadgets', price: 50000, rating: 4.5,freedelivery:true },
    { name: 'tv', category: 'gadgets', price: 70000, rating: 4,freedelivery:true},
    { name: 'shirt', category: 'fashion', price: 3000, rating: 3,freedelivery:true},
    { name: 'pant', category: 'fashion', price: 4000, rating: 5,freedelivery:true },
    { name: 'saree', category: 'fashion', price: 5000, rating: 4,freedelivery:true },
    { name: 'flipflop', category: 'footware', price: 1000, rating: 3.5,freedelivery:true},
    { name: 'shoes', category: 'footware', price: 3000, rating: 4.2,freedelivery:true },
    { name: 'belt', category: 'accessories', price: 600, rating: 2.5,freedelivery:true },
    { name: 'specs', category: 'accessories', price: 999, rating: 3.8,freedelivery:true },
    { name: 'watch', category: 'accessories', price: 4000, rating:5,freedelivery:true},
   ]
  

     
    delete(i:number){
      this.products.splice(i,1);
    }
   

    search(){
      this.products = this.products.filter((product)=>product.name.includes(this.term));
   }
    
    
   categoryChange(){
    this.products = this.products.filter((product)=>product.category == this.category)
   }

   add20(){
    this.products = this.products.map(product=>{
      product.price = product.price+20;
      return product;
    })
   }

   discount(){
    this.products = this.products.map(product=>{
      product.price = product.price/2;
      return product;
    })

}
pricelh(){
  this.products.sort((a,b)=>a.price-b.price);
}

pricehl(){
  this.products.sort((a,b)=>b.price-a.price);
}

totalprice(){
  var total = this.products.reduce((sum,product)=>sum+product.price,0);
  alert("Total cart price is :"+total);

  
  }

}

