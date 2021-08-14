import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailedPageViewPage } from './detailed-page-view.page';

const routes: Routes = [
  {
    path: '',
    component: DetailedPageViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailedPageViewPageRoutingModule {}
