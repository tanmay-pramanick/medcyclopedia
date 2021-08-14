import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyInstitutionsPage } from './my-institutions.page';

const routes: Routes = [
  {
    path: '',
    component: MyInstitutionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyInstitutionsPageRoutingModule {}
