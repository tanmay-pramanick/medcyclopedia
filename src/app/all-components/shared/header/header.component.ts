import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, Platform, ToastController } from '@ionic/angular';
import { SigninService } from 'src/app/all-services/signin.service';
import { Storage } from '@ionic/storage-angular';
import { ProfileService } from 'src/app/all-services/profile.service';
import { LoaderService } from 'src/app/all-services/loader.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {


  menu: boolean = false;
  access_token: string;
  user: any = [];
  userdata: any = [];
  name: string = "";
  firstname: string = "";
  constructor(private router: Router,
    private signInService: SigninService,
    private profileService: ProfileService,
    private loaderservice : LoaderService,
    private toastController : ToastController) { }

  menuopen() {
    this.menu = !this.menu;
  }
  menuclose() {
    this.menu = false;
  }



  logout() {

    this.signInService.logout();
    this.router.navigate(['/signin']);
  }


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
          this.loaderservice.presentLoading();
          this.profileService.getProfileData(this.access_token)
            .subscribe(res => {
              this.loaderservice.hideLoading();
              console.log(res);
              this.displayToast();
              this.userdata = res;
              this.name = this.userdata.name;
              this.firstname = this.name.split(" ")[0];
            });
        }


      });
    }

  }

  

  displayToast() {
    this.toastController.create({

      message: 'You are logged in',
      duration: 2000,
      position: 'bottom',
      buttons: [
        {
          side: 'end',
          icon: 'close-outline',
          role: 'cancel',
          handler: () => {
            console.log('');
          }
        }
      ]

    }).then((toast) => {
      toast.present();
    });
  }




}
