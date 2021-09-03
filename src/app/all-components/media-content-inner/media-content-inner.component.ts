import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { LoaderService } from 'src/app/all-services/loader.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-media-content-inner',
  templateUrl: './media-content-inner.component.html',
  styleUrls: ['./media-content-inner.component.scss'],
})
export class MediaContentInnerComponent implements OnInit {
  loc : any;
  media : any;
  uploadsUrl : any;

  constructor(private location : Location,
    private loaderservice : LoaderService) {
      this.uploadsUrl = environment.uploadsUrl;
      
     }

  ngOnInit() {
    this.loaderservice.presentLoading();
    this.loc = this.location.getState();
    console.log(this.loc);
    this.media = this.loc.media;
    this.loaderservice.hideLoading();
    console.log(this.media);
  }

  async view(url : string){
    console.log(url)
    await Browser.open({url : url});
  }

}
