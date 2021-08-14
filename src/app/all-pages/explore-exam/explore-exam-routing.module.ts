import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExploreExamPage } from './explore-exam.page';

const routes: Routes = [
  {
    path: '',
    component: ExploreExamPage
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExploreExamPageRoutingModule {}
