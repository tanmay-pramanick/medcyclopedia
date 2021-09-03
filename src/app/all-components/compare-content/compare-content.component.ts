import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/all-services/loader.service';

@Component({
  selector: 'app-compare-content',
  templateUrl: './compare-content.component.html',
  styleUrls: ['./compare-content.component.scss'],
})
export class CompareContentComponent implements OnInit {

  sectionOne:boolean= false;
  sectionTwo:boolean= false;
  sectionThree:boolean= false;
  active:boolean= false;
  active2:boolean= false;
  active3:boolean= false;
  colleges : any =[];
  loc: any;
  clg1: any;
  clg2: any;
  constructor(private location : Location,
    private loader : LoaderService) { }

  ngOnInit() {

    this.loc = this.location.getState();
    this.colleges = this.loc.colleges;

    if(this.colleges !== undefined || this.colleges !== null){
      this.clg1 = this.colleges[0];
      this.clg2 = this.colleges[1];
    }
  }


  courseOneClick(){
    this.sectionOne=!this.sectionOne;
    this.active=!this.active
  }
  courseTwoClick(){
    this.sectionTwo=!this.sectionTwo;
    this.active2=!this.active2
  }
  courseThreeClick(){
    this.sectionThree=!this.sectionThree;
    this.active3=!this.active3
  }

}
