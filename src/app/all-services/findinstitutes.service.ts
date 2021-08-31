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

  getMyInstitutions(user_id){
    return this.http.get(`${environment.apiUrl}/my-institutes/`+user_id);
  }

  addMyInstitute(user_id, institute_id) {
    return this.http.post(`${environment.apiUrl}/add-my-institute`, {user_id : user_id, institute_id : institute_id})
  }

  getAllInstitutes(title){
    return this.http.post(`${environment.apiUrl}/all-institutes`, {title : title});
  }

  getInstituteNotification(institute_id){
    return this.http.post(`${environment.apiUrl}/notifications`,{institute_id :institute_id});
  }

  getLikedInstitute(user_id, institute_id){
    return this.http.post(`${environment.apiUrl}/like-institute`, {user_id : user_id, institute_id : institute_id})
  }
}
