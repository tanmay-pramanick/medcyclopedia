import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FindinstitutesService {

  constructor(private http: HttpClient) { }

  findInstitutes(stateId, courseId, ownershipType){

    console.log(stateId+" "+courseId+" "+ownershipType);
    return this.http.post(`${environment.apiUrl}/institutes`, {state_id:stateId, course_id:courseId, ownership_type:ownershipType});
  }

  findInstituteById(institute_id) : Observable<object>{

    return this.http.get(`${environment.apiUrl}/institute/`+institute_id);
  }

  findInstituteCountryWise(country_id){

    return this.http.get(`${environment.apiUrl}/institutes-countrywise/`+country_id);
  }
}
