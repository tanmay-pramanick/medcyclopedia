import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExamsService {

  constructor(private http : HttpClient) { }

  getExamsByCourseId(id) : Observable<object>{

    return this.http.get(`${environment.apiUrl}/exams/`+id);
  }

  viewExamsById(id) {

    return this.http.get(`${environment.apiUrl}/view-exam/`+id);
  }
}
