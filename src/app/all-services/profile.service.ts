import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  
  getProfileData(access_token) {

    console.log(access_token);
    // var headers = new Headers();
    //     headers.append('access_token', access_token);
   // const headers = { 'access_token', access_token};

   const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${access_token}`
  })
    return this.http.get(`${environment.apiUrl}/user`, {headers : headers});

  }
}
