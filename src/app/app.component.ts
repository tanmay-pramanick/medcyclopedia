import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SigninService } from './all-services/signin.service';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private signinservice : SigninService,
    private router : Router,
    private storage: Storage) {}
  menu: boolean = false;

  token_data : any =[];
  menuopen(){
    this.menu = !this.menu;
  }
  menuclose(){
    this.menu = false;
  }

  ngOnInit() {

    this.storage.get("access_token").then(data => {
      if (data) {
        // this.user.next(data);
        console.log("In the access token part "+data)
        
        this.signinservice.getCurrentUser().subscribe(data =>{
          this.token_data = data;
          console.log(this.token_data);
          if(this.token_data === null){
            this.router.navigate(['/signin']);
          }
        });
      }
    })


    
    
  }

}
