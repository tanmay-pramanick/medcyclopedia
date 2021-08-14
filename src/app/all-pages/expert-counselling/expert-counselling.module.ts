import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpertCounsellingPageRoutingModule } from './expert-counselling-routing.module';

import { ExpertCounsellingPage } from './expert-counselling.page';
import { ExpertCounsellingContentComponent } from 'src/app/all-components/expert-counselling-content/expert-counselling-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpertCounsellingPageRoutingModule
  ],
  declarations: [ExpertCounsellingPage, ExpertCounsellingContentComponent]
})
export class ExpertCounsellingPageModule {}
