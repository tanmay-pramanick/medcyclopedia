import { Component, OnInit } from '@angular/core';
import { FindinstitutesService } from 'src/app/all-services/findinstitutes.service';
import { LoaderService } from 'src/app/all-services/loader.service';

@Component({
  selector: 'app-success-contents',
  templateUrl: './success-contents.component.html',
  styleUrls: ['./success-contents.component.scss'],
})
export class SuccessContentsComponent implements OnInit {

  success : any = [];
  alert_details : any = [];

  constructor(private loader : LoaderService,
    private instituteService : FindinstitutesService) { }

  ngOnInit() {
    this.loader.presentLoading();
    this.instituteService.getInstituteNotification("").subscribe(data =>{
      console.log(data);
      this.loader.hideLoading();
      this.success = data;
    })
  }

}
