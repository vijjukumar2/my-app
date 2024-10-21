import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-detailes',
  templateUrl: './employee-detailes.component.html',
  styleUrls: ['./employee-detailes.component.css']
})
export class EmployeeDetailesComponent {
  employees = [
    { name: 'sandeep', experience: 4, package: 1200000, role: 'UIDeveloper' },
    { name: 'amar', experience: 5, package: 1300000, role: 'UIDeveloper' },
]

   name:string ="";
   experience:number = 0;
   package:number = 0;
   role:string="";
 
   create(){
      let employee ={
        name:this.name,
        experience:this.experience,
        package:this.package,
        role:this.role
      }
      this.employees.push(employee);
   }
   delete(i:number){
   {
      this.employees.splice(i,1);
    }
   }

   
   hike(){
    this.employees=this.employees.map(employee=>{
      employee.package=employee.package+20000;
      return(employee);
    });
     
   
   }  
   packageLH(){
    this.employees.sort((a,b)=>a.package-b.package);
  }
  packageHL(){
    this.employees.sort((a,b)=>a.package-b.package);
  }
  total(){
 var total=this.employees.reduce((sum,employee)=>sum+employee.package,0); 
  }
  
  
   }





