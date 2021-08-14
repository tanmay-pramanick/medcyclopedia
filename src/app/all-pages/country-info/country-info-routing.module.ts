import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountryInfoPage } from './country-info.page';

const routes: Routes = [
  {
    path: '',
    component: CountryInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountryInfoPageRoutingModule {}
