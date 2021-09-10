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
  bookig : any = {
    date:'',
    time:'',
    language:'',
    media:''
  };
  public minDate = moment().format();
  transform: any;
  time_flag1 : boolean = true;
  time_flag2 : boolean = true;
  time_flag3 : boolean = true;
  enterred_date: string;
  today: string;
  disable_all: boolean;



  constructor(public datepipe: DatePipe,
    private toastController : ToastController) { }

  ngOnInit() {
  }

  checkDateAndTime(){
    //console.log("Time is changed");
    this.enterred_date = this.datepipe.transform(this.bookig.date, 'yyMMdd');
    let today_date = new Date();
    this.today = this.datepipe.transform(today_date, 'yyMMdd');
    
    console.log(this.enterred_date,this.today)

    if (this.enterred_date === this.today) {
      this.time_flag1 = true;
      this.time_flag2 = true;
      this.time_flag3 = true;
      this.transform = this.datepipe.transform(today_date, 'HHMM');
      console.log("inday",this.transform)
      if (Number.parseInt(this.transform) <= 1000) {
        console.log("1")
        this.time_flag1 = false;
      }
      if (Number.parseInt(this.transform) <= 1300) {
        this.time_flag2 = false;
        console.log("2")
      }
      if (Number.parseInt(this.transform) <= 1700) {
        this.time_flag3 = false;
        console.log("3")
      }
    }
    else {
      console.log("this date is long gone")
      this.time_flag1 = false;
      this.time_flag2 = false;
      this.time_flag3 = false;
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
    console.log(this.bookig);
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
