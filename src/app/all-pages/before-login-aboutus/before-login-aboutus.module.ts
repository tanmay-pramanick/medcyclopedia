import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeforeLoginAboutusPageRoutingModule } from './before-login-aboutus-routing.module';

import { BeforeLoginAboutusPage } from './before-login-aboutus.page';
import { BeforeLoginAboutusContentComponent } from 'src/app/all-components/before-login-aboutus-content/before-login-aboutus-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeforeLoginAboutusPageRoutingModule
  ],
  declarations: [BeforeLoginAboutusPage, BeforeLoginAboutusContentComponent]
})
export class BeforeLoginAboutusPageModule {}
