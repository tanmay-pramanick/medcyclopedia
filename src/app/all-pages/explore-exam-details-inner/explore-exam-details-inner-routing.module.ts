import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExploreExamDetailsInnerPage } from './explore-exam-details-inner.page';

const routes: Routes = [
  {
    path: '',
    component: ExploreExamDetailsInnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExploreExamDetailsInnerPageRoutingModule {}
