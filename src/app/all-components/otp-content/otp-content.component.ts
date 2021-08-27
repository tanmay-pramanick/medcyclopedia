import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { SendotpService } from 'src/app/all-services/sendotp.service';

@Component({
  selector: 'app-otp-content',
  templateUrl: './otp-content.component.html',
  styleUrls: ['./otp-content.component.scss'],
})
export class OtpContentComponent implements OnInit {

  mobile : String = "";
  otp_value : any;

  constructor(private sendOtp : SendotpService,
    private router : Router,
    private toastController : ToastController) { }

  ngOnInit() {}

  getOtp(){

    if(this.mobile.toString().match("[0-9]{10}") && this.mobile.toString().length === 10){ 
    try{
      this.sendOtp.sendotp(this.mobile).subscribe(data =>{
        console.log(data);
        this.otp_value = data
        this.router.navigate(['/forgot-password'], {state : {otp : this.otp_value.otp_value, mobile : this.mobile}});
      })
      
    }catch(err){
      console.log(err);
    }
  } else{
    this.displayToast()
  }
    

  }

  displayToast() {
    this.toastController.create({

      message: 'Mobile number is not valid',
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

}
