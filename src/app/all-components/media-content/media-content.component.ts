import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/all-services/loader.service';
import { MediaService } from 'src/app/all-services/media.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-media-content',
  templateUrl: './media-content.component.html',
  styleUrls: ['./media-content.component.scss'],
})
export class MediaContentComponent implements OnInit {

  medias : any = [];
  uploadsUrl : any;

  constructor(private mediaService: MediaService,
    private loader : LoaderService,
    private router: Router) { 
      this.uploadsUrl = environment.uploadsUrl;
    }

  ngOnInit() {
    this.loader.presentLoading();
    this.mediaService.getMedia().subscribe(data => {
      this.loader.hideLoading();
      this.medias = data;
      console.log(data);
      
    });
  }

  viewMedia(media : any){

    this.router.navigate(['/media-inner'], {state : {media : media}})
  }


}
