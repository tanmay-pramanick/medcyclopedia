import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursedetailsService } from 'src/app/all-services/coursedetails.service';
import { FindinstitutesService } from 'src/app/all-services/findinstitutes.service';
import { LoaderService } from 'src/app/all-services/loader.service';
import { StatesService } from 'src/app/all-services/states.service';

@Component({
  selector: 'app-institutions-form-content',
  templateUrl: './institutions-form-content.component.html',
  styleUrls: ['./institutions-form-content.component.scss'],
})
export class InstitutionsFormContentComponent implements OnInit {

  allStates : any;
  ownership_type : string;
  state_id : string;

  constructor(private stateService : StatesService,
              private coursedetailsservice : CoursedetailsService,
              private findinsttitutesservice : FindinstitutesService,
              private loaderservice : LoaderService,
              private router : Router) { }

  ngOnInit() {

    console.log(this.coursedetailsservice.getCourseId());
    this.loaderservice.presentLoading();
    this.stateService.getStates().subscribe(res => {
      console.log(res);
      this.loaderservice.hideLoading();
      this.allStates = res;
    })
  }

  getManagement(ownership : string){
    console.log(ownership);
    this.ownership_type = ownership;
  }


  findInstitutes(){

    console.log(this.state_id);
    console.log(this.ownership_type);
   // this.findinsttitutesservice.findInstitutes(this.state_id, this.coursedetailsservice.getCourseId(), this.ownership_type);
    this.router.navigate(['/institute-list'], { state: { state_id:this.state_id , ownership_type:this.ownership_type, course_id: this.coursedetailsservice.getCourseId()} });
  }

}
