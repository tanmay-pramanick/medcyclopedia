import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupSecondPagePage } from './signup-second-page.page';

const routes: Routes = [
  {
    path: '',
    component: SignupSecondPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupSecondPagePageRoutingModule {}
