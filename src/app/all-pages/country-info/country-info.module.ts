import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CountryInfoPageRoutingModule } from './country-info-routing.module';

import { CountryInfoPage } from './country-info.page';
import { CountryInfoContentComponent } from 'src/app/all-components/country-info-content/country-info-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CountryInfoPageRoutingModule
  ],
  declarations: [CountryInfoPage, CountryInfoContentComponent]
})
export class CountryInfoPageModule {}
