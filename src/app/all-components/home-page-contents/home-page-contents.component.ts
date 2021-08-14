import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page-contents',
  templateUrl: './home-page-contents.component.html',
  styleUrls: ['./home-page-contents.component.scss'],
})
export class HomePageContentsComponent implements OnInit {

  

  constructor() { }

  

  slideOpts = {
    initialSlide: 0,
    autoplay:true,
    freeMode: true,
    speed: 400,
    slidesPerView: 1,
    watchSlidesProgress: true,
    grabCursor: true,
    spaceBetween: 0,    
  };
  

  ngOnInit() {}

}
