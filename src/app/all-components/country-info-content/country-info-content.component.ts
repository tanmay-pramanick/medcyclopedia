import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/all-services/countries.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/all-services/loader.service';
// import { type } from 'os';



@Component({
  selector: 'app-country-info-content',
  templateUrl: './country-info-content.component.html',
  styleUrls: ['./country-info-content.component.scss'],
})
export class CountryInfoContentComponent implements OnInit {


  allCountry : any = [];
  loc : any = [];
  country : any = [];
  country_id : string;
  constructor(private countryService : CountriesService,
              private location : Location,
              private loaderservice : LoaderService,
              private router : Router) { }

  ngOnInit() {

    this.loc = this.location.getState();

    this.loaderservice.presentLoading();

    this.country_id = this.loc.country_id;
    console.log("The country id in country info is "+this.country_id);
    this.countryService.getCountries().subscribe((data) => {
      console.log(data);
      this.loaderservice.hideLoading();
      this.allCountry = data;
      // console.log(typeof(this.allCountry.id)+" "+typeof(this.country_id));
      this.country = this.allCountry.find(x => x.id === this.country_id);
      console.log(this.country);
    });

    
  }

  continue(id){
    console.log("Continuing the country with id "+id);

    this.router.navigate(['/institute-list'], { state: { country_id:id} });

    
  }

}
