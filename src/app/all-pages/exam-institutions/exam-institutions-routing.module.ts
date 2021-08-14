import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamInstitutionsPage } from './exam-institutions.page';

const routes: Routes = [
  {
    path: '',
    component: ExamInstitutionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamInstitutionsPageRoutingModule {}
