import { Component, OnInit } from '@angular/core';
import { SigninService } from 'src/app/all-services/signin.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss'],
})
export class ServiceListComponent implements OnInit {

  user : any;

  constructor(private signinservice : SigninService) { }

  ngOnInit() {

  }



}
