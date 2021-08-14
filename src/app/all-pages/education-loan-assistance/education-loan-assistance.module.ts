import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EducationLoanAssistancePageRoutingModule } from './education-loan-assistance-routing.module';

import { EducationLoanAssistancePage } from './education-loan-assistance.page';
import { EducationLoanAssistanceContentComponent } from 'src/app/all-components/education-loan-assistance-content/education-loan-assistance-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EducationLoanAssistancePageRoutingModule
  ],
  declarations: [EducationLoanAssistancePage, EducationLoanAssistanceContentComponent]
})
export class EducationLoanAssistancePageModule {}
