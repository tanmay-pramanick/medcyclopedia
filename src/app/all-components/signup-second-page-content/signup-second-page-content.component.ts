import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoaderService } from 'src/app/all-services/loader.service';
import { RegisterService } from 'src/app/all-services/register.service';
import { SendotpService } from 'src/app/all-services/sendotp.service';
import { SigninService } from 'src/app/all-services/signin.service';
import { UserdetailsService } from 'src/app/all-services/userdetails.service';

@Component({
  selector: 'app-signup-second-page-content',
  templateUrl: './signup-second-page-content.component.html',
  styleUrls: ['./signup-second-page-content.component.scss'],
})
export class SignupSecondPageContentComponent implements OnInit {

  otpForm: FormGroup;
  token_data: any;
  error: any;
  otp_object : any;
  otp_received : string;
  full_otp : string;

  constructor(private userdetails: UserdetailsService,
    private otp: SendotpService,
    private signinservice: SigninService,
    private fb: FormBuilder,
    private router: Router,
    public toastController: ToastController,
    private loaderservice : LoaderService) { }

  ngOnInit() {

    this.loaderservice.presentLoading();
    console.log(this.userdetails.getMobile());

    this.otp.sendotp(this.userdetails.getMobile()).subscribe((res) =>{
      console.log(res);
      this.loaderservice.hideLoading();
      this.otp_object = res;
      this.otp_received = this.otp_object.otp_value;
      console.log(this.otp_received);
    });

    this.otpForm = this.fb.group({
      mobile: ['', Validators.required],
      place1: ['', Validators.required],
      place2: ['', Validators.required],
      place3: ['', Validators.required],
      place4: ['', Validators.required],
      place5: ['', Validators.required],
      place6: ['', Validators.required]
    });

    // this.otpForm.forEach((x) => {
    this.otpForm.patchValue({ mobile: this.userdetails.getMobile() })
    // })
  }

  register() {

    this.full_otp = this.otpForm.value.place1+this.otpForm.value.place2+this.otpForm.value.place3+this.otpForm.value.place4+this.otpForm.value.place5+this.otpForm.value.place6;
    console.log(typeof(Number.parseInt(this.full_otp)) +" "+this.full_otp);
    console.log(typeof(this.otp_received) +" "+this.otp_received);

    if(!( this.otp_received == this.full_otp)){

      this.displayToast2();
    }
    else {
    console.log(this.userdetails.getName() + " " + this.userdetails.getMobile() + " " + this.userdetails.getPassword() + " " + this.userdetails.getEmail());

    this.signinservice.registerUser(this.userdetails.getName(), this.userdetails.getMobile(), this.userdetails.getPassword(), this.userdetails.getEmail()).subscribe(res => {
      console.log(res);
      this.token_data = res;
      // this.access_token = this.token_data.access_token;

      // if (this.token_data.access_token === undefined) {
      //   this.displayToast();
      // } else {
      //   console.log(this.access_token);
      //   // this.signinuser.setToken(this.access_token);
      // }

      this.router.navigate(['/home']);
    },
      err => {
        err = err
        console.log(err);
        this.error = err;
        console.log(this.error.error);
        console.log(this.error.error.error);

        var abc: string = this.error.error.error;
        if (abc.endsWith("'users_email_unique'")) {
          this.displayToast1();

        }
        else if(abc.endsWith("'users_mobile_unique'")){
          this.displayToast3();
        }
        else {
          this.displayToast();
        }

      });
    }

  }

  displayToast() {
    this.toastController.create({

      message: 'Registration is not done.',
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

  displayToast1() {
    this.toastController.create({

      message: 'This email is already been used',
      
      position: 'bottom',
      buttons: [
        {
          side: 'end',
          icon: 'close-outline',
          role: 'cancel',
          handler: () => {
            console.log('');
            this.router.navigate(['/signup-first-step']);
          }
        }
      ]

    }).then((toast) => {
      toast.present();
    });
  }

  displayToast2() {
    this.toastController.create({

      message: 'The OTP did not match',
      position: 'bottom',
      buttons: [
        {
          side: 'end',
          icon: 'close-outline',
          role: 'cancel',
          handler: () => {
            console.log('');
            this.otpForm.patchValue({ place1 : "",place2 : "",place3 : "",place4 : "",place5 : "",place6 : "" })

          }
        }
      ]

    }).then((toast) => {
      toast.present();
    });
  }

  displayToast3() {
    this.toastController.create({

      message: 'This mobile is already been used',
      
      position: 'bottom',
      buttons: [
        {
          side: 'end',
          icon: 'close-outline',
          role: 'cancel',
          handler: () => {
            console.log('');
            this.router.navigate(['/signup-first-step']);
          }
        }
      ]

    }).then((toast) => {
      toast.present();
    });
  }

}
