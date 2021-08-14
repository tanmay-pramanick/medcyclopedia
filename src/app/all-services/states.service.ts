import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatesService {

  constructor(private http:HttpClient) { }

  getStates():Observable<object>{

    return this.http.get(`${environment.apiUrl}/states`);
  }
}
