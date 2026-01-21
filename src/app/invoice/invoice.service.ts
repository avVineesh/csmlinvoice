import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InvoiceResponse } from './invoice.modal';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
 url= "http://localhost:8089/";

    // url= "https://web.csml.elvicto.in/"; //For smartcity staging
    id:any;
  constructor(private http: HttpClient) { }
   getSummary(){
    return this.http.get<InvoiceResponse<any[]>>(this.url+'elw_getinvoice?id=' +this.id);
  }
}
