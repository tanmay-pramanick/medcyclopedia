import { Injectable } from '@angular/core';
import {environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  createOrder(params : any){


    return this.http.post(`${environment.apiUrl}/booking`,{date:params.date, time:params.time, media:params.media,order_id:params.order_id,language:params.language,payment_id:params.payment_id,payment_status:params.payment_status});
  }


}
