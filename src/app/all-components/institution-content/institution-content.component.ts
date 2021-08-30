import { Component, OnInit } from '@angular/core';
import { FindinstitutesService } from 'src/app/all-services/findinstitutes.service';
import { LoaderService } from 'src/app/all-services/loader.service';
import { ProfileService } from 'src/app/all-services/profile.service';
import { SigninService } from 'src/app/all-services/signin.service';

@Component({
  selector: 'app-institution-content',
  templateUrl: './institution-content.component.html',
  styleUrls: ['./institution-content.component.scss'],
})
export class InstitutionContentComponent implements OnInit {

  my_inst: any = [];
  user_id: any = [];
  access_token: any = [];
  user_data : any =[];
  constructor(private institutionService: FindinstitutesService,
    private loader: LoaderService,
    private signinService: SigninService,
    private profileService: ProfileService,
    ) { }

  ngOnInit() {


    // this.signinService.getCurrentUser()
    //   .subscribe(data => {
    //     console.log(data);
    //     let user_data = data;
    //     this.user_id = user_data.id;

    //     this.institutionService.getMyInstitutions(this.user_id).subscribe(res => {
    //       console.log(res);
    //       this.my_inst = data;
    //     })
    //   }, err => {
    //     console.log(err);
    //   })




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
            this.my_inst = res1;
          })


        });



    });
  

}




}
