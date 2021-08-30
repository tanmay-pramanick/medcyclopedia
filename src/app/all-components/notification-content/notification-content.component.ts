import { Component, OnInit } from '@angular/core';
import { FindinstitutesService } from 'src/app/all-services/findinstitutes.service';
import { LoaderService } from 'src/app/all-services/loader.service';
import { Browser } from '@capacitor/browser';


@Component({
  selector: 'app-notification-content',
  templateUrl: './notification-content.component.html',
  styleUrls: ['./notification-content.component.scss'],
})
export class NotificationContentComponent implements OnInit {

  pop:boolean = false;
  notifications : any = [];
  notification_details : any = [];

  constructor(private loader : LoaderService,
    private instituteService : FindinstitutesService) { }

  popOpen(notification){
    this.notification_details = notification;
    this.pop = true;
  }
  popClose(){
    this.pop = false;
  }

  ngOnInit() {
    this.loader.presentLoading();
    this.instituteService.getInstituteNotification("").subscribe(data =>{
      console.log(data);
      this.loader.hideLoading();
      this.notifications = data;
    })
  }

  async view(url : string){
    console.log(url)
    await Browser.open({url :url});
  }

}
