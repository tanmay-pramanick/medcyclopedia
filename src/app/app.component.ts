import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
  menu: boolean = false;
  menuopen(){
    this.menu = !this.menu;
  }
  menuclose(){
    this.menu = false;
  }

}
