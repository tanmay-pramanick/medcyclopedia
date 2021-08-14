import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { switchMap, tap, map} from 'rxjs/operators';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';


const JWT_KEY = 'access_token';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  token : string;
  _storage: Storage;

  private user = new BehaviorSubject(null);

  constructor(private http : HttpClient, 
              private storage: Storage, private plt: Platform
              ) {
              
    this.init();
    this.plt.ready().then(() => {
      this.storage.get("access_token").then(data => {
        if (data) {
          // this.user.next(data);
          console.log("In the access token part "+data)
        }
      })
    })
   }

   async init() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    // await this.storage.create();

    const storage = await this.storage.create();
    this._storage = storage;
  }

  signinUser(mobile, password) {

    return this.http.post(`${environment.apiUrl}/login`, {mobile:mobile,password:password}).pipe(
      switchMap(data => {
        return from(this.storage.set(JWT_KEY, data));
      }),
      tap(data => {
        this.user.next(data);
      })
    );
    // .pipe(
    //   map((token) => {
        
    //     this.storage.set('access_token',token);
        
    //   })
    // );
  }

  registerUser(name, mobile, password, email) {

    return this.http.post(`${environment.apiUrl}/signup`, { name: name, mobile: mobile, password: password, email: email }).pipe(
      switchMap(data => {
        return from(this.storage.set(JWT_KEY, data));
      }),
      tap(data => {
        this.user.next(data);
      })
    );
  }

  getCurrentUser() {
    return this.user.asObservable();
  }

  updateUser(name, mobile, homestate, gender, cast, city, physical_status, email, neet, access_token){

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access_token}`
    })

    return this.http.put(`${environment.apiUrl}/updateprofile`,
      {name: name, mobile:mobile, homestate:homestate, gender : gender, cast: cast, city:city, physical_status:physical_status, email:email, score:neet}, {headers: headers});

  }

  
  // public setToken(token : string) {
  //   this.token = token;
  // }
  
  // public getToken() : string {
  //   return this.token;
  // }

  logout() {
    this.storage.remove(JWT_KEY).then(() => {
      this.user.next(null);
    });
  }
  
}
