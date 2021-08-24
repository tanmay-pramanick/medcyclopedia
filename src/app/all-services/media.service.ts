import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private http : HttpClient) { }

  getMedia() {
    return this.http.get(`${environment.apiUrl}/media`);
  }
}
