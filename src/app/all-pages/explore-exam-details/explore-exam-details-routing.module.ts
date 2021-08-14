import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExploreExamDetailsPage } from './explore-exam-details.page';

const routes: Routes = [
  {
    path: '',
    component: ExploreExamDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExploreExamDetailsPageRoutingModule {}
