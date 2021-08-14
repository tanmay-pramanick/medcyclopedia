import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FindinstitutesService } from 'src/app/all-services/findinstitutes.service';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/all-services/loader.service';

@Component({
  selector: 'app-institute-list-content',
  templateUrl: './institute-list-content.component.html',
  styleUrls: ['./institute-list-content.component.scss'],
})
export class InstituteListContentComponent implements OnInit {

  state_id: string;
  course_id : string;
  ownership_type : string;
  country_id : string;
  loc : any;
  all_institutes : any;
  // institute_id: string;

  constructor(private location:Location,
              private findinsttitutesservice: FindinstitutesService,
              private loaderservice : LoaderService,
              private router : Router) { }

  ngOnInit() {

    
    this.loc = this.location.getState();
    console.log(this.location.getState());

    this.loaderservice.presentLoading();

    this.country_id = this.loc.country_id;

    if(this.country_id === undefined){
     
      this.state_id = this.loc.state_id;
      this.course_id = this.loc.course_id;
      this.ownership_type=this.loc.ownership_type;
      
      this.findinsttitutesservice.findInstitutes(this.state_id, this.course_id, this.ownership_type).subscribe((res) =>{
        console.log(res);
        this.loaderservice.hideLoading();

        this.all_institutes = res;
      })
    }
    else {

      

      this.findinsttitutesservice.findInstituteCountryWise(this.country_id).subscribe(res =>{
        console.log(res);
        this.loaderservice.hideLoading();

        this.all_institutes = res;
      })

    }

    


  }

  viewMore(institute_id: string){
    // console.log(event.target)
    console.log(institute_id);
    this.router.navigate(['/institute-list-details'], {state : {institute_id :institute_id}});
  }


}
