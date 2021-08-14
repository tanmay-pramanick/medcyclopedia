import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindInstitutionsFormPage } from './find-institutions-form.page';

const routes: Routes = [
  {
    path: '',
    component: FindInstitutionsFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindInstitutionsFormPageRoutingModule {}
