import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreExamPageRoutingModule } from './explore-exam-routing.module';

import { ExploreExamPage } from './explore-exam.page';
import { ExploreExamContentComponent } from 'src/app/all-components/explore-exam-content/explore-exam-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreExamPageRoutingModule
  ],
  declarations: [ExploreExamPage, ExploreExamContentComponent]
})
export class ExploreExamPageModule {}
