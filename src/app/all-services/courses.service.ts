import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http : HttpClient) { }

  getCourses() : Observable<object>{

    return this.http.get(`${environment.apiUrl}/courses`);
  }

  getInstituteCourses(id:any){
    return this.http.get(`${environment.apiUrl}/institute-courses/`+id);
    
  }
}
