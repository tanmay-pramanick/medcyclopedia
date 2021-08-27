import { Location } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { SigninService } from 'src/app/all-services/signin.service';

@Component({
  selector: 'app-forgot-password-content',
  templateUrl: './forgot-password-content.component.html',
  styleUrls: ['./forgot-password-content.component.scss'],
})
export class ForgotPasswordContentComponent implements OnInit {

  @ViewChild("otp1") private otp1: ElementRef<HTMLInputElement>;
  @ViewChild("otp2") private otp2: ElementRef;
  @ViewChild("otp3") private otp3: ElementRef;
  @ViewChild("otp4") private otp4: ElementRef;
  @ViewChild("otp5") private otp5: ElementRef;
  @ViewChild("otp6") private otp6: ElementRef;
  one: String = "";
  two: String = "";
  three: String = "";
  four: String = "";
  five: String = "";
  six: String = "";
  password: String = "";
  confirm: String = "";
  loc: any;
  otp: any;
  mobile : any;
  disable: Boolean = true;
  flag_pswrd: Boolean = true;
  forgotpasswordForm: FormGroup;
  last_four_digits : string = "";

  constructor(private location: Location,
    private toastController: ToastController,
    private fb: FormBuilder,
    private router: Router,
    private signInService : SigninService) { }

  ngOnInit() {

    this.loc = this.location.getState();
    this.otp = this.loc.otp;
    this.mobile = this.loc.mobile;
    this.last_four_digits = this.mobile.toString().substring(6, this.mobile.toString().length);
    console.log(this.last_four_digits)


  }
  _focus() {
    this.otp1.nativeElement.focus();
    return true;

  }
  // ngAfterViewInit() {
  //   this.otp1.nativeElement.focus();
  // }

  get errorControl() {
    return this.forgotpasswordForm.controls;
  }

  matchOtp() {
    const user_otp = this.one + "" + this.two + "" + this.three + "" + this.four + "" + this.five + "" + this.six;

    console.log(this.otp + "-->" + typeof (this.otp) + "    " + user_otp + "---->" + typeof (user_otp));

    if (this.otp === Number.parseInt(user_otp)) {
      console.log("equal")
      this.displayToast1();
      this.disable = false;
    } else {
      console.log("not equal");
      this.disable = true;
      
      this.displayToast2();
      setTimeout(() => {
        this.one = "";
      this.two = "";this.three = "";this.four = "";this.five = "";this.six = "";

      },1900);
      
    }

  }
  matchPassword() {

    console.log(this.password, "  ", this.confirm)

  
    if (this.password === this.confirm) {
      this.flag_pswrd = false;
      console.log("Passwords match");
      return true;

      // this.router.navigate(['/signin'])
    }
    else {
      console.log("Passwords do not match");
      this.flag_pswrd = true;

      this.displayToast3();
      return false;
    }
  }

  resetPassword(){
    if(this.matchPassword()){
      this.signInService.resetPassword(this.mobile, this.password).subscribe(data =>{
        console.log(data);
        this.router.navigate(['/signin']);
      })
    }


  }

  displayToast1() {
    this.toastController.create({

      message: 'OTP is verified',
      position: 'bottom',
      duration: 1500,
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

  displayToast2() {
    this.toastController.create({

      message: 'The OTP did not match',
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

  displayToast3() {
    this.toastController.create({

      message: 'The passwords did not match',
      position: 'bottom',
      duration: 2000,
      buttons: [
        {
          side: 'end',
          icon: 'close-outline',
          role: 'cancel',
          handler: () => {
            console.log('');
            this.one = "";
            this.two = "";
            this.three = "";
            this.four = "";
            this.five = "";
            this.six = "";
          }
        }
      ]

    }).then((toast) => {
      toast.present();
    });
  }

  _funct() {
    this.confirm = "";
    this.flag_pswrd = true;
  }

  gotoNextField(next) {
    // console.log(this.one);
    next.focus();
  }

}
