import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MbbsAbroadPage } from './mbbs-abroad.page';

const routes: Routes = [
  {
    path: '',
    component: MbbsAbroadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MbbsAbroadPageRoutingModule {}
