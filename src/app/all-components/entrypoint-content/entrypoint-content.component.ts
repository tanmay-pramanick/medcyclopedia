import { Component, OnInit } from '@angular/core';
import { IonSlides} from '@ionic/angular';

@Component({
  selector: 'app-entrypoint-content',
  templateUrl: './entrypoint-content.component.html',
  styleUrls: ['./entrypoint-content.component.scss'],
})
export class EntrypointContentComponent implements OnInit {

  

  
  constructor() { }

  slideOpts = {
    initialSlide: 0,
    autoplay:false,
    freeMode: false,
    speed: 400,
    slidesPerView: 1,
    watchSlidesProgress: true,
    grabCursor: true,
    spaceBetween: 0,    
  };

  ngOnInit() {
    
  }

  

  
  

  

}

