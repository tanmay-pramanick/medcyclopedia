import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CoursesService } from 'src/app/all-services/courses.service';
import { LoaderService } from 'src/app/all-services/loader.service';

@Component({
  selector: 'app-courses-content',
  templateUrl: './courses-content.component.html',
  styleUrls: ['./courses-content.component.scss'],
})
export class CoursesContentComponent implements OnInit {
  loc: any;
  id: any;
  courses : any;

  constructor(private location : Location,
    private courseservice : CoursesService,
    private loaderservice : LoaderService,
    private toastController : ToastController) { }

  ngOnInit() {
    this.loaderservice.presentLoading();
    this.loc = this.location.getState();
    this.id = this.loc.id;

    if(this.id === null || this.id === undefined){
      this.displayToast();
    }
    this.courseservice.getInstituteCourses(this.id).subscribe(data =>{
      console.log(data)
      this.loaderservice.hideLoading();
      this.courses = data;
    })
  }

  displayToast() {
    this.toastController.create({

      message: 'Please select your institute once again',
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

}
