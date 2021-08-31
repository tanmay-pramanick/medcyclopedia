import { Component, OnInit } from '@angular/core';
import { FindinstitutesService } from 'src/app/all-services/findinstitutes.service';
import { LoaderService } from 'src/app/all-services/loader.service';

@Component({
  selector: 'app-alerts-contents',
  templateUrl: './alerts-contents.component.html',
  styleUrls: ['./alerts-contents.component.scss'],
})
export class AlertsContentsComponent implements OnInit {

  alerts : any = [];
  alert_details : any = [];

  constructor(private loader : LoaderService,
    private instituteService : FindinstitutesService) { }

  ngOnInit() {
    this.loader.presentLoading();
    this.instituteService.getInstituteNotification("").subscribe(data =>{
      console.log(data);
      this.loader.hideLoading();
      this.alerts = data;
    })
  }

}
