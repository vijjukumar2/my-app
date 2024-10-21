import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private httpclient:HttpClient) { }

  getbanks():Observable<any>{
    return this.httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals");
  }
  getbank(id:string):Observable<any>{
    return this.httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id);
  }
  getFilterbanks(term:string):Observable<any>{
    return this.httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter="+term);

  }
 
  getSortedbanks(column:string,order:string):Observable<any>{
    return this.httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortBy="+column+"&order="+order);

}

getpagedbanks(page:number):Observable<any>{
  return this.httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit=10&page="+page);

}

deleteVehicle(id:string):Observable<any>{
  return this.httpclient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id);
 }

createbank(data:any):Observable<any>{
  return this.httpclient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/principals",data)
 }
}