import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FindinstitutesService } from 'src/app/all-services/findinstitutes.service';
import { LoaderService } from 'src/app/all-services/loader.service';
import { ProfileService } from 'src/app/all-services/profile.service';
import { SigninService } from 'src/app/all-services/signin.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-detailed-page-view-content',
  templateUrl: './detailed-page-view-content.component.html',
  styleUrls: ['./detailed-page-view-content.component.scss'],
})
export class DetailedPageViewContentComponent implements OnInit {

  my_inst: any = [];
  user_id: any = [];
  access_token: any = [];
  user_data: any = [];
  uploadsUrl: any;
  constructor(private institutionService: FindinstitutesService,
    private loader: LoaderService,
    private signinService: SigninService,
    private profileService: ProfileService,
    private router : Router
  ) {
    this.uploadsUrl = environment.uploadsUrl;
  }

  ngOnInit() {
    this.loader.presentLoading();
    this.signinService.getCurrentUser().subscribe(data => {
      if (data) {
        console.log("User s this ")
        console.log(data);
        this.access_token = data.access_token;
      }
      else {
        console.log("empty user", data);
      }
      this.profileService.getProfileData(this.access_token)
        .subscribe(res => {
          console.log(res);

          this.user_data = res;
          this.user_id = this.user_data.id;

          this.institutionService.getMyInstitutions(this.user_id).subscribe(res1 => {
            console.log(res1);
            this.loader.hideLoading();
            this.my_inst = res1;
          })


        });
    });
  }

}
