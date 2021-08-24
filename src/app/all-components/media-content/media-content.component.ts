import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/all-services/loader.service';
import { MediaService } from 'src/app/all-services/media.service';

@Component({
  selector: 'app-media-content',
  templateUrl: './media-content.component.html',
  styleUrls: ['./media-content.component.scss'],
})
export class MediaContentComponent implements OnInit {

  medias : any = [];
  constructor(private mediaService: MediaService,
    private loader : LoaderService) { }

  ngOnInit() {
    this.loader.presentLoading();
    this.mediaService.getMedia().subscribe(data => {
      this.medias = data;
      this.loader.hideLoading();
    });
  }

}
