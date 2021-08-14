import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstituteConfirmationPage } from './institute-confirmation.page';

const routes: Routes = [
  {
    path: '',
    component: InstituteConfirmationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstituteConfirmationPageRoutingModule {}
