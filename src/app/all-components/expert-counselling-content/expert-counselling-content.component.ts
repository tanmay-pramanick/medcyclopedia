import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-expert-counselling-content',
  templateUrl: './expert-counselling-content.component.html',
  styleUrls: ['./expert-counselling-content.component.scss'],
})
export class ExpertCounsellingContentComponent implements OnInit {

  date : Date;
  ptiming : any;
  radio : any;
  min_date : Date = new Date();
  // current_time : Date = new Date();
  transform: any;
  time_flag1 : boolean = false;
  time_flag2 : boolean = false;
  time_flag3 : boolean = false;



  constructor(public datepipe: DatePipe) { }

  ngOnInit() {
    let date_now = new Date();
    this.transform = this.datepipe.transform(date_now, 'HHMM');
    console.log(this.transform);

    if(Number.parseInt(this.transform) >= 5){
      this.time_flag1 = true;
      console.log("1")

    }
    if(Number.parseInt(this.transform) >= 1300){
      this.time_flag2 = true;
      console.log("2")


    }
    if(Number.parseInt(this.transform) >= 1700){
      this.time_flag3 = true;
      console.log("3")


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

}
