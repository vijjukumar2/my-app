import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-duplicate-user',
  templateUrl: './duplicate-user.component.html',
  styleUrls: ['./duplicate-user.component.css']
})
export class DuplicateUserComponent {
public duplicateForm:FormGroup=new FormGroup({
  name:new FormControl(),
  class:new FormControl('',[Validators.required,Validators.min(0),Validators.max(10)]),
  fathername:new FormControl(),
  email:new FormControl('',[Validators.required,Validators.email]),
  dob:new FormControl(),
  address:new FormGroup({
    addressline: new FormControl(),
    city: new FormControl(),
    state: new FormControl('',[Validators.required]),
    pincode: new FormControl()
  }),
    company: new FormGroup({
      name: new FormControl(),
      package:new FormControl('',[Validators.required,Validators.min(10),Validators.max(25)])

    }),
    type:new FormControl(),
    busfee:new FormControl(),
    hostelfee:new FormControl(),
    
  
     marks:new FormArray([])
  })

  get marksFormArrey(){
    return this.duplicateForm.get('marks') as FormArray;
  }
  
  addmarks(){
    this.marksFormArrey.push(
      new FormGroup({
        class: new FormControl(),
        year:new FormControl(),
        percentage:new FormControl('',[Validators.required,Validators.min(0),Validators.max(100)]),
      })
    )
  }
  constructor(){
    this.duplicateForm.get('type')?.valueChanges.subscribe(
    (data:any)=>{
      if(data=='dayScholer'){
        this.duplicateForm.addControl('busfee',new FormControl());
        this.duplicateForm.removeControl('hostelfee');
  
      }
      else{
        this.duplicateForm.addControl('hostelfee',new FormControl());
        this.duplicateForm.removeControl('dayScholer')
      }
    }
    )
  }

  
submit(){
  console.log(this.duplicateForm);
  this.duplicateForm.markAllAsTouched();
}
  
}


  




