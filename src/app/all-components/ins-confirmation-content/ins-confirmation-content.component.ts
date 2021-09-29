import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/all-services/profile.service';
import { SigninService } from 'src/app/all-services/signin.service';

@Component({
  selector: 'app-ins-confirmation-content',
  templateUrl: './ins-confirmation-content.component.html',
  styleUrls: ['./ins-confirmation-content.component.scss'],
})
export class InsConfirmationContentComponent implements OnInit {
  access_token: string;
  user: any = [];
  userdata: any = [];
  name: string = "";
  firstname: string = "";
  constructor(private signInService: SigninService,private profileService: ProfileService,) { }

  ngOnInit() {



    this.user = this.signInService.getCurrentUser();

    if (this.user) {

      
      this.user.subscribe(user => {
        if (user) {
          console.log("User s this ")
          console.log(user);
          this.access_token = user.access_token;
        }
        else {
          console.log("empty user", user);
        }

        if (user) {
          //this.loaderservice.presentLoading();
          this.profileService.getProfileData(this.access_token)
            .subscribe(res => {
             // this.loaderservice.hideLoading();
              console.log(res);
              //this.displayToast();
              this.userdata = res;
              this.name = this.userdata.name;
              this.firstname = this.name.split(" ")[0];
            });
        }


      });
    }

  }

}
