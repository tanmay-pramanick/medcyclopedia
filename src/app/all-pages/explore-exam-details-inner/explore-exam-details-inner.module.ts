import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreExamDetailsInnerPageRoutingModule } from './explore-exam-details-inner-routing.module';

import { ExploreExamDetailsInnerPage } from './explore-exam-details-inner.page';
import { ExploreExamDetailsContentInnerComponent } from 'src/app/all-components/explore-exam-details-content-inner/explore-exam-details-content-inner.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreExamDetailsInnerPageRoutingModule
  ],
  declarations: [ExploreExamDetailsInnerPage, ExploreExamDetailsContentInnerComponent ]
})
export class ExploreExamDetailsInnerPageModule {}
