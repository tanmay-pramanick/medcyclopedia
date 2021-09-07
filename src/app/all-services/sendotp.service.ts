import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SendotpService {

  constructor(private http: HttpClient) { }

  sendotp(mobile){

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin:': '*' });
      let options = { headers: headers };
    return this.http.post(`${environment.apiUrl}/send-otp`, {mobile : mobile});
  }
}
