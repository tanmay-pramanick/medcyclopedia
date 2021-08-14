import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpertCounsellingPage } from './expert-counselling.page';

const routes: Routes = [
  {
    path: '',
    component: ExpertCounsellingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpertCounsellingPageRoutingModule {}
