import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FindinstitutesService } from 'src/app/all-services/findinstitutes.service';
import { LoaderService } from 'src/app/all-services/loader.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { SigninService } from 'src/app/all-services/signin.service';
import { ProfileService } from 'src/app/all-services/profile.service';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File, IWriteOptions } from '@ionic-native/file/ngx';
import { FileTransfer,FileTransferObject } from '@ionic-native/file-transfer/ngx';



@Component({
  selector: 'app-ins-list-details-content',
  templateUrl: './ins-list-details-content.component.html',
  styleUrls: ['./ins-list-details-content.component.scss'],
})
export class InsListDetailsContentComponent implements OnInit {

  institute_id: string;
  loc: any;
  institute_detail: any = [];
  uploadsUrl: any;
  fetching = true;
  token_detail  : any =[];
  user_id : any;
  like : boolean = false;
  user_detail: any = [];
  like_counter: any;
  active: boolean= false;
  view_button_hide: boolean= true;

  constructor(private location: Location,
    private findinstitute: FindinstitutesService,
    private loaderservice: LoaderService,
    private router: Router,
    private signinservice : SigninService,
    private profileservice: ProfileService,
    private file: File,
    private fileOpen: FileOpener,
    private transfer : FileTransfer) {
    this.uploadsUrl = environment.uploadsUrl;

  }

  ngOnInit() {

    this.loc = this.location.getState();

    this.loaderservice.presentLoading();

    this.institute_id = this.loc.institute_id;
    // this.user_id = this.loc.user_id;
    this.findinstitute.findInstituteById(this.institute_id).subscribe(res => {
      console.log(res);
      this.loaderservice.hideLoading();
      this.institute_detail = res;
      this.like_counter = this.institute_detail.likecount;
    })

  }

  viewmore_details(){
    this.active= true;
    this.view_button_hide= false;
  }

  getInstituteCourses() {

    this.router.navigate(['/courses'], { state: { id: this.institute_id } })
  }

  likeInstitute(){

    this.signinservice.getCurrentUser().subscribe(data => {
      console.log(data);
      this.token_detail = data;

      this.profileservice.getProfileData(this.token_detail.access_token).subscribe(res =>{
        this.user_detail = res;
        this.user_id = this.user_detail.id;

        this.findinstitute.getLikedInstitute(this.user_id, this.institute_id).subscribe(data =>{
          console.log(data);
          this.like_counter = this.like_counter+1;
          this.like = true;
        })
        
      })

    })
    
  }

  getPhotos(){
    this.router.navigate(['/photo-gallery'], {state :{id:this.institute_id }});
  }

  ViewPDFFromUrl(URL: string, filename: string) {

    this.fetching = true;
    console.log(URL);
    filename = filename + new Date().toISOString();
    const transfer: FileTransferObject = this.transfer.create();
    transfer.download(URL, this.file.dataDirectory + `${filename}.pdf`).then((entry) => {
      const entryUrl = entry.toURL();
      this.fileOpen.open(entryUrl, 'application/pdf');
      this.fetching = false;
    }, (error) => {
     console.log('Failed!', error);
     this.fetching = false;
    });

  }

}
