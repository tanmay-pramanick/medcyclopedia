import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsEventsInnerPage } from './news-events-inner.page';

const routes: Routes = [
  {
    path: '',
    component: NewsEventsInnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsEventsInnerPageRoutingModule {}
