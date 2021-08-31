import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FindinstitutesService } from 'src/app/all-services/findinstitutes.service';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/all-services/loader.service';
import { environment } from 'src/environments/environment';
import { SigninService } from 'src/app/all-services/signin.service';
import { ProfileService } from 'src/app/all-services/profile.service';


@Component({
  selector: 'app-institute-list-content',
  templateUrl: './institute-list-content.component.html',
  styleUrls: ['./institute-list-content.component.scss'],
})
export class InstituteListContentComponent implements OnInit {

  state_id: string;
  course_id: string;
  ownership_type: string;
  country_id: string;
  user_detail : any =[];
  user_id : string;
  access_token : any = [];
  loc: any;
  all_institutes: any;
  // institute_id: string;
  uploadsUrl: any;

  constructor(private location: Location,
    private findinsttitutesservice: FindinstitutesService,
    private loaderservice: LoaderService,
    private router: Router,
    private signinservice : SigninService,
    private profileservice : ProfileService) {

    this.uploadsUrl = environment.uploadsUrl;
  }

  ngOnInit() {


    this.loc = this.location.getState();
    console.log(this.location.getState());

    this.loaderservice.presentLoading();

    this.signinservice.getCurrentUser().subscribe(data => {
      console.log(data);
      this.access_token = data;

      this.profileservice.getProfileData(this.access_token.access_token).subscribe(res =>{
        console.log(res);
        this.user_detail = res;
        this.user_id = this.user_detail.id;
      })

    })

    this.country_id = this.loc.country_id;

    if (this.country_id === undefined) {

      this.state_id = this.loc.state_id;
      this.course_id = this.loc.course_id;
      this.ownership_type = this.loc.ownership_type;

      this.findinsttitutesservice.findInstitutes(this.state_id, this.course_id, this.ownership_type).subscribe((res) => {
        console.log(res);
        this.loaderservice.hideLoading();

        this.all_institutes = res;
      })
    }
    else {



      this.findinsttitutesservice.findInstituteCountryWise(this.country_id).subscribe(res => {
        console.log(res);
        this.loaderservice.hideLoading();

        this.all_institutes = res;
      })

    }




  }

  viewMore(institute_id: string) {
    // console.log(event.target)
    console.log(this.user_id, institute_id);
    try{
      this.findinsttitutesservice.addMyInstitute(this.user_id,institute_id).subscribe(data =>{
        console.log(data);
        this.router.navigate(['/institute-list-details'], { state: {institute_id: institute_id } });

      });
    } catch (e) {
      console.log(e);
    }
    
  }


}
