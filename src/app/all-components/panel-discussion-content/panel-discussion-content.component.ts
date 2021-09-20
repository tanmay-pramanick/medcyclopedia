import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/all-services/loader.service';
import { PanelDiscussionService } from 'src/app/all-services/panel-discussion.service';
import { environment } from 'src/environments/environment';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-panel-discussion-content',
  templateUrl: './panel-discussion-content.component.html',
  styleUrls: ['./panel-discussion-content.component.scss'],
})
export class PanelDiscussionContentComponent implements OnInit {

  past_panel : any = [];
  upcoming_panel : any = [];
  uploadsUrl: string;
  constructor(private panelService: PanelDiscussionService,
    private loader : LoaderService,
    private toastController: ToastController
    ) {
      this.uploadsUrl = environment.uploadsUrl;
     }

  ngOnInit() {
    this.loader.presentLoading();
    this.panelService.getPastPanelDiscussion().subscribe(data => {
      console.log(data);
      this.past_panel = data;
    })

    this.panelService.getUpcomingPanelDiscussion().subscribe(data =>{
      console.log(data);
      this.upcoming_panel = data;
    })
    this.loader.hideLoading();
  }

  openlink(url){
    if(url.length > 0){
      window.open(url);
    } else {

    }
  }

  displayToastFailure() {
    this.toastController.create({

      message: 'Profile data not saved',
      duration : 2000,
      position: 'bottom',
      buttons: [
        {
          side: 'end',
          icon: 'close-outline',
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
