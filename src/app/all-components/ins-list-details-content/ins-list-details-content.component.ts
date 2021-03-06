import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FindinstitutesService } from 'src/app/all-services/findinstitutes.service';
import { LoaderService } from 'src/app/all-services/loader.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { SigninService } from 'src/app/all-services/signin.service';
import { ProfileService } from 'src/app/all-services/profile.service';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { File, IWriteOptions } from '@ionic-native/file/ngx';
import { FileTransfer,FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { ToastController } from '@ionic/angular';
import { UtilService } from 'src/app/services/util.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

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
  clickSub: any;
  constructor(private location: Location,
    private findinstitute: FindinstitutesService,
    private loaderservice: LoaderService,
    private router: Router,
    private signinservice : SigninService,
    private profileservice: ProfileService,
    private toastController: ToastController,
    private nativeHTTP: HTTP, 
    private file: File,
    public util: UtilService,
    private localNotifications: LocalNotifications,
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

  interestInstitute(){
    this.util.show("Loading...");
    this.signinservice.getCurrentUser().subscribe(data => {
      console.log(data);
      this.token_detail = data;

      this.profileservice.getProfileData(this.token_detail.access_token).subscribe(res =>{
        this.user_detail = res;
        this.user_id = this.user_detail.id;

        this.findinstitute.interestInstitute(this.user_id, this.institute_id).subscribe(data =>{
          this.util.hide();
          this.router.navigate(['/institute-confirmation'])
        })
      })

    })
  }


  getPhotos(){
    this.router.navigate(['/photo-gallery'], {state :{id:this.institute_id }});
  }

  // ViewPDFFromUrl(url: string, filename: string) {
  //   let URL = this.uploadsUrl+'/'+url;
  //   this.fetching = true;
  //   let file = filename.replace(/ /g,'')
  //   const transfer: FileTransferObject = this.transfer.create();
  //   console.log('path', this.file.dataDirectory);
  //   transfer.download(URL, this.file.externalRootDirectory + '/Download/browchure.pdf').then((entry) => {
  //     const entryUrl = entry.toURL();
  //     console.log('entryUrl', entryUrl);
  //     this.fileOpen.open(entryUrl, 'application/pdf');
  //     console.log('open');
  //     this.displayToast();
  //     this.fetching = false;
  //   }, (error) => {
  //     this.displayToastFailure();
  //    console.log('Failed!', error);
  //    this.fetching = false;
  //   });

  // }

  downloadFileAndStore(url: string, filename: string) {
    //
    this.util.show("Downloading");
    let file = filename.replace(/ /g,'')
    const filePath = this.file.externalRootDirectory + '/Download/' + file+'.pdf'; 
    let URL = this.uploadsUrl+'/'+url;
    // for iOS use this.file.documentsDirectory
    console.log(URL, filePath);
    this.nativeHTTP.downloadFile(URL, {}, {}, filePath).then(response => {
       // prints 200
      this.util.hide()
      this.displayToast();
      const entryUrl = response.toURL();
      this.displayNotification(entryUrl);
      console.log('success block...', JSON.stringify(response));
    }).catch(err => {
        // prints 403
        this.util.hide()
        this.displayToastFailure();
    })
  }

  unsub() {
    this.clickSub.unsubscribe();
  }

  displayToast() {
    this.toastController.create({
      message: 'Brochure Downloaded Successfully',
      position: 'bottom',
      duration: 2000,
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

displayToastFailure() {
  this.toastController.create({

    message: 'Browchure data not saved',
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

  displayNotification(entryUrl){
  this.clickSub = this.localNotifications.on('click').subscribe(data => {
     this.fileOpen.open(entryUrl, 'application/pdf');
      this.unsub();
  });
  this.localNotifications.schedule({
    id: 1,
    text: 'Brochure has been downloaded successfully',
    sound: 'file://sound.mp3',
    data: { secret: 'key' }
  });
  }
}
