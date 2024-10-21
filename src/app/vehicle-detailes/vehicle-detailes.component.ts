import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-detailes',
  templateUrl: './vehicle-detailes.component.html',
  styleUrls: ['./vehicle-detailes.component.css']
})
export class VehicleDetailesComponent {

  public vehicle:any = {};
 constructor(public _activatedroute:ActivatedRoute,private _vehicleservice:VehicleService){
  _activatedroute.params.subscribe(
    (data:any)=>{
      console.log(data.id);
      // api call with data.id
      _vehicleservice.getvehicle(data.id).subscribe(
        (data:any)=>{
          this.vehicle=data;
        }
      )
    }
  )
 }

}
