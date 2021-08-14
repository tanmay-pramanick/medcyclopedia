import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupFirstStepPage } from './signup-first-step.page';

const routes: Routes = [
  {
    path: '',
    component: SignupFirstStepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupFirstStepPageRoutingModule {}
