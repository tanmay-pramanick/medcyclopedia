import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeforeLoginAboutusPage } from './before-login-aboutus.page';

const routes: Routes = [
  {
    path: '',
    component: BeforeLoginAboutusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeforeLoginAboutusPageRoutingModule {}
