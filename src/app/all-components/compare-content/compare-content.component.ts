import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {}


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
