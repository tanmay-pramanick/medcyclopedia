import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstituteConfirmationPageRoutingModule } from './institute-confirmation-routing.module';

import { InstituteConfirmationPage } from './institute-confirmation.page';
import { InsConfirmationContentComponent } from 'src/app/all-components/ins-confirmation-content/ins-confirmation-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstituteConfirmationPageRoutingModule
  ],
  declarations: [InstituteConfirmationPage, InsConfirmationContentComponent]
})
export class InstituteConfirmationPageModule {}
