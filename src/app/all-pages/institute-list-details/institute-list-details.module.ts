import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstituteListDetailsPageRoutingModule } from './institute-list-details-routing.module';

import { InstituteListDetailsPage } from './institute-list-details.page';
import { InsListDetailsContentComponent } from 'src/app/all-components/ins-list-details-content/ins-list-details-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstituteListDetailsPageRoutingModule
  ],
  declarations: [InstituteListDetailsPage, InsListDetailsContentComponent]
})
export class InstituteListDetailsPageModule {}
