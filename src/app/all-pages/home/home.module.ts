import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { HomePageContentsComponent } from 'src/app/all-components/home-page-contents/home-page-contents.component';
import { ServiceListComponent } from 'src/app/all-components/home-page-contents/service-list/service-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, HomePageContentsComponent, ServiceListComponent]
})
export class HomePageModule {}
