import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamInstitutionsPageRoutingModule } from './exam-institutions-routing.module';

import { ExamInstitutionsPage } from './exam-institutions.page';
import { ExamInsContentComponent } from 'src/app/all-components/exam-ins-content/exam-ins-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamInstitutionsPageRoutingModule
  ],
  declarations: [ExamInstitutionsPage, ExamInsContentComponent]
})
export class ExamInstitutionsPageModule {}
