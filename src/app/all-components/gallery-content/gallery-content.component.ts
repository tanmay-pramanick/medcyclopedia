import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FindinstitutesService } from 'src/app/all-services/findinstitutes.service';
import { LoaderService } from 'src/app/all-services/loader.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-gallery-content',
  templateUrl: './gallery-content.component.html',
  styleUrls: ['./gallery-content.component.scss'],
})
export class GalleryContentComponent implements OnInit {
  uploadsUrl: any;
  loc: any;
  institute_id: any;
  ins_photos: any = [];

  constructor(private location: Location,
    private findinstitute: FindinstitutesService,
    private loaderservice: LoaderService) { 
      this.uploadsUrl = environment.uploadsUrl;

    }

  ngOnInit() {
    this.loc = this.location.getState();

    this.loaderservice.presentLoading();

    this.institute_id = this.loc.id;

    try{
      this.findinstitute.getInstituteGallery(this.institute_id).subscribe(res => {
        console.log(res);
        this.loaderservice.hideLoading();
        this.ins_photos = res;
      })
    }catch(err){
      console.log(err)
      this.loaderservice.hideLoading();
    }
    
  }

}
