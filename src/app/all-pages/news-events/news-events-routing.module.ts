import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsEventsPage } from './news-events.page';

const routes: Routes = [
  {
    path: '',
    component: NewsEventsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsEventsPageRoutingModule {}
