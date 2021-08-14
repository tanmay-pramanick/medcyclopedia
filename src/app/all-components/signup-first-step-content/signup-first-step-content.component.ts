import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SendotpService } from 'src/app/all-services/sendotp.service';
import { UserdetailsService } from 'src/app/all-services/userdetails.service';

@Component({
  selector: 'app-signup-first-step-content',
  templateUrl: './signup-first-step-content.component.html',
  styleUrls: ['./signup-first-step-content.component.scss'],
})
export class SignupFirstStepContentComponent implements OnInit {

  signupForm: FormGroup;
  name: string;


  constructor(private fb: FormBuilder,
    private userDetails: UserdetailsService,
    private otp: SendotpService,
    private router: Router) {



  }

  ngOnInit() {

    this.signupForm = this.fb.group({
      first_name: ['', [Validators.required, Validators.minLength(2)]],
      last_name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', Validators.required],
      password: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern("[0-9]{10}")]],
      cpassword: ['',[ Validators.required]],
      referral: ['']
    });


  }

  get errorControl() {
    return this.signupForm.controls;
  }

  match = false;
  confirmPassword() {

    if (this.signupForm.value.password === this.signupForm.value.cpassword) {

      this.match = true;
      return false;
    }
    return true;





  }

  sendotp() {

    this.name = this.signupForm.value.first_name + " " + this.signupForm.value.last_name;
    console.log(this.name);

    this.userDetails.setName(this.name);
    this.userDetails.setMobile(this.signupForm.value.mobile);
    this.userDetails.setPassword(this.signupForm.value.password);
    this.userDetails.setEmail(this.signupForm.value.email);

    // this.otp.sendotp(this.userDetails.getMobile());


    this.router.navigate(['/signup-second-step']);



  }

}
