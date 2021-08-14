import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstituteListDetailsPage } from './institute-list-details.page';

const routes: Routes = [
  {
    path: '',
    component: InstituteListDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstituteListDetailsPageRoutingModule {}
