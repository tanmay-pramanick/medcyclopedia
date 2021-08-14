import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyAlertsPage } from './my-alerts.page';

const routes: Routes = [
  {
    path: '',
    component: MyAlertsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyAlertsPageRoutingModule {}
