import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
public userForm:FormGroup= new FormGroup({
  name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
  age:new FormControl('',[Validators.required,Validators.min(10),Validators.max(20)]),
  phone:new FormControl('',[Validators.required,Validators.min(0),Validators.max(9)]),
  email:new FormControl('',[Validators.required,Validators.email]),
  password:new FormControl('',[Validators.required,Validators.pattern('^(?=.[a-z])(?=.[A-Z])(?=.\\d)(?=.[@$!%?&])[A-Za-z\\d@$!%?&]{8,}$')]),
  address:new FormGroup({
    city:new FormControl('',[Validators.required]),
    pin:new FormControl()
  }),
  type:new FormControl(),
  // busfee:new FormControl(),
  // hostelfee:new FormControl()

   cards:new FormArray([])
})

get cardsFormArrey(){
  return this.userForm.get('cards') as FormArray;
}

addcard(){
  this.cardsFormArrey.push(
    new FormGroup({
      number: new FormControl('',[Validators.required]),
      expiry:new FormControl(),
      cvv:new FormControl(),
    })
  )
}
delete(i:number){
 this.cardsFormArrey.removeAt(i);
}
constructor(){
  this.userForm.get('type')?.valueChanges.subscribe(
  (data:any)=>{
    if(data=='dayScholer'){
      this.userForm.addControl('busfee',new FormControl());
      this.userForm.removeControl('hostelfee');

    }
    else{
      this.userForm.addControl('hostelfee',new FormControl());
      this.userForm.removeControl('dayScholer')
    }
  }
  )
}

submit(){
  this.userForm.markAllAsTouched();
  console.log(this.userForm);
}

}

