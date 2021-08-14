import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountriesService } from 'src/app/all-services/countries.service';
import { LoaderService } from 'src/app/all-services/loader.service';

@Component({
  selector: 'app-mbbs-abroad-content',
  templateUrl: './mbbs-abroad-content.component.html',
  styleUrls: ['./mbbs-abroad-content.component.scss'],
})
export class MbbsAbroadContentComponent implements OnInit {

  allCountries : any = [];

  constructor(private countriesService : CountriesService,
              private loaderservice : LoaderService,
              private router : Router) { }

  ngOnInit() {

    this.loaderservice.presentLoading();

    this.countriesService.getCountries().subscribe(res =>{
      console.log(res);
      this.loaderservice.hideLoading();
      this.allCountries = res;
    })
  }

  getCountry(countryid :string){
    console.log(countryid);
    // [routerLink]="['/country-info']"
    this.router.navigate(['/country-info'], {state:{ country_id : countryid}});
  }

}
