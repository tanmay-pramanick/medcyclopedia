import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScholarshipsPageRoutingModule } from './scholarships-routing.module';

import { ScholarshipsPage } from './scholarships.page';
import { ScholarshipsContentComponent } from 'src/app/all-components/scholarships-content/scholarships-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScholarshipsPageRoutingModule
  ],
  declarations: [ScholarshipsPage, ScholarshipsContentComponent]
})
export class ScholarshipsPageModule {}
