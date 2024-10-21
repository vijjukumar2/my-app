import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
     
   constructor(private _httpclient:HttpClient) { }

  getvehicles():Observable<any>{
    return this._httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction");
  }
  getvehicle(id:string):Observable<any>{
    return this._httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id);
  }


  getFiltervehicles(term:string):Observable<any>{
    return this._httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter="+term);

  }
  getSortedVehicles(column:string,order:string):Observable<any>{
  return this._httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?sortBy="+column+"&order="+order);
  }

 getpagedVehicles(page:number):Observable<any>{
  return this._httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit=10&page="+page);

 }
 deleteVehicle(id:string):Observable<any>{
  return this._httpclient.delete(" https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id);
 }

 createVehicle(data:any):Observable<any>{
  return this._httpclient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction",data)
 }

 
}


