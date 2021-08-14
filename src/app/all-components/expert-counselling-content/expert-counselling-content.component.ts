import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expert-counselling-content',
  templateUrl: './expert-counselling-content.component.html',
  styleUrls: ['./expert-counselling-content.component.scss'],
})
export class ExpertCounsellingContentComponent implements OnInit {

  date : Date;
  ptiming : string;
  min_date : Date = new Date();
  current_time : Date = new Date();
  // min_date: Date = new Date();

  constructor() { }

  ngOnInit() {}

  getPrefTiming(event){
    console.log(event);
    // console.log(this.today);
    console.log(this.current_time);
  }

  getPreferredMode(event){
    console.log(event);
  }

  getPreferredLanguages(event){
    console.log(event)
  }

  

  registerNow(){

    console.log(this.min_date)
    console.log(this.date);
    console.log(this.ptiming)
  }

  disable_time = false;

  disableTime(){

    if(this.current_time.getTime() > this.date.getTime()){
      this.disable_time = true;
    }
    // if(this.current_time.getTime() > this.date.getTime(){
    //   this.disable_time = true;
    // }
    // if(this.current_time.getTime() > this.date.getTime(){
    //   this.disable_time = true;
    // }
    

  }

}
