import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
  term: string = "";
  vehicles: any = [];
  column:string ="";
  order:string = "";
  page:number =1;
  constructor(private _vehicleService: VehicleService) {
    _vehicleService.getvehicles().subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert("internal error");
      }
    )
  }

  search() {
    this._vehicleService.getFiltervehicles(this.term).subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert(err.error);
      }
    )
  }
  sort(){
    this._vehicleService.getSortedVehicles(this.column,this.order).subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert(err.error);
      }
    )
    
  }
  pagination(){
    this._vehicleService.getpagedVehicles(this.page).subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert(err.error);
      }
    )
  }

  delete(id:string){
    this._vehicleService.deleteVehicle(id).subscribe(
      (data:any)=>{
        alert("deleted succesfully");
        location.reload();
      },
      (err:any)=>{
        alert(err.error);
      }
    )
  }
}
