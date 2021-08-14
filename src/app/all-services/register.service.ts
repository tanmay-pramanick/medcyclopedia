import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { BehaviorSubject, from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { switchMap, tap, map} from 'rxjs/operators';

const JWT_KEY = 'access_token';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  token : string;
  _storage: Storage;

  private user = new BehaviorSubject(null);

  constructor(private http: HttpClient,
              private storage: Storage, private plt: Platform) {
    this.init();
    this.plt.ready().then(() => {
      this.storage.get("access_token").then(data => {
        if (data) {
          // this.user.next(data);
          console.log("In the access token part " + data)
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

  // registerUser(name, mobile, password, email) {

  //   return this.http.post(`${environment.apiUrl}/signup`, { name: name, mobile: mobile, password: password, email: email }).pipe(
  //     switchMap(data => {
  //       return from(this.storage.set(JWT_KEY, data));
  //     }),
  //     tap(data => {
  //       this.user.next(data);
  //     })
  //   );
  // }

  getCurrentUser() {
    return this.user.asObservable();
  }
}
