import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { LoaderService } from 'src/app/all-services/loader.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-news-events-inner-content',
  templateUrl: './news-events-inner-content.component.html',
  styleUrls: ['./news-events-inner-content.component.scss'],
})
export class NewsEventsInnerContentComponent implements OnInit {

  loc : any;
  news_event : any;
  uploadsUrl : any;
  constructor(private location : Location,
    private loaderservice : LoaderService) {

      this.uploadsUrl = environment.uploadsUrl;

     }

  ngOnInit() {

    this.loaderservice.presentLoading();
    this.loc = this.location.getState();
    this.news_event = this.loc.news_event;
    this.loaderservice.hideLoading();
    console.log(this.news_event)


  }

  async view(url : string){
    await Browser.open({url : url});
  }


}
