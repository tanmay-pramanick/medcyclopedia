import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentTermsPageRoutingModule } from './payment-terms-routing.module';

import { PaymentTermsPage } from './payment-terms.page';
import { PaymentTermsContentComponent } from 'src/app/all-components/payment-terms-content/payment-terms-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentTermsPageRoutingModule
  ],
  declarations: [PaymentTermsPage, PaymentTermsContentComponent]
})
export class PaymentTermsPageModule {}
