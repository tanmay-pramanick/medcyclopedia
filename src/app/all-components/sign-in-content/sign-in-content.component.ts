import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoaderService } from 'src/app/all-services/loader.service';
import { SigninService } from 'src/app/all-services/signin.service';
import { UtilService } from 'src/app/services/util.service';
@Component({
  selector: 'app-sign-in-content',
  templateUrl: './sign-in-content.component.html',
  styleUrls: ['./sign-in-content.component.scss'],
})
export class SignInContentComponent implements OnInit {

  signinForm: FormGroup;
  token_data: any;
  access_token: string;

  user : any =[];
  

  constructor(private fb: FormBuilder,
    private router: Router,
    public util: UtilService,
    private signinuser: SigninService,
    public toastController: ToastController,
    private loaderservice : LoaderService) { }

  ngOnInit() {

    

    this.signinForm = this.fb.group({
      mobile: ['', [Validators.required, Validators.pattern("[0-9]{10}")]],
      password: ['', Validators.required]
    });

    this.user = this.signinuser.getCurrentUser();

    if (this.user) {

      
      this.user.subscribe(user => {
        if (user) {
          console.log("User s this ")
          console.log(user);
          this.access_token = user.access_token;
          this.router.navigate(['/home']);
          
        }
        else {
          console.log("empty user", user);
         
        }
      });
    }

  }

  get errorControl() {
    return this.signinForm.controls;
  }

  async signin() {
    this.util.show("Loading");
    this.signinuser.signinUser(this.signinForm.value.mobile, this.signinForm.value.password).subscribe(res => {
      console.log(res);
      this.token_data = res;
      this.access_token = this.token_data.access_token;

      if (this.token_data.access_token === undefined) {
        this.displayToast();
      } else {
        console.log(this.access_token);
        // this.signinuser.setToken(this.access_token);
      }
      this.util.hide()
      this.router.navigate(['/home']);
    },
    err => {err=err
      console.log(err);
      this.displayToast();
    });



  }

  displayToast() {
    this.toastController.create({
     
      message: 'Mobile or password invalid',
      duration : 2000,
      position: 'bottom',
      buttons: [
        {
          side: 'end',
          icon : 'close-outline',
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
