import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {

  private name : string;
  private mobile : string;
  private password : string;
  private email : string;
  
  constructor() { }

  
  public setName(name : string) {
    this.name = name;
  }

  public getName() : string {
    return this.name;
  }

  public setMobile(mobile : string) {
    this.mobile = mobile;
  }

  public getMobile() : string {
    return this.mobile;
  }

  public setPassword(password : string) {
    this.password = password;
  }

  public getPassword() : string {
    return this.password;
  }

  public setEmail(email : string) {
    this.email = email;
  }

  public getEmail() : string {
    return this.email;
  }
  
  
  
}
