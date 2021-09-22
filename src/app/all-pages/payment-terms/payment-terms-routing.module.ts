import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentTermsPage } from './payment-terms.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentTermsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentTermsPageRoutingModule {}
