import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailedPageViewPageRoutingModule } from './detailed-page-view-routing.module';

import { DetailedPageViewPage } from './detailed-page-view.page';
import { DetailedPageViewContentComponent } from 'src/app/all-components/detailed-page-view-content/detailed-page-view-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailedPageViewPageRoutingModule
  ],
  declarations: [DetailedPageViewPage, DetailedPageViewContentComponent]
})
export class DetailedPageViewPageModule {}
