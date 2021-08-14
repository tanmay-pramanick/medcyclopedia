import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyActivityPageRoutingModule } from './my-activity-routing.module';

import { MyActivityPage } from './my-activity.page';
import { ActivityContentComponent } from 'src/app/all-components/activity-content/activity-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyActivityPageRoutingModule
  ],
  declarations: [MyActivityPage, ActivityContentComponent]
})
export class MyActivityPageModule {}
