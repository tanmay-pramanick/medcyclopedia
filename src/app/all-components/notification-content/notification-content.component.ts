import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-content',
  templateUrl: './notification-content.component.html',
  styleUrls: ['./notification-content.component.scss'],
})
export class NotificationContentComponent implements OnInit {

  pop:boolean = false;

  constructor() { }

  popOpen(){
    this.pop = true;
  }
  popClose(){
    this.pop = false;
  }

  ngOnInit() {}

}
