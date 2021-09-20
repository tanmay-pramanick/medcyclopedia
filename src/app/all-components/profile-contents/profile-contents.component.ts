import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/all-services/profile.service';
import { SigninService } from 'src/app/all-services/signin.service';
import { StatesService } from 'src/app/all-services/states.service';
import { CameraPermissionType, Camera, CameraResultType, CameraSource, ImageOptions } from '@capacitor/camera';
// import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { ActionSheetController, ToastController } from '@ionic/angular';
import { UtilService } from 'src/app/services/util.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoaderService } from 'src/app/all-services/loader.service';
import { environment } from 'src/environments/environment';
import { defineCustomElements } from '@ionic/pwa-elements/loader'
// const { Camera } = Plugins;
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
@Component({
  selector: 'app-profile-contents',
  templateUrl: './profile-contents.component.html',
  styleUrls: ['./profile-contents.component.scss'],
})
export class ProfileContentsComponent implements OnInit {


  userdata: any = [];
  fullname: string = "";
  f_name: string = "";
  l_name: string = "";
  mobile: string;
  homestate: string;
  gender: string;
  physical_status: string;
  cast: string;
  city: string;
  email: string;
  neet: String;
  user: any;
  token: string;
  all_states: any = [];
  uploadsUrl: any;
  // Camera
  backgroundImage : any= "";
  uploadStatus = false;
  cover: any = "";
  form_validate = true;
  constructor(private profileService: ProfileService,
    private signinService: SigninService,
    private stateservice: StatesService,
    private toastController: ToastController,
    private actionSheetController: ActionSheetController,
    public util: UtilService,
    private http: HttpClient,
    private loaderservice : LoaderService) {
      this.uploadsUrl = environment.uploadsUrl;
    }

  edit_pro: boolean = true;
  save_pro: boolean = false;

  editProButton() {


    this.onTogglenotEditMode();
    // this.edit_pro = false;
    // this.save_pro = true;

    this.edit_pro = !this.edit_pro;
    this.save_pro = !this.save_pro;

    console.log(this.f_name + " " + this.l_name + " " + this.mobile + " " + this.homestate + " " + this.gender + " " + this.cast + " " + this.city + " " + this.email + " " + this.neet);

  }

  cancleProButton() {
    // this.edit_pro = true;
    // this.save_pro = false;

    this.editProButton();
  }

  notEditMode = true;
  onTogglenotEditMode() {
    this.notEditMode = !this.notEditMode;
  }
  ngOnInit() {

    this.loaderservice.presentLoading();

    this.user = this.signinService.getCurrentUser();
    this.user.subscribe(user => {
      if (user) {
        console.log("User s this ")
        console.log(user);
        this.token = user.access_token;

        this.profileService.getProfileData(this.token)
          .subscribe(res => {
            console.log(res);

            this.loaderservice.hideLoading();
            this.userdata = res;
            console.log(this.userdata.name);
            this.fullname = this.userdata.name;
            this.f_name = this.fullname.split(" ")[0];

            console.log(this.f_name);
            this.l_name = this.fullname.split(" ")[1];
            this.mobile = this.userdata.mobile;
            this.backgroundImage = this.userdata.profile_image;
            this.homestate = this.userdata.homestate;
            this.gender = this.userdata.gender;
            this.cast = this.userdata.cast;
            this.city = this.userdata.city;
            this.physical_status = this.userdata.physical_status;
            this.email = this.userdata.email;
            this.neet = this.userdata.score;
          });
      }
      else {
        console.log("empty user", user);
      }
    })

    console.log("The token in profile is " + this.token);



    this.stateservice.getStates().subscribe((data) => {
      console.log(data);
      this.all_states = data;
    })



  }

  save() {

    console.log(this.homestate);

    this.fullname = this.f_name + " " + this.l_name;
    this.loaderservice.presentLoading();
    this.signinService.updateUser(this.fullname, this.mobile, this.homestate, this.gender, this.cast, this.city, this.physical_status, this.email, this.neet, this.token).subscribe(res => {
      console.log(res);

      this.loaderservice.hideLoading();
      this.displayToast();
      this.editProButton();

    },
      err => {
        err = err
        console.log(err);
        this.displayToastFailure();
      });


  }

  displayToast() {
    this.toastController.create({

      message: 'Saved Successfully',
      position: 'bottom',
      duration: 2000,
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

  displayToastFailure() {
    this.toastController.create({

      message: 'Profile data not saved',
      duration : 2000,
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

  // ============== Camera ==============

  async openLink() {
    const actionSheet = await this.actionSheetController.create({
      header: this.util.getString("Choose from"),
      buttons: [
        {
          text: this.util.getString("Camera"),
          icon: "camera",
          handler: () => {
            console.log("camera clicked");
            this.upload("camera");
          },
        },
        {
          text: this.util.getString("Gallery"),
          icon: "images",
          handler: () => {
            console.log("gallery clicked");
            this.upload("gallery");
          },
        },
        {
          text: this.util.getString("Cancel"),
          icon: "close",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          },
        },
      ],
    });

    await actionSheet.present();
  }

  upload(type) {

    try {
      const options: ImageOptions = {
        quality: 100,
        height: 400,
        width: 400,
        resultType: CameraResultType.DataUrl,
        // encodingType: this.camera.EncodingType.JPEG,
        // mediaType: this.camera.MediaType.PICTURE,
        correctOrientation: true,
        source:
          type === "camera"
            ? CameraSource.Camera
            : CameraSource.Photos,
      };
      Camera.getPhoto(options).then((dataUrl) => {

        this.util.show("uploading");
        const alpha = {
          mobile: localStorage.getItem("mobile"),
          img: dataUrl,
          type: "jpg",
        };
        this.uploadStatus = true;
        this.add_photo(dataUrl.dataUrl);
        

      });
    } catch (error) {
      this.util.hide();
      this.util.errorToast(this.util.getString("Something went wrong"));
    }
  }

  add_photo(dataUrl) {
    if (dataUrl) {
      //this.spinner.show();
      this.signinService.uploadPhofilephoto(this.token,dataUrl).subscribe((data: any) => {
        this.backgroundImage = data;
        this.util.hide();
        //this.spinner.hide();
        if (data && data.status === 200 && data.data) {
          //this.logo = data.data;
        }
      }, (err: any) => {
        console.log(err);
        this.util.hide();
      });
    } else {
      console.log('no');
    }
  }


  JSON_to_URLEncoded(element, key?, list?) {
    let new_list = list || [];
    if (typeof element === "object") {
      for (let idx in element) {
        this.JSON_to_URLEncoded(
          element[idx],
          key ? key + "[" + idx + "]" : idx,
          new_list
        );
      }
    } else {
      new_list.push(key + "=" + encodeURIComponent(element));
    }
    return new_list.join("&");
  }

  formValidation() {
    //    let mobileElements = document.getElementById("mobileno").querySelectorAll("[required]");
        let email : any = new String(this.email);
        let re = new RegExp("[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})");
        
        if (
          re.test(email)
        ) {
          this.form_validate = true;
        } else {
          this.form_validate = false;
        }
      }


}
