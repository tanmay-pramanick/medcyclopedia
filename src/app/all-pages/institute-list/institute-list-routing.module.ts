import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstituteListPage } from './institute-list.page';

const routes: Routes = [
  {
    path: '',
    component: InstituteListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstituteListPageRoutingModule {}
