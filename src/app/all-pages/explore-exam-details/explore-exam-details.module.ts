import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreExamDetailsPageRoutingModule } from './explore-exam-details-routing.module';

import { ExploreExamDetailsPage } from './explore-exam-details.page';
import { ExploreExamDetailsContentComponent } from 'src/app/all-components/explore-exam-details-content/explore-exam-details-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreExamDetailsPageRoutingModule
  ],
  declarations: [ExploreExamDetailsPage, ExploreExamDetailsContentComponent]
})
export class ExploreExamDetailsPageModule {}
