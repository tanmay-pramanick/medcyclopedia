import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/all-services/loader.service';
import { NewseventService } from 'src/app/all-services/newsevent.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-news-events-content',
  templateUrl: './news-events-content.component.html',
  styleUrls: ['./news-events-content.component.scss'],
})
export class NewsEventsContentComponent implements OnInit {

  uploadsUrl : any;

  news_events : any = [];
  constructor(private newseventService  : NewseventService,
              private loaderservice : LoaderService,
              private router : Router) { 

                this.uploadsUrl = environment.uploadsUrl;
              }

  ngOnInit() {

    this.loaderservice.presentLoading();
    
    this.newseventService.getNewsEvents().subscribe(res => {
      console.log(res);
      this.loaderservice.hideLoading();
      this.news_events = res;
    })
  }

  viewNewsEvents(news_event : any){

    this.router.navigate(['/news-events-inner'], {state : {news_event : news_event}})
  }

}
