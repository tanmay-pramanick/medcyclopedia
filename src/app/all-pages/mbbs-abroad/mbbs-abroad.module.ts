import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MbbsAbroadPageRoutingModule } from './mbbs-abroad-routing.module';

import { MbbsAbroadPage } from './mbbs-abroad.page';
import { MbbsAbroadContentComponent } from 'src/app/all-components/mbbs-abroad-content/mbbs-abroad-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MbbsAbroadPageRoutingModule
  ],
  declarations: [MbbsAbroadPage, MbbsAbroadContentComponent]
})
export class MbbsAbroadPageModule {}
