import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SendotpService {

  constructor(private http: HttpClient) { }

  sendotp(mobile){

    console.log(mobile);
    return this.http.post(`${environment.apiUrl}/send-otp`, {mobile : mobile});
  }
}
