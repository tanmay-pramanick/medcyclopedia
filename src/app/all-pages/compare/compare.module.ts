import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComparePageRoutingModule } from './compare-routing.module';

import { ComparePage } from './compare.page';
import { CompareContentComponent } from 'src/app/all-components/compare-content/compare-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComparePageRoutingModule
  ],
  declarations: [ComparePage, CompareContentComponent]
})
export class ComparePageModule {}
