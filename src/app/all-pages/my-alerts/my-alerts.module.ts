import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyAlertsPageRoutingModule } from './my-alerts-routing.module';

import { MyAlertsPage } from './my-alerts.page';
import { AlertsContentsComponent } from 'src/app/all-components/alerts-contents/alerts-contents.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyAlertsPageRoutingModule
  ],
  declarations: [MyAlertsPage, AlertsContentsComponent]
})
export class MyAlertsPageModule {}
