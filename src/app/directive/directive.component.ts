import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
   isvalid:boolean= false;
   age:number=20;
   ages:number[]=[10,20,30,40,50];
   states:string[] = ["ap","ts","tn"];

   users:any = [
    {name:'vijay',age:'20'},
    {name:'hari',age:'20'},
    {name:'rajesh',age:'20'},
    {name:'vijay',age:'20'},

   ]

   products:any=[
    {name:'pen',price:'2000',rating:'5'},
    {name:'pencil',price:'5000',rating:'3'},
    {name:'mobile',price:'6000',rating:'5'},
   
   ]

}
