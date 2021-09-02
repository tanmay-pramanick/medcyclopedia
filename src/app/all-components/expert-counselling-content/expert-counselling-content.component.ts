import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ToastController } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-expert-counselling-content',
  templateUrl: './expert-counselling-content.component.html',
  styleUrls: ['./expert-counselling-content.component.scss'],
})
export class ExpertCounsellingContentComponent implements OnInit {

  date : any;
  ptiming : any;
  radio : any;
  min_date : any;
  // current_time : Date = new Date();
  public minDate = moment().format();
  transform: any;
  time_flag1 : boolean = false;
  time_flag2 : boolean = false;
  time_flag3 : boolean = false;
  enterred_date: string;
  today: string;
  disable_all: boolean;



  constructor(public datepipe: DatePipe,
    private toastController : ToastController) { }

  ngOnInit() {
  }

  checkDateAndTime(){
    console.log("Time is changed");
    console.log(this.date);
    this.enterred_date = this.datepipe.transform(this.date, 'yyMMdd');
    console.log(this.enterred_date)

    let today_date = new Date();
    this.today = this.datepipe.transform(today_date, 'yyMMdd');
    console.log(this.today)

    if (this.enterred_date === this.today) {
      this.transform = this.datepipe.transform(today_date, 'HHMM');
      console.log(this.transform)
      if (Number.parseInt(this.transform) >= 1000) {
        this.time_flag1 = true;
        console.log("1")

      } else {
        this.time_flag1 = false;

      }
      if (Number.parseInt(this.transform) >= 1300) {
        this.time_flag2 = true;
        console.log("2")


      } else {
        this.time_flag2 = false;

      }
      if (Number.parseInt(this.transform) >= 1700) {
        this.time_flag3 = true;
        console.log("3")


      } else {
        this.time_flag3 = false;

      }
      this.disable_all = false;
    }
    else if (this.enterred_date < this.today) {
      // console.log("this date is long gone")
      this.disable_all = true;
      this.displayToast1();      

    }

  }

  getPrefTiming(event){
    console.log(event);
    // console.log(this.today);
    // console.log(this.current_time);
  }

  getPreferredMode(event){
    console.log(event);
  }

  getPreferredLanguages(event){
    console.log(event)
  }

  

  registerNow(){

    // console.log(this.min_date)
    console.log(this.date);
    console.log(this.ptiming)
    console.log(this.radio)
  }

  displayToast1() {
    this.toastController.create({

      message: 'You have enterred a past date',
      position: 'bottom',
      duration: 1500,
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
