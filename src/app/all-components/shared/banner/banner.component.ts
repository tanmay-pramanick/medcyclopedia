import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {

  images = ['b-slide1.png', 'b-slide2.png', 'b-slide3.png', 'b-slide4.png', 'b-slide5.png'];
  constructor() {}

  ngOnInit() {

    
  }

}
