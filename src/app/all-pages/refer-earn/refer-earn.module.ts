import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReferEarnPageRoutingModule } from './refer-earn-routing.module';

import { ReferEarnPage } from './refer-earn.page';
import { ReferEarnContentComponent } from 'src/app/all-components/refer-earn-content/refer-earn-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReferEarnPageRoutingModule
  ],
  declarations: [ReferEarnPage, ReferEarnContentComponent]
})
export class ReferEarnPageModule {}
