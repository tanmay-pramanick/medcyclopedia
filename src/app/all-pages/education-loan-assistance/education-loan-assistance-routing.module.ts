import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EducationLoanAssistancePage } from './education-loan-assistance.page';

const routes: Routes = [
  {
    path: '',
    component: EducationLoanAssistancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EducationLoanAssistancePageRoutingModule {}
